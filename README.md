# AltaMedicare.com

Astro static site for AltaMedicare — local Medicare education and guidance
for Utah families (Bret Swope, licensed agent, Orem UT). English master with
generated Spanish (`/es/…`) via the multilingual framework.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Static build + Pagefind index. No API, no key needed. |
| `npm run preview` | Serve `dist/` locally |
| `npm run translate -- --check` | Validate committed translations (no API) |
| `npm run translate -- --all --dry-run` | Pending segments + cost estimate (no API) |
| `npm run translate -- --locale es [--page X]` | Generate translations (needs `ANTHROPIC_API_KEY`) |
| `npm run i18n-diff -- before.html after.html` | 3-diff extraction verification |
| `npm run fetch-news` | News suggestion engine (writes for review, never auto-publishes) |

## Multilingual documentation

| Layer | Document |
|---|---|
| Architecture | `Multilingual_Astro_Playbook.pdf` (external) — proven on parkingway.it + vernalmedicare.com |
| Port record / change classification | [I18N-PORT-LOG.md](I18N-PORT-LOG.md) |
| Per-page status | [I18N-PROGRESS.md](I18N-PROGRESS.md) |
| Editorial policy | [SPANISH-STYLE.md](SPANISH-STYLE.md) |
| Release process | [RELEASE-CHECKLIST.md](RELEASE-CHECKLIST.md) |
| Phase 2 architecture (shared modules) | [ADR-002](ADR-002-SHARED-MODULE-LOCALIZATION.md) + [inventory](I18N-P2-INVENTORY.md) |
| Terminology (enforced) | [src/i18n/glossary.json](src/i18n/glossary.json) |
| Compliance text (never machine-translated) | [src/i18n/compliance.ts](src/i18n/compliance.ts) |

Core rules: edit the **English master only** (translations are generated;
corrections flow through the glossary or validator-flagged hand-fixes);
builds never contact the API; every route/link/tag is existence-aware —
a missing translation falls back to English, never a 404.

## Other docs

- [SEO-AUDIT-PLAYBOOK.md](SEO-AUDIT-PLAYBOOK.md) — SEO audit process
- `src/data/figures.ts` — single source of truth for annual CMS figures
  (January update: edit once, both languages rebuild)
