// ---------------------------------------------------------------------------
// Entresto (sacubitril/valsartan) — Novartis. Independently researched
// 2026-08-26. Every program below was read on the official source cited with
// it. Batch 2 (spec §24 #6) — migrates the legacy generic page in place.
//
// The Entresto picture changed in 2025–26: generic sacubitril/valsartan is on
// the U.S. market, Novartis discontinued the Entresto Co-Pay Program, and
// Entresto is NOT on the Novartis Patient Assistance Foundation medication
// list. Two of the "programs" below are therefore honest negatives.
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
  title: 'Entresto prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=000dc81d-ab91-450c-8eae-8eb74e72296f',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; drug class; dosage forms',
};
const npafList = {
  title: 'Novartis Patient Assistance Foundation — medications list',
  url: 'https://pap.novartis.com/medications-list/',
  publisher: 'Novartis Patient Assistance Foundation',
  checked: CHECKED,
  supports: 'Entresto absent from the 28 supported medications',
};
const npafHome = {
  title: 'Novartis Patient Assistance Foundation (NPAF)',
  url: 'https://pap.novartis.com/',
  publisher: 'Novartis Patient Assistance Foundation',
  checked: CHECKED,
  supports: '"If you don\'t see your Novartis medication listed, it isn\'t supported by the NPAF program at this time"; general eligibility; phone',
};
const entrestoSupport = {
  title: 'Entresto — financial support (program discontinuation notice)',
  url: 'https://www.entresto.com/financial-support',
  publisher: 'Novartis',
  checked: CHECKED,
  supports: 'Entresto Co-Pay Program discontinued',
};
const entrestoHcp = {
  title: 'Entresto HCP — patient resources (discontinuation notice)',
  url: 'https://www.entrestohcp.com/support-and-resources/patient-resources',
  publisher: 'Novartis',
  checked: CHECKED,
  supports: 'Entresto Co-Pay Program discontinued',
};
const entrestoArchived = {
  title: 'Entresto financial support page as of June 18, 2025 (Internet Archive copy of the Novartis page — former co-pay terms)',
  url: 'https://web.archive.org/web/20250618165616id_/https://www.entresto.com/financial-support',
  publisher: 'Internet Archive (archived Novartis page)',
  checked: CHECKED,
  supports: 'former $10 co-pay offer terms; Medicare exclusion; $4,100 annual limit — historical only',
};
const fdaFirstGenerics = {
  title: '2024 first generic drug approvals — sacubitril and valsartan tablets',
  url: 'https://www.fda.gov/drugs/drug-and-biologic-approval-and-ind-activity-reports/2024-first-generic-drug-approvals',
  publisher: 'U.S. Food and Drug Administration',
  checked: CHECKED,
  supports: 'first generics approved May 28, 2024 (Alembic, Laurus, Crystal)',
};
const novartisQ4 = {
  title: 'Novartis Q4 and FY 2025 interim financial report',
  url: 'https://www.novartis.com/sites/novartis_com/files/q4-2025-interim-financial-report-en.pdf',
  publisher: 'Novartis',
  checked: CHECKED,
  supports: '"Entresto sales declined due to generic entry in the US in Q3 2025"',
};
const dailyMedGenerics = {
  title: 'DailyMed search — sacubitril and valsartan (generic labelers)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=sacubitril+and+valsartan',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: '17 generic labelers marketing tablets',
};
const totalAssistHf = {
  title: 'TotalAssist — Heart failure (HF) fund',
  url: 'https://totalassist.org/funds/heart-failure-hf/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,000 guaranteed / $2,500 maximum; Entresto and generic listed',
};
const totalAssistHfHe = {
  title: 'TotalAssist — Heart failure (HF) health equity fund',
  url: 'https://totalassist.org/funds/heart-failure-hf-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'open; zip-code rule; $1,000 guaranteed / $2,500 maximum',
};
const totalAssistCardiomyopathy = {
  title: 'TotalAssist — Cardiomyopathy fund',
  url: 'https://totalassist.org/funds/cardiomyopathy/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,500 guaranteed / $2,000 maximum; Entresto listed',
};
const healthWellCardiomyopathy = {
  title: 'HealthWell Foundation — Cardiomyopathy – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/cardiomyopathy-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $7,500 maximum; 500% FPL; Entresto listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no heart-failure or cardiovascular program',
};

export const ENTRESTO: MedicationAssistanceRecord = {
  slug: 'entresto',
  brandName: 'Entresto',
  genericName: 'sacubitril/valsartan',
  manufacturer: 'Novartis',
  conditions: ['heart'],
  // sacubitril (neprilysin inhibitor) + valsartan (ARB) — an ARNI (Entresto US PI).
  drugClass: ['arni'],
  description:
    'Entresto is a twice-daily heart-failure tablet that combines sacubitril, a neprilysin inhibitor, with valsartan, an angiotensin II receptor blocker. Generic sacubitril/valsartan has been on the U.S. market since 2025, which changes the assistance picture more than any program does.',
  usedFor: [
    'Reducing the risk of cardiovascular death and hospitalization for heart failure in adults with chronic heart failure',
    'Treating symptomatic heart failure with systemic left ventricular systolic dysfunction in children aged one year and older (tablets and Entresto Sprinkle oral pellets)',
  ],
  whyCostly:
    'Brand Entresto is usually placed on a brand tier with a copay or coinsurance every month. Two things now cut against that cost: Medicare\'s negotiated price of $295 for a 30-day supply took effect in January 2026, and FDA-approved generic sacubitril/valsartan tablets — from more than a dozen labelers — reached pharmacies in 2025. But Novartis has also withdrawn its own help: the Entresto Co-Pay Program is discontinued and Entresto is not on the Novartis Patient Assistance Foundation list.',
  medicareContext:
    'Entresto is generally covered under Medicare Part D and Medicare Advantage drug plans, sometimes with prior authorization or step therapy. It is one of the first ten drugs with a Medicare-negotiated Maximum Fair Price: $295.00 for a 30-day supply in 2026 (versus a $628 list price in 2023, per CMS). That is the price to your plan — your copay still depends on your plan\'s tier and cost-sharing, and Part D out-of-pocket costs are capped at $2,100 in 2026. Ask your pharmacist whether generic sacubitril/valsartan costs less on your plan.',
  quickAnswer: {
    verdict:
      'The manufacturer routes are gone, but the generic is here. Novartis discontinued the Entresto Co-Pay Program and does not list Entresto in its patient assistance foundation. What remains: generic sacubitril/valsartan (ask your pharmacist), one zip-code-limited TotalAssist heart-failure fund that was open when we checked, Medicare\'s negotiated price, and Extra Help. The main heart-failure charity funds at TotalAssist and HealthWell were closed to new applicants.',
    points: [
      'Manufacturer patient assistance: Entresto is not on the Novartis Patient Assistance Foundation medication list — NPAF says an unlisted Novartis medicine "isn\'t supported by the NPAF program at this time."',
      'Entresto Co-Pay Program: discontinued. When it ran, its terms excluded Medicare anyway.',
      'Generic sacubitril/valsartan: FDA-approved since May 2024 and on the market since 2025 — ask whether it is cheaper on your plan\'s formulary.',
      'Charitable grants — one fund taking applications, three closed: TotalAssist\'s heart-failure HEALTH-EQUITY fund was open, but only to served ZIP codes. TotalAssist\'s GENERAL Heart failure and Cardiomyopathy funds and HealthWell\'s two heart-failure Medicare Access funds were closed. All four list Entresto.',
      'Medicare: negotiated Part D price of $295 (30-day) in 2026; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'npaf',
      kind: 'manufacturer-pap',
      name: 'Novartis Patient Assistance Foundation (NPAF) — Entresto not supported',
      operator: 'Novartis Patient Assistance Foundation',
      status: 'not-found',
      statusNote:
        'Entresto is not among the 28 medications on NPAF\'s list on August 26, 2026. NPAF states: "If you don\'t see your Novartis medication listed, it isn\'t supported by the NPAF program at this time." We found no dated removal notice on any Novartis site.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable to Entresto. For the medicines NPAF does support, it serves patients who are uninsured or have government insurance, meet income guidelines, and submit "evidence of Extra Help denial as deemed necessary."',
      summary:
        'Novartis\'s charitable foundation provides certain Novartis medicines free to eligible patients — but Entresto is not one of them. Do not send an Entresto application; ask your prescriber about generic sacubitril/valsartan instead.',
      eligibility: [],
      howToApply: 'Not applicable for Entresto. If Novartis adds it back, the medications list on pap.novartis.com will show it; you can also call 1-800-277-2254 to ask.',
      applyUrl: 'https://pap.novartis.com/medications-list/',
      applyLabel: 'NPAF medications list',
      phone: '1-800-277-2254',
      sources: [npafList, npafHome],
    },
    {
      id: 'entresto-copay',
      kind: 'manufacturer-savings',
      name: 'Entresto Co-Pay Program',
      operator: 'Novartis',
      status: 'closed',
      statusNote:
        'Discontinued. Novartis\'s notice on entresto.com: "The ENTRESTO Co-Pay Program has been discontinued. As a result, financial assistance through this program is no longer available." (checked August 26, 2026)',
      medicare: 'excluded',
      medicareNote:
        'Moot — the program is discontinued for everyone. When it ran, its terms (archived June 2025) read "Offer not valid under Medicare, Medicaid, or any other federal or state program," so Medicare beneficiaries were never eligible.',
      summary:
        'The former $10 co-pay offer for commercially insured patients (combined annual limit $4,100 under the archived terms) no longer exists. Novartis directs patients to their health care provider "to discuss your therapy and any available options for continued access."',
      eligibility: [],
      howToApply: 'Not applicable — discontinued.',
      applyUrl: 'https://www.entresto.com/financial-support',
      applyLabel: 'Novartis discontinuation notice',
      sources: [entrestoSupport, entrestoHcp, entrestoArchived, SRC.oigCoupons],
    },
    {
      id: 'totalassist-hf-he',
      kind: 'charitable',
      name: 'TotalAssist — Heart failure health-equity fund (ZIP-code restricted)',
      operator: 'Patient Advocate Foundation',
      fund: 'Heart failure (HF) health equity — served ZIP codes only',
      status: 'limited',
      statusNote: 'Accepting applications on August 26, 2026, but only from people whose home ZIP code the fund serves — the only fund covering Entresto that was taking applications when we checked. This is a different fund from TotalAssist\'s general Heart failure fund below, which was closed.',
      medicare: 'eligible',
      medicareNote: 'Requires government insurance (Medicare, Medicaid or TRICARE) that covers your Entresto costs.',
      summary:
        'A health-equity fund — a separate fund from TotalAssist\'s general Heart failure fund, with its own money and its own rules. It was accepting applications, but you must have heart failure AND a home address in a ZIP code the fund serves (designated social-vulnerability counties). If your ZIP code is not served, this fund cannot help you no matter how well you meet the income and diagnosis rules, so check your ZIP code first. Entresto, Entresto Sprinkle and generic sacubitril/valsartan are all on the heart-failure approved-medication list.',
      covers: '$1,000 guaranteed award, up to $2,500 maximum, for eligible out-of-pocket costs. One grant per condition.',
      eligibility: [
        'Diagnosed with heart failure, in treatment (or starting within 60 days, or treated in the past 6 months)',
        'Home address in a zip code served by a Health Equity Fund',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/heart-failure-hf-health-equity/',
      applyLabel: 'Check eligibility and apply — TotalAssist',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistHfHe, SRC.totalAssistMedIndex, SRC.totalAssistApply],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — general Heart failure and Cardiomyopathy funds (no ZIP-code rule)',
      operator: 'Patient Advocate Foundation',
      fund: 'Heart failure (HF) · Cardiomyopathy — the general funds, any ZIP code',
      status: 'closed',
      statusNote: 'Both funds were closed to new applicants on August 26, 2026, even though Entresto is on each fund\'s approved-medication list. These are TotalAssist\'s general heart funds — not the ZIP-code-restricted health-equity fund above, which was accepting applications.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE).',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) lists Entresto under its general Heart failure and Cardiomyopathy funds. These two carry no ZIP-code rule, so they are the funds most people would use — and both were closed when we checked. A listing is not an open fund. Sign up to be notified the moment one reopens; TotalAssist has no waitlist or queue.',
      covers: 'When open: Heart failure $1,000 guaranteed / $2,500 maximum; Cardiomyopathy $1,500 guaranteed / $2,000 maximum.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [SRC.totalAssistFunds, totalAssistHf, totalAssistCardiomyopathy, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — heart-failure Medicare Access funds',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Heart Failure – Medicare Access · Cardiomyopathy – Medicare Access',
      status: 'closed',
      statusNote: 'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Entresto and sacubitril/valsartan are on both funds\' medication lists.',
      medicare: 'eligible',
      medicareNote: 'Both are Medicare Access funds — for Medicare patients only. Premium assistance through either fund requires Medicare Part B.',
      summary:
        'HealthWell lists Entresto on its Chronic Heart Failure and Cardiomyopathy Medicare Access funds. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: Chronic Heart Failure – Medicare Access up to $2,500 (HealthWell forecasts an average grant of about $1,330); Cardiomyopathy – Medicare Access up to $7,500. Household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Entresto',
        'Household income up to 500% of the federal poverty level (adjusted for household size and cost of living)',
        'Chronic heart failure or cardiomyopathy diagnosis, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/chronic-heart-failure-medicare-access/',
      applyLabel: 'HealthWell Chronic Heart Failure fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [SRC.healthWellCHF, healthWellCardiomyopathy, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no heart-failure, cardiomyopathy, hypertension or general cardiovascular program (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Entresto\'s diagnosis.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'Four charitable funds list Entresto, and on August 26, 2026 exactly one of them was taking applications. TotalAssist\'s heart-failure HEALTH-EQUITY fund was open, but only to people whose home ZIP code it serves. TotalAssist\'s GENERAL Heart failure and Cardiomyopathy funds — the ones with no ZIP-code rule — were closed, as were HealthWell\'s two heart-failure Medicare Access funds. Good Days has no heart fund. Being listed is not the same as being open — sign up for fund alerts so you hear when one reopens. With Novartis\'s own programs gone, the routes that do not depend on a fund balance are the generic, the negotiated Part D price, and Extra Help.',
  extraHelpNote:
    'For Entresto, Extra Help and the generic are the two routes that need no fund balance and no manufacturer program: Extra Help lowers the copay on every covered drug, and generic sacubitril/valsartan may sit on a lower tier of your plan. Ask about both.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Because Novartis no longer offers help for Entresto, start with whichever of these fits your situation. They are not mutually exclusive.',
      bullets: [
        'Any Part D enrollee → ask your pharmacist or plan whether generic sacubitril/valsartan is on a lower tier than brand Entresto.',
        'Heart failure AND a home ZIP code the fund serves → TotalAssist heart-failure health-equity fund (accepting applications when checked; the ZIP-code rule decides it).',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Heart failure or cardiomyopathy but a ZIP code the health-equity fund does not serve → sign up for TotalAssist and HealthWell alerts; the general funds were closed when checked.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Entresto is listed in TotalAssist\'s medication index and on HealthWell\'s fund pages, but a listing does not mean funding is available. On the day we checked, only the TotalAssist heart-failure health-equity fund was open. Status changes without notice.',
      bullets: [
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
        'Novartis: the co-pay program is discontinued and NPAF does not list Entresto — no need to apply.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Entresto on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'TotalAssist heart-failure health-equity fund: government insurance (Medicare, Medicaid or TRICARE) covering Entresto; household income at or below 500% of the federal poverty level, adjusted for local cost of living; a heart-failure diagnosis in treatment; and a home zip code the fund serves.',
        'HealthWell heart-failure Medicare Access funds (when they reopen): Medicare; household income up to 500% FPL; diagnosis verified by your provider.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready before you start — the TotalAssist application is designed to be finished in one sitting of about 15 minutes.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card (carrier, plan type, policy ID, group number); Medigap or secondary insurance if you have it.',
        'Your Entresto (or sacubitril/valsartan) prescription: strength and dose, plus your prescriber\'s name, phone and address.',
        'Diagnosis (heart failure or cardiomyopathy) and the date of diagnosis if within the past 6 months.',
        'Household size and annual household income; proof of income is due within 30 days of a TotalAssist approval.',
        'Your copay or coinsurance amounts for Entresto.',
        'Social Security number (TotalAssist and HealthWell both ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you apply online 24/7 or by phone at 866-512-3861; PAF verifies your diagnosis and treatment plan with your provider and checks income automatically.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist: you learn immediately whether you are approved; proof of income is due within 30 days.',
        'HealthWell: decisions follow provider verification of the diagnosis; HealthWell grants run for a 12-month cycle.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Ask your prescriber to switch you to generic sacubitril/valsartan if it costs less on your plan — the FDA rates approved generics as therapeutically equivalent to Entresto.',
        'Sign up for TotalAssist and HealthWell alerts so you hear when a heart-failure fund reopens — there is no waitlist or queue.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Ask your doctor\'s office about a formulary exception or a lower tier on your plan, and compare Part D plans in the fall.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Home zip code', note: 'TotalAssist health-equity fund — eligibility depends on it' },
    { item: 'Copay or coinsurance amounts for Entresto', note: 'TotalAssist' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your pharmacist or your Part D plan what generic sacubitril/valsartan costs on your formulary — it has been available since 2025 and is often on a lower tier than brand Entresto.',
      href: 'https://www.fda.gov/drugs/drug-and-biologic-approval-and-ind-activity-reports/2024-first-generic-drug-approvals',
      label: 'FDA — first generic approvals',
    },
    ...standardAlternatives('Entresto'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Entresto?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Entresto for heart failure, sometimes with prior authorization or step therapy, and since January 1, 2026 Medicare pays a negotiated Maximum Fair Price of $295 for a 30-day supply. Your copay depends on your plan\'s tier and cost-sharing, and Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there an Entresto patient assistance program for people on Medicare?',
      answer:
        'Not from Novartis, as of August 26, 2026. Entresto is not on the Novartis Patient Assistance Foundation\'s medication list, and NPAF states that an unlisted Novartis medicine "isn\'t supported by the NPAF program at this time." The Entresto Co-Pay Program has also been discontinued. The remaining routes are charitable funds (mostly closed when we checked), generic sacubitril/valsartan, and Medicare Extra Help.',
    },
    {
      question: 'Can I still get the Entresto $10 co-pay card?',
      answer:
        'No. Novartis says "The ENTRESTO Co-Pay Program has been discontinued. As a result, financial assistance through this program is no longer available." Even when it ran, its terms were not valid under Medicare, Medicaid or any other federal or state program, so Medicare beneficiaries could not use it.',
    },
    {
      question: 'Is there a generic for Entresto?',
      answer:
        'Yes. FDA approved the first generic sacubitril/valsartan tablets on May 28, 2024, and Novartis reports that generic entry in the U.S. began in the third quarter of 2025. DailyMed lists more than a dozen generic labelers marketing the tablets. (No generic of Entresto Sprinkle oral pellets appears on FDA\'s first-generics list.) Ask your pharmacist what the generic costs on your plan.',
    },
    {
      question: 'Is there a charitable grant for Entresto right now?',
      answer:
        'One, with a catch. On August 26, 2026 TotalAssist\'s heart-failure health-equity fund was open, but it is limited to home zip codes in designated social-vulnerability counties. TotalAssist\'s main Heart failure and Cardiomyopathy funds and HealthWell\'s Chronic Heart Failure and Cardiomyopathy Medicare Access funds were closed to new applicants. Sign up for alerts and check back — funds open when money arrives.',
    },
    {
      question: 'What is the $295 Entresto price?',
      answer:
        'It is Medicare\'s negotiated Maximum Fair Price for a 30-day supply of Entresto in 2026, down from a $628 list price in 2023 according to CMS. It sets what Part D plans pay; your copay is set by your plan\'s tier and cost-sharing, so your out-of-pocket amount may be higher or lower than $295 depending on where you are in your deductible and the annual cap.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications when a fund opens, with no waitlist or queue; HealthWell offers alerts for each fund. While you wait, the routes that do not depend on a fund balance are the generic, Extra Help, a formulary exception through your doctor, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['farxiga', 'jardiance', 'eliquis', 'repatha'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-entresto.html', label: 'Does Medicare Cover Entresto?', blurb: 'Coverage, tiers and prior authorization' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Entresto' },
  ],
  sources: [
    label,
    npafList,
    npafHome,
    entrestoSupport,
    entrestoHcp,
    entrestoArchived,
    fdaFirstGenerics,
    novartisQ4,
    dailyMedGenerics,
    SRC.cmsMfp2026,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    totalAssistHfHe,
    totalAssistHf,
    totalAssistCardiomyopathy,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
    SRC.healthWellCHF,
    healthWellCardiomyopathy,
    SRC.healthWellFunds,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-06-30',
  video: {
    title: 'How to Apply for Entresto Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of what changed for Entresto in 2026 — the generic, the negotiated Medicare price, the withdrawn Novartis programs — and how to apply to the heart-failure funds when they open.',
  },
  description_meta:
    'How to find financial assistance for Entresto (sacubitril/valsartan) on Medicare in 2026: why the Novartis programs are gone, the generic, the $295 negotiated price, heart-failure charity fund status, and Medicare Extra Help — verified August 2026.',
};
