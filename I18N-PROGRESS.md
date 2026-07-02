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
| Home | ⬜ | ⬜ | ⬜ | ⬜ | next — dedicated milestone (549 lines, special everywhere) |

Shared infrastructure:

| Milestone | Status | Tag |
|---|---|---|
| Framework port (Phase 0) | ✅ | — |
| Extraction spike + 3-diff harness | ✅ | `i18n-batch-1` |
| Chrome (nav/footer/chat/arias) | ✅ | `i18n-chrome` |
| Compliance disclaimer (CMS Spanish) | ✅ | `i18n-chrome` |
| Language switcher | ✅ | `i18n-chrome` |
| Idempotent glossary post-pass (engine fix) | ✅ | `76ca95a` |
| CMS figures → {placeholder} interpolation | ✅ (PDP page) | `bb0af9d` |
| Search-modal runtime strings | 🔲 boundary (English) | |
| News ticker | 🔲 boundary (English) | |
| Native-speaker review | ⬜ pending | |
| ES sitemap entries + hreflang in sitemap.xml.ts | ⬜ with homepage milestone | |
| Search Console submission | ⬜ after go-live | |

Glossary pins added during Batch 2: `Medicare Supplement`, `Annual
Enrollment Period`. Validator catches to date: 2 real (SEP plural
contraction; Extra Help double-wrap → engine fix).
