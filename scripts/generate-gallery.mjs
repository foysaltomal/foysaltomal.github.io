import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const photosDir = path.join(process.cwd(), "public", "photos");
const outputFile = path.join(process.cwd(), "app", "gallery-data.json");
const captionsFile = path.join(photosDir, "captions.json");
const imagePattern = /\.(avif|gif|jpe?g|png|webp|bmp)$/i;
let captions = {};
try { captions = JSON.parse(await readFile(captionsFile, "utf8")); }
catch (error) { if (error.code !== "ENOENT") throw error; }
let files = [];
try { files = await readdir(photosDir, { withFileTypes: true }); }
catch (error) { if (error.code !== "ENOENT") throw error; }
const gallery = files
  .filter((entry) => entry.isFile() && imagePattern.test(entry.name) && captions[entry.name]?.enabled !== false)
  .map((entry) => {
    const meta = captions[entry.name] ?? {};
    return {
      filename: entry.name,
      src: `/photos/${encodeURIComponent(entry.name)}`,
      title: meta.title || "",
      caption: meta.caption || "",
      date: meta.date || "",
      category: meta.category || "Special Moments",
      location: meta.location || "",
    };
  })
  .sort((a, b) => (b.date || "").localeCompare(a.date || "") || a.filename.localeCompare(b.filename));
await writeFile(outputFile, JSON.stringify(gallery, null, 2) + "\n");
console.log(`Prepared ${gallery.length} photo(s) for the gallery.`);
