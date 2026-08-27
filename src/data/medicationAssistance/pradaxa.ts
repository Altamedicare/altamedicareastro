// ---------------------------------------------------------------------------
// Pradaxa (dabigatran etexilate) — Boehringer Ingelheim. Independently
// researched 2026-08-26. Batch 8 — a NEW slug.
//
// Pradaxa completes the anticoagulant set on this site alongside Eliquis and
// Xarelto, and the completion is the point. Eliquis and Xarelto were BOTH
// selected in Medicare's first negotiation cycle and have had negotiated prices
// in effect since January 1, 2026. Pradaxa was not selected — and it did not need
// to be, because dabigatran went generic: DailyMed lists 23 labelled dabigatran
// etexilate products across 19 distinct labelers, and the federal TrumpRx site
// prices generic dabigatran at $29.05.
//
// So the three direct oral anticoagulants a Medicare beneficiary is likely to be
// prescribed now reach affordability by two completely different mechanisms —
// negotiation for two of them, generic competition for the third. A reader who
// has been switched between them, which happens often, needs exactly this
// comparison and will not find it on a page about any one drug alone.
//
// Boehringer Ingelheim blocks automated access, as recorded for Spiriva, Ofev and
// Stiolto. The BI Cares Foundation's own therapy list names "Pradaxa® Capsules",
// but its terms could not be read, so the manufacturer card is `verify`. Unlike
// Stiolto, no PRADAXA savings-card terms PDF was served at the equivalent path —
// that request returned 404.
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
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Pradaxa prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ba74e3cd-b06f-4145-b284-5fd6b84ff3c9',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'PRADAXA (dabigatran etexilate mesylate) capsule; Boehringer Ingelheim Pharmaceuticals Inc. A separate PRADAXA (dabigatran etexilate) pellet formulation is also labelled',
};
const dailymedDabigatran = {
  title: 'DailyMed label index — dabigatran etexilate',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=dabigatran+etexilate',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '23 labelled dabigatran etexilate products across 19 distinct labelers — Boehringer Ingelheim\'s PRADAXA plus generic dabigatran etexilate capsules from Alembic, Apotex, Aurobindo, Dr. Reddy\'s, Mylan and others',
};
const biPortal = {
  title: 'Boehringer Cares Patient Assistance Portal',
  url: 'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
  publisher: 'Boehringer Ingelheim',
  checked: CHECKED,
  supports:
    'the current official location of the Boehringer Cares Patient Assistance Program. NOTE: this page returned an Incapsula block page to every automated request on the checked date, so its terms could not be read here. pradaxa.com returned the same block page, and bicares.com served a parked placeholder',
};
const phrmaPpa = {
  title: 'Boehringer Ingelheim Cares Foundation, Inc. — therapies offered',
  url: 'https://www.helpingpatients.org/company/boehringer_ingelheim_pharmaceuticals_inc',
  publisher: 'Partnership for Prescription Assistance (PhRMA)',
  checked: CHECKED,
  supports:
    'program information supplied by the foundation itself, listing "Pradaxa® Capsules" among the therapies offered alongside Jardiance, Ofev, Spiriva HandiHaler, Spiriva Respimat, Stiolto Respimat and Tradjenta, and describing free medications for patients meeting program criteria. The directory states "Program Database last updated on September 15, 2025"',
};
const biDocs = {
  title: 'Boehringer Ingelheim document host (savings card terms)',
  url: 'https://docs.boehringer-ingelheim.com/',
  publisher: 'Boehringer Ingelheim Pharmaceuticals',
  checked: CHECKED,
  supports:
    'the one Boehringer Ingelheim host that served content to automated access on the checked date. A STIOLTO RESPIMAT savings-card terms PDF is available there, but a request for the equivalent PRADAXA savings-card terms document returned HTTP 404 — so no Pradaxa savings-card terms could be read at any Boehringer Ingelheim source',
};
const trumpRx = {
  title: 'TrumpRx — dabigatran etexilate mesylate listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'generic "Dabigatran Etexilate Mesylate" listed at a cash price of $29.05. Brand Pradaxa is not listed on the site',
};
const totalAssistStroke = {
  title: 'TotalAssist — Stroke fund',
  url: 'https://totalassist.org/funds/stroke/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Pradaxa (Dabigatran)" on the approved-medication list, alongside Eliquis, Xarelto, Savaysa and warfarin; $1,000 guaranteed / $1,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — no atrial fibrillation, stroke, deep vein thrombosis, pulmonary embolism or anticoagulant fund of any kind. The nearest cardiovascular entries are Chronic Heart Failure – Medicare Access and Cardiomyopathy – Medicare Access, both closed and both a different diagnosis',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no atrial fibrillation, stroke or blood-clot program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Pradaxa or dabigatran row for initial price applicability year 2026, 2027 or 2028. Two other direct oral anticoagulants ARE on the IPAY 2026 list with negotiated prices already in effect: ELIQUIS and XARELTO',
};

export const PRADAXA: MedicationAssistanceRecord = {
  slug: 'pradaxa',
  brandName: 'Pradaxa',
  genericName: 'dabigatran etexilate',
  manufacturer: 'Boehringer Ingelheim',
  // `blood-clots` and `heart` — the same pair the Eliquis and Xarelto records
  // carry. The site's `blood-clots` key is labelled "Blood clots / AFib", which
  // is exactly what an oral anticoagulant treats, and TotalAssist lists Pradaxa
  // on the Stroke fund, which the `heart` key reaches.
  conditions: ['blood-clots', 'heart'],
  // 'anticoagulant' — a direct thrombin inhibitor that slows the clotting
  // proteins in blood, which is what the existing key describes. Not
  // 'antiplatelet': that key exists for Brilinta, and the distinction between
  // the two kinds of blood thinner is one this site is careful about.
  drugClass: ['anticoagulant'],
  description:
    'Pradaxa is a twice-daily anticoagulant — a blood thinner that slows the clotting proteins in blood, used for atrial fibrillation and for clots in the legs and lungs. It is one of three direct oral anticoagulants a Medicare beneficiary is commonly prescribed, and it is the one that became affordable by a different route from the other two: Eliquis and Xarelto got Medicare-negotiated prices, and Pradaxa got generics.',
  usedFor: [
    'Reducing the risk of stroke and systemic embolism in people with non-valvular atrial fibrillation',
    'Treating deep vein thrombosis and pulmonary embolism, and reducing the risk of their recurrence',
    'Confirm which of these applies to your prescription with your prescriber — the label also covers prophylaxis after certain surgery',
  ],
  whyCostly:
    'Brand Pradaxa sits on a brand tier in most Part D plans, and anticoagulation often continues indefinitely, so cost-sharing repeats month after month. But the arithmetic here has changed completely: dabigatran is now thoroughly generic, with 23 labelled products from 19 different labelers on DailyMed, and the federal TrumpRx site prices generic dabigatran at $29.05. For most Medicare beneficiaries the generic, not a program, is the answer — and this page says so rather than padding a manufacturer section that could not be verified anyway.',
  medicareContext:
    'Pradaxa is a capsule you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually with brand Pradaxa on a brand tier and generic dabigatran on a much lower generic tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Pradaxa or dabigatran row for 2026, 2027 or 2028 — unsurprising for a medicine that already has generic competition, since the program selects drugs without it. Two other direct oral anticoagulants WERE selected in the first cycle and have had negotiated prices in effect since January 1, 2026: Eliquis and Xarelto. So all three routinely-prescribed DOACs now have a Medicare cost story, reached two different ways. Part D out-of-pocket costs are capped at $2,100 in 2026, and Extra Help lowers cost-sharing for people with limited income and resources.',
  quickAnswer: {
    verdict:
      'Probably from the manufacturer, but we could not confirm the terms — and it matters less than usual, because generic dabigatran is widely available at a fraction of the brand price. Boehringer Ingelheim\'s own foundation lists Pradaxa among the therapies it offers, but BI blocks automated access to its program pages. The only charitable fund that lists Pradaxa was closed.',
    points: [
      'Generic dabigatran: 23 labelled products across 19 labelers, and $29.05 cash on the federal TrumpRx site. This is the route with no application and no waiting, and it is usually the largest saving available here.',
      'Boehringer Cares Patient Assistance Program: the BI Cares Foundation\'s own therapy list names "Pradaxa® Capsules". Current eligibility terms could NOT be read — every BI patient-support page returned a block page on August 26, 2026. Call rather than assume.',
      'Pradaxa savings card: no terms document was served at any Boehringer Ingelheim source; the equivalent path that serves Stiolto\'s terms returned a 404 for Pradaxa. Nothing is reproduced here.',
      'Not a Medicare-negotiated drug — while Eliquis and Xarelto, the other two direct oral anticoagulants, have had negotiated prices in effect since January 1, 2026.',
      'Charitable grants: TotalAssist\'s Stroke fund lists "Pradaxa (Dabigatran)" and was closed ($1,000 guaranteed / $1,500 maximum). HealthWell runs no atrial fibrillation, stroke or clot fund at all, and neither does Good Days.',
      'Medicare: Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65, and a generic costs less still.',
    ],
  },
  programs: [
    {
      id: 'generic-dabigatran',
      kind: 'manufacturer-direct',
      name: 'Generic dabigatran etexilate (including the TrumpRx cash price)',
      operator: 'Multiple manufacturers; cash price listed by the federal TrumpRx site',
      status: 'open',
      statusNote:
        'Widely available on August 26, 2026: DailyMed lists 23 labelled dabigatran etexilate products across 19 distinct labelers. The federal TrumpRx site prices generic dabigatran etexilate mesylate at $29.05 and carries no listing for brand Pradaxa.',
      medicare: 'eligible',
      medicareNote:
        'A generic is not an assistance program and has no Medicare rule to satisfy — it is the same medicine at a generic tier, available to anyone with a prescription. For a Medicare beneficiary this is almost always a larger saving than any program on this page would deliver, and unlike a cash purchase it counts toward your Part D out-of-pocket cap when filled through your plan. TotalAssist also lists dabigatran generically on the same fund as the brand, so switching costs you nothing in fund eligibility.',
      summary:
        'The answer for most people reading this page. Nineteen labelers make generic dabigatran, there is nothing to apply for, and the price gap against a brand tier is large. Ask your prescriber and plan about it before spending time on anything else here.',
      covers: 'The same medicine at a generic tier, or at a published cash price of $29.05 outside insurance.',
      eligibility: [
        'A prescription written for or substitutable to generic dabigatran etexilate',
        'No income test, no application and no waiting',
      ],
      howToApply:
        'Ask your prescriber to write for generic dabigatran etexilate, or ask your pharmacy whether it can substitute where state law allows. Ask your plan which labeler\'s product sits on its preferred tier — with 19 on the market, plans differ.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx dabigatran listing',
      sources: [dailymedDabigatran, trumpRx],
    },
    {
      id: 'bi-cares',
      kind: 'manufacturer-pap',
      name: 'Boehringer Cares Patient Assistance Program',
      operator: 'Boehringer Ingelheim Cares Foundation, Inc.',
      status: 'verify',
      statusNote:
        'Pradaxa is named on the foundation\'s own published therapy list, but the program\'s current terms could not be confirmed on August 26, 2026: boehringer-ingelheim.com and pradaxa.com both returned Incapsula block pages to automated access, and bicares.com served a parked placeholder. The therapy list comes from the PhRMA-run directory the foundation supplies, whose database was last updated September 15, 2025.',
      medicare: 'unknown',
      medicareNote:
        'The program\'s Medicare rule could not be read at the source, and this project does not borrow one from a sibling drug or another manufacturer. What is on record is that the foundation describes itself as helping patients who meet its criteria obtain medications free of charge. Call and ask three things: whether Medicare Part D enrollees may apply, whether Extra Help enrolment disqualifies you, and what the current income limit is. Before you do, price the generic — if generic dabigatran is on your plan\'s generic tier, the call may be unnecessary.',
      summary:
        'Boehringer Ingelheim runs a foundation that supplies its medicines free to patients meeting its criteria, and Pradaxa is on its list. What the criteria currently are is the part we could not verify. Given how inexpensive the generic is, this program matters less for Pradaxa than it does for Boehringer\'s brand-only medicines.',
      eligibility: [
        'Pradaxa is on the foundation\'s published therapy list',
        'Current income limits and insurance rules: UNVERIFIED — BI\'s program pages could not be read on the checked date',
        'Confirm directly before applying, and before ruling yourself out',
      ],
      howToApply:
        'Start at the Boehringer Cares Patient Assistance Portal cited here, or call Boehringer Ingelheim to be routed to the foundation. Because the online terms could not be verified, a phone call is the reliable route — but price the generic first.',
      applyUrl:
        'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
      applyLabel: 'Boehringer Cares Patient Assistance Portal',
      sources: [biPortal, phrmaPpa],
    },
    {
      id: 'pradaxa-savings',
      kind: 'manufacturer-savings',
      name: 'Pradaxa savings card — terms not available',
      operator: 'Boehringer Ingelheim',
      status: 'verify',
      statusNote:
        'No Pradaxa savings-card terms could be read at any Boehringer Ingelheim source on August 26, 2026. pradaxa.com returned an Incapsula block page, and a request to the document host that does serve Stiolto\'s savings-card terms returned HTTP 404 for the Pradaxa equivalent. No dollar amount, maximum or expiry is published here as a result.',
      medicare: 'excluded',
      medicareNote:
        'Manufacturer copay cards are closed to Medicare across the board — federal anti-kickback rules prevent their use with Part D, Medicare Advantage drug coverage, Medicaid, TRICARE or VA benefits. That general rule is why this card is recorded as excluded even though its specific terms could not be read. If you have Medicare, this is not your route regardless of what the current terms say.',
      summary:
        'A commercial copay offer whose terms we could not obtain. For a Medicare reader this changes nothing — the card would be closed to you anyway — and the generic is the route that matters.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
        'Current terms unconfirmed — no Boehringer Ingelheim source served them',
      ],
      howToApply:
        'Commercially insured patients should ask their pharmacist or Boehringer Ingelheim for the current offer. Medicare beneficiaries should ask about generic dabigatran and apply for Extra Help instead.',
      applyUrl: 'https://docs.boehringer-ingelheim.com/',
      applyLabel: 'Boehringer Ingelheim document host',
      sources: [biDocs, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Stroke fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Stroke',
      status: 'closed',
      statusNote:
        'Closed to new applicants on August 26, 2026, with a $1,000 guaranteed and $1,500 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in.',
      medicare: 'eligible',
      medicareNote:
        'This fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when it is open.',
      summary:
        '"Pradaxa (Dabigatran)" is named on the Stroke fund\'s approved-medication list, alongside Eliquis, Xarelto, Savaysa and warfarin — so the whole anticoagulant class shares this one fund, and switching between them would not cost you eligibility. There is no atrial fibrillation fund and no clot fund; Stroke is the only applicable one.',
      covers:
        'When open: $1,000 guaranteed award and up to $1,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed stroke diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistStroke, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — no applicable fund',
      operator: 'HealthWell Foundation',
      status: 'not-found',
      statusNote:
        'HealthWell\'s published disease-fund list on August 26, 2026 contained no atrial fibrillation, stroke, deep vein thrombosis, pulmonary embolism or anticoagulant fund. Its nearest cardiovascular funds — Chronic Heart Failure – Medicare Access and Cardiomyopathy – Medicare Access — are different diagnoses and were both closed.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare beneficiaries for the diseases it covers. It covers no diagnosis that would apply to Pradaxa, so no Medicare rule is engaged.',
      summary:
        'An honest negative worth stating explicitly: unlike the diabetes, cholesterol and lung medications on this site, Pradaxa has no HealthWell fund to wait for. Checking the disease-fund list occasionally is still worthwhile, because HealthWell opens new funds as well as reopening old ones.',
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
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none was atrial fibrillation, stroke or any blood-clot condition.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Pradaxa.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable picture for Pradaxa is thin, and it is better to know that than to hunt. TotalAssist lists "Pradaxa (Dabigatran)" on its Stroke fund — the only applicable fund on any of the three foundations — and it was closed on August 26, 2026, with a $1,000 guaranteed and $1,500 maximum award. HealthWell runs no atrial fibrillation, stroke or clot fund at all, and neither does Good Days. That matters much less here than it would for a brand-only medicine, because the route that actually reduces what you pay for this medication needs no fund at all: generic dabigatran, from nineteen different labelers, priced at $29.05 on the federal TrumpRx site. Set a TotalAssist alert on the Stroke fund, but plan around the generic rather than waiting.',
  extraHelpNote:
    'Extra Help does the ordinary thing here. With the Boehringer Ingelheim program unverified, it is the income-based route whose rules you can actually read and act on today. With full Extra Help a covered brand-name drug costs about $12.65 in 2026, and a generic costs less still — which for dabigatran is a small saving stacked onto an already small one. One question worth asking the Boehringer Cares Foundation if you do call: whether Extra Help enrolment affects eligibility, since manufacturers differ and BI\'s answer is not published.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Pradaxa on Medicare in August 2026, the honest order puts the manufacturer second because the generic usually settles it:',
      bullets: [
        'Ask your prescriber and plan about generic dabigatran etexilate — 23 labelled products from 19 labelers. This is the step that solves the problem for most people.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Call the Boehringer Cares Foundation if the generic does not resolve it. Pradaxa is on its therapy list, but its terms are not readable online.',
        'Stroke diagnosis → set an alert on the TotalAssist Stroke fund (closed when checked).',
        'Ask your cardiologist about Eliquis and Xarelto if cost remains a problem — both have Medicare-negotiated prices in effect, and this is a clinical decision with a real cost dimension.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One manufacturer program whose status is unverified, and one charitable fund that was closed.',
      bullets: [
        'Boehringer Cares: the patient assistance portal is the official location; it did not serve its content to us, so call to confirm the program is accepting applications.',
        'TotalAssist: the Stroke fund page shows "Open" or "Closed" and the current award amounts.',
        'HealthWell: worth re-checking the disease-funds list occasionally, since HealthWell opens new funds as well as reopening old ones — it has none for anticoagulation today.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The route with no eligibility rules is the one to try first:',
      bullets: [
        'Generic dabigatran: no eligibility rules — a prescribing and formulary question, which is what makes it the first thing to ask about.',
        'Boehringer Cares: UNVERIFIED. Ask whether Medicare Part D enrollees may apply, whether Extra Help disqualifies you, and what the current income limit is.',
        'TotalAssist (when open): government insurance covering Pradaxa; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed stroke diagnosis in treatment.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your diagnosis and its date — atrial fibrillation, deep vein thrombosis, pulmonary embolism or stroke. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Pradaxa strength — 75 mg, 110 mg or 150 mg — and whether you take capsules or the pellet formulation.',
        'Household size and annual household income, plus proof.',
        'Your prescriber\'s name, office address and phone.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Generic switch: nothing to apply for — your prescriber writes it, or the pharmacy substitutes where state law allows. Ask first whether the generic is appropriate for you.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'Boehringer Cares: the form and signature requirements could not be verified online. Ask when you call whether your prescriber must co-sign.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'Boehringer Cares: unverified. Ask for the expected timeframe when you call, and what happens to your prescription while it is pending.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Never stop or ration an anticoagulant to save money — but there are several legitimate ways to lower the cost:',
      bullets: [
        'Ask specifically about generic dabigatran etexilate. It is the same medicine at a generic tier, it is on the same TotalAssist fund list as the brand, and the federal cash price is $29.05.',
        'Ask your cardiologist whether Eliquis or Xarelto suits your situation — both have Medicare-negotiated prices in effect since January 1, 2026. This is a clinical decision, not a cost one, so it needs their judgement.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Ask your prescriber\'s office about a formulary exception if your plan places brand Pradaxa on a high tier and will not cover the generic.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Pradaxa strength and form', note: '75 mg, 110 mg or 150 mg capsules — a separate pellet formulation is also labelled' },
    { item: 'Your diagnosis — AFib, DVT, PE or stroke', note: 'TotalAssist\'s only applicable fund is its Stroke fund; there is no AFib or clot fund on any of the three foundations' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan about generic dabigatran etexilate, which DailyMed lists under 23 separate labels from 19 labelers and the federal TrumpRx site prices at $29.05. For most people this is the whole answer.',
      href: 'https://trumprx.gov/browse',
      label: 'TrumpRx',
    },
    {
      text: 'Ask your cardiologist whether Eliquis or Xarelto would suit you — both have Medicare-negotiated prices in effect, while Pradaxa does not. A clinical decision, but one with a real cost dimension.',
    },
    ...standardAlternatives('Pradaxa'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Pradaxa?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Pradaxa, usually with brand Pradaxa on a brand tier and generic dabigatran on a much lower generic tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65, and a generic costs less still.',
    },
    {
      question: 'Is there a generic for Pradaxa?',
      answer:
        'Yes, and it is thoroughly established: DailyMed lists 23 labelled dabigatran etexilate products across 19 distinct labelers, including Alembic, Apotex, Aurobindo, Dr. Reddy\'s and Mylan. The federal TrumpRx site prices generic dabigatran etexilate mesylate at $29.05 and carries no listing for brand Pradaxa. TotalAssist lists dabigatran on the same fund as the brand. Given that the manufacturer program\'s terms could not be verified, asking your prescriber and plan about the generic is by far the most reliable saving available.',
    },
    {
      question: 'Is Pradaxa part of Medicare drug price negotiation?',
      answer:
        'No — and the reason is instructive. CMS\'s selected-drug file has no Pradaxa or dabigatran row for 2026, 2027 or 2028, because the negotiation program selects drugs that do not yet face generic competition, and dabigatran does. The other two direct oral anticoagulants took the other path: Eliquis and Xarelto were both selected in the first cycle and have had negotiated prices in effect since January 1, 2026. All three are now cheaper on Medicare than they were, by two different mechanisms.',
    },
    {
      question: 'Is there a Pradaxa patient assistance program for people on Medicare?',
      answer:
        'Boehringer Ingelheim\'s foundation lists "Pradaxa® Capsules" among the therapies it offers, so a program almost certainly covers it — but we could not confirm its current terms. On August 26, 2026 every Boehringer Ingelheim patient-support page we tried returned a block page to automated access, and bicares.com served a placeholder. Rather than repeat figures from a sibling drug or a third-party site, this page records the gap. Before you make that call, price the generic: if generic dabigatran sits on your plan\'s generic tier, the program may be unnecessary.',
    },
    {
      question: 'Is there a charitable grant for Pradaxa right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Pradaxa on its Stroke fund and that fund was closed, with a $1,000 guaranteed and $1,500 maximum award. HealthWell runs no atrial fibrillation, stroke, deep vein thrombosis, pulmonary embolism or anticoagulant fund of any kind, and Good Days has none either. Set a TotalAssist alert, but plan around the generic rather than waiting for a fund.',
    },
    {
      question: 'How does Pradaxa differ from Brilinta, which is also called a blood thinner?',
      answer:
        'They are different kinds of medicine for different problems. Pradaxa is an anticoagulant: it slows the clotting proteins in blood, and it is used for atrial fibrillation and for clots in the legs and lungs. Brilinta is an antiplatelet: it stops platelets clumping in the arteries after a heart attack, a stent or an artery-blocking stroke. The phrase "blood thinner" covers both, but they are not interchangeable, and the assistance programs and charity funds that cover them are different too. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['eliquis', 'xarelto', 'savaysa', 'brilinta'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Pradaxa' },
  ],
  sources: [
    label,
    dailymedDabigatran,
    biPortal,
    phrmaPpa,
    biDocs,
    trumpRx,
    totalAssistStroke,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.oigCoupons,
  ],
  // Per-record verification date. The BI cards stay `verify` until Boehringer
  // Ingelheim serves its patient-support pages to automated access. Re-verify the
  // generic count and the TrumpRx price too — they are what this page leans on.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Pradaxa Assistance',
    status: 'coming-soon',
    description:
      'Why generic dabigatran at $29.05 usually settles the Pradaxa cost question, what the Boehringer Cares Foundation does and does not publish, and why Eliquis and Xarelto got negotiated prices while Pradaxa got generics.',
  },
  description_meta:
    'How to lower the cost of Pradaxa (dabigatran etexilate) on Medicare: generic dabigatran from 19 labelers at $29.05, what the Boehringer Cares Foundation covers, why the stroke fund is the only applicable grant, and Medicare Extra Help — verified August 2026.',
};
