import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "What is Medicare Advantage?",
    a: "Medicare Advantage, also called Part C, is a private plan that bundles your Medicare benefits into one plan approved by Medicare. It replaces how you get Original Medicare (Parts A and B), and most plans also include prescription drug coverage and extra benefits. You still have Medicare, but the plan administers your care, usually through a provider network.",
    links: [
      { href: "/medicare-advantage.html", label: "Medicare Advantage Overview" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["quiz"],
  },
  {
    q: "What is the difference between Medicare Advantage and Original Medicare?",
    a: "Original Medicare (Parts A and B) lets you see any provider nationwide that accepts Medicare, has no out-of-pocket maximum, and does not include drug coverage. Medicare Advantage bundles your coverage into one private plan that usually uses a provider network, caps your annual out-of-pocket costs, and often adds drug and extra benefits. Each path has trade-offs around freedom, cost, and convenience.",
    links: [
      { href: "/blog/medicare-advantage-vs-medigap.html", label: "Medicare Advantage vs. Medigap" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["quiz", "cost-estimator"],
  },
  {
    q: "Does Medicare Advantage cover prescription drugs?",
    a: "Most Medicare Advantage plans include prescription drug coverage built in, so you do not need a separate Part D plan. These are often called MAPD plans. A few Medicare Advantage plans do not include drugs, so always confirm before enrolling. In 2026, covered drug spending is capped at $2,000 per year, and insulin is capped at $35 per month.",
    links: [
      { href: "/medicare-advantage.html", label: "Medicare Advantage Overview" },
      { href: "/blog/the-2000-drug-cap-explained.html", label: "The $2,000 Drug Cap Explained" },
    ],
    tools: ["drug-cost", "formulary"],
  },
  {
    q: "What are the pros and cons of Medicare Advantage?",
    a: "Pros include lower or $0 monthly premiums, an annual out-of-pocket maximum, bundled drug coverage, and extra benefits like dental and vision. Cons include provider networks that limit which doctors you can use, referral and prior authorization rules, and costs that vary based on the care you receive. The right choice depends on your health, budget, and preferred providers.",
    links: [
      { href: "/blog/pros-and-cons-of-medicare-advantage.html", label: "Pros and Cons of Medicare Advantage" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["quiz", "cost-estimator"],
  },
  {
    q: "Does Medicare Advantage have provider networks?",
    a: "Yes. Most Medicare Advantage plans use provider networks, and the type of plan affects your flexibility. HMO plans generally require you to use in-network providers and get referrals, while PPO plans let you go out of network at a higher cost. Before enrolling, confirm that your doctors, hospitals, and pharmacies are in the plan's network.",
    links: [
      { href: "/blog/pros-and-cons-of-medicare-advantage.html", label: "Pros and Cons of Medicare Advantage" },
      { href: "/medicare-advantage.html", label: "Medicare Advantage Overview" },
    ],
    tools: ["quiz"],
  },
  {
    q: "Do I still pay the Part B premium with Medicare Advantage?",
    a: "Yes. To stay enrolled in Medicare Advantage you must keep paying your Part B premium, which is $202.90 per month in 2026. The plan itself may charge little or no additional premium, but the Part B premium is separate and still required. Some plans help offset this through a Part B premium reduction benefit.",
    links: [
      { href: "/blog/medicare-part-b-premiums-2026.html", label: "Medicare Part B Premiums 2026" },
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "Does Medicare Advantage have an out-of-pocket maximum?",
    a: "Yes. Every Medicare Advantage plan must cap your annual out-of-pocket costs for covered Part A and Part B services, which protects you from unlimited spending. Once you reach that limit, the plan pays 100% of covered care for the rest of the year. This is a key advantage over Original Medicare, which has no out-of-pocket maximum.",
    links: [
      { href: "/blog/medicare-advantage-vs-medigap.html", label: "Medicare Advantage vs. Medigap" },
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "Can I switch from Medicare Advantage back to Original Medicare?",
    a: "Yes. You can switch during the Annual Enrollment Period (Oct 15 to Dec 7) or the Medicare Advantage Open Enrollment Period (Jan 1 to Mar 31). When you return to Original Medicare, you may want a Part D drug plan and a Medigap policy, but Medigap can require medical underwriting outside guaranteed-issue windows, so plan carefully.",
    links: [
      { href: "/blog/annual-enrollment-period-explained.html", label: "Annual Enrollment Period Explained" },
      { href: "/blog/medicare-advantage-vs-medigap.html", label: "Medicare Advantage vs. Medigap" },
    ],
    tools: ["timeline"],
  },
  {
    q: "What is a D-SNP?",
    a: "A D-SNP, or Dual Eligible Special Needs Plan, is a type of Medicare Advantage plan built for people who have both Medicare and Medicaid. These plans coordinate both programs, often charge $0 premiums, and add extra benefits tailored to dual-eligible members. To qualify, you must have Medicare and meet your state's Medicaid eligibility rules.",
    links: [
      { href: "/blog/d-snp-plans-explained.html", label: "D-SNP Plans Explained" },
      { href: "/dual-eligible.html", label: "Dual Eligible Coverage" },
    ],
    tools: ["eligibility"],
  },
  {
    q: "What extra benefits do Medicare Advantage plans offer?",
    a: "Many Medicare Advantage plans add benefits Original Medicare does not cover, such as dental, vision, hearing aids, and fitness memberships. Some plans also include over-the-counter allowances, transportation to appointments, and telehealth. Dual-eligible plans often offer even richer extras, like grocery or utility allowances. Benefits vary widely by plan, so compare options before enrolling.",
    links: [
      { href: "/blog/extra-benefits-for-dual-eligible-beneficiaries.html", label: "Extra Benefits for Dual-Eligible Beneficiaries" },
      { href: "/dental-vision-hearing.html", label: "Dental, Vision, and Hearing" },
    ],
    tools: ["quiz"],
  },
];
