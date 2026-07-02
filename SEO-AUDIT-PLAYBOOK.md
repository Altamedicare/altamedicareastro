# Astro + Cloudflare Pages — SEO Audit & Indexing Playbook

A repeatable checklist for auditing and fixing technical/local SEO on any
Astro site deployed to Cloudflare Pages. Built from the AltaMedicare audit.

> **How to use:** Work top to bottom. Each step has a *command/where to look*,
> *what good looks like*, and *the fix*. Replace `EXAMPLE.com` with the target
> domain. Most checks are `curl` one-liners so they work on any site, even ones
> you don't have the source for.

---

## 0. Setup — know the two URLs you're testing

- **Live site:** `https://EXAMPLE.com` (and `https://www.EXAMPLE.com`)
- **Source repo:** the Astro project (`astro.config.mjs`, `src/`, `public/`)

Always verify against the **live site**, not just the repo — Cloudflare,
caching, and managed features change what's actually served.

---

## 1. Crawl the live infrastructure first (5 curl checks)

These three commands catch the highest-impact issues fast.

### 1a. Canonical host — is www OR non-www redirecting?
```bash
curl -sI https://EXAMPLE.com/      | grep -iE "HTTP/|location"
curl -sI https://www.EXAMPLE.com/  | grep -iE "HTTP/|location"
```
- **Good:** one returns `200`, the other returns `301` → the canonical host.
- **Bad:** *both* return `200` → duplicate host (crawl waste, split authority).
- **Fix:** pick the host your canonicals already use (check `astro.config.mjs`
  `site:` and the `<link rel=canonical>` in page source). 301 the other to it.
  On Cloudflare Pages this **cannot** be done in `public/_redirects` (path-only).
  Do it in **Dashboard → zone → Rules → Redirect Rules**:
  - When `Hostname equals www.EXAMPLE.com`
  - Then 301 → `concat("https://EXAMPLE.com", http.request.uri.path)`

### 1b. robots.txt — is Cloudflare overriding it?
```bash
curl -s https://EXAMPLE.com/robots.txt
```
- Compare to `public/robots.txt` in the repo. If the live file has a
  `# BEGIN Cloudflare Managed content` block, Cloudflare's **AI Crawl Control /
  Content Signals** feature is prepending rules.
- **Check Googlebot isn't blocked:** look for `User-agent: *` → `Allow: /` and
  `search=yes`. (Google organic crawling is unaffected by `Google-Extended`
  being disallowed — that only opts out of Gemini *training*.)
- **Watch for conflicts:** if Cloudflare `Disallow:`s a bot (e.g. `GPTBot`) and
  your repo file re-`Allow:`s it, the *first* matching group wins (Cloudflare),
  so your repo rule silently does nothing.
- **Fix:** decide who owns robots.txt. To own it from code, turn off
  **Dashboard → zone → AI Crawl Control → Manage robots.txt**. Then the repo
  `public/robots.txt` is served verbatim. Always keep a `Sitemap:` line.

### 1c. Soft 404 — do bogus URLs return 200?
```bash
curl -sI https://EXAMPLE.com/this-page-does-not-exist-zzz.html | grep -iE "HTTP/"
curl -s  https://EXAMPLE.com/this-page-does-not-exist-zzz.html | grep -oiE "<title>[^<]*</title>"
```
- **Good:** `HTTP/.. 404`.
- **Bad:** `200 OK` returning the homepage/another page → **site-wide soft 404**.
  Cloudflare Pages serves `index.html` for unmatched routes when there's no
  `404.html`. Google flags every stale/mistyped URL as a duplicate.
- **Fix:** add `src/pages/404.astro`. Astro builds `404.html`; Cloudflare Pages
  serves it with a correct **404 status** automatically. Use your main layout so
  it has the header/footer + links to top pages + search.

### 1d. Sitemap — does it exist, is it valid XML, how many URLs?
```bash
curl -sI https://EXAMPLE.com/sitemap.xml | grep -iE "HTTP/|content-type"
curl -s  https://EXAMPLE.com/sitemap.xml | grep -c "<loc>"
curl -s  https://EXAMPLE.com/sitemap.xml | grep -oE "<(urlset|sitemapindex)" | head -1
```
- **Good:** `200`, `content-type: application/xml`, a sensible URL count,
  valid root tag.
- You only need **one** sitemap if it's a flat `<urlset>` containing every URL.
  A `<sitemapindex>` is only needed past ~50k URLs.

### 1e. Headers — any accidental noindex?
```bash
curl -sI https://EXAMPLE.com/ | grep -iE "x-robots-tag"
```
- **Bad:** any `X-Robots-Tag: noindex`. Check `public/_headers` and Cloudflare
  Transform Rules if present.

---

## 2. Astro config & sitemap source

- `astro.config.mjs`: confirm `site:` is the **canonical host** (matches 1a).
- If `build.format: 'file'` (preserves `*.html` URLs), the `@astrojs/sitemap`
  integration often won't work — sites use a **dynamic** `src/pages/sitemap.xml.ts`
  instead. If so, remove the unused `@astrojs/sitemap` dep and fix stale comments.
- A good dynamic sitemap pulls blog/news URLs from content collections so new
  posts auto-appear, and adds `<lastmod>` to articles.
- **Improvement:** add `<lastmod>` to static/location URLs too, to nudge recrawls.

---

## 3. `<head>` / per-page SEO (read the main layout)

Open `src/layouts/MainLayout.astro` (or equivalent). Verify each page sets:

| Item | Good | Common gap |
|------|------|-----------|
| `<title>` | unique per page | — |
| `<meta name=description>` | unique per page | — |
| `<link rel=canonical>` | absolute, self-referencing | wrong host |
| `<meta name=robots>` | `index, follow` | accidental noindex |
| Open Graph | title/desc/type/url/image | **og:image is SVG** (unsupported!) |
| Twitter Card | `summary_large_image` + image | **often missing entirely** |
| `og:locale`, `og:site_name` | set | missing |
| favicon | svg + ico | — |
| apple-touch-icon / manifest | present | missing (low priority) |
| one `<h1>` per page | yes | duplicate/none |

**og:image must be a 1200×630 PNG/JPG.** SVG is ignored by Google, Facebook,
LinkedIn, X, iMessage. This is the single most common "looks fine but broken" bug.

Check across all pages quickly:
```bash
grep -rl "twitter:" src/ || echo "NO twitter cards"
grep -rl "sameAs"    src/ || echo "NO sameAs (org not linked to GBP/socials)"
grep -rlE "GeoCoordinates|latitude" src/ || echo "NO geo coords"
```

---

## 4. Structured data (JSON-LD)

Inspect each layout for `application/ld+json`. Target coverage:

- **Sitewide:** `Organization` or `LocalBusiness`/`InsuranceAgency` with
  `@id`, `name`, `url`, `telephone`, `logo` (raster), `image`, `address`
  (incl. `streetAddress` + `postalCode`), **`geo`**, `openingHoursSpecification`,
  `priceRange`, and **`sameAs`** (Google Business Profile + socials).
- **Homepage:** `WebSite` + `SearchAction` (sitelinks search box) if the site
  has on-site search.
- **Blog posts:** `BlogPosting` + `BreadcrumbList` + `FAQPage` (when FAQs exist).
- **News:** `NewsArticle` with a rich `Person` author (`@id`, `jobTitle`, `url`)
  for EEAT.
- **Location pages:** `BreadcrumbList` + `FAQPage`; ideally a localized
  business/service block with that area's `areaServed` + geo.

Validate at <https://search.google.com/test/rich-results>.

---

## 5. Standalone static pages (`public/*.html`)

Hand-written HTML in `public/` bypasses the Astro layout. They commonly **lack
canonical + OG tags** even though they're in the sitemap. Check:
```bash
grep -rl "canonical" public/*.html || echo "NO canonical in static pages"
```
**Fix:** add self-referencing canonical + OG block to each, or migrate them to
`.astro` using the shared layout.

---

## 6. Local SEO (for location-based businesses)

- **NAP consistency:** one exact business name + phone + address used identically
  on site, in schema, on Google Business Profile, and in every directory.
- **LocalBusiness schema** with `geo`, `areaServed`, `openingHours`, `sameAs`→GBP.
- **Per-location pages** (city/county) each with unique copy naming local cities,
  their own H1, breadcrumb + FAQ schema, and `areaServed`.
- **Google Business Profile** is the biggest off-site lever: correct category,
  service area, website link, regular posts, and **reviews**. Tie it to the site
  via `sameAs` so Google links the entity.

---

## 7. Google Search Console setup

- **Use a Domain property**, not URL-prefix. Domain covers www + non-www + http/https
  in one property (critical while a host redirect propagates). Verified via DNS TXT.
- **Steps:**
  1. GSC → Add property → **Domain** → `EXAMPLE.com`.
  2. Copy the `google-site-verification=...` TXT value.
  3. Cloudflare → DNS → add `TXT` record, name `@`, paste value. (Instant on CF.)
  4. GSC → Verify.
  5. GSC → Sitemaps → submit `sitemap.xml` (one only).
  6. **Remove stale sitemaps** (old platform leftovers showing "error"/"unknown" —
     they usually return HTML/soft-404, which GSC can't parse).
  7. URL Inspection → Request Indexing for ~10 money pages + location hubs.
- **Reading the Sitemaps report:** "Discovered pages: 0" right after submit just
  means Google hasn't re-read yet — it populates on next fetch. A flat `<urlset>`
  sometimes shows as type "Sitemap index"; harmless.

---

## 8. Page Indexing report — what each status means

| GSC status | Cause | Fix |
|------------|-------|-----|
| Discovered – not indexed | crawl budget / thin / new | improve internal links, content depth; request indexing |
| Crawled – not indexed | quality/duplication signal | strengthen content, canonical, uniqueness |
| Duplicate, no user canonical | dup host/params | 301 host (step 1a), set canonical |
| Alternate page w/ proper canonical | working as intended (e.g. www→apex) | none |
| Soft 404 | bogus URL returns 200 | add `404.astro` (step 1c) |
| Redirect error | chain/loop | flatten to single 301 |

---

## 9. Performance / Core Web Vitals

- **og/social + content images:** raster, sized (`width`/`height`), `loading="lazy"`
  below the fold, modern format (WebP/AVIF).
- **Render-blocking CSS from CDN** (e.g. full Font Awesome): subset or self-host.
- **Fonts:** `font-display: swap`, preconnect/preload critical fonts.
- **Analytics (GA4):** `async`; load after consent if a cookie banner is required.
- Measure with Lighthouse + PageSpeed Insights; track LCP / CLS / INP.

---

## 10. Priority order (do in this sequence)

1. **301 www → apex** (or vice versa) — Cloudflare Redirect Rule.
2. **GSC Domain property + submit the one sitemap + request indexing.**
3. **Add `404.astro`** to kill the site-wide soft 404.
4. **Remove stale sitemap** entries in GSC.
5. **Resolve Cloudflare managed-robots.txt** conflict.
6. **Raster og:image (1200×630) + Twitter cards + og:locale.**
7. **Enrich LocalBusiness schema** (geo, address, hours, `sameAs`→GBP).
8. **Canonical + OG on static `public/*.html` pages.**
9. **WebSite/SearchAction schema** (sitelinks search box).
10. **Off-site:** Google Business Profile + NAP citations + reviews.

> Steps 1, 2, 4, 5, 10 are dashboard/Google actions. Steps 3, 6, 7, 8, 9 are
> code changes in the repo.

---

## Appendix — one-shot diagnostic block

Paste this, replacing the domain, to fingerprint any site in ~10 seconds:
```bash
D=EXAMPLE.com
echo "== host redirect =="; curl -sI https://$D/ | grep -iE "HTTP/|location"; curl -sI https://www.$D/ | grep -iE "HTTP/|location"
echo "== soft 404 =="; curl -sI https://$D/nope-zzz-404.html | grep -iE "HTTP/"
echo "== noindex header =="; curl -sI https://$D/ | grep -iE "x-robots-tag" || echo none
echo "== sitemap =="; curl -sI https://$D/sitemap.xml | grep -iE "HTTP/|content-type"; curl -s https://$D/sitemap.xml | grep -c "<loc>"
echo "== canonical =="; curl -s https://$D/ | grep -ioE '<link rel="canonical"[^>]*>'
echo "== robots (first lines) =="; curl -s https://$D/robots.txt | head -5
```
