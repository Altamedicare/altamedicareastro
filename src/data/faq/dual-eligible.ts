import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "What is dual eligibility?",
    a: "Dual eligibility means you qualify for both Medicare and Medicaid at the same time. Medicare is your primary coverage, and Medicaid helps pay costs Medicare leaves behind, such as premiums, deductibles, and coinsurance. People who are dual eligible often pay little or nothing out of pocket and may qualify for special plans built for their needs.",
    links: [
      { href: "/blog/what-is-dual-eligibility.html", label: "What Is Dual Eligibility?" },
      { href: "/dual-eligible.html", label: "Dual Eligible Coverage" },
    ],
    tools: ["eligibility"],
  },
  {
    q: "What is the difference between Medicare and Medicaid?",
    a: "Medicare is a federal health program for people 65 and older or with certain disabilities, regardless of income. Medicaid is a joint federal and state program that helps cover health costs for people with limited income and resources. If you qualify for both, Medicare pays first and Medicaid wraps around it to cover most remaining costs.",
    links: [
      { href: "/blog/medicare-and-medicaid-together.html", label: "Medicare and Medicaid Together" },
      { href: "/blog/what-is-dual-eligibility.html", label: "What Is Dual Eligibility?" },
    ],
    tools: ["eligibility"],
  },
  {
    q: "What are the Medicare Savings Programs?",
    a: "Medicare Savings Programs are state-run programs that help pay your Medicare costs if you have limited income and resources. The three main programs are QMB, SLMB, and QI, each with different income limits and benefits. In 2026 the shared resource limits are $9,950 for an individual and $14,910 for a married couple.",
    links: [
      { href: "/blog/medicare-savings-programs.html", label: "Medicare Savings Programs" },
      { href: "/blog/qmb-vs-slmb-vs-qi.html", label: "QMB vs SLMB vs QI" },
    ],
    tools: ["eligibility", "cost-estimator"],
  },
  {
    q: "What is the QMB program?",
    a: "The Qualified Medicare Beneficiary (QMB) program is the most generous Medicare Savings Program. It pays your Part A and Part B premiums plus your deductibles, coinsurance, and copayments. In 2026 you may qualify with monthly income up to $1,350 single or $1,824 married. Under QMB, providers cannot bill you for covered Medicare costs.",
    links: [
      { href: "/blog/what-is-the-qmb-program.html", label: "What Is the QMB Program?" },
      { href: "/blog/medicare-savings-programs.html", label: "Medicare Savings Programs" },
    ],
    tools: ["eligibility"],
  },
  {
    q: "What is the difference between QMB, SLMB, and QI?",
    a: "All three are Medicare Savings Programs, but they cover different amounts. QMB pays Part A and B premiums plus all cost-sharing (2026 income up to $1,350 single). SLMB pays only the Part B premium (up to $1,616 single). QI also pays only the Part B premium (up to $1,816 single) but is first-come, first-served and funded yearly.",
    links: [
      { href: "/blog/qmb-vs-slmb-vs-qi.html", label: "QMB vs SLMB vs QI" },
      { href: "/blog/medicare-savings-programs.html", label: "Medicare Savings Programs" },
    ],
    tools: ["eligibility", "cost-estimator"],
  },
  {
    q: "What is a D-SNP?",
    a: "A Dual Eligible Special Needs Plan (D-SNP) is a type of Medicare Advantage plan designed only for people who have both Medicare and Medicaid. These plans coordinate your Medicare and Medicaid benefits in one package and often add extras like dental, vision, hearing, and over-the-counter allowances. They are built to keep your out-of-pocket costs very low.",
    links: [
      { href: "/blog/d-snp-plans-explained.html", label: "D-SNP Plans Explained" },
      { href: "/dual-eligible.html", label: "Dual Eligible Coverage" },
    ],
  },
  {
    q: "Do dual eligible members pay Medicare premiums?",
    a: "Most dual eligible members pay little or no Medicare premiums. If you qualify for QMB, SLMB, or QI, the program pays your Part B premium of $202.90 per month, and QMB also pays your Part A premium and cost-sharing. Many duals also get Extra Help, which lowers Part D drug costs. Your exact savings depend on which programs you qualify for.",
    links: [
      { href: "/blog/do-dual-eligible-members-pay-medicare-costs.html", label: "Do Dual Eligible Members Pay Medicare Costs?" },
      { href: "/blog/medicare-savings-programs.html", label: "Medicare Savings Programs" },
    ],
    tools: ["cost-estimator", "eligibility"],
  },
  {
    q: "What is Extra Help and how do duals get it?",
    a: "Extra Help is a federal program that lowers your Medicare Part D prescription drug costs, including premiums, deductibles, and copays. With full Extra Help you pay no more than $12.65 per covered drug in 2026. If you have Medicaid or a Medicare Savings Program, you are automatically enrolled in Extra Help, so most dual eligible members get it without a separate application.",
    links: [
      { href: "/blog/extra-help-and-dual-eligibility.html", label: "Extra Help and Dual Eligibility" },
      { href: "/blog/extra-help-explained.html", label: "Extra Help Explained" },
    ],
    tools: ["eligibility", "drug-cost"],
  },
  {
    q: "How do I apply for Medicaid in Utah?",
    a: "In Utah you apply for Medicaid through the Department of Workforce Services, online at jobs.utah.gov, by phone, or in person at a local office. You will need to share income, resource, and household information to confirm eligibility. A licensed agent can help you understand whether you qualify and how Medicaid will work alongside your Medicare coverage.",
    links: [
      { href: "/blog/how-to-apply-for-medicaid-in-utah.html", label: "How to Apply for Medicaid in Utah" },
      { href: "/contact.html", label: "Talk to Bret" },
    ],
    tools: ["eligibility"],
  },
  {
    q: "What happens if I lose Medicaid?",
    a: "If you lose Medicaid, you keep your Medicare coverage, but you may start paying premiums, deductibles, and coinsurance that Medicaid had covered. Losing Medicaid usually triggers a Special Enrollment Period so you can change your Medicare Advantage or drug plan. Acting quickly helps you avoid coverage gaps, and you may requalify for a Medicare Savings Program.",
    links: [
      { href: "/blog/losing-medicaid-what-happens-to-medicare.html", label: "Losing Medicaid: What Happens to Medicare" },
      { href: "/blog/medicare-savings-programs.html", label: "Medicare Savings Programs" },
    ],
    tools: ["eligibility", "cost-estimator"],
  },
];
