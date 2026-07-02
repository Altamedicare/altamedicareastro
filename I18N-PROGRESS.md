# I18N Progress — Phase 1 (Spanish launch)

Per-page status through the factory sequence (playbook §14):
snapshot → extract JSON → componentize → 3-diff → translate → QA → commit.

| Page | Extracted | 3-diff | Spanish | QA | Commit/Tag |
|---|---|---|---|---|---|
| About | ✅ | ✅ | ✅ | ✅ | `i18n-batch-1` |
| Contact | ⬜ | ⬜ | ⬜ | ⬜ | |
| Turning 65 | ⬜ | ⬜ | ⬜ | ⬜ | |
| Medicare Basics | ⬜ | ⬜ | ⬜ | ⬜ | |
| Medicare Supplement | ⬜ | ⬜ | ⬜ | ⬜ | |
| Prescription Drug Plans | ⬜ | ⬜ | ⬜ | ⬜ | |
| Medicare Advantage | ⬜ | ⬜ | ⬜ | ⬜ | |
| Home | ⬜ | ⬜ | ⬜ | ⬜ | (last — special everywhere) |

Shared infrastructure:

| Milestone | Status | Tag |
|---|---|---|
| Framework port (Phase 0) | ✅ | — |
| Extraction spike + 3-diff harness | ✅ | `i18n-batch-1` |
| Chrome (nav/footer/chat/arias) | ✅ | `i18n-chrome` |
| Compliance disclaimer (CMS Spanish) | ✅ | `i18n-chrome` |
| Language switcher | ✅ | `i18n-chrome` |
| Search-modal runtime strings | 🔲 boundary (English) | |
| News ticker | 🔲 boundary (English) | |
| Native-speaker review | ⬜ pending | |
| ES sitemap + Search Console | ⬜ after batch 2 | |
