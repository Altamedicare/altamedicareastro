// ---------------------------------------------------------------------------
// Xolair (omalizumab) — Genentech. Independently researched 2026-08-26.
// Batch 8 — a NEW slug.
//
// Xolair was the medication the project repeatedly deferred, and the research
// justifies the page on its own terms rather than on the deferral.
//
// 1. THE GENENTECH PATIENT FOUNDATION IS UNLIKE EVERY OTHER PAP IN THIS REGISTRY.
//    Its income limits are FLAT DOLLARS, not a percentage of the federal poverty
//    level: under $75,000 for one person, rising by $25,000 per additional
//    household member. And it has a third qualifying route that no other program
//    here offers — "I have insurance that covers my Genentech medicine, but the
//    out-of-pocket maximum set by my health insurance plan is more than 7.5% of
//    my yearly income." That 7.5% test is the door a Medicare beneficiary walks
//    through, and it is the single most useful fact on this page.
//
// 2. XOLAIR IS SELECTED FOR MEDICARE NEGOTIATION (IPAY 2028) AND CARRIES A PART B
//    BILLING CODE. The CMS file lists Xolair with HCPCS J2357 — a Part B code —
//    while the label also supports self-administration by prefilled syringe or
//    autoinjector. Which benefit pays for your doses genuinely depends on how and
//    where you receive them, and that changes which assistance applies.
//
// 3. TAXONOMY — the question the project reserved this medication to settle.
//    DECISION: conditions ['respiratory'], drugClass ['biologic']. NO new key.
//    Applying the Ofev test — "topic similarity is not enough to create a new
//    condition key; incorrect program matching is" — the evidence points the
//    other way from Ofev:
//      • Ofev needed `lung-disease` because tagging it `respiratory` would have
//        matched it to COPD and asthma funds that DO NOT list it. Wrong matching.
//      • Xolair tagged `respiratory` matches the TotalAssist Asthma fund and the
//        HealthWell Asthma fund, both of which DO list Xolair. Correct matching.
//    The label's other indications (chronic spontaneous urticaria, nasal polyps,
//    IgE-mediated food allergy) are carried in `usedFor` and, for CSU, as an
//    explicit charitable program entry — so the reader loses nothing. Adding an
//    urticaria or allergy key would create a browse view holding one medication
//    and would not change a single fund match.
//    `autoimmune` was considered and REJECTED: it would match Xolair to
//    HealthWell's AutoImmune – Medicare Access fund, a different diagnosis set
//    that does not list it. That would be exactly the incorrect matching the rule
//    forbids.
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
  title: 'Xolair prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f6a2191-adfb-48b9-9bfa-0d9920479f0d',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"XOLAIR is an anti-IgE antibody"; four indications — moderate to severe persistent asthma; chronic rhinosinusitis with nasal polyps; IgE-mediated food allergy; and chronic spontaneous urticaria; injection 75 mg/0.5 mL, 150 mg/mL and 300 mg/2 mL in prefilled syringes and autoinjectors, plus 150 mg lyophilized powder per vial; self-administration possible once therapy is established; Genentech, Inc. (rev. 8/13/2026)',
};
const dailymedOmalizumab = {
  title: 'DailyMed label index — omalizumab',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=omalizumab',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled omalizumab product — Genentech\'s XOLAIR. No generic and no biosimilar is labelled',
};
const genentechFoundation = {
  title: 'Genentech Patient Foundation — overview and eligibility',
  url: 'https://www.gene.com/patients/patient-foundation',
  publisher: 'Genentech',
  checked: CHECKED,
  supports:
    'the foundation "gives free Genentech medicine to people who don\'t have insurance coverage or who have financial concerns"; Foundation Specialists on (888) 941-3331 (Monday–Friday, 6am–5pm PT); fax (833) 999-4363',
};
const genentechEligibility = {
  title: 'Genentech Patient Foundation — eligibility criteria (Overview brochure)',
  url: 'https://www.gene.com/assets/frontend/downloads/pdf/Genentech-Patient-Foundation-Overview-Bifold.pdf',
  publisher: 'Genentech',
  checked: CHECKED,
  supports:
    'the three qualifying groups verbatim — "I have no insurance."; "I have insurance, but it doesn\'t cover my Genentech medicine."; and "I have insurance that covers my Genentech medicine, but the out-of-pocket maximum set by my health insurance plan is more than 7.5% of my yearly income." Plus the flat-dollar income table: 1 person under $75,000; 2 under $100,000; 3 under $125,000; 4 under $150,000; "For households with more than 4 people, add $25,000 to the yearly income limit for each additional person"',
};
const genentechMedicines = {
  title: 'Genentech Patient Foundation — our participating medicines',
  url: 'https://www.gene.com/patients/patient-foundation/our-participating-medicines',
  publisher: 'Genentech',
  checked: CHECKED,
  supports: 'the list of 36 participating medicines, which includes Xolair',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Xolair (Omalizumab)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCsu = {
  title: 'TotalAssist — Chronic spontaneous urticaria (CSU) fund',
  url: 'https://totalassist.org/funds/chronic-spontaneous-urticaria-csu/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Xolair (Omalizumab)" on the approved-medication list; $2,600 guaranteed / $5,200 maximum award — more than double the asthma fund\'s award for the same medication',
};
const totalAssistAsthmaHe = {
  title: 'TotalAssist — Asthma health equity fund',
  url: 'https://totalassist.org/funds/asthma-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; Xolair on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Asthma" CLOSED and "Urticaria" CLOSED. Both of Xolair\'s main HealthWell routes were shut, and there is no food-allergy or nasal-polyp fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no asthma, urticaria, nasal polyp or food-allergy program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the selected-drug file dated May 26, 2026: XOLAIR (omalizumab), NDC-9s 50242-0040, 50242-0214, 50242-0215 and 50242-0227, HCPCS code J2357, IPAY 2028, MFP effective date 01/01/2028, "Added for IPAY 2028 announcement" — the "Single MFP per 30 DES" column is EMPTY, so no negotiated price has been published',
};
const cms2028FactSheet = {
  title: 'Selected Drug List for Initial Price Applicability Year 2028 (fact sheet)',
  url: 'https://www.cms.gov/files/document/factsheet-medicare-negotiation-selected-drug-list-ipay-2028.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'the 15 drugs selected for the third cycle of negotiation, with negotiated prices to become effective beginning in 2028',
};

export const XOLAIR: MedicationAssistanceRecord = {
  slug: 'xolair',
  brandName: 'Xolair',
  genericName: 'omalizumab',
  manufacturer: 'Genentech',
  // TAXONOMY DECISION (see the header note). `respiratory` only, and NO new
  // condition key. The Ofev test asks whether the existing vocabulary produces
  // INCORRECT program matching, not whether it is exhaustive. Tagging Xolair
  // `respiratory` matches it to the asthma funds, which genuinely list it — so
  // the matching is correct. The chronic spontaneous urticaria fund is carried
  // explicitly as a program entry below rather than through a new key, and
  // `autoimmune` was rejected because it would match Xolair to HealthWell's
  // AutoImmune fund, which does not list it.
  conditions: ['respiratory'],
  // 'biologic'. The label calls it "an anti-IgE antibody" — an injected
  // monoclonal antibody targeting one part of the immune system, which is
  // exactly what the existing key describes. No new class key is needed.
  drugClass: ['biologic'],
  description:
    'Xolair is an injected biologic — the label calls it "an anti-IgE antibody" — that blocks immunoglobulin E, the antibody behind allergic reactions. It is unusual among the medications on this site for treating four quite different conditions, and that matters practically: the charitable fund you qualify for, and the size of its award, depend on which of them you were prescribed it for.',
  usedFor: [
    'Moderate to severe persistent asthma in adults and children aged 6 and over with a positive allergy test and symptoms not controlled by inhaled corticosteroids',
    'Chronic rhinosinusitis with nasal polyps in adults, as add-on maintenance treatment when nasal corticosteroids have not worked well enough',
    'IgE-mediated food allergy in adults and children aged 1 and over, to reduce allergic reactions including anaphylaxis after accidental exposure — used alongside food allergen avoidance, not instead of it',
    'Chronic spontaneous urticaria (long-lasting hives with no identified cause) in people aged 12 and over who remain symptomatic despite antihistamines',
  ],
  whyCostly:
    'Xolair is a brand-only biologic with no generic and no biosimilar — DailyMed labels exactly one omalizumab product. Doses are weight- and IgE-based, so two people on Xolair can be prescribed very different quantities, and the cost follows. Where the drug lands on your Medicare coverage adds a second variable: the CMS negotiation file lists Xolair with a Part B billing code, while the label also supports self-injection at home with a prefilled syringe or autoinjector. Part B and Part D share costs differently, so the same medicine can produce quite different bills depending on how you receive it.',
  medicareContext:
    'Xolair can reach you through either Medicare benefit, and this is the first thing to establish. If you self-inject at home with a prefilled syringe or autoinjector, it is normally a Part D or Medicare Advantage drug-plan matter, generally on a specialty tier with prior authorization. If it is administered in a clinic or infusion setting, it may be billed under Part B — CMS\'s own negotiation file lists Xolair with HCPCS code J2357, which is a Part B code. That distinction changes your cost-sharing, and it changes which help applies: Extra Help is a Part D subsidy and does nothing for a Part B coinsurance, whereas a Medigap policy or a Medicare Savings Program can. Ask your prescriber\'s office which benefit your doses run through before planning around a figure. Xolair is also one of the 15 drugs CMS selected for the third negotiation cycle, with any negotiated price effective January 1, 2028; no price has been published yet.',
  quickAnswer: {
    verdict:
      'Yes, and through a route most manufacturer programs do not offer. The Genentech Patient Foundation covers Xolair and lets people who already have insurance qualify if their plan\'s out-of-pocket maximum exceeds 7.5% of their yearly income — which is how a Medicare beneficiary gets in. Its income limits are flat dollar figures, not percentages of the poverty level. Every applicable charitable fund was closed.',
    points: [
      'Genentech Patient Foundation: Xolair is a participating medicine. Three qualifying routes, and the third is the one for insured people — "the out-of-pocket maximum set by my health insurance plan is more than 7.5% of my yearly income."',
      'Income limits are flat dollars: under $75,000 for one person, under $100,000 for two, under $125,000 for three, under $150,000 for four, adding $25,000 per additional person. No FPL percentage is involved.',
      'Part B or Part D? CMS lists Xolair with HCPCS J2357, a Part B code, but the label also supports self-injection at home. Establish which benefit pays before you plan — Extra Help only helps on the Part D side.',
      'Medicare negotiation: Xolair is a SELECTED drug for initial price applicability year 2028. No negotiated price has been published yet.',
      'Charitable grants: TotalAssist lists Xolair on its Asthma fund ($1,200/$3,500) AND its Chronic spontaneous urticaria fund ($2,600/$5,200) — all closed. If you have CSU, that is the larger award and the one to set an alert on.',
      'No generic and no biosimilar: DailyMed labels exactly one omalizumab product.',
    ],
  },
  programs: [
    {
      id: 'genentech-foundation',
      kind: 'manufacturer-pap',
      name: 'Genentech Patient Foundation',
      operator: 'Genentech',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Xolair is one of 36 participating medicines. Genentech states it "reserves the right to modify or discontinue the program at any time and to verify the accuracy of information submitted".',
      medicare: 'conditional',
      medicareNote:
        'Medicare beneficiaries can qualify, and the route is unusual enough to be worth reading twice. Genentech does not ask whether you have Medicare; it asks which of three situations you are in. The third — "I have insurance that covers my Genentech medicine, but the out-of-pocket maximum set by my health insurance plan is more than 7.5% of my yearly income" — is written for insured people, and a Part D specialty tier or a Part B coinsurance on a biologic will often clear that bar. Work out your plan\'s out-of-pocket maximum and 7.5% of your gross yearly income before you call, because that comparison is the whole test. Note also that Genentech uses flat dollar income limits rather than a percentage of the federal poverty level, so the figures here are not comparable with the FPL-based limits other programs on this site publish.',
      summary:
        'A genuine free-medicine program covering Xolair, and the only one in this registry with an out-of-pocket-maximum test rather than a pure income test. That design is what makes it reachable for people whose income is ordinary but whose specialty-drug cost-sharing is not.',
      covers: 'Free Genentech medicine, including Xolair, for people who meet one of the three qualifying situations and the income limits.',
      eligibility: [
        'You are in one of three situations: you have no insurance; you have insurance but it does not cover your Genentech medicine; or you have insurance that covers it but your plan\'s out-of-pocket maximum is more than 7.5% of your yearly income',
        'Total yearly income under $75,000 for one person, $100,000 for two, $125,000 for three, or $150,000 for four',
        'For households of more than four, add $25,000 to the income limit for each additional person',
        'Genentech describes the program as inclusive "no matter their race, citizenship/immigration status, age, disability, gender identity or sexual orientation"',
      ],
      requirements: [
        'Proof of your total yearly household income',
        'Your insurance details, including your plan\'s out-of-pocket maximum if you are applying under the 7.5% route',
        'Your prescriber\'s details and prescription information',
      ],
      howToApply:
        'Call a Foundation Specialist on (888) 941-3331 (Monday–Friday, 6am–5pm PT) — Genentech offers support in many languages — or start from the Patient Foundation pages. Applications can also be faxed to (833) 999-4363. Have your plan\'s out-of-pocket maximum and your yearly income to hand, because the 7.5% comparison is what decides an insured applicant\'s eligibility.',
      applyUrl: 'https://www.gene.com/patients/patient-foundation',
      applyLabel: 'Genentech Patient Foundation',
      phone: '(888) 941-3331',
      sources: [genentechFoundation, genentechEligibility, genentechMedicines],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Asthma and Chronic spontaneous urticaria funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Asthma · Asthma health equity · Chronic spontaneous urticaria (CSU)',
      status: 'closed',
      statusNote:
        'All three applicable funds were closed to new applicants on August 26, 2026. The awards differ substantially: the Asthma funds pay $1,200 guaranteed up to $3,500, while the CSU fund pays $2,600 guaranteed up to $5,200 — for the same medication.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open. Note that a fund pays toward what your insurance leaves you, so if your Xolair runs through Part B rather than Part D, say so on the application.',
      summary:
        'The most useful thing to know here is that Xolair sits on two different funds with two different award sizes, and which one applies depends on your diagnosis rather than your prescription. If you were prescribed Xolair for chronic spontaneous urticaria, the CSU fund is worth more than twice the asthma fund. Both were closed when we checked, so set alerts on the right one.',
      covers:
        'When open: for asthma, $1,200 guaranteed and up to $3,500 maximum; for chronic spontaneous urticaria, $2,600 guaranteed and up to $5,200 maximum. Covers medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'A confirmed diagnosis matching the fund — asthma, or chronic spontaneous urticaria — in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
        'The asthma health-equity fund additionally requires a home zip code in a designated social-vulnerability county',
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify — and sign up for the fund matching your diagnosis, since the awards differ. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistAsthma, totalAssistCsu, totalAssistAsthmaHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Asthma and Urticaria funds',
      operator: 'HealthWell Foundation',
      fund: 'Asthma · Urticaria',
      status: 'closed',
      statusNote:
        'Both funds that could cover Xolair were closed on August 26, 2026. HealthWell runs no fund for nasal polyps and none for food allergy, so two of Xolair\'s four indications have no HealthWell route at all.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Asthma and Urticaria funds are the two that could apply to Xolair; neither was open when we checked.',
      summary:
        'HealthWell mirrors the TotalAssist picture — a fund for asthma and a fund for urticaria, both closed. Worth setting alerts on both if your diagnosis could match either, since HealthWell reopens funds as money is replenished.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for the covered diagnosis.',
      eligibility: ['A confirmed asthma or urticaria diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
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
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained 57 programs and none matched any of Xolair\'s four indications — no asthma, urticaria, nasal polyp or food-allergy program.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Xolair.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Xolair\'s charitable picture is shaped by its four indications, and it pays to know which one is yours. TotalAssist covers it on the Asthma fund ($1,200 guaranteed, $3,500 maximum), on the Asthma health equity fund at the same level, and on the Chronic spontaneous urticaria fund at $2,600 guaranteed and $5,200 maximum — more than double, for the same medicine. HealthWell mirrors this with an Asthma fund and a Urticaria fund. Every one of those funds was closed on August 26, 2026, and Good Days has none. Two indications — nasal polyps and IgE-mediated food allergy — have no charitable fund on any of the three foundations, which is a real gap rather than an oversight in our checking. So: set your alert on the fund that matches your diagnosis, not the first one you find, and treat the Genentech Patient Foundation as the primary route, because its 7.5% out-of-pocket test does not depend on a fund balance.',
  extraHelpNote:
    'Extra Help is worth applying for, but be clear about what it can and cannot do for this medication. Extra Help is a Part D subsidy: if you self-inject Xolair at home and it runs through your drug plan, it lowers your cost-sharing, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026. If your Xolair is administered in a clinic and billed under Part B, Extra Help does not touch that coinsurance — a Medigap policy or a Medicare Savings Program is the tool for the Part B side. Find out which benefit pays for your doses first; it determines which of these is worth your time. Note also that Genentech\'s program does not exclude Extra Help enrollees, so holding both is possible.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Xolair on Medicare in August 2026, two questions come before any application: which benefit pays, and which diagnosis you were prescribed it for.',
      bullets: [
        'Ask your prescriber\'s office whether your doses are billed under Part B or Part D. It changes your cost-sharing and which help applies.',
        'Work out whether your plan\'s out-of-pocket maximum exceeds 7.5% of your yearly income — if it does, apply to the Genentech Patient Foundation.',
        'Limited income and resources, and Part D coverage → Medicare Extra Help through Social Security.',
        'Chronic spontaneous urticaria → set an alert on the TotalAssist CSU fund, which pays more than double the asthma fund.',
        'Asthma → set alerts on the TotalAssist and HealthWell asthma funds (all closed when checked).',
        'Part B coverage with high coinsurance → look at Medigap and Medicare Savings Programs rather than Extra Help.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer foundation was open; every charitable fund was closed.',
      bullets: [
        'Genentech Patient Foundation: open on the checked date. Genentech reserves the right to modify or discontinue the program at any time.',
        'TotalAssist: the Asthma and Chronic spontaneous urticaria fund pages each show "Open" or "Closed" and their own award amounts.',
        'HealthWell: the disease-funds list shows the Asthma and Urticaria funds and their status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Genentech\'s test is different from every other program on this site, so read it carefully:',
      bullets: [
        'Genentech Patient Foundation: you must be in one of three situations — no insurance; insurance that does not cover Xolair; or insurance that does cover it but with an out-of-pocket maximum above 7.5% of your yearly income. Income under $75,000 for one person, $100,000 for two, $125,000 for three, $150,000 for four, plus $25,000 per additional person.',
        'These are flat dollar limits, not percentages of the federal poverty level, so do not compare them with the FPL figures other programs publish.',
        'TotalAssist (when open): government insurance covering Xolair; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed diagnosis matching the specific fund.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026 — and it only helps on the Part D side.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Two documents matter more here than on most pages:',
      bullets: [
        'Your plan\'s out-of-pocket maximum, in dollars. This is the number Genentech compares against 7.5% of your yearly income, and it is on your plan documents rather than your card.',
        'Your total yearly household income and household size.',
        'Which of Xolair\'s indications you were prescribed it for — asthma, nasal polyps, food allergy or chronic spontaneous urticaria. The charitable funds and their award sizes differ by diagnosis.',
        'Whether your doses are self-injected at home or given in a clinic, and which Medicare benefit is billed.',
        'Medicare card, drug-plan card, and your prescriber\'s name, office and phone.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Genentech Patient Foundation: call (888) 941-3331 and a Foundation Specialist will work through it with you; support is offered in many languages. Applications can also be faxed to (833) 999-4363.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; apply to the fund matching your diagnosis.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Genentech Patient Foundation: the foundation verifies the information you submit; a Foundation Specialist can tell you the current timeframe when you call.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'HealthWell (when open): a decision once your provider returns the diagnosis verification.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'For a biologic with no generic, the structural fixes matter more than shopping around:',
      bullets: [
        'Re-run the Genentech 7.5% test carefully before accepting a no — people often compare against take-home pay rather than yearly income, or use their deductible rather than their out-of-pocket maximum.',
        'Ask whether your doses could be administered in a different setting, and what that would do to your share. The Part B / Part D difference is the largest single lever on this medication.',
        'If you are on Part B, look at Medigap and Medicare Savings Programs — these are the tools that reduce a Part B coinsurance, and Extra Help is not.',
        'Enrol in the Medicare Prescription Payment Plan if Xolair runs through Part D; it spreads the cost across the year rather than lowering it.',
        'Do not wait for a generic — DailyMed labels exactly one omalizumab product, and no biosimilar exists.',
        'Watch for the Medicare negotiated price: Xolair is selected for 2028, though no price has been published yet.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Your plan\'s annual out-of-pocket maximum, in dollars',
      note: 'the Genentech Patient Foundation compares this against 7.5% of your yearly income — it is the deciding number for insured applicants',
    },
    {
      item: 'Which of Xolair\'s four indications you were prescribed it for',
      note: 'the TotalAssist CSU fund pays $2,600/$5,200 while the asthma funds pay $1,200/$3,500',
    },
    { item: 'Whether your doses are self-injected at home or given in a clinic', note: 'this decides whether Part B or Part D pays, and therefore which assistance applies' },
  ],
  ifUnavailable: [
    {
      text: 'If your Xolair is billed under Medicare Part B, Extra Help will not reduce the coinsurance — a Medigap policy or a Medicare Savings Program is the tool for that side. Establish which benefit pays before choosing where to spend your effort.',
    },
    {
      text: 'There is no generic or biosimilar to switch to — DailyMed labels exactly one omalizumab product — so a formulary or tier exception through your plan is the alternative worth raising with your prescriber.',
    },
    ...standardAlternatives('Xolair'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Xolair?',
      answer:
        'Yes, but through one of two different benefits, and which one matters. If you self-inject at home with a prefilled syringe or autoinjector, Xolair is normally covered by Medicare Part D or a Medicare Advantage drug plan, generally on a specialty tier with prior authorization. If it is administered in a clinic, it may be billed under Part B — CMS\'s own negotiation file lists Xolair with HCPCS code J2357, a Part B code. Ask your prescriber\'s office which applies to you, because it changes your cost-sharing and which assistance is useful.',
    },
    {
      question: 'How can I qualify for the Genentech Patient Foundation if I already have Medicare?',
      answer:
        'Through Genentech\'s third qualifying route, which is written for insured people: "I have insurance that covers my Genentech medicine, but the out-of-pocket maximum set by my health insurance plan is more than 7.5% of my yearly income." So the test is not whether you have coverage — it is whether your coverage still leaves you exposed to more than 7.5% of your income. Alongside that, your total yearly income must be under $75,000 for one person, $100,000 for two, $125,000 for three or $150,000 for four, plus $25,000 for each additional person. Those are flat dollar limits, not percentages of the federal poverty level.',
    },
    {
      question: 'Why does the charity award for Xolair differ so much between funds?',
      answer:
        'Because the funds are built around diagnoses, not medicines, and Xolair treats several. TotalAssist lists Xolair on its Asthma fund, which pays $1,200 guaranteed up to $3,500, and on its Chronic spontaneous urticaria fund, which pays $2,600 guaranteed up to $5,200 — more than double, for exactly the same drug. If you were prescribed Xolair for chronic hives, applying to the asthma fund would leave money on the table. Set your alert on the fund that matches your diagnosis.',
    },
    {
      question: 'Is Xolair part of Medicare drug price negotiation?',
      answer:
        'It has been selected, but no price exists yet. Xolair is one of the 15 drugs on CMS\'s selected-drug list for initial price applicability year 2028, listed with HCPCS code J2357. Selection means negotiation happens first and any resulting maximum fair price takes effect January 1, 2028. CMS\'s published data file carries an empty price column for Xolair today, so anyone quoting you a negotiated Xolair price now is quoting something CMS has not published.',
    },
    {
      question: 'Is there a generic or biosimilar for Xolair?',
      answer:
        'No. DailyMed lists exactly one labelled omalizumab product — Genentech\'s Xolair. There is no generic and no biosimilar, so there is no lower-tier version to ask about. That is part of why the Genentech Patient Foundation\'s 7.5% route matters so much here: for a biologic with no competition, the structural routes are the ones that move money.',
    },
    {
      question: 'Is there a charitable grant for Xolair right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist\'s Asthma fund, Asthma health equity fund and Chronic spontaneous urticaria fund were all closed, and HealthWell\'s Asthma and Urticaria funds were closed too. Good Days runs no applicable fund. Worth knowing: two of Xolair\'s four indications — nasal polyps and IgE-mediated food allergy — have no fund on any of the three foundations at all, so if that is your diagnosis the Genentech Patient Foundation is effectively the route. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['nucala', 'tezspire', 'dupixent', 'breo'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Xolair' },
  ],
  sources: [
    label,
    dailymedOmalizumab,
    genentechFoundation,
    genentechEligibility,
    genentechMedicines,
    totalAssistAsthma,
    totalAssistCsu,
    totalAssistAsthmaHe,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    cms2028FactSheet,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the Genentech eligibility brochure
  // first: the 7.5% out-of-pocket-maximum route and the flat-dollar income table
  // are what make this record useful, and both live in a PDF Genentech revises
  // without notice. Then re-check the CMS file for a published 2028 price.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Xolair Assistance',
    status: 'coming-soon',
    description:
      'The Genentech 7.5% out-of-pocket test and how to run it, why the urticaria fund pays double the asthma fund, and how to tell whether your Xolair is a Part B or a Part D drug.',
  },
  description_meta:
    'How to lower the cost of Xolair (omalizumab) on Medicare: the Genentech Patient Foundation\'s 7.5% out-of-pocket route and flat-dollar income limits, why the urticaria grant is double the asthma grant, Part B vs Part D, and 2028 negotiation — verified August 2026.',
};
