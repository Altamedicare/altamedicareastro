// ---------------------------------------------------------------------------
// Daliresp (roflumilast) — AstraZeneca. Independently researched 2026-08-26.
// Batch 8 — a NEW slug.
//
// Daliresp is the only COPD medication in this registry that is not an inhaler,
// and that is the whole point of the page. It is a once-daily tablet that works
// on inflammation, and its own label says it "is not a bronchodilator and is not
// indicated for the relief of acute bronchospasm". People prescribed it
// alongside an inhaler routinely assume it is a substitute for one, and the
// assistance landscape rewards knowing the difference.
//
// The headline finding is a negative that turns into a positive:
//   • AstraZeneca offers a Medicare beneficiary NO route to brand Daliresp. It is
//     not on the AZ&Me medication list (15 products, each with its own downloadable
//     application) and not on AstraZeneca Direct. This is the third time the
//     project has found this exact AstraZeneca shape — Symbicort and Brilinta were
//     the first two.
//   • But roflumilast is comprehensively generic: DailyMed lists 20 labelled
//     products across 18 labelers, TotalAssist lists "Roflumilast" on the COPD
//     fund alongside the brand, and the federal TrumpRx site prices generic
//     roflumilast at $13.48. For a Medicare beneficiary that generic is almost
//     certainly the entire answer, and saying so plainly is more useful than
//     padding the manufacturer section.
//
// TAXONOMY: introduces `pde4-inhibitor`. The label Highlights say "DALIRESP is a
// selective phosphodiesterase 4 inhibitor". None of the inhaler classes can carry
// an oral tablet, and 'kinase-inhibitor' names a different enzyme family, so the
// existing vocabulary demonstrably could not represent it.
//
// Built LINK-DARK under D8: no does-medicare-cover-* link appears in this record.
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
  title: 'Daliresp prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c9a1d0a8-581f-4f91-a2b8-f419192d0ebf',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"DALIRESP is a selective phosphodiesterase 4 inhibitor"; indicated "to reduce the risk of COPD exacerbations in patients with severe COPD associated with chronic bronchitis and a history of exacerbations"; "DALIRESP is not a bronchodilator and is not indicated for the relief of acute bronchospasm"; tablets 250 mcg and 500 mcg; AstraZeneca Pharmaceuticals LP (rev. 3/12/2020)',
};
const dailymedRoflumilast = {
  title: 'DailyMed label index — roflumilast',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=roflumilast',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '20 labelled roflumilast products across 18 distinct labelers — AstraZeneca\'s DALIRESP plus generic roflumilast tablets from Micro Labs, Ascend, Aurobindo, AvKARE, Golden State Medical Supply, American Health Packaging, Amici Pharma and others',
};
const azmeMedications = {
  title: 'AZ&Me — medications available through the program',
  url: 'https://www.azandmeapp.com/included-medications',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'the complete AZ&Me product list, evidenced by the program\'s own downloadable application PDFs — Airsupra, Baxfendy, Bevespi, Breztri, Calquence, Etcamah, Fasenra, Imfinzi, Imjudo, Lokelma, Lynparza, Saphnelo, Tagrisso, Truqap and Wainua. Daliresp is not listed',
};
const azmeEligibility = {
  title: 'AZ&Me eligibility requirements and income guidelines',
  url: 'https://www.azandmeapp.com/eligibility-requirements',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'eligibility is limited to patients "treated by a US-licensed healthcare provider for a medication on AZ&Me"; "Not have any commercial (private or employer-sponsored) insurance or government insurance other than Medicare"; "If you are a Medicare Beneficiary, you must not be eligible for or enrolled in Medicare\'s Extra Help program"; income at or below 300% FPL for primary and specialty medications',
};
const azDirect = {
  title: 'AstraZeneca Direct — self-pay medication list',
  url: 'https://www.azpatientdirect.com/',
  publisher: 'AstraZeneca (dispensed by ASPN Pharmacies)',
  checked: CHECKED,
  supports:
    'the products offered — Airsupra, Baxfendy, Bevespi Aerosphere, Farxiga, FluMist, Lokelma and Xigduo XR. Daliresp is not offered. Contact 1-844-692-9633',
};
const trumpRx = {
  title: 'TrumpRx — roflumilast listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'generic roflumilast listed at a cash price of $13.48. Brand Daliresp is not listed on the site',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Daliresp (Roflumilast)" AND the generic "Roflumilast" both on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Daliresp and generic roflumilast; $1,200 guaranteed / $3,500 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Chronic Obstructive Pulmonary Disease - Medicare Access" CLOSED; the only open respiratory fund is Bronchiectasis, a different diagnosis',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no COPD program of any kind',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Daliresp or roflumilast row for initial price applicability year 2026, 2027 or 2028',
};

export const DALIRESP: MedicationAssistanceRecord = {
  slug: 'daliresp',
  brandName: 'Daliresp',
  genericName: 'roflumilast',
  manufacturer: 'AstraZeneca',
  // `respiratory`. Severe COPD with chronic bronchitis — the same condition key
  // as the inhalers, and correct: TotalAssist lists Daliresp on the COPD fund.
  conditions: ['respiratory'],
  // The registry's first `pde4-inhibitor`. Label Highlights: "DALIRESP is a
  // selective phosphodiesterase 4 inhibitor". An oral tablet, so none of the
  // inhaler classes apply, and the label states outright that it is not a
  // bronchodilator.
  drugClass: ['pde4-inhibitor'],
  description:
    'Daliresp is a once-daily tablet for severe COPD — not an inhaler, and not a substitute for one. It works by reducing inflammation in the lungs to cut the number of flare-ups, and its label says plainly that it "is not a bronchodilator and is not indicated for the relief of acute bronchospasm". It is added to inhaler treatment rather than replacing it.',
  usedFor: [
    'Reducing the risk of COPD exacerbations (flare-ups) in adults with severe COPD associated with chronic bronchitis and a history of exacerbations',
  ],
  whyCostly:
    'Brand Daliresp sits on a brand tier in most Part D plans, and AstraZeneca offers a Medicare beneficiary no route to it at all — Daliresp is on neither the AZ&Me patient assistance list nor AstraZeneca Direct. What changes the arithmetic completely is that roflumilast is thoroughly generic: DailyMed lists 20 labelled products across 18 different labelers, and the federal TrumpRx site prices generic roflumilast at $13.48. For most people on Medicare the generic is not a fallback here — it is the answer.',
  medicareContext:
    'Daliresp is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually with brand Daliresp on a brand tier and generic roflumilast on a much lower generic tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Daliresp or roflumilast row for 2026, 2027 or 2028 — unsurprising for a medicine that already has generic competition, since the program selects drugs without it. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year.',
  quickAnswer: {
    verdict:
      'Not from the manufacturer — and for once that barely matters. AstraZeneca has no program covering Daliresp, but roflumilast is available as a generic from 18 different labelers, priced at $13.48 on the federal TrumpRx site, and the charitable funds list the generic alongside the brand. Ask about generic roflumilast first; everything else on this page is secondary to that.',
    points: [
      'AZ&Me Prescription Savings Program: Daliresp is NOT on the included-medications list (August 26, 2026), so the program\'s Medicare pathway cannot be used for it.',
      'AstraZeneca Direct: does not offer Daliresp either — its list is Airsupra, Baxfendy, Bevespi Aerosphere, Farxiga, FluMist, Lokelma and Xigduo XR.',
      'Generic roflumilast: 20 labelled products across 18 labelers, and $13.48 cash on the federal TrumpRx site. This is the route with no application and no waiting.',
      'Charitable grants: TotalAssist\'s COPD fund and COPD health equity fund list both "Daliresp (Roflumilast)" and the generic "Roflumilast", and both funds were closed ($1,200 guaranteed / $3,500 maximum). HealthWell\'s COPD – Medicare Access fund was closed. Good Days has no COPD fund.',
      'Medicare: not a negotiated-price drug for 2026, 2027 or 2028; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65.',
    ],
  },
  programs: [
    {
      id: 'azme',
      kind: 'manufacturer-pap',
      name: 'AZ&Me Prescription Savings Program — Daliresp not covered',
      operator: 'AstraZeneca',
      status: 'not-found',
      statusNote:
        'Daliresp was not on the AZ&Me medication list on August 26, 2026. The program\'s own included-medications page carries a downloadable application for each covered product — Airsupra, Baxfendy, Bevespi, Breztri, Calquence, Etcamah, Fasenra, Imfinzi, Imjudo, Lokelma, Lynparza, Saphnelo, Tagrisso, Truqap and Wainua — and Daliresp is in none of them.',
      medicare: 'unknown',
      medicareNote:
        'AZ&Me does have a Medicare pathway — it accepts beneficiaries who are not eligible for or enrolled in Extra Help, with income at or below 300% of the federal poverty level, and it is one of the few programs that explicitly permits "government insurance other than Medicare" to be absent rather than present. None of that reaches Daliresp, because the program\'s first requirement is being treated with a medication AZ&Me actually carries.',
      summary:
        'An honest negative, and the third time this project has recorded it for an AstraZeneca product — Symbicort and Brilinta were the others. AstraZeneca runs a substantial free-medicine program; Daliresp is not in it. Do not spend time on an AZ&Me application for this medication.',
      eligibility: [],
      howToApply:
        'Not applicable for Daliresp. If AstraZeneca adds it, it would appear on the included-medications page cited here. Call 1-800-292-6363 (Monday–Friday, 9am–6pm ET) if you want AstraZeneca to confirm directly.',
      applyUrl: 'https://www.azandmeapp.com/included-medications',
      applyLabel: 'AZ&Me medication list',
      phone: '1-800-292-6363',
      sources: [azmeMedications, azmeEligibility],
    },
    {
      id: 'az-direct',
      kind: 'manufacturer-direct',
      name: 'AstraZeneca Direct (cash-pay) — Daliresp not offered',
      operator: 'AstraZeneca (dispensed by ASPN Pharmacies)',
      status: 'not-found',
      statusNote:
        'On August 26, 2026 AstraZeneca Direct offered Airsupra, Baxfendy, Bevespi Aerosphere, Farxiga, FluMist, Lokelma and Xigduo XR. Daliresp is not on the list.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — Daliresp is not part of the program, so it states no Medicare rule.',
      summary:
        'An honest negative with a ready replacement: there is no AstraZeneca cash price for Daliresp, but there is a published federal cash price for generic roflumilast — $13.48 on TrumpRx — which is the comparison that actually helps.',
      eligibility: [],
      howToApply: 'Not applicable. If AstraZeneca adds Daliresp it would appear on the AstraZeneca Direct product list cited here.',
      applyUrl: 'https://www.azpatientdirect.com/',
      applyLabel: 'AstraZeneca Direct product list',
      phone: '1-844-692-9633',
      sources: [azDirect, trumpRx, dailymedRoflumilast],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — COPD funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Chronic obstructive pulmonary disease (COPD) · COPD health equity',
      status: 'closed',
      statusNote:
        'Both COPD funds were closed to new applicants on August 26, 2026, each with a $1,200 guaranteed and $3,500 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open.',
      summary:
        'Both "Daliresp (Roflumilast)" and the plain generic "Roflumilast" are named on the COPD approved-medication list, so switching to the generic — which is the main advice on this page — would not cost you fund eligibility. Both funds were closed when we checked.',
      covers:
        'When open: $1,200 guaranteed award and up to $3,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed COPD diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
        'The health-equity fund additionally requires a home zip code in a designated social-vulnerability county',
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistCopd, totalAssistCopdHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — COPD – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Obstructive Pulmonary Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Closed on August 26, 2026. The only open lung fund on HealthWell\'s published list was Bronchiectasis, a different diagnosis.',
      medicare: 'eligible',
      medicareNote: 'A "Medicare Access" fund — built specifically for people with Medicare — which makes it worth an alert even while closed.',
      summary:
        'HealthWell runs a COPD fund designed for Medicare beneficiaries; it was closed when we checked. Given that the generic costs so little, a grant is likely to matter less here than for most medications on this site.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for COPD.',
      eligibility: ['A confirmed COPD diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds and alerts',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellFunds, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was COPD.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Daliresp.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable picture for Daliresp matters less than it does for almost anything else on this site, and that is good news rather than bad. TotalAssist lists both the brand and the generic "Roflumilast" on its COPD fund and COPD health equity fund, each paying $1,200 guaranteed up to $3,500, and both were closed on August 26, 2026. HealthWell\'s COPD – Medicare Access fund was closed as well, and Good Days runs no COPD fund. But with 18 different labelers making generic roflumilast and a published federal cash price of $13.48, the cost problem this medication presents is usually solved at the pharmacy counter rather than by a grant. Set a TotalAssist alert if you like, and in the meantime ask your prescriber about the generic.',
  extraHelpNote:
    'Extra Help does the ordinary thing here rather than anything special: it lowers cost-sharing on every covered drug you take. There is no AstraZeneca program to weigh it against for Daliresp, so there is nothing to choose between — if your income and resources are limited, apply. With full Extra Help a covered brand-name drug costs about $12.65 in 2026, and a generic costs less still, which for roflumilast is a small saving stacked onto an already small one.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Daliresp on Medicare in August 2026, the honest order puts the manufacturer last because there is nothing there:',
      bullets: [
        'Ask your prescriber and plan about generic roflumilast — 20 labelled products from 18 labelers. This is the step that solves the problem for most people.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'COPD diagnosis → set alerts on the TotalAssist and HealthWell COPD funds (all closed when checked).',
        'Cost still unmanageable → ask about a formulary exception, and compare Part D plans in the fall.',
        'Do not spend time on AZ&Me — Daliresp is not on its list.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'There is no manufacturer application to check for Daliresp. What can change is fund status.',
      bullets: [
        'AZ&Me: the included-medications page is the authoritative list — check whether Daliresp has been added since this page was verified.',
        'TotalAssist: the COPD and COPD health equity fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: worth re-checking the disease-funds list occasionally, since HealthWell opens new funds as well as reopening old ones.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Only two things here have eligibility rules that could apply to you, and one of them is not a program at all:',
      bullets: [
        'Generic roflumilast: no eligibility rules — it is a prescribing and formulary question, which is what makes it the first thing to ask about.',
        'TotalAssist (when open): government insurance covering Daliresp or roflumilast; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed COPD diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified COPD diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'AZ&Me: not applicable, because Daliresp is not a medication on the program.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your COPD diagnosis and its date, and confirmation that it is severe COPD with chronic bronchitis and a history of flare-ups — that is the indication on the label.',
        'Your Daliresp strength — 250 mcg or 500 mcg. The 250 mcg tablet is normally a four-week starting dose rather than the maintenance dose.',
        'Household size and annual household income, plus proof.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Generic switch: nothing to apply for — your prescriber writes it, or the pharmacy substitutes where state law allows.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Formulary exception: your prescriber\'s office submits it to your plan.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'Formulary exception: plans generally must respond within a set timeframe; your prescriber\'s office can tell you what to expect.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'With no manufacturer program in the picture, this step is where the money is:',
      bullets: [
        'Ask specifically about generic roflumilast. It is the same medicine at a generic tier, it is on the same TotalAssist fund lists as the brand, and the federal TrumpRx site prices it at $13.48.',
        'If your plan does not cover roflumilast well, ask your prescriber\'s office about a formulary exception.',
        'Remember what Daliresp is for. It reduces flare-ups over time and does nothing for sudden breathlessness — so if cost is forcing a choice between this and a rescue inhaler, that is a conversation for your prescriber, not a budgeting decision.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Compare Part D plans in the fall — tier placement for roflumilast differs from plan to plan.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Daliresp strength — 250 mcg or 500 mcg', note: 'the 250 mcg tablet is usually a starting dose for the first four weeks' },
    { item: 'Confirmation that your COPD is severe and associated with chronic bronchitis', note: 'that is the label indication, and prior authorisation often turns on it' },
  ],
  ifUnavailable: [
    {
      text: 'Because AstraZeneca has no assistance program for Daliresp, the first question is not an application — ask your prescriber and plan about generic roflumilast, which DailyMed lists under 20 separate labels from 18 labelers.',
    },
    {
      text: 'Compare the federal cash price for generic roflumilast — $13.48 on TrumpRx — against what your plan charges you for the brand.',
      href: 'https://trumprx.gov/browse',
      label: 'TrumpRx',
    },
    ...standardAlternatives('Daliresp'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Daliresp?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Daliresp, usually with brand Daliresp on a brand tier and generic roflumilast on a much lower generic tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Daliresp patient assistance program for people on Medicare?',
      answer:
        'No. Daliresp is not on the AZ&Me Prescription Savings Program medication list — we read that list on August 26, 2026 — and it is not offered through AstraZeneca Direct either. This is the same finding the project has recorded for Symbicort and Brilinta, both also AstraZeneca products. For Daliresp the routes are generic roflumilast, Extra Help, and the charitable funds if they reopen.',
    },
    {
      question: 'Is there a generic for Daliresp?',
      answer:
        'Yes, and it is thoroughly established: DailyMed lists 20 labelled roflumilast products across 18 different labelers, including Micro Labs, Ascend, Aurobindo, AvKARE and Golden State Medical Supply. The federal TrumpRx site prices generic roflumilast at $13.48. TotalAssist lists the generic on the same COPD funds as the brand. Since there is no manufacturer assistance program for this medication, asking your prescriber and plan about the generic is by far the largest saving available.',
    },
    {
      question: 'Is Daliresp an inhaler, or does it replace one?',
      answer:
        'Neither. Daliresp is a tablet you swallow once a day, and it does not replace an inhaler. Its own label says it "is not a bronchodilator and is not indicated for the relief of acute bronchospasm" — it reduces inflammation to cut the number of COPD flare-ups over time, alongside your inhalers rather than instead of them. If cost is pushing you to choose between Daliresp and an inhaler, that is a decision for your prescriber to make with you, because the two do different jobs.',
    },
    {
      question: 'Is Daliresp part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Daliresp or roflumilast row for initial price applicability year 2026, 2027 or 2028 — which is unsurprising for a medicine that already has generic competition, since the program selects drugs without it. Your cost is set by your plan\'s tier and cost-sharing, and by whether you are dispensed the brand or the generic. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
    {
      question: 'Is there a charitable grant for Daliresp right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists both Daliresp and generic roflumilast on its COPD fund and COPD health equity fund, and both were closed, each with a $1,200 guaranteed and $3,500 maximum award. HealthWell\'s COPD – Medicare Access fund was closed too, and Good Days has no COPD fund. Given the generic price, a grant is likely to matter less for this medication than for most on this site.',
    },
  ],
  relatedMedications: ['symbicort', 'breztri', 'anoro', 'spiriva'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Daliresp' },
  ],
  sources: [
    label,
    dailymedRoflumilast,
    azmeMedications,
    azmeEligibility,
    azDirect,
    trumpRx,
    totalAssistCopd,
    totalAssistCopdHe,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the AZ&Me medication list first —
  // this record's headline finding is an absence, and absences change when a
  // list changes.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Daliresp Assistance',
    status: 'coming-soon',
    description:
      'Why AZ&Me does not cover Daliresp, why a PDE4 tablet is not a substitute for an inhaler, and what generic roflumilast at $13.48 changes.',
  },
  description_meta:
    'How to lower the cost of Daliresp (roflumilast) on Medicare: why AZ&Me does not cover it, generic roflumilast from 18 labelers at $13.48, COPD fund status, and Medicare Extra Help — verified August 2026.',
};
