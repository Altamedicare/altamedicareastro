// ---------------------------------------------------------------------------
// Incruse Ellipta (umeclidinium) — GSK. Independently researched 2026-08-26.
// Batch 8 — a NEW slug.
//
// Incruse is the single-ingredient member of the GSK Ellipta family, and that is
// what this page is for. Anoro adds a second bronchodilator to the same molecule;
// Trelegy adds a steroid to that pair. A reader who has been prescribed one of
// the three, or moved between them, needs to know that the price, the cash
// options and the Medicare negotiation status are all different — even though
// the manufacturer program and the charitable funds are shared.
//
// The differentiating facts here:
//  • GSK sells Incruse direct for cash at $134.20 — the LOWEST published cash
//    price of any inhaler in this registry, and $88.74 less than Anoro, the
//    two-drug version of the same medicine. The federal TrumpRx site lists it at
//    $159.20, which is the same price with GSK's up-to-$25 fee folded in.
//  • An authorized generic exists: DailyMed labels "UMECLIDINIUM ELLIPTA".
//  • Incruse is NOT a Medicare-negotiated drug and is not selected for any
//    initial price applicability year — unlike Anoro (IPAY 2028), Breo (IPAY
//    2027, $67.00) and Trelegy (IPAY 2027). That negative matters precisely
//    because its siblings are on the lists.
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
  title: 'Incruse Ellipta prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dbb64747-1505-49d7-9a33-99dd402e96d3',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'INCRUSE ELLIPTA (umeclidinium) inhalation powder, an anticholinergic indicated for the maintenance treatment of COPD; not indicated for the relief of acute bronchospasm and not indicated for asthma; GlaxoSmithKline LLC',
};
const dailymedUmec = {
  title: 'DailyMed label index — umeclidinium',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=umeclidinium',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'five labelled umeclidinium products across two labelers — ANORO ELLIPTA, INCRUSE ELLIPTA and TRELEGY ELLIPTA from GSK, plus the authorized generics "UMECLIDINIUM ELLIPTA" and "UMECLIDINIUM AND VILANTEROL ELLIPTA"',
};
const gskPafProducts = {
  title: 'GSK Patient Assistance Program — prescription medicine (list of eligible products)',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the "List of eligible products" accordion naming INCRUSE ELLIPTA among 20 GSK medicines; and the screener product array assigning INCRUSE ELLIPTA the category "general"',
};
const gskPafMedicare = {
  title: 'GSK Patient Assistance Program — Medicare eligibility and enrollment',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the Medicare route for "general" category medicines: a Medicare prescription drug plan; residence in the US or Puerto Rico; "Have paid a total of $600 for prescriptions in the current calendar year"; maximum annual gross income $47,880 for one person and $64,920 for two in the 48 states and DC',
};
const gskDirect = {
  title: 'GSK Direct to You — cash-pay product list and prices',
  url: 'https://gskforyou.com/programs/direct-to-you/',
  publisher: 'GSK (dispensed by Alto Pharmacy)',
  checked: CHECKED,
  supports:
    'Incruse Ellipta offered at $134.20 and Anoro Ellipta at $222.94; "A processing and shipping fee of up to $25 will apply to each order"; "This Offer is not available to patients who wish to use insurance"; contact (800) 874-5881',
};
const trumpRx = {
  title: 'TrumpRx — Incruse Ellipta listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'Incruse Ellipta (GSK) listed at a cash price of $159.20 — the GSK Direct to You price plus the program\'s up-to-$25 processing and shipping fee',
};
const gskCopay = {
  title: 'GSK copay assistance — participating products',
  url: 'https://gskforyou.com/programs/copay-assistance/',
  publisher: 'GSK',
  checked: CHECKED,
  supports:
    'the complete copay-program list — Benlysta, Blenrep, Exdensur, Jemperli, Nucala, Ojjaara and Zejula. Incruse Ellipta is not on it',
};
const gskCoupons = {
  title: 'GSK coupons and free trial offers',
  url: 'https://gskforyou.com/programs/gsk-coupons-free-trials/',
  publisher: 'GSK',
  checked: CHECKED,
  supports:
    'Incruse Ellipta listed among the medicines with a dollars-off coupon; "May not be used by government beneficiaries, including but not limited to those enrolled in Medicare or Medicaid"; no dollar value published',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Incruse Ellipta (Umeclidinium Bromide)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Incruse Ellipta; $1,200 guaranteed / $3,500 maximum award; requires a home zip code in a designated social-vulnerability county',
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
    'the full selected-drug file dated May 26, 2026 — no Incruse Ellipta or umeclidinium-alone row for initial price applicability year 2026, 2027 or 2028, although ANORO ELLIPTA appears for IPAY 2028 and BREO ELLIPTA and TRELEGY ELLIPTA for IPAY 2027',
};

export const INCRUSE: MedicationAssistanceRecord = {
  slug: 'incruse',
  brandName: 'Incruse Ellipta',
  genericName: 'umeclidinium',
  manufacturer: 'GSK (GlaxoSmithKline)',
  // `respiratory`. COPD maintenance only, per the label — which is why Incruse
  // appears on the COPD funds and not the asthma ones.
  conditions: ['respiratory'],
  // 'lama' — a single long-acting anticholinergic with no LABA and no steroid,
  // the same class the Spiriva record carries. Adding 'lama-laba' here would be
  // wrong: that key exists for Anoro and Stiolto, which pair two bronchodilators.
  drugClass: ['lama'],
  description:
    'Incruse Ellipta is a once-daily maintenance inhaler for COPD containing one long-acting bronchodilator and nothing else. It is the simplest member of GSK\'s Ellipta family — Anoro is the same molecule with a second bronchodilator added, and Trelegy adds a steroid to that pair — and it is also the least expensive of the three to buy for cash.',
  usedFor: [
    'Maintenance treatment of chronic obstructive pulmonary disease (COPD), including chronic bronchitis and emphysema, to improve airflow',
  ],
  whyCostly:
    'Incruse Ellipta is a brand inhaler used every day indefinitely, and Part D plans generally put it on a brand tier. But it is the least expensive inhaler in this registry to buy outright: GSK sells it direct at $134.20, plus a processing and shipping fee of up to $25. For comparison, the same program prices Anoro Ellipta — Incruse plus a second bronchodilator — at $222.94. An authorized generic, "Umeclidinium Ellipta", is also labelled on DailyMed.',
  medicareContext:
    'Incruse Ellipta is an inhaler you use yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually on a brand tier. It is NOT a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Incruse or umeclidinium-alone row for 2026, 2027 or 2028. That is worth stating plainly because its siblings are on those lists — Breo Ellipta and Trelegy Ellipta for 2027, Anoro Ellipta for 2028 — so it is easy to assume the whole family is covered when it is not. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year.',
  quickAnswer: {
    verdict:
      'Yes — GSK\'s patient assistance program covers Incruse Ellipta with a Medicare route, subject to a $600 prescription-spending threshold for the calendar year. The COPD charitable funds that list Incruse were closed. The most practical lever here is price comparison: GSK\'s $134.20 cash price is the lowest of any inhaler on this site.',
    points: [
      'GSK Patient Assistance Program: Incruse Ellipta is on the published list of eligible products. Medicare route requires a Medicare drug plan, income at or below $47,880 for one person, and $600 already spent on prescriptions this calendar year.',
      'GSK Direct to You: $134.20 cash plus a fee of up to $25 — the lowest published inhaler cash price in this registry. The federal TrumpRx site lists the same inhaler at $159.20.',
      'Authorized generic: DailyMed labels "Umeclidinium Ellipta" alongside the brand.',
      'NOT a Medicare-negotiated drug for 2026, 2027 or 2028 — unlike Breo, Trelegy and Anoro.',
      'Charitable grants: TotalAssist\'s COPD fund and COPD health equity fund both list Incruse and both were closed ($1,200 guaranteed / $3,500 maximum). HealthWell\'s COPD – Medicare Access fund was closed. Good Days has no COPD fund.',
    ],
  },
  programs: [
    {
      id: 'gsk-paf',
      kind: 'manufacturer-pap',
      name: 'GSK Patient Assistance Program',
      operator: 'GSK Patient Access Programs Foundation (an independent 501(c)(3) charitable foundation)',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Incruse Ellipta appears on the program\'s published "List of eligible products".',
      medicare: 'conditional',
      medicareNote:
        'Medicare beneficiaries may apply through GSK\'s Medicare route for "general" category medicines, which is where Incruse Ellipta sits. You must have a Medicare prescription drug plan and "have paid a total of $600 for prescriptions in the current calendar year", and your income must be at or below the program\'s table. Note that GSK applies different Medicare rules to its specialty medicines — Nucala has no spending threshold but excludes Extra Help enrollees — so check the rule for the medicine you are actually applying for.',
      summary:
        'The GSK Patient Access Programs Foundation supplies certain GSK medicines at no cost to people who meet its income and insurance rules. Incruse Ellipta is one of them.',
      covers: 'Incruse Ellipta at no cost to approved patients, supplied through the program.',
      eligibility: [
        'Live in the United States or Puerto Rico',
        'Have a Medicare prescription drug plan and meet the program\'s other requirements',
        'Have paid a total of $600 for prescriptions in the current calendar year',
        'Maximum annual gross income (48 states and DC): $47,880 for one person, $64,920 for two, $81,960 for three, $99,000 for four, adding $17,040 for each additional person',
        'Higher limits apply in Alaska ($59,850 for one person) and Hawaii ($55,080); Puerto Rico limits are lower ($28,800)',
        'Not eligible for Puerto Rico\'s Government Health Plan Mi Salud, or have applied and been denied',
      ],
      requirements: [
        'Proof of household income',
        'Your Medicare prescription drug plan details',
        'Records of prescription spending this calendar year, for the $600 threshold',
        'Your prescriber\'s details — GSK enrollment forms are signed by both patient and provider',
      ],
      howToApply:
        'Start at the GSK Patient Assistance Program page and follow the Medicare route for prescription medicines. Both you and your prescriber sign the enrollment form. Call 1-866-728-4368 with questions or to have a form mailed.',
      applyUrl: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
      applyLabel: 'GSK Patient Assistance — Medicare eligibility',
      phone: '1-866-728-4368',
      sources: [gskPafProducts, gskPafMedicare],
    },
    {
      id: 'gsk-direct',
      kind: 'manufacturer-direct',
      name: 'GSK Direct to You (cash price)',
      operator: 'GSK, dispensed by Alto Pharmacy',
      status: 'open',
      statusNote:
        'Available on August 26, 2026 with Incruse Ellipta priced at $134.20, plus "a processing and shipping fee of up to $25" per order.',
      medicare: 'conditional',
      medicareNote:
        'GSK states: "This Offer is not available to patients who wish to use insurance." A Medicare beneficiary may still buy this way by paying cash outside the Part D benefit — but that spending will not count toward your plan\'s deductible or the annual out-of-pocket cap, so it is only worth doing if the cash price genuinely beats your plan\'s cost-sharing. GSK\'s own advice on the page is "If you have insurance, check with your pharmacy, your price may be lower."',
      summary:
        'The most useful number on this page for many readers. $134.20 is a real, published, manufacturer-set cash price, and it is the benchmark to measure your plan\'s copay or coinsurance against.',
      covers: 'The medication at the published price, shipped to you. Not insurance and not a copay reduction.',
      eligibility: [
        'Not using prescription insurance for this fill',
        'A valid prescription sent by your healthcare provider',
      ],
      howToApply:
        'Your provider sends the prescription to the program pharmacy; Alto Pharmacy confirms receipt and guides you through the next steps. Call Alto on (800) 874-5881.',
      applyUrl: 'https://gskforyou.com/programs/direct-to-you/',
      applyLabel: 'GSK Direct to You prices',
      phone: '(800) 874-5881',
      sources: [gskDirect, trumpRx],
    },
    {
      id: 'gsk-coupon',
      kind: 'manufacturer-savings',
      name: 'Incruse Ellipta dollars-off coupon',
      operator: 'GSK',
      status: 'limited',
      statusNote:
        'Listed on GSK\'s coupons page on August 26, 2026. GSK publishes no dollar value — the amount appears only through the site\'s coupon finder — so no figure is reproduced here.',
      medicare: 'excluded',
      medicareNote:
        'GSK\'s terms: the coupon "may not be used by government beneficiaries, including but not limited to those enrolled in Medicare or Medicaid." There is also no GSK copay program for Incruse — that list covers seven specialty and oncology medicines and no Ellipta inhaler.',
      summary:
        'A commercial discount for people with private or employer prescription insurance. Not a route for anyone with Medicare.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
      ],
      howToApply:
        'Commercially insured patients can use the coupon finder on GSK\'s coupons page. Medicare beneficiaries should use the patient assistance program or compare the cash price.',
      applyUrl: 'https://gskforyou.com/programs/gsk-coupons-free-trials/',
      applyLabel: 'GSK coupons and offers',
      sources: [gskCoupons, gskCopay, SRC.oigCoupons],
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
        '"Incruse Ellipta (Umeclidinium Bromide)" is named on the COPD approved-medication list, as are the other Ellipta inhalers and a long list of generics. Both applicable funds were closed when we checked.',
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
        'HealthWell runs a COPD fund designed for Medicare beneficiaries; it was closed when we checked. HealthWell says replenished funds reopen as quickly as possible and offers real-time alerts.',
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
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Incruse Ellipta.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Incruse Ellipta sits on the same charitable funds as the rest of the GSK COPD family and, on August 26, 2026, they were all closed. TotalAssist lists it on the COPD fund and the COPD health equity fund, each paying $1,200 guaranteed up to $3,500; HealthWell\'s COPD – Medicare Access fund was closed as well; Good Days runs no COPD fund at all. Because the charitable side is shut, the routes that actually move money for this medication are the ones that do not depend on a fund balance: GSK\'s patient assistance program, the authorized generic, Extra Help, and the $134.20 cash price — which for Incruse is a genuinely competitive number rather than a last resort. Set alerts on both foundations so you hear if a fund reopens.',
  extraHelpNote:
    'Extra Help and the GSK program can be held together — GSK\'s Medicare route for Incruse gates on the $600 prescription-spending threshold, not on your subsidy status. Apply for Extra Help on its own merits: with full Extra Help a covered brand-name drug costs about $12.65 in 2026, which is well below even the $134.20 cash price for a month of Incruse.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Incruse has a real manufacturer program and the cheapest published cash price of any inhaler on this site. Work them in this order:',
      bullets: [
        'Limited income and $600 already spent on prescriptions this year → the GSK Patient Assistance Program.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Ask your prescriber and plan about the authorized generic, umeclidinium.',
        'Compare your plan\'s cost-sharing against the $134.20 GSK cash price — for a lower-priced inhaler this comparison flips more often than people expect.',
        'COPD diagnosis → set alerts on the TotalAssist and HealthWell COPD funds (all closed when checked).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One manufacturer program, three charitable funds, one cash price.',
      bullets: [
        'GSK Patient Assistance: the eligible-products list and the Medicare eligibility page are authoritative and both are cited here.',
        'TotalAssist: the COPD and COPD health equity fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the disease-funds list shows the COPD – Medicare Access fund and its status.',
        'GSK Direct to You: prices are published on the program page and can change without notice.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The GSK spending threshold is the gate most people do not expect:',
      bullets: [
        'GSK Patient Assistance: a Medicare drug plan; income at or below $47,880 for one person or $64,920 for two in the 48 states and DC; and $600 already paid for prescriptions this calendar year.',
        'TotalAssist (when open): government insurance covering Incruse; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed COPD diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified COPD diagnosis, and treatment in the United States.',
        'GSK Direct to You: no income test — the only condition is that you are not using insurance for that fill.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'What each route will ask for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your prescription spending so far this calendar year, for GSK\'s $600 threshold.',
        'Household size and annual gross income, plus proof.',
        'Your COPD diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your prescriber\'s name, office address and phone.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'GSK Patient Assistance: both you and your prescriber sign the enrollment form.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'GSK Direct to You: your provider sends the prescription; Alto Pharmacy contacts you.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'GSK Patient Assistance: the foundation reviews income and insurance documentation; approved medicine is supplied through the program.',
        'Extra Help: Social Security notifies you by mail; your plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'GSK Direct to You: no determination — it is a purchase, not an application.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'For a medication at this price point, the cash comparison is usually the answer:',
      bullets: [
        'Ask about the authorized generic — DailyMed labels "Umeclidinium Ellipta" alongside GSK\'s brand.',
        'Run the numbers on $134.20 (GSK Direct to You, plus a fee of up to $25) or $159.20 (TrumpRx) against your plan\'s copay or coinsurance. Remember that cash spending does not count toward your Part D out-of-pocket cap.',
        'If the $600 threshold is blocking you, it is a calendar-year test that resets and is easier to meet later in the year.',
        'Do not wait for a Medicare negotiated price on this one — Incruse is not on any CMS selected-drug list, even though Breo, Trelegy and Anoro are.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Proof of prescription spending this calendar year',
      note: 'GSK\'s Medicare route requires $600 already paid — plan Explanation of Benefits statements or a pharmacy year-to-date printout',
    },
    { item: 'Confirmation that the prescription is for COPD', note: 'Incruse is not indicated for asthma, and the charitable funds are diagnosis-specific' },
  ],
  ifUnavailable: [
    {
      text: 'Compare the published cash prices against your plan before assuming insurance is cheaper: GSK Direct to You lists Incruse Ellipta at $134.20 plus a fee of up to $25, and the federal TrumpRx site lists it at $159.20.',
      href: 'https://gskforyou.com/programs/direct-to-you/',
      label: 'GSK Direct to You',
    },
    {
      text: 'Ask your prescriber and plan about the authorized generic — DailyMed labels "Umeclidinium Ellipta" alongside GSK\'s brand.',
    },
    ...standardAlternatives('Incruse Ellipta'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Incruse Ellipta?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Incruse Ellipta, usually on a brand tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there an Incruse Ellipta patient assistance program for people on Medicare?',
      answer:
        'Yes. Incruse Ellipta is on the GSK Patient Assistance Program\'s published list of eligible products and the program has a Medicare route. The requirement people miss is the spending threshold: for GSK\'s "general" medicines, which includes Incruse, you must have "paid a total of $600 for prescriptions in the current calendar year". You also need a Medicare drug plan and income at or below $47,880 for one person in the 48 states and DC.',
    },
    {
      question: 'Is Incruse Ellipta part of Medicare drug price negotiation?',
      answer:
        'No, and this is worth checking rather than assuming, because three of its close relatives are. CMS\'s selected-drug file has no Incruse Ellipta or umeclidinium-alone row for 2026, 2027 or 2028. Breo Ellipta and Trelegy Ellipta were selected for initial price applicability year 2027, and Anoro Ellipta for 2028 — but Incruse was not selected in any cycle. Your cost is set by your plan\'s tier and cost-sharing.',
    },
    {
      question: 'How is Incruse Ellipta different from Anoro Ellipta?',
      answer:
        'Incruse contains one long-acting bronchodilator, umeclidinium. Anoro contains the same umeclidinium plus a second bronchodilator, vilanterol. Neither contains a steroid, and both are licensed for COPD only. The practical differences for cost are real: GSK sells Incruse direct at $134.20 and Anoro at $222.94, Anoro has been selected for Medicare price negotiation in 2028 and Incruse has not, and each has its own authorized generic. The GSK assistance program and the charitable funds treat them the same way.',
    },
    {
      question: 'Should I buy Incruse Ellipta with cash instead of using Medicare?',
      answer:
        'It is worth checking, and more often worth it here than for pricier inhalers. GSK sells Incruse direct at $134.20 plus a processing and shipping fee of up to $25; the federal TrumpRx site lists it at $159.20, which is the same price with the fee included. GSK\'s terms say the offer "is not available to patients who wish to use insurance", and cash spending will not count toward your Part D deductible or annual out-of-pocket cap. If your plan charges coinsurance on a brand tier, compare carefully.',
    },
    {
      question: 'Is there a generic for Incruse Ellipta?',
      answer:
        'Yes, an authorized generic. DailyMed lists five labelled umeclidinium products across two labelers, including "Umeclidinium Ellipta" alongside GSK\'s Incruse Ellipta. Whether it lowers your copay depends on your plan\'s formulary, so ask your prescriber and plan directly. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['anoro', 'breo', 'spiriva', 'trelegy'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Incruse Ellipta' },
  ],
  sources: [
    label,
    dailymedUmec,
    gskPafProducts,
    gskPafMedicare,
    gskDirect,
    trumpRx,
    gskCopay,
    gskCoupons,
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
  // Per-record verification date. Re-verify the $134.20 GSK Direct to You price
  // first — it is the number this page leans on hardest — and re-check the CMS
  // file, since the negative here is what distinguishes Incruse from its siblings.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Incruse Ellipta Assistance',
    status: 'coming-soon',
    description:
      'The GSK $600 threshold, why the $134.20 cash price often beats a brand tier, the authorized generic, and why Incruse is not a negotiated drug when Breo, Trelegy and Anoro are.',
  },
  description_meta:
    'How to lower the cost of Incruse Ellipta (umeclidinium) on Medicare: the GSK patient assistance $600 threshold, the $134.20 GSK cash price, the authorized generic, and COPD fund status — verified August 2026.',
};
