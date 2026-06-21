// ── SINGLE SOURCE OF TRUTH for annual Medicare figures ──────────────────
// Quarterly audits edit ONLY this file. For a new year, add FIGURES_2027 and
// point CURRENT at it — every consumer (llms.txt, the /medicare-figures.js
// bridge that feeds the calculators) updates automatically.
//
// NOTE: $16,590 / $33,100 are the Extra Help RESOURCE (asset) limits, not income —
// named accordingly here to avoid propagating a mislabel.

export const FIGURES_2026 = {
  year: 2026,

  partA: { deductible: 1736 },

  partB: { premium: 202.90, deductible: 283 },

  partD: { basePremium: 38.99, annualCap: 2000, insulinCap: 35 },

  penalties: {
    partBPerYearPct: 0.10, // +10% of the premium per full 12 months uncovered
    partDPerMonthPct: 0.01, // 1% of the base premium per full month uncovered
  },

  irmaa: {
    // Upper MAGI bound of each non-standard tier (income from two years prior).
    single: [109000, 137000, 171000, 205000, 500000],
    married: [218000, 274000, 342000, 410000, 750000],
    // Total monthly Part B premium / monthly Part D surcharge, per tier.
    // Index 0 = standard (no surcharge); 1-5 = the five IRMAA tiers.
    partBByTier: [202.90, 284.10, 405.80, 527.50, 649.20, 689.90],
    partDByTier: [0, 14.50, 37.50, 60.40, 83.30, 91.00],
  },

  extraHelp: {
    resourcesIndividual: 16590,
    resourcesCouple: 33100,
    maxDrugCopay: 12.65,
  },

  medicareSavingsPrograms: {
    qmb: { individual: 1350, couple: 1824 },
    slmb: { individual: 1616, couple: 2184 },
    qi: { individual: 1816, couple: 2455 },
    resources: { individual: 9950, couple: 14910 },
  },
} as const;

/** The figures the site currently publishes. Point this at the newest year each January. */
export const CURRENT = FIGURES_2026;
