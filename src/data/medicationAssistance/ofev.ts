// ---------------------------------------------------------------------------
// Ofev (nintedanib) — Boehringer Ingelheim. Independently researched
// 2026-08-26. Batch 6 (spec §24 Phase 4 list, the closing four) — a NEW slug.
//
// THE TAXONOMY TEST. Ofev was the medication the project reserved to decide
// whether the `respiratory` condition key could carry pulmonary fibrosis, or
// whether a `lung-disease` key had to exist (project §31 #6). It was decided on
// evidence, and the evidence said the existing key could not do the job:
//
//   • The label carries no asthma or COPD indication at all — IPF, chronic
//     fibrosing ILDs with a progressive phenotype, and SSc-ILD.
//   • The funds are different funds. On the checked date TotalAssist's
//     Pulmonary fibrosis fund was OPEN ($3,500 / $7,000) and lists Ofev, while
//     its COPD and Asthma funds were CLOSED ($1,200 / $3,500) and do not list
//     Ofev. HealthWell splits the same way: Pulmonary Fibrosis and Systemic
//     Sclerosis with ILD at $9,000, both listing Ofev, versus COPD at $3,250
//     and Asthma at $4,500, neither listing it.
//
// Because `conditions` is what programsForDrug() matches disease funds on,
// tagging Ofev `respiratory` would have pointed a fibrosis patient at inhaler
// funds that are closed, smaller, and do not cover their medicine. The key was
// added; the full reasoning lives with it in data/conditions.ts. No inhaler
// moved, and `respiratory` is unchanged.
//
// RESEARCH LIMIT (same as Spiriva): every Boehringer Ingelheim patient-facing
// host refused automated access on 2026-08-26. Only docs.boehringer-ingelheim.com
// could be read, and the Ofev savings-card terms it serves expired on
// 12/31/2024. The two Boehringer Ingelheim programs below are therefore
// `verify`, with the reason stated on each card.
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
  title: 'Ofev prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=da1c9f37-779e-4682-816f-93d0faa4cfc9',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"OFEV is a kinase inhibitor indicated in adults for" idiopathic pulmonary fibrosis, chronic fibrosing interstitial lung diseases with a progressive phenotype, and slowing the rate of decline in pulmonary function in SSc-ILD; 100 mg and 150 mg capsules; mechanism "inhibits multiple receptor tyrosine kinases (RTKs) and non-receptor tyrosine kinases (nRTKs)" (rev. 5/2025)',
};
const dailymedGenerics = {
  title: 'DailyMed label search — nintedanib',
  url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=nintedanib',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'eleven nintedanib capsule label entries besides Boehringer Ingelheim\'s OFEV — generic nintedanib is on the U.S. market',
};
const biPortal = {
  title: 'Boehringer Cares Patient Assistance Portal',
  url: 'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
  publisher: 'Boehringer Ingelheim',
  checked: CHECKED,
  supports:
    'the current official location of the Boehringer Cares Patient Assistance Program. NOTE: this page returned an Incapsula block page to every automated request on the checked date, so its terms could not be read here',
};
const phrmaPpa = {
  title: 'Boehringer Ingelheim Cares Foundation, Inc. — therapies offered',
  url: 'https://www.helpingpatients.org/company/boehringer_ingelheim_pharmaceuticals_inc',
  publisher: 'Partnership for Prescription Assistance (PhRMA)',
  checked: CHECKED,
  supports:
    'program information supplied by the foundation itself, listing "Ofev® Capsules" among the therapies offered, and describing free medicines for patients meeting program criteria',
};
const rxAssistBi = {
  title: 'RxAssist — BI Cares Patient Assistance Program',
  url: 'https://www.rxassist.org/search/prog-details?program_Id=14',
  publisher: 'RxAssist (Rhode Island Hospital / Brown University)',
  checked: CHECKED,
  supports:
    'entry last updated 04/27/2026: "Patients with Medicare Part D may be eligible, contact program for details"; income limit "Not Published"; phone 1-800-556-8317; fax 1-866-851-2827',
};
const ofevCardTerms = {
  title: 'Ofev savings card terms and conditions',
  url: 'https://docs.boehringer-ingelheim.com/Ofev_Savings_Card_Terms_Conditions.pdf',
  publisher: 'Boehringer Ingelheim Pharmaceuticals',
  checked: CHECKED,
  supports:
    'the government-insurance exclusion — "Only valid for commercially insured patients… Offer not valid for patients without commercial coverage or patients whose prescriptions for OFEV are eligible to be reimbursed, in whole or in part, by any federal healthcare programs such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE"; NOTE: this copy states "Benefits not to exceed Program expiration on 12/31/2024", so its dollar terms are not current',
};
const totalAssistPf = {
  title: 'TotalAssist — Pulmonary fibrosis (PF) fund',
  url: 'https://totalassist.org/funds/pulmonary-fibrosis-pf/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'OPEN; "Ofev (Nintedanib Esylate)" on the approved-medication list alongside Esbriet, pirfenidone and Jascayd; $3,500 guaranteed / $7,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'the contrast that decided the taxonomy question — Closed, $1,200 guaranteed / $3,500 maximum, and Ofev is not on its approved-medication list',
};
const healthWellPf = {
  title: 'HealthWell Pulmonary Fibrosis fund',
  url: 'https://www.healthwellfoundation.org/fund/pulmonary-fibrosis/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'Closed to new patients; Ofev and nintedanib on the covered list; $9,000 maximum award; 500% FPL; prescription copay or Medicare Part B premium',
};
const healthWellSscIld = {
  title: 'HealthWell Systemic Sclerosis with Interstitial Lung Disease fund',
  url: 'https://www.healthwellfoundation.org/fund/systemic-sclerosis-with-interstitial-lung-disease/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'Closed to new patients; Ofev and nintedanib on the covered list; $9,000 maximum award; 500% FPL',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no pulmonary fibrosis, interstitial lung disease or systemic sclerosis fund on the disease list',
};
const cmsSelectedDrugFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the selected-drug file dated May 26, 2026: OFEV (nintedanib), NDC-9 00597-0143 and 00597-0145, single MFP per 30-day equivalent supply $6,350.00, MFP effective date 01/01/2027, IPAY 2027',
};
const cmsMfpOfev = {
  title: 'MFP explanation for Ofev (initial price applicability year 2027)',
  url: 'https://www.cms.gov/files/zip/file-mfp-explanation-ofev.zip',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'CMS\'s published explanation of how the Ofev maximum fair price was reached',
};
const trumpRx = {
  title: 'TrumpRx — browse all medicines',
  url: 'https://trumprx.gov/browse',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports:
    'brand Ofev is not among the listed medicines; a generic nintedanib esylate capsule does appear, at prices the site sets by location',
};

export const OFEV: MedicationAssistanceRecord = {
  slug: 'ofev',
  brandName: 'Ofev',
  genericName: 'nintedanib',
  manufacturer: 'Boehringer Ingelheim',
  // `lung-disease`, NOT `respiratory` — see the file header and the evidence
  // recorded with the key in data/conditions.ts. Adding `respiratory` as well
  // would re-create exactly the failure the key exists to prevent: it would
  // match the closed COPD and asthma funds, which do not cover Ofev.
  conditions: ['lung-disease'],
  // Label Highlights (rev. 5/2025): "OFEV is a kinase inhibitor". Deliberately
  // the broad key rather than 'jak-inhibitor', which names a different family.
  drugClass: ['kinase-inhibitor'],
  description:
    'Ofev is a twice-daily capsule for scarring lung diseases. Nintedanib blocks several signalling enzymes involved in fibrosis, which slows the rate at which lung function declines. It is not an inhaler and does not open the airways — it is a different kind of medicine for a different kind of lung disease from COPD or asthma, and that distinction runs through every assistance program on this page.',
  usedFor: [
    'Treatment of idiopathic pulmonary fibrosis (IPF) in adults',
    'Treatment of chronic fibrosing interstitial lung diseases (ILDs) with a progressive phenotype in adults',
    'Slowing the rate of decline in pulmonary function in adults with systemic sclerosis-associated interstitial lung disease (SSc-ILD)',
  ],
  whyCostly:
    'Ofev is a specialty capsule taken twice a day indefinitely, and Medicare\'s own negotiation puts a number on the scale: CMS set a maximum fair price of $6,350.00 for a 30-day equivalent supply, effective January 1, 2027 — the negotiated price, which means the price before negotiation was higher still. On a Part D specialty tier the coinsurance on a drug at that level reaches the annual out-of-pocket cap quickly, usually in the first months of the year. The manufacturer savings card excludes Medicare, so a Part D beneficiary carries plan cost-sharing until the cap. The one thing that has changed the arithmetic recently is that generic nintedanib is now on the market — eleven capsule labels besides Boehringer Ingelheim\'s own.',
  medicareContext:
    'Ofev is a capsule you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, generally on a specialty tier with prior authorization. It is one of the 15 drugs CMS selected for the second cycle of Medicare drug price negotiation: the maximum fair price for Ofev is $6,350.00 per 30-day equivalent supply, and it takes effect on January 1, 2027 for people whose Part D plans cover it. Until then, and after, the Part D out-of-pocket cap applies — $2,100 in 2026 — and Extra Help lowers cost-sharing for people with limited income and resources. A negotiated price is not a cash price: it changes what plans and enrollees pay, not what a pharmacy charges someone paying out of pocket.',
  quickAnswer: {
    verdict:
      'Yes — and this is one of the few medications on this site with an open charitable fund. TotalAssist\'s Pulmonary fibrosis fund was accepting applications on August 26, 2026, lists Ofev, and pays a $3,500 guaranteed award up to $7,000. Boehringer Ingelheim also runs a patient assistance program that lists Ofev, though its current terms could not be confirmed. Medicare\'s negotiated price for Ofev starts January 1, 2027.',
    points: [
      'TotalAssist Pulmonary fibrosis fund: OPEN on August 26, 2026, $3,500 guaranteed and $7,000 maximum, for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level adjusted for local cost of living. "Ofev (Nintedanib Esylate)" is on its approved-medication list.',
      'Boehringer Cares Patient Assistance Program: the foundation\'s therapy list includes Ofev Capsules, and it supplies medicines free to patients who meet its criteria. Boehringer Ingelheim\'s website refused every automated request on the checked date, so call 1-800-556-8317 to confirm the income limit and Medicare rules.',
      'Ofev savings card: commercially insured patients only — Boehringer Ingelheim\'s terms exclude prescriptions reimbursable by Medicare, Medicaid, Medigap, VA, DoD or TRICARE.',
      'HealthWell: both applicable funds — Pulmonary Fibrosis and Systemic Sclerosis with ILD, each with a $9,000 maximum award — list Ofev, and both were closed to new patients. Set alerts.',
      'Medicare: a negotiated maximum fair price of $6,350.00 per 30-day equivalent supply takes effect January 1, 2027; Part D costs are capped at $2,100 in 2026; generic nintedanib is now labelled by eleven other manufacturers.',
    ],
  },
  programs: [
    {
      id: 'totalassist-pf',
      kind: 'charitable',
      name: 'TotalAssist — Pulmonary fibrosis (PF) fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Pulmonary fibrosis (PF)',
      status: 'open',
      statusNote:
        'Open and accepting applications on August 26, 2026, with an instant approval decision online. This is a different fund from the COPD and Asthma funds, which were closed and do not cover Ofev — apply to this one.',
      medicare: 'eligible',
      medicareNote:
        'The fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are exactly who it is for.',
      summary:
        'A copay and cost-sharing grant for people with pulmonary fibrosis. "Ofev (Nintedanib Esylate)" is named on the fund\'s approved-medication list, alongside Esbriet and pirfenidone, Jascayd, and the immunosuppressants used in fibrosing ILD. Patient Advocate Foundation states it covers the prescription medications for the diagnosis including generic or bioequivalent drugs — relevant now that generic nintedanib exists.',
      covers:
        '$3,500 guaranteed award and up to $7,000 maximum, usable for medication copays, coinsurance and deductibles, health-insurance premiums and other qualifying expenses. One grant per condition.',
      eligibility: [
        'Confirmed pulmonary fibrosis diagnosis, in treatment, planning to begin treatment within 60 days, or treated in the past 6 months — active surveillance counts',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/pulmonary-fibrosis-pf/',
      applyLabel: 'TotalAssist Pulmonary fibrosis fund',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistPf, totalAssistCopd, SRC.totalAssistEligibility, SRC.totalAssistApply, SRC.totalAssistFunds],
    },
    {
      id: 'bi-cares',
      kind: 'manufacturer-pap',
      name: 'Boehringer Cares Patient Assistance Program',
      operator: 'Boehringer Ingelheim Cares Foundation',
      status: 'verify',
      statusNote:
        'Listed, but current terms could not be confirmed on August 26, 2026. Boehringer Ingelheim\'s own program pages returned an automated block to every request, so the income limit, the Medicare rules and the current medicine list were not read at the source. What we could confirm: the foundation\'s own program description, published through PhRMA\'s Partnership for Prescription Assistance, lists "Ofev® Capsules" among the therapies offered; and an independent program directory updated April 27, 2026 records the phone, the fax and a Medicare Part D note.',
      medicare: 'unknown',
      medicareNote:
        'Boehringer Ingelheim\'s official statement of its Medicare rules could not be read on the checked date, so we are not stating one. The RxAssist directory entry (updated April 27, 2026) reports "Patients with Medicare Part D may be eligible, contact program for details" and lists the income limit as "Not Published". Ask on the call whether the program requires you to apply for Extra Help first, and whether it asks Medicare applicants to pursue charitable funds before enrolling — both are common conditions, and neither was confirmed for this program.',
      summary:
        'The Boehringer Ingelheim Cares Foundation supplies Boehringer Ingelheim medicines free of charge to U.S. patients who meet its criteria, with no charge to apply, to refill, to call, or to have the medicine shipped. Ofev is on the foundation\'s therapy list.',
      covers: 'Boehringer Ingelheim medicines at no cost to approved patients, shipped free.',
      eligibility: [
        'U.S. patient prescribed a Boehringer Ingelheim medicine on the program list — Ofev Capsules are listed',
        'Household income within the program\'s limit — the limit is not published, so it must be confirmed with the program',
        'Insurance status rules for Medicare Part D beneficiaries were not confirmed at the source; ask when you call',
      ],
      requirements: [
        'Financial documentation — a federal tax return or another form the program accepts',
        'Prescription information and your prescriber\'s licence details (NPI)',
        'Your insurance details, including your Medicare and Part D plan information',
      ],
      howToApply:
        'Call the program on 1-800-556-8317, Monday–Friday 8:30am–6:00pm ET, and ask it to send the current application and income guidelines — the reliable route while the website is the part we could not read. Applications are completed by you together with your prescriber and returned to the foundation. There is no fee to apply.',
      applyUrl:
        'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
      applyLabel: 'Boehringer Cares patient assistance portal',
      phone: '1-800-556-8317',
      sources: [biPortal, phrmaPpa, rxAssistBi],
    },
    {
      id: 'ofev-savings-card',
      kind: 'manufacturer-savings',
      name: 'Ofev savings card',
      operator: 'Boehringer Ingelheim',
      status: 'verify',
      statusNote:
        'Boehringer Ingelheim publishes savings-card terms for Ofev, but the only copy reachable on August 26, 2026 states "Benefits not to exceed Program expiration on 12/31/2024" — an expired document, and one headed "Ofev (nintedanib) tablets" although Ofev is supplied as capsules. No dollar amount or monthly maximum is published here for that reason. The government-insurance exclusion below is the part that is stable across versions.',
      medicare: 'excluded',
      medicareNote:
        'Boehringer Ingelheim\'s terms: the offer is "Only valid for commercially insured patients… whose insurance policy provides coverage for OFEV," and "not valid for patients without commercial coverage or patients whose prescriptions for OFEV are eligible to be reimbursed, in whole or in part, by any federal healthcare programs such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE, or any state patient or pharmaceutical assistance program." A Medicare beneficiary cannot use it.',
      summary:
        'A commercial copay card for people with private or employer prescription insurance that covers Ofev. It is not insurance, is not accepted at VA pharmacies, and cannot be combined with another coupon or discount card.',
      covers: 'Part of the commercial copay for Ofev. Nothing toward Medicare cost-sharing.',
      eligibility: [
        'Commercial prescription insurance that covers Ofev and does not reimburse the entire cost',
        'Not covered by Medicare, Medicaid, Medigap, TRICARE, VA, DoD or a state pharmaceutical assistance program',
        'Current dollar terms unconfirmed — ask Boehringer Ingelheim before you rely on a figure',
      ],
      howToApply:
        'Commercially insured patients enrol through the Ofev product website or the program phone line. Medicare beneficiaries should apply to the TotalAssist Pulmonary fibrosis fund and to Boehringer Cares instead.',
      applyUrl: 'https://docs.boehringer-ingelheim.com/Ofev_Savings_Card_Terms_Conditions.pdf',
      applyLabel: 'Ofev savings card terms (Boehringer Ingelheim)',
      sources: [ofevCardTerms, SRC.oigCoupons],
    },
    {
      id: 'bi-direct',
      kind: 'manufacturer-direct',
      name: 'Manufacturer cash price — none found for brand Ofev',
      operator: 'Boehringer Ingelheim',
      status: 'not-found',
      statusNote:
        'We found no Boehringer Ingelheim self-pay or direct-purchase price for Ofev on August 26, 2026, and brand Ofev is not among the medicines listed on TrumpRx. A generic nintedanib esylate capsule is listed there, at prices the site sets by location — so no fixed figure is quoted here.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — there is no manufacturer cash-pay programme for Ofev to have a Medicare rule. Note that the Medicare negotiated price is also not a cash price: it applies through Part D plans, not at the counter for someone paying out of pocket.',
      summary:
        'An honest negative for the brand. The cash comparison that does exist is the generic: eleven manufacturers besides Boehringer Ingelheim now hold a nintedanib capsule label, and TotalAssist says its funds cover generic or bioequivalent drugs for the diagnosis.',
      eligibility: [],
      howToApply:
        'Not applicable. Ask your prescriber and pharmacist about generic nintedanib, and ask your plan what it charges for it against the brand.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx medicine list',
      sources: [trumpRx, dailymedGenerics],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Pulmonary Fibrosis and Systemic Sclerosis with ILD funds',
      operator: 'HealthWell Foundation',
      fund: 'Pulmonary Fibrosis · Systemic Sclerosis with Interstitial Lung Disease',
      status: 'closed',
      statusNote:
        'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Ofev and nintedanib are on both covered-medication lists. Which fund applies to you depends on your diagnosis, not on your medication.',
      medicare: 'eligible',
      medicareNote:
        'Medicare qualifies as the insurance these funds require. Premium assistance through either fund is limited to a Medicare Part B premium; the copay assistance applies to the prescription itself.',
      summary:
        'HealthWell runs two funds that cover Ofev, matched to the two diagnoses the label names — pulmonary fibrosis, and systemic sclerosis with interstitial lung disease. Both carry a $9,000 maximum award, the largest of any fund in this registry, and both were closed when we checked. HealthWell says replenished funds reopen "as quickly as possible" and offers alerts per fund.',
      covers:
        'When open: up to $9,000 per grant for prescription copays, or a Medicare Part B premium. Household income up to 500% of the federal poverty level on HealthWell\'s own table, adjusted for household size and cost of living.',
      eligibility: [
        'Insurance that pays part of the cost of Ofev — Medicare qualifies; discount cards do not count as insurance',
        'Household income up to 500% of the federal poverty level (HealthWell\'s own table — do not carry another program\'s dollar figures across)',
        'A pulmonary fibrosis or systemic sclerosis with ILD diagnosis, verified by a physician, nurse practitioner or physician assistant',
        'Treatment in the United States',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/pulmonary-fibrosis/',
      applyLabel: 'HealthWell Pulmonary Fibrosis fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellPf, healthWellSscIld, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained no pulmonary fibrosis, interstitial lung disease or systemic sclerosis fund. Its nearest lung entry, Pulmonary Arterial Hypertension, was closed and is a different diagnosis.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Ofev.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund and whether it is open.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'One fund was open, and it is the right one. TotalAssist\'s Pulmonary fibrosis fund was accepting applications on August 26, 2026, lists "Ofev (Nintedanib Esylate)", and pays a $3,500 guaranteed award up to $7,000 for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level adjusted for local cost of living. HealthWell\'s Pulmonary Fibrosis and Systemic Sclerosis with ILD funds also list Ofev, with a $9,000 maximum award each, and both were closed — worth alerts, because that is the largest grant in this registry. One thing to be careful about: the COPD and asthma funds are not your funds. They are separate funds with less money, they were closed, and they do not list Ofev. If a directory or a well-meaning helper points you at a COPD fund because Ofev is a lung medicine, that is the wrong door.',
  extraHelpNote:
    'Ofev sits on a Part D specialty tier, which is where Extra Help makes the largest difference: with full Extra Help a covered brand-name drug costs about $12.65 in 2026 instead of specialty-tier coinsurance. Extra Help does not depend on a fund balance and does not conflict with a TotalAssist grant. Ask Boehringer Cares how it treats Extra Help before applying there, since some manufacturer programs require Medicare applicants to pursue it first — we could not confirm whether this one does.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Ofev on Medicare in August 2026 the order is clear, because one fund was actually open: TotalAssist first, then Boehringer Cares, with Extra Help alongside both.',
      bullets: [
        'Pulmonary fibrosis diagnosis, Medicare (or Medicaid/TRICARE), income at or below 500% FPL → TotalAssist Pulmonary fibrosis fund, open when we checked.',
        'On Medicare with limited income → call Boehringer Cares on 1-800-556-8317 for the current application and income guidelines.',
        'Limited income and resources → Medicare Extra Help through Social Security; on a specialty tier this is the largest structural saving.',
        'Systemic sclerosis with ILD → set an alert on HealthWell\'s SSc-ILD fund as well as the Pulmonary Fibrosis one.',
        'Commercial insurance instead of Medicare → the Ofev savings card, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Keep two kinds of uncertainty apart here. TotalAssist was verifiably open and HealthWell verifiably closed. The Boehringer Ingelheim programs are unverified — neither confirmed open nor closed.',
      bullets: [
        'TotalAssist: the Pulmonary fibrosis fund page shows "Open" or "Closed" and the current award amounts. Fund balances change without notice.',
        'HealthWell: the Disease Funds page shows the status of both applicable funds; sign up for alerts on each.',
        'Boehringer Cares: the phone line is the reliable check while the website blocks automated access.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program applies its own rules and its own income table. Never carry a dollar figure from one program to another — each builds its table from a poverty-guideline year of its own choosing.',
      bullets: [
        'TotalAssist: government insurance that covers Ofev; income at or below 500% of the federal poverty level adjusted for your regional cost-of-living index; confirmed pulmonary fibrosis in treatment (or beginning within 60 days, or treated in the past 6 months, including active surveillance).',
        'HealthWell (when open): insurance that pays part of the cost — Medicare qualifies; income up to 500% FPL on HealthWell\'s table; diagnosis verified by your provider\'s signature.',
        'Boehringer Cares: income limit not published — ask. Medicare Part D patients may be eligible according to an April 2026 directory entry, but confirm by phone.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The TotalAssist application takes about 15 minutes with these to hand:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your exact diagnosis — idiopathic pulmonary fibrosis, another chronic fibrosing ILD, or systemic sclerosis with ILD — and its date. The diagnosis, not the medication, decides which fund matches.',
        'Your prescriber\'s name and contact details, plus the NPI if you are also applying to Boehringer Cares.',
        'Household size and annual household income, with proof — TotalAssist gives you 30 days after approval to supply it; Boehringer Cares is reported to ask for a federal tax return.',
        'Your Ofev prescription details, including strength (100 mg or 150 mg capsules).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you (the patient) apply online in about 15 minutes, or by phone on 866-512-3861, Monday–Friday 8:30am–5:30pm ET. Patient Advocate Foundation verifies the diagnosis with your provider.',
        'Boehringer Cares: you and your prescriber complete the application together and return it to the foundation.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist: you learn immediately online whether you are approved, and can use the grant right away; proof of income is due within 30 days.',
        'Boehringer Cares: ask about the decision timeline on the call — we could not confirm it from an official source, so we are not publishing a number.',
        'HealthWell (when open): approval creates a 12-month grant cycle with a pharmacy card.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'On a specialty-tier medication, the next steps are worth taking seriously rather than skimming:',
      bullets: [
        'Ask your prescriber about generic nintedanib — eleven manufacturers besides Boehringer Ingelheim now hold a capsule label, and TotalAssist says its funds cover generic and bioequivalent drugs for the diagnosis.',
        'Sign up for HealthWell alerts on both the Pulmonary Fibrosis and the SSc-ILD fund; at a $9,000 maximum, these are the largest grants in this registry.',
        'Apply for Extra Help even if you assume you earn too much — on a specialty tier it is the difference between coinsurance and about $12.65 for a covered brand drug.',
        'From January 1, 2027, Medicare\'s negotiated maximum fair price of $6,350.00 per 30-day equivalent supply applies through Part D plans — factor that into a plan comparison during the fall enrollment period.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments; on a drug that hits the cap early, this smooths a very uneven year.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your exact fibrosing lung diagnosis — IPF, another progressive fibrosing ILD, or SSc-ILD', note: 'the diagnosis decides which fund matches, not the medication' },
    { item: 'A federal tax return or other income documentation', note: 'reported as the financial documentation Boehringer Cares asks for' },
    { item: "Your prescriber's NPI", note: 'the manufacturer application asks for the prescriber licence details' },
  ],
  ifUnavailable: [
    {
      text: 'If the TotalAssist Pulmonary fibrosis fund has closed since this page was verified, set a notification for it and apply for Extra Help meanwhile — Extra Help does not depend on a fund balance and matters most on a specialty tier.',
      href: 'https://totalassist.org/notify/',
      label: 'TotalAssist notifications',
    },
    ...standardAlternatives('Ofev'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Ofev?',
      answer:
        'Yes. Ofev is a capsule you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan — generally on a specialty tier and usually with prior authorization. Part D out-of-pocket costs are capped at $2,100 in 2026, which on a drug at this price level is typically reached early in the year. From January 1, 2027 a Medicare-negotiated maximum fair price of $6,350.00 per 30-day equivalent supply applies through Part D plans. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there an Ofev patient assistance program for people on Medicare?',
      answer:
        'Boehringer Ingelheim runs the Boehringer Cares Patient Assistance Program, and the foundation\'s own therapy list includes Ofev Capsules. We could not confirm its current income limit or its Medicare rules — every Boehringer Ingelheim patient page refused automated access on August 26, 2026 — and an independent directory updated in April 2026 records that Medicare Part D patients may be eligible with the income limit unpublished. Call 1-800-556-8317 and ask directly. Meanwhile, the route we could confirm is open is the TotalAssist Pulmonary fibrosis fund.',
    },
    {
      question: 'Is there a charitable grant for Ofev right now?',
      answer:
        'Yes, as of August 26, 2026. TotalAssist\'s Pulmonary fibrosis fund was open, lists "Ofev (Nintedanib Esylate)" on its approved-medication list, and pays a $3,500 guaranteed award up to a $7,000 maximum for people with government insurance and income at or below 500% of the federal poverty level adjusted for local cost of living. HealthWell\'s Pulmonary Fibrosis and Systemic Sclerosis with ILD funds also cover Ofev, at up to $9,000 each, but both were closed to new patients. Fund balances change without notice.',
    },
    {
      question: 'I have a lung disease — can I use a COPD assistance fund for Ofev?',
      answer:
        'No, and this is the most common wrong turn with this medication. Charitable funds match your diagnosis, not the organ. TotalAssist and HealthWell each run pulmonary fibrosis funds that are separate from their COPD and asthma funds, with different money and different medication lists: on August 26, 2026 the COPD fund was closed, paid less, and did not list Ofev at all, while the pulmonary fibrosis fund was open and did. Apply to the fund that names your diagnosis.',
    },
    {
      question: 'Can I use the Ofev savings card with Medicare?',
      answer:
        'No. Boehringer Ingelheim\'s terms make the offer "only valid for commercially insured patients" and not valid where a prescription is "eligible to be reimbursed, in whole or in part, by any federal healthcare programs such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE." Federal anti-kickback rules are why every manufacturer copay card works this way.',
    },
    {
      question: 'Is there a generic for Ofev?',
      answer:
        'Yes. A DailyMed search for nintedanib returns eleven capsule label entries besides Boehringer Ingelheim\'s Ofev. TotalAssist states that its funds cover the prescription medications for a diagnosis including generic or bioequivalent drugs, so a generic does not put you outside the grant. Ask your prescriber and your plan what generic nintedanib costs on your formulary.',
    },
    {
      question: 'What is Ofev\'s Medicare negotiated price?',
      answer:
        'CMS selected Ofev for the second cycle of the Medicare Drug Price Negotiation Program and published a maximum fair price of $6,350.00 for a 30-day equivalent supply, effective January 1, 2027. A negotiated price lowers what Part D plans and their enrollees pay for the drug; it is not a pharmacy cash price, and it does not replace your plan\'s cost-sharing rules. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a> for what applies before then.',
    },
  ],
  // Ofev has no clinical peer in this registry — nothing else here treats
  // fibrosing lung disease. These are the nearest lung pages, offered for
  // navigation only; the page text is explicit that COPD and asthma funds are
  // not Ofev's funds, so the adjacency cannot be read as equivalence.
  relatedMedications: ['spiriva', 'breztri', 'trelegy'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Ofev' },
  ],
  sources: [
    label,
    dailymedGenerics,
    totalAssistPf,
    totalAssistCopd,
    SRC.totalAssistEligibility,
    SRC.totalAssistNotify,
    healthWellPf,
    healthWellSscIld,
    SRC.healthWellFunds,
    goodDays,
    biPortal,
    phrmaPpa,
    rxAssistBi,
    ofevCardTerms,
    cmsSelectedDrugFile,
    cmsMfpOfev,
    SRC.cmsMfp2027,
    trumpRx,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup). A literal, never the shared
  // CHECKED constant. Two dates to watch on re-verification: the TotalAssist
  // Pulmonary fibrosis fund status, which was the one open fund; and the
  // January 1, 2027 MFP effective date.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Ofev Assistance',
    status: 'coming-soon',
    description:
      'Applying to the open TotalAssist Pulmonary fibrosis fund, why a COPD fund is the wrong door, what to ask Boehringer Cares, and what the 2027 negotiated price changes.',
  },
  description_meta:
    'How to find financial assistance for Ofev (nintedanib) on Medicare: the open TotalAssist pulmonary fibrosis grant, the Boehringer Cares program, why COPD funds do not apply, generic nintedanib and the 2027 negotiated price — verified August 2026.',
};
