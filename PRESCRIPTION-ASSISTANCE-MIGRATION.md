# Prescription Assistance — record-system migration (2026-08-27)

AltaMedicare now carries the complete prescription-assistance feature set of
the Vernal Medicare reference implementation: 50 independently-researched,
source-dated medication records rendering deep per-medication guides at
`/<slug>-assistance-program`, discoverable from the finder, the generated
directory, the sitemap, and the main navigation. Vernal was the functional
reference; Alta's branding, bilingual architecture, and design system remain
Alta's own.

**Deploy note:** this shipped into the working tree during the GSC
measurement freeze (`gsc-first-export-result` memory). Building locally does
not deploy; pushing does. Deploying is an owner decision the freeze governs —
nothing here overrides it.

## What was ported (data layer — facts verbatim, links/brand remapped)

- `src/types/MedicationAssistance.ts` — the record contract (Evidence inlined).
- `src/data/medicationAssistance/` — 50 records + `shared.ts` (cross-cutting
  dated sources), `categories.ts` (derived browse views), `drugClasses.ts`
  (taxonomy axis 2), `index.ts` (registry + locked URL/title/H1 pattern +
  Extra Help engine + precedence helpers).
- `src/data/conditions.ts` — taxonomy axis 1 (12 keys incl. `weight`,
  `lung-disease`), a round-trip: Alta's original keys went to Vernal, came
  back extended. The legacy finder keeps its own 10-key list.

Program facts, statuses (`open/limited/closed/verify/not-found`), Medicare
rules (`eligible/conditional/excluded/unknown`), FPL notes, CMS negotiated
prices, `sources[].checked` dates and `lastVerified` (2026-08-26) are
**verbatim** from the reference research. Only two things were adapted:

1. **Brand**: "Vernal Medicare" → "AltaMedicare"; geographic labels dropped.
2. **Internal links**, mapped to Alta equivalents:
   | Vernal | Alta |
   |---|---|
   | `/medicare-extra-help-utah.html` | `/blog/extra-help-explained.html` |
   | `/part-d-plans-vernal.html` | `/prescription-drug-plans.html` |
   | `/medicare-drug-coverage.html` | `/blog/category/drug-coverage.html` |
   | `/insulin-cost-medicare-vernal.html` | `/blog/medicare-35-dollar-insulin-cap.html` |
   | `/medicare-savings-programs-utah.html` | `/blog/medicare-savings-programs.html` |
   | `/medigap.html` | `/medicare-supplement.html` |
   | `/does-medicare-cover-ozempic-wegovy.html` | per-record `/blog/does-medicare-cover-{ozempic,wegovy}.html` |
   | `/does-medicare-cover-mounjaro-utah.html` | `/blog/does-medicare-cover-mounjaro.html` |
   | `/medicare-part-a-vs-part-b.html` | `/medicare-basics.html` |
   | `/medicare-extra-help-calculator.html`, `/medicare-financial-assistance.html` | dropped (no Alta equivalent); replaced with drug-cost calculator / drug-savings links |

## Rendering (Alta design, Vernal information architecture)

- `src/components/content/MedicationAssistancePage.astro` — the record page:
  hero (category kicker · H1 · last-verified pill · verdict summary) → jump
  nav → Quick Answer → About/Why-costly → options-at-a-glance table (FPL
  note) → manufacturer/charitable/government card groups → 7-step How to
  Apply → What You'll Need / If Unavailable → Extra Help (figures from
  `src/data/figures.ts`) → Key Terms → related medications → FAQ (+ FAQPage
  JSON-LD) → dated Sources + related resources → disclaimer → Bret CTA.
- `src/components/content/AssistanceProgramCard.astro`,
  `ApplicationSteps.astro` — ports restyled to Alta tokens.
- `src/pages/[drug]-assistance-program.astro` — **precedence fork**: record
  exists → record page; else the legacy `DrugAssistancePage`. Paths are the
  union of `FEATURED_DRUGS` and the registry.

## Spanish (deliberate scope)

Records are English-only. The 14 translated `/es/*-assistance-program.html`
pages keep rendering the legacy translated template, untouched — ES route
generation still reads `en.json.featuredDrugs` (14), so **no ES routes exist
for the 36 new slugs, no hreflang is asserted for them, and no machine
Spanish was created**. EN pages for the 14 keep their `hreflang="es"`
alternates (same URL, same intent; the ES page is the shallower legacy
experience). Translating the record system is future work and would follow
ADR-002 (copy split + masks), not a copy-paste.

## Finder + directory

- `/drug-assistance-data.js` bridge now also publishes `RECORDS` (slug,
  brand, generic, conditions, category labels, open/total program counts,
  verified month).
- Finder search consults records FIRST (ported `recordForSearch`): a
  researched medication renders one "researched guide" card linking to its
  page — the legacy program directory is not consulted for it (precedence;
  legacy per-program drug lists can drift). Autocomplete lists record brands
  plus uncovered legacy drugs.
- `#all-medications` is now **generated** between markers by
  `scripts/gen-rx-directory.mjs` (grouped by condition, 50 meds, 9 groups) —
  never hand-edited. `node scripts/gen-rx-directory.mjs` regenerates;
  `--check` is a build gate.

## Validation (new gates, wired into `npm run build`)

- `npm run rx:check` = `scripts/check-rx-data.mjs` (esbuild-bundles the TS
  data layer; asserts registry integrity, taxonomy validity, provenance
  — https sources, ISO dates, literal `lastVerified`, ≥5 page sources —
  program-kind discipline incl. the copay-card/Medicare rule, page shape
  (7 steps, ≥4 docs/alternatives/FAQs), related-medication resolution,
  internal-link resolution against real routes, no superlatives/guarantees,
  and `FEATURED_CORE ≡ en.json ≡ es.json` featured-drug parity) plus the
  directory `--check`. This ports the Vernal vitest suite into Alta's
  script-gate pattern (no test runner exists here).
- Existing gates still pass: `fa:check`, `astro build` (216 pages),
  Pagefind (208 indexed), `npm run translate -- --check`.

## Deliberately NOT ported (with reasons)

- **MedicationTicker** (hub marquee) — presentational; the generated
  directory provides the crawlable links. Visual design belongs to Alta.
- **Video placeholders** — records keep the `video` field verbatim, but Alta
  renders a frame only for `status: 'published'` with a real id; advertising
  Vernal's "coming soon" video program on Alta would be a false promise.
- **EXP-003 observation-window test** — encodes a Vernal-specific GSC
  experiment/cohort that doesn't exist here. The *behavior* it protects is
  preserved: the port adds no new does-medicare-cover links beyond what the
  reference records carried (mapped to Alta's existing blog posts).
- **AuthorByline/schema assembler (MedicalWebPage)** — Alta has no byline or
  schema-assembly system; record pages follow Alta's convention (FAQPage
  JSON-LD + the sitewide InsuranceAgency node).
- **llms.txt entries** — parity: neither site lists assistance pages there.

## Maintenance

- Quarterly: re-verify each record against its `sources[].url`; bump that
  record's `lastVerified` (literal — never the shared constant). GLP-1
  records more often. Sept 1 fund-status audit cadence (see
  `drug-assistance-system` memory) now covers 50 records, not 14.
- Annual: FPL figures, `figures.ts`, finder FPL table (unchanged, still
  2025 guidelines — pre-existing Jan 15 routine).
- Adding a medication: create the record file, register it in `index.ts`,
  run `npm run rx:dir`. Navigation, sitemap, finder, and directory update
  automatically; `npm run build` fails if anything is out of sync.
