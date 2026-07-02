# I18N Port Log — Vernal → Alta (Phase 0)

Upstream: `../vernalmedicareastro` (v2 of the multilingual framework; playbook:
`Multilingual_Astro_Playbook.pdf`). This log classifies **every modification**
made while porting, so the eventual framework extraction knows which
differences are architectural and which are project-specific.

Classification key:
- **[GENERIC]** — improvement that should flow back into the reusable framework
- **[ALTA]** — Alta-specific adaptation; belongs only in this repo
- **[LEGACY]** — Vernal assumption that should be eliminated from the framework

## Files ported

| Alta file | Upstream | Status |
|---|---|---|
| `src/i18n/locales.ts` | `src/i18n/locales.ts` | ported, chrome dictionary reset |
| `src/i18n/content.ts` | `src/i18n/content.ts` | ported, origin + policy notes changed |
| `src/i18n/content-pages.ts` | `src/i18n/content-pages.ts` | ported, registry emptied (spike page only) |
| `src/i18n/glossary.json` | `src/i18n/glossary.json` | ported, brand terms swapped |
| `scripts/translate.js` | `scripts/translate.js` | ported verbatim except branding |
| `src/pages/[locale]/[...path].astro` | same path | ported, component map emptied |
| `scripts/i18n-diff.mjs` | *(none — Vernal ran diffs ad hoc)* | new |

## Changes, classified

### [GENERIC] — should flow upstream into the framework
- **`scripts/i18n-diff.mjs`**: the playbook's 3-diff verification (tag
  structure / visible text / entity-leak scan) as a committed, cross-platform
  Node script instead of the ad-hoc bash+perl snippet. Vernal never committed
  its harness; every future site should get this file as-is.
- **`content.ts` URL-policy comment** now states explicitly that multi-segment
  paths pass through `localizeHref` unrewritten. This was implicit in Vernal
  (it had no nested pages); making the boundary explicit is a framework
  improvement (and a Phase 2 extension point — see [ALTA] below).

### [ALTA] — project-specific; do not generalize
- `SITE_ORIGIN = 'https://altamedicare.com'` in `content.ts`.
- Glossary brand terms: `AltaMedicare`, `Bret Swope`, `SunFire` verbatim;
  dropped Vernal's `Uintah Basin`; added `Low Income Subsidy` (used on Alta's
  dual-eligible/drug-savings pages). CMS-pinned Spanish terms carried over
  unchanged — they are regulator vocabulary, not project data.
- `translate.js` system prompt branding (altamedicare.com / Bret Swope / Orem).
- **Nested-page clusters** (`utah/…`, `faq/…`, `blog/…`): `localizeHref` only
  rewrites single-segment `.html` links; nested paths pass through to the
  English page. Correct for launch (those clusters are outside the ES
  boundary), but Phase 2 (places/faq as translation sources) will need
  multi-segment support — that extension is Alta's contribution and should
  then flow upstream, reclassified as [GENERIC].
- Chrome dictionary (`strings`) and `LABELS` in `locales.ts` reset to
  near-empty: the INVARIANT (every `en` value byte-identical to the component
  literal it replaces) means entries can only be added while localizing Alta's
  actual chrome (Phase 1). Vernal's entries were Vernal's literals.

### [LEGACY] — Vernal assumptions removed / flagged
- Header comments referencing Vernal milestone numbers ("Phase A.5",
  "Milestone 2", "M3/M44") stripped. The framework should not carry one
  project's roadmap labels.
- Vernal's `content-pages.ts` registry and `[...path].astro` COMPONENTS map
  enumerated 16 Vernal pages — emptied here. **Framework note:** the component
  map + registry pairing is boilerplate every site re-fills by hand; the
  extraction should consider generating both from one declaration.
- Vernal is Astro 6 / Alta is Astro 4.16: no code changes were required
  (`import.meta.glob`, dynamic routes, and `set:html` behave identically), but
  the framework extraction must not assume Astro 6-only APIs.
- Vernal's `verify.mjs` (vitest + astro-check ratchet) was **not** ported —
  Alta has no test suite or typecheck baseline yet. Decide separately whether
  to adopt it; it is quality infrastructure, not part of the i18n system.

## Environment / decisions record
- **No Astro i18n config block** — same as Vernal: localized routes come
  entirely from the dynamic route + `format:'file'` naming. `astro.config.mjs`
  comment updated (also fixed its stale claim that the sitemap is
  hand-maintained; it's generated at `src/pages/sitemap.xml.ts`).
- Model `claude-opus-4-8` at $5/$25 per MTok re-verified current 2026-07-01
  via the claude-api reference; engine's API usage (structured outputs via
  `output_config.format`, adaptive thinking, streaming) is current.
- `@anthropic-ai/sdk` intentionally **not** added to package.json yet —
  `--check`/`--dry-run` need no SDK; add it when Phase 1 runs live translation.
- New npm scripts: `translate`, `i18n-diff`.

## Extraction spike (about.html)
- `src/pages/about.astro` → `src/i18n/content/en/about.json`, lossless:
  HTML-bearing strings stored verbatim (entities included) and rendered via
  `set:html`; phone display tokenized as `{phone}` from `consts.PHONE_DISPLAY`
  (§6.8). Registered in `content-pages.ts`. 3-diff result recorded below.

### 3-diff record
- **Extraction spike** (about.astro → JSON, rendered in place): ✓ tag
  structure (584 tags) / ✓ visible text (3381 glyphs) / ✓ zero entity leaks.
- **Componentization** (AboutPage.astro shared component + thin wrapper +
  COMPONENTS registration): re-diffed against both the post-extraction and
  the original pre-extraction snapshots — all ✓.
- **Chrome-link refactor** (MainLayout page hrefs → `localizeHref`, `<html
  lang>` → derived): index.html (1223 tags / 8526 glyphs) and contact.html
  (669 tags / 2750 glyphs) both ✓ — `localizeHref` is an identity for the
  default locale, so English output is glyph-stable site-wide.

## Post-Phase-0 session (first localized page loop)

- **[GENERIC]** `MainLayout.astro` made locale-aware: `lang` derives from
  `getLangFromUrl(Astro.url)` (no prop threading), all 35 chrome page-link
  hrefs route through a `href()` helper wrapping `localizeHref`. Chrome TEXT
  remains English pending the Phase 1 chrome milestone.
- **[GENERIC]** `AboutPage.astro` injects hreflang alternates + `og:locale`
  through MainLayout's existing `<slot name="head">` — per-page, existence-
  aware head additions with zero layout changes. Pattern worth keeping.
- **[ALTA]** Relative asset paths (`images/bret-photo.svg`) break under
  `/es/`; AboutPage carries a local `asset()` absolutizer (identity for the
  default locale). Generalize into content.ts when a second page needs it.
- **[ALTA]** `@anthropic-ai/sdk` added to devDependencies. Live translation
  ran 2026-07-02: es/about.json (26/26 segments, $0.05), validator green.
  Committed + tagged `i18n-batch-1`.

## Chrome milestone (tag: i18n-chrome)

- **Glossary**: pinned `Medicare Supplement → Seguro Suplementario de
  Medicare` (CMS vocabulary); corrected the one committed occurrence in
  es/about.json ("Complementario" → "Suplementario"); `--check` green.
  Seeding makes the hand-correction authoritative (§9).
- **[ALTA]** `src/i18n/compliance.ts`: TPMO multi-plan disclaimer (footer,
  every page). English byte-identical to the previous literal; Spanish is the
  CMS-published wording (structure ported from Vernal's
  `businessDisclaimers()`, text adapted to Alta's SHIP-variant English).
  NEVER machine-translated.
- **[ALTA]** Chrome `t()` dictionary populated: 48 keys (nav, footer, chat
  panel, aria labels, search-modal shell). Every `en` value byte-identical to
  the literal it replaced — verified by 3-diff (index/contact glyph-identical
  after the conversion). `es` values hand-authored, reusing Vernal's vetted
  labels where the English matched. Native-speaker review still pending
  (YMYL rule: machine rules necessary, not sufficient).
- **[GENERIC]** `LanguageSwitcher.astro`: existence-aware (renders nothing on
  untranslated pages — verified: index/contact emit no switcher and are
  byte-identical); current language links to itself; scoped styles.
  Mounted in MainLayout's `.header-cta`.
- **Verification record**: untranslated EN pages glyph-identical; EN about's
  ONLY delta is the switcher block (proven by strip-and-rediff); /es/about
  chrome fully Spanish (nav, footer, disclaimer, chat, arias), zero relative
  links, `--check` green.
- **Documented boundaries (still English by design)**: Pagefind search-modal
  runtime strings (inline JS — needs a lang-keyed dictionary, Phase 1+ item);
  MedicareNews ticker + items (news is outside the launch boundary);
  "powered by" footer credit.

## Homepage milestone (tag: i18n-homepage)

- Homepage extracted (174 segments incl. data-title/data-desc video-tab copy;
  __-prefixed functional data never translated), componentized, 3-diff green
  on first build (1223 tags / 8526 glyphs / 0 leaks), screenshot-verified.
  Extraction approved by owner before translation (extra gate for the most
  visible page).
- **[GENERIC]** 3-diff harness: tag comparator now decodes entities inside
  tags — attribute authored as &ldquo; vs re-rendered real “ is the same DOM
  (glyph bar extended to attributes).
- **[GENERIC]** Engine: protocol hrefs (sms:/mailto:/tel:) added to the
  non-translatable classes. NOTE: first patch half-applied (usage without
  definition) and the string-presence verification missed it; caught by the
  --check crash. Lesson recorded: verify behavior, not string presence.
- **[GENERIC]** Engine: glossary longest-match precedence in post-pass AND
  validator, with plural pins ('Special Enrollment Periods'). Root cause: the
  singular-substring check fired inside plural sources (hit twice —
  medicare-basics and index). The earlier singular hand-fix on
  medicare-basics was reverted to the model's natural plural, which now
  validates. Flows upstream with the idempotent post-pass fix.
- **[ALTA]** sitemap.xml.ts: existence-aware i18n — translated URLs gain
  xhtml:link alternates (self + sibling + x-default) and their /es siblings
  get their own entries; untranslated entries byte-unchanged.
- **[ALTA→GENERIC]** inLanguage: NOT added to LocalBusiness (invalid property;
  availableLanguage/knowsLanguage would be an unstaffed-support claim —
  playbook §8 honesty check). Emitted instead as a WebPage JSON-LD with
  inLanguage on localized pages only; English output byte-stable.

## P2.1 — shared-module engine infrastructure (no modules migrated)

- **[GENERIC]** translate.js generalized from pages to SOURCES (page JSON +
  shared modules). Field-level mask manifest (src/i18n/shared/masks.json):
  unmasked module = hard error; unclassified field = hard error; verbatim
  fields cloned from master and --check-enforced byte-identical. Fixture-
  tested (4 scenarios), fixture deleted before commit.
- **[GENERIC]** src/i18n/shared.ts accessor plumbing (getSharedModule with
  master fallback; existence helper). No consumers yet.
- **[GENERIC]** localizeHref/isPageSlug accept nested slugs
  (faq/enrollment.html, utah/…/part-d.html) — the Phase 1 deferral, unblocking
  P2.3/P2.5. Full-site 3-diff proved zero output change (163/163).
- Maintenance note: translate.js rewritten in full (the sentinel now uses
  printable   escapes — the earlier raw NUL bytes made the file grep
  as binary). Behavioral checks re-run post-rewrite: idempotency, plural
  wrapping, double-pass stability, --check, dry-run.

## P2.3 — FAQ system (first shared-module migration)

- 100 FAQs + hub/category shell strings extracted losslessly (eval of the
  data literals) to shared/faqs/en.json; 8 src/data/faq/*.ts files retired;
  faqs.ts is now the typed accessor (FAQ_CATEGORIES stays as the English
  view for sitemap/llms.txt).
- **[GENERIC]** Virtual-page mechanism in content.ts: module-driven slugs
  (VIRTUAL_PAGE_SOURCES) get existence-aware availability + route emission
  without page JSON. hreflang/switcher/sitemap/localePageHref all work
  unchanged because they read getAvailableLocales.
- **[GENERIC]** Seed guard in translate.js: never adopt a target string
  identical to its master source (an untranslated fallback from a partial
  run would otherwise freeze as the 'translation'). Found while diagnosing
  a 49/50 batch — that case self-healed via shared cacheKey for
  duplicate-text segments, but the trap is real for unique text.
- getSharedModule now deep-localizes embedded hrefs (same rule as
  getPageContent); committed files stay verbatim-maskable.
- Validator catches this run: 1 missing segment (self-healed), 1 real pin
  drop ('las Partes A y B' → hand-fixed to 'la Parte A y la Parte B',
  satisfying both Parte A and Parte B pins).
- Verified: EN refactor 163/163 identical BEFORE translation; after
  translation the only deltas are (a) es pages' FAQ links upgrading to
  /es/faq* — exactly ONE differing tag per page (principle 9 compounding),
  (b) EN faq pages gaining switcher+hreflang (whitelisted; strip-verified
  identical). FAQPage JSON-LD matches visible Spanish text exactly.

## P2.4 — Drug assistance (the mask milestone)

- **[ALTA→GENERIC]** Physical split by audit lifecycle (ADR-002 D4):
  drugAssistance.ts now holds ONLY operational data (ids, names, URLs,
  phones, drugs, statuses — the quarterly-audit surface, one clean file);
  copy joined from shared/drug-assistance/{locale}.json by id/key/slug via
  typed accessors. Landing template componentized (slug from URL).
- Finder bridge (drug-assistance-data.js) BYTE-IDENTICAL after the split —
  the joined English view reproduces each entry's original key order.
- 22 glossary verbatim pins for program/support-brand names (Good Days,
  PAN Foundation, Janssen CarePath, …) guard prose mentions; name FIELDS
  never enter the pipeline at all.
- Verification: full-site 3-diff 172/172 identical pre-translation;
  translation 138/138 first-pass clean (0 validator issues); operational
  URLs/phones 25/25 identical EN↔ES on the built pages; EN drug pages
  strip-verified (switcher+hreflang only); 14 es pages + sitemap alternates.
- NATIVE REVIEW GATE: eligibility strings (the most consequential Spanish
  on the site) pending sign-off before push/deploy.
