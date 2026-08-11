// scripts/gen-bret-derivatives.mjs — regenerates the Bret Swope avatar
// derivatives committed under public/images/.
//
//   node scripts/gen-bret-derivatives.mjs
//
// WHY THIS EXISTS. public/ is served verbatim (Astro never processes it), and
// the master BretSwope.webp is 1241x1268 / ~174 KB while the largest place it
// is ever displayed is 180 CSS px — the homepage hero shows it at 56x56. Every
// visitor was paying ~174 KB to paint a 56 px avatar. These derivatives cut the
// homepage image cost by ~94%.
//
// WHY A SCRIPT AND NOT astro:assets. <Image>/<Picture> would mean moving the
// master into src/assets and replacing the locale-aware asset() helper in three
// components — a wide change for a byte problem. sharp is also only a
// transitive dependency (via astro), so committing the output keeps the build
// dependency-free. Run this manually when the master photo changes; commit the
// result.
//
// CROP FIDELITY. Both call sites use `object-fit: cover` on a square box, so
// the browser already centre-crops the 1241x1268 master. resize(fit:'cover',
// position:'centre') reproduces that crop exactly — framing is unchanged.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = path.join(ROOT, 'public/images/BretSwope.webp');
const OUT_DIR = path.join(ROOT, 'public/images');

// 56 px (hero avatar) and 180 px (bret-card) at 1x/2x/3x. Nothing renders the
// photo larger than 180 CSS px, so 540 is the ceiling.
const SIZES = [56, 112, 168, 180, 360, 540];

// q82 is the knee of the curve for this photo: visually indistinguishable from
// q90 at these sizes, ~35% smaller.
const QUALITY = 82;

const { default: sharp } = await import('sharp');

const master = readFileSync(SRC);
const { width, height } = await sharp(master).metadata();
console.log(`master ${path.basename(SRC)} ${width}x${height} ${master.length} B`);

let total = 0;
for (const size of SIZES) {
  const buf = await sharp(master)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();
  const out = path.join(OUT_DIR, `bret-${size}.webp`);
  writeFileSync(out, buf);
  total += buf.length;
  console.log(`  bret-${size}.webp  ${String(buf.length).padStart(6)} B`);
}
console.log(`${SIZES.length} derivatives, ${total} B total`);
