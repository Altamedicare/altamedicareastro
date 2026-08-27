// ---------------------------------------------------------------------------
// Symbicort (budesonide / formoterol fumarate dihydrate) — AstraZeneca.
// Independently researched 2026-08-26. Every program below was read on the
// official source cited with it. Batch 6 (spec §24 Phase 4 list) — a NEW slug.
//
// The finding that changes this page, and that the legacy layer got wrong:
// SYMBICORT IS NOT ON THE AZ&Me MEDICATION LIST. AstraZeneca's patient
// assistance program covers Airsupra, Bevespi Aerosphere and Breztri Aerosphere
// on the respiratory side; Symbicort appears nowhere on the included-medications
// page, in its product logos, in its downloadable application list, or in the
// trademark footer. Breztri (Batch 2) is on AZ&Me and Symbicort is not, and the
// difference is the whole shape of this record — so the `azme` tagline in
// data/drugs.ts, which named Symbicort, was corrected in this batch.
//
// The offsetting fact is that Symbicort, unlike Breztri, has generics: DailyMed
// carries the Breyna authorized generic and a generic budesonide/formoterol
// aerosol, and both charitable funds list Breyna alongside the brand.
// ---------------------------------------------------------------------------

import type { MedicationAssistanceRecord } from '../../types/MedicationAssistance';
import {
  CHECKED,
  SRC,
  TOTALASSIST_ELIGIBILITY,
  TOTALASSIST_REQUIREMENTS,
  TOTALASSIST_HOW_TO_APPLY,
  TOTALASSIST_PHONE,
  HEALTHWELL_PHONE,
  HEALTHWELL_REQUIREMENTS,
  HEALTHWELL_HOW_TO_APPLY,
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Symbicort prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fafa4cf1-99c2-43d5-73ad-51f256de3be0',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'approved uses — "treatment of asthma in patients 6 years of age and older" and "maintenance treatment of airflow obstruction in patients with chronic obstructive pulmonary disease (COPD)" for SYMBICORT 160/4.5; a corticosteroid with a long-acting beta2-adrenergic agonist; 80/4.5 and 160/4.5 strengths (rev. 7/2019)',
};
const dailymedGenerics = {
  title: 'DailyMed label search — budesonide and formoterol',
  url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=budesonide+and+formoterol',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'BREYNA (budesonide and formoterol fumarate) and a generic "budesonide and formoterol fumarate dihydrate" aerosol are labelled alongside AstraZeneca\'s SYMBICORT',
};
const azmeMedications = {
  title: 'AZ&Me — medications available through the program',
  url: 'https://www.azandmeapp.com/included-medications',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'the complete AZ&Me product list — Airsupra, Baxfendy, Bevespi, Breztri, Calquence, Etcamah, Fasenra, Imfinzi, Imjudo, Lokelma, Lynparza, Saphnelo, Tagrisso, Truqap, Wainua. Symbicort is not listed',
};
const azmeUpdates = {
  title: 'AZ&Me important program updates',
  url: 'https://www.azandmeapp.com/important-program-updates',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'the 2026 product additions and removals (Baxfendy added June 9, 2026; Farxiga and Xigduo XR removed effective May 1, 2026) — Symbicort appears on neither list; 2026 income thresholds unchanged at 300% FPL for Primary and Specialty products',
};
const azmeEligibility = {
  title: 'AZ&Me eligibility requirements and income guidelines',
  url: 'https://www.azandmeapp.com/eligibility-requirements',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'eligibility is limited to "a medication on AZ&Me"; Medicare rule ("you must not be eligible for or enrolled in Medicare\'s Extra Help program"); 300% FPL income table effective January 26, 2026',
};
const symbicortCost = {
  title: 'Symbicort — cost and affordability',
  url: 'https://www.symbicort.com/cost-assistance.html',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    '"Eligible patients pay as little as $35 per month for their SYMBICORT"; "Government restrictions exclude people enrolled in federal government insurance programs from co-pay support"',
};
const azDirect = {
  title: 'AstraZeneca Direct — self-pay medication list',
  url: 'https://www.azpatientdirect.com/',
  publisher: 'AstraZeneca (dispensed by ASPN Pharmacies)',
  checked: CHECKED,
  supports:
    'the products offered — Airsupra, Baxfendy, Bevespi Aerosphere, Farxiga, FluMist, Lokelma and Xigduo XR. Symbicort is not offered, and /symbicort returns "File not found"',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Symbicort (Budesonide/Formoterol Fumarate)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; Symbicort and the Breyna generic on the approved-medication list; $1,200 guaranteed / $3,500 maximum award',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; Symbicort listed; $1,200 guaranteed / $3,500 maximum award',
};
const totalAssistAsthmaHe = {
  title: 'TotalAssist — Asthma health equity fund',
  url: 'https://totalassist.org/funds/asthma-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; Symbicort listed; $1,200 guaranteed / $3,500 maximum award',
};
const healthWellCopdMa = {
  title: 'HealthWell Chronic Obstructive Pulmonary Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/chronic-obstructive-pulmonary-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'Closed to new patients; Symbicort and Breyna on the covered list; $3,250 maximum award; forecast average grant $1,500; 500% FPL; Medicare-only fund',
};
const healthWellAsthma = {
  title: 'HealthWell Asthma fund',
  url: 'https://www.healthwellfoundation.org/fund/asthma/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'Closed to new patients; Symbicort and Breyna on the covered list; $4,500 maximum award; 500% FPL',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no asthma, COPD or general lung fund on the disease list',
};
const cmsSelectedDrugFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file (May 26, 2026) — no Symbicort or budesonide row for initial price applicability year 2026, 2027 or 2028',
};

export const SYMBICORT: MedicationAssistanceRecord = {
  slug: 'symbicort',
  brandName: 'Symbicort',
  genericName: 'budesonide / formoterol fumarate dihydrate',
  manufacturer: 'AstraZeneca',
  conditions: ['respiratory'],
  // Two ingredients: budesonide (inhaled corticosteroid) + formoterol (LABA).
  // NOT 'triple-inhaler' — that key is reserved for ICS/LAMA/LABA products like
  // Breztri and Trelegy, and using it here would put Symbicort in the wrong
  // company on a page whose whole point is which programs cover which inhaler.
  drugClass: ['ics-laba'],
  description:
    'Symbicort is a twice-daily maintenance inhaler that combines an inhaled corticosteroid (budesonide) with a long-acting bronchodilator (formoterol). It is used for asthma and, at the 160/4.5 strength, for COPD. It is not a rescue inhaler and will not replace one.',
  usedFor: [
    'Treatment of asthma in patients 6 years of age and older',
    'Maintenance treatment of airflow obstruction in COPD, including chronic bronchitis and emphysema (SYMBICORT 160/4.5 only)',
    'Not for relief of sudden breathing problems — a rescue inhaler is still needed',
  ],
  whyCostly:
    'Symbicort is a brand inhaler that Part D plans usually place on a brand tier, and inhalers are a category where deductibles and non-preferred tiers hit hardest early in the year. Two things make this medication different from most of the inhalers on this site, and both matter for cost: AstraZeneca\'s patient assistance program does not cover Symbicort, so there is no free-drug route from the manufacturer — and there are generics. DailyMed carries the Breyna authorized generic and a generic budesonide/formoterol aerosol, and both TotalAssist and HealthWell list Breyna next to the brand on the same funds.',
  medicareContext:
    'Symbicort is covered under Medicare Part D or a Medicare Advantage drug plan as a maintenance inhaler, commonly on a brand tier and sometimes behind prior authorization or step therapy. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Symbicort or budesonide row for 2026, 2027 or 2028. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year. Because the brand has generic equivalents, ask your plan what it charges for Breyna or generic budesonide/formoterol — for many plans that is the single largest saving available here.',
  quickAnswer: {
    verdict:
      'Partly — and the manufacturer route that covers AstraZeneca\'s other inhalers does not cover this one. Symbicort is not on the AZ&Me medication list, so there is no free-drug program from AstraZeneca. The Symbicort savings offer is for commercial insurance only and excludes federal government insurance. Every asthma and COPD charity fund we checked was closed. The routes that remain are Medicare Extra Help, the generic, and fund alerts.',
    points: [
      'AZ&Me Prescription Savings Program: Symbicort is NOT on the included-medications list (August 26, 2026). The AstraZeneca inhalers AZ&Me does cover are Airsupra, Bevespi Aerosphere and Breztri Aerosphere.',
      'Symbicort savings offer: "Eligible patients pay as little as $35 per month," but AstraZeneca states that "government restrictions exclude people enrolled in federal government insurance programs from co-pay support" — that means Medicare Part D.',
      'No manufacturer cash price: AstraZeneca Direct sells Airsupra, Baxfendy, Bevespi, Farxiga, FluMist, Lokelma and Xigduo XR — not Symbicort.',
      'Charitable grants: TotalAssist\'s COPD and Asthma funds and HealthWell\'s COPD – Medicare Access and Asthma funds all list Symbicort, and all four were closed to new applicants when we checked. Good Days has no lung fund.',
      'Generics exist: Breyna and a generic budesonide/formoterol aerosol are labelled with FDA, and both funds list Breyna. Ask your plan what it charges for the generic — this is the saving with no application attached.',
    ],
  },
  programs: [
    {
      id: 'azme',
      kind: 'manufacturer-pap',
      name: 'AZ&Me Prescription Savings Program — Symbicort not covered',
      operator: 'AstraZeneca',
      status: 'not-found',
      statusNote:
        'Symbicort was not on the AZ&Me medication list on August 26, 2026. The program\'s own included-medications page lists Airsupra, Baxfendy, Bevespi, Breztri, Calquence, Etcamah, Fasenra, Imfinzi, Imjudo, Lokelma, Lynparza, Saphnelo, Tagrisso, Truqap and Wainua — with a downloadable application for each — and Symbicort appears in none of them. It is also absent from the 2026 additions-and-removals notice, so we are recording "not on the list", not "removed this year".',
      medicare: 'unknown',
      medicareNote:
        'AZ&Me does have a Medicare pathway — it accepts Medicare beneficiaries who are not eligible for or enrolled in Extra Help, with income at or below 300% of the federal poverty level. That pathway is irrelevant here because the first eligibility requirement is being treated with "a medication on AZ&Me", and Symbicort is not one.',
      summary:
        'An honest negative, and the single most important fact on this page. AstraZeneca runs a substantial free-medication program that covers three of its inhalers. Symbicort is not one of them, so do not spend time on an AZ&Me application for it — check the generic and the charitable funds instead.',
      eligibility: [],
      howToApply:
        'Not applicable for Symbicort. If AstraZeneca adds it, it would appear on the included-medications page and in the important-program-updates notice, both cited here. Call 1-800-292-6363 (Monday–Friday, 9am–6pm ET) if you want AstraZeneca to confirm directly.',
      applyUrl: 'https://www.azandmeapp.com/included-medications',
      applyLabel: 'AZ&Me medication list',
      phone: '1-800-292-6363',
      sources: [azmeMedications, azmeUpdates, azmeEligibility],
    },
    {
      id: 'symbicort-savings',
      kind: 'manufacturer-savings',
      name: 'Symbicort savings offer',
      operator: 'AstraZeneca',
      status: 'open',
      statusNote:
        'Advertised on symbicort.com on August 26, 2026 as "as little as $35 per month" for eligible patients, with terms and conditions applying. The page carries a 2025 copyright and update stamp, so confirm the current terms on the eligibility page before relying on the figure.',
      medicare: 'excluded',
      medicareNote:
        'AstraZeneca\'s own qualifier on the offer: "Government restrictions exclude people enrolled in federal government insurance programs from co-pay support." Medicare Part D and Medicare Advantage drug coverage are federal government insurance, so a Medicare beneficiary cannot use this offer — the same anti-kickback rule that closes every manufacturer copay card to Medicare.',
      summary:
        'A commercial copay offer for people with private or employer prescription insurance. Eligible patients pay as little as $35 a month for Symbicort.',
      covers: 'Part of the commercial copay for Symbicort. Nothing toward Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in a federal government insurance program — including Medicare Part D and Medicare Advantage drug coverage',
        'Terms and conditions apply; AstraZeneca can change or end the offer without notice',
      ],
      howToApply:
        'Commercially insured patients check eligibility and activate the offer through the cost-and-affordability page on symbicort.com. Not a route for Medicare beneficiaries.',
      applyUrl: 'https://www.symbicort.com/cost-assistance.html',
      applyLabel: 'Symbicort cost and affordability',
      sources: [symbicortCost, SRC.oigCoupons],
    },
    {
      id: 'az-direct',
      kind: 'manufacturer-direct',
      name: 'AstraZeneca Direct (cash-pay) — Symbicort not offered',
      operator: 'AstraZeneca (dispensed by ASPN Pharmacies)',
      status: 'not-found',
      statusNote:
        'On August 26, 2026 AstraZeneca Direct offered Airsupra, Baxfendy, Bevespi Aerosphere, Farxiga, FluMist, Lokelma and Xigduo XR. Symbicort is not on the list, and the /symbicort page returns "File not found".',
      medicare: 'unknown',
      medicareNote: 'Not applicable — Symbicort is not part of the program, so it states no Medicare rule.',
      summary:
        'An honest negative: there is no manufacturer self-pay price for Symbicort. The nearest cash comparison is the generic — ask a pharmacy what Breyna or generic budesonide/formoterol costs with and without your plan.',
      eligibility: [],
      howToApply:
        'Not applicable. If AstraZeneca adds Symbicort, it would appear on the AstraZeneca Direct product list cited here.',
      applyUrl: 'https://www.azpatientdirect.com/',
      applyLabel: 'AstraZeneca Direct product list',
      sources: [azDirect, dailymedGenerics],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — COPD and Asthma funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Chronic obstructive pulmonary disease (COPD) · Asthma (and both health-equity variants)',
      status: 'closed',
      statusNote:
        'All four funds that list Symbicort — COPD, COPD health equity, Asthma and Asthma health equity — were closed to new applicants on August 26, 2026. The health-equity variants additionally require a home zip code in a designated social-vulnerability county.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open.',
      summary:
        '"Symbicort (Budesonide/Formoterol Fumarate)" is named on the approved-medication lists of TotalAssist\'s COPD and Asthma funds, along with the Breyna generic. A listing is not an open fund — each of these was closed when we checked, and there is no waitlist, so the notification sign-up is what gets you in.',
      covers:
        'When open: $1,200 guaranteed award and up to $3,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed COPD or asthma diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistCopd, totalAssistAsthma, totalAssistCopdHe, totalAssistAsthmaHe, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — COPD – Medicare Access and Asthma funds',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Obstructive Pulmonary Disease – Medicare Access · Asthma',
      status: 'closed',
      statusNote:
        'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Symbicort and Breyna are on both covered-medication lists.',
      medicare: 'eligible',
      medicareNote:
        'The COPD fund is a Medicare Access fund — Medicare patients only, and premium assistance through it requires Medicare Part B. The Asthma fund accepts any insurance that pays part of the cost, Medicare included.',
      summary:
        'HealthWell lists Symbicort under both its COPD – Medicare Access fund and its Asthma fund. HealthWell says replenished funds reopen "as quickly as possible" and offers email or text alerts for each fund.',
      covers:
        'When open: up to $3,250 per grant on the COPD – Medicare Access fund (HealthWell forecasts an average grant of about $1,500) or up to $4,500 on the Asthma fund, for prescription copays or a Medicare Part B premium. Household income up to 500% of the federal poverty level on HealthWell\'s own table.',
      eligibility: [
        'Insurance that pays part of the cost of Symbicort — Medicare qualifies; discount cards do not count as insurance',
        'Household income up to 500% of the federal poverty level, adjusted for household size and cost of living',
        'COPD or asthma diagnosis verified by a physician, nurse practitioner or physician assistant',
        'Treatment in the United States',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellCopdMa, healthWellAsthma, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained no asthma, COPD or general lung fund. Its nearest respiratory entry, Pulmonary Arterial Hypertension, was closed and is a different diagnosis.',
      medicare: 'unknown',
      medicareNote:
        'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Symbicort.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund and whether it is open.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'No open charitable fund covered Symbicort on August 26, 2026. TotalAssist lists it on its COPD and Asthma funds (and both health-equity variants) and HealthWell lists it on its COPD – Medicare Access and Asthma funds — five listings, all closed to new applicants. Good Days has no lung fund. Being listed is not the same as being open, and because there is no AZ&Me route for Symbicort, the things that do not depend on a fund balance carry more weight here than on most inhaler pages: Medicare Extra Help, the Breyna or generic budesonide/formoterol option, a formulary exception, and a plan comparison in the fall. Set alerts on all four funds so you hear the moment one reopens.',
  extraHelpNote:
    'Extra Help matters more for Symbicort than for AstraZeneca\'s other inhalers, because the AZ&Me alternative does not exist here. There is no conflict to manage: AZ&Me\'s rule that applicants must not qualify for Extra Help cannot apply to a medication AZ&Me does not cover. If your income and resources are limited, apply for Extra Help — with full Extra Help a covered brand-name drug costs about $12.65 in 2026.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Symbicort on Medicare in August 2026, start by ruling out the route people assume exists. AstraZeneca\'s AZ&Me program does not cover Symbicort, so the realistic order is: the generic, then Extra Help, then fund alerts.',
      bullets: [
        'Ask your plan what it charges for Breyna or generic budesonide/formoterol — the saving with no application and no waiting.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'COPD or asthma diagnosis → set alerts on the TotalAssist and HealthWell funds (all closed when checked).',
        'Commercial insurance instead of Medicare → the Symbicort savings offer, which federal-insurance enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Symbicort appears on four charity funds and none was open when we checked. Status changes without notice, in both directions.',
      bullets: [
        'TotalAssist: the COPD and Asthma fund pages show "Open" or "Closed" with the current award amounts.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
        'AZ&Me: the included-medications page is the authoritative list — check whether Symbicort has been added since this page was verified.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program applies its own rules and its own income table. These are the ones that would decide a Symbicort application:',
      bullets: [
        'TotalAssist (when open): government insurance covering Symbicort; income at or below 500% FPL adjusted for your regional cost-of-living index; a COPD or asthma diagnosis in treatment.',
        'HealthWell (when open): insurance that pays part of the cost — Medicare qualifies; income up to 500% FPL on HealthWell\'s table; diagnosis verified by your provider\'s signature.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'Symbicort savings offer: commercial insurance only — Medicare disqualifies you.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what the applications ask for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your COPD or asthma diagnosis and its date — TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Symbicort prescription details (strength — 80/4.5 or 160/4.5) and your prescriber\'s name, office and phone.',
        'Household size and annual household income, plus proof — tax return, Social Security or pension statements, or pay stubs.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; Patient Advocate Foundation verifies the diagnosis with your provider.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office.',
        'Generic switch: nothing to apply for — your prescriber writes it, or the pharmacy substitutes where state law allows.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'HealthWell (when open): approval creates a 12-month grant cycle with a pharmacy card.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'With no manufacturer program for Symbicort, this step is where most of the money is:',
      bullets: [
        'Ask your prescriber about Breyna or generic budesonide/formoterol — a labelled equivalent your plan may cover at a much lower tier.',
        'Ask whether a different maintenance inhaler on your plan\'s preferred tier suits you — several AstraZeneca inhalers that AZ&Me does cover are alternatives worth discussing.',
        'Sign up for TotalAssist and HealthWell alerts; there is no waitlist or queue, so the alert is what gets you in.',
        'Apply for Extra Help even if you assume you earn too much — the limits are higher than most people expect.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Symbicort strength — 80/4.5 or 160/4.5', note: 'the COPD indication is for 160/4.5 only, and funds match on diagnosis' },
    { item: 'Date of your COPD or asthma diagnosis', note: 'TotalAssist needs the exact date if it was within the past 6 months' },
  ],
  ifUnavailable: [
    {
      text: 'Because AstraZeneca\'s AZ&Me program does not cover Symbicort, ask your prescriber about Breyna or generic budesonide/formoterol first — it is the one saving here that needs no application and no open fund.',
    },
    ...standardAlternatives('Symbicort'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Symbicort?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Symbicort as a maintenance inhaler for asthma and COPD, usually on a brand tier and sometimes with prior authorization or step therapy. Part D out-of-pocket costs are capped at $2,100 in 2026. Ask your plan what it charges for the Breyna generic as well: for many plans that is a lower tier. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Symbicort patient assistance program for people on Medicare?',
      answer:
        'Not from AstraZeneca. Symbicort is not on the AZ&Me Prescription Savings Program medication list — we read that list on August 26, 2026, and the AstraZeneca inhalers it covers are Airsupra, Bevespi Aerosphere and Breztri Aerosphere. This surprises people because AZ&Me does have a Medicare pathway; it just does not apply to a medication the program does not carry. For Symbicort the routes are the generic, Medicare Extra Help, and the charitable funds when they reopen.',
    },
    {
      question: 'Can I use the Symbicort $35 savings offer with Medicare?',
      answer:
        'No. AstraZeneca states that "government restrictions exclude people enrolled in federal government insurance programs from co-pay support," which covers Medicare Part D and Medicare Advantage drug coverage. Federal anti-kickback rules are why manufacturer copay offers are closed to Medicare across the board — it is not specific to this medication.',
    },
    {
      question: 'Is there a charitable grant for Symbicort right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Symbicort on its COPD and Asthma funds and their health-equity variants, and HealthWell lists it on its COPD – Medicare Access and Asthma funds — five listings, and every one was closed to new applicants. Good Days has no lung fund. Sign up for alerts on all of them; TotalAssist has no waitlist, so the notification is what gets you in.',
    },
    {
      question: 'Is there a generic for Symbicort?',
      answer:
        'Yes. DailyMed carries Breyna (budesonide and formoterol fumarate), an authorized generic, and a generic budesonide/formoterol fumarate dihydrate aerosol, alongside AstraZeneca\'s Symbicort. Both TotalAssist and HealthWell list Breyna next to the brand on the same funds. Ask your prescriber and your plan what the generic costs on your formulary — with no manufacturer assistance program for Symbicort, this is usually the largest saving available.',
    },
    {
      question: 'Is Symbicort part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price data file has no Symbicort or budesonide row for initial price applicability year 2026, 2027 or 2028. (Two inhalers are in the program — Breo Ellipta and Trelegy Ellipta from 2027 — but Symbicort is not one of them.) Your cost is set by your plan\'s tier and cost-sharing.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or automated-call notifications when a fund opens, with no waitlist or queue; HealthWell offers alerts on each fund page. While you wait, the routes that do not depend on a fund balance are the generic, Extra Help, a formulary exception through your doctor, the Medicare Prescription Payment Plan, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['breztri', 'trelegy', 'spiriva'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Symbicort' },
  ],
  sources: [
    label,
    dailymedGenerics,
    azmeMedications,
    azmeUpdates,
    azmeEligibility,
    symbicortCost,
    azDirect,
    totalAssistCopd,
    totalAssistAsthma,
    totalAssistCopdHe,
    totalAssistAsthmaHe,
    SRC.totalAssistNotify,
    healthWellCopdMa,
    healthWellAsthma,
    SRC.healthWellFunds,
    goodDays,
    cmsSelectedDrugFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup). A literal, never the shared
  // CHECKED constant — re-verifying one medication must move one date.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Symbicort Assistance',
    status: 'coming-soon',
    description:
      'Why AZ&Me does not cover Symbicort, what the Breyna generic changes, and how to set fund alerts while the COPD and asthma funds are closed.',
  },
  description_meta:
    'How to lower the cost of Symbicort on Medicare: why AZ&Me does not cover it, why the $35 savings offer excludes Medicare, the Breyna generic, COPD and asthma fund status, and Extra Help — verified August 2026.',
};
