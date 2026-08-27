// ---------------------------------------------------------------------------
// Brilinta (ticagrelor) — AstraZeneca. Independently researched 2026-08-26.
// Every program below was read on the official source cited with it. Batch 7 —
// a NEW slug, selected for information value rather than for demand.
//
// Two reasons this page earns its place. First, it is the registry's first
// ANTIPLATELET. The "Blood Thinners" browse view has always described itself as
// "Anticoagulants and antiplatelets", and until now every medication in it was
// an anticoagulant — Eliquis and Xarelto. That is a real gap for readers,
// because "blood thinner" is one phrase covering two different kinds of
// medicine with different uses, and this page is where the difference gets
// explained.
//
// Second, the honest answer here is unusual and useful: there is NO manufacturer
// route to the brand for a Medicare beneficiary. Brilinta is not on the AZ&Me
// medication list and not on AstraZeneca Direct, both checked on their own
// pages — the same finding Batch 6 made for Symbicort. What a Medicare
// beneficiary actually has is generic ticagrelor, which DailyMed lists under 35
// separate labels. The page says so plainly rather than padding the manufacturer
// section.
//
// That finding also disproves the legacy `azme` tagline, which named Brilinta.
// Corrected in data/drugs.ts in this batch under the Sanofi/AbbVie precedent —
// prose only, `drugs[]` untouched.
//
// Research gap carried honestly: brilinta.com renders its Commercial Insurance
// and Medicare Part D pages client-side, so the savings-card terms could not be
// read; the page also carries a 2024 copyright and update stamp. The savings
// card is therefore `verify` with no dollar figures.
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
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Brilinta prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7b3f443-e83d-4bf2-0e96-023448fed9a8',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"BRILINTA is a P2Y12 platelet inhibitor indicated"; the three indications (acute coronary syndrome or history of MI; coronary artery disease at high risk; acute ischemic stroke with NIH Stroke Scale score ≤5 or high-risk TIA); 60 mg and 90 mg tablets; AstraZeneca Pharmaceuticals LP (rev. 5/7/2026)',
};
const dailymedTicagrelor = {
  title: 'DailyMed label index — ticagrelor',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=ticagrelor',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '35 labelled ticagrelor products — AstraZeneca\'s BRILINTA plus generic ticagrelor tablets from Teva, Northstar, Hisun, Aiping and others',
};
const azmeMedications = {
  title: 'AZ&Me — medications available through the program',
  url: 'https://www.azandmeapp.com/included-medications',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'the complete AZ&Me product list — Airsupra, Baxfendy, Bevespi, Breztri, Calquence, Etcamah, Fasenra, Imfinzi, Imjudo, Lokelma, Lynparza, Saphnelo, Tagrisso, Truqap, Wainua. Brilinta is not listed',
};
const azmeUpdates = {
  title: 'AZ&Me important program updates',
  url: 'https://www.azandmeapp.com/important-program-updates',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'the 2026 product additions and removals (Baxfendy added June 9, 2026; Farxiga and Xigduo XR removed effective May 1, 2026) — Brilinta appears on neither list',
};
const azmeEligibility = {
  title: 'AZ&Me eligibility requirements and income guidelines',
  url: 'https://www.azandmeapp.com/eligibility-requirements',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'eligibility is limited to patients treated with "a medication on AZ&Me"; the Medicare/Extra Help rule; the 300% FPL income table effective January 26, 2026',
};
const azDirect = {
  title: 'AstraZeneca Direct — self-pay medication list',
  url: 'https://www.azpatientdirect.com/',
  publisher: 'AstraZeneca (dispensed by ASPN Pharmacies)',
  checked: CHECKED,
  supports:
    'the products offered — Airsupra, Baxfendy, Bevespi Aerosphere, Farxiga, FluMist, Lokelma and Xigduo XR. Brilinta is not offered',
};
const brilintaSite = {
  title: 'Brilinta — savings and support',
  url: 'https://www.brilinta.com/savings-and-support.html',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports:
    'the site carries separate "Commercial Insurance" and "Medicare Part D" sections and names AZ&Me in its trademark footer. NOTE: both sections render client-side and could not be read here, and the page carries a 2024 copyright with "Last Updated 5/24" — so no savings-card terms are reproduced from it',
};
const totalAssistStroke = {
  title: 'TotalAssist — Stroke fund',
  url: 'https://totalassist.org/funds/stroke/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Brilinta (Ticagrelor)" on the approved-medication list; $1,000 guaranteed / $1,500 maximum award; government insurance; 500% FPL',
};
const totalAssistCadHe = {
  title: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
  url: 'https://totalassist.org/funds/coronary-artery-disease-cad-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; "Brilinta (Ticagrelor)" on the approved-medication list; $1,000 guaranteed / $1,500 maximum award',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — no coronary artery disease, acute coronary syndrome, ischemic stroke or antiplatelet fund of any kind. The nearest cardiovascular entries are Chronic Heart Failure – Medicare Access and Cardiomyopathy – Medicare Access, both closed and both a different diagnosis',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no coronary artery disease, acute coronary syndrome or stroke program on the fund list',
};
const cmsSelectedDrugFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file (May 26, 2026) — no Brilinta or ticagrelor row for initial price applicability year 2026, 2027 or 2028',
};

export const BRILINTA: MedicationAssistanceRecord = {
  slug: 'brilinta',
  brandName: 'Brilinta',
  genericName: 'ticagrelor',
  manufacturer: 'AstraZeneca',
  // `heart` only. Brilinta is an arterial antiplatelet for acute coronary
  // syndrome, coronary artery disease and ischemic stroke — it does not treat
  // atrial fibrillation, DVT or pulmonary embolism, which is what the
  // `blood-clots` key ("Blood clots / AFib") means on this site. Adding that key
  // would put Brilinta alongside Eliquis and Xarelto as though it were
  // interchangeable with them, which is the confusion this page exists to fix.
  conditions: ['heart'],
  // The first record to carry 'antiplatelet'. Label Highlights: "BRILINTA is a
  // P2Y12 platelet inhibitor". The class key alone puts it in the Blood Thinners
  // browse view, so the view finally holds both kinds of blood thinner.
  drugClass: ['antiplatelet'],
  description:
    'Brilinta is a twice-daily antiplatelet tablet — a blood thinner, but a different kind from Eliquis or Xarelto. Those are anticoagulants, which slow the clotting proteins in blood and are used for atrial fibrillation and clots in the legs and lungs. Brilinta stops platelets sticking together in the arteries, which is what causes a heart attack or an artery-blocking stroke. The two kinds are not interchangeable, and the programs that help pay for them are not the same either.',
  usedFor: [
    'Reducing the risk of cardiovascular death, heart attack and stroke in people with acute coronary syndrome (ACS) or a history of heart attack — and reducing the risk of clotting in a stent placed for ACS',
    'Reducing the risk of a first heart attack or stroke in people with coronary artery disease (CAD) at high risk for those events',
    'Reducing the risk of stroke in people having an acute ischemic stroke (NIH Stroke Scale score of 5 or less) or a high-risk transient ischemic attack',
  ],
  whyCostly:
    'Brand Brilinta sits on a brand tier in most Part D plans, and it is taken twice a day for a year or more after a heart attack or stent, so cost-sharing accumulates. What changes the arithmetic completely is that generic ticagrelor now exists: DailyMed lists 35 labelled ticagrelor products, only one of which is AstraZeneca\'s brand. That matters more than usual here, because AstraZeneca offers a Medicare beneficiary no route to the brand at all — Brilinta is on neither the AZ&Me patient assistance list nor AstraZeneca Direct, and the two charitable funds that cover it were closed.',
  medicareContext:
    'Brilinta is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually on a brand tier — while generic ticagrelor typically sits on a much lower generic tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Brilinta or ticagrelor row for 2026, 2027 or 2028. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year. Because there is no manufacturer program for this medication, those Medicare-side routes and the generic are the whole picture.',
  quickAnswer: {
    verdict:
      'Not from the manufacturer — and that is the useful finding. Brilinta is not on AstraZeneca\'s AZ&Me patient assistance list and not on AstraZeneca Direct, so there is no free-drug or cash-price route to the brand. Both charitable funds that list Brilinta were closed, and HealthWell has no applicable fund at all. What a Medicare beneficiary does have is generic ticagrelor, Extra Help, and a plan comparison.',
    points: [
      'AZ&Me Prescription Savings Program: Brilinta is NOT on the included-medications list (August 26, 2026), so the program\'s Medicare pathway cannot be used for it.',
      'AstraZeneca Direct: does not offer Brilinta either — its list is Airsupra, Baxfendy, Bevespi, Farxiga, FluMist, Lokelma and Xigduo XR.',
      'Generic ticagrelor: 35 labelled products on DailyMed. This is the route with no application and no waiting, and it is usually the largest saving available here.',
      'Charitable grants: TotalAssist\'s Stroke fund and CAD health equity fund both list Brilinta and both were closed. HealthWell runs no coronary artery disease, acute coronary syndrome or stroke fund of any kind, and Good Days has none either.',
      'Medicare: not a negotiated-price drug for 2026, 2027 or 2028; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65.',
    ],
  },
  programs: [
    {
      id: 'azme',
      kind: 'manufacturer-pap',
      name: 'AZ&Me Prescription Savings Program — Brilinta not covered',
      operator: 'AstraZeneca',
      status: 'not-found',
      statusNote:
        'Brilinta was not on the AZ&Me medication list on August 26, 2026. The program\'s own included-medications page lists Airsupra, Baxfendy, Bevespi, Breztri, Calquence, Etcamah, Fasenra, Imfinzi, Imjudo, Lokelma, Lynparza, Saphnelo, Tagrisso, Truqap and Wainua, each with a downloadable application, and Brilinta is in none of them. It is also absent from the 2026 additions-and-removals notice, so this is recorded as "not on the list" rather than "removed this year".',
      medicare: 'unknown',
      medicareNote:
        'AZ&Me does have a Medicare pathway — it accepts beneficiaries who are not eligible for or enrolled in Extra Help, with income at or below 300% of the federal poverty level. That pathway is irrelevant to Brilinta, because the program\'s first eligibility requirement is being treated with a medication AZ&Me carries, and Brilinta is not one. Note that brilinta.com still names AZ&Me in its trademark footer, which is easy to misread as inclusion.',
      summary:
        'An honest negative, and the most important fact on this page. AstraZeneca runs a substantial free-medication program; Brilinta is not in it. Do not spend time on an AZ&Me application for this medication — ask about generic ticagrelor instead.',
      eligibility: [],
      howToApply:
        'Not applicable for Brilinta. If AstraZeneca adds it, it would appear on the included-medications page and in the important-program-updates notice, both cited here. Call 1-800-292-6363 (Monday–Friday, 9am–6pm ET) if you want AstraZeneca to confirm directly.',
      applyUrl: 'https://www.azandmeapp.com/included-medications',
      applyLabel: 'AZ&Me medication list',
      phone: '1-800-292-6363',
      sources: [azmeMedications, azmeUpdates, azmeEligibility],
    },
    {
      id: 'brilinta-savings',
      kind: 'manufacturer-savings',
      name: 'Brilinta savings card',
      operator: 'AstraZeneca',
      status: 'verify',
      statusNote:
        'Could not be confirmed at the source on August 26, 2026. brilinta.com carries "Commercial Insurance" and "Medicare Part D" sections, but both render client-side and their terms could not be read; the page also carries a 2024 copyright and a "Last Updated 5/24" stamp. No dollar amount, maximum or expiry is published here as a result.',
      medicare: 'excluded',
      medicareNote:
        'Manufacturer copay cards are closed to Medicare across the board — federal anti-kickback rules prevent their use with Part D, Medicare Advantage drug coverage, Medicaid, TRICARE or VA benefits. That general rule is why this card is recorded as excluded even though its specific terms could not be read. If you have Medicare, this is not your route regardless of the current terms.',
      summary:
        'A commercial copay offer for people with private or employer prescription insurance. Its current terms are unverified — treat any figure you see quoted elsewhere with caution until AstraZeneca republishes them.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
        'Current terms unconfirmed — ask AstraZeneca before relying on a figure',
      ],
      howToApply:
        'Commercially insured patients should check the savings section of brilinta.com or ask their pharmacist for the current offer. Medicare beneficiaries should ask about generic ticagrelor and apply for Extra Help instead.',
      applyUrl: 'https://www.brilinta.com/savings-and-support.html',
      applyLabel: 'Brilinta savings and support',
      sources: [brilintaSite, SRC.oigCoupons],
    },
    {
      id: 'az-direct',
      kind: 'manufacturer-direct',
      name: 'AstraZeneca Direct (cash-pay) — Brilinta not offered',
      operator: 'AstraZeneca (dispensed by ASPN Pharmacies)',
      status: 'not-found',
      statusNote:
        'On August 26, 2026 AstraZeneca Direct offered Airsupra, Baxfendy, Bevespi Aerosphere, Farxiga, FluMist, Lokelma and Xigduo XR. Brilinta is not on the list.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — Brilinta is not part of the program, so it states no Medicare rule.',
      summary:
        'An honest negative: there is no manufacturer self-pay price for Brilinta. The cash comparison that does exist is the generic — ask a pharmacy what generic ticagrelor costs with and without your plan.',
      eligibility: [],
      howToApply: 'Not applicable. If AstraZeneca adds Brilinta, it would appear on the AstraZeneca Direct product list cited here.',
      applyUrl: 'https://www.azpatientdirect.com/',
      applyLabel: 'AstraZeneca Direct product list',
      sources: [azDirect, dailymedTicagrelor],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Stroke and CAD health equity funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Stroke · Coronary artery disease (CAD) health equity',
      status: 'closed',
      statusNote:
        'Both funds that list Brilinta were closed to new applicants on August 26, 2026, each with a $1,000 guaranteed and $1,500 maximum award. The health-equity fund additionally requires a home zip code in a designated social-vulnerability county.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open.',
      summary:
        '"Brilinta (Ticagrelor)" is named on the approved-medication lists of TotalAssist\'s Stroke fund and its CAD health equity fund. A listing is not an open fund — both were closed when we checked, and TotalAssist has no waitlist, so the notification sign-up is what gets you in.',
      covers:
        'When open: $1,000 guaranteed award and up to $1,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed stroke or coronary artery disease diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistStroke, totalAssistCadHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — no applicable fund',
      operator: 'HealthWell Foundation',
      status: 'not-found',
      statusNote:
        'HealthWell\'s published disease-fund list on August 26, 2026 contained no coronary artery disease, acute coronary syndrome, ischemic stroke or antiplatelet fund. Its nearest cardiovascular funds — Chronic Heart Failure – Medicare Access and Cardiomyopathy – Medicare Access — are different diagnoses and were both closed.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare beneficiaries for the diseases it covers. It covers no diagnosis that would apply to Brilinta, so no Medicare rule is engaged.',
      summary:
        'An honest negative worth stating explicitly: unlike the diabetes, cholesterol and lung medications on this site, Brilinta has no HealthWell fund to wait for. Checking the disease-fund list occasionally is still worthwhile, because HealthWell opens new funds as well as reopening old ones.',
      eligibility: [],
      howToApply: 'Not applicable today. The disease-funds page lists every fund HealthWell runs and its status.',
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellFunds, SRC.healthWellFunds],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained no coronary artery disease, acute coronary syndrome or stroke program.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Brilinta.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund and whether it is open.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable picture for Brilinta is thinner than for most medications on this site, and it is better to know that than to hunt. TotalAssist lists Brilinta on two funds — Stroke and CAD health equity — and both were closed to new applicants on August 26, 2026, each with a $1,000 guaranteed and $1,500 maximum award. HealthWell runs no coronary artery disease, acute coronary syndrome or stroke fund at all, and neither does Good Days. With no manufacturer program either, the routes that actually reduce what you pay for this medication are generic ticagrelor, Medicare Extra Help, a formulary exception, and a plan comparison in the fall. Set a TotalAssist alert so you hear if a fund reopens, but do not wait on it.',
  extraHelpNote:
    'Extra Help carries more weight for Brilinta than for medications with a manufacturer program behind them, because there is no AZ&Me route here to weigh it against. There is no conflict to manage and nothing to choose between: if your income and resources are limited, apply. With full Extra Help a covered brand-name drug costs about $12.65 in 2026, and a generic costs less still.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Brilinta on Medicare in August 2026, the first step is to rule out the route people expect to exist. AstraZeneca has no program for this medication, so the realistic order is: the generic, then Extra Help, then a plan-level fix.',
      bullets: [
        'Ask your prescriber and plan about generic ticagrelor — 35 labelled products exist, and this is the saving with no application and no waiting.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Stroke or CAD diagnosis → set alerts on the two TotalAssist funds (both closed when checked).',
        'Cost still unmanageable → ask about a formulary exception, and compare Part D plans in the fall.',
        'Commercial insurance instead of Medicare → the Brilinta savings card, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'There is no manufacturer application to check for Brilinta. What can change is fund status, and both applicable funds were closed.',
      bullets: [
        'AZ&Me: the included-medications page is the authoritative list — check whether Brilinta has been added since this page was verified.',
        'TotalAssist: the Stroke and CAD health equity fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: worth re-checking the disease-funds list occasionally, since HealthWell opens new funds as well as reopening closed ones.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Only two things here have eligibility rules that could apply to you, and one of them is not a program at all:',
      bullets: [
        'TotalAssist (when open): government insurance covering Brilinta; income at or below 500% FPL adjusted for your regional cost-of-living index; a stroke or CAD diagnosis in treatment. The health-equity fund also requires a qualifying home zip code.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'Generic ticagrelor: no eligibility rules — it is a prescribing and formulary question, which is what makes it the first thing to ask about.',
        'AZ&Me: not applicable, because Brilinta is not a medication on the program.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your diagnosis and its date — acute coronary syndrome, prior heart attack, coronary artery disease, stroke or TIA. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Brilinta strength (60 mg or 90 mg) and your prescriber\'s name, office and phone.',
        'Household size and annual household income, plus proof.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Generic switch: nothing to apply for — your prescriber writes it, or the pharmacy substitutes where state law allows. Ask first whether the generic is appropriate for you.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; Patient Advocate Foundation verifies the diagnosis with your provider.',
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
        'Ask specifically about generic ticagrelor. It is the same medicine at a generic tier, and it is on the same TotalAssist fund lists as the brand.',
        'Ask your cardiologist whether a different antiplatelet suits your situation — clopidogrel and prasugrel are also P2Y12 inhibitors, and this is a clinical decision, not a cost one, so it needs their judgement.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Sign up for TotalAssist alerts on the Stroke and CAD funds.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Brilinta strength — 60 mg or 90 mg', note: 'the dose usually steps down after the first year following a heart attack' },
    { item: 'Date of your heart attack, stent, stroke or CAD diagnosis', note: 'TotalAssist needs the exact date if it was within the past 6 months' },
  ],
  ifUnavailable: [
    {
      text: 'Because AstraZeneca has no assistance program for Brilinta, the first question is not an application — ask your prescriber and your plan about generic ticagrelor, which DailyMed lists under 35 separate labels.',
    },
    ...standardAlternatives('Brilinta'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Brilinta?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Brilinta, usually on a brand tier, while generic ticagrelor typically sits on a much lower generic tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Brilinta patient assistance program for people on Medicare?',
      answer:
        'No. Brilinta is not on the AZ&Me Prescription Savings Program medication list — we read that list on August 26, 2026 — and it is not offered through AstraZeneca Direct either. This surprises people because AZ&Me does have a Medicare pathway, and because brilinta.com still names AZ&Me in its trademark footer; but the program\'s first requirement is being treated with a medication it actually carries. For Brilinta the routes are generic ticagrelor, Extra Help, and the charitable funds if they reopen.',
    },
    {
      question: 'Is Brilinta the same kind of blood thinner as Eliquis or Xarelto?',
      answer:
        'No, and the difference matters when you are looking for help paying for it. Eliquis and Xarelto are anticoagulants — they slow the clotting proteins in blood, and are used for atrial fibrillation and for clots in the legs and lungs. Brilinta is an antiplatelet: the label calls it "a P2Y12 platelet inhibitor", and it stops platelets clumping in the arteries after a heart attack, a stent or an ischemic stroke. They are prescribed for different problems, and the assistance programs and charity funds that cover them are different too.',
    },
    {
      question: 'Is there a charitable grant for Brilinta right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Brilinta on its Stroke fund and its CAD health equity fund and both were closed, each with a $1,000 guaranteed and $1,500 maximum award. HealthWell runs no coronary artery disease, acute coronary syndrome or stroke fund at all, and Good Days has none either. Set a TotalAssist alert, but plan around the generic rather than waiting for a fund.',
    },
    {
      question: 'Is there a generic for Brilinta?',
      answer:
        'Yes, and it is widely available: DailyMed lists 35 labelled ticagrelor products, of which AstraZeneca\'s Brilinta is one. TotalAssist lists generic ticagrelor on the same funds as the brand. Since there is no manufacturer assistance program for this medication, asking your prescriber and plan about the generic is usually the single largest saving available.',
    },
    {
      question: 'Is Brilinta part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price data file has no Brilinta or ticagrelor row for initial price applicability year 2026, 2027 or 2028 — which is unsurprising for a medicine that already has generic competition, since the program selects drugs without it. Your cost is set by your plan\'s tier and cost-sharing. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['eliquis', 'xarelto', 'vyndamax'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Brilinta' },
  ],
  sources: [
    label,
    dailymedTicagrelor,
    azmeMedications,
    azmeUpdates,
    azmeEligibility,
    azDirect,
    brilintaSite,
    totalAssistStroke,
    totalAssistCadHe,
    SRC.totalAssistNotify,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsSelectedDrugFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup). A literal, never the shared
  // CHECKED constant. Re-verify the AZ&Me medication list first — this record's
  // headline finding is an absence, and absences change when a list changes.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Brilinta Assistance',
    status: 'coming-soon',
    description:
      'Why AZ&Me does not cover Brilinta, how an antiplatelet differs from an anticoagulant, and what generic ticagrelor changes.',
  },
  description_meta:
    'How to lower the cost of Brilinta (ticagrelor) on Medicare: why AZ&Me does not cover it, generic ticagrelor, stroke and CAD fund status, and Medicare Extra Help — verified August 2026.',
};
