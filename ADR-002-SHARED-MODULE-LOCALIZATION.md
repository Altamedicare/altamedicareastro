# ADR-002 — Shared Module Localization

**Status:** Proposed (P2.0 — planning only, no code changed)
**Date:** 2026-07-02
**Context precedent:** ADR-001 is, in effect, the Multilingual Astro Playbook
(v1 parkingway.it, v2 vernalmedicare.com) plus Alta's Phase 1 execution
record (I18N-PORT-LOG.md): one master language, content as data, committed
cached AI translation, existence-aware everything. This ADR extends those
decisions from *page JSON* to *shared TypeScript data modules* — the content
class Phase 1 deliberately deferred (playbook §3: "shared modules are their
own future translation source").

## Problem

Alta's remaining untranslated copy lives in typed TS modules that feed many
pages at once: FAQ data (9 pages + JSON-LD), location components (25 pages),
drug-assistance data (25 landing pages + the finder), and registry labels in
`consts.ts`. These modules interleave three kinds of strings the page-JSON
pipeline never had to distinguish *within one object*: translatable copy,
verified operational data (URLs, phones, program names — audited quarterly),
and routing/matching keys. Translating them wholesale would corrupt data the
business depends on; not translating them leaves every generated page
half-English.

## Decision 1 — Locale JSON behind typed TS accessors

Translatable strings move to `src/i18n/shared/<module>/{en,es}.json`. The
existing TS module keeps its interface and becomes the **typed accessor**:
it loads the locale JSON (master fallback, same rules as `getPageContent`)
and returns the same shapes call sites already consume, now taking an
optional `locale` argument defaulting to `en`. **Pages never learn that JSON
exists.**

Why not `faqs.es.ts` duplicates:
- The engine's whole contract is JSON: `flatten()` → SHA-256 segment cache →
  seeding → structural-mirror validation (`--check`). Parallel TS files
  escape every one of those guarantees and hand-drift the moment someone
  edits one side.
- TS duplication copies the *non-translatable* fields too — the quarterly
  URL/phone audit would have N copies to keep in sync (the exact drift
  problem this architecture exists to kill).
- Type safety survives: the accessor casts loaded JSON to the existing
  interfaces; call-site signatures barely change (`getFaqCategories(locale)`).

## Decision 2 — Translation masks (field-level protection)

Phase 1's engine protected strings by **class** (URLs, asset paths, page
slugs, protocol hrefs, `__`-prefixed keys). Shared modules need protection
by **field name**, because the dangerous strings don't look dangerous:
`name: "Good Days"` reads like copy; `phone: "1-800-772-1213"` matches no
class; `conditionLabel` must translate while sibling `conditions[]` keys
must not.

Each shared module therefore declares a **mask** — an explicit per-field
policy the engine enforces at flatten time:

```jsonc
// src/i18n/shared/masks.json (read by scripts/translate.js)
{
  "drug-assistance": {
    "translate": ["tagline", "helps", "typical", "eligibility", "conditionLabel", "label"],
    "verbatim":  ["id", "type", "name", "conditions", "url", "urlLabel", "phone",
                   "drugs", "status", "slug", "drug", "generic", "blogSlug", "key"]
  }
}
```

Rules:
- A field not listed in either set is a **hard validation error** — new
  fields must be classified before they can ship (no silent defaults; this
  is how the mask stays honest as modules evolve).
- `verbatim` fields are cloned from the master into every locale file by the
  engine and checked identical by `--check` (structural mirror already does
  this for skipped segments).
- Masks compose with the existing classes; they don't replace them.
- The `__` prefix remains the convention for *page* JSON, where we control
  key names; masks exist because shared-module field names are load-bearing
  API and can't be renamed.

## Decision 3 — Glossary precedence is unchanged and sufficient

Shared-module copy flows through the *same* pipeline: model prompt pinning →
idempotent post-pass → longest-match validation (all hardened during
Phase 1, incl. plural pins). Program names that must never translate get
verbatim glossary entries as a second belt (`"PAN Foundation"`,
`"HealthWell Foundation"`, `"Good Days"`, `"NeedyMeds"`, …) in addition to
their `verbatim` mask — the glossary protects them even inside *translatable*
sibling fields ("apply through the PAN Foundation" in a `helps` string).

## Decision 4 — Physical split follows the data's audit lifecycle

Not every module gets the same treatment; the deciding question is *who
maintains the string and on what cadence* (see I18N-P2-INVENTORY.md tables):

- **faqs** — almost pure copy → whole entries move to locale JSON; `key`,
  `icon`, `href`, `tools` masked verbatim.
- **drugAssistance** — copy interleaved with quarterly-verified data → copy
  fields move to locale JSON **joined by `id`/`slug`**; the TS module keeps
  URLs/phones/status so the quarterly audit still edits exactly one file
  with no translation noise around it.
- **places** — no copy in the module (proper nouns + slugs); the copy lives
  in `src/components/location/*.astro` → those localize via the Phase 1
  *page pattern* (extract → per-place-type JSON), not the module pattern.
  Trail strings ("Medicare in {name}") become chrome-dictionary entries.
- **figures** — already correct: it IS the placeholder source (§6.8). No
  translation, ever. Unchanged.
- **consts** — registry labels (TOOLS titles/descs, CATEGORIES) localize via
  the existing `localizeLabel` map (chrome domain), keyed by the exact
  English string. Contact/URL constants unchanged.

## Decision 5 — How future locales plug in

A new locale is additive at every layer, none of which is module-specific:
1. `LOCALES` entry (locales.ts) + `TARGETS` entry (translate.js prompt).
2. Chrome dictionary + LABELS column; compliance constant from the
   regulator's published wording in that language.
3. Run the engine: page JSON and shared-module JSON generate under the same
   existence-aware fallback — a locale missing a module file falls back to
   English at the accessor, exactly like pages.
4. Masks, accessors, routes, sitemap, and switcher are locale-agnostic
   already.

## Consequences

- (+) One validation regime for all human-facing strings; the quarterly drug
  audit and the translation pipeline stop being able to corrupt each other.
- (+) Translating one module lights up many pages (9 FAQ pages from one file;
  both languages of all of them from one master edit).
- (+) The mask manifest is the missing piece that makes the framework safe
  for arbitrary client data modules — Alta's main upstream contribution.
- (−) The engine grows a second input root (`src/i18n/shared/`) and mask
  enforcement; `--check` runtime grows accordingly.
- (−) `localizeHref` must learn multi-segment paths before the location
  cluster localizes (`utah/davis-county/part-d.html`) — a known Phase 1
  deferral that becomes a P2 prerequisite.
- (−) JSON-LD (FAQPage) starts rendering from locale-dependent data; the
  schema stays drift-proof only because it reads the same accessor as the
  visible page (existing invariant, now locale-aware).
