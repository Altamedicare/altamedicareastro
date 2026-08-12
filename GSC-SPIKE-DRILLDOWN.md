# GSC Spike Drill-Down — 2026-06-26 and 2026-07-29

**Status:** capture sheet. Values below are **to be filled from Search Console**.
**Owner:** Rocco. There is no GSC connector in this project — these figures must be
exported or screenshotted by hand. Never infer, estimate, or fabricate them.

**Purpose:** two days hold **54.7% of the site's entire recorded visibility**, at
near-top average positions, with **zero query attribution**. This sheet recovers
*which pages* drew those impressions. Requires no deployment and no owner input
from Bret.

**This is an investigation, not a mandate to change anything.** The content freeze
holds regardless of what the Pages tab shows. The goal is to learn what Google is
actually matching — not to justify a content sprint.

Created 2026-08-12, during the post-baseline observation period.

---

## The measured facts

From the 2026-08-11 export (49 days, 106 impressions, 1 click):

| Date | Impressions | Avg position | Queries attributed |
|---|---|---|---|
| 2026-06-26 | 46 | 2.40 | none — anonymized |
| 2026-07-29 | 12 | 1.60 | none — anonymized |
| **Combined** | **58 of 106** | — | **0** |

**Why re-exporting queries cannot help:** these fall in the anonymized ~83%.
Anonymization is applied at source. Do not spend another pass trying to recover
them.

**Why the Pages tab can help:** page-level data is *never* anonymized. The URL is
recoverable even when the query is permanently hidden.

---

## Before you start — confirm the property type

The 2026-08-11 export contained **both** `altamedicare.com/...` and
`www.altamedicare.com/....html` rows, which indicates a **Domain property**
(covers every host and protocol).

- [ ] Property type confirmed: `Domain` / `URL-prefix` (circle one)

This matters: in a Domain property the apex and `www` forms of the *same page*
appear as **separate rows**. Add them together before reading anything. In a
URL-prefix property scoped to apex, the `www` impressions would simply be absent
and the totals below would not reconcile.

---

## Click path (repeat identically for both dates)

Search Console → **Performance** → **Search results** → **Date** filter →
**Custom** → set start **and** end to the *same* day → **Pages** tab.

Filter state for both captures:

| Setting | Value |
|---|---|
| Search type | **Web** |
| Compare | **OFF** |
| Page filter | **none** — capture the whole property, not just DVH |
| Date | single day, start = end |

> ⚠️ GSC custom ranges are inclusive of both endpoints. Start and end must be the
> **same date** — a start/end that differ by one day silently doubles the window
> and blends the spike with an adjacent normal day.

> ⚠️ Do **not** enable **Compare**. Comparison mode changes the table layout and
> makes the single-day figures easy to misread as deltas.

Then also glance at the **Devices** and **Countries** tabs for that same day, and
at **Search appearance** if the property shows one.

---

## ⚠️ Reconciliation rule — CORRECTED 2026-08-12

An earlier version of this sheet said page rows must sum to the property total and
that a mismatch was a stop condition. **That was wrong.** Do not apply it.

Property-level impressions are counted **once per SERP** on which the site appears.
Page-level impressions are counted **once per URL** that appears. When several of
the site's URLs surface in the same search, the page rows legitimately sum to
**more** than the property total.

So the correct expectation is:

```
sum(page impressions)  ≥  property impressions
```

A sum *above* the property total is normal and is itself informative — it measures
**co-appearance**, i.e. how often multiple site URLs occupied the same SERP. A sum
*below* the property total is the anomaly worth stopping on.

This reinforces rather than undermines the Jul 29 co-appearance model in the
pre-registered read below.

---

## Capture — 2026-06-26

Property-level reference: **46** impressions. Page rows may exceed this — see the
corrected reconciliation rule above.

### Pages tab

| # | URL | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

- [ ] Sum of page impressions: ______ (expect ≥ 46; below 46 is the anomaly)
- [ ] Any row a `.html` or `www` form? Which: ______
- [ ] Number of distinct URLs: ______

### Devices / Countries

| Dimension | Top value | Impressions |
|---|---|---|
| Device | | |
| Country | | |

---

## Capture — 2026-07-29

Property-level reference: **12** impressions. Page rows may exceed this — see the
corrected reconciliation rule above.

### Pages tab

| # | URL | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

- [ ] Sum of page impressions: ______ (expect ≥ 12; below 12 is the anomaly)
- [ ] Does `/dental-vision-hearing` appear? At what position: ______
- [ ] Which URL holds the **top** position that day: ______

### Devices / Countries

| Dimension | Top value | Impressions |
|---|---|---|
| Device | | |
| Country | | |

---

## Pre-registered read — decided BEFORE looking

Committing to the interpretation in advance is the point. Whatever the data shows,
read it against this table rather than constructing an explanation afterward.

### 2026-06-26 (46 impressions, position 2.40)

| If the Pages tab shows… | Then the reading is… | Action |
|---|---|---|
| **One URL** holding most of the 46, and it is `/` or `/about` | Branded/navigational. Consistent with the standing hypothesis — a brand with few unique searchers is exactly what GSC anonymizes. | None. But it **recalibrates the baseline**: over half the site's visibility is brand, so non-brand content has close to zero traction. That is a more honest read of the 106 than the raw total. |
| **One URL**, and it is a deep content page | Google matched one specific page hard for one hidden query. That page — not the homepage — is the one to watch in the next export. | None now. Add it to the next export's watch list. |
| **Many URLs** (5+) spread thin | A site-level event, not a single query. Possibly a re-crawl artifact or a broad low-intent SERP surface. | None. Treat the 46 as low-information, not as evidence of demand. |
| The URL is a `.html` or `www` form | The impressions are **pre-migration index memory**. Ties directly to the consolidation window. | None — this is the expected decay pattern, already documented. Do not "fix" it. |

### 2026-07-29 (12 impressions, position 1.60)

Carried-in constraint (**inferred — verify, do not assume**): property-level
position reflects the *best-ranking* site URL per SERP, not an average across the
site's URLs. The DVH baseline recorded 7 of DVH's 8 impressions on Jul 29, yet
DVH's own average position is 7.5 — arithmetically it cannot have been the page
sitting at 1.60. So some *other* page ranked ~1 while DVH co-appeared lower in the
same SERPs.

| If the Pages tab shows… | Then the reading is… |
|---|---|
| A non-DVH URL at ~position 1, **and** DVH present at ~7 | Confirms the co-appearance model. The named page is the interesting one — it is the only URL on this site Google has ranked at position 1. |
| DVH alone, at ~1.6 | **Refutes** the carried-in constraint, and means the DVH baseline's position figure of 7.5 needs re-derivation. Flag it; do not paper over the contradiction. |
| Neither — some third pattern | Record it verbatim and stop. Do not force it into either box. |

### What would falsify the branded hypothesis for 06-26

State this plainly so it stays falsifiable: the hypothesis is **refuted** if the
46 impressions land on a deep content page with no brand relevance, or spread
across 10+ URLs. Either outcome means something other than brand search drove the
day, and the hypothesis is dropped rather than rescued.

---

## After capture

1. Paste the two Pages tables back into a session; the read follows the table
   above with no re-litigation.
2. Whatever it shows, the content freeze in `gsc-first-export-result` holds and the
   five gated decisions (DVH title/H1, homepage title/H1, prescription-cost
   ownership, Extra Help ownership, notFit activation) stay gated. A single day of
   anonymized impressions cannot decide any of them.
3. Next scheduled checkpoint is unchanged: the ~28-day post-migration DVH
   comparison, on or after **2026-09-07** (2026-08-10 boundary + 28 days).
