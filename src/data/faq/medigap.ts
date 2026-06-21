import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "What is Medigap?",
    a: "Medigap, also called Medicare Supplement insurance, is a private policy that pairs with Original Medicare (Parts A and B) to help pay your share of covered costs, such as deductibles, copays, and the 20% coinsurance. Plans are standardized and sold by letter (like Plan G or Plan N), so the same lettered plan offers the same core benefits no matter the carrier. Medigap does not replace Medicare; it fills the gaps.",
    links: [
      { href: "/medicare-supplement.html", label: "Medicare Supplement Overview" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["quiz"],
  },
  {
    q: "What is the difference between Medigap and Medicare Advantage?",
    a: "Medigap works alongside Original Medicare and pays your share of costs, letting you see any provider that accepts Medicare with no networks or referrals. Medicare Advantage replaces Original Medicare with an all-in-one private plan that usually uses networks and may include drug and extra benefits. You cannot have both at the same time, so most people choose one approach based on flexibility versus lower upfront premiums.",
    links: [
      { href: "/blog/medicare-advantage-vs-medigap.html", label: "Medicare Advantage vs. Medigap" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["quiz"],
  },
  {
    q: "What is Medicare Supplement Plan G?",
    a: "Plan G is one of the most popular Medigap plans because it covers nearly all of your out-of-pocket costs under Original Medicare. After you pay the annual Part B deductible of $283, Plan G picks up the Part A and B coinsurance, hospital costs, and excess charges, leaving you with very predictable spending. It does not cover the Part B deductible itself, which is the only major gap.",
    links: [
      { href: "/blog/what-is-medicare-supplement-plan-g.html", label: "What Is Medicare Supplement Plan G?" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "What is Medicare Supplement Plan N?",
    a: "Plan N offers strong coverage with a lower premium than Plan G in exchange for a few out-of-pocket items. After the Part B deductible of $283, you may pay small copays of up to $20 for office visits and up to $50 for emergency room trips, and Plan N does not cover Part B excess charges. It can be a good fit if you want lower monthly costs and do not mind modest copays.",
    links: [
      { href: "/blog/what-is-medicare-supplement-plan-n.html", label: "What Is Medicare Supplement Plan N?" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "Does Medigap cover prescription drugs?",
    a: "No. Medigap policies sold today do not include prescription drug coverage. To get drug coverage while you have Medigap, you add a standalone Medicare Part D plan, which covers most outpatient medications and caps your annual out-of-pocket drug spending at $2,000 in 2026. Pairing Medigap with a Part D plan gives you broad medical and drug protection.",
    links: [
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
      { href: "/blog/the-2000-drug-cap-explained.html", label: "The $2,000 Drug Cap Explained" },
    ],
    tools: ["drug-cost", "formulary"],
  },
  {
    q: "When is the best time to buy a Medigap policy?",
    a: "The best time is during your Medigap Open Enrollment Period, the six months that begin when you are 65 or older and enrolled in Part B. During this window you have guaranteed-issue rights, meaning you cannot be turned down or charged more for health reasons. Buying outside this period often means medical underwriting, so enrolling on time protects both your access and your price.",
    links: [
      { href: "/medicare-supplement.html", label: "Medicare Supplement Overview" },
      { href: "/turning-65.html", label: "Turning 65" },
    ],
    tools: ["timeline"],
  },
  {
    q: "Can I be denied a Medigap policy?",
    a: "Yes, outside of protected periods. During your six-month Medigap Open Enrollment Period, or when you have certain guaranteed-issue rights, insurers must sell you a policy regardless of health. If you apply later, carriers can use medical underwriting to deny coverage or charge more based on your health history. That is why enrolling during your open enrollment window is so important.",
    links: [
      { href: "/medicare-supplement.html", label: "Medicare Supplement Overview" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["quiz"],
  },
  {
    q: "Does Medigap have provider networks?",
    a: "No. Because Medigap works with Original Medicare, you can see any doctor, specialist, or hospital in the country that accepts Medicare, with no networks and no referrals. This nationwide freedom is one of the main reasons people choose a supplement plan. As long as a provider accepts Medicare, your Medigap policy helps pay its share of the covered costs.",
    links: [
      { href: "/blog/medicare-advantage-vs-medigap.html", label: "Medicare Advantage vs. Medigap" },
    ],
  },
  {
    q: "How much does Medigap cost?",
    a: "Medigap premiums vary by plan letter, your age, location, and the insurance company, often ranging from roughly $100 to $300 or more per month. You also continue paying your Part B premium of $202.90 in 2026. Because the same lettered plan offers identical benefits across carriers, comparing prices is the best way to find value for the coverage you want.",
    links: [
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
      { href: "/medicare-supplement.html", label: "Medicare Supplement Overview" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "Can I switch Medigap plans later?",
    a: "Yes, you can apply to change Medigap plans at any time of year, but timing matters. Unless you have a guaranteed-issue right, the new insurer can use medical underwriting, so you could be denied or charged more based on your health. If you are healthy and want to lower your premium or change benefits, comparing plans and applying before any health changes gives you the best odds.",
    links: [
      { href: "/medicare-supplement.html", label: "Medicare Supplement Overview" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["cost-estimator", "quiz"],
  },
];
