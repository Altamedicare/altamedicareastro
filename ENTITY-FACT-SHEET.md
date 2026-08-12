# AltaMedicare — Canonical Entity Fact Sheet

Single source of truth for the business entity. Schema, GBP, citations, and
directory listings must all agree with this file. Nothing here may be guessed:
every field is either **verified in-repo** or **owner-gated** (Bret must supply).

Status: **BLOCKED on GBP verification** (Master Guide Part 11).
Created 2026-08-11, during the post-baseline observation period.
Nothing in this file is deployed. See PRODUCTION-BASELINE.md for the freeze.

---

## A. Verified in repository

These are what the site asserts today. They are internally consistent and can be
treated as established unless GBP contradicts them.

| Field | Value | Source |
|---|---|---|
| Business name | AltaMedicare | `src/layouts/MainLayout.astro:79` |
| Canonical URL | `https://altamedicare.com/` | `MainLayout.astro:81` |
| Organization `@id` | `https://altamedicare.com/#organization` | `MainLayout.astro:78` |
| Schema type | `InsuranceAgency` | `MainLayout.astro:74` |
| Phone (display) | (435) 292-5548 | `src/consts.ts:6` |
| Phone (schema) | `+1-435-292-5548` | `MainLayout.astro:82` |
| Email | bret@altamedicare.com | `MainLayout.astro:83` |
| Logo / image | `/images/logo2.webp` | `MainLayout.astro:87-88` |
| Hours | Mon–Fri 09:00–18:00 | `MainLayout.astro:92-99` |
| Locality | Alpine, UT, US | `MainLayout.astro:112-117` |
| Founder | Bret Swope | `MainLayout.astro:118` |
| Agent title | Licensed Utah Medicare Agent | `src/layouts/NewsArticle.astro:53` |
| Person `@id` | `https://altamedicare.com/about.html#bret-swope` | `NewsArticle.astro:51` |
| Area served | Utah; Salt Lake, Utah, Davis, Weber, Washington counties | `MainLayout.astro:104-111` |
| Quoting portal | SunFire consumer link (id 5454608) | `src/consts.ts:12` |

Phone is consistent across all 14 call-to-action sites and the schema block —
no NAP drift inside the codebase.

---

## B. Owner-gated — Bret must supply

Do **not** populate these by inference. Blank is a valid, informative answer.

### B1. Google Business Profile
- [ ] Does a GBP exist for AltaMedicare? (yes / no / unsure)
- [ ] GBP or `g.page` / Maps URL
- [ ] Business name **exactly as displayed** on the profile
- [ ] Verification status (verified / pending / suspended / never claimed)
- [ ] Primary category
- [ ] Secondary categories
- [ ] Service-area business, or storefront with a displayed address?
- [ ] If service-area: which areas are listed
- [ ] If storefront: full street address + ZIP
- [ ] Phone on the profile — does it match (435) 292-5548?
- [ ] Website URL on the profile
- [ ] Hours on the profile — do they match Mon–Fri 9–6?
- [ ] Services listed
- [ ] Photo count
- [ ] Review count and average rating

### B2. Address decision
- [ ] Is Alpine, UT correct as the business locality?
- [ ] ZIP code (needed for `postalCode`)
- [ ] Geo coordinates — only if a storefront address is publicly displayed
- [ ] **Decision:** publish a street address, or declare service-area only?

> For a Medicare agency this is deliberate, not cosmetic. If Bret operates from
> home, service-area-only is the correct configuration and we should *not* add
> `streetAddress`/`geo` merely because the Master Guide asks for geographic
> signals. A service-area business with a fabricated storefront is a GBP
> suspension risk.

### B3. Open question flagged during verification
- [ ] The declared locality (Alpine, Utah County → 801/385) and the business
      phone (435, which covers Utah *outside* the Wasatch Front) are from
      different regions. Both may be legitimate (ported/mobile number), but GBP,
      schema, and every citation must state the same pair. Confirm which is
      canonical before any citation work begins.

### B4. Social / sameAs
- [ ] Facebook page
- [ ] LinkedIn (personal and/or company)
- [ ] YouTube
- [ ] Other genuine profiles

> Repo-wide search found **zero** social profile URLs. `sameAs` is genuinely
> unbuilt, not merely undocumented. Only list profiles that actually exist and
> are actively controlled — a `sameAs` pointing at a dead page is worse than
> omission.

---

## C. Blocked until Section B is answered

- `sameAs` array on the organization node
- `postalCode` / `geo` (contingent on the B2 decision)
- Local citation and directory campaign (Master Guide Part 12)
- Review generation
- AI citation Baseline B (corrected-entity snapshot)
