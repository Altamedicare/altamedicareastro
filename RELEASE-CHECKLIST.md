# Phase 1 Release Checklist — Spanish launch

Run top to bottom before the Spanish section goes live, and again (abridged)
for every future batch. Complements the per-batch engineering gates that
already run automatically (3-diff, `translate --check`, per-page QA greps).

## Content & language
- [ ] Native Spanish review completed (all 8 pages + chrome + switcher labels)
- [ ] Reviewed against SPANISH-STYLE.md (voice, glossary, CTA wording)
- [ ] Compliance disclaimer verified against current CMS published Spanish

## Manual QA
- [ ] Desktop QA completed (all en/es pairs: headings, spacing, buttons,
      breadcrumbs, CTAs, footer, nav, phone links)
- [ ] Mobile QA completed (hamburger menu, language switcher at narrow
      viewport, CTA button wrap — Spanish runs 15–30% longer, hero spacing)
- [ ] Forms/vendor flows tested (Cal.com booking opens; SunFire portal opens;
      tel: and mailto: links work)
- [ ] Search modal opens and returns es-only results on es pages (Pagefind
      splits by html lang)

## SEO / technical
- [ ] Sitemap includes es URLs + hreflang alternates; submitted in Search
      Console
- [ ] hreflang validated (self + sibling + x-default, bidirectional, on both
      pages of every pair)
- [ ] Canonicals verified (self-referencing; es pages point to /es/…)
- [ ] Structured data validated (Rich Results test on one es page; note:
      LocalBusiness JSON-LD inLanguage still pending — see I18N-PROGRESS.md)
- [ ] 404 scan (crawl /es/ pages; zero broken internal links)
- [ ] Internal links checked (no relative links on any /es/ page — grep gate)
- [ ] Lighthouse spot check (one en + one es page; no regression vs. English)
- [ ] Analytics verified (GA events fire on /es/ pages)

## Release mechanics
- [ ] Verify git working tree is clean (`git status`)
- [ ] All work committed; `npm run translate -- --check` green
- [ ] Annotated tag with QA record (tags are the rollback points)
- [ ] Pushed: `git push origin main && git push --tags`

## Post-launch (weeks 1–6)
- [ ] Search Console: es pages indexed, hreflang recognized, no
      duplicate-content or "alternate page with proper canonical" warnings
- [ ] No major structural changes while Google discovers the new section
- [ ] Watch analytics: es organic traffic, impressions, CTR, calls/forms from
      es pages — this data drives any future-language decision
