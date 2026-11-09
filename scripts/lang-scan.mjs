import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || 'dist-static';
const CJK = /[一-鿿㐀-䶿]/g;

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

function visibleText(html) {
  let s = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
  s = s.replace(/<[^>]+>/g, ' ');
  return s;
}

const pages = walk(root);
let enFlags = 0, zhFlags = 0;
const enProblems = [];
const zhProblems = [];

for (const p of pages) {
  const rel = p.slice(root.length + 1).replace(/\\/g, '/');
  const html = readFileSync(p, 'utf8');
  const text = visibleText(html);
  const isEn = rel.startsWith('en/');
  const cjk = text.match(CJK) || [];
  if (isEn) {
    if (cjk.length > 0) {
      enFlags++;
      enProblems.push({ rel, cjk: cjk.length, sample: cjk.slice(0, 20).join('') });
    }
  } else {
    // zh page: look for long English-only runs (leaked English sentences)
    const runs = text.match(/[A-Za-z][A-Za-z\s.,'’()\-:&]{45,}/g) || [];
    if (runs.length > 0) {
      zhFlags++;
      zhProblems.push({ rel, runs: runs.length, sample: runs.slice(0, 3).map((r) => r.trim().slice(0, 80)) });
    }
  }
}

console.log(`Scanned ${pages.length} pages.`);
console.log(`\n[EN pages with Chinese chars]: ${enFlags}`);
for (const e of enProblems) console.log(`  ${e.rel}  cjk=${e.cjk}  e.g. ${e.sample}`);
console.log(`\n[ZH pages with long English runs]: ${zhFlags}`);
for (const z of zhProblems) {
  console.log(`  ${z.rel}  runs=${z.runs}`);
  for (const s of z.sample) console.log(`     > ${s}`);
}
console.log('\nLANG SCAN:', enFlags === 0 && zhFlags === 0 ? 'OK' : 'ISSUES FOUND');
