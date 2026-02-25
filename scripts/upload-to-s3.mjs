/**
 * upload-to-s3.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Uploads all local media assets to S3 (twsgurukul bucket), with sharp-based
 * image optimisation for large PNGs/JPEGs before upload.
 *
 * SETUP (one-time):
 *   1. Install deps:   npm install --save-dev @aws-sdk/client-s3 sharp
 *   2. Set credentials (pick one):
 *      a) ~/.aws/credentials  [default] profile
 *      b) Env vars: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION
 *
 * RUN:
 *   node scripts/upload-to-s3.mjs            # dry-run (no upload)
 *   node scripts/upload-to-s3.mjs --upload   # actually upload
 *   node scripts/upload-to-s3.mjs --upload --force   # re-upload even if key exists
 *
 * OUTPUT structure on S3 (bucket: twsgurukul):
 *   assets/images/                 ← from assets/images/
 *   assets/images/footprint/       ← from public/images/footprint/ + assets/images/footprint/
 *   assets/images/fahad-siddiqui.jpeg ← from public/images/
 *   assets/images/brand/favicon/   ← from "TWS GurukulX/Favicon/"
 *   assets/images/brand/icons/     ← from "TWS GurukulX/Icon/"
 *   assets/images/brand/wordmarks/ ← from "TWS GurukulX/Wordmarks/"
 *   assets/images/brand/lockups/   ← from "TWS GurukulX/Sub-brand Lockups/"
 *   assets/images/brand/raw/       ← from "TWS GurukulX/Raw/"
 *   assets/videos/                 ← from assets/videos/
 */

import { readFileSync, existsSync, mkdirSync } from 'fs';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BUCKET = 'twsgurukul';
const REGION = process.env.AWS_REGION || 'ap-south-1';
const DRY_RUN = !process.argv.includes('--upload');
const FORCE   = process.argv.includes('--force');

// ─── Optimisation thresholds ──────────────────────────────────────────────────
// Files larger than this (bytes) that are PNG/JPEG will be converted to WebP
const OPTIMISE_THRESHOLD_BYTES = 200_000; // 200 KB
const WEBP_QUALITY = 82;

// ─── Content-type map ─────────────────────────────────────────────────────────
const MIME = {
  '.webp': 'image/webp',
  '.jpeg': 'image/jpeg',
  '.jpg':  'image/jpeg',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
  '.svg':  'image/svg+xml',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
  '.json': 'application/json',
};

// ─── Cache-control per MIME ───────────────────────────────────────────────────
const CACHE = {
  'image/webp':   'public, max-age=31536000, immutable',
  'image/jpeg':   'public, max-age=31536000, immutable',
  'image/png':    'public, max-age=31536000, immutable',
  'image/x-icon': 'public, max-age=604800',
  'video/mp4':    'public, max-age=2592000',
  'video/webm':   'public, max-age=2592000',
  'application/json': 'public, max-age=86400',
};

// ─── Upload manifest ─────────────────────────────────────────────────────────
// Each entry: { localPath, s3Key, optimise? }
// optimise: true  → convert large PNGs/JPEGs to WebP before upload (key gets .webp extension)
// optimise: false → upload file as-is

const UPLOADS = [
  // ── 1. Content images (assets/images/**) ───────────────────────────────────
  { dir: 'assets/images',        s3Prefix: 'assets/images',        optimise: true  },

  // ── 2. Footprint + Fahad images (currently served locally from public/) ────
  { dir: 'public/images',        s3Prefix: 'assets/images',        optimise: false },

  // ── 3. Testimonial videos ──────────────────────────────────────────────────
  { dir: 'assets/videos',        s3Prefix: 'assets/videos',        optimise: false },

  // ── 4. Brand assets (TWS GurukulX folder) ─────────────────────────────────
  { dir: 'TWS GurukulX/Favicon',            s3Prefix: 'assets/images/brand/favicon',   optimise: false },
  { dir: 'TWS GurukulX/Icon',               s3Prefix: 'assets/images/brand/icons',     optimise: true  },
  { dir: 'TWS GurukulX/Wordmarks',          s3Prefix: 'assets/images/brand/wordmarks', optimise: true  },
  { dir: 'TWS GurukulX/Sub-brand Lockups',  s3Prefix: 'assets/images/brand/lockups',   optimise: true  },
  { dir: 'TWS GurukulX/Raw',                s3Prefix: 'assets/images/brand/raw',        optimise: true  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function walkDir(dir) {
  const entries = [];
  const items = await readdir(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      entries.push(...await walkDir(full));
    } else {
      entries.push(full);
    }
  }
  return entries;
}

function s3KeyFor(localFile, localDir, s3Prefix) {
  const rel = path.relative(localDir, localFile).replace(/\\/g, '/');
  return `${s3Prefix}/${rel}`;
}

async function maybeOptimise(localFile, sharp) {
  const ext = path.extname(localFile).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;
  const size = (await stat(localFile)).size;
  if (size < OPTIMISE_THRESHOLD_BYTES) return null;

  console.log(`  ⚡ Optimising ${path.basename(localFile)} (${(size / 1024).toFixed(0)} KB) → WebP`);
  const buf = await sharp(localFile).webp({ quality: WEBP_QUALITY }).toBuffer();
  return buf;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (DRY_RUN) {
    console.log('━━━ DRY RUN (pass --upload to actually upload) ━━━\n');
  }

  // Dynamic imports so the script gives a clear error if deps are missing
  let S3Client, PutObjectCommand, HeadObjectCommand, sharp;
  try {
    ({ S3Client, PutObjectCommand, HeadObjectCommand } = await import('@aws-sdk/client-s3'));
    ({ default: sharp } = await import('sharp'));
  } catch (e) {
    console.error('\n❌ Missing dependencies. Run:\n   npm install --save-dev @aws-sdk/client-s3 sharp\n');
    process.exit(1);
  }

  const s3 = new S3Client({ region: REGION });

  let uploaded = 0, skipped = 0, optimised = 0, errors = 0;

  for (const { dir, s3Prefix, optimise } of UPLOADS) {
    const localDir = path.resolve(ROOT, dir);
    if (!existsSync(localDir)) {
      console.warn(`⚠️  Directory not found, skipping: ${dir}`);
      continue;
    }

    const files = await walkDir(localDir);
    console.log(`\n📁 ${dir}  (${files.length} files)`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const mime = MIME[ext] || 'application/octet-stream';
      let s3Key = s3KeyFor(file, localDir, s3Prefix);
      let body;
      let wasOptimised = false;

      // Try to optimise large PNGs/JPEGs → WebP
      if (optimise) {
        const optimisedBuf = await maybeOptimise(file, sharp);
        if (optimisedBuf) {
          // Swap extension in S3 key
          s3Key = s3Key.replace(/\.(png|jpg|jpeg)$/i, '.webp');
          body = optimisedBuf;
          wasOptimised = true;
          optimised++;
        }
      }

      if (!body) {
        body = readFileSync(file);
      }

      const finalMime = wasOptimised ? 'image/webp' : mime;
      const cacheControl = CACHE[finalMime] || 'public, max-age=86400';

      if (DRY_RUN) {
        console.log(`  [DRY] ${wasOptimised ? '⚡' : '  '} ${s3Key}  (${(body.length / 1024).toFixed(0)} KB)`);
        continue;
      }

      // Check if key already exists (skip unless --force)
      if (!FORCE) {
        try {
          await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: s3Key }));
          console.log(`  ✓ exists  ${s3Key}`);
          skipped++;
          continue;
        } catch {
          // Key does not exist — proceed with upload
        }
      }

      try {
        await s3.send(new PutObjectCommand({
          Bucket: BUCKET,
          Key: s3Key,
          Body: body,
          ContentType: finalMime,
          CacheControl: cacheControl,
        }));
        console.log(`  ↑ uploaded ${s3Key}  (${(body.length / 1024).toFixed(0)} KB)`);
        uploaded++;
      } catch (err) {
        console.error(`  ✗ FAILED  ${s3Key}: ${err.message}`);
        errors++;
      }
    }
  }

  console.log(`\n${'━'.repeat(60)}`);
  if (DRY_RUN) {
    console.log(`DRY RUN complete. Pass --upload to execute.\n`);
  } else {
    console.log(`Done. uploaded=${uploaded}  skipped=${skipped}  optimised=${optimised}  errors=${errors}\n`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
