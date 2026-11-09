import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../src/content/guides/', import.meta.url));
const fileGroup = {
  'a-transport.ts': 'transport',
  'b-culture.ts': 'culture',
  'c-nearby.ts': 'nearby',
  'd-food.ts': 'food',
  'e-itinerary.ts': 'itinerary',
  'f-practical.ts': 'practical',
};
const GROUP_PHASE = {
  transport: 'P0',
  culture: 'P1',
  nearby: 'P1',
  food: 'P2',
  itinerary: 'P2',
  practical: 'P2',
};

const buckets = { P0: [], P1: [], P2: [] };
let total = 0;
for (const [file, group] of Object.entries(fileGroup)) {
  const src = readFileSync(join(root, file), 'utf8');
  const slugs = [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  for (const s of slugs) {
    buckets[GROUP_PHASE[group]].push(s);
    total++;
  }
}

const expected = { P0: 8, P1: 14, P2: 14 };
let ok = true;
for (const phase of ['P0', 'P1', 'P2']) {
  const got = buckets[phase].length;
  const pass = got === expected[phase];
  if (!pass) ok = false;
  console.log(`${phase}: ${got}/${expected[phase]} ${pass ? 'OK' : 'MISMATCH'}`);
  console.log('   ' + buckets[phase].join(', '));
}
console.log('TOTAL:', total, total === 36 ? 'OK' : 'MISMATCH');
console.log(ok ? 'PHASE-LOGIC: OK' : 'PHASE-LOGIC: FAIL');
process.exit(ok ? 0 : 1);
