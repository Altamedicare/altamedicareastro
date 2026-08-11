# GSC Baseline Capture — Dental, Vision & Hearing

**Status:** capture sheet. Values below are **to be filled from Search Console**.
**Owner:** Rocco. There is no GSC connector in this project — these figures must
be exported or screenshotted by hand. Never infer, estimate, or fabricate them.

**Purpose:** the clean "before" snapshot for DVH, against which post-migration
data will eventually be measured. Capturing this does **not** require any
deployment. See `PRODUCTION-BASELINE.md` for the release boundaries.

---

## Page under measurement

Verified live 2026-08-10 at production commit `c6b238b`:

| Property | Current production value |
|---|---|
| Canonical URL | `https://altamedicare.com/dental-vision-hearing` |
| Extensionless form | `200`, zero redirects |
| `.html` form | `308` → `/dental-vision-hearing` |
| In sitemap | yes (1 entry, extensionless) |
| Title | `Dental, Vision & Hearing Coverage \| AltaMedicare` |
| H1 | `Dental, Vision & Hearing Coverage` |

Title and H1 are recorded as **facts**, not as candidates for change. DVH
title/H1 decisions are gated behind clean post-consolidation data.

---

## Capture window

**2026-07-13 → 2026-08-09** (pre-deployment, 28 days, ends the day before the
2026-08-10 migration).

Note GSC performance data lags 2–3 days; confirm the window is fully settled
before exporting.

---

## The three views

Search Console → Performance → Search results → filter by **Page**.

### View A — Combined (custom regex)

```
^https://altamedicare\.com/dental-vision-hearing(\.html)?$
```

| Metric | Value |
|---|---|
| Clicks | |
| Impressions | |
| CTR | |
| Average position | |

### View B — Extensionless only (**URL is exactly**)

```
https://altamedicare.com/dental-vision-hearing
```

> ⚠️ Must be **URL is exactly**. Do **not** use "URL contains" — this string is a
> prefix of the `.html` URL, so "contains" silently matches *both* forms, making
> B ≈ A and breaking the reconciliation check by exactly C.

| Metric | Value |
|---|---|
| Clicks | |
| Impressions | |
| CTR | |
| Average position | |

### View C — `.html` only (**URL is exactly**)

```
https://altamedicare.com/dental-vision-hearing.html
```

| Metric | Value |
|---|---|
| Clicks | |
| Impressions | |
| CTR | |
| Average position | |

**Consistency check:** A should reconcile with B + C for clicks and
impressions. CTR and average position do **not** simply add — position is
impression-weighted.

Read a mismatch as a *filter* problem before reading it as a data problem:

- **B ≈ A and B + C > A** → View B was run as "contains" and is double-counting
  the `.html` form. Re-run B as "URL is exactly".
- **A > B + C** → the regex is matching URLs you didn't intend (query strings,
  trailing slashes, deeper paths). Open the URL list under View A and read it.
- **A < B + C** → overlapping filters. Check both single-form views are exact.

Only once A reconciles is any of it worth interpreting.

---

## Combined query export

From **View A**, open the **Queries** tab and export the full list.

Save alongside this file or attach to the session. Record here:

- Export date:
- Number of queries returned:
- Top query by impressions:
- Top query by clicks:
- Any query where impressions are high but clicks are ~0:

The query export is the part that actually answers the Group C question — what
Google associates with this page — so it matters more than the four headline
metrics.

---

## Live URL Inspection — both forms

Run **URL Inspection** on each and record what Google reports.

### Extensionless: `https://altamedicare.com/dental-vision-hearing`

| Field | Value |
|---|---|
| URL is on Google | |
| Google-selected canonical | |
| User-declared canonical | |
| Discovery / referring sitemap | |
| Last crawl | |
| Indexing allowed | |

### `.html`: `https://altamedicare.com/dental-vision-hearing.html`

| Field | Value |
|---|---|
| URL is on Google | |
| Google-selected canonical | |
| User-declared canonical | |
| Coverage state | |
| Last crawl | |

**Expected direction over time:** the `.html` form moves to "Page with
redirect," and the Google-selected canonical for both settles on the
extensionless URL. That is the migration succeeding, not damage.

---

## Reading rules

1. **Both directions.** A `.html` → extensionless split is not a ranking loss
   when the combined signal is stable. An apparent gain on the extensionless
   row is not improvement either — it is attribution moving. Always read B and
   C together with A.
2. **Do not react to the first Pages report.** Expect `.html` under "Page with
   redirect," old URLs still indexed, extensionless URLs appearing separately,
   and moving indexing totals. That is reprocessing.
3. **~28 days minimum** before the first meaningful DVH performance comparison.
   Consolidating 198 URLs takes weeks; comparing earlier manufactures noise.
4. **Evidence before edits.** The output of this capture is a decision about
   whether the DVH problem is ranking, CTR, intent mismatch, or merely
   unfinished consolidation — not a title rewrite.

---

## Observation schedule

| When | What to capture |
|---|---|
| Day 0 — 2026-08-10 | This sheet: three views, query export, both inspections. Also screenshot Pages-report counts for "Page with redirect," "Duplicate without user-selected canonical," and "Soft 404." |
| ~7 days | Pages/indexing migration progress only. No performance reading. |
| ~28 days | First meaningful DVH performance comparison against this sheet. |

After DVH, the analysis order is: homepage → prescription-cost → Extra Help.

**Extra Help caveat when its turn comes:** the repo contains *both*
`extra-help-explained.md` and `extra-help-and-dual-eligibility.md`. If the
impressions belong to two distinct posts rather than two URL forms of one post,
they will never consolidate and waiting is the wrong read. Settle it with
`^https://altamedicare\.com/blog/extra-help.*` and read the URL list first.
