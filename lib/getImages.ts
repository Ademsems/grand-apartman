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
    const images = entries.filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()));

    // Identify thumbnail file (name without extension = "thumbnail", case-insensitive)
    const thumbnailFile = images.find(
      (f) => path.basename(f, path.extname(f)).toLowerCase() === "thumbnail"
    );
    const rest = images.filter((f) => f !== thumbnailFile).sort();
    const ordered = thumbnailFile ? [thumbnailFile, ...rest] : rest;

    return ordered.map((f) => `/${folderRelPath}/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}
