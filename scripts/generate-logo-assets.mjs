#!/usr/bin/env node
// ============================================================================
// Builds every logo and icon the site uses from one master artwork.
//
//   npm run gen:logo
//
// Source: MW-Logo.png at the repository root, the supplied artwork on a white
// background.
//
// A note on the white, because it decides the whole approach. The monogram is
// white, and its strokes run out past the brown disc into the white around it,
// so the letterform and the background are one connected region. Any attempt
// to key the white out, globally or by flood filling from the edges, takes the
// M with it. What works instead is to keep the white and give it a shape: the
// mark is cut to a circle, so it reads as a badge. On the white header the edge
// is invisible and on the espresso footer it reads as a deliberate medallion,
// which is how the site already used its logo.
//
// Two shapes come out of it:
//   * the circular badge, used everywhere on the site;
//   * a tight crop of the brown disc for the browser tab, because at 16 and 32
//     pixels the outer gold swirl turns to mush while the disc still reads.
// ============================================================================

import sharp from "sharp";
import pngToIco from "png-to-ico";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const MASTER = join(ROOT, "MW-Logo.png");
const PUBLIC_DIR = join(ROOT, "public");
const IMAGES_DIR = join(PUBLIC_DIR, "images");

/** Breathing room between the artwork and the edge of the badge. */
const PADDING = 0.05;

/** Trims the white margin so the artwork sits in a known box. */
async function trimmed() {
  return sharp(MASTER).trim({ threshold: 10 }).png().toBuffer();
}

/**
 * The radius, measured from the centre of the artwork, that reaches the
 * furthest piece of it. Taking the larger side instead would clip the two
 * brown flourishes, which reach further out than the gold ring does.
 */
async function contentRadius(art) {
  const { data, info } = await sharp(art)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const cx = width / 2;
  const cy = height / 2;
  let max = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * channels;
      const light =
        data[i] > 235 && data[i + 1] > 235 && data[i + 2] > 235;
      if (light || data[i + 3] < 32) continue;
      const d = Math.hypot(x - cx, y - cy);
      if (d > max) max = d;
    }
  }
  return max;
}

/** The artwork centred on a square white canvas, cut to a circle. */
async function badge(size) {
  const art = await trimmed();
  const { width, height } = await sharp(art).metadata();
  const radius = await contentRadius(art);
  const box = Math.max(width, height, Math.ceil(radius * 2));

  const squared = await sharp({
    create: {
      width: box,
      height: box,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: art, gravity: "center" }])
    .png()
    .toBuffer();

  const inner = Math.round(size * (1 - PADDING * 2));
  const padded = await sharp(squared)
    .resize(inner, inner)
    .extend({
      top: Math.round(size * PADDING),
      bottom: Math.round(size * PADDING),
      left: Math.round(size * PADDING),
      right: Math.round(size * PADDING),
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .resize(size, size)
    .png()
    .toBuffer();

  const circle = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${
      size / 2
    }" r="${size / 2}" fill="#fff"/></svg>`
  );

  return sharp(padded)
    .composite([{ input: circle, blend: "dest-in" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * The brown disc on its own, which is what still reads at favicon sizes.
 *
 * The disc is found through the gold ring rather than by looking for brown:
 * the two flourishes are the same brown as the disc, so a search by colour
 * picks them up too. The ring is a near complete circle in a colour nothing
 * else uses, so its bounding box gives a reliable centre, and the disc sits
 * concentric inside it at a fixed fraction of its radius.
 */
const DISC_RATIO = 0.7;

async function disc(size) {
  const art = await trimmed();
  const { data, info } = await sharp(art)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Gold: warm, bright, and much stronger in red than in blue.
  const isGold = (i) =>
    data[i + 3] > 200 &&
    data[i] > 150 &&
    data[i + 1] > 110 &&
    data[i + 1] < 215 &&
    data[i] - data[i + 2] > 55;

  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (!isGold((y * width + x) * channels)) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const ringRadius = Math.max(maxX - minX, maxY - minY) / 2;
  const radius = Math.round(ringRadius * DISC_RATIO);

  const left = Math.max(0, Math.round(cx - radius));
  const top = Math.max(0, Math.round(cy - radius));
  const box = Math.min(radius * 2, width - left, height - top);

  const square = await sharp(art)
    .extract({ left, top, width: box, height: box })
    .resize(size, size)
    .png()
    .toBuffer();

  const circle = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${
      size / 2
    }" r="${size / 2}" fill="#fff"/></svg>`
  );

  return sharp(square)
    .composite([{ input: circle, blend: "dest-in" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function main() {
  console.log("Reading MW-Logo.png");

  // --- the badge, used everywhere on the site ---
  const badge1024 = await badge(1024);
  await writeFile(join(IMAGES_DIR, "mw-logo-v2.png"), badge1024);
  console.log("public/images/mw-logo-v2.png  (1024 badge)");

  await writeFile(join(IMAGES_DIR, "mw-logo-square.png"), await badge(512));
  console.log("public/images/mw-logo-square.png  (512, for the structured data)");

  // --- browser tab ---
  // From 32 pixels up the whole badge reads, and that is what a modern
  // screen actually shows in the tab, so the icon matches the logo. Only at
  // 16 does the gold swirl turn to mush; that one size keeps the brown disc
  // on its own, which still reads.
  const disc16 = await disc(16);
  const badge32 = await badge(32);
  const badge48 = await badge(48);

  await writeFile(join(PUBLIC_DIR, "favicon-16x16.png"), disc16);
  await writeFile(join(PUBLIC_DIR, "favicon-32x32.png"), badge32);
  console.log("favicon-16x16.png (disc), favicon-32x32.png (badge)");

  const ico = await pngToIco([disc16, badge32, badge48]);
  await writeFile(join(PUBLIC_DIR, "favicon.ico"), ico);
  console.log("favicon.ico  (16, 32, 48)");

  // --- home screen tiles ---
  for (const [name, size] of [
    ["apple-touch-icon.png", 180],
    ["android-chrome-192x192.png", 192],
    ["android-chrome-512x512.png", 512],
  ]) {
    await writeFile(join(PUBLIC_DIR, name), await badge(size));
    console.log(`${name}  (${size})`);
  }

  console.log("\nDone.");
}

main().catch((error) => {
  console.error("Logo generation failed:", error);
  process.exit(1);
});
