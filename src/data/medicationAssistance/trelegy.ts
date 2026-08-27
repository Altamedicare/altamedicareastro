// ---------------------------------------------------------------------------
// Trelegy Ellipta (fluticasone furoate / umeclidinium / vilanterol) — GSK.
// Independently researched 2026-08-26. Every program below was read on the
// official source cited with it. Batch 2 (spec §24 #9) — a NEW page.
//
// NOTE: GSK publishes no covered-medicine list for its Patient Assistance
// Program. Trelegy's inclusion is implied (GSK's Trelegy pricing page sends
// Medicare/uninsured patients to the PAP eligibility check; the application
// carves out only Nucala, Benlysta and oncology products) but is not stated —
// so that program carries status 'verify', not 'open'.
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
  title: 'Trelegy Ellipta prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b5a81d5a-4648-4c7a-951d-33c014a63c7e',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; drug class',
};
const gskpafMedicare = {
  title: 'GSK Patient Assistance Program — eligibility for people with Medicare Part D',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports: '$600 spending rule; income limits; documents; phone; annual re-application',
};
const gskpafApplication = {
  title: 'GSK Patient Assistance Program — non-vaccine application (PDF)',
  url: 'https://gskpaf.org/content/dam/brs-pharma-us/gskpaf-v2/en_US/pdfs/GSK-PAP-English.pdf',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports: 'Part D proof-of-spend documents; mailing address and fax; no covered-medicine list',
};
const gskTrelegyPricing = {
  title: 'GSK pricing information — Trelegy',
  url: 'https://gskforyou.com/gsk-pricing-information/trelegy/',
  publisher: 'GSK',
  checked: CHECKED,
  supports: '2026 list price $697.73; Medicare/uninsured pointer to the patient assistance program',
};
const trelegyTerms = {
  title: 'Trelegy savings offer — eligibility requirements and terms',
  url: 'https://www.trelegy.com/content/cf-pharma/trelegy-v3/en_US/content/overlays/eligibility-requirements.html',
  publisher: 'GSK',
  checked: CHECKED,
  supports: 'copay offer terms; Medicare Part B/D, Medicaid, Medigap, VA, DoD/TRICARE exclusion; 12 uses; expires 12/31/2026',
};
const trelegyHome = {
  title: 'Trelegy Ellipta — savings and support',
  url: 'https://www.trelegy.com/savings-and-support/',
  publisher: 'GSK',
  checked: CHECKED,
  supports: 'pay as little as $0 offer; phone',
};
const gskCoupons = {
  title: 'GSK coupons and free-trial offers',
  url: 'https://gskforyou.com/programs/gsk-coupons-free-trials/',
  publisher: 'GSK',
  checked: CHECKED,
  supports: 'coupon excludes Medicare/Medicaid; no free-trial offers currently',
};
const gskDirect = {
  title: 'GSK Direct to You — cash-pay pharmacy program',
  url: 'https://gskforyou.com/programs/direct-to-you/',
  publisher: 'GSK',
  checked: CHECKED,
  supports: 'Trelegy not among the products offered',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,200 guaranteed / $3,500 maximum; COPD diagnosis codes; Trelegy listed',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,200 guaranteed / $3,500 maximum; Trelegy listed',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; zip-code rule',
};
const healthWellAsthma = {
  title: 'HealthWell Foundation — Asthma fund',
  url: 'https://www.healthwellfoundation.org/fund/asthma/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $4,500 maximum; 500% FPL; Trelegy listed',
};
const healthWellCopdMa = {
  title: 'HealthWell Foundation — Chronic Obstructive Pulmonary Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/chronic-obstructive-pulmonary-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $3,250 maximum; 500% FPL; Medicare only; Trelegy listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no COPD or asthma program',
};

export const TRELEGY: MedicationAssistanceRecord = {
  slug: 'trelegy',
  brandName: 'Trelegy Ellipta',
  genericName: 'fluticasone furoate / umeclidinium / vilanterol',
  manufacturer: 'GSK (GlaxoSmithKline)',
  conditions: ['respiratory'],
  // ICS + LAMA + LABA in one once-daily inhaler (Trelegy Ellipta US PI).
  drugClass: ['triple-inhaler'],
  description:
    'Trelegy Ellipta is a once-daily maintenance inhaler that combines an inhaled corticosteroid (fluticasone furoate) with two long-acting bronchodilators (umeclidinium and vilanterol) for COPD and for asthma in adults. It is not a rescue inhaler.',
  usedFor: [
    'Long-term maintenance treatment of chronic obstructive pulmonary disease (COPD), including chronic bronchitis and emphysema, in adults (100/62.5/25 mcg strength)',
    'Long-term maintenance treatment of asthma in patients 18 and older (100/62.5/25 or 200/62.5/25 mcg)',
    'Not for the relief of sudden breathing problems — a rescue inhaler is still needed',
  ],
  whyCostly:
    'Trelegy Ellipta is a brand-name inhaler with no FDA-approved generic. GSK lists its price at $697.73 for a 30-day supply as of January 1, 2026, and Part D plans usually place it on a brand tier with a copay or coinsurance every month until you reach the $2,100 annual out-of-pocket cap. A generic application was accepted for FDA review in January 2026 but had not been approved when we checked.',
  medicareContext:
    'Trelegy Ellipta is generally covered under Medicare Part D and Medicare Advantage drug plans, sometimes with prior authorization or step therapy versus other inhalers. It was selected for the second round of Medicare drug price negotiation: CMS reports a negotiated price of $175 for a 30-day supply that takes effect January 1, 2027 (against a $654 list price in 2024). That price is what plans pay from 2027 — your copay still depends on your plan\'s tier and cost-sharing, and for the rest of 2026 the negotiated price does not apply.',
  quickAnswer: {
    verdict:
      'Some help exists, but every charity fund we checked was closed. GSK\'s patient assistance program accepts Medicare Part D patients who have already paid $600 out of pocket for prescriptions this year and meet its income limits — though GSK does not publish a list of covered medicines, so confirm Trelegy by phone. The Trelegy savings card excludes Medicare. TotalAssist and HealthWell both list Trelegy, but their COPD and asthma funds were closed to new applicants when we checked. Extra Help is the route that does not depend on a fund balance.',
    points: [
      'GSK Patient Assistance Program: free GSK medicines for eligible patients; Medicare Part D enrollees qualify after paying $600 for prescriptions in the current calendar year, with income at or below $47,880 (one person) or $64,920 (two). Trelegy\'s inclusion is implied but not listed — call 1-866-728-4368 to confirm.',
      'Trelegy savings offer: commercial insurance only — excludes Medicare Part B and Part D, Medicaid, Medigap, VA and TRICARE.',
      'No manufacturer cash-price or free-trial route: GSK\'s Direct to You program does not include Trelegy, and GSK says it is not currently offering free trials.',
      'Charitable grants: TotalAssist\'s COPD and Asthma funds and HealthWell\'s Asthma and COPD – Medicare Access funds all list Trelegy and were all closed on August 26, 2026. Good Days has no lung fund.',
      'Medicare: negotiated Part D price of $175 (30-day) starts January 1, 2027; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'gsk-pap',
      kind: 'manufacturer-pap',
      name: 'GSK Patient Assistance Program',
      operator: 'GSK Patient Access Programs Foundation',
      status: 'verify',
      statusNote:
        'The program was accepting applications on August 26, 2026, but GSK publishes no covered-medicine list. Trelegy\'s inclusion is implied — GSK\'s own Trelegy pricing page sends Medicare and uninsured patients to this program\'s eligibility check, and the application excludes only Nucala, Benlysta and oncology products — but it is not stated. Confirm by phone before you gather paperwork.',
      medicare: 'conditional',
      medicareNote:
        'GSK\'s Medicare Part D rule: you must have a Medicare prescription drug plan and "have paid a total of $600 for prescriptions in the current calendar year" (premiums and family members\' costs do not count), plus meet the income limits. No Extra Help denial letter is mentioned. Part D patients must re-apply every calendar year once they have again spent $600.',
      summary:
        'GSK\'s charitable foundation ships eligible patients up to a 90-day supply of their GSK medicine at no cost, with free refills for the rest of the calendar year. It is a paper application you can complete yourself.',
      covers: 'The GSK medicine at no cost — a supply of up to 90 days shipped after approval, then refills through the end of the calendar year.',
      eligibility: [
        'Live in the United States or Puerto Rico',
        'Medicare Part D plan, and $600 already paid for prescriptions through that plan in the current calendar year (uninsured applicants qualify without the spending rule)',
        'Maximum annual gross household income: $47,880 for one person, $64,920 for two, $81,960 for three, $99,000 for four (add $17,040 per additional person; higher limits in Alaska and Hawaii)',
        'A signed original prescription for the GSK medicine',
      ],
      requirements: [
        'Completed and signed application (the last page must be signed and dated)',
        'Signed original prescription — faxed prescriptions count only if faxed directly from the prescriber\'s office',
        'Part D applicants: all pages of your most recent Part D plan statement (Explanation of Benefits) showing $600 paid for prescriptions this calendar year; call GSK if you cannot get one',
        'Part D applicants: a copy of your Part D drug-plan card (not the original) and your Medicare Beneficiary Identifier (MBI)',
        'Household size and current annual household income',
      ],
      howToApply:
        'Confirm Trelegy is covered by calling 1-866-728-4368 (Monday–Friday, 8am–8pm ET). Then download the non-vaccine application, complete and sign it, attach the prescription and Part D documents, and mail it to GSK Patient Assistance Program, P.O. Box 220590, Charlotte, NC 28222-0590, or fax it to 1-855-474-3063. GSK notifies you by letter whether you are enrolled. There is no fee.',
      applyUrl: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
      applyLabel: 'GSK PAP — Medicare Part D eligibility',
      phone: '1-866-728-4368',
      sources: [gskpafMedicare, gskpafApplication, gskTrelegyPricing],
    },
    {
      id: 'trelegy-savings-card',
      kind: 'manufacturer-savings',
      name: 'Trelegy savings offer (pay as little as $0)',
      operator: 'GSK',
      status: 'open',
      statusNote: 'Active for commercially insured patients; the offer expires December 31, 2026 and covers up to 12 uses (each 30-day supply counts as one use).',
      medicare: 'excluded',
      medicareNote:
        'GSK\'s terms: patients "are not eligible for this program if they are covered by any federal or state prescription insurance program. This includes patients enrolled in Medicare Part B, Medicare Part D, Medicaid, Medigap, Veterans Affairs (VA), Department of Defense (DoD) programs or TRICARE." Medicare-eligible retirees on an employer group waiver plan are also excluded.',
      summary:
        'A commercial copay offer: eligible commercially insured patients pay as little as $0 per 30-, 60- or 90-day supply, with a maximum saving of the wholesale acquisition cost less $35 per month.',
      eligibility: ['Commercial (private or employer) prescription insurance that does not cover the full cost', 'Not enrolled in any federal or state prescription program'],
      howToApply: 'Commercially insured patients activate the offer at trelegy.com. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://www.trelegy.com/savings-and-support/',
      applyLabel: 'Trelegy savings offer terms',
      phone: '1-866-475-3678',
      sources: [trelegyTerms, trelegyHome, gskCoupons, SRC.oigCoupons],
    },
    {
      id: 'gsk-direct',
      kind: 'manufacturer-direct',
      name: 'GSK Direct to You (cash-pay pharmacy) — Trelegy not offered',
      operator: 'GSK (fulfilled by Alto Pharmacy)',
      status: 'not-found',
      statusNote:
        'GSK\'s cash-pay program lists Advair, Anoro Ellipta, Arnuity, Incruse Ellipta, Ventolin and others — but not Trelegy — on August 26, 2026. GSK also states it is "not currently offering any free trial offers."',
      medicare: 'unknown',
      medicareNote: 'Not applicable — Trelegy is not part of the program. (The program is for people not using insurance.)',
      summary: 'An honest negative: there is no manufacturer cash price or free trial for Trelegy Ellipta. GSK\'s published list price for a 30-day supply was $697.73 as of January 1, 2026.',
      eligibility: [],
      howToApply: 'Not applicable. If GSK adds Trelegy to Direct to You, the product list on the page below will show it.',
      applyUrl: 'https://gskforyou.com/programs/direct-to-you/',
      applyLabel: 'GSK Direct to You product list',
      sources: [gskDirect, gskCoupons, gskTrelegyPricing],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — COPD and Asthma funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Chronic obstructive pulmonary disease (COPD) · Asthma · COPD health equity · Asthma health equity',
      status: 'closed',
      statusNote:
        'All four funds that list Trelegy Ellipta were closed to new applicants on August 26, 2026. The two health-equity funds additionally require a home zip code in a designated social-vulnerability county.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE) that covers your qualifying expenses.',
      summary:
        'Trelegy Ellipta is on the approved-medication list of TotalAssist\'s COPD and Asthma funds (and their health-equity variants). A listing is not an open fund — each was closed when we checked. Sign up for notifications; TotalAssist has no waitlist or queue.',
      covers: 'When open: $1,200 guaranteed award, $3,500 maximum, for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed COPD diagnosis (codes J42–J44.9) or asthma diagnosis (J45.20–J45.998, J82.83), in treatment or starting within 60 days',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistCopd, totalAssistAsthma, totalAssistCopdHe, SRC.totalAssistMedIndex, SRC.totalAssistFunds, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Asthma and COPD – Medicare Access funds',
      operator: 'HealthWell Foundation',
      fund: 'Asthma · Chronic Obstructive Pulmonary Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Trelegy Ellipta is on each fund\'s covered-medication list.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell requires insurance that covers part of the drug; Medicare qualifies. The COPD fund is a Medicare Access fund — for Medicare patients only — and premium assistance through either fund requires Medicare Part B.',
      summary:
        'HealthWell lists Trelegy on its Asthma fund and its COPD – Medicare Access fund. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for each fund.',
      covers: 'When open: Asthma up to $4,500; COPD – Medicare Access up to $3,250 (HealthWell forecasts an average grant of about $1,500). Both funds allow household income up to 500% of the federal poverty level.',
      eligibility: [
        'Insurance (including Medicare) that covers part of the cost of Trelegy',
        'Household income up to 500% of the federal poverty level (adjusted for household size and cost of living)',
        'Asthma or COPD diagnosis, verified by your provider; the COPD fund requires Medicare',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/chronic-obstructive-pulmonary-disease-medicare-access/',
      applyLabel: 'HealthWell COPD – Medicare Access fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellCopdMa, healthWellAsthma, SRC.healthWellFunds, SRC.healthWellEligibility],
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
      summary: 'An honest negative: we looked, and there is no Good Days program covering Trelegy\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'We could not identify a currently open charitable fund covering Trelegy Ellipta. It is listed by TotalAssist (COPD and Asthma funds, plus their health-equity variants) and by HealthWell (Asthma and COPD – Medicare Access funds), but every one of those funds was closed to new applicants on August 26, 2026. Good Days has no lung fund. Being listed is not the same as being open — sign up for alerts so you hear when one reopens. The routes that do not depend on a fund balance are the GSK Patient Assistance Program and Medicare Extra Help.',
  extraHelpNote:
    'For Trelegy, Extra Help matters more than usual: the charity funds are closed and GSK\'s program requires you to spend $600 first. Extra Help has no such gate, and it lowers the copay on every covered drug — including the rescue inhaler you use alongside Trelegy.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Trelegy Ellipta in August 2026 the realistic order is manufacturer program → Extra Help, because no charity fund for COPD or asthma is open.',
      bullets: [
        'On Medicare Part D and already $600 into prescription spending this year → GSK Patient Assistance Program (confirm Trelegy by phone first).',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'COPD or asthma diagnosis → sign up for TotalAssist and HealthWell fund alerts (all closed when checked).',
        'Commercial insurance instead of Medicare → the Trelegy savings offer (Medicare enrollees cannot use it).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Trelegy appears in TotalAssist\'s medication index and on HealthWell\'s fund pages, but a listing does not mean funding is available. On the day we checked, none of those funds was open. Funding can change without notice.',
      bullets: [
        'GSK PAP: gskpaf.org shows the current application; call 1-866-728-4368 to confirm Trelegy is covered.',
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the COPD and Asthma funds.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The GSK rules are specific for Medicare patients — read them before you gather paperwork:',
      bullets: [
        'GSK PAP: a Medicare Part D plan; $600 already paid for prescriptions through that plan this calendar year (not premiums, not family members\' costs); household income at or below $47,880 (one person) or $64,920 (two people).',
        'TotalAssist (when open): government insurance covering Trelegy; income at or below 500% FPL adjusted for local cost of living; a COPD or asthma diagnosis in treatment.',
        'HealthWell (when open): insurance covering part of the drug; income up to 500% FPL; the COPD fund is Medicare-only.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The GSK application is a paper form with attachments, so collect these first:',
      bullets: [
        'Your most recent Part D plan statement (Explanation of Benefits) — every page — showing $600 paid for prescriptions this year. If you cannot get one, GSK will help you identify other proof.',
        'A copy of your Part D drug-plan card and your Medicare Beneficiary Identifier (the number on your Medicare card).',
        'A signed original prescription for Trelegy from your prescriber (or have the office fax it directly to GSK with a cover sheet).',
        'Household size and current annual household income.',
        'Names and phone numbers of anyone you want authorized to speak to GSK on your behalf.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'GSK PAP: you complete Section 1, sign and date the last page, attach the prescription and Part D documents, and mail or fax the packet yourself — no prescriber section to chase. Keep copies; originals are not returned.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone; PAF verifies your diagnosis with your provider.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'GSK PAP: you receive a letter saying whether you are enrolled; if approved, up to a 90-day supply ships automatically and refills continue at no cost through the end of the calendar year. GSK does not publish a review time.',
        'Part D patients must re-apply to GSK each calendar year after again spending $600.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts so you hear when a COPD or Asthma fund reopens — there is no waitlist or queue.',
        'If you are short of GSK\'s $600 spending rule, keep your Part D statements: once your prescription spending crosses $600 later in the year, you can apply.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Ask your doctor whether another maintenance inhaler on your plan\'s preferred tier would work for you, or about a formulary exception; compare Part D plans in the fall — Trelegy\'s tier differs from plan to plan.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Part D Explanation of Benefits showing $600 paid for prescriptions this year', note: 'GSK PAP — all pages of the most recent statement' },
    { item: 'Copy of your Part D drug-plan card and your Medicare Beneficiary Identifier', note: 'GSK PAP — do not send the original card' },
    { item: 'Signed original prescription for Trelegy', note: 'GSK PAP — or faxed directly from the prescriber\'s office with a cover sheet' },
  ],
  ifUnavailable: [
    {
      text: 'If you are not yet at GSK\'s $600 spending threshold, track your Part D statements and apply as soon as your prescription spending crosses $600 in the calendar year.',
      href: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
      label: 'GSK PAP — Medicare rules',
    },
    ...standardAlternatives('Trelegy'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Trelegy Ellipta?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Trelegy Ellipta as a maintenance inhaler for COPD and asthma, usually on a brand tier and sometimes with prior authorization or step therapy. Part D out-of-pocket costs are capped at $2,100 in 2026. From January 1, 2027, Medicare\'s negotiated price of $175 for a 30-day supply applies to what plans pay. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Trelegy patient assistance program for people on Medicare?',
      answer:
        'GSK\'s Patient Assistance Program accepts Medicare Part D enrollees who have paid $600 for prescriptions through their plan in the current calendar year and whose household income is at or below $47,880 (one person) or $64,920 (two). GSK does not publish a list of the medicines it covers, so call 1-866-728-4368 to confirm Trelegy before applying. Approved patients receive the medicine at no cost, shipped in up to 90-day supplies.',
    },
    {
      question: 'Can I use the Trelegy coupon with Medicare?',
      answer:
        'No. GSK\'s savings offer is for commercially insured patients only. Its terms exclude anyone enrolled in Medicare Part B, Medicare Part D, Medicaid, Medigap, VA, Department of Defense programs or TRICARE, and Medicare-eligible retirees on employer group waiver plans. The routes for Medicare patients are the GSK Patient Assistance Program, charitable funds and Extra Help.',
    },
    {
      question: 'Is there a charitable grant for Trelegy right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Trelegy under its COPD and Asthma funds, and HealthWell lists it under its Asthma and COPD – Medicare Access funds, but all of those were closed to new applicants. Good Days has no lung fund. Sign up for TotalAssist and HealthWell alerts and check back — funds open when money arrives.',
    },
    {
      question: 'Is there a generic for Trelegy Ellipta?',
      answer:
        'Not as of our August 2026 check. FDA\'s Drugs@FDA database lists only GSK\'s brand application for the three-ingredient combination. A generic application was accepted for FDA review in January 2026 but had not been approved. Ask your pharmacist if this changes; we will update this page when it does.',
    },
    {
      question: 'What is the Medicare negotiated price for Trelegy?',
      answer:
        'CMS reports a negotiated price of $175 for a 30-day supply of Trelegy Ellipta, effective January 1, 2027, compared with a 2024 list price of $654. It does not apply in 2026, and it sets what Part D plans pay rather than your copay directly — your plan\'s tier and cost-sharing still decide what you owe at the pharmacy.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications when a fund opens, with no waitlist or queue; HealthWell offers alerts for each fund. While you wait, the routes that do not depend on a fund balance are the GSK program ($600 rule), Extra Help, a formulary exception through your doctor, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['breztri', 'dupixent'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Trelegy' },
  ],
  sources: [
    label,
    gskpafMedicare,
    gskpafApplication,
    gskTrelegyPricing,
    trelegyTerms,
    trelegyHome,
    gskCoupons,
    gskDirect,
    SRC.cmsMfp2027,
    SRC.cmsNegotiatedPrices,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    totalAssistCopd,
    totalAssistAsthma,
    totalAssistCopdHe,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
    healthWellAsthma,
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
    title: 'How to Apply for Trelegy Ellipta Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the GSK Patient Assistance Program application, the $600 rule for Medicare Part D patients, and what to do while the charity funds are closed.',
  },
  description_meta:
    'How to find financial assistance for Trelegy Ellipta on Medicare: the GSK Patient Assistance Program and its $600 rule, why the savings card excludes Medicare, charitable fund status, and Medicare Extra Help — verified August 2026.',
};
