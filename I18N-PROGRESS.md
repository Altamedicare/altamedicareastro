# I18N Progress — Phase 1 (Spanish launch)

Per-page status through the factory sequence (playbook §14):
snapshot → extract JSON → componentize → 3-diff → translate → QA → commit.

| Page | Extracted | 3-diff | Spanish | QA | Commit/Tag |
|---|---|---|---|---|---|
| About | ✅ | ✅ | ✅ | ✅ | `i18n-batch-1` |
| Contact | ✅ | ✅ | ✅ | ✅ | `62840d7` |
| Turning 65 | ✅ | ✅ | ✅ | ✅ | `0bcbb30` |
| Medicare Basics | ✅ | ✅ | ✅ | ✅ | `d898789` + fix `76ca95a` |
| Medicare Supplement | ✅ | ✅ | ✅ | ✅ | `3c284e3` |
| Prescription Drug Plans | ✅ | ✅ | ✅ | ✅ | `bb0af9d` (figures tokenized §6.8) |
| Medicare Advantage | ✅ | ✅ | ✅ | ✅ | `0dcf634` → tag `i18n-batch-2` |
| Home | ✅ | ✅ | ✅ | ✅ | tag `i18n-homepage` (174 segments; approval gate after 3-diff) |

Shared infrastructure:

| Milestone | Status | Tag |
|---|---|---|
| Framework port (Phase 0) | ✅ | — |
| Extraction spike + 3-diff harness | ✅ | `i18n-batch-1` |
| Chrome (nav/footer/chat/arias) | ✅ | `i18n-chrome` |
| Compliance disclaimer (CMS Spanish) | ✅ | `i18n-chrome` |
| Language switcher | ✅ | `i18n-chrome` |
| Idempotent glossary post-pass (engine fix) | ✅ | `76ca95a` |
| Spanish style guide (SPANISH-STYLE.md) | ✅ | |
| CMS figures → {placeholder} interpolation | ✅ (PDP page) | `bb0af9d` |
| Search-modal runtime strings | 🔲 boundary (English) | |
| News ticker | 🔲 boundary (English) | |
| Native-speaker review | ⬜ pending | |
| ES sitemap entries + hreflang/x-default in sitemap.xml.ts | ✅ existence-aware | `i18n-homepage` |
| WebPage inLanguage JSON-LD (es pages only) | ✅ | `i18n-homepage` |
| Glossary longest-match precedence + plural pins | ✅ | `i18n-homepage` |
| Protocol-href non-translatable class (sms:/mailto:/tel:) | ✅ | `i18n-homepage` |
| Search Console submission | ⬜ after go-live | |

Phase 2: P2.0 planning (ADR-002 + inventory) and P2.1 engine
infrastructure (sources abstraction, mask manifest + enforcement, shared
accessor plumbing, multi-segment localizeHref) complete — full-site 3-diff
163/163 identical; mask enforcement fixture-tested (4 scenarios). P2.2:
HelpfulTools band bilingual (t() + localizeLabel; consts.TOOLS labels
provisioned for P2.3/P2.5 consumers) — 158/163 identical, the 5 diffs are
exactly the es guide pages, tag-structure-identical.

Glossary pins added: `Medicare Supplement`, `Annual Enrollment Period`,
`Special Enrollment Periods` (plural). Validator catches to date: 3 real
(SEP plural contraction ×2 → longest-match engine fix; Extra Help
double-wrap → idempotent post-pass fix).
