// ---------------------------------------------------------------------------
// Breztri Aerosphere (budesonide / glycopyrrolate / formoterol fumarate) —
// AstraZeneca. Independently researched 2026-08-26. Every program below was
// read on the official source cited with it. Batch 2 (spec §24 #10) — a NEW
// page. Shares the AZ&Me program with Farxiga, but every AZ&Me fact here was
// re-read for Breztri (it is a "Primary Product"; no removal announced).
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
  title: 'Breztri Aerosphere prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=715433dc-cb2b-43ea-b6df-c5b4177adc6c',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses (COPD; asthma 12+ since April 2026); drug class',
};
const orangeBook = {
  title: 'FDA Orange Book — NDA 212122 (Breztri Aerosphere) product details',
  url: 'https://www.accessdata.fda.gov/scripts/cder/ob/results_product.cfm?Appl_Type=N&Appl_No=212122',
  publisher: 'U.S. Food and Drug Administration',
  checked: CHECKED,
  supports: 'two AstraZeneca products only; no generic',
};
const azmeEligibility = {
  title: 'AZ&Me eligibility requirements',
  url: 'https://www.azandmeapp.com/eligibility-requirements',
  publisher: 'AstraZeneca (AZ&Me)',
  checked: CHECKED,
  supports: 'Medicare rule (Extra Help exclusion); 300% FPL income table; phone',
};
const azmeMedications = {
  title: 'AZ&Me included medications',
  url: 'https://www.azandmeapp.com/included-medications',
  publisher: 'AstraZeneca (AZ&Me)',
  checked: CHECKED,
  supports: 'Breztri listed as a Primary Product',
};
const azmeUpdates = {
  title: 'AZ&Me important program updates',
  url: 'https://www.azandmeapp.com/important-program-updates',
  publisher: 'AstraZeneca (AZ&Me)',
  checked: CHECKED,
  supports: '2026 removals are Farxiga/Xigduo XR and Brilinta — no Breztri change; income limits unchanged for 2026',
};
const azmeHome = {
  title: 'AZ&Me Prescription Savings Program — how to apply',
  url: 'https://www.azandmeapp.com/',
  publisher: 'AstraZeneca (AZ&Me)',
  checked: CHECKED,
  supports: 'who may apply; application fields; online vs fax timing; 90-day supply; fax number',
};
const breztriSavings = {
  title: 'Breztri Zero Pay savings card — terms of use',
  url: 'https://www.breztri.com/savings-support/patient-savings-support',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports: 'commercial-only; Medicare Part D exclusion (even as cash-paying); phone',
};
const breztriCost = {
  title: 'Breztri — cost and affordability',
  url: 'https://www.breztri.com/cost-and-affordability',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports: 'list price $684.43 per 30-day supply; average Medicare Part D out-of-pocket $44.70/month; AZ&Me pointer',
};
const azDirect = {
  title: 'AstraZeneca Direct — product list',
  url: 'https://www.azpatientdirect.com/',
  publisher: 'AstraZeneca (ASPN Pharmacies)',
  checked: CHECKED,
  supports: 'Breztri not offered',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,200 guaranteed / $3,500 maximum; Breztri listed',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; zip-code rule; Breztri listed',
};
const healthWellCopdMa = {
  title: 'HealthWell Foundation — Chronic Obstructive Pulmonary Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/chronic-obstructive-pulmonary-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $3,250 maximum; 500% FPL; Medicare only; Breztri listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no COPD or asthma program',
};

export const BREZTRI: MedicationAssistanceRecord = {
  slug: 'breztri',
  brandName: 'Breztri Aerosphere',
  genericName: 'budesonide / glycopyrrolate / formoterol fumarate',
  manufacturer: 'AstraZeneca',
  conditions: ['respiratory'],
  // ICS + anticholinergic (LAMA) + LABA in one inhaler (Breztri US PI, rev. 4/2026).
  drugClass: ['triple-inhaler'],
  description:
    'Breztri Aerosphere is a maintenance inhaler that combines an inhaled corticosteroid (budesonide) with two long-acting bronchodilators (glycopyrrolate and formoterol) for COPD, and since April 2026 for asthma in people 12 and older. It is not a rescue inhaler.',
  usedFor: [
    'Maintenance treatment of chronic obstructive pulmonary disease (COPD) in adults (160/9/4.8 mcg)',
    'Maintenance treatment of asthma in adults and children 12 and older (160/18/4.8 mcg strength, approved April 27, 2026)',
    'Not for the relief of sudden breathing problems — a rescue inhaler is still needed',
  ],
  whyCostly:
    'Breztri is a brand-name inhaler with no generic: FDA\'s Orange Book lists only AstraZeneca\'s two products, with patents running as far as 2038. AstraZeneca lists the price at $684.43 for a 30-day supply (February 2026) and reports that people with Part D paid an average of $44.70 a month in 2025 — an average that hides the higher amounts paid before a deductible is met or on a non-preferred tier. Breztri is not in Medicare price negotiation for 2026 or 2027.',
  medicareContext:
    'Breztri Aerosphere is generally covered under Medicare Part D and Medicare Advantage drug plans as a maintenance inhaler, often on a brand tier and sometimes behind prior authorization or step therapy. It is not one of the drugs with a Medicare-negotiated price in 2026 or 2027 (its competitor Trelegy Ellipta is, from 2027). Part D out-of-pocket costs are capped at $2,100 in 2026.',
  quickAnswer: {
    verdict:
      'Yes — and the manufacturer route is open. AstraZeneca\'s AZ&Me program lists Breztri and accepts Medicare beneficiaries who are not eligible for Extra Help and whose income is at or below 300% of the federal poverty level. The Breztri Zero Pay card excludes Medicare Part D. Every COPD charity fund we checked (TotalAssist and HealthWell) was closed to new applicants, and Good Days has no lung fund. Extra Help lowers the copay for people with limited income and resources.',
    points: [
      'AZ&Me Prescription Savings Program: Breztri is a covered "Primary Product"; Medicare beneficiaries may apply if they are not eligible for or enrolled in Extra Help and household income is at or below $47,880 (one person) or $64,920 (two). Up to a 90-day supply shipped free.',
      'Breztri Zero Pay savings card: commercial insurance only — Medicare Part D enrollees are excluded even if they offer to pay cash.',
      'No manufacturer cash-price or free-trial route: AstraZeneca Direct does not offer Breztri.',
      'Charitable grants: TotalAssist\'s COPD funds and HealthWell\'s COPD – Medicare Access fund list Breztri but were all closed on August 26, 2026.',
      'Medicare: not a negotiated-price drug; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'azme',
      kind: 'manufacturer-pap',
      name: 'AZ&Me Prescription Savings Program',
      operator: 'AstraZeneca',
      status: 'open',
      statusNote:
        'Accepting applications for Breztri on August 26, 2026. AZ&Me\'s 2026 program updates remove Farxiga, Xigduo XR and Brilinta — Breztri is unaffected and remains on the Primary Products list. Income limits are unchanged for 2026.',
      medicare: 'conditional',
      medicareNote:
        'AZ&Me\'s rule: "If you are a Medicare Beneficiary, you must not be eligible for or enrolled in Medicare\'s Extra Help program, also known as Low-Income Subsidy (LIS) for Medicare Part D." You may not have any commercial insurance or government insurance other than Medicare. No prescription-spending threshold applies to Breztri (that rule is for Specialty and Rare Disease medicines).',
      summary:
        'AstraZeneca\'s patient assistance program supplies Breztri at no cost to eligible patients — up to a 90-day supply delivered to your home or your doctor\'s office. You, a legally authorized representative, or your prescriber\'s office can apply.',
      covers: 'Breztri at no cost for approved patients, shipped in up to 90-day supplies.',
      eligibility: [
        'U.S. resident treated by a U.S.-licensed prescriber',
        'No commercial insurance, and no government insurance other than Medicare',
        'Medicare beneficiaries: not eligible for or enrolled in Extra Help (LIS)',
        'Annual adjusted gross income at or below 300% of the federal poverty level. On the AZ&Me table effective January 26, 2026 that is $47,880 for one person, $64,920 for two, $81,960 for three and $99,000 for four (higher in Alaska and Hawaii). These are AstraZeneca\'s own figures — another program quoting "300% FPL" may publish different dollars, because each builds its table from a poverty-guideline year of its choosing.',
        'Not receiving any other form of medication assistance (a life-changing event in the past year — job loss, income change, loss of coverage — may still qualify you)',
      ],
      requirements: [
        'Name, home address, phone and email',
        'Health insurance information (Medicare card and Part D plan)',
        'Household size and adjusted gross income (IRS Form 1040, line 11)',
        'Medication name and formulation (Breztri Aerosphere); prescriber name, office name and address',
      ],
      howToApply:
        'Apply online at azandmeapp.com (decisions may be immediate) or download the application and fax it to 1-877-239-0867 (2–4 business days). Your prescriber\'s office can also apply for you. Call 1-800-292-6363, Monday–Friday 9am–6pm ET, with questions. There is no fee.',
      applyUrl: 'https://www.azandmeapp.com/eligibility-requirements',
      applyLabel: 'AZ&Me eligibility and application',
      phone: '1-800-292-6363',
      sources: [azmeEligibility, azmeMedications, azmeUpdates, azmeHome],
    },
    {
      id: 'breztri-zero-pay',
      kind: 'manufacturer-savings',
      name: 'Breztri Zero Pay savings card',
      operator: 'AstraZeneca',
      status: 'open',
      statusNote: 'Active for commercially insured patients on August 26, 2026. AstraZeneca reserves the right to change or end the offer without notice; the maximum savings limit is not published on the terms page.',
      medicare: 'excluded',
      medicareNote:
        'AstraZeneca\'s terms exclude anyone enrolled in Medicare Part D, Medicaid, Medigap, VA, DoD or TRICARE, and Medicare-eligible retirees on employer group waiver plans — and state that "you may not use this savings card even if you elect to be processed as an uninsured (cash-paying) patient."',
      summary:
        'A commercial copay offer: eligible commercially insured patients pay as low as $0 for each 30-day supply (one inhaler), subject to a maximum savings limit.',
      eligibility: ['Commercial (private or employer) prescription insurance that does not cover the full cost', 'Not enrolled in any state- or federally funded prescription program'],
      howToApply: 'Commercially insured patients activate the card at breztri.com. Not applicable to Medicare beneficiaries — AstraZeneca points Medicare patients to AZ&Me instead.',
      applyUrl: 'https://www.breztri.com/savings-support/patient-savings-support',
      applyLabel: 'Breztri Zero Pay terms',
      phone: '1-833-458-0440',
      sources: [breztriSavings, SRC.oigCoupons],
    },
    {
      id: 'az-direct',
      kind: 'manufacturer-direct',
      name: 'AstraZeneca Direct (cash-pay) — Breztri not offered',
      operator: 'AstraZeneca (dispensed by ASPN Pharmacies)',
      status: 'not-found',
      statusNote: 'AstraZeneca Direct offered Airsupra, Baxfendy, Bevespi, Farxiga, Xigduo and FluMist on August 26, 2026 — not Breztri. No free-trial offer appears on breztri.com.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — Breztri is not part of the program.',
      summary: 'An honest negative: there is no manufacturer cash price or free trial for Breztri. AstraZeneca\'s published list price is $684.43 for a 30-day supply (February 2026).',
      eligibility: [],
      howToApply: 'Not applicable. If AstraZeneca adds Breztri to AstraZeneca Direct, the product list on the page below will show it.',
      applyUrl: 'https://www.azpatientdirect.com/',
      applyLabel: 'AstraZeneca Direct product list',
      sources: [azDirect, breztriCost],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — COPD funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Chronic obstructive pulmonary disease (COPD) · COPD health equity (Breztri is also listed on the closed Asthma funds)',
      status: 'closed',
      statusNote:
        'The COPD fund and the COPD health equity fund were both closed to new applicants on August 26, 2026; so were the Asthma and Asthma health equity funds, which also list Breztri. The health-equity funds additionally require a home zip code in a designated social-vulnerability county.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE) that covers your qualifying expenses.',
      summary:
        'Breztri Aerosphere is on the approved-medication list of TotalAssist\'s COPD and Asthma funds. A listing is not an open fund — each was closed when we checked. Sign up for notifications; TotalAssist has no waitlist or queue.',
      covers: 'When open: $1,200 guaranteed award, $3,500 maximum, for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed COPD diagnosis in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistCopd, totalAssistCopdHe, SRC.totalAssistMedIndex, SRC.totalAssistFunds, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — COPD – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Obstructive Pulmonary Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'The fund was "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Breztri Aerosphere is on its covered-medication list.',
      medicare: 'eligible',
      medicareNote:
        'This is a Medicare Access fund — for Medicare patients only. Premium assistance through the fund requires Medicare Part B; HealthWell refers patients without Medicare to manufacturer programs.',
      summary:
        'HealthWell lists Breztri on its COPD – Medicare Access fund. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for each fund.',
      covers: 'When open: up to $3,250 per grant for prescription copays or a Part B premium (HealthWell forecasts an average grant of about $1,500); household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Breztri',
        'Household income up to 500% of the federal poverty level (adjusted for household size and cost of living)',
        'COPD diagnosis, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/chronic-obstructive-pulmonary-disease-medicare-access/',
      applyLabel: 'HealthWell COPD – Medicare Access fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellCopdMa, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no COPD, asthma or general respiratory program — its only lung-related fund is pulmonary arterial hypertension (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Breztri\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'We could not identify a currently open charitable fund covering Breztri Aerosphere. TotalAssist lists it under its COPD and Asthma funds (and their health-equity variants) and HealthWell lists it under its COPD – Medicare Access fund, but every one of those funds was closed to new applicants on August 26, 2026. Good Days has no lung fund. Being listed is not the same as being open — sign up for alerts so you hear when one reopens. The routes that do not depend on a fund balance are AZ&Me and Medicare Extra Help.',
  extraHelpNote:
    'AZ&Me and Extra Help are alternatives, not a pair: AZ&Me excludes anyone eligible for Extra Help. If your income and resources fit Extra Help\'s limits, Extra Help is the route — it lowers the copay on every covered drug, not only Breztri. If you earn too much for Extra Help but are at or below 300% of the poverty level, AZ&Me is the route.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Breztri in August 2026 the realistic order is AZ&Me → Extra Help, because no charity fund for COPD is open. The two are mutually exclusive, so start by working out which one fits your income.',
      bullets: [
        'On Medicare, not eligible for Extra Help, and household income at or below 300% of the poverty level → AZ&Me (free Breztri).',
        'Limited income and resources → Medicare Extra Help through Social Security (AZ&Me will not accept you if you qualify for Extra Help).',
        'COPD diagnosis → sign up for TotalAssist and HealthWell fund alerts (all closed when checked).',
        'Commercial insurance instead of Medicare → the Breztri Zero Pay card (Medicare enrollees cannot use it).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Breztri appears in TotalAssist\'s medication index and on HealthWell\'s COPD fund page, but a listing does not mean funding is available. On the day we checked, none of those funds was open. AZ&Me was open. Funding can change without notice.',
      bullets: [
        'AZ&Me: azandmeapp.com/important-program-updates lists every medication added or removed; Breztri is not on the 2026 removal list.',
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the COPD funds.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Breztri on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'AZ&Me: no insurance other than Medicare; not eligible for or enrolled in Extra Help; adjusted gross income at or below $47,880 (one person) or $64,920 (two people); not receiving other medication assistance.',
        'TotalAssist (when open): government insurance covering Breztri; income at or below 500% FPL adjusted for local cost of living; a COPD diagnosis in treatment.',
        'HealthWell (when open): Medicare; income up to 500% FPL; a COPD diagnosis verified by your provider.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The AZ&Me online application is designed to be finished in one sitting — have these ready:',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card.',
        'Household size and adjusted gross income from line 11 of your most recent IRS Form 1040.',
        'Your Breztri prescription details and your prescriber\'s name, office name and address.',
        'If you have had a life-changing event in the past year (job loss, income change, loss of coverage), be ready to describe it — AZ&Me says you may still be eligible.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'AZ&Me: you (or a legally authorized representative, or your prescriber\'s office) apply online or by fax. AZ&Me contacts you with a decision or a request for more information.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone; PAF verifies your diagnosis with your provider.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'AZ&Me: online decisions may be immediate; faxed applications take about 2–4 business days. If approved, up to a 90-day supply ships to your home or your doctor\'s office at no cost.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
        'TotalAssist (when open): you learn immediately whether you are approved; proof of income is due within 30 days.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts so you hear when a COPD fund reopens — there is no waitlist or queue.',
        'If AZ&Me turned you down because you qualify for Extra Help, apply for Extra Help — that is the route AZ&Me is pointing you to.',
        'If AZ&Me turned you down on income, apply for Extra Help anyway; its limits are higher than many people expect.',
        'Ask your doctor whether another maintenance inhaler on your plan\'s preferred tier would work for you, or about a formulary exception; compare Part D plans in the fall — Breztri\'s tier differs from plan to plan.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Adjusted gross income from IRS Form 1040, line 11', note: 'AZ&Me' },
    { item: 'Prescriber name, office name and address', note: 'AZ&Me — the office can also submit the application for you' },
  ],
  ifUnavailable: [
    {
      text: 'If AZ&Me declined you because you are eligible for Extra Help, that is your route: apply through Social Security and your Part D plan will apply the lower copays.',
      href: 'https://www.ssa.gov/medicare/part-d-extra-help',
      label: 'Apply for Extra Help at SSA.gov',
    },
    ...standardAlternatives('Breztri'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Breztri?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Breztri Aerosphere as a maintenance inhaler for COPD, usually on a brand tier and sometimes with prior authorization or step therapy. Part D out-of-pocket costs are capped at $2,100 in 2026. AstraZeneca reports that people with Part D paid an average of $44.70 a month for Breztri in 2025. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Breztri patient assistance program for people on Medicare?',
      answer:
        'Yes. AstraZeneca\'s AZ&Me Prescription Savings Program lists Breztri and accepts Medicare beneficiaries who are not eligible for or enrolled in Extra Help, have no other insurance, and have adjusted gross income at or below 300% of the federal poverty level — $47,880 for one person or $64,920 for two in 2026. Approved patients receive Breztri free, in up to 90-day supplies. Apply at azandmeapp.com or call 1-800-292-6363.',
    },
    {
      question: 'Can I use the Breztri Zero Pay card with Medicare?',
      answer:
        'No. AstraZeneca\'s terms exclude anyone enrolled in Medicare Part D, Medicaid, Medigap, VA, DoD or TRICARE — and say you may not use the card even if you ask to be processed as a cash-paying patient. AstraZeneca directs Medicare patients who cannot afford Breztri to AZ&Me instead.',
    },
    {
      question: 'Is there a charitable grant for Breztri right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Breztri under its COPD and Asthma funds, and HealthWell lists it under its COPD – Medicare Access fund, but all of those were closed to new applicants. Good Days has no lung fund. Sign up for TotalAssist and HealthWell alerts and check back — funds open when money arrives.',
    },
    {
      question: 'Is there a generic for Breztri?',
      answer:
        'No. FDA\'s Orange Book lists only AstraZeneca\'s two Breztri products for this three-ingredient combination, with no generic application approved, and patents listed as far out as 2038. Ask your doctor whether a different maintenance inhaler on your plan\'s preferred tier would work for you if cost is the problem.',
    },
    {
      question: 'Is Breztri part of Medicare drug price negotiation?',
      answer:
        'No. Breztri is not on CMS\'s list of negotiated drugs for 2026 or 2027. (Trelegy Ellipta, a competing triple-therapy inhaler, has a negotiated price of $175 per 30-day supply starting January 1, 2027.) Your Breztri copay is set by your plan\'s tier and cost-sharing.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications when a fund opens, with no waitlist or queue; HealthWell offers alerts for each fund. While you wait, the routes that do not depend on a fund balance are AZ&Me, Extra Help, a formulary exception through your doctor, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['trelegy', 'dupixent', 'farxiga'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Breztri' },
  ],
  sources: [
    label,
    orangeBook,
    azmeEligibility,
    azmeMedications,
    azmeUpdates,
    azmeHome,
    breztriSavings,
    breztriCost,
    azDirect,
    SRC.cmsMfp2026,
    SRC.cmsMfp2027,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    totalAssistCopd,
    totalAssistCopdHe,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
    healthWellCopdMa,
    SRC.healthWellFunds,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Breztri Aerosphere Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the AZ&Me application, the Extra Help rule that decides which route you take, and what to do while the COPD charity funds are closed.',
  },
  description_meta:
    'How to find financial assistance for Breztri Aerosphere on Medicare: the AZ&Me program and its Extra Help rule, why the Zero Pay card excludes Medicare, COPD charity fund status, and Medicare Extra Help — verified August 2026.',
};
