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
  const hasMapWords = /10641|10,641/.test(html);
  console.log('reviewCount present (body/schema):', hasMapWords);
}

console.log('\n--- headers file copied:', existsSync(`${dir}/_headers`), ' robotots:', existsSync(`${dir}/robots.txt`), ' og-cover:', existsSync(`${dir}/images/og-cover.jpg`));

// 分批发布校验：对照 RELEASE_PHASE，确认已发布指南已构建、未发布指南未构建。
const GUIDE_PHASES = {
  P0: ['entrances', 'exits', 'route-map', 'mtr-central', 'mtr-hong-kong', 'uphill-downhill', 'return-to-central', 'accessibility'],
  P1: ['history', 'architecture', 'interesting-facts', 'photography', 'best-time-to-visit', 'rainy-day-guide', 'nearby/tai-kwun', 'nearby/pmq', 'nearby/central-market', 'nearby/man-mo-temple', 'nearby/pottinger-street', 'nearby/graham-street', 'nearby/soho', 'nearby/lan-kwai-fong'],
  P2: ['food/soho-restaurants', 'food/cha-chaan-teng', 'food/dim-sum', 'food/coffee-shops', 'food/bars-nightlife', 'shopping', 'itinerary/30-minutes', 'itinerary/one-hour', 'itinerary/half-day', 'itinerary/central-walking-tour', 'itinerary/soho-evening', 'family-guide', 'where-to-stay', 'visitor-faq'],
};
const RELEASE = process.env.RELEASE_PHASE || 'P2';
const RANK = { P0: 0, P1: 1, P2: 2 };
console.log(`\n--- guide pages (release ${RELEASE}) ---`);
let built = 0, missing = 0, hidden = 0;
for (const [phase, slugs] of Object.entries(GUIDE_PHASES)) {
  for (const slug of slugs) {
    const expected = RANK[phase] <= RANK[RELEASE];
    for (const loc of ['', 'en/']) {
      const p = `${loc}${slug}/index.html`;
      const exists = existsSync(`${dir}/${p}`);
      if (expected && exists) built++;
      else if (expected && !exists) { missing++; console.log(`[MISSING ${phase}] ${p}`); }
      else if (!expected && exists) { hidden++; console.log(`[SHOULD-NOT-BUILD ${phase}] ${p}`); }
    }
  }
}
console.log(`guide pages built: ${built}, missing: ${missing}, unexpectedly built: ${hidden}`);
if (missing > 0) { console.log('RESULT: FAIL (missing expected guides)'); process.exit(1); }
if (hidden > 0) { console.log('RESULT: FAIL (unexpected guides built)'); process.exit(1); }
console.log('RESULT: OK');
