declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"annual-enrollment-period-explained.md": {
	id: "annual-enrollment-period-explained.md";
  slug: "annual-enrollment-period-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"can-i-delay-medicare-part-b.md": {
	id: "can-i-delay-medicare-part-b.md";
  slug: "can-i-delay-medicare-part-b";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"d-snp-plans-explained.md": {
	id: "d-snp-plans-explained.md";
  slug: "d-snp-plans-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"do-dual-eligible-members-pay-medicare-costs.md": {
	id: "do-dual-eligible-members-pay-medicare-costs.md";
  slug: "do-dual-eligible-members-pay-medicare-costs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-dupixent.md": {
	id: "does-medicare-cover-dupixent.md";
  slug: "does-medicare-cover-dupixent";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-eliquis.md": {
	id: "does-medicare-cover-eliquis.md";
  slug: "does-medicare-cover-eliquis";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-enbrel.md": {
	id: "does-medicare-cover-enbrel.md";
  slug: "does-medicare-cover-enbrel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-entresto.md": {
	id: "does-medicare-cover-entresto.md";
  slug: "does-medicare-cover-entresto";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-farxiga.md": {
	id: "does-medicare-cover-farxiga.md";
  slug: "does-medicare-cover-farxiga";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-humira.md": {
	id: "does-medicare-cover-humira.md";
  slug: "does-medicare-cover-humira";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-inhalers.md": {
	id: "does-medicare-cover-inhalers.md";
  slug: "does-medicare-cover-inhalers";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-insulin.md": {
	id: "does-medicare-cover-insulin.md";
  slug: "does-medicare-cover-insulin";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-jardiance.md": {
	id: "does-medicare-cover-jardiance.md";
  slug: "does-medicare-cover-jardiance";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-mounjaro.md": {
	id: "does-medicare-cover-mounjaro.md";
  slug: "does-medicare-cover-mounjaro";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-ozempic.md": {
	id: "does-medicare-cover-ozempic.md";
  slug: "does-medicare-cover-ozempic";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-repatha.md": {
	id: "does-medicare-cover-repatha.md";
  slug: "does-medicare-cover-repatha";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-rinvoq.md": {
	id: "does-medicare-cover-rinvoq.md";
  slug: "does-medicare-cover-rinvoq";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-skyrizi.md": {
	id: "does-medicare-cover-skyrizi.md";
  slug: "does-medicare-cover-skyrizi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-trelegy.md": {
	id: "does-medicare-cover-trelegy.md";
  slug: "does-medicare-cover-trelegy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-trulicity.md": {
	id: "does-medicare-cover-trulicity.md";
  slug: "does-medicare-cover-trulicity";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-wegovy.md": {
	id: "does-medicare-cover-wegovy.md";
  slug: "does-medicare-cover-wegovy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-xarelto.md": {
	id: "does-medicare-cover-xarelto.md";
  slug: "does-medicare-cover-xarelto";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"does-medicare-cover-zepbound.md": {
	id: "does-medicare-cover-zepbound.md";
  slug: "does-medicare-cover-zepbound";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"dual-eligible-checklist.md": {
	id: "dual-eligible-checklist.md";
  slug: "dual-eligible-checklist";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"extra-benefits-for-dual-eligible-beneficiaries.md": {
	id: "extra-benefits-for-dual-eligible-beneficiaries.md";
  slug: "extra-benefits-for-dual-eligible-beneficiaries";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"extra-help-and-dual-eligibility.md": {
	id: "extra-help-and-dual-eligibility.md";
  slug: "extra-help-and-dual-eligibility";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"extra-help-explained.md": {
	id: "extra-help-explained.md";
  slug: "extra-help-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"full-vs-partial-dual-eligibility.md": {
	id: "full-vs-partial-dual-eligibility.md";
  slug: "full-vs-partial-dual-eligibility";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"general-enrollment-period-explained.md": {
	id: "general-enrollment-period-explained.md";
  slug: "general-enrollment-period-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-much-does-medicare-cost.md": {
	id: "how-much-does-medicare-cost.md";
  slug: "how-much-does-medicare-cost";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-apply-for-medicaid-in-utah.md": {
	id: "how-to-apply-for-medicaid-in-utah.md";
  slug: "how-to-apply-for-medicaid-in-utah";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-enroll-in-a-d-snp.md": {
	id: "how-to-enroll-in-a-d-snp.md";
  slug: "how-to-enroll-in-a-d-snp";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"inflation-reduction-act-medicare-changes.md": {
	id: "inflation-reduction-act-medicare-changes.md";
  slug: "inflation-reduction-act-medicare-changes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"initial-enrollment-period-explained.md": {
	id: "initial-enrollment-period-explained.md";
  slug: "initial-enrollment-period-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"irmaa-brackets-explained.md": {
	id: "irmaa-brackets-explained.md";
  slug: "irmaa-brackets-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"losing-medicaid-what-happens-to-medicare.md": {
	id: "losing-medicaid-what-happens-to-medicare.md";
  slug: "losing-medicaid-what-happens-to-medicare";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicaid-income-limits.md": {
	id: "medicaid-income-limits.md";
  slug: "medicaid-income-limits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-35-dollar-insulin-cap.md": {
	id: "medicare-35-dollar-insulin-cap.md";
  slug: "medicare-35-dollar-insulin-cap";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-advantage-vs-medigap.md": {
	id: "medicare-advantage-vs-medigap.md";
  slug: "medicare-advantage-vs-medigap";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-and-employer-coverage-after-65.md": {
	id: "medicare-and-employer-coverage-after-65.md";
  slug: "medicare-and-employer-coverage-after-65";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-and-medicaid-together.md": {
	id: "medicare-and-medicaid-together.md";
  slug: "medicare-and-medicaid-together";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-changes-for-2027.md": {
	id: "medicare-changes-for-2027.md";
  slug: "medicare-changes-for-2027";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-checklist-turning-65.md": {
	id: "medicare-checklist-turning-65.md";
  slug: "medicare-checklist-turning-65";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-late-enrollment-penalties.md": {
	id: "medicare-late-enrollment-penalties.md";
  slug: "medicare-late-enrollment-penalties";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-part-b-premiums-2026.md": {
	id: "medicare-part-b-premiums-2026.md";
  slug: "medicare-part-b-premiums-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-savings-programs.md": {
	id: "medicare-savings-programs.md";
  slug: "medicare-savings-programs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"medicare-timeline-explained.md": {
	id: "medicare-timeline-explained.md";
  slug: "medicare-timeline-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"new-part-d-rules.md": {
	id: "new-part-d-rules.md";
  slug: "new-part-d-rules";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pros-and-cons-of-medicare-advantage.md": {
	id: "pros-and-cons-of-medicare-advantage.md";
  slug: "pros-and-cons-of-medicare-advantage";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"qmb-vs-slmb-vs-qi.md": {
	id: "qmb-vs-slmb-vs-qi.md";
  slug: "qmb-vs-slmb-vs-qi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"special-enrollment-period-explained.md": {
	id: "special-enrollment-period-explained.md";
  slug: "special-enrollment-period-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-2000-drug-cap-explained.md": {
	id: "the-2000-drug-cap-explained.md";
  slug: "the-2000-drug-cap-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-happens-if-you-miss-medicare-enrollment.md": {
	id: "what-happens-if-you-miss-medicare-enrollment.md";
  slug: "what-happens-if-you-miss-medicare-enrollment";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-dual-eligibility.md": {
	id: "what-is-dual-eligibility.md";
  slug: "what-is-dual-eligibility";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-medicare-supplement-plan-g.md": {
	id: "what-is-medicare-supplement-plan-g.md";
  slug: "what-is-medicare-supplement-plan-g";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-medicare-supplement-plan-n.md": {
	id: "what-is-medicare-supplement-plan-n.md";
  slug: "what-is-medicare-supplement-plan-n";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-prior-authorization.md": {
	id: "what-is-prior-authorization.md";
  slug: "what-is-prior-authorization";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-step-therapy.md": {
	id: "what-is-step-therapy.md";
  slug: "what-is-step-therapy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-the-medicare-part-b-deductible.md": {
	id: "what-is-the-medicare-part-b-deductible.md";
  slug: "what-is-the-medicare-part-b-deductible";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-the-qmb-program.md": {
	id: "what-is-the-qmb-program.md";
  slug: "what-is-the-qmb-program";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"which-medicare-plan-is-right-for-me.md": {
	id: "which-medicare-plan-is-right-for-me.md";
  slug: "which-medicare-plan-is-right-for-me";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"news": {
"extra-help-missed-savings.md": {
	id: "extra-help-missed-savings.md";
  slug: "extra-help-missed-savings";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"insulin-35-dollar-cap.md": {
	id: "insulin-35-dollar-cap.md";
  slug: "insulin-35-dollar-cap";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"medicare-advantage-changes-2026.md": {
	id: "medicare-advantage-changes-2026.md";
  slug: "medicare-advantage-changes-2026";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"medicare-glp-1-bridge-2026.md": {
	id: "medicare-glp-1-bridge-2026.md";
  slug: "medicare-glp-1-bridge-2026";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"medicare-scam-calls-alert.md": {
	id: "medicare-scam-calls-alert.md";
  slug: "medicare-scam-calls-alert";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"part-d-2000-cap.md": {
	id: "part-d-2000-cap.md";
  slug: "part-d-2000-cap";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
