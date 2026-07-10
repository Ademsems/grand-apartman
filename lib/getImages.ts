import fs from "fs";
import path from "path";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

/**
 * Returns public URLs for every image file found in the given folder
 * (relative to /public, e.g. "images/hero").
 * Returns [] if the folder doesn't exist or any error occurs.
 */
export function getImages(folderRelPath: string): string[] {
  try {
    const absFolder = path.join(process.cwd(), "public", folderRelPath);
    const entries = fs.readdirSync(absFolder);
    return entries
      .filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return IMAGE_EXTS.has(ext);
      })
      .sort()
      .map((f) => `/${folderRelPath}/${f}`);
  } catch {
    return [];
  }
}
