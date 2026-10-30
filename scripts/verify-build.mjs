import { readFileSync, existsSync } from 'node:fs';

const dir = process.argv[2] ?? 'dist/client';

function read(p) {
  try {
    return readFileSync(`${dir}/${p}`, 'utf8');
  } catch {
    return null;
  }
}

function grep(html, re) {
  const m = html.match(re);
  return m ? m.map((s) => s.trim()) : [];
}

console.log('--- sitemap-index ---');
console.log(read('sitemap-index.xml')?.slice(0, 600));
console.log('--- sitemap-0 head ---');
console.log(read('sitemap-0.xml')?.slice(0, 1200));

for (const page of ['index.html', 'en/index.html', 'schedule/index.html', 'en/schedule/index.html', 'food/index.html']) {
  const html = read(page);
  if (!html) {
    console.log(`\n[MISSING] ${page}`);
    continue;
  }
  console.log(`\n=== ${page} ===`);
  console.log('title:', grep(html, /<title>([^<]*)<\/title>/)[1] ?? 'NONE');
  console.log('desc:', (grep(html, /<meta name="description" content="([^"]*)"/)[1] ?? '').slice(0, 120));
  console.log('canonical:', grep(html, /<link rel="canonical" href="([^"]*)"/)[1] ?? 'NONE');
  console.log('hreflang:', html.match(/hreflang="[^"]*" href="[^"]*"/g) ?? []);
  console.log('og:image:', grep(html, /property="og:image" content="([^"]*)"/)[1] ?? 'NONE');
  console.log('robots:', grep(html, /<meta name="robots" content="([^"]*)"/)[1] ?? '-');
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) ?? [];
  console.log('ld+json blocks:', ld.length);
  for (const block of ld) {
    const type = block.match(/"@type":\s*(\[[^\]]*\]|"[^"]*")/);
    console.log('  -', type?.[1] ?? 'unknown');
  }
  const rating = html.match(/"aggregateRating"[\s\S]{0,220}/);
  if (rating) console.log('rating:', rating[0].replace(/\s+/g, ' '));
  const hasMapWords = /10604|10,604/.test(html);
  console.log('reviewCount present (body/schema):', hasMapWords);
}

console.log('\n--- headers file copied:', existsSync(`${dir}/_headers`), ' robots:', existsSync(`${dir}/robots.txt`), ' og-cover:', existsSync(`${dir}/images/og-cover.jpg`));
