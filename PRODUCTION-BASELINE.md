# Production Baseline — c6b238b

**Status:** current production baseline. Established 2026-08-10.
**Purpose:** freeze a verified description of what is live, so that future GSC
movement can be attributed to a *known* boundary instead of guessed at.

This file is documentation only. It records state; it does not request changes.

---

## 1. The two production boundaries

Everything measured from here on must be attributed to one of these lines.

| # | Boundary | Commit | Date | What changed | Gate |
|---|---|---|---|---|---|
| 1 | URL / canonical migration | `517df60` | 2026-08-10 | `.html` → extensionless across sitemap, canonicals, hreflang; soft-404 eliminated | 8/8 PASS |
| 2 | B-batch (performance / schema / assets) | `c6b238b` | 2026-08-10 | Font Awesome self-hosting, OG raster, About photo, FAQ + WebSite schema, image/CWV attrs | PASS |

Boundary 1 is the one that changes how Google sees the site's URL architecture.
Boundary 2 was verified **not** to disturb it — that verification is the whole
point of this document.

`c6b238b` contains `49753d1` and `c6b238b`, both on top of `517df60`.

---

## 2. Verified baseline facts

Captured 2026-08-10 by live HTTP inspection of production, after Cloudflare
confirmed `c6b238b` green.

| Item | Baseline value |
|---|---|
| Production commit | `c6b238b` |
| Previous migration commit | `517df60` |
| Deployment | successful |
| URL migration gate | 8/8 PASS |
| B-batch gate | PASS |
| Sitemap endpoint | `/sitemap.xml` (direct `<urlset>`, not an index) |
| Sitemap URLs | 198 |
| Sitemap `.html` occurrences | 0 |
| Sitemap hreflang alternates | 330 `xhtml:link` |
| Extensionless URLs | 198/198 → `200`, zero redirects |
| `.html` URLs | exactly one `308` → extensionless target, no loops |
| Canonicals containing `.html` | 0 |
| Hreflang containing `.html` | 0 |
| Hreflang set | `en` + `es` + `x-default`, all extensionless |
| Soft 404 | eliminated — genuine `404`, distinct body, `noindex, follow` |
| Unexpected `X-Robots-Tag` | none |
| Unexpected robots meta noindex | none (60-page scan) |
| Font Awesome | self-hosted 92-glyph solid subset; zero cdnjs references |
| FA CSS / font | `/fa-subset.css?v=1` (5,063 B) · `/fonts/fa-solid-subset.woff2` (10,156 B) |
| FA coverage | 92 CSS rules = 92 glyphs; 0 icons used-but-missing |
| `fa-rotate` | live, `\f2f1`, glyph present, renders on the AEP blog post |
| OG image | `/images/og-image.png` — `200`, `image/png`, 1200×630, 65,740 B |
| `og-image.svg` in metadata | 0 references |
| About photo | `BretSwope.webp` — `200`, `image/webp`, 173,938 B; no `onerror` |
| `bret-photo.svg` | 0 references; URL now `404` |
| FAQ BreadcrumbList | exactly 1 each on `/faq` and `/es/faq` |
| WebSite schema | exactly 1 per homepage; EN `/#website`, ES `/es#website` |
| WebSite publisher | both → `https://altamedicare.com/#organization` |
| SearchAction / potentialAction | 0 occurrences |
| Homepage hero | `Teton1.webp` with `fetchpriority="high"` (EN + ES) |
| teton3 | untouched, byte-identical across all sampled pages |
| SEO regressions vs `517df60` | none found |

**Source-level confirmation.** `git diff 517df60..c6b238b` restricted to
title / H1 / meta description / canonical / hreflang / robots returned only two
import statements and one code comment. Zero SEO-critical content changed.

---

## 3. How this was verified

Method matters, because the baseline is only as good as the check behind it.

- All 198 sitemap URLs swept individually for status + redirect count.
- 60 production pages downloaded and scanned for canonical, hreflang, robots,
  title, H1, description, cdnjs, `og-image.svg`, and internal `.html` links.
- WOFF2 parsed with fontTools to confirm the cmap actually contains `U+F2F1`
  and that all 92 CSS codepoints resolve to real glyphs.
- Every `fa-*` class extracted from live HTML and diffed against the subset —
  the real risk of subsetting is a missing glyph rendering as a blank box.
- OG PNG dimensions read from the IHDR chunk, not assumed from the filename.
- 404 body compared by checksum against the homepage to rule out a soft 404.

Read-only throughout. No repository, Cloudflare, or GSC change was made.

---

## 4. Deliberately deferred — do not "fix" incidentally

Five observations surfaced during verification. None warrants breaking the
current state, and none is a demonstrated defect. They are logged here so that
noticing them again does not restart the discussion.

| # | Observation | Why it is being left alone |
|---|---|---|
| 1 | Orphaned `dist/images/og-image.svg` still returns `200` | No metadata references it. Harmless orphan. |
| 2 | Relative `images/BretSwope.webp` on EN `/about` and `/` | Resolves correctly; `/about/` `308`s to `/about`, so the trailing-slash base that would break it is unreachable. ES pages already use root-relative. |
| 3 | WOFF2 `name` table records stripped by the subsetter | Immaterial — `@font-face` declares the family explicitly and rendering is verified. |
| 4 | Cloudflare managed robots.txt block precedes the repo's `Allow:` rules | **Pre-existing and unrelated to this release.** Cloudflare owns that block; it needs a deliberate dashboard decision, *not* an incidental source edit. Googlebot organic crawling is unaffected. |
| 5 | Extra `WebPage` node on `/es` and `/es/faq` | Not a demonstrated defect. |

Observation 4 specifically is not a robots.txt project. Changing it means
turning off **Dashboard → zone → AI Crawl Control → Manage robots.txt**, which
is a Cloudflare decision with its own consequences.

---

## 5. Backlog, grouped by what unblocks it

The backlog is not one list. It is three lists with different gates.

**Group A — GSC observation (active now).** Not a task list; a waiting period.
Watch crawling, indexing, redirect discovery, canonical selection, consolidation
of old `.html` URLs, and eventual movement of impression/click attribution
between URL forms. Today's performance numbers are not evidence either way.

**Group B — technical backlog (unblocked, not urgent).** LocalBusiness/entity
work (blocked separately on owner facts), the robots.txt managed-block decision,
image structural optimization, Bret image srcset/derivatives, JS-injected header
background/preload strategy, orphaned `og-image.svg`, the extra ES `WebPage`
node. These are safe to schedule but should not be started five-at-once during
the observation window — each deployment muddies the measurement.

**Group C — query/intent SEO (gated on GSC evidence).** DVH, homepage
targeting, prescription-cost ownership, Extra Help, title/H1 decisions,
editorial and internal-link opportunities. Analysis order: DVH → homepage →
prescription-cost → Extra Help.

Group C exists to prevent the classic failure of rewriting a title because it
"looks weak." The question is always: what queries does Google actually
associate with this page, which URL owns them, and is the problem ranking, CTR,
intent mismatch, or merely unfinished URL consolidation?

---

## 6. Attribution rule

From here forward, any GSC change is read against these boundaries:

```
before 2026-08-10        → old URL architecture, old sitemap signals
517df60 (2026-08-10)     → migration effects
c6b238b (2026-08-10)     → B-batch effects
any later commit         → actual SEO/content effects
```

The **consolidation reading rule applies in both directions**: a `.html` →
extensionless split is not a loss when the combined signal is stable, and an
apparent gain on the extensionless row is not improvement either — it is
attribution moving. Always read both rows together:

```
^https://altamedicare\.com/PATH(\.html)?$
```

GSC performance data lags 2–3 days and consolidating 198 URLs takes weeks. Any
pre/post comparison run before ~28 days manufactures noise.

---

## 7. Supersession

This file describes `c6b238b`. When the next release deploys and passes its
gate, update the boundary table in §1 and the fact table in §2 — do not delete
the previous boundary. The value of this document is the *sequence* of
boundaries, not the latest one.

Related: `SEO-AUDIT-PLAYBOOK.md` (how to re-run these checks),
`RELEASE-CHECKLIST.md` (pre-release gates), `GSC-DVH-BASELINE.md` (the
pre-migration performance snapshot to be captured from Search Console).
