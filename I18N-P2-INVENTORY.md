# Phase 2 Inventory & Migration Plan (P2.0 — no code changed)

Companion to ADR-002. Every shared module, classified field by field.
Estimates assume claude-opus-4-8 at current pricing; Phase 1 actuals ran
~2–2.5× the dry-run estimate once thinking tokens are included.

## Module inventory

### 1. `src/data/faqs.ts` + `src/data/faq/*.ts` (8 files, ~65 entries)

| | |
|---|---|
| Current | `FAQ_CATEGORIES: FaqCategory[]` (key, title, blurb, icon, faqs[]) importing 8 per-category `Faq[]` files (q, a, links[{href,label}], tools[]) |
| Target | Strings → `src/i18n/shared/faqs/{en,es}.json`; `faqs.ts` becomes the typed accessor `getFaqCategories(locale)` / `getCategory(key, locale)`; per-category files retire into the JSON |
| Translate | `title`, `blurb`, `q`, `a`, `links[].label` |
| Never translate | `key`, `icon`, `links[].href` (blog hrefs = English boundary; pass through `localizeHref` at render), `tools[]` (registry keys) |
| Placeholders | none today (answers cite figures prose-style; consider `{placeholder}`s from figures.ts opportunistically, not as a migration requirement) |
| Mask required? | **Yes** (field-level: `a`/`q` vs `key`/`icon`/`tools`) |
| Pages lit up | `/faq.html` hub + 8 `/faq/<key>.html` + FAQPage JSON-LD on each (schema reads the same accessor — gains `inLanguage` via localized page context) |
| Est. size | ~250 segments, ~55k chars → est. $0.75, expect ~$1.50–2 |
| Risk | FAQPage JSON-LD must render from the accessor's locale data (already does — same array), and category pages are nested URLs → needs multi-segment `localizeHref` first |

### 2. `src/data/drugAssistance.ts` (25 programs + 10 conditions + ~20 featured drugs)

| | |
|---|---|
| Current | `PROGRAMS: Program[]` (id, type, name, tagline, conditions[], helps, typical?, eligibility, url, urlLabel, phone?, drugs[]?, status?), `CONDITIONS` (key, label), `FEATURED_DRUGS` (slug, drug, generic, conditionLabel, conditions[], blogSlug), `FUND_STATUS_META` labels |
| Target | **Physical split by audit lifecycle (ADR-002 D4):** copy fields → `src/i18n/shared/drug-assistance/{en,es}.json` joined by `id`/`slug`/`key`; TS keeps urls/phones/status so the quarterly verification routine edits one clean file |
| Translate | `tagline`, `helps`, `typical`, `eligibility`, `CONDITIONS[].label`, `conditionLabel`, `FUND_STATUS_META[].label` |
| Never translate | `id`, `type`, `name` (+ glossary verbatim pins for program names), `conditions[]`, `url`, `urlLabel` (domains/“Apply at SSA.gov” — decide per entry: domain-labels verbatim, sentence-labels translate → mask at field level keeps ALL verbatim for launch, revisit), `phone`, `drugs[]` (brand names), `status`, `slug`, `drug`, `generic`, `blogSlug` |
| Placeholders | income thresholds appear prose-style (“400–500% of the federal poverty level”) — leave as copy; they are eligibility *descriptions*, not CMS annual figures |
| Mask required? | **Yes — the motivating case** |
| Pages lit up | 25 `[drug]-assistance-program.html` landing pages (component extraction of the page template rides along, Phase 1 pattern). **Boundary:** the finder itself (`public/prescription-drug-assistance.html` + runtime JS bridge) is a static calculator — stays English until the calculator milestone |
| Est. size | ~110 segments, ~18k chars → est. $0.30, expect ~$0.60–0.80 |
| Risk | HIGHEST-VALUE, HIGHEST-CARE module (YMYL assistance-seekers); native review of `eligibility` strings is mandatory before launch |

### 3. `src/data/places.ts` (6 places × 4 page types = 25 pages incl. hub)

| | |
|---|---|
| Current | Pure data (name, slug, kind, stateName) + URL/breadcrumb helpers. **No body copy in the module** — copy lives inline in `src/components/location/*.astro` (~350 lines: Overview, Advantage, Supplement, PartD, Tools, CTA, Faq, Breadcrumb) |
| Target | Place objects unchanged (proper nouns verbatim). Location *components* localize via the Phase 1 page pattern: copy → `src/i18n/shared/location/{en,es}.json` keyed by page type, with `{placeName}`/`{stateName}` placeholders; trail strings ("Home", "Medicare in {name}") → chrome dictionary |
| Translate | component copy (per page type, shared across all places), breadcrumb label patterns |
| Never translate | `name`, `slug`, `kind`, `stateName` (breadcrumb interpolates the verbatim name) |
| Placeholders | `{placeName}`, `{stateName}` — one translated template serves all 6 places (this is where 1 translation → 25 pages) |
| Mask required? | Trivial (module is all-verbatim); the work is component extraction + placeholder discipline |
| Pages lit up | 25 location pages |
| Risk | **Blocked on multi-segment `localizeHref`** (`utah/davis-county/part-d.html`); also 25 new es pages triples the es sitemap — existence-aware generator already handles it |

### 4. `src/data/figures.ts`

| | |
|---|---|
| Current/Target | **Unchanged.** It IS the §6.8 placeholder source; consumed via `interp()` (proven on prescription-drug-plans). |
| Translate | nothing, ever |
| Mask required? | No — never enters the pipeline |
| P2 action | none (opportunistic: route more prose-cited figures through it as pages/modules are touched) |

### 5. `src/consts.ts`

| | |
|---|---|
| Current | TOOLS registry (href, icon, title, desc), CATEGORIES + NEWS_CATEGORIES (title, icon, blurb), PHONE/CONTACT/COMPARE constants |
| Target | Labels localize through the existing `localizeLabel()` LABELS map in locales.ts (chrome domain — hand-authored, keyed by exact English string); module unchanged |
| Translate | `title`, `desc`, `blurb` values (~40 strings) — via LABELS, not the engine |
| Never translate | `href`, `icon`, keys, PHONE_*, CONTACT_URL, COMPARE_PLANS_URL |
| Mask required? | No (never enters the engine) |
| Pages lit up | HelpfulTools band on every translated page (currently the last English block on es guide pages); blog/news category chrome stays English (collections boundary) |
| Risk | none — same invariant as Phase 1 chrome (en values byte-identical) |

## Milestone map (revised from kickoff plan)

| Milestone | Content | Gate |
|---|---|---|
| P2.1 | Engine: `src/i18n/shared/` root + mask manifest + accessor pattern; **multi-segment `localizeHref`** (prerequisite, flows upstream); unit checks for masks | `--check` green on an empty shared root; 3-diff green site-wide (no output change) |
| P2.2 | consts labels via LABELS (HelpfulTools band bilingual) — smallest, proves nothing regressed | 3-diff en; es QA |
| P2.3 | FAQ module + 9 pages (component extraction of faq pages rides along) | 3-diff ×9; FAQPage JSON-LD QA both locales |
| P2.4 | Drug assistance: physical split + masks + 25 landing pages | native review of eligibility strings before merge |
| P2.5 | Location cluster: component extraction with `{placeName}` templates → 25 pages | 3-diff per page type; es sitemap swell check |
| P2.6 | Framework extraction (`src/lib/i18n/` or package) — generalize from parkingway + vernal + alta; port [GENERIC] items back to Vernal | separate planning doc; not started until P2.5 ships |

## Cross-cutting prerequisites & risks

1. **Multi-segment `localizeHref`** — P2.1, before FAQ (faq/*) and locations
   (utah/*). Design note: extend the page-link test to registered nested
   slugs only; assets and unregistered paths keep passing through.
2. **Sitemap FAQ/location alternates** — the existence-aware generator
   already computes from `getAvailableLocales`; nested slugs work once
   `localePageHref` accepts them.
3. **Validator runtime** — ~400 more segments across shared JSON; fine.
4. **Native review scope grows** — the drug-assistance eligibility strings
   are the most consequential Spanish on the site; schedule review at P2.4,
   not at the end.
5. **Nothing in P2 touches**: blog/news collections, the 11 static
   calculators, the finder runtime, Pagefind internals (all documented
   boundaries).
