// ---------------------------------------------------------------------------
// Yupelri (revefenacin) — Viatris. Independently researched 2026-08-26.
// Batch 8 — a NEW slug.
//
// Yupelri is the only medication in this registry that a Medicare beneficiary
// normally receives under PART B rather than Part D, and that single fact
// reorders the entire assistance page.
//
// Yupelri is an inhalation SOLUTION given through a jet nebulizer with an air
// compressor — not a handheld inhaler. Medicare covers nebulizers as durable
// medical equipment, and the drugs used in them under the Part B DME benefit.
// Viatris's own coverage page states it plainly: "Medicare Part B also covers
// most nebulizers as durable medical equipment (DME) for patient use at home",
// Part B covers 80% with the patient responsible for the remaining 20%, and with
// Medigap supplemental coverage a patient "may pay as little as $0 out of pocket
// for YUPELRI."
//
// The consequences are not cosmetic:
//   • EXTRA HELP DOES NOTHING HERE. Extra Help is a Part D low-income subsidy. It
//     does not reduce a Part B coinsurance. Every other record in this batch
//     points readers at Extra Help as a primary route; this one must not, and the
//     page says why.
//   • MEDIGAP AND MEDICARE SAVINGS PROGRAMS ARE THE TOOLS INSTEAD. A Medigap
//     policy that covers Part B coinsurance is what takes the 20% to zero.
//   • The Part D out-of-pocket cap does not apply to it either.
//
// This is the clearest possible case of criterion 6 — Medicare-specific
// usefulness — and it is information a reader cannot get from a generic
// "prescription assistance" page.
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
} from './shared';

const label = {
  title: 'Yupelri prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dfebf04-7c90-436a-9b16-750d3c1ee0a6',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"YUPELRI is an anticholinergic indicated for the maintenance treatment of patients with chronic obstructive pulmonary disease (COPD)"; inhalation solution 175 mcg of revefenacin per 3 mL in unit-dose vials; administered by oral inhalation "using a standard jet nebulizer with a mouthpiece connected to an air compressor"; Viatris Specialty LLC, manufactured for Mylan Specialty L.P. (rev. 5/3/2022)',
};
const dailymedReve = {
  title: 'DailyMed label index — revefenacin',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=revefenacin',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled revefenacin product — YUPELRI. No generic is labelled',
};
const yupelriCoverage = {
  title: 'YUPELRI insurance coverage — Medicare',
  url: 'https://www.yupelri.com/coverage-and-savings/insurance-coverage',
  publisher: 'Viatris',
  checked: CHECKED,
  supports:
    'verbatim: "Medicare Part B also covers most nebulizers as durable medical equipment (DME) for patient use at home"; Part B covers 80% of nebulized COPD treatments like YUPELRI with the patient responsible for the remaining 20%; with Medigap supplemental coverage a patient "may pay as little as $0 out of pocket for YUPELRI"; Medicare Advantage likewise covers 80%. Also the savings-card exclusion quoted on this page. Phones 1-800-395-3376 and 1-800-796-9526',
};
const yupelriSavingsCard = {
  title: 'YUPELRI Savings Card activation',
  url: 'https://www.activatethecard.com/yupelri/',
  publisher: 'Viatris',
  checked: CHECKED,
  supports:
    'the savings-card activation route and its terms; "This offer is not valid for patients covered by Medicare, Medicaid, or any other federal or state-funded healthcare program or where prohibited by law"; and the note that, absent a change in Massachusetts law, the program is no longer valid for Massachusetts residents as of January 1, 2026',
};
const viatrisPap = {
  title: 'Viatris Patient Assistance Program — contact route',
  url: 'https://www.yupelri.com/coverage-and-savings/coverage-and-savings-faqs',
  publisher: 'Viatris',
  checked: CHECKED,
  supports:
    'the Viatris Patient Assistance Program contact route for Yupelri — ViatrisPAP@viatris.com and fax 877-427-7290. NOTE: Viatris publishes no income table or Medicare rule for this program on its Yupelri pages, and viatris.com/en/patient-support/viatris-advocate returned a 404 on the checked date, so the program\'s eligibility criteria could not be established',
};
const medicareDme = {
  title: 'Durable medical equipment (DME) coverage — Medicare.gov',
  url: 'https://www.medicare.gov/coverage/durable-medical-equipment-dme-coverage',
  publisher: 'Medicare.gov',
  checked: CHECKED,
  supports:
    'Medicare Part B coverage of durable medical equipment including nebulizers and the medications used with them, and the 20% coinsurance after the Part B deductible',
};
const medigap = {
  title: 'How to compare Medigap policies',
  url: 'https://www.medicare.gov/health-drug-plans/medigap/basics/compare-policies',
  publisher: 'Medicare.gov',
  checked: CHECKED,
  supports: 'which Medigap plans cover the Part B coinsurance — the mechanism that can reduce a Yupelri 20% share to $0',
};
const msp = {
  title: 'Medicare Savings Programs',
  url: 'https://www.medicare.gov/basics/costs/help/medicare-savings-programs',
  publisher: 'Medicare.gov',
  checked: CHECKED,
  supports: 'state programs that help pay Part B premiums and, for some, Part B deductibles and coinsurance',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Yupelri (Revefenacin)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Yupelri; $1,200 guaranteed / $3,500 maximum award; requires a home zip code in a designated social-vulnerability county',
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
    'the full selected-drug file dated May 26, 2026 — no Yupelri or revefenacin row for initial price applicability year 2026, 2027 or 2028',
};

export const YUPELRI: MedicationAssistanceRecord = {
  slug: 'yupelri',
  brandName: 'Yupelri',
  genericName: 'revefenacin',
  manufacturer: 'Viatris',
  // `respiratory`. COPD maintenance only — TotalAssist lists Yupelri on the COPD
  // funds, which is the correct match.
  conditions: ['respiratory'],
  // 'lama' — the label calls revefenacin "an anticholinergic", a single
  // long-acting bronchodilator with no steroid and no second bronchodilator, the
  // same class the Spiriva and Incruse records carry. The delivery device
  // (nebulizer rather than handheld inhaler) is what changes the Medicare
  // benefit, not the pharmacological class.
  drugClass: ['lama'],
  description:
    'Yupelri is a once-daily COPD maintenance treatment that comes as a liquid you breathe in through a nebulizer, not as a handheld inhaler. That difference is medical for some people — a nebulizer can be easier if you cannot coordinate a handheld device — and it is financial for everyone on Medicare, because a nebulized drug is usually paid for under Part B rather than Part D. Almost every piece of prescription-assistance advice you have read assumes Part D. For this medication, most of it does not apply.',
  usedFor: [
    'Maintenance treatment of chronic obstructive pulmonary disease (COPD), given once daily through a standard jet nebulizer with a mouthpiece connected to an air compressor',
  ],
  whyCostly:
    'Yupelri is a brand-only medication — DailyMed labels a single revefenacin product, with no generic — and it is used every day indefinitely. But the reason costs surprise people is structural rather than about the price: because it is nebulized, Medicare usually pays for it under Part B, where you owe a straight 20% coinsurance with no annual out-of-pocket cap, rather than under Part D, where the $2,100 cap and Extra Help both apply. A 20% share that never stops accumulating behaves very differently from a copay inside a capped drug benefit.',
  medicareContext:
    'This is the most important section on the page. Yupelri is an inhalation solution given through a nebulizer, and Medicare covers nebulizers as durable medical equipment (DME) under Part B along with the medications used in them. Viatris states it directly: "Medicare Part B also covers most nebulizers as durable medical equipment (DME) for patient use at home", Part B pays 80% of nebulized COPD treatments like Yupelri, and you are responsible for the remaining 20%. Medicare Advantage plans likewise cover 80%. Three consequences follow, and they run against the standard advice on this site. First, Medicare Extra Help does not help — it is a Part D low-income subsidy and it does not touch a Part B coinsurance. Second, the $2,100 Part D out-of-pocket cap does not apply either, so there is no ceiling on the 20%. Third, the tool that does work is supplemental coverage: Viatris notes that with a Medigap policy a patient "may pay as little as $0 out of pocket for YUPELRI", because most Medigap plans cover the Part B coinsurance. A Medicare Savings Program can help too. Confirm with your supplier and prescriber which benefit your Yupelri is billed under before acting on any of this, because a small number of situations are billed differently.',
  quickAnswer: {
    verdict:
      'The usual answer is the wrong one here. Yupelri is normally a Medicare Part B drug, not a Part D drug, because it is nebulized — so Extra Help does nothing for it and the Part D out-of-pocket cap does not apply. What does work is Medigap, which can take the 20% Part B coinsurance to zero. The manufacturer savings card excludes Medicare, and both COPD charitable funds were closed.',
    points: [
      'Part B, not Part D: Viatris states that "Medicare Part B also covers most nebulizers as durable medical equipment (DME) for patient use at home", that Part B covers 80% of nebulized COPD treatments like Yupelri, and that you pay the remaining 20%.',
      'Medigap is the lever: with supplemental coverage Viatris says a patient "may pay as little as $0 out of pocket for YUPELRI". Most Medigap plans cover the Part B coinsurance.',
      'Extra Help will NOT reduce your Yupelri cost if it is billed under Part B — it is a Part D subsidy. This is the single most common mistake with nebulized drugs.',
      'YUPELRI Savings Card: "not valid for patients covered by Medicare, Medicaid, or any other federal or state-funded healthcare program". Also no longer valid for Massachusetts residents from January 1, 2026, absent a change in state law.',
      'Viatris Patient Assistance Program: exists and can be reached at ViatrisPAP@viatris.com or fax 877-427-7290, but Viatris publishes no income limits or Medicare rule for it — recorded as unverified.',
      'Charitable grants: TotalAssist\'s COPD fund and COPD health equity fund both list Yupelri and both were closed ($1,200 guaranteed / $3,500 maximum). HealthWell\'s COPD – Medicare Access fund was closed. Good Days has no COPD fund.',
    ],
  },
  programs: [
    {
      id: 'medicare-part-b',
      kind: 'government',
      name: 'Medicare Part B (durable medical equipment benefit)',
      operator: 'Medicare',
      status: 'open',
      statusNote:
        'The route most Yupelri prescriptions actually run through. Year-round; there is nothing to apply for beyond having Part B and using an enrolled supplier.',
      medicare: 'eligible',
      medicareNote:
        'This IS the Medicare rule for Yupelri, rather than a program with one. Because Yupelri is delivered by nebulizer, Medicare treats it under the Part B durable medical equipment benefit rather than as a Part D prescription. Part B pays 80% after your annual Part B deductible and you owe the other 20%, with no cap on that share. Medicare Advantage plans cover it at the same 80% level, though your out-of-pocket rules will follow the plan. Get this confirmed for your own supply before you plan around it — your prescriber\'s office or your DME supplier can tell you how your Yupelri is being billed.',
      summary:
        'Not an assistance program, but the fact that determines which assistance is worth your time. If your Yupelri is billed under Part B, the tools that reduce your cost are the ones that reduce Part B coinsurance — Medigap and Medicare Savings Programs — and not the Part D tools nearly every prescription-assistance page recommends.',
      covers: '80% of the cost of nebulized COPD medications like Yupelri after the annual Part B deductible, plus the nebulizer itself as durable medical equipment.',
      eligibility: [
        'Enrolled in Medicare Part B',
        'Yupelri prescribed for use at home with a nebulizer',
        'Supplied through a Medicare-enrolled durable medical equipment supplier',
      ],
      howToApply:
        'Nothing to apply for. Ask your prescriber to send the prescription to a Medicare-enrolled DME supplier, and confirm with that supplier that they accept Medicare assignment — that limits what you can be charged.',
      applyUrl: 'https://www.medicare.gov/coverage/durable-medical-equipment-dme-coverage',
      applyLabel: 'Medicare DME coverage',
      phone: '1-800-633-4227',
      sources: [yupelriCoverage, medicareDme, label],
    },
    {
      id: 'medigap',
      kind: 'government',
      name: 'Medigap (Medicare Supplement Insurance) — the Part B coinsurance route',
      operator: 'Private insurers, standardised by Medicare',
      status: 'open',
      statusNote:
        'Available year-round to buy, though your right to be accepted regardless of health depends on being inside your Medigap open enrollment period or a guaranteed-issue situation.',
      medicare: 'eligible',
      medicareNote:
        'Medigap exists specifically to pay costs Original Medicare leaves you, and Part B coinsurance is the first thing every standardised Medigap plan covers. That is why Viatris can say a patient with supplemental coverage "may pay as little as $0 out of pocket for YUPELRI". For a nebulized drug taken indefinitely with no out-of-pocket cap, this is a larger lever than any manufacturer program on this page.',
      summary:
        'The single most effective route for a Yupelri user on Original Medicare, and the one most likely to be missed because it is not a "drug program". If you have Original Medicare without a Medigap policy and you are on a nebulized maintenance drug, this is worth a serious look.',
      covers: 'The 20% Part B coinsurance on Yupelri and on other Part B services, depending on the plan letter you choose.',
      eligibility: [
        'Enrolled in Medicare Part A and Part B',
        'Not in a Medicare Advantage plan (Medigap works with Original Medicare)',
        'Acceptance is guaranteed during your Medigap open enrollment period; outside it, insurers may use medical underwriting in most states',
      ],
      howToApply:
        'Compare the standardised plan letters and what each covers, then buy from a licensed insurer. AltaMedicare can walk you through which plan letters cover the Part B coinsurance and what your enrollment rights currently are.',
      applyUrl: 'https://www.medicare.gov/health-drug-plans/medigap/basics/compare-policies',
      applyLabel: 'Compare Medigap policies',
      phone: '1-800-633-4227',
      sources: [medigap, yupelriCoverage],
    },
    {
      id: 'medicare-savings-programs',
      kind: 'government',
      name: 'Medicare Savings Programs',
      operator: 'Your state Medicaid agency',
      status: 'open',
      statusNote: 'Year-round state programs. Income and resource limits vary by state and by program level.',
      medicare: 'eligible',
      medicareNote:
        'The second Part B tool, and the one that matters if a Medigap premium is out of reach. Depending on which level you qualify for, a Medicare Savings Program can pay your Part B premium and, at the higher levels, your Part B deductible and coinsurance — which is the 20% you owe on Yupelri. Note that qualifying for a Medicare Savings Program also automatically qualifies you for Extra Help, which will not help with a Part B Yupelri bill but will help with everything else you take under Part D.',
      summary:
        'A state-run route that can cover the Part B coinsurance for people with limited income and resources. Named here because the usual advice — apply for Extra Help — does not solve the Yupelri problem, and this often does.',
      covers: 'Part B premiums, and at some levels the Part B deductible and coinsurance.',
      eligibility: [
        'Limited income and resources — the exact limits vary by state and by program level',
        'Enrolled in or eligible for Medicare Part A',
      ],
      howToApply:
        'Apply through your state Medicaid agency. Medicare.gov lists the program levels and the current federal baseline limits; your state may use higher ones.',
      applyUrl: 'https://www.medicare.gov/basics/costs/help/medicare-savings-programs',
      applyLabel: 'Medicare Savings Programs',
      phone: '1-800-633-4227',
      sources: [msp],
    },
    {
      id: 'viatris-pap',
      kind: 'manufacturer-pap',
      name: 'Viatris Patient Assistance Program',
      operator: 'Viatris',
      status: 'verify',
      statusNote:
        'A contact route for the Viatris Patient Assistance Program is published on the Yupelri site — ViatrisPAP@viatris.com and fax 877-427-7290 — but Viatris publishes no income table, no insurance rule and no Medicare rule for it on those pages, and viatris.com/en/patient-support/viatris-advocate returned a 404 error on August 26, 2026. The program\'s eligibility criteria therefore could not be established.',
      medicare: 'unknown',
      medicareNote:
        'Not published. This is a genuine gap rather than an absence of a program: Viatris clearly runs patient assistance and gives a route to it, but the criteria are not on the Yupelri pages. Email or fax and ask three things — whether Medicare beneficiaries may apply, whether the program treats Part B and Part D patients differently, and what the current income limit is. The Part B question matters here in a way it would not for a tablet.',
      summary:
        'An honest "we could not confirm this". The contact details are real and worth using; the eligibility rules are not published, and this page will not guess them.',
      eligibility: [
        'Current income limits and insurance rules: UNVERIFIED — not published on the Yupelri pages, and the Viatris patient-support page returned a 404 on the checked date',
        'Confirm directly before applying, and before ruling yourself out',
      ],
      howToApply:
        'Email ViatrisPAP@viatris.com or fax 877-427-7290. You can also call Viatris on 1-800-395-3376. Ask specifically about Yupelri and mention whether your doses are billed under Part B or Part D.',
      applyUrl: 'https://www.yupelri.com/coverage-and-savings/coverage-and-savings-faqs',
      applyLabel: 'Yupelri coverage and savings FAQs',
      phone: '1-800-395-3376',
      sources: [viatrisPap, yupelriCoverage],
    },
    {
      id: 'yupelri-savings',
      kind: 'manufacturer-savings',
      name: 'YUPELRI Savings Card',
      operator: 'Viatris',
      status: 'limited',
      statusNote:
        'Active for commercially insured patients on August 26, 2026, with one significant restriction beyond the usual: absent a change in Massachusetts law, the program is no longer valid for Massachusetts residents as of January 1, 2026.',
      medicare: 'excluded',
      medicareNote:
        'Viatris\'s terms are explicit: "This offer is not valid for patients covered by Medicare, Medicaid, or any other federal or state-funded healthcare program or where prohibited by law." This exclusion holds whether your Yupelri runs through Part B or Part D — being covered by Medicare at all is the disqualifier, not which part pays.',
      summary:
        'A commercial discount for people with private or employer insurance. Recorded so Medicare readers can rule it out immediately, and so anyone approaching 65 knows that their Yupelri support ends when Medicare begins — at which point the Part B and Medigap questions on this page become the relevant ones.',
      covers: 'Part of the commercial copay or coinsurance for Yupelri. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) insurance',
        'Not covered by Medicare, Medicaid or any other federal or state-funded healthcare program',
        'Not a Massachusetts resident, from January 1, 2026, absent a change in state law',
      ],
      howToApply:
        'Commercially insured patients activate the card at activatethecard.com/yupelri. Medicare beneficiaries should look at Medigap, a Medicare Savings Program, and the Viatris Patient Assistance Program instead.',
      applyUrl: 'https://www.activatethecard.com/yupelri/',
      applyLabel: 'YUPELRI Savings Card',
      phone: '1-800-796-9526',
      sources: [yupelriSavingsCard, yupelriCoverage, SRC.oigCoupons],
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
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses, and they pay toward copays, coinsurance, deductibles and premiums. A Part B coinsurance is a qualifying expense, so unlike Extra Help these funds are genuinely useful for a nebulized drug. Say on your application that Yupelri is billed under Part B.',
      summary:
        '"Yupelri (Revefenacin)" is named on the COPD approved-medication list. This is the one charitable route on this page that works regardless of which Medicare benefit pays — which makes it more valuable for Yupelri than the same fund is for a handheld inhaler.',
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
      medicareNote:
        'A "Medicare Access" fund built specifically for people with Medicare, and like TotalAssist it pays toward coinsurance — so it works for a Part B Yupelri bill as well as a Part D one.',
      summary:
        'HealthWell runs a COPD fund designed for Medicare beneficiaries; it was closed when we checked. Worth an alert precisely because it is one of the few routes here that is indifferent to the Part B / Part D question.',
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
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Yupelri.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable funds matter more for Yupelri than for the handheld inhalers on this site, for a reason worth understanding. Because Yupelri is usually billed under Medicare Part B, the Part D safety nets — Extra Help and the $2,100 out-of-pocket cap — do not apply to it. The charitable funds do: both TotalAssist and HealthWell pay toward coinsurance, and a Part B coinsurance is a qualifying expense. So the funds are one of the few forms of help here that are indifferent to which Medicare benefit pays. TotalAssist lists "Yupelri (Revefenacin)" on its COPD fund and COPD health equity fund, each $1,200 guaranteed up to $3,500, and both were closed on August 26, 2026; HealthWell\'s COPD – Medicare Access fund was closed too; Good Days has no COPD fund. Set alerts on both foundations, and in the meantime put your effort into the Medigap question, which is the larger lever.',
  extraHelpNote:
    'Read this before applying for Extra Help on account of Yupelri: if your Yupelri is billed under Medicare Part B, as nebulized COPD drugs usually are, Extra Help will not reduce what you pay for it. Extra Help is the Part D Low-Income Subsidy — it lowers Part D premiums, deductibles and copays, and a Part B coinsurance is none of those things. That does not make Extra Help worthless: it will still lower the cost of every Part D medication you take, and qualifying for a Medicare Savings Program brings Extra Help with it automatically. But for the Yupelri bill specifically, the tools are Medigap and a Medicare Savings Program. This is the most common and most expensive misunderstanding about nebulized drugs on Medicare, which is why it is spelled out here rather than left implied.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Everything on this page turns on one question you should settle first: is your Yupelri billed under Part B or Part D?',
      bullets: [
        'Ask your prescriber\'s office or your DME supplier which Medicare benefit your Yupelri is billed under. Nebulized COPD drugs are usually Part B.',
        'If Part B and you have Original Medicare without supplemental coverage → look at a Medigap policy. Viatris says a patient with supplemental coverage may pay as little as $0.',
        'Limited income and resources → apply for a Medicare Savings Program through your state, which at some levels covers the Part B coinsurance.',
        'COPD diagnosis → set alerts on the TotalAssist and HealthWell COPD funds; these help with Part B coinsurance too.',
        'Email ViatrisPAP@viatris.com to ask about the Viatris Patient Assistance Program, whose criteria are not published.',
        'Do NOT rely on Extra Help for the Yupelri bill if it is billed under Part B.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The government routes are always open; the charitable ones were closed; the manufacturer route is unverified.',
      bullets: [
        'Medigap: available year-round to buy, but your right to be accepted regardless of health depends on your enrollment period — check where you stand before assuming you can switch later.',
        'Medicare Savings Programs: year-round through your state Medicaid agency.',
        'TotalAssist: the COPD and COPD health equity fund pages show "Open" or "Closed" and current award amounts.',
        'HealthWell: the disease-funds list shows the COPD – Medicare Access fund and its status.',
        'Viatris Patient Assistance: contact by email or fax to confirm it is accepting applications and what the criteria are.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The eligibility questions here are mostly about your Medicare setup rather than your income:',
      bullets: [
        'Medigap: you need Original Medicare (Part A and Part B) and not a Medicare Advantage plan. Guaranteed acceptance applies during your Medigap open enrollment period.',
        'Medicare Savings Program: limited income and resources, with limits set by your state.',
        'TotalAssist (when open): government insurance covering Yupelri; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed COPD diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified COPD diagnosis, and treatment in the United States.',
        'Viatris Patient Assistance: UNVERIFIED — ask whether Medicare beneficiaries qualify and whether Part B and Part D patients are treated differently.',
        'YUPELRI Savings Card: commercial insurance only, and not for Massachusetts residents from January 1, 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'One document here is unusual and worth chasing early:',
      bullets: [
        'Written confirmation of how your Yupelri is billed — Part B DME or Part D. Your supplier or prescriber\'s office can tell you, and it decides which of the routes above is worth your time.',
        'Medicare card, and details of any Medigap policy or Medicare Advantage plan you hold.',
        'Your COPD diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Household size and annual household income, plus proof.',
        'The name of your durable medical equipment supplier, and whether they accept Medicare assignment.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who does what:',
      bullets: [
        'Medigap: you apply directly to a licensed insurer. AltaMedicare can compare plan letters with you at no charge.',
        'Medicare Savings Program: you apply to your state Medicaid agency.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861 — state that Yupelri is billed under Part B if it is.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Viatris Patient Assistance: email ViatrisPAP@viatris.com or fax 877-427-7290 to request the current form and criteria.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Medigap: insurers decide on the application; if you are inside your open enrollment period, acceptance does not depend on your health.',
        'Medicare Savings Program: your state notifies you; approval also brings Extra Help automatically.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'Viatris Patient Assistance: unverified timeframe — ask when you make contact.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'The Part B structure gives you different levers than a Part D drug would:',
      bullets: [
        'Make sure your DME supplier accepts Medicare assignment. A supplier who does not can charge more than the Medicare-approved amount, which raises your 20% share.',
        'Ask your prescriber whether a handheld inhaler would suit you. Handheld COPD inhalers are Part D drugs, where Extra Help and the $2,100 cap apply — but this is a clinical decision, and for some people a nebulizer is easier to use correctly, so it needs their judgement rather than a cost calculation.',
        'If you are in a Medicare Advantage plan, check your plan\'s DME cost-sharing and its out-of-pocket maximum, which works differently from Original Medicare.',
        'Sign up for TotalAssist and HealthWell alerts on the COPD funds — these do help with Part B coinsurance.',
        'Do not wait for a generic: DailyMed labels a single revefenacin product.',
        'Call AltaMedicare — the Medigap comparison is exactly the kind of thing we do free, and for this medication it is usually the biggest saving available.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Confirmation of whether your Yupelri is billed under Medicare Part B or Part D',
      note: 'this single fact decides which routes on this page apply to you — ask your DME supplier or prescriber\'s office',
    },
    { item: 'Details of any Medigap policy you hold, including the plan letter', note: 'most Medigap plans cover the Part B coinsurance that Yupelri generates' },
    { item: 'Your durable medical equipment supplier\'s name, and whether they accept Medicare assignment', note: 'a supplier who does not can charge above the Medicare-approved amount' },
  ],
  ifUnavailable: [
    {
      text: 'Compare Medigap policies. Because Yupelri usually falls under Part B, a Medigap plan that covers the Part B coinsurance is the largest single saving available — Viatris says a patient with supplemental coverage may pay as little as $0.',
      href: 'https://www.medicare.gov/health-drug-plans/medigap/basics/compare-policies',
      label: 'Compare Medigap policies',
    },
    {
      text: 'Apply for a Medicare Savings Program through your state. At some levels these pay the Part B deductible and coinsurance — which Extra Help does not.',
      href: 'https://www.medicare.gov/basics/costs/help/medicare-savings-programs',
      label: 'Medicare Savings Programs',
    },
    {
      text: 'Sign up for TotalAssist fund notifications so you hear the moment a COPD fund reopens — these grants pay toward coinsurance, so they work for a Part B bill.',
      href: 'https://totalassist.org/notify/',
      label: 'TotalAssist notifications',
    },
    {
      text: 'Sign up for HealthWell fund alerts for the same reason; HealthWell says closed funds reopen as funding is replenished.',
      href: 'https://www.healthwellfoundation.org/disease-funds/',
      label: 'HealthWell disease funds',
    },
    {
      text: "Ask your doctor's office — many practices have staff who handle assistance applications routinely and can confirm how your nebulized medication is being billed.",
    },
    {
      text: 'Call AltaMedicare. For a Part B drug the useful conversation is about supplemental coverage rather than drug plans, and that is work we do free.',
      href: '/medicare-supplement.html',
      label: 'Medigap plans explained',
    },
  ],
  faqs: [
    {
      question: 'Does Medicare cover Yupelri?',
      answer:
        'Yes, but usually under Part B rather than Part D. Yupelri is a solution you breathe in through a nebulizer, and Medicare covers nebulizers as durable medical equipment along with the drugs used in them. Viatris states that "Medicare Part B also covers most nebulizers as durable medical equipment (DME) for patient use at home", that Part B covers 80% of nebulized COPD treatments like Yupelri, and that you pay the remaining 20%. Medicare Advantage plans cover it at the same 80% level. Confirm how your own supply is billed with your prescriber\'s office or DME supplier.',
    },
    {
      question: 'Will Medicare Extra Help lower my Yupelri cost?',
      answer:
        'Not if your Yupelri is billed under Part B, and that is the usual case. Extra Help is the Part D Low-Income Subsidy: it lowers Part D premiums, deductibles and copays. A Part B coinsurance is none of those, so Extra Help does not touch it. This is the most common and most expensive misunderstanding about nebulized drugs on Medicare. Extra Help is still worth having for your other medications, and qualifying for a <a href="https://www.medicare.gov/basics/costs/help/medicare-savings-programs">Medicare Savings Program</a> brings it automatically — but for the Yupelri bill, Medigap and a Medicare Savings Program are the tools.',
    },
    {
      question: 'How do I get my 20% Yupelri coinsurance down to zero?',
      answer:
        'Supplemental coverage is the usual answer. Most standardised Medigap policies cover the Part B coinsurance, which is why Viatris can say that with a Medigap policy a patient "may pay as little as $0 out of pocket for YUPELRI". If a Medigap premium is out of reach, a Medicare Savings Program can cover the Part B deductible and coinsurance at some levels. And unlike Extra Help, the TotalAssist and HealthWell COPD grants do pay toward coinsurance, so they work for a Part B bill when they reopen.',
    },
    {
      question: 'Is there a Yupelri patient assistance program for people on Medicare?',
      answer:
        'Viatris runs a patient assistance program and publishes a contact route for it on the Yupelri site — ViatrisPAP@viatris.com, fax 877-427-7290 — but it does not publish the income limits, the insurance rules or any Medicare rule for it on those pages, and the Viatris patient-support page we tried returned a 404 error on August 26, 2026. So the honest answer is that a program exists and its criteria could not be established. Email or fax and ask whether Medicare beneficiaries qualify and whether Part B and Part D patients are treated differently — that last question matters more for Yupelri than for most medicines.',
    },
    {
      question: 'Can I use the Yupelri savings card with Medicare?',
      answer:
        'No. Viatris\'s terms say "This offer is not valid for patients covered by Medicare, Medicaid, or any other federal or state-funded healthcare program or where prohibited by law." Being covered by Medicare is the disqualifier, so it makes no difference whether your Yupelri runs through Part B or Part D. One further restriction worth noting even for commercially insured readers: absent a change in Massachusetts law, the savings program is no longer valid for Massachusetts residents as of January 1, 2026.',
    },
    {
      question: 'Is there a generic for Yupelri?',
      answer:
        'No. DailyMed lists a single labelled revefenacin product, Viatris\'s Yupelri. There is no generic version. If cost is the obstacle, the conversation worth having with your prescriber is not about a generic but about whether a handheld inhaler would suit you — those are Part D drugs, where Extra Help and the $2,100 out-of-pocket cap apply. That is a clinical decision, though: for some people a nebulizer is genuinely easier to use correctly. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['spiriva', 'incruse', 'anoro', 'stiolto'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/medicare-supplement.html', label: 'Medigap (Medicare Supplement) Plans', blurb: 'Supplemental coverage that pays the Part B coinsurance' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: 'What it does and does not cover' },
  ],
  sources: [
    label,
    dailymedReve,
    yupelriCoverage,
    yupelriSavingsCard,
    viatrisPap,
    medicareDme,
    medigap,
    msp,
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
  // Per-record verification date. Re-verify the Viatris coverage page first —
  // the Part B / DME statement is the fact this entire record is built on, and
  // it is the one claim whose loss would change every recommendation here.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Yupelri Assistance',
    status: 'coming-soon',
    description:
      'Why a nebulized COPD drug is a Part B expense, why Extra Help will not help with it, and how a Medigap policy can take the 20% coinsurance to zero.',
  },
  description_meta:
    'How to lower the cost of Yupelri (revefenacin) on Medicare: why it is a Part B durable medical equipment drug, why Extra Help does not apply, how Medigap can take the 20% coinsurance to $0, and COPD fund status — verified August 2026.',
};
