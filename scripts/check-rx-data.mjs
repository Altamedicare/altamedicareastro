#!/usr/bin/env node
// check-rx-data.mjs — validation gate for the Prescription Assistance record
// system (src/data/medicationAssistance). Ports the invariants the Vernal
// Medicare reference implementation enforces with vitest into AltaMedicare's
// script-gate pattern (like check-fa-icons.mjs): `npm run build` fails when
// the medication data violates them.
//
// Bundles the TS data layer with esbuild (already a build dependency) into a
// temp module, imports it, and asserts:
//   registry integrity, taxonomy validity, provenance (dated https sources,
//   literal lastVerified), program-kind discipline, page shape, related-link
//   resolution against the site's real routes, and editorial rules
//   (no superlatives, no guarantees).
import { build } from 'esbuild';
import { readFileSync, readdirSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'src', 'data', 'medicationAssistance');

let failures = 0;
const fail = (msg) => { failures++; console.error('  ✗ ' + msg); };

// ── Bundle + import the data layer ──────────────────────────────────────────
const tmp = mkdtempSync(join(tmpdir(), 'rx-check-'));
const entry = join(tmp, 'entry.ts');
writeFileSync(
  entry,
  `export { MEDICATION_ASSISTANCE, categoriesFor, extraHelpProgram, KEY_TERMS } from ${JSON.stringify(
    join(dataDir, 'index.ts').replace(/\\/g, '/'),
  )};
export { CONDITIONS } from ${JSON.stringify(join(root, 'src/data/conditions.ts').replace(/\\/g, '/'))};
export { DRUG_CLASSES } from ${JSON.stringify(join(dataDir, 'drugClasses.ts').replace(/\\/g, '/'))};
`,
);
const outfile = join(tmp, 'bundle.mjs');
await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', outfile, logLevel: 'silent' });
const { MEDICATION_ASSISTANCE, categoriesFor, extraHelpProgram, KEY_TERMS, CONDITIONS, DRUG_CLASSES } =
  await import(pathToFileURL(outfile).href);

// Legacy FEATURED_CORE slugs, read textually — drugAssistance.ts imports the
// Vite-only i18n loader (import.meta.glob), so it cannot be bundled for Node.
const daSrc = readFileSync(join(root, 'src/data/drugAssistance.ts'), 'utf8');
const FEATURED_SLUGS = [...daSrc.matchAll(/\{slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]);
if (FEATURED_SLUGS.length === 0) fail('could not read FEATURED_CORE slugs from drugAssistance.ts');

// ── Route inventory (for internal-link resolution) ──────────────────────────
const routes = new Set(['/']);
const addHtml = (p) => { routes.add(p); routes.add(p.replace(/\.html$/, '')); };
// top-level Astro pages
for (const f of readdirSync(join(root, 'src', 'pages'))) {
  if (f.endsWith('.astro') && !f.startsWith('[')) addHtml('/' + f.replace(/\.astro$/, '.html'));
}
// public tool pages
for (const f of readdirSync(join(root, 'public'))) {
  if (f.endsWith('.html')) addHtml('/' + f);
}
// blog posts + categories
const blogDir = join(root, 'src', 'content', 'blog');
for (const f of readdirSync(blogDir)) {
  if (!f.endsWith('.md')) continue;
  addHtml('/blog/' + f.replace(/\.md$/, '.html'));
  const m = readFileSync(join(blogDir, f), 'utf8').match(/^category:\s*["']?([\w-]+)["']?/m);
  if (m) addHtml('/blog/category/' + m[1] + '.html');
}
// assistance pages (union of legacy + records)
const allSlugs = new Set([...FEATURED_SLUGS, ...MEDICATION_ASSISTANCE.map((r) => r.slug)]);
for (const s of allSlugs) addHtml(`/${s}-assistance-program.html`);

const isInternal = (h) => h.startsWith('/') && !h.startsWith('//');
const resolves = (h) => routes.has(h.split(/[?#]/)[0]);

// ── Per-record checks ───────────────────────────────────────────────────────
const NON_RECORDS = new Set(['index.ts', 'shared.ts', 'categories.ts', 'drugClasses.ts']);
const recordFiles = readdirSync(dataDir).filter((f) => f.endsWith('.ts') && !NON_RECORDS.has(f));
const condKeys = new Set(CONDITIONS.map((c) => c.key));
const classKeys = new Set(DRUG_CLASSES.map((c) => c.key));
const iso = /^\d{4}-\d{2}-\d{2}$/;
const today = new Date().toISOString().slice(0, 10);
const seenSlugs = new Set();

if (MEDICATION_ASSISTANCE.length === 0) fail('registry is empty');
if (recordFiles.length !== MEDICATION_ASSISTANCE.length)
  fail(`record file count (${recordFiles.length}) != registry length (${MEDICATION_ASSISTANCE.length})`);

const collectStrings = (v, out = []) => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => collectStrings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => collectStrings(x, out));
  return out;
};

for (const r of MEDICATION_ASSISTANCE) {
  const id = r.slug;
  if (seenSlugs.has(r.slug)) fail(`${id}: duplicate slug`);
  seenSlugs.add(r.slug);

  // taxonomy — both axes valid, no stored categories, derived view non-empty
  for (const c of r.conditions) if (!condKeys.has(c)) fail(`${id}: unknown condition '${c}'`);
  for (const c of r.drugClass) if (!classKeys.has(c)) fail(`${id}: unknown drugClass '${c}'`);
  if (Object.hasOwn(r, 'categories')) fail(`${id}: records must not carry a 'categories' field`);
  if (categoriesFor(r).length < 1) fail(`${id}: derives no browse category`);

  // provenance
  if (!iso.test(r.lastVerified)) fail(`${id}: lastVerified not ISO`);
  else if (r.lastVerified > today) fail(`${id}: lastVerified in the future`);
  if (!iso.test(r.datePublished)) fail(`${id}: datePublished not ISO`);
  if (!Array.isArray(r.sources) || r.sources.length < 5) fail(`${id}: fewer than 5 page-level sources`);
  const src = readFileSync(join(dataDir, `${r.slug}.ts`), 'utf8');
  if (!/lastVerified:\s*'\d{4}-\d{2}-\d{2}'/.test(src))
    fail(`${id}: lastVerified must be a literal date in the record file (never the shared CHECKED constant)`);

  // programs
  const ids = r.programs.map((p) => p.id);
  if (new Set(ids).size !== ids.length) fail(`${id}: duplicate program ids`);
  if (!ids.some((x) => x.startsWith('totalassist'))) fail(`${id}: no TotalAssist finding (honest negatives count)`);
  if (!ids.some((x) => x.startsWith('healthwell'))) fail(`${id}: no HealthWell finding (honest negatives count)`);
  if ((r.charitableSummary ?? '').length <= 40) fail(`${id}: charitableSummary too short`);
  const kinds = new Set(r.programs.map((p) => p.kind));
  if (!kinds.has('manufacturer-savings') && !kinds.has('manufacturer-pap'))
    fail(`${id}: no manufacturer program researched`);
  for (const p of r.programs) {
    if (!p.sources?.length) fail(`${id}/${p.id}: program has no sources`);
    for (const s of p.sources ?? []) {
      if (!/^https:\/\//.test(s.url)) fail(`${id}/${p.id}: source url not https (${s.url})`);
      if (!iso.test(s.checked)) fail(`${id}/${p.id}: source 'checked' not ISO`);
      if (!s.publisher) fail(`${id}/${p.id}: source missing publisher`);
    }
    if (p.applyUrl && !/^https:\/\//.test(p.applyUrl)) fail(`${id}/${p.id}: applyUrl not https`);
    if (p.phone && !/^[0-9()\- ]+$/.test(p.phone)) fail(`${id}/${p.id}: phone has unexpected characters`);
    if ((p.statusNote ?? '').length <= 10) fail(`${id}/${p.id}: statusNote too short`);
    if ((p.medicareNote ?? '').length <= 10) fail(`${id}/${p.id}: medicareNote too short`);
    if (p.kind === 'manufacturer-savings' && /copay|savings/i.test(p.name) && p.medicare === 'eligible')
      fail(`${id}/${p.id}: a copay/savings card must not present as Medicare-eligible`);
  }

  // page shape
  if (r.applicationSteps.length !== 7) fail(`${id}: applicationSteps must be exactly 7`);
  else if (!/closed|don't qualify|denied/i.test(r.applicationSteps[6].title))
    fail(`${id}: step 7 must be the closed/denied fallback`);
  if (r.documentsNeeded.length < 4) fail(`${id}: fewer than 4 documentsNeeded`);
  if (r.ifUnavailable.length < 4) fail(`${id}: fewer than 4 ifUnavailable alternatives`);
  if (r.faqs.length < 4) fail(`${id}: fewer than 4 FAQs`);
  if (r.quickAnswer.points.length < 3) fail(`${id}: fewer than 3 quickAnswer points`);
  if (r.video.status === 'coming-soon' && r.video.youtubeId) fail(`${id}: coming-soon video must not carry a youtubeId`);

  // related + internal links resolve
  for (const s of r.relatedMedications) if (!allSlugs.has(s)) fail(`${id}: relatedMedications '${s}' is not a known medication`);
  for (const x of r.relatedResources) if (isInternal(x.href) && !resolves(x.href)) fail(`${id}: relatedResources dead link ${x.href}`);
  for (const a of r.ifUnavailable) if (a.href && isInternal(a.href) && !resolves(a.href)) fail(`${id}: ifUnavailable dead link ${a.href}`);
  for (const f of r.faqs)
    for (const m of f.answer.matchAll(/href="([^"]+)"/g))
      if (isInternal(m[1]) && !resolves(m[1])) fail(`${id}: FAQ dead link ${m[1]}`);
  for (const m of (r.medicareContext + ' ' + r.whyCostly).matchAll(/href="([^"]+)"/g))
    if (isInternal(m[1]) && !resolves(m[1])) fail(`${id}: context dead link ${m[1]}`);

  // editorial rules
  const strings = collectStrings(r);
  for (const s of strings) {
    if (/\b(best|top|#1)\b/i.test(s)) fail(`${id}: superlative found: "${s.slice(0, 60)}..."`);
    if (/guaranteed approval|you will receive a grant|you can get a grant/i.test(s))
      fail(`${id}: guarantee language found: "${s.slice(0, 60)}..."`);
  }
}

// ── Shared definitions ──────────────────────────────────────────────────────
const eh = extraHelpProgram();
if (eh.sources.length < 3) fail('extraHelpProgram: fewer than 3 dated sources');
if (KEY_TERMS.length < 4) fail('KEY_TERMS: fewer than 4 terms');

// ── Legacy i18n featured-drug parity (three sources of truth must agree) ────
const enJson = JSON.parse(readFileSync(join(root, 'src/i18n/shared/drug-assistance/en.json'), 'utf8'));
const esJson = JSON.parse(readFileSync(join(root, 'src/i18n/shared/drug-assistance/es.json'), 'utf8'));
const setEq = (a, b) => a.size === b.size && [...a].every((x) => b.has(x));
const core = new Set(FEATURED_SLUGS);
const en = new Set(enJson.featuredDrugs.map((d) => d.slug));
const es = new Set(esJson.featuredDrugs.map((d) => d.slug));
if (!setEq(core, en)) fail('FEATURED_CORE slugs != en.json featuredDrugs slugs');
if (!setEq(en, es)) fail('en.json featuredDrugs slugs != es.json featuredDrugs slugs');

rmSync(tmp, { recursive: true, force: true });

if (failures) {
  console.error(`\n  rx data FAILED — ${failures} problem(s) across ${MEDICATION_ASSISTANCE.length} records`);
  process.exit(1);
}
console.log(
  `  rx data OK — ${MEDICATION_ASSISTANCE.length} records, ${[...allSlugs].length} assistance pages, ` +
    `${MEDICATION_ASSISTANCE.reduce((n, r) => n + r.programs.length, 0)} researched programs, links resolve`,
);
