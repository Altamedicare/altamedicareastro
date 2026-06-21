import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "How much does Medicare cost in 2026?",
    a: "Most people pay nothing for Part A and $202.90 a month for Part B in 2026. On top of that you may have a Part D drug plan (base premium $38.99), plus deductibles and coinsurance. Higher earners pay IRMAA surcharges, and many people add a Medigap or Medicare Advantage plan, so total cost varies widely by the coverage you choose.",
    links: [
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "How much is the Medicare Part B premium in 2026?",
    a: "The standard Medicare Part B premium for 2026 is $202.90 per month. Most people pay this amount, and it is usually deducted automatically from your Social Security check. If your income is above $109,000 (single) or $218,000 (joint), you pay a higher premium because of the IRMAA surcharge.",
    links: [
      { href: "/blog/medicare-part-b-premiums-2026.html", label: "Medicare Part B Premiums in 2026" },
    ],
    tools: ["cost-estimator", "irmaa"],
  },
  {
    q: "What is the Medicare Part B deductible?",
    a: "The Part B deductible is $283 in 2026. You pay this amount out of pocket for covered outpatient services before Medicare begins to pay its share. After you meet the deductible, you typically pay 20% coinsurance for most doctor visits and outpatient care, and Original Medicare has no annual out-of-pocket maximum.",
    links: [
      { href: "/blog/what-is-the-medicare-part-b-deductible.html", label: "What Is the Medicare Part B Deductible?" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "What is the Medicare Part A deductible?",
    a: "The Part A hospital deductible is $1,736 per benefit period in 2026. You pay this when you are admitted as an inpatient, and it covers your first 60 days in the hospital. A benefit period resets if you go 60 days without inpatient care, so you could owe it more than once in a year.",
    links: [
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "Is Medicare Part A really free?",
    a: "For most people Part A has a $0 monthly premium, because they or their spouse paid Medicare taxes for at least 10 years (40 quarters) while working. Part A is not entirely free, though: if you are hospitalized you still owe the $1,736 deductible and later daily coinsurance. People without enough work history may have to pay a Part A premium.",
    links: [
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
    ],
  },
  {
    q: "What is the Medicare Part D premium?",
    a: "The national base Part D premium is $38.99 a month in 2026, but actual prices vary by plan and region. Your real premium depends on which drug plan you choose, and higher earners pay an extra IRMAA amount on top. Insulin is capped at $35 a month and recommended adult vaccines are $0 under every Part D plan.",
    links: [
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
    ],
    tools: ["drug-cost", "formulary"],
  },
  {
    q: "What is IRMAA?",
    a: "IRMAA stands for Income-Related Monthly Adjustment Amount. It is an extra charge added to your Part B and Part D premiums if your income is above certain limits. In 2026 it starts above $109,000 for single filers and $218,000 for joint filers. The higher your income, the larger the surcharge you pay on top of the standard premiums.",
    links: [
      { href: "/blog/irmaa-brackets-explained.html", label: "IRMAA Brackets Explained" },
    ],
    tools: ["irmaa"],
  },
  {
    q: "How is IRMAA calculated?",
    a: "IRMAA is based on your modified adjusted gross income (MAGI) from your tax return two years earlier, so 2026 surcharges use your 2024 income. Social Security checks that income against a set of brackets and adds a fixed surcharge to both Part B and Part D once you cross the first threshold of $109,000 single or $218,000 joint.",
    links: [
      { href: "/blog/irmaa-brackets-explained.html", label: "IRMAA Brackets Explained" },
    ],
    tools: ["irmaa"],
  },
  {
    q: "Can I appeal IRMAA?",
    a: "Yes. If you have had a major life-changing event such as retirement, marriage, divorce, or the death of a spouse that lowered your income, you can ask Social Security to reconsider your IRMAA. You file Form SSA-44 with proof of the change. If approved, Social Security uses your more recent income instead of the return from two years ago.",
    links: [
      { href: "/blog/irmaa-brackets-explained.html", label: "IRMAA Brackets Explained" },
    ],
    tools: ["irmaa"],
  },
  {
    q: "Does Medicare have an out-of-pocket maximum?",
    a: "Original Medicare (Part A and Part B) has no annual out-of-pocket maximum, so your 20% coinsurance can add up with no ceiling. That is why many people add a Medigap policy or choose a Medicare Advantage plan, which does include a yearly out-of-pocket cap. Part D drug coverage also has its own separate $2,000 cap.",
    links: [
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
      { href: "/medicare-supplement.html", label: "Medicare Supplement Plans" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "What is the $2,000 drug cap?",
    a: "Starting in 2025, Part D includes a hard cap on what you pay out of pocket for covered prescription drugs, set at $2,000 a year in 2026. Once your out-of-pocket drug spending reaches that limit, you pay nothing more for covered drugs the rest of the year. This change replaced the old coverage gap, often called the donut hole, which no longer exists.",
    links: [
      { href: "/blog/the-2000-drug-cap-explained.html", label: "The $2,000 Drug Cap Explained" },
    ],
    tools: ["drug-cost"],
  },
  {
    q: "What is Extra Help?",
    a: "Extra Help is a federal program that lowers your Part D drug costs if you have limited income and resources. With full Extra Help in 2026, you pay no more than $12.65 for each covered drug, plus reduced or no premium and deductible. Resource limits are $16,590 for an individual and $33,100 for a married couple. You apply through Social Security.",
    links: [
      { href: "/blog/extra-help-explained.html", label: "Extra Help Explained" },
    ],
    tools: ["drug-cost"],
  },
  {
    q: "What are the Medicare Savings Programs?",
    a: "Medicare Savings Programs are state-run programs that help pay your Medicare premiums and sometimes deductibles and coinsurance. The three main ones are QMB, SLMB, and QI, each with its own monthly income limit and a shared resource limit of $9,950 single or $14,910 married in 2026. QMB even protects you from balance billing on covered services.",
    links: [
      { href: "/blog/medicare-savings-programs.html", label: "Medicare Savings Programs" },
    ],
  },
  {
    q: "What does Medicare not cover?",
    a: "Original Medicare generally does not cover routine dental, vision, or hearing care, long-term custodial care, or most care outside the United States. It also will not cover drugs prescribed purely for weight loss, though some of those drugs are covered for approved uses like diabetes or cardiovascular risk. Standalone or Advantage plans can add some of these benefits.",
    links: [
      { href: "/dental-vision-hearing.html", label: "Dental, Vision, and Hearing" },
      { href: "/medicare-advantage.html", label: "Medicare Advantage" },
    ],
  },
  {
    q: "How can I lower my Medicare costs?",
    a: "You can lower costs by applying for Extra Help or a Medicare Savings Program if your income qualifies, comparing Part D plans each year so your drugs are covered well, and appealing IRMAA after a life-changing event. Choosing the right Medigap or Medicare Advantage plan also caps your exposure. A licensed agent can review your situation at no cost.",
    links: [
      { href: "/blog/medicare-savings-programs.html", label: "Medicare Savings Programs" },
      { href: "/blog/extra-help-explained.html", label: "Extra Help Explained" },
    ],
    tools: ["cost-estimator", "drug-cost"],
  },
];
