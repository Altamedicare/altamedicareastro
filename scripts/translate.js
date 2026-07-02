// scripts/translate.js — the AI translation engine.
// Ported from vernalmedicareastro (see I18N-PORT-LOG.md).
//
//   npm run translate -- --check                  # validate committed translations; no API
//   npm run translate -- --all --dry-run          # report pending segments + est. cost; no API
//   npm run translate -- --locale es              # translate one locale (needs credentials)
//   npm run translate -- --all --page turning-65  # one page, every locale
//
// THE ONLY COMPONENT THAT CONTACTS THE API. The Astro build never imports this
// file and never needs a key (playbook §4.7/§4.8 hard rule). The SDK is
// lazy-imported so --check/--dry-run work with no dependency and no network.
//
// Pipeline (per page, per locale):
//   flatten master → SHA-256 each segment → seed cache from committed
//   translations → translate only changed/missing segments → glossary
//   post-pass → validate (placeholders, tag structure, glossary) →
//   reassemble onto master's shape → write committed JSON → log token cost.
//
// The cache (scripts/.translation-cache.json, segment hash → translation) is
// COMMITTED, so one edited English sentence re-translates one segment, not the
// site. Committed translation files are adopted into the cache on every run
// ("seeding"), so human-reviewed copy is never clobbered while its source
// segment is unchanged.
//
// Model: claude-opus-4-8 (verified current via the claude-api reference,
// 2026-07-01). Structured outputs (output_config.format json_schema) force
// schema-valid JSON; adaptive thinking on; streaming to avoid HTTP timeouts.

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// ── Config ───────────────────────────────────────────────────────────────────
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CONTENT_DIR = path.join(ROOT, 'src', 'i18n', 'content');
const GLOSSARY_FILE = path.join(ROOT, 'src', 'i18n', 'glossary.json');
const CACHE_FILE = path.join(ROOT, 'scripts', '.translation-cache.json');

const MASTER = 'en';
// Keep in sync with src/i18n/locales.ts (non-default locales only).
const TARGETS = {
  es: 'Spanish for a US Latino audience. Formal "usted" throughout. Use CMS es.medicare.gov terminology exactly as pinned in the glossary.',
};

const MODEL = 'claude-opus-4-8';
const PRICE_PER_MTOK = { input: 5, output: 25 };
const MAX_CHARS_PER_BATCH = 6000; // source chars per API request

// ── Small utils ──────────────────────────────────────────────────────────────
const sha = (s) => createHash('sha256').update(s).digest('hex');
const cacheKey = (locale, text) => sha(`${MODEL}|${locale}|${text}`);
const readJson = (f) => JSON.parse(readFileSync(f, 'utf8'));
const writeJson = (f, obj) => writeFileSync(f, JSON.stringify(obj, null, 2) + '\n', 'utf8');
const isUrl = (s) => /^https?:\/\//i.test(s);
// Asset paths (image srcs etc.) live inside content structures but are data,
// not copy — never send them to translation (genuine bug found extracting the
// medigap carousel: "pictures/joke63.webp" is a flattened string segment).
const isAsset = (s) => /^[\w\-./]+\.(webp|png|jpe?g|svg|gif|ico|pdf|mp4|css|js)$/i.test(s);
// Bare page-slug fields ("when-to-enroll-medicare-utah.html" in a link table)
// are routing data, not copy (genuine bug found extracting the enrollment-
// periods table: href fields are flattened string segments).
const isPageSlug = (s) => /^[\w-]+\.html$/i.test(s);
const isNonTranslatable = (s) => isUrl(s) || isAsset(s) || isPageSlug(s);
const placeholders = (s) => [...s.matchAll(/\{[a-zA-Z0-9_]+\}/g)].map((m) => m[0]).sort();
const tagSequence = (s) => [...s.matchAll(/<\/?[a-zA-Z0-9-]+/g)].map((m) => m[0].toLowerCase());

/** Flatten a content object into [path, string] segments. Keys starting with
 *  "__" (notes/metadata) and URL values are not translatable. */
function flatten(value, prefix = '', out = []) {
  if (typeof value === 'string') {
    out.push([prefix, value]);
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => flatten(v, `${prefix}[${i}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      if (k.startsWith('__')) continue;
      flatten(v, prefix ? `${prefix}.${k}` : k, out);
    }
  }
  return out;
}

/** Get/set a flattened path ("a.b[2].c") on an object. */
function getPath(obj, p) {
  return pathParts(p).reduce((o, k) => (o == null ? undefined : o[k]), obj);
}
function setPath(obj, p, value) {
  const parts = pathParts(p);
  let o = obj;
  for (const k of parts.slice(0, -1)) o = o[k];
  o[parts[parts.length - 1]] = value;
}
function pathParts(p) {
  return p.split(/[.[\]]+/).filter(Boolean).map((k) => (/^\d+$/.test(k) ? Number(k) : k));
}

// ── Glossary ─────────────────────────────────────────────────────────────────
const glossary = Object.fromEntries(
  Object.entries(readJson(GLOSSARY_FILE)).filter(([k]) => !k.startsWith('__')),
);

/** Deterministic post-pass: force pinned per-locale translations wherever the
 *  English term survived verbatim, so the model can never drift on a
 *  controlled term. Verbatim (string-valued) terms need no rewrite. */
function glossaryPostPass(text, locale) {
  let out = text;
  for (const [term, value] of Object.entries(glossary)) {
    if (typeof value === 'object' && value[locale]) {
      out = out.replaceAll(term, value[locale]);
    }
  }
  return out;
}

/** Validate one translated segment against its source. Returns issue strings. */
function validateSegment(source, translated, locale, where) {
  const issues = [];
  const [ps, pt] = [placeholders(source), placeholders(translated)];
  if (ps.join() !== pt.join())
    issues.push(`${where}: placeholder mismatch (${ps.join(',') || 'none'} → ${pt.join(',') || 'none'})`);
  if (tagSequence(source).join() !== tagSequence(translated).join())
    issues.push(`${where}: HTML tag structure changed`);
  for (const [term, value] of Object.entries(glossary)) {
    if (!source.includes(term)) continue;
    const expected = typeof value === 'string' ? value : value[locale];
    if (expected && !translated.includes(expected))
      issues.push(`${where}: glossary term "${term}" → expected "${expected}" not found`);
  }
  return issues;
}

// ── Filesystem inventory ─────────────────────────────────────────────────────
function masterPages() {
  return readdirSync(path.join(CONTENT_DIR, MASTER))
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}
const targetFile = (locale, page) => path.join(CONTENT_DIR, locale, `${page}.json`);

// ── Cache ────────────────────────────────────────────────────────────────────
function loadCache() {
  return existsSync(CACHE_FILE) ? readJson(CACHE_FILE) : {};
}

/** Adopt committed translations into the cache: any target-file string whose
 *  master segment is unchanged becomes the cached translation. The COMMITTED
 *  FILE is authoritative over the cache — a human-reviewed correction in the
 *  file survives every regeneration until its SOURCE segment changes. */
function seedCache(cache) {
  let seeded = 0;
  for (const locale of Object.keys(TARGETS)) {
    for (const page of masterPages()) {
      const tf = targetFile(locale, page);
      if (!existsSync(tf)) continue;
      const master = readJson(path.join(CONTENT_DIR, MASTER, `${page}.json`));
      const target = readJson(tf);
      for (const [p, sourceText] of flatten(master)) {
        if (isNonTranslatable(sourceText)) continue;
        const existing = getPath(target, p);
        if (typeof existing !== 'string') continue;
        const key = cacheKey(locale, sourceText);
        if (cache[key] !== existing) {
          cache[key] = existing;
          seeded++;
        }
      }
    }
  }
  return seeded;
}

// ── Work planning ────────────────────────────────────────────────────────────
/** Segments of a page still needing translation for a locale. */
function pendingSegments(cache, locale, page) {
  const master = readJson(path.join(CONTENT_DIR, MASTER, `${page}.json`));
  return flatten(master)
    .filter(([, text]) => !isNonTranslatable(text))
    .filter(([, text]) => !(cacheKey(locale, text) in cache))
    .map(([p, text]) => ({ path: p, text }));
}

// ── Translation (the only API contact) ───────────────────────────────────────
const OUTPUT_SCHEMA = {
  type: 'object',
  properties: {
    translations: {
      type: 'array',
      items: {
        type: 'object',
        properties: { id: { type: 'string' }, text: { type: 'string' } },
        required: ['id', 'text'],
        additionalProperties: false,
      },
    },
  },
  required: ['translations'],
  additionalProperties: false,
};

function systemPrompt(locale) {
  const glossaryLines = Object.entries(glossary)
    .map(([term, v]) =>
      typeof v === 'string'
        ? `- "${term}" → keep EXACTLY verbatim (brand/program term)`
        : v[locale]
          ? `- "${term}" → always translate as "${v[locale]}"`
          : null,
    )
    .filter(Boolean)
    .join('\n');
  return `You are a professional translator localizing a licensed Medicare insurance agency website (altamedicare.com — Bret Swope, licensed agent based in Orem, Utah, serving all of Utah) from English into ${TARGETS[locale]}

This is YMYL healthcare content: accuracy of enrollment periods, penalties, dates, and dollar amounts is critical. Never alter numbers, dates, or the meaning of eligibility rules.

Rules:
1. Some strings contain HTML. Translate ONLY human-visible text. Keep every tag, attribute, href, and inline style byte-for-byte unchanged. Keep HTML entities (e.g. &amp;) as entities.
2. Keep {placeholder} tokens (e.g. {phone}, {tty}, {stepCount}) exactly as-is — same tokens, same count.
3. Controlled terminology (also enforced mechanically after you respond):
${glossaryLines}
4. Natural, clear ${locale === 'es' ? 'Spanish' : 'target-language'} for seniors (65+) — plain language, no bureaucratic calque. Localize idioms; do not translate word-for-word.
5. Return every segment, matched by id.`;
}

async function translateBatch(client, locale, batch) {
  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 64000,
    thinking: { type: 'adaptive' },
    output_config: { format: { type: 'json_schema', schema: OUTPUT_SCHEMA } },
    system: systemPrompt(locale),
    messages: [
      {
        role: 'user',
        content: `Translate these segments:\n${JSON.stringify(
          batch.map((s, i) => ({ id: String(i), text: s.text })),
        )}`,
      },
    ],
  });
  const message = await stream.finalMessage();
  const text = message.content.find((b) => b.type === 'text')?.text ?? '';
  const { translations } = JSON.parse(text);
  const byId = new Map(translations.map((t) => [t.id, t.text]));
  return { byId, usage: message.usage };
}

// ── Reassembly ───────────────────────────────────────────────────────────────
function buildTargetFile(cache, locale, page) {
  const master = readJson(path.join(CONTENT_DIR, MASTER, `${page}.json`));
  const existing = existsSync(targetFile(locale, page)) ? readJson(targetFile(locale, page)) : null;
  const out = structuredClone(master);
  const issues = [];
  for (const [p, sourceText] of flatten(master)) {
    if (isNonTranslatable(sourceText)) {
      // URLs are never machine-translated; a hand-curated localized URL
      // (e.g. es.medicare.gov) in the committed file is preserved.
      const existingUrl = existing ? getPath(existing, p) : undefined;
      if (typeof existingUrl === 'string' && isNonTranslatable(existingUrl)) setPath(out, p, existingUrl);
      continue;
    }
    const cached = cache[cacheKey(locale, sourceText)];
    if (typeof cached !== 'string') {
      issues.push(`${page}:${p}: no translation available`);
      continue; // falls back to master text in the clone
    }
    const finalText = glossaryPostPass(cached, locale);
    issues.push(...validateSegment(sourceText, finalText, locale, `${page}:${p}`));
    setPath(out, p, finalText);
  }
  return {
    content: {
      __translation_note: `AI-translated from ${MASTER}/${page}.json by scripts/translate.js (model ${MODEL}) using src/i18n/glossary.json (CMS es.medicare.gov terminology). Machine-generated — pending human spot-check. Do not hand-edit copy here; fix the English master or pin the term in the glossary, then re-run npm run translate.`,
      ...out,
    },
    issues,
  };
}

// ── Structure validation (--check) ───────────────────────────────────────────
function checkCommitted() {
  let problems = [];
  for (const locale of Object.keys(TARGETS)) {
    for (const page of masterPages()) {
      const tf = targetFile(locale, page);
      if (!existsSync(tf)) continue;
      const master = readJson(path.join(CONTENT_DIR, MASTER, `${page}.json`));
      const target = readJson(tf);
      for (const [p, sourceText] of flatten(master)) {
        const t = getPath(target, p);
        if (typeof t !== 'string') {
          problems.push(`${locale}/${page}:${p}: missing (master has a string here)`);
          continue;
        }
        if (isNonTranslatable(sourceText)) continue;
        problems.push(...validateSegment(sourceText, t, locale, `${locale}/${page}:${p}`));
      }
      // extra keys (beyond __-prefixed notes) would drift from the master shape
      for (const [p] of flatten(target)) {
        if (getPath(master, p) === undefined) problems.push(`${locale}/${page}:${p}: extra key not in master`);
      }
    }
  }
  return problems;
}

// ── CLI ──────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f) => (argv.includes(f) ? argv[argv.indexOf(f) + 1] : undefined);

const isCheck = has('--check');
const isDryRun = has('--dry-run');
const onlyPage = val('--page');
const locales = has('--all')
  ? Object.keys(TARGETS)
  : val('--locale')
    ? [val('--locale')]
    : null;

if (!isCheck && !locales) {
  console.log(`Usage:
  node scripts/translate.js --check                      validate committed translations (no API)
  node scripts/translate.js --all --dry-run              report pending segments + est. cost (no API)
  node scripts/translate.js --all [--page <name>]        translate everything pending
  node scripts/translate.js --locale es [--dry-run]      one locale`);
  process.exit(argv.length ? 1 : 0);
}

if (isCheck) {
  const problems = checkCommitted();
  if (problems.length) {
    console.error(`✗ ${problems.length} problem(s):`);
    problems.forEach((p) => console.error('  - ' + p));
    process.exit(1);
  }
  console.log('✓ All committed translations mirror their master (structure, placeholders, tags, glossary).');
  process.exit(0);
}

for (const l of locales) {
  if (!TARGETS[l]) {
    console.error(`Unknown locale "${l}". Known: ${Object.keys(TARGETS).join(', ')}`);
    process.exit(1);
  }
}

const cache = loadCache();
const seeded = seedCache(cache);
if (seeded) console.log(`Seeded ${seeded} segment(s) from committed translations into the cache.`);

const pages = onlyPage ? [onlyPage] : masterPages();
const plan = [];
for (const locale of locales) {
  for (const page of pages) {
    const pending = pendingSegments(cache, locale, page);
    if (pending.length) plan.push({ locale, page, pending });
  }
}

const totalSegments = plan.reduce((n, w) => n + w.pending.length, 0);
const totalChars = plan.flatMap((w) => w.pending).reduce((n, s) => n + s.text.length, 0);

if (isDryRun) {
  console.log(`Pending: ${totalSegments} segment(s), ~${totalChars} chars across ${plan.length} page-locale pair(s).`);
  for (const w of plan) console.log(`  ${w.locale}/${w.page}: ${w.pending.length} segment(s)`);
  const inTok = Math.ceil(totalChars / 4) + plan.length * 900; // + prompt overhead
  const outTok = Math.ceil((totalChars / 4) * 1.3);
  const cost = (inTok * PRICE_PER_MTOK.input + outTok * PRICE_PER_MTOK.output) / 1e6;
  console.log(`Estimated: ~${inTok} input + ~${outTok} output tokens ≈ $${cost.toFixed(2)} (${MODEL})`);
  if (seeded) writeJson(CACHE_FILE, cache); // persist adopted translations; still no API
  process.exit(0);
}

// ── Live run ─────────────────────────────────────────────────────────────────
if (totalSegments === 0) {
  console.log('Nothing pending — regenerating target files from cache only.');
} else {
  console.log(`Translating ${totalSegments} segment(s) via ${MODEL}…`);
}

let Anthropic;
if (totalSegments > 0) {
  ({ default: Anthropic } = await import('@anthropic-ai/sdk')); // lazy: only a live run needs the SDK
}
const client = Anthropic ? new Anthropic() : null;

const usage = { input: 0, output: 0 };
for (const { locale, page, pending } of plan) {
  // chunk by source-char budget
  const batches = [];
  let current = [];
  let chars = 0;
  for (const seg of pending) {
    if (chars + seg.text.length > MAX_CHARS_PER_BATCH && current.length) {
      batches.push(current);
      current = [];
      chars = 0;
    }
    current.push(seg);
    chars += seg.text.length;
  }
  if (current.length) batches.push(current);

  for (const [bi, batch] of batches.entries()) {
    process.stdout.write(`  ${locale}/${page} batch ${bi + 1}/${batches.length} (${batch.length} segments)… `);
    const { byId, usage: u } = await translateBatch(client, locale, batch);
    usage.input += u.input_tokens + (u.cache_read_input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0);
    usage.output += u.output_tokens;
    let ok = 0;
    for (const [i, seg] of batch.entries()) {
      const t = byId.get(String(i));
      if (typeof t === 'string') {
        cache[cacheKey(locale, seg.text)] = t;
        ok++;
      }
    }
    console.log(`${ok}/${batch.length} ✓`);
    writeJson(CACHE_FILE, cache); // checkpoint after every batch
  }
}

// Regenerate every requested target file from the (now complete) cache.
let allIssues = [];
for (const locale of locales) {
  mkdirSync(path.join(CONTENT_DIR, locale), { recursive: true });
  for (const page of pages) {
    const { content, issues } = buildTargetFile(cache, locale, page);
    writeJson(targetFile(locale, page), content);
    allIssues.push(...issues);
    console.log(`  wrote src/i18n/content/${locale}/${page}.json${issues.length ? ` (${issues.length} issue(s))` : ''}`);
  }
}
writeJson(CACHE_FILE, cache);

if (totalSegments > 0) {
  const cost = (usage.input * PRICE_PER_MTOK.input + usage.output * PRICE_PER_MTOK.output) / 1e6;
  console.log(`Tokens: ${usage.input} in / ${usage.output} out ≈ $${cost.toFixed(2)}`);
}
if (allIssues.length) {
  console.error(`✗ ${allIssues.length} validation issue(s) — review before committing:`);
  allIssues.forEach((p) => console.error('  - ' + p));
  process.exit(1);
}
console.log('✓ Done. Review the diff, then commit the JSON + cache together.');
