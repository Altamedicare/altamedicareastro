# Phase 2 Test Plan — definition of done per milestone

Companion to ADR-002 / I18N-P2-INVENTORY.md. Each milestone ships only when
its pass conditions are met; "verified" always means the committed harness
(`npm run i18n-diff`, `npm run translate -- --check`), not eyeballing.

| Milestone | What changes | Pass conditions |
|---|---|---|
| **P2.1** Engine infrastructure | `src/i18n/shared/` root, mask manifest + enforcement, typed accessor plumbing, multi-segment `localizeHref`, validation updates. **No modules migrated.** | 1. **Whole-site 3-diff identical** — every built HTML page (en + es) diffs clean against the pre-P2.1 build. 2. `--check` green with an empty shared root. 3. Mask enforcement proven on a throwaway fixture: unclassified field → hard error; verbatim field → never pending; fixture deleted before commit. |
| **P2.2** consts labels | TOOLS/CATEGORIES labels through `localizeLabel` | 1. HelpfulTools band bilingual on every es page. 2. All EN pages 3-diff identical. 3. LABELS en values byte-identical to consts literals. |
| **P2.3** FAQ module | faqs → shared JSON + accessor; 9 FAQ pages componentized | 1. 3-diff green on all 9 EN pages. 2. `/es/faq/*.html` emit with correct heads. 3. FAQPage JSON-LD on es pages is Spanish and mirrors visible Q&A exactly (same accessor). 4. `--check` green incl. mask (`key`/`icon`/`href`/`tools` identical to master). |
| **P2.4** Drug assistance | copy fields → shared JSON joined by id; 25 landing pages | 1. **Every `name`, `url`, `phone`, `status`, `drugs[]` byte-identical across locales** (mask check). 2. Program names verbatim inside translated sentences (glossary pins). 3. 3-diff green on all 25 EN pages. 4. Native review of `eligibility` strings signed off BEFORE merge. 5. Finder (`public/`) untouched. |
| **P2.5** Location templates | location components → `{placeName}` templates; 25 pages | 1. One es template renders all 6 places (spot-check 3). 2. 3-diff green per page type on EN. 3. Zero unreplaced `{placeName}`/`{stateName}` in any built page. 4. es sitemap gains exactly the emitted location URLs (existence-aware). |
| **P2.6** Framework extraction | `src/i18n/` → reusable package; [GENERIC] items ported to Vernal | 1. Alta builds unchanged from the extracted package (full-site 3-diff). 2. Vernal builds green with the ported engine fixes (its own `--check`). 3. Separate plan doc approved first. |

Cross-milestone invariants (checked at every milestone):
- English output is glyph-identical except whitelisted deltas (switcher,
  hreflang, es-only schema) — and those only on translated pages.
- `npm run translate -- --check` exits 0.
- No new API calls at build time; cache + JSON committed together.
- Boundaries stay boundaries: blog/news, calculators, finder runtime,
  Pagefind internals, vendor widgets.
