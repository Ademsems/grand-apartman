/**
 * Logo generation script
 *
 * Takes Simon_logo_1.jpg (gold filigree on white background) from the repo root,
 * knocks out near-white pixels to transparent, crops transparent margins, and
 * outputs:
 *   /public/logo.png          — transparent PNG (for use on any background)
 *   /public/favicon.ico       — 32×32 favicon (via sharp)
 *   /public/apple-touch-icon.png — 180×180 Apple touch icon
 *
 * Run: node scripts/generate-logo.js
 * Or:  npm run logo
 *
 * Requires: sharp (already a devDependency)
 */

const path = require("path");
const fs = require("fs");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "Simon_logo_1.jpg");
const OUT_LOGO = path.join(ROOT, "public", "logo.png");
const OUT_FAVICON = path.join(ROOT, "public", "favicon.ico");
const OUT_APPLE = path.join(ROOT, "public", "apple-touch-icon.png");

async function run() {
  if (!fs.existsSync(SRC)) {
    console.warn(
      "⚠️  Logo source file not found: Simon_logo_1.jpg\n" +
        "   Skipping logo generation. Falling back to text wordmark in the UI.\n" +
        "   Place the logo file in the project root and re-run: npm run logo"
    );
    return;
  }

  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.error("❌  sharp not installed. Run: npm install\n");
    process.exit(1);
  }

  console.log("⚙️  Processing logo…");

  // Step 1: Decode to raw RGBA pixels
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Step 2: Knock out near-white pixels
  // Threshold: pixels where R,G,B are all > 230 become transparent.
  const WHITE_THRESHOLD = 230;
  const buf = Buffer.from(data);

  for (let i = 0; i < buf.length; i += channels) {
    const r = buf[i];
    const g = buf[i + 1];
    const b = buf[i + 2];
    if (r > WHITE_THRESHOLD && g > WHITE_THRESHOLD && b > WHITE_THRESHOLD) {
      buf[i + 3] = 0; // alpha = transparent
    }
  }

  // Step 3: Re-encode to PNG with trimming
  const withAlpha = await sharp(buf, { raw: { width, height, channels } })
    .png()
    .trim({ threshold: 5 })  // crop transparent margins
    .toBuffer();

  // Step 4: Save full-size transparent PNG
  fs.writeFileSync(OUT_LOGO, withAlpha);
  console.log(`✅  Saved: public/logo.png`);

  // Step 5: Generate favicon (32×32)
  await sharp(withAlpha).resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(OUT_FAVICON);
  console.log(`✅  Saved: public/favicon.ico`);

  // Step 6: Apple touch icon (180×180)
  await sharp(withAlpha)
    .resize(180, 180, { fit: "contain", background: { r: 251, g: 248, b: 242, alpha: 1 } })
    .toFile(OUT_APPLE);
  console.log(`✅  Saved: public/apple-touch-icon.png`);

  // Step 7: favicon SVG wrapper (optional, best-effort)
  const faviconSvgPath = path.join(ROOT, "public", "favicon.svg");
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><text y="28" font-size="28" font-family="serif">G</text></svg>`;
  fs.writeFileSync(faviconSvgPath, faviconSvg);

  console.log("\n✨  Logo generation complete.");
}

run().catch((err) => {
  console.error("❌  Logo generation failed:", err);
  process.exit(1);
});
