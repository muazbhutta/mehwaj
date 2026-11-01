// ============================================================================
// Favicon generator M.W. & Co., Chartered Accountants
// Builds the full favicon set from the MW monogram, keeping a solid espresso
// brown circle background with a gold ring so it reads clearly in browser tabs.
//
//   Run with:  npm run gen:favicons
//   Requires:  sharp, png-to-ico  (dev dependencies)
// ============================================================================

import sharp from "sharp";
import pngToIco from "png-to-ico";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdir, writeFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SOURCE_LOGO = join(ROOT, "public", "images", "mw-logo.png");
const PUBLIC_DIR = join(ROOT, "public");
const APP_DIR = join(ROOT, "app");

// Brand tokens
const ESPRESSO = "#2B1B10";
const GOLD = "#C79A4B";
const CHAMPAGNE = "#E5C87E";
const BRONZE = "#A87B33";

/**
 * Build a single icon PNG at the requested size:
 *   solid brown circle + gold ring, with the MW monogram centered on top.
 */
async function buildIcon(size) {
  const stroke = Math.max(1, Math.round(size * 0.045));
  const r = size / 2 - stroke;

  const background = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${BRONZE}" />
          <stop offset="50%" stop-color="${CHAMPAGNE}" />
          <stop offset="100%" stop-color="${GOLD}" />
        </linearGradient>
      </defs>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="${ESPRESSO}" />
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none"
              stroke="url(#goldRing)" stroke-width="${stroke}" />
    </svg>
  `);

  // Scale the monogram to sit comfortably inside the circle.
  const logoSize = Math.round(size * 0.74);
  const logo = await sharp(SOURCE_LOGO)
    .resize(logoSize, logoSize, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  return sharp(background)
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });
  await mkdir(APP_DIR, { recursive: true });

  // PNG icons written to /public
  const pngTargets = [
    { size: 16, name: "favicon-16x16.png" },
    { size: 32, name: "favicon-32x32.png" },
    { size: 180, name: "apple-touch-icon.png" },
    { size: 192, name: "android-chrome-192x192.png" },
    { size: 512, name: "android-chrome-512x512.png" },
  ];

  for (const { size, name } of pngTargets) {
    const buf = await buildIcon(size);
    await writeFile(join(PUBLIC_DIR, name), buf);
    console.log(`✓ public/${name}`);
  }

  // Next.js App Router metadata files (auto-linked)
  const icon32 = await buildIcon(32);
  await writeFile(join(APP_DIR, "icon.png"), icon32);
  console.log("✓ app/icon.png");

  const appleIcon = await buildIcon(180);
  await writeFile(join(APP_DIR, "apple-icon.png"), appleIcon);
  console.log("✓ app/apple-icon.png");

  // Multi-resolution favicon.ico (16/32/48) for /favicon.ico and legacy browsers
  const icoSizes = await Promise.all([16, 32, 48].map((s) => buildIcon(s)));
  const ico = await pngToIco(icoSizes);
  await writeFile(join(APP_DIR, "favicon.ico"), ico);
  await writeFile(join(PUBLIC_DIR, "favicon.ico"), ico);
  console.log("✓ app/favicon.ico + public/favicon.ico");

  console.log("\nFavicon set generated successfully.");
}

main().catch((err) => {
  console.error("Favicon generation failed:", err);
  process.exit(1);
});
