import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.resolve(__dirname, '..', 'public', 'images');
const STAGING_DIR = path.resolve(__dirname, '..', 'public', 'images', '.staging');
const MIN_BYTES = 1024 * 1024;          // only touch files > 1MB
const MAX_WIDTH = 2560;
const JPEG_OPTS = { quality: 82, mozjpeg: true };
const PNG_OPTS = { quality: 82, compressionLevel: 9, palette: true };

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');

function human(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(2) + ' MB';
  if (n > 1024) return (n / 1024).toFixed(1) + ' KB';
  return n + ' B';
}

async function hasAlpha(buf) {
  const meta = await sharp(buf).metadata();
  if (!meta.hasAlpha) return false;
  const stats = await sharp(buf).stats();
  const alpha = stats.channels[stats.channels.length - 1];
  return alpha.min < 255;
}

async function processFile(file) {
  const srcPath = path.join(IMG_DIR, file);
  const stat = await fs.stat(srcPath);
  if (stat.size < MIN_BYTES) return null;
  if (!/\.(png|jpe?g)$/i.test(file)) return null;

  const buf = await fs.readFile(srcPath);
  const alpha = await hasAlpha(buf);
  const ext = alpha ? '.png' : '.jpg';
  const base = file.replace(/\.(png|jpe?g)$/i, '');
  const outName = base + ext;
  const outPath = path.join(STAGING_DIR, outName);

  let pipe = sharp(buf).resize({ width: MAX_WIDTH, withoutEnlargement: true });
  pipe = alpha ? pipe.png(PNG_OPTS) : pipe.jpeg(JPEG_OPTS);
  const out = await pipe.toBuffer();
  await fs.writeFile(outPath, out);

  return { file, outName, before: stat.size, after: out.length, alpha };
}

async function main() {
  await fs.mkdir(STAGING_DIR, { recursive: true });
  const entries = await fs.readdir(IMG_DIR, { withFileTypes: true });
  const files = entries.filter(e => e.isFile()).map(e => e.name);

  const results = [];
  for (const f of files) {
    const r = await processFile(f);
    if (r) results.push(r);
  }

  const totalBefore = results.reduce((a, r) => a + r.before, 0);
  const totalAfter = results.reduce((a, r) => a + r.after, 0);

  console.log('\nresults:');
  for (const r of results) {
    const pct = (100 * (1 - r.after / r.before)).toFixed(1);
    const rename = r.file !== r.outName ? `  (renamed → ${r.outName})` : '';
    console.log(`  ${r.file.padEnd(40)}  ${human(r.before).padStart(10)} → ${human(r.after).padStart(10)}  (-${pct}%)${rename}`);
  }
  console.log(`\ntotal: ${human(totalBefore)} → ${human(totalAfter)}  (-${(100*(1-totalAfter/totalBefore)).toFixed(1)}%)`);

  const renames = results.filter(r => r.file !== r.outName).map(r => ({ from: r.file, to: r.outName }));
  if (renames.length) {
    console.log('\nrenames (update component src paths):');
    for (const r of renames) console.log(`  /images/${r.from}  →  /images/${r.to}`);
  }

  if (!APPLY) {
    console.log('\n[dry run] staged to public/images/.staging/. Re-run with --apply to move into place.');
    return;
  }

  console.log('\napplying…');
  for (const r of results) {
    const srcStaged = path.join(STAGING_DIR, r.outName);
    const dstFinal = path.join(IMG_DIR, r.outName);
    await fs.copyFile(srcStaged, dstFinal);
    if (r.file !== r.outName) {
      await fs.unlink(path.join(IMG_DIR, r.file));
    }
  }
  await fs.rm(STAGING_DIR, { recursive: true, force: true });
  console.log('done.');
}

main().catch(e => { console.error(e); process.exit(1); });
