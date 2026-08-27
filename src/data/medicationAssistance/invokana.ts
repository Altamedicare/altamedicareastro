// ---------------------------------------------------------------------------
// Invokana (canagliflozin) — Janssen Pharmaceuticals, part of Johnson & Johnson.
// Independently researched 2026-08-26. Batch 8 — a NEW slug.
//
// Invokana completes the SGLT2 set on this site alongside Farxiga and Jardiance,
// and the comparison is the point rather than a side note. Farxiga and Jardiance
// are BOTH Medicare-negotiated drugs, selected in the first cycle with prices in
// effect since January 1, 2026. Invokana is not on any CMS list. Three medicines
// in the same class, and the Medicare arithmetic differs sharply between them.
//
// A second and unusual finding: there is still NO true generic canagliflozin.
// DailyMed returns five canagliflozin records across three labelers, but the only
// brands are INVOKANA and INVOKAMET — the rest are repackagers of the brand, not
// independent generics. That is a materially different position from Januvia
// (generic sitagliptin exists) and worth stating plainly, because "SGLT2s have
// generics now" is a reasonable thing to have heard and a wrong thing to act on.
//
// Research gap carried honestly: the Johnson & Johnson Patient Assistance
// Foundation covers Invokana — J&J's own Invokana site says so — but its income
// limits could not be read at the source. patientassistanceinfo.com redirects to a
// PDF whose text is font-encoded, the enrolment form is a fillable PDF with the
// same problem, and portal.jnjwithme.com renders client-side. The income figures
// are therefore recorded as unverified rather than lifted from a third-party site.
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
  title: 'Invokana prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b9057d3b-b104-4f09-8a61-c61ef9d4a3f3',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'INVOKANA (canagliflozin) tablet, film coated; Janssen Pharmaceuticals, Inc.',
};
const dailymedCana = {
  title: 'DailyMed label index — canagliflozin',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=canagliflozin',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'five labelled canagliflozin records across three labelers, but only two brands — INVOKANA and the combination INVOKAMET. The additional records are repackager listings of the brand (Cardinal Health, A-S Medication Solutions), not independent generic products. No generic canagliflozin is labelled',
};
const invokanaSavings = {
  title: 'INVOKANA savings and cost support',
  url: 'https://www.invokana.com/savings-and-cost-support/',
  publisher: 'Johnson & Johnson',
  checked: CHECKED,
  supports:
    'the J&J withMe Savings Program at "$0 per month" for eligible patients, with the exclusion verbatim — "Not valid for patients using Medicare, Medicaid, or other government-funded programs to pay for their medications"; enrolment at Account.JNJwithMe.com and 866-228-3546; and the Johnson & Johnson Patient Assistance Program described as providing medicine "at no cost for up to one year" to people who are "uninsured or have commercial, employer-sponsored, or government coverage that does not fully meet your needs". General support 877-468-6526',
};
const jjPap = {
  title: 'Johnson & Johnson Patient Assistance Foundation — enrollment',
  url: 'https://www.portal.jnjwithme.com/patient-assistance',
  publisher: 'Johnson & Johnson Patient Assistance Foundation, Inc.',
  checked: CHECKED,
  supports:
    'the official enrollment route for the foundation, which covers Invokana. NOTE: this page renders client-side and served no eligibility content to automated access on the checked date; patientassistanceinfo.com redirects to a Quick Reference Guide PDF whose text is font-encoded and could not be read, and the enrollment form has the same problem. The foundation\'s income limits could not be established at the source',
};
const jjQuickRef = {
  title: 'J&J Patient Assistance Quick Reference Guide',
  url: 'https://asset.jnjwithme.com/document/JnJ_Patient_Assistance_Quick_Reference_Guide_Other_Medications.pdf',
  publisher: 'Johnson & Johnson Patient Assistance Foundation, Inc.',
  checked: CHECKED,
  supports:
    'the foundation\'s published quick-reference guide, which the program links to from patientassistanceinfo.com. NOTE: the document\'s text layer is font-encoded and could not be read by automated extraction; the only readable content was its link list, which includes ssa.gov/medicare/part-d-extra-help — indicating the guide does address Medicare beneficiaries',
};
const trumpRx = {
  title: 'TrumpRx — Invokana listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'Invokana (Johnson & Johnson) listed at a cash price of $225.00',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Invokana (Canagliflozin)", "Invokamet (Canagliflozin/Metformin Hcl)" and "Invokamet Xr" on the approved-medication list; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistT2dHe = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) health equity fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Invokana; $1,500 guaranteed / $2,000 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'the complete fund list — "Type 2 Diabetes" CLOSED; there is no SGLT2-specific fund and no diabetic kidney disease fund',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — a Chronic Kidney Disease program is listed but no diabetes program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Invokana or canagliflozin row for initial price applicability year 2026, 2027 or 2028. Two other SGLT2 inhibitors ARE on the IPAY 2026 list with negotiated prices already in effect: FARXIGA and JARDIANCE',
};

export const INVOKANA: MedicationAssistanceRecord = {
  slug: 'invokana',
  brandName: 'Invokana',
  genericName: 'canagliflozin',
  manufacturer: 'Janssen Pharmaceuticals (Johnson & Johnson)',
  // `diabetes`, `heart` and `kidney` — the same three keys the Farxiga and
  // Jardiance records carry, which is correct for an SGLT2 with cardiovascular
  // and renal indications alongside its glycaemic one. TotalAssist lists
  // Invokana on the Type 2 diabetes funds, which the `diabetes` key matches.
  conditions: ['diabetes', 'heart', 'kidney'],
  drugClass: ['sglt2'],
  description:
    'Invokana is a once-daily SGLT2 inhibitor tablet for type 2 diabetes, in the same class as Farxiga and Jardiance. The class similarity is where most people start and where the useful differences begin: Invokana has no generic, and unlike its two closest competitors it is not a Medicare-negotiated drug — so what you pay for it can differ substantially from what you would pay for the others.',
  usedFor: [
    'Improving blood sugar control in adults with type 2 diabetes, alongside diet and exercise',
    'Reducing cardiovascular and kidney-related risks in adults with type 2 diabetes who meet the label\'s criteria — confirm which indications apply to your prescription with your prescriber',
  ],
  whyCostly:
    'Invokana is a brand-only tablet taken indefinitely, and it sits in an unusual position within its own class. There is no generic canagliflozin: DailyMed\'s canagliflozin records resolve to just two brands, Invokana and the combination Invokamet, with the remaining entries being repackagers of the brand rather than independent generics. And where Farxiga and Jardiance both have Medicare-negotiated prices in effect since January 1, 2026, Invokana has none. Those two facts together are why an SGLT2 prescription can cost very different amounts depending on which one you were written for.',
  medicareContext:
    'Invokana is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually on a brand tier. It is not a Medicare-negotiated drug — CMS\'s selected-drug and Maximum Fair Price file has no Invokana or canagliflozin row for 2026, 2027 or 2028. That is worth checking rather than assuming, because two other SGLT2 inhibitors, Farxiga and Jardiance, were both selected in the first negotiation cycle and have had negotiated prices in effect since January 1, 2026. If cost is the obstacle, the question worth asking your prescriber is whether a negotiated-price SGLT2 would work as well for you — a clinical decision, but one where the Medicare arithmetic genuinely differs. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year.',
  quickAnswer: {
    verdict:
      'Probably — the Johnson & Johnson Patient Assistance Foundation covers Invokana and describes itself as serving people with "government coverage that does not fully meet your needs", which is a Medicare-shaped description. But J&J does not publish its income limits anywhere we could read them, so this page records that gap rather than filling it. Both diabetes charitable funds were closed.',
    points: [
      'Johnson & Johnson Patient Assistance Foundation: covers Invokana; medicine "at no cost for up to one year" for people who are "uninsured or have commercial, employer-sponsored, or government coverage that does not fully meet your needs". Income limits could NOT be verified at the source.',
      'J&J withMe Savings Program: "$0 per month" — but "Not valid for patients using Medicare, Medicaid, or other government-funded programs to pay for their medications."',
      'NO generic canagliflozin exists. DailyMed resolves to two brands only, Invokana and Invokamet; the other records are repackagers.',
      'Invokana is NOT a Medicare-negotiated drug — while Farxiga and Jardiance, both SGLT2 inhibitors, have had negotiated prices in effect since January 1, 2026.',
      'Federal cash price: TrumpRx lists Invokana at $225.00.',
      'Charitable grants: TotalAssist\'s Type 2 diabetes funds list Invokana, Invokamet and Invokamet XR — both closed ($1,500 guaranteed / $2,000 maximum). HealthWell\'s Type 2 Diabetes fund was closed. Good Days has a Chronic Kidney Disease program but no diabetes program.',
    ],
  },
  programs: [
    {
      id: 'jj-pap',
      kind: 'manufacturer-pap',
      name: 'Johnson & Johnson Patient Assistance Foundation',
      operator: 'Johnson & Johnson Patient Assistance Foundation, Inc.',
      status: 'verify',
      statusNote:
        'The foundation covers Invokana and was accepting applications on August 26, 2026 — J&J\'s own Invokana site describes it and links to it. What could not be established is who qualifies: patientassistanceinfo.com redirects to a Quick Reference Guide PDF whose text layer is font-encoded, the enrolment form has the same problem, and the enrolment portal renders client-side. The income limits are therefore recorded as unverified rather than taken from a third-party site.',
      medicare: 'conditional',
      medicareNote:
        'J&J\'s published description is the most useful thing we could confirm, and it is genuinely encouraging for a Medicare reader: the program is for people who are "uninsured or have commercial, employer-sponsored, or government coverage that does not fully meet your needs". Medicare is government coverage, and "does not fully meet your needs" is the kind of wording that admits a Part D beneficiary facing unaffordable cost-sharing — which is a materially more open position than a flat exclusion. The foundation\'s own quick-reference guide links to the Social Security Extra Help page, which indicates it addresses Medicare beneficiaries directly. But the specific rule and the income ceiling are not readable, so call and ask: whether Medicare Part D enrollees may apply, what the income limit is for your household size, and whether Extra Help enrolment affects it.',
      summary:
        'A free-medicine program that covers Invokana for up to a year at a time, with a description that reads as open to Medicare beneficiaries whose coverage leaves them exposed. The eligibility numbers are the part this page could not verify, so treat the phone call as the necessary step rather than an optional one.',
      covers: 'Invokana at no cost for up to one year to approved patients, with annual reapplication.',
      eligibility: [
        'Uninsured, or holding commercial, employer-sponsored or government coverage "that does not fully meet your needs" — J&J\'s own wording',
        'Demonstrated financial hardship',
        'Current income limits: UNVERIFIED — J&J\'s published guide and enrolment form could not be read by automated access on the checked date',
        'Confirm directly before applying, and before ruling yourself out',
      ],
      requirements: [
        'Proof of household income',
        'Your insurance details, including Medicare Part D coverage if you have it',
        'Your prescriber\'s details — the enrolment form has a provider section',
      ],
      howToApply:
        'Enrol through the Johnson & Johnson patient assistance portal, or call 877-468-6526 (Monday–Friday, 8am–8pm ET; multilingual support available). Because the published criteria could not be verified, a phone call is the reliable route for this medication. Patients with Medicare must reapply each calendar year.',
      applyUrl: 'https://www.portal.jnjwithme.com/patient-assistance',
      applyLabel: 'J&J Patient Assistance Foundation',
      phone: '877-468-6526',
      sources: [invokanaSavings, jjPap, jjQuickRef],
    },
    {
      id: 'jj-savings',
      kind: 'manufacturer-savings',
      name: 'J&J withMe Savings Program',
      operator: 'Johnson & Johnson',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026, offering "$0 per month" for eligible patients.',
      medicare: 'excluded',
      medicareNote:
        'J&J states it plainly: the savings program is "Not valid for patients using Medicare, Medicaid, or other government-funded programs to pay for their medications." This is the standard federal position on manufacturer copay support. J&J directs Medicare beneficiaries to the patient assistance foundation instead, which for Invokana is the correct route.',
      summary:
        'A commercial copay offer at $0 a month. Listed so Medicare readers can rule it out immediately — and so anyone approaching 65 understands that a $0 Invokana copay ends when Medicare begins, which is one of the more jarring transitions on this site.',
      covers: 'Part of the commercial copay for Invokana. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not using Medicare, Medicaid or another government-funded program to pay for the medication',
      ],
      howToApply:
        'Commercially insured patients enrol at Account.JNJwithMe.com or by calling 866-228-3546 (Monday–Friday, 8am–8pm ET). Medicare beneficiaries should apply to the patient assistance foundation instead.',
      applyUrl: 'https://www.invokana.com/savings-and-cost-support/',
      applyLabel: 'Invokana savings and cost support',
      phone: '866-228-3546',
      sources: [invokanaSavings, SRC.oigCoupons],
    },
    {
      id: 'trumprx',
      kind: 'manufacturer-direct',
      name: 'Cash price via TrumpRx',
      operator: 'U.S. federal government listing of manufacturer cash prices',
      status: 'open',
      statusNote: 'Invokana listed at $225.00 on August 26, 2026.',
      medicare: 'conditional',
      medicareNote:
        'A cash price is available to anyone, but buying outside your Part D plan means the spending does not count toward your deductible or your $2,100 annual out-of-pocket cap. Worth running the comparison rather than assuming either way: if your plan puts Invokana on a high tier with percentage coinsurance, $225.00 may be competitive; if you are heading for the annual cap because of other medications, staying inside the plan is usually better.',
      summary:
        'A published federal cash price, useful as a benchmark against your plan\'s cost-sharing. Since there is no generic canagliflozin to fall back on, this is the only alternative price for the molecule.',
      covers: 'Invokana at the listed cash price, outside insurance.',
      eligibility: ['Paying cash rather than using prescription insurance for that fill'],
      howToApply: 'Check the current listing and follow the purchase route it gives. Compare against your plan\'s cost-sharing first.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx',
      sources: [trumpRx],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Type 2 diabetes health equity',
      status: 'closed',
      statusNote:
        'Both funds were closed to new applicants on August 26, 2026, each with a $1,500 guaranteed and $2,000 maximum award.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open. Unlike the J&J program, these funds publish their rules plainly, which is a reason to work them in parallel while you wait for J&J to answer.',
      summary:
        '"Invokana (Canagliflozin)" is named on the Type 2 diabetes approved-medication list, along with Invokamet and Invokamet XR — so a move to the combination product would not cost you fund eligibility. Both funds were closed when we checked.',
      covers:
        'When open: $1,500 guaranteed award and up to $2,000 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed type 2 diabetes diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
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
      sources: [totalAssistT2d, totalAssistT2dHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes fund',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes',
      status: 'closed',
      statusNote:
        'Closed on August 26, 2026. HealthWell runs no SGLT2-specific fund and no diabetic kidney disease fund, so there is no narrower fund to fall back on even though Invokana carries kidney indications.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Type 2 Diabetes fund was closed when we checked.',
      summary:
        'One applicable fund, closed. Worth noting for anyone prescribed Invokana primarily for kidney protection: HealthWell has no fund matching that use, so the type 2 diabetes fund is the only route here.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for type 2 diabetes.',
      eligibility: ['A confirmed type 2 diabetes diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
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
      name: 'Good Days — no applicable diabetes fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was diabetes. It does run a Chronic Kidney Disease program, which is a different diagnosis from the one Invokana is usually prescribed under — worth a question to your prescriber if kidney disease is your primary diagnosis, but not a diabetes route.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers. It covers no diabetes diagnosis.',
      summary:
        'An honest negative with one caveat worth raising: Good Days runs a Chronic Kidney Disease program, and Invokana is sometimes prescribed principally for kidney protection. Whether that program would cover your prescription is a question for Good Days, not an assumption this page will make.',
      eligibility: [],
      howToApply: 'Not applicable for a diabetes diagnosis. The diseases-covered page shows every fund Good Days runs, including its Chronic Kidney Disease program.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'TotalAssist lists Invokana, Invokamet and Invokamet XR on its Type 2 diabetes fund and the health-equity version, each paying $1,500 guaranteed up to $2,000, and both were closed on August 26, 2026. HealthWell\'s Type 2 Diabetes fund was closed as well, and it runs no SGLT2 or diabetic kidney disease fund. Good Days has no diabetes program, though it does run a Chronic Kidney Disease program — worth a question if kidney protection is the reason you were prescribed Invokana, but not something to assume. With the charitable side shut and the J&J income limits unverified, the routes you can act on today are the phone call to J&J, the cash-price comparison at $225.00, Extra Help, and the conversation with your prescriber about whether a negotiated-price SGLT2 would serve you as well.',
  extraHelpNote:
    'Extra Help matters more for Invokana than for the SGLT2 inhibitors that have negotiated prices, because there is no negotiated price here to lower the underlying cost. It reduces cost-sharing on every covered drug you take, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026 — which against a brand-tier SGLT2 with no generic is a substantial difference. Whether Extra Help affects a J&J Patient Assistance Foundation application is one of the questions this page could not answer; add it to the list when you call.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Invokana on Medicare in August 2026, one clinical question sits alongside the financial ones:',
      bullets: [
        'Call the J&J Patient Assistance Foundation on 877-468-6526. Its description fits Medicare beneficiaries, but its income limits are not published, so the call is the only way to a current answer.',
        'Limited income and resources → Medicare Extra Help through Social Security, which you can apply for today.',
        'Ask your prescriber whether Farxiga or Jardiance would work for you. Both are SGLT2 inhibitors with Medicare-negotiated prices already in effect; Invokana has none. This is a clinical decision, not a cost one, but the cost difference is real.',
        'Compare the $225.00 TrumpRx cash price against your plan\'s cost-sharing.',
        'Type 2 diabetes → set alerts on the TotalAssist and HealthWell diabetes funds (all closed when checked).',
        'Do not wait for a generic — there is no generic canagliflozin.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer foundation was open but its criteria unverified; the charitable funds were closed.',
      bullets: [
        'J&J Patient Assistance Foundation: covering Invokana and accepting applications; the criteria could not be read, so confirm by phone.',
        'TotalAssist: the Type 2 diabetes fund pages show "Open" or "Closed" and current award amounts.',
        'HealthWell: the disease-funds list shows the Type 2 Diabetes fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Two of these publish their rules; the manufacturer program does not:',
      bullets: [
        'J&J Patient Assistance Foundation: for people who are uninsured or whose commercial, employer-sponsored or government coverage "does not fully meet your needs". Income limits UNVERIFIED — ask for the figure for your household size.',
        'J&J withMe Savings Program: commercial insurance only; Medicare, Medicaid and other government programs excluded by name.',
        'TotalAssist (when open): government insurance covering Invokana; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed type 2 diabetes diagnosis.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified type 2 diabetes diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Household size and annual household income, plus proof.',
        'Your type 2 diabetes diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Invokana strength — 100 mg or 300 mg — and whether you take Invokana or the combination Invokamet.',
        'Whether Invokana was prescribed principally for blood sugar, for cardiovascular risk or for kidney protection; it affects which fund fits.',
        'Your prescriber\'s name, office address and phone.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'J&J Patient Assistance Foundation: enrol through the portal or call 877-468-6526; the form has a provider section for your prescriber. Medicare patients reapply each calendar year.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'J&J Patient Assistance Foundation: approved patients receive medicine at no cost for up to one year; ask about the current timeframe when you call.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'The most useful conversation here is with your prescriber rather than a program:',
      bullets: [
        'Ask whether Farxiga or Jardiance would serve you as well. Both are SGLT2 inhibitors with Medicare-negotiated prices in effect since January 1, 2026, and Invokana has none — so the same class can cost meaningfully different amounts.',
        'Do not wait for a generic canagliflozin. DailyMed shows only Invokana and Invokamet as brands; the other records are repackagers, not independent generics.',
        'Compare the $225.00 federal cash price against your plan\'s cost-sharing, remembering that cash spending does not count toward your out-of-pocket cap.',
        'Ask your prescriber\'s office about a formulary or tier exception if your plan puts Invokana on a high tier.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Invokana strength, and whether you take Invokana or Invokamet', note: '100 mg or 300 mg; the combination product is listed separately on the fund lists' },
    {
      item: 'Whether Invokana was prescribed for blood sugar, cardiovascular risk or kidney protection',
      note: 'the charitable funds are diagnosis-based, and Good Days runs a kidney program but no diabetes one',
    },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber whether Farxiga or Jardiance would work for you. Both are SGLT2 inhibitors with Medicare-negotiated prices already in effect, while Invokana has none — a clinical decision, but one with a real cost difference behind it.',
    },
    {
      text: 'Compare the federal cash price for Invokana — $225.00 on TrumpRx — against what your plan charges you.',
      href: 'https://trumprx.gov/browse',
      label: 'TrumpRx',
    },
    ...standardAlternatives('Invokana'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Invokana?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Invokana, usually on a brand tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65 — which matters more here than for some SGLT2 inhibitors, because Invokana has no negotiated price and no generic.',
    },
    {
      question: 'Is Invokana part of Medicare drug price negotiation?',
      answer:
        'No, and this is the fact most worth knowing about Invokana on Medicare. CMS\'s selected-drug and Maximum Fair Price file has no Invokana or canagliflozin row for initial price applicability year 2026, 2027 or 2028. Two other SGLT2 inhibitors were selected in the very first negotiation cycle and have had negotiated prices in effect since January 1, 2026: Farxiga and Jardiance. Three medicines in the same class, and the Medicare arithmetic is genuinely different between them — which is worth raising with your prescriber if cost is the obstacle.',
    },
    {
      question: 'Is there a generic for Invokana?',
      answer:
        'No. DailyMed returns five canagliflozin records, but they resolve to only two brands — Invokana and the combination Invokamet — with the remaining entries being repackagers of the brand rather than independent generic products. This surprises people because several diabetes brands have gone generic recently, including sitagliptin, the active ingredient in Januvia. For canagliflozin specifically there is nothing to switch to at a generic tier.',
    },
    {
      question: 'Is there an Invokana patient assistance program for people on Medicare?',
      answer:
        'The Johnson & Johnson Patient Assistance Foundation covers Invokana and supplies it at no cost for up to a year, and J&J describes it as being for people who are "uninsured or have commercial, employer-sponsored, or government coverage that does not fully meet your needs" — wording that reads as open to a Medicare beneficiary facing unaffordable cost-sharing. What we could not confirm is the income limit: J&J\'s quick-reference guide and enrolment form are PDFs whose text could not be read, and its enrolment portal renders client-side. Call 877-468-6526 and ask for the figure for your household size rather than relying on a number from a third-party site.',
    },
    {
      question: 'Can I use the $0 Invokana savings card with Medicare?',
      answer:
        'No. J&J\'s terms say the savings program is "Not valid for patients using Medicare, Medicaid, or other government-funded programs to pay for their medications." This catches people out at 65: a $0 monthly copay on commercial insurance disappears the moment Medicare begins, and there is no equivalent Medicare version of the card. The J&J route that does remain open is the patient assistance foundation.',
    },
    {
      question: 'Is there a charitable grant for Invokana right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Invokana, Invokamet and Invokamet XR on its Type 2 diabetes fund and the health-equity version, both closed, each with a $1,500 guaranteed and $2,000 maximum award. HealthWell\'s Type 2 Diabetes fund was closed too. Good Days has no diabetes program, although it does run a Chronic Kidney Disease program — if kidney protection is the reason you were prescribed Invokana, that is worth a question to Good Days directly. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['farxiga', 'jardiance', 'januvia', 'inpefa'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Invokana' },
  ],
  sources: [
    label,
    dailymedCana,
    invokanaSavings,
    jjPap,
    jjQuickRef,
    trumpRx,
    totalAssistT2d,
    totalAssistT2dHe,
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
  // Per-record verification date. The J&J income limits are the open item: if the
  // foundation's quick-reference guide becomes machine-readable, this record
  // gains a real income table and the `verify` status can be lifted.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Invokana Assistance',
    status: 'coming-soon',
    description:
      'Why Invokana has no generic and no negotiated price when Farxiga and Jardiance have both, what J&J does and does not publish, and the question to ask your prescriber about switching within the class.',
  },
  description_meta:
    'How to lower the cost of Invokana (canagliflozin) on Medicare: the J&J Patient Assistance Foundation route, why there is no generic canagliflozin, why Farxiga and Jardiance have negotiated prices and Invokana does not, and diabetes fund status — verified August 2026.',
};
