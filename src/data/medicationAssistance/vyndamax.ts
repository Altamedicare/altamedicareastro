// ---------------------------------------------------------------------------
// Vyndamax (tafamidis) — Pfizer. Independently researched 2026-08-26. Every
// program below was read on the official source cited with it. Batch 7 — a NEW
// slug, selected for information value rather than for demand.
//
// This is the first record in the registry where the honest answer is "two
// charitable funds are open right now" — TotalAssist Amyloidosis and HealthWell
// Amyloidosis were both accepting applications on the checked date. It is also
// the first record where the funds are not merely an alternative to the
// manufacturer program but a PREREQUISITE for it: Pfizer's own VYNDAMAX support
// site states that patients "are required to apply for and provide proof of
// denial prior to being considered for enrollment in the Pfizer Patient
// Assistance Program". Those two facts have to be read together, and the page
// is ordered accordingly — funds first, PAP second.
//
// Taxonomy note: `heart` is the condition key, and no amyloidosis key was
// added. The Ofev test from Batch 6 was applied and came out the other way —
// the label's indication IS a cardiomyopathy ("the cardiomyopathy of wild-type
// or hereditary transthyretin-mediated amyloidosis… to reduce cardiovascular
// mortality and cardiovascular-related hospitalization"), so `heart` is true
// rather than merely adjacent. Ofev needed `lung-disease` because `respiratory`
// was flatly wrong for it; nothing here is wrong. The amyloidosis-specific
// funds live in this record's own program cards, which is what the record body
// is for. D9 holds: a key is added on a demonstrated defect, not on a theme.
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
  title: 'Vyndaqel / Vyndamax prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1b4121ee-a733-4456-a917-be2603477839',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'the single indication — "treatment of the cardiomyopathy of wild-type or hereditary transthyretin-mediated amyloidosis (ATTR-CM) in adults to reduce cardiovascular mortality and cardiovascular-related hospitalization"; "transthyretin stabilizers"; VYNDAMAX tafamidis 61 mg and VYNDAQEL tafamidis meglumine 20 mg, not interchangeable on a per-milligram basis (rev. 10/2023)',
};
const dailymedTafamidis = {
  title: 'DailyMed label index — tafamidis',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=tafamidis',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'exactly one labelled product (the combined Vyndaqel/Vyndamax label) — no generic tafamidis',
};
const vynAssist = {
  title: 'VynAssist — financial support options for VYNDAMAX',
  url: 'https://myvynassist.com/financial-assistance',
  publisher: 'Pfizer',
  checked: CHECKED,
  supports:
    'the Pfizer Patient Assistance Program "may be able to help eligible patients who are uninsured or have government-issued insurance and other financial assistance options aren\'t available"; "Patients are required to apply for and provide proof of denial prior to being considered for enrollment"; Co-Pay Savings Program "as little as $0 per month" for commercially insured patients with the government-program exclusion and a $10,000–$60,000 maximum annual benefit; VynAssist 1-888-863-1177; co-pay claims line 1-888-222-8475 (page code PP-VDM-USA-3093, July 2026)',
};
const vynAssistHome = {
  title: 'VynAssist — VYNDAMAX patient support',
  url: 'https://myvynassist.com',
  publisher: 'Pfizer',
  checked: CHECKED,
  supports: 'Pfizer Patient Access Coordinator (PAC) support; VynAssist hours Monday–Friday 8am–7pm ET',
};
const pfizerRxPathways = {
  title: 'Pfizer RxPathways',
  url: 'https://www.pfizerrxpathways.com/',
  publisher: 'Pfizer',
  checked: CHECKED,
  supports:
    '"As of January 1, 2026, the Pfizer Patient Assistance Program will remain unchanged"; the program is a joint program of Pfizer Inc. and the Pfizer Patient Assistance Foundation, a separate legal entity; 1-844-989-7284. NOTE: the medicine finder on this site is rendered client-side and its product list could not be read here — Vyndamax inclusion is established from the VynAssist page above, which is Pfizer\'s own VYNDAMAX site',
};
const totalAssistAmyloidosis = {
  title: 'TotalAssist — Amyloidosis fund',
  url: 'https://totalassist.org/funds/amyloidosis/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'OPEN; "Vyndamax (Tafamidis)" and "Vyndaqel (Tafamidis Meglumine)" on the approved-medication list; $2,500 guaranteed / $5,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const healthWellAmyloidosis = {
  title: 'HealthWell Amyloidosis fund',
  url: 'https://www.healthwellfoundation.org/fund/amyloidosis/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'OPEN; Vyndamax, Vyndaqel and tafamidis on the covered list; $8,000 maximum award; prescription drug copay or Medicare Part B premium; 500% FPL',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no amyloidosis, ATTR or cardiomyopathy program on the fund list',
};
const cmsSelectedDrugFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file (May 26, 2026) — no Vyndamax, Vyndaqel or tafamidis row for initial price applicability year 2026, 2027 or 2028',
};
const trumpRx = {
  title: 'TrumpRx — browse all medicines',
  url: 'https://trumprx.gov/browse',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: 'Vyndamax and Vyndaqel not listed',
};

export const VYNDAMAX: MedicationAssistanceRecord = {
  slug: 'vyndamax',
  brandName: 'Vyndamax',
  genericName: 'tafamidis',
  manufacturer: 'Pfizer',
  // See the file header: the label's indication is a cardiomyopathy, so `heart`
  // is accurate rather than approximate, and no amyloidosis key was added.
  conditions: ['heart'],
  // Label: "transthyretin stabilizers". A new class key was added for it in
  // this batch rather than stretching 'arni', which names a heart-failure
  // tablet combination it has nothing in common with.
  drugClass: ['transthyretin-stabilizer'],
  description:
    'Vyndamax is a once-daily capsule for a specific kind of heart disease: transthyretin amyloid cardiomyopathy, in which a blood protein misfolds and deposits in the heart muscle, stiffening it. Tafamidis holds that protein in its correct shape so less of it builds up. It treats the heart condition caused by amyloidosis, which is why the charitable funds that pay for it are amyloidosis funds rather than heart-failure funds.',
  usedFor: [
    'Treatment of the cardiomyopathy of wild-type or hereditary transthyretin-mediated amyloidosis (ATTR-CM) in adults',
    'To reduce cardiovascular mortality and cardiovascular-related hospitalization',
  ],
  whyCostly:
    'Vyndamax is a brand-only specialty capsule with no generic — a DailyMed search for tafamidis returns exactly one labelled product, the combined Vyndaqel/Vyndamax label. It is taken every day indefinitely, so on a Part D specialty tier the coinsurance typically reaches the annual out-of-pocket cap early in the year. The manufacturer copay card excludes Medicare outright, and the manufacturer assistance program will not even consider a Medicare applicant until they have applied to independent foundations and been denied — which is why the charitable funds matter more here than on almost any other page on this site.',
  medicareContext:
    'Vyndamax is a capsule you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, generally on a specialty tier with prior authorization. It has not been selected for Medicare price negotiation — no Vyndamax, Vyndaqel or tafamidis row appears in CMS\'s selected-drug and Maximum Fair Price file for 2026, 2027 or 2028. Part D out-of-pocket costs are capped at $2,100 in 2026 and Extra Help lowers cost-sharing for people with limited income and resources. Note the ordering that Pfizer itself imposes: for a Medicare beneficiary the charitable funds come first, because proof that you applied to them and were denied is a condition of the Pfizer program.',
  quickAnswer: {
    verdict:
      'Yes — and unusually, two charitable funds were open on August 26, 2026. TotalAssist\'s Amyloidosis fund ($2,500 guaranteed, $5,500 maximum) and HealthWell\'s Amyloidosis fund ($8,000 maximum) both list Vyndamax and were both accepting applications. Apply to those first — Pfizer requires proof that you were denied by independent foundations before it will consider you for its own assistance program.',
    points: [
      'TotalAssist Amyloidosis fund: OPEN, $2,500 guaranteed and $5,500 maximum, for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level adjusted for local cost of living.',
      'HealthWell Amyloidosis fund: OPEN, up to $8,000 for prescription copays or a Medicare Part B premium, household income up to 500% of the federal poverty level.',
      'Pfizer Patient Assistance Program (through VyndaLink): open to people who are uninsured or have government insurance — but only when other options are unavailable, and Pfizer requires proof of denial from independent foundations first.',
      'VYNDAMAX Co-Pay Savings Program: commercial insurance only. Pfizer\'s terms exclude anyone in "a state or federally funded insurance program, including but not limited to Medicare, Medicaid, TRICARE, Veterans Affairs health care".',
      'Medicare: not a negotiated-price drug for 2026, 2027 or 2028; Part D costs capped at $2,100 in 2026; no generic tafamidis exists.',
    ],
  },
  programs: [
    {
      id: 'totalassist-amyloidosis',
      kind: 'charitable',
      name: 'TotalAssist — Amyloidosis fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Amyloidosis',
      status: 'open',
      statusNote:
        'Open and accepting applications on August 26, 2026, with an instant approval decision online. Apply here before the manufacturer program — Pfizer asks for proof of foundation denials, so this application is a step on that path even if it is unsuccessful.',
      medicare: 'eligible',
      medicareNote:
        'The fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are exactly who it is for.',
      summary:
        'A copay and cost-sharing grant for people with amyloidosis. "Vyndamax (Tafamidis)" and "Vyndaqel (Tafamidis Meglumine)" are both named on the fund\'s approved-medication list.',
      covers:
        '$2,500 guaranteed award and up to $5,500 maximum, usable for medication copays, coinsurance and deductibles, health-insurance premiums and other qualifying expenses. One grant per condition.',
      eligibility: [
        'Confirmed amyloidosis diagnosis, in treatment, planning to begin treatment within 60 days, or treated in the past 6 months — active surveillance counts',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/amyloidosis/',
      applyLabel: 'TotalAssist Amyloidosis fund',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistAmyloidosis, SRC.totalAssistEligibility, SRC.totalAssistApply, SRC.totalAssistFunds],
    },
    {
      id: 'healthwell-amyloidosis',
      kind: 'charitable',
      name: 'HealthWell Foundation — Amyloidosis fund',
      operator: 'HealthWell Foundation',
      fund: 'Amyloidosis',
      status: 'open',
      statusNote:
        'Open on August 26, 2026 — one of the few HealthWell funds in this registry that was. Its $8,000 maximum is the largest award of any fund covering a medication on this site.',
      medicare: 'eligible',
      medicareNote:
        'Medicare qualifies as the insurance HealthWell requires. Premium assistance through the fund is limited to a Medicare Part B premium; the copay assistance applies to the prescription itself.',
      summary:
        'HealthWell lists Vyndamax, Vyndaqel and tafamidis on its Amyloidosis fund. Apply to this one as well as TotalAssist — they are separate foundations with separate money, and Pfizer counts a denial from either toward its proof-of-denial requirement.',
      covers:
        'Up to $8,000 per grant for prescription copays, or a Medicare Part B premium. Household income up to 500% of the federal poverty level on HealthWell\'s own table, adjusted for household size and cost of living.',
      eligibility: [
        'Insurance that pays part of the cost of Vyndamax — Medicare qualifies; discount cards do not count as insurance',
        'Household income up to 500% of the federal poverty level (HealthWell\'s own table — do not carry another program\'s dollar figures across)',
        'An amyloidosis diagnosis verified by a physician, nurse practitioner or physician assistant',
        'Treatment in the United States',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/amyloidosis/',
      applyLabel: 'HealthWell Amyloidosis fund',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellAmyloidosis, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'pfizer-pap',
      kind: 'manufacturer-pap',
      name: 'Pfizer Patient Assistance Program (through VyndaLink)',
      operator: 'Pfizer Inc. and the Pfizer Patient Assistance Foundation',
      status: 'limited',
      statusNote:
        'Accepting applications on August 26, 2026, with a material restriction that decides most Medicare applications: it is a route of last resort. Pfizer states patients "are required to apply for and provide proof of denial prior to being considered for enrollment in the Pfizer Patient Assistance Program." Pfizer RxPathways adds that as of January 1, 2026 the program is unchanged.',
      medicare: 'conditional',
      medicareNote:
        'Pfizer\'s own words on its VYNDAMAX site: the program "may be able to help eligible patients who are uninsured or have government-issued insurance and other financial assistance options aren\'t available." Medicare is government-issued insurance, so you are eligible in principle — but only after you have applied to the independent foundations and been denied, and can show it. That is why the two amyloidosis funds are listed above this card rather than below it.',
      summary:
        'The Pfizer Patient Assistance Program supplies Pfizer medicines free to eligible patients. It is a joint program of Pfizer Inc. and the Pfizer Patient Assistance Foundation, which Pfizer describes as a separate legal entity with distinct legal restrictions. For Vyndamax it is administered through VyndaLink.',
      covers: 'Vyndamax at no cost to approved patients.',
      eligibility: [
        'Uninsured, or covered by government-issued insurance such as Medicare',
        'Other financial assistance options are not available to you',
        'Proof of denial from independent foundations — required before Pfizer will consider your enrollment',
        'Income limits apply; the specific thresholds are not published on the VYNDAMAX support pages and were not confirmed at the source, so no figure is quoted here',
      ],
      requirements: [
        'The VyndaLink enrollment form, completed with your prescriber',
        'Denial letters or screenshots from the independent foundations you applied to',
        'Your insurance details, including your Medicare and Part D plan information',
      ],
      howToApply:
        'Call VynAssist on 1-888-863-1177, Monday–Friday 8am–7pm ET, and ask for a Pfizer Patient Access Coordinator — Pfizer assigns one to help with access and reimbursement. Download the enrollment form from the VynAssist financial-assistance page. Apply to the TotalAssist and HealthWell amyloidosis funds first and keep the outcome letters.',
      applyUrl: 'https://myvynassist.com/financial-assistance',
      applyLabel: 'VynAssist financial support options',
      phone: '1-888-863-1177',
      sources: [vynAssist, vynAssistHome, pfizerRxPathways],
    },
    {
      id: 'vyndamax-copay',
      kind: 'manufacturer-savings',
      name: 'VYNDAMAX Co-Pay Savings Program',
      operator: 'Pfizer',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026, with a $10,000–$60,000 maximum program benefit per calendar year. Pfizer reserves the right to rescind, revoke or amend the offer without notice.',
      medicare: 'excluded',
      medicareNote:
        'Pfizer\'s terms: patients "are not eligible to use this card if they are enrolled in a state or federally funded insurance program, including but not limited to Medicare, Medicaid, TRICARE, Veterans Affairs health care, a state prescription drug assistance program, or the Government Health Insurance Plan available in Puerto Rico." Federal anti-kickback rules are why every manufacturer copay card works this way.',
      summary:
        'A commercial copay offer: eligible patients with commercial insurance "may pay as little as $0 per month" for Vyndamax. It is not health insurance, has no membership fee, and is accepted only at participating pharmacies.',
      covers: 'Part of the commercial copay for Vyndamax, up to a $10,000–$60,000 maximum benefit per calendar year. Nothing toward Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer) prescription insurance covering Vyndamax',
        'Not enrolled in Medicare, Medicaid, TRICARE, VA health care, a state prescription drug assistance program, or Puerto Rico\'s Government Health Insurance Plan',
        'Limits, terms and conditions apply',
      ],
      howToApply:
        'Commercially insured patients download the co-pay card from the VynAssist financial-assistance page. Questions about claims go to 1-888-222-8475. Not a route for Medicare beneficiaries — use the amyloidosis funds and the Pfizer assistance program instead.',
      applyUrl: 'https://myvynassist.com/financial-assistance',
      applyLabel: 'VYNDAMAX Co-Pay Savings Program terms',
      phone: '1-888-222-8475',
      sources: [vynAssist, SRC.oigCoupons],
    },
    {
      id: 'pfizer-direct',
      kind: 'manufacturer-direct',
      name: 'Manufacturer cash price — none found',
      operator: 'Pfizer',
      status: 'not-found',
      statusNote:
        'We found no Pfizer self-pay or direct-purchase price for Vyndamax on August 26, 2026, and neither Vyndamax nor Vyndaqel is among the medicines listed on TrumpRx.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — there is no cash-pay programme for Vyndamax to have a Medicare rule.',
      summary:
        'An honest negative, and there is no generic to fall back on either: DailyMed lists exactly one tafamidis product, the combined Vyndaqel/Vyndamax label. Cost help for this medication comes from the funds, the Pfizer program and Extra Help — not from shopping the price.',
      eligibility: [],
      howToApply: 'Not applicable. If Pfizer adds a self-pay option it would appear on the VynAssist financial-assistance page.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx medicine list',
      sources: [trumpRx, dailymedTafamidis],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained no amyloidosis, ATTR or cardiomyopathy program.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Vyndamax.',
      summary:
        'An honest negative — checked because Pfizer asks for proof of denial from independent foundations, and it is worth knowing which foundations there are no grounds to apply to.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund and whether it is open.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Two funds were open on August 26, 2026 — the only medication on this site where that was true. TotalAssist\'s Amyloidosis fund pays a $2,500 guaranteed award up to $5,500, and HealthWell\'s Amyloidosis fund pays up to $8,000, the largest award of any fund in this registry. Both list Vyndamax and Vyndaqel by name, and both require government or other qualifying insurance plus household income at or below 500% of the federal poverty level on their own tables. Good Days has no amyloidosis fund. Apply to both foundations before you approach Pfizer: the manufacturer program will not consider a Medicare applicant without proof that independent foundations turned them down, so these applications are the first step on that route as well as a route in themselves. Fund balances change without notice — check each fund page before you rely on it.',
  extraHelpNote:
    'Extra Help matters here for the same reason it matters on any specialty tier: with full Extra Help a covered brand-name drug costs about $12.65 in 2026 instead of specialty coinsurance. It does not depend on a fund balance and does not conflict with an amyloidosis grant. It also does not substitute for the foundation applications Pfizer requires — those are a separate condition of the manufacturer program.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Vyndamax on Medicare in August 2026 the order is set by Pfizer\'s own rule: foundations first, manufacturer second. Do them in that order even if you expect the foundations to say no.',
      bullets: [
        'Amyloidosis diagnosis, Medicare (or Medicaid/TRICARE), income at or below 500% FPL → TotalAssist Amyloidosis fund, open when we checked.',
        'The same diagnosis with any qualifying insurance → HealthWell Amyloidosis fund, also open, up to $8,000.',
        'Denied by both, or your costs are still unmanageable → the Pfizer Patient Assistance Program through VyndaLink, taking your denial letters with you.',
        'Limited income and resources → Medicare Extra Help through Social Security, alongside all of the above.',
        'Commercial insurance instead of Medicare → the VYNDAMAX Co-Pay Savings Program, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Both amyloidosis funds were open on August 26, 2026. That is unusual and it may not last — fund balances change without notice, in both directions.',
      bullets: [
        'TotalAssist: the Amyloidosis fund page shows "Open" or "Closed" and the current award amounts.',
        'HealthWell: the Disease Funds page shows the fund\'s status; sign up for its alerts even while it is open, so you hear if it closes and reopens.',
        'Pfizer: VynAssist on 1-888-863-1177 can confirm the current enrollment requirements before you gather denial letters.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program applies its own rules and its own income table. Never carry a dollar figure from one to another — each builds its table from a poverty-guideline year of its own choosing.',
      bullets: [
        'TotalAssist: government insurance that covers Vyndamax; income at or below 500% of the federal poverty level adjusted for your regional cost-of-living index; confirmed amyloidosis in treatment (or beginning within 60 days, or treated in the past 6 months).',
        'HealthWell: insurance that pays part of the cost — Medicare qualifies; income up to 500% FPL on HealthWell\'s table; diagnosis verified by your provider\'s signature.',
        'Pfizer Patient Assistance Program: uninsured or government-insured, other options unavailable, and proof of denial from independent foundations. Income limits apply but are not published on the VYNDAMAX pages — ask VynAssist what they are.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The two fund applications take about 15 minutes each with these to hand:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your amyloidosis diagnosis and its date — TotalAssist needs the exact date if it was within the past 6 months — and whether it is wild-type or hereditary ATTR.',
        'Which product you are prescribed: Vyndamax (tafamidis 61 mg) or Vyndaqel (tafamidis meglumine 20 mg). They are not interchangeable on a per-milligram basis and both are covered by the funds.',
        'Your prescriber\'s name and contact details.',
        'Household size and annual household income, plus proof — TotalAssist gives you 30 days after approval to supply it.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you (the patient) apply online in about 15 minutes, or by phone on 866-512-3861. Patient Advocate Foundation verifies the diagnosis with your provider.',
        'HealthWell: apply online or by phone; your provider verifies the diagnosis by signature.',
        'Pfizer: you and your prescriber complete the VyndaLink enrollment form together. A Pfizer Patient Access Coordinator can walk you through it.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect — and keep every letter you receive:',
      bullets: [
        'TotalAssist: you learn immediately online whether you are approved; proof of income is due within 30 days.',
        'HealthWell: approval creates a 12-month grant cycle with a pharmacy card.',
        'Keep any denial in writing. Pfizer requires proof of denial before it will consider your enrollment, so a rejection letter has real value here — do not discard it.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'On a specialty medication with no generic, the remaining routes are worth working through carefully:',
      bullets: [
        'If a fund has closed since this page was verified, set an alert on it and apply to the other one — the two foundations hold separate money.',
        'Take your denial letters to VynAssist and start the Pfizer Patient Assistance Program application; that is precisely what they are for.',
        'Apply for Extra Help even if you assume you earn too much — on a specialty tier it is the difference between coinsurance and about $12.65 for a covered brand drug.',
        'Ask your cardiologist\'s office whether they have staff who handle amyloidosis assistance applications; specialist centres often do.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments — on a drug that hits the cap early, this smooths a very uneven year.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Whether your ATTR is wild-type or hereditary, and the date of diagnosis', note: 'TotalAssist needs the exact date if it was within the past 6 months' },
    { item: 'Which product you take — Vyndamax 61 mg or Vyndaqel 20 mg', note: 'both are on both funds\' lists; they are not interchangeable per milligram' },
    { item: 'Any foundation denial letters', note: 'Pfizer requires proof of denial before considering enrollment in its assistance program' },
  ],
  ifUnavailable: [
    {
      text: 'If both amyloidosis funds turn you down, that outcome is the key to the manufacturer route — take the denial letters to VynAssist and apply to the Pfizer Patient Assistance Program.',
    },
    ...standardAlternatives('Vyndamax'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Vyndamax?',
      answer:
        'Yes. Vyndamax is a capsule you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan — generally on a specialty tier and usually with prior authorization. Part D out-of-pocket costs are capped at $2,100 in 2026, which on a drug at this price level is typically reached early in the year. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Vyndamax patient assistance program for people on Medicare?',
      answer:
        'Yes, with a condition attached. Pfizer\'s own VYNDAMAX support site says the Pfizer Patient Assistance Program through VyndaLink "may be able to help eligible patients who are uninsured or have government-issued insurance and other financial assistance options aren\'t available" — and that patients "are required to apply for and provide proof of denial prior to being considered for enrollment." So a Medicare beneficiary is eligible in principle, but must apply to the independent amyloidosis funds first and keep the outcome letters. Call VynAssist on 1-888-863-1177.',
    },
    {
      question: 'Is there a charitable grant for Vyndamax right now?',
      answer:
        'Yes — two, as of August 26, 2026, which is unusual. TotalAssist\'s Amyloidosis fund was open with a $2,500 guaranteed award up to $5,500, and HealthWell\'s Amyloidosis fund was open with up to $8,000. Both name Vyndamax and Vyndaqel on their covered lists, and both require income at or below 500% of the federal poverty level on their own tables. Good Days has no amyloidosis fund. Apply to both — they hold separate money, and a denial from either counts toward Pfizer\'s proof-of-denial requirement.',
    },
    {
      question: 'Can I use the Vyndamax co-pay card with Medicare?',
      answer:
        'No. Pfizer\'s terms state patients are not eligible if they are "enrolled in a state or federally funded insurance program, including but not limited to Medicare, Medicaid, TRICARE, Veterans Affairs health care, a state prescription drug assistance program, or the Government Health Insurance Plan available in Puerto Rico." That exclusion is standard across manufacturer copay cards and comes from federal anti-kickback rules.',
    },
    {
      question: 'Is there a generic for Vyndamax?',
      answer:
        'No. A DailyMed search for tafamidis returns exactly one labelled product — the combined Vyndaqel and Vyndamax label from Pfizer. There is no generic tafamidis, and no cash-price route: Vyndamax is not listed on TrumpRx either. That is why the funds and the manufacturer program carry the whole weight on this page.',
    },
    {
      question: 'What is the difference between Vyndamax and Vyndaqel?',
      answer:
        'They are two formulations of the same treatment from Pfizer, described on one label. Vyndamax is tafamidis 61 mg and Vyndaqel is tafamidis meglumine 20 mg, and the label states they are not interchangeable on a per-milligram basis. For assistance purposes the distinction rarely matters — TotalAssist and HealthWell both list both products, and Pfizer says the VyndaLink support offerings available for Vyndamax are also available for Vyndaqel.',
    },
    {
      question: 'Is Vyndamax part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price data file has no Vyndamax, Vyndaqel or tafamidis row for initial price applicability year 2026, 2027 or 2028. Your cost is set by your plan\'s specialty-tier cost-sharing. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  // Vyndamax has no clinical peer in this registry — nothing else here treats a
  // cardiomyopathy of this kind. These are the nearest cardiovascular pages,
  // offered for navigation only.
  relatedMedications: ['entresto', 'eliquis', 'brilinta'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Vyndamax' },
  ],
  sources: [
    label,
    dailymedTafamidis,
    vynAssist,
    vynAssistHome,
    pfizerRxPathways,
    totalAssistAmyloidosis,
    SRC.totalAssistEligibility,
    SRC.totalAssistNotify,
    healthWellAmyloidosis,
    SRC.healthWellFunds,
    SRC.healthWellEligibility,
    goodDays,
    cmsSelectedDrugFile,
    trumpRx,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup). A literal, never the shared
  // CHECKED constant. The two OPEN amyloidosis funds are the most perishable
  // claims on this page — re-verify them first.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Vyndamax Assistance',
    status: 'coming-soon',
    description:
      'Why the amyloidosis funds come before the Pfizer program, what proof of denial means, and how to apply to both open funds.',
  },
  description_meta:
    'How to find financial assistance for Vyndamax (tafamidis) on Medicare: two open amyloidosis grant funds, the Pfizer assistance program and its proof-of-denial rule, why the co-pay card excludes Medicare, and Extra Help — verified August 2026.',
};
