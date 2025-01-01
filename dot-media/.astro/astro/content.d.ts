declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

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
		"docs": {
"creators/0xgoku.mdx": {
	id: "creators/0xgoku.mdx";
  slug: "creators/0xgoku";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"creators/emil-kietzman.mdx": {
	id: "creators/emil-kietzman.mdx";
  slug: "creators/emil-kietzman";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"creators/index.mdx": {
	id: "creators/index.mdx";
  slug: "creators";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"creators/jamman.mdx": {
	id: "creators/jamman.mdx";
  slug: "creators/jamman";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"creators/lv.mdx": {
	id: "creators/lv.mdx";
  slug: "creators/lv";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"creators/pieky.mdx": {
	id: "creators/pieky.mdx";
  slug: "creators/pieky";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"creators/visualize-polkadot-value.mdx": {
	id: "creators/visualize-polkadot-value.mdx";
  slug: "creators/visualize-polkadot-value";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/decoded/2023/gavin-wood-sees-polkadot-as-a-global-supercomputer.md": {
	id: "events/decoded/2023/gavin-wood-sees-polkadot-as-a-global-supercomputer.md";
  slug: "events/decoded/2023/gavin-wood-sees-polkadot-as-a-global-supercomputer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/100m-polkadot-ecosystem-fund-by-harbour-industrial-capital.md": {
	id: "events/decoded/2024/100m-polkadot-ecosystem-fund-by-harbour-industrial-capital.md";
  slug: "events/decoded/2024/100m-polkadot-ecosystem-fund-by-harbour-industrial-capital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/agile-coretime-architecture-and-pricing-deep-dive.md": {
	id: "events/decoded/2024/agile-coretime-architecture-and-pricing-deep-dive.md";
  slug: "events/decoded/2024/agile-coretime-architecture-and-pricing-deep-dive";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/agile-coretime-the-first-step-towards-polkadot-2-0.md": {
	id: "events/decoded/2024/agile-coretime-the-first-step-towards-polkadot-2-0.md";
  slug: "events/decoded/2024/agile-coretime-the-first-step-towards-polkadot-2-0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/bjorn-wagner-on-paritys-contributions-to-polkadots-growth.md": {
	id: "events/decoded/2024/bjorn-wagner-on-paritys-contributions-to-polkadots-growth.md";
  slug: "events/decoded/2024/bjorn-wagner-on-paritys-contributions-to-polkadots-growth";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/decentralized-voices-program-transforming-governance-in-polkadots-opengov.md": {
	id: "events/decoded/2024/decentralized-voices-program-transforming-governance-in-polkadots-opengov.md";
  slug: "events/decoded/2024/decentralized-voices-program-transforming-governance-in-polkadots-opengov";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/deloitte-unlocking-enterprise-potential-engaging-with-daos.md": {
	id: "events/decoded/2024/deloitte-unlocking-enterprise-potential-engaging-with-daos.md";
  slug: "events/decoded/2024/deloitte-unlocking-enterprise-potential-engaging-with-daos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/dot-play-accelerating-gaming-on-polkadot-insights-from-ajuna.md": {
	id: "events/decoded/2024/dot-play-accelerating-gaming-on-polkadot-insights-from-ajuna.md";
  slug: "events/decoded/2024/dot-play-accelerating-gaming-on-polkadot-insights-from-ajuna";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/enhancing-polkadot-developer-experience-decoded-2024.md": {
	id: "events/decoded/2024/enhancing-polkadot-developer-experience-decoded-2024.md";
  slug: "events/decoded/2024/enhancing-polkadot-developer-experience-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/enhancing-polkadot-developer-experience-with-pop.md": {
	id: "events/decoded/2024/enhancing-polkadot-developer-experience-with-pop.md";
  slug: "events/decoded/2024/enhancing-polkadot-developer-experience-with-pop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/every-chip-counts-acurast-mobile-cloud-rebellion.md": {
	id: "events/decoded/2024/every-chip-counts-acurast-mobile-cloud-rebellion.md";
  slug: "events/decoded/2024/every-chip-counts-acurast-mobile-cloud-rebellion";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/exploring-web3-coinless-users-with-frequency-decoded-2024.md": {
	id: "events/decoded/2024/exploring-web3-coinless-users-with-frequency-decoded-2024.md";
  slug: "events/decoded/2024/exploring-web3-coinless-users-with-frequency-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/future-of-governance-and-decentralization-at-polkadot.md": {
	id: "events/decoded/2024/future-of-governance-and-decentralization-at-polkadot.md";
  slug: "events/decoded/2024/future-of-governance-and-decentralization-at-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/gavin-wood-keynote-polkadot-decoded-2024.md": {
	id: "events/decoded/2024/gavin-wood-keynote-polkadot-decoded-2024.md";
  slug: "events/decoded/2024/gavin-wood-keynote-polkadot-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/harmonizing-user-experience-across-the-polkadot-ecosystem.md": {
	id: "events/decoded/2024/harmonizing-user-experience-across-the-polkadot-ecosystem.md";
  slug: "events/decoded/2024/harmonizing-user-experience-across-the-polkadot-ecosystem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/hydration-is-jamming-introduction-at-polkadot-decoded-2024.md": {
	id: "events/decoded/2024/hydration-is-jamming-introduction-at-polkadot-decoded-2024.md";
  slug: "events/decoded/2024/hydration-is-jamming-introduction-at-polkadot-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/identity-hub-the-next-evolution-of-the-polkadot-people-chain.md": {
	id: "events/decoded/2024/identity-hub-the-next-evolution-of-the-polkadot-people-chain.md";
  slug: "events/decoded/2024/identity-hub-the-next-evolution-of-the-polkadot-people-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/insights-from-polkadot-regulatory-confessions-decoded-2024.md": {
	id: "events/decoded/2024/insights-from-polkadot-regulatory-confessions-decoded-2024.md";
  slug: "events/decoded/2024/insights-from-polkadot-regulatory-confessions-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/insights-on-scaling-with-layer-2-tech-stack-by-maarten-henskens.md": {
	id: "events/decoded/2024/insights-on-scaling-with-layer-2-tech-stack-by-maarten-henskens.md";
  slug: "events/decoded/2024/insights-on-scaling-with-layer-2-tech-stack-by-maarten-henskens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/introducing-nova-wallet-spend-card.md": {
	id: "events/decoded/2024/introducing-nova-wallet-spend-card.md";
  slug: "events/decoded/2024/introducing-nova-wallet-spend-card";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/lastic-coretime-marketplace-polkadot-blockspace-demand.md": {
	id: "events/decoded/2024/lastic-coretime-marketplace-polkadot-blockspace-demand.md";
  slug: "events/decoded/2024/lastic-coretime-marketplace-polkadot-blockspace-demand";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/launch-of-an-ipo-on-the-origintrail-dkg-on-polkadot.md": {
	id: "events/decoded/2024/launch-of-an-ipo-on-the-origintrail-dkg-on-polkadot.md";
  slug: "events/decoded/2024/launch-of-an-ipo-on-the-origintrail-dkg-on-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/logion-proof-of-law-and-rwa-tokenization-decoded-2024-insights.md": {
	id: "events/decoded/2024/logion-proof-of-law-and-rwa-tokenization-decoded-2024-insights.md";
  slug: "events/decoded/2024/logion-proof-of-law-and-rwa-tokenization-decoded-2024-insights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/making-assethub-nfts-social-insights-from-polkadot-decoded-2024.md": {
	id: "events/decoded/2024/making-assethub-nfts-social-insights-from-polkadot-decoded-2024.md";
  slug: "events/decoded/2024/making-assethub-nfts-social-insights-from-polkadot-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/multi-chain-architectures-on-polkadot-decoded-2024.md": {
	id: "events/decoded/2024/multi-chain-architectures-on-polkadot-decoded-2024.md";
  slug: "events/decoded/2024/multi-chain-architectures-on-polkadot-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/mythos-x-polkadot-integration.md": {
	id: "events/decoded/2024/mythos-x-polkadot-integration.md";
  slug: "events/decoded/2024/mythos-x-polkadot-integration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/openzeppelin-polkadot-runtime-templates-evm-chains.md": {
	id: "events/decoded/2024/openzeppelin-polkadot-runtime-templates-evm-chains.md";
  slug: "events/decoded/2024/openzeppelin-polkadot-runtime-templates-evm-chains";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/pierre-aubert-on-enhancing-reliability-in-polkadot-decoded-2024.md": {
	id: "events/decoded/2024/pierre-aubert-on-enhancing-reliability-in-polkadot-decoded-2024.md";
  slug: "events/decoded/2024/pierre-aubert-on-enhancing-reliability-in-polkadot-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/polkadoautomated-token-journeys-without-handholding.md": {
	id: "events/decoded/2024/polkadoautomated-token-journeys-without-handholding.md";
  slug: "events/decoded/2024/polkadoautomated-token-journeys-without-handholding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/polkadoleveraging-polkadot-change-appchain-landscape.md": {
	id: "events/decoded/2024/polkadoleveraging-polkadot-change-appchain-landscape.md";
  slug: "events/decoded/2024/polkadoleveraging-polkadot-change-appchain-landscape";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/polkadot-agents-all-the-way-down-decoded-2024.md": {
	id: "events/decoded/2024/polkadot-agents-all-the-way-down-decoded-2024.md";
  slug: "events/decoded/2024/polkadot-agents-all-the-way-down-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/polkadot-ecosystem-development-strategy.md": {
	id: "events/decoded/2024/polkadot-ecosystem-development-strategy.md";
  slug: "events/decoded/2024/polkadot-ecosystem-development-strategy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/polkadot-roadmap-2025.md": {
	id: "events/decoded/2024/polkadot-roadmap-2025.md";
  slug: "events/decoded/2024/polkadot-roadmap-2025";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/polkadot-xcmv5-enhancing-user-experience-decoded-2024.md": {
	id: "events/decoded/2024/polkadot-xcmv5-enhancing-user-experience-decoded-2024.md";
  slug: "events/decoded/2024/polkadot-xcmv5-enhancing-user-experience-decoded-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/redefining-web3-fundraising-with-polimec-network.md": {
	id: "events/decoded/2024/redefining-web3-fundraising-with-polimec-network.md";
  slug: "events/decoded/2024/redefining-web3-fundraising-with-polimec-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/regionx-evolution-of-coretime-marketplaces-on-polkadot.md": {
	id: "events/decoded/2024/regionx-evolution-of-coretime-marketplaces-on-polkadot.md";
  slug: "events/decoded/2024/regionx-evolution-of-coretime-marketplaces-on-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/securing-the-polkadot-ecosystem-tools-and-strategies-for-defense.md": {
	id: "events/decoded/2024/securing-the-polkadot-ecosystem-tools-and-strategies-for-defense.md";
  slug: "events/decoded/2024/securing-the-polkadot-ecosystem-tools-and-strategies-for-defense";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/stability-reliability-by-leveraging-real-time-data-in-the-polkadot-ecosystem.md": {
	id: "events/decoded/2024/stability-reliability-by-leveraging-real-time-data-in-the-polkadot-ecosystem.md";
  slug: "events/decoded/2024/stability-reliability-by-leveraging-real-time-data-in-the-polkadot-ecosystem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/stellaswap-simplifies-liquidity-staking-on-polkadot.md": {
	id: "events/decoded/2024/stellaswap-simplifies-liquidity-staking-on-polkadot.md";
  slug: "events/decoded/2024/stellaswap-simplifies-liquidity-staking-on-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/subwallets-journey-to-1-million-users-polkadot-use-cases-ux.md": {
	id: "events/decoded/2024/subwallets-journey-to-1-million-users-polkadot-use-cases-ux.md";
  slug: "events/decoded/2024/subwallets-journey-to-1-million-users-polkadot-use-cases-ux";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/the-execution-layer-of-web3-ai-on-phala-network.md": {
	id: "events/decoded/2024/the-execution-layer-of-web3-ai-on-phala-network.md";
  slug: "events/decoded/2024/the-execution-layer-of-web3-ai-on-phala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/unique-network-nfts-on-polkadot-speed-and-sustainability.md": {
	id: "events/decoded/2024/unique-network-nfts-on-polkadot-speed-and-sustainability.md";
  slug: "events/decoded/2024/unique-network-nfts-on-polkadot-speed-and-sustainability";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/unleashing-omnichain-access-with-invarch-mpc.md": {
	id: "events/decoded/2024/unleashing-omnichain-access-with-invarch-mpc.md";
  slug: "events/decoded/2024/unleashing-omnichain-access-with-invarch-mpc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/velocity-labs-opening-the-floodgates-of-liquidity-for-polkadot.md": {
	id: "events/decoded/2024/velocity-labs-opening-the-floodgates-of-liquidity-for-polkadot.md";
  slug: "events/decoded/2024/velocity-labs-opening-the-floodgates-of-liquidity-for-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/2024/whats-next-things-wed-love-to-see-on-polkadot.md": {
	id: "events/decoded/2024/whats-next-things-wed-love-to-see-on-polkadot.md";
  slug: "events/decoded/2024/whats-next-things-wed-love-to-see-on-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/decoded/index.mdx": {
	id: "events/decoded/index.mdx";
  slug: "events/decoded";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/index.mdx": {
	id: "events/index.mdx";
  slug: "events";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/miscellaneous/block-auditing-polkadots-sharding-protocol-jeff-burdges.md": {
	id: "events/miscellaneous/block-auditing-polkadots-sharding-protocol-jeff-burdges.md";
  slug: "events/miscellaneous/block-auditing-polkadots-sharding-protocol-jeff-burdges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/miscellaneous/index.mdx": {
	id: "events/miscellaneous/index.mdx";
  slug: "events/miscellaneous";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/miscellaneous/introducing-gavin-woods-vision-for-jam-at-eth-prague-2024.md": {
	id: "events/miscellaneous/introducing-gavin-woods-vision-for-jam-at-eth-prague-2024.md";
  slug: "events/miscellaneous/introducing-gavin-woods-vision-for-jam-at-eth-prague-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/miscellaneous/jam-token2049-gavin-wood.md": {
	id: "events/miscellaneous/jam-token2049-gavin-wood.md";
  slug: "events/miscellaneous/jam-token2049-gavin-wood";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/miscellaneous/protocol-berg-keynote-gavin-wood-agile-coretime.md": {
	id: "events/miscellaneous/protocol-berg-keynote-gavin-wood-agile-coretime.md";
  slug: "events/miscellaneous/protocol-berg-keynote-gavin-wood-agile-coretime";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/100-ideas-built-on-polkadot-frank-dierolf-sub0-2024.mdx": {
	id: "events/sub0/2024/100-ideas-built-on-polkadot-frank-dierolf-sub0-2024.mdx";
  slug: "events/sub0/2024/100-ideas-built-on-polkadot-frank-dierolf-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/2024/accelerating-web3-innovation-polkadots-role-in-new-frontier-technologies.mdx": {
	id: "events/sub0/2024/accelerating-web3-innovation-polkadots-role-in-new-frontier-technologies.mdx";
  slug: "events/sub0/2024/accelerating-web3-innovation-polkadots-role-in-new-frontier-technologies";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/2024/addressing-polkadot-substrate-security-vectors-rust-based-issues.mdx": {
	id: "events/sub0/2024/addressing-polkadot-substrate-security-vectors-rust-based-issues.mdx";
  slug: "events/sub0/2024/addressing-polkadot-substrate-security-vectors-rust-based-issues";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/2024/advantages-signless-payless-transactions-substrate-networks.md": {
	id: "events/sub0/2024/advantages-signless-payless-transactions-substrate-networks.md";
  slug: "events/sub0/2024/advantages-signless-payless-transactions-substrate-networks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/ai-ready-knowledge-mining-on-polkadot-sub0-2024.md": {
	id: "events/sub0/2024/ai-ready-knowledge-mining-on-polkadot-sub0-2024.md";
  slug: "events/sub0/2024/ai-ready-knowledge-mining-on-polkadot-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/archisinal-empowers-aec-sextor-data-transparency.md": {
	id: "events/sub0/2024/archisinal-empowers-aec-sextor-data-transparency.md";
  slug: "events/sub0/2024/archisinal-empowers-aec-sextor-data-transparency";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/asset-tokenization-and-fractionalization-on-phyken-network.md": {
	id: "events/sub0/2024/asset-tokenization-and-fractionalization-on-phyken-network.md";
  slug: "events/sub0/2024/asset-tokenization-and-fractionalization-on-phyken-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/back-to-the-future-gearing-up-for-polkadot-2-0.md": {
	id: "events/sub0/2024/back-to-the-future-gearing-up-for-polkadot-2-0.md";
  slug: "events/sub0/2024/back-to-the-future-gearing-up-for-polkadot-2-0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/bifrost-slpx-revolutionizing-omni-chain-liquid-staking.md": {
	id: "events/sub0/2024/bifrost-slpx-revolutionizing-omni-chain-liquid-staking.md";
  slug: "events/sub0/2024/bifrost-slpx-revolutionizing-omni-chain-liquid-staking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/bugfinding-in-ink-smart-contracts-a-deep-dive-into-security.md": {
	id: "events/sub0/2024/bugfinding-in-ink-smart-contracts-a-deep-dive-into-security.md";
  slug: "events/sub0/2024/bugfinding-in-ink-smart-contracts-a-deep-dive-into-security";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/building-dapps-polkadot-api-papi.md": {
	id: "events/sub0/2024/building-dapps-polkadot-api-papi.md";
  slug: "events/sub0/2024/building-dapps-polkadot-api-papi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/common-security-risks-polkadot-substrate-sub0-2024.md": {
	id: "events/sub0/2024/common-security-risks-polkadot-substrate-sub0-2024.md";
  slug: "events/sub0/2024/common-security-risks-polkadot-substrate-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/connecting-ethereum-and-polygon-to-polkadot-without-bridges.md": {
	id: "events/sub0/2024/connecting-ethereum-and-polygon-to-polkadot-without-bridges.md";
  slug: "events/sub0/2024/connecting-ethereum-and-polygon-to-polkadot-without-bridges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/conquering-browser-based-substrate-development-with-talisman.mdx": {
	id: "events/sub0/2024/conquering-browser-based-substrate-development-with-talisman.mdx";
  slug: "events/sub0/2024/conquering-browser-based-substrate-development-with-talisman";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/2024/contributing-to-frame-polkadotsdk-shawn-tabrizi.md": {
	id: "events/sub0/2024/contributing-to-frame-polkadotsdk-shawn-tabrizi.md";
  slug: "events/sub0/2024/contributing-to-frame-polkadotsdk-shawn-tabrizi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/dancing-with-moores-law-the-mobile-cloud-disruption.md": {
	id: "events/sub0/2024/dancing-with-moores-law-the-mobile-cloud-disruption.md";
  slug: "events/sub0/2024/dancing-with-moores-law-the-mobile-cloud-disruption";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/data-availability-in-polkadot-insights-from-mexy-mei-at-sub0-2024.md": {
	id: "events/sub0/2024/data-availability-in-polkadot-insights-from-mexy-mei-at-sub0-2024.md";
  slug: "events/sub0/2024/data-availability-in-polkadot-insights-from-mexy-mei-at-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/decentralizing-off-chain-governance-data-opensquare.md": {
	id: "events/sub0/2024/decentralizing-off-chain-governance-data-opensquare.md";
  slug: "events/sub0/2024/decentralizing-off-chain-governance-data-opensquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/defi-infrastructure-and-tooling-for-the-polkadot-ecosystem.md": {
	id: "events/sub0/2024/defi-infrastructure-and-tooling-for-the-polkadot-ecosystem.md";
  slug: "events/sub0/2024/defi-infrastructure-and-tooling-for-the-polkadot-ecosystem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/enhancing-the-developer-experience-on-polkadot-with-pop-cli.md": {
	id: "events/sub0/2024/enhancing-the-developer-experience-on-polkadot-with-pop-cli.md";
  slug: "events/sub0/2024/enhancing-the-developer-experience-on-polkadot-with-pop-cli";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/exploring-the-future-of-cross-chain-nfts-with-polkadot-sdk.md": {
	id: "events/sub0/2024/exploring-the-future-of-cross-chain-nfts-with-polkadot-sdk.md";
  slug: "events/sub0/2024/exploring-the-future-of-cross-chain-nfts-with-polkadot-sdk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/funding-avenues-within-the-polkadot-ecosystem-sub0-2024.md": {
	id: "events/sub0/2024/funding-avenues-within-the-polkadot-ecosystem-sub0-2024.md";
  slug: "events/sub0/2024/funding-avenues-within-the-polkadot-ecosystem-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/fuzzing-on-steroids-with-invariants-hydration-at-polkadot-sub0-2024.md": {
	id: "events/sub0/2024/fuzzing-on-steroids-with-invariants-hydration-at-polkadot-sub0-2024.md";
  slug: "events/sub0/2024/fuzzing-on-steroids-with-invariants-hydration-at-polkadot-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/generic-ledger-app-verifiable-metadata-polkadot-sub0.md": {
	id: "events/sub0/2024/generic-ledger-app-verifiable-metadata-polkadot-sub0.md";
  slug: "events/sub0/2024/generic-ledger-app-verifiable-metadata-polkadot-sub0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/governance-and-multisigs-in-polkadot-insights-polkassembly-polkasafe.md": {
	id: "events/sub0/2024/governance-and-multisigs-in-polkadot-insights-polkassembly-polkasafe.md";
  slug: "events/sub0/2024/governance-and-multisigs-in-polkadot-insights-polkassembly-polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/governmental-and-legal-interoperability-with-substrate-cctf-dao.md": {
	id: "events/sub0/2024/governmental-and-legal-interoperability-with-substrate-cctf-dao.md";
  slug: "events/sub0/2024/governmental-and-legal-interoperability-with-substrate-cctf-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/how-the-polkadot-sdk-empowers-social-finance.md": {
	id: "events/sub0/2024/how-the-polkadot-sdk-empowers-social-finance.md";
  slug: "events/sub0/2024/how-the-polkadot-sdk-empowers-social-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/incognitee-privacy-for-dot-transactions-by-alain-brenzikofer.md": {
	id: "events/sub0/2024/incognitee-privacy-for-dot-transactions-by-alain-brenzikofer.md";
  slug: "events/sub0/2024/incognitee-privacy-for-dot-transactions-by-alain-brenzikofer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/ink-smart-contracts-with-a-touch-of-magic.md": {
	id: "events/sub0/2024/ink-smart-contracts-with-a-touch-of-magic.md";
  slug: "events/sub0/2024/ink-smart-contracts-with-a-touch-of-magic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/interacting-with-substrate-chains-using-javascript-and-python.md": {
	id: "events/sub0/2024/interacting-with-substrate-chains-using-javascript-and-python.md";
  slug: "events/sub0/2024/interacting-with-substrate-chains-using-javascript-and-python";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/jam-overview-of-gavin-woods-keynote-at-sub0.md": {
	id: "events/sub0/2024/jam-overview-of-gavin-woods-keynote-at-sub0.md";
  slug: "events/sub0/2024/jam-overview-of-gavin-woods-keynote-at-sub0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/keeping-your-polkadot-projects-secure-insights-from-7-years-of-security-auditing.md": {
	id: "events/sub0/2024/keeping-your-polkadot-projects-secure-insights-from-7-years-of-security-auditing.md";
  slug: "events/sub0/2024/keeping-your-polkadot-projects-secure-insights-from-7-years-of-security-auditing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/leveraging-tee-co-processors-with-polkadot-chains.md": {
	id: "events/sub0/2024/leveraging-tee-co-processors-with-polkadot-chains.md";
  slug: "events/sub0/2024/leveraging-tee-co-processors-with-polkadot-chains";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/light-clients-decentralized-scalability-on-substrate-avail-sub0.md": {
	id: "events/sub0/2024/light-clients-decentralized-scalability-on-substrate-avail-sub0.md";
  slug: "events/sub0/2024/light-clients-decentralized-scalability-on-substrate-avail-sub0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/mass-adoption-to-proxies-with-spektr-nova-wallet-sub0.md": {
	id: "events/sub0/2024/mass-adoption-to-proxies-with-spektr-nova-wallet-sub0.md";
  slug: "events/sub0/2024/mass-adoption-to-proxies-with-spektr-nova-wallet-sub0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/mobile-gaming-unleashed-polkadot-unity-sdk.md": {
	id: "events/sub0/2024/mobile-gaming-unleashed-polkadot-unity-sdk.md";
  slug: "events/sub0/2024/mobile-gaming-unleashed-polkadot-unity-sdk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/nft-collective-powered-by-polkadot-nfts-sub0-2024.md": {
	id: "events/sub0/2024/nft-collective-powered-by-polkadot-nfts-sub0-2024.md";
  slug: "events/sub0/2024/nft-collective-powered-by-polkadot-nfts-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/nft-xcm-transfer-unique-networks-proposal-sub0-asia-2024.md": {
	id: "events/sub0/2024/nft-xcm-transfer-unique-networks-proposal-sub0-asia-2024.md";
  slug: "events/sub0/2024/nft-xcm-transfer-unique-networks-proposal-sub0-asia-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/openzeppelins-polkadot-parachain-template-workshop.md": {
	id: "events/sub0/2024/openzeppelins-polkadot-parachain-template-workshop.md";
  slug: "events/sub0/2024/openzeppelins-polkadot-parachain-template-workshop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/parachain-one-click-deployment-zombienet-testing-larch.md": {
	id: "events/sub0/2024/parachain-one-click-deployment-zombienet-testing-larch.md";
  slug: "events/sub0/2024/parachain-one-click-deployment-zombienet-testing-larch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/polkadot-ethereum-bridge-security-analysis-sub0.md": {
	id: "events/sub0/2024/polkadot-ethereum-bridge-security-analysis-sub0.md";
  slug: "events/sub0/2024/polkadot-ethereum-bridge-security-analysis-sub0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/polkadot-host-architecture-insights-kamil-salakhiev.md": {
	id: "events/sub0/2024/polkadot-host-architecture-insights-kamil-salakhiev.md";
  slug: "events/sub0/2024/polkadot-host-architecture-insights-kamil-salakhiev";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/security-collaboration-in-substrate-insights-from-sub0-asia-2024.md": {
	id: "events/sub0/2024/security-collaboration-in-substrate-insights-from-sub0-asia-2024.md";
  slug: "events/sub0/2024/security-collaboration-in-substrate-insights-from-sub0-asia-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/signet-data-privacy-and-account-abstraction-for-multisigs.md": {
	id: "events/sub0/2024/signet-data-privacy-and-account-abstraction-for-multisigs.md";
  slug: "events/sub0/2024/signet-data-privacy-and-account-abstraction-for-multisigs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/sovereign-smart-home-with-robonomics-and-home-assistant.md": {
	id: "events/sub0/2024/sovereign-smart-home-with-robonomics-and-home-assistant.md";
  slug: "events/sub0/2024/sovereign-smart-home-with-robonomics-and-home-assistant";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/stellaswap-innovating-decentralized-trading-on-polkadot.md": {
	id: "events/sub0/2024/stellaswap-innovating-decentralized-trading-on-polkadot.md";
  slug: "events/sub0/2024/stellaswap-innovating-decentralized-trading-on-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/substrate-essentials-client-side-or-off-chain-workers-in-polkadex.md": {
	id: "events/sub0/2024/substrate-essentials-client-side-or-off-chain-workers-in-polkadex.md";
  slug: "events/sub0/2024/substrate-essentials-client-side-or-off-chain-workers-in-polkadex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/substrate-security-in-practice-insights-from-nihat-alpcan-onarans-tech-talk.md": {
	id: "events/sub0/2024/substrate-security-in-practice-insights-from-nihat-alpcan-onarans-tech-talk.md";
  slug: "events/sub0/2024/substrate-security-in-practice-insights-from-nihat-alpcan-onarans-tech-talk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/substrate-the-future-proof-blockchain-framework-sub0-2024.md": {
	id: "events/sub0/2024/substrate-the-future-proof-blockchain-framework-sub0-2024.md";
  slug: "events/sub0/2024/substrate-the-future-proof-blockchain-framework-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/supercharge-assethub-nfts-in-the-polkadot-ecosystem.md": {
	id: "events/sub0/2024/supercharge-assethub-nfts-in-the-polkadot-ecosystem.md";
  slug: "events/sub0/2024/supercharge-assethub-nfts-in-the-polkadot-ecosystem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/telenova-polkadot-wallet-built-into-telegram.md": {
	id: "events/sub0/2024/telenova-polkadot-wallet-built-into-telegram.md";
  slug: "events/sub0/2024/telenova-polkadot-wallet-built-into-telegram";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/the-evolution-of-defi-on-polkadot-by-nico-arevalo-velocity-labs.md": {
	id: "events/sub0/2024/the-evolution-of-defi-on-polkadot-by-nico-arevalo-velocity-labs.md";
  slug: "events/sub0/2024/the-evolution-of-defi-on-polkadot-by-nico-arevalo-velocity-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/transaction-spammer-for-benchmarking-and-throughput.md": {
	id: "events/sub0/2024/transaction-spammer-for-benchmarking-and-throughput.md";
  slug: "events/sub0/2024/transaction-spammer-for-benchmarking-and-throughput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/transitioning-from-parachain-auctions-to-coretime.md": {
	id: "events/sub0/2024/transitioning-from-parachain-auctions-to-coretime.md";
  slug: "events/sub0/2024/transitioning-from-parachain-auctions-to-coretime";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/typescript-building-apps-on-polkadot-via-apillon.md": {
	id: "events/sub0/2024/typescript-building-apps-on-polkadot-via-apillon.md";
  slug: "events/sub0/2024/typescript-building-apps-on-polkadot-via-apillon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/understanding-agile-core-time-donal-murray-sub0-2024.md": {
	id: "events/sub0/2024/understanding-agile-core-time-donal-murray-sub0-2024.md";
  slug: "events/sub0/2024/understanding-agile-core-time-donal-murray-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/understanding-erasure-coding-axay-sagathiya-sub0-asia-2024.md": {
	id: "events/sub0/2024/understanding-erasure-coding-axay-sagathiya-sub0-asia-2024.md";
  slug: "events/sub0/2024/understanding-erasure-coding-axay-sagathiya-sub0-asia-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/understanding-xcm-rate-limiters-safeguarding-polkadot-chains-from-toxic-flows.md": {
	id: "events/sub0/2024/understanding-xcm-rate-limiters-safeguarding-polkadot-chains-from-toxic-flows.md";
  slug: "events/sub0/2024/understanding-xcm-rate-limiters-safeguarding-polkadot-chains-from-toxic-flows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/verifiable-private-random-permutations-in-web3-sub0-2024.md": {
	id: "events/sub0/2024/verifiable-private-random-permutations-in-web3-sub0-2024.md";
  slug: "events/sub0/2024/verifiable-private-random-permutations-in-web3-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/web3-infrastructure-by-subquery-onfinality-sub0-2024.md": {
	id: "events/sub0/2024/web3-infrastructure-by-subquery-onfinality-sub0-2024.md";
  slug: "events/sub0/2024/web3-infrastructure-by-subquery-onfinality-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/2024/zero-knowledge-proofs-on-polkadot-jeff-burdges-sub0-2024.md": {
	id: "events/sub0/2024/zero-knowledge-proofs-on-polkadot-jeff-burdges-sub0-2024.md";
  slug: "events/sub0/2024/zero-knowledge-proofs-on-polkadot-jeff-burdges-sub0-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/sub0/index.mdx": {
	id: "events/sub0/index.mdx";
  slug: "events/sub0";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/alessandro-acurast.mdx": {
	id: "events/sub0/reset/alessandro-acurast.mdx";
  slug: "events/sub0/reset/alessandro-acurast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/bounty-manager.mdx": {
	id: "events/sub0/reset/bounty-manager.mdx";
  slug: "events/sub0/reset/bounty-manager";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/branimir-rakic-origintrail.mdx": {
	id: "events/sub0/reset/branimir-rakic-origintrail.mdx";
  slug: "events/sub0/reset/branimir-rakic-origintrail";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/bruno-galvao-pop.mdx": {
	id: "events/sub0/reset/bruno-galvao-pop.mdx";
  slug: "events/sub0/reset/bruno-galvao-pop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/bryan-chen-acala.mdx": {
	id: "events/sub0/reset/bryan-chen-acala.mdx";
  slug: "events/sub0/reset/bryan-chen-acala";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/carlo-sala-papi.mdx": {
	id: "events/sub0/reset/carlo-sala-papi.mdx";
  slug: "events/sub0/reset/carlo-sala-papi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/cyrill-leutwiller-parity.mdx": {
	id: "events/sub0/reset/cyrill-leutwiller-parity.mdx";
  slug: "events/sub0/reset/cyrill-leutwiller-parity";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/daniel-cukier-jam-elixir.mdx": {
	id: "events/sub0/reset/daniel-cukier-jam-elixir.mdx";
  slug: "events/sub0/reset/daniel-cukier-jam-elixir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/devrel-panel.mdx": {
	id: "events/sub0/reset/devrel-panel.mdx";
  slug: "events/sub0/reset/devrel-panel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/gaming-panel.mdx": {
	id: "events/sub0/reset/gaming-panel.mdx";
  slug: "events/sub0/reset/gaming-panel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/gavin-wood-jam.mdx": {
	id: "events/sub0/reset/gavin-wood-jam.mdx";
  slug: "events/sub0/reset/gavin-wood-jam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/governance-panel.mdx": {
	id: "events/sub0/reset/governance-panel.mdx";
  slug: "events/sub0/reset/governance-panel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/gustavo-gonzalez-openzeppelin.mdx": {
	id: "events/sub0/reset/gustavo-gonzalez-openzeppelin.mdx";
  slug: "events/sub0/reset/gustavo-gonzalez-openzeppelin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/jakub-panik-hydration.mdx": {
	id: "events/sub0/reset/jakub-panik-hydration.mdx";
  slug: "events/sub0/reset/jakub-panik-hydration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/justin-frievert-midnight.mdx": {
	id: "events/sub0/reset/justin-frievert-midnight.mdx";
  slug: "events/sub0/reset/justin-frievert-midnight";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/kamil-shalakiev-kagome.mdx": {
	id: "events/sub0/reset/kamil-shalakiev-kagome.mdx";
  slug: "events/sub0/reset/kamil-shalakiev-kagome";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/kian-paimani-frame.mdx": {
	id: "events/sub0/reset/kian-paimani-frame.mdx";
  slug: "events/sub0/reset/kian-paimani-frame";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/kian-paimani-parity.mdx": {
	id: "events/sub0/reset/kian-paimani-parity.mdx";
  slug: "events/sub0/reset/kian-paimani-parity";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/kim-honoridez-energyweb.mdx": {
	id: "events/sub0/reset/kim-honoridez-energyweb.mdx";
  slug: "events/sub0/reset/kim-honoridez-energyweb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/krishna-singh-polkadex.mdx": {
	id: "events/sub0/reset/krishna-singh-polkadex.mdx";
  slug: "events/sub0/reset/krishna-singh-polkadex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/leemo-nova.mdx": {
	id: "events/sub0/reset/leemo-nova.mdx";
  slug: "events/sub0/reset/leemo-nova";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/marta-adamczyk-subquery.mdx": {
	id: "events/sub0/reset/marta-adamczyk-subquery.mdx";
  slug: "events/sub0/reset/marta-adamczyk-subquery";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/martin-damour-saomaigames.mdx": {
	id: "events/sub0/reset/martin-damour-saomaigames.mdx";
  slug: "events/sub0/reset/martin-damour-saomaigames";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/mexy-mei-crust.mdx": {
	id: "events/sub0/reset/mexy-mei-crust.mdx";
  slug: "events/sub0/reset/mexy-mei-crust";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/panel.mdx": {
	id: "events/sub0/reset/panel.mdx";
  slug: "events/sub0/reset/panel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/patricio-calderon-parity.mdx": {
	id: "events/sub0/reset/patricio-calderon-parity.mdx";
  slug: "events/sub0/reset/patricio-calderon-parity";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/pauline-vorms-pba.mdx": {
	id: "events/sub0/reset/pauline-vorms-pba.mdx";
  slug: "events/sub0/reset/pauline-vorms-pba";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/peter-white-rogue.mdx": {
	id: "events/sub0/reset/peter-white-rogue.mdx";
  slug: "events/sub0/reset/peter-white-rogue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/polkadot-ui-ux.mdx": {
	id: "events/sub0/reset/polkadot-ui-ux.mdx";
  slug: "events/sub0/reset/polkadot-ui-ux";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/prabal-banerjee-avail.mdx": {
	id: "events/sub0/reset/prabal-banerjee-avail.mdx";
  slug: "events/sub0/reset/prabal-banerjee-avail";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/rob-habermeier-nomt.mdx": {
	id: "events/sub0/reset/rob-habermeier-nomt.mdx";
  slug: "events/sub0/reset/rob-habermeier-nomt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/sacha-lansky-webzero.mdx": {
	id: "events/sub0/reset/sacha-lansky-webzero.mdx";
  slug: "events/sub0/reset/sacha-lansky-webzero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/sergei-lonshakov-robonomics.mdx": {
	id: "events/sub0/reset/sergei-lonshakov-robonomics.mdx";
  slug: "events/sub0/reset/sergei-lonshakov-robonomics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/shawn-tabrizi-jam-web3-cloud.mdx": {
	id: "events/sub0/reset/shawn-tabrizi-jam-web3-cloud.mdx";
  slug: "events/sub0/reset/shawn-tabrizi-jam-web3-cloud";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/shawn-tabrizi-polkadot-workshop.mdx": {
	id: "events/sub0/reset/shawn-tabrizi-polkadot-workshop.mdx";
  slug: "events/sub0/reset/shawn-tabrizi-polkadot-workshop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/sourav-mishra-metamui.mdx": {
	id: "events/sub0/reset/sourav-mishra-metamui.mdx";
  slug: "events/sub0/reset/sourav-mishra-metamui";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/thibaut-sardan-chainsafe.mdx": {
	id: "events/sub0/reset/thibaut-sardan-chainsafe.mdx";
  slug: "events/sub0/reset/thibaut-sardan-chainsafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/tin-chung-openguild.mdx": {
	id: "events/sub0/reset/tin-chung-openguild.mdx";
  slug: "events/sub0/reset/tin-chung-openguild";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/sub0/reset/will-scott-ipni.mdx": {
	id: "events/sub0/reset/will-scott-ipni.mdx";
  slug: "events/sub0/reset/will-scott-ipni";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/web3-summit/crypto-economic-coprocessors-by-seun-lanlege-hyperbridge.md": {
	id: "events/web3-summit/crypto-economic-coprocessors-by-seun-lanlege-hyperbridge.md";
  slug: "events/web3-summit/crypto-economic-coprocessors-by-seun-lanlege-hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/web3-summit/index.mdx": {
	id: "events/web3-summit/index.mdx";
  slug: "events/web3-summit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"events/web3-summit/manifesto-for-a-dark-renaissance-by-amir-taaki.md": {
	id: "events/web3-summit/manifesto-for-a-dark-renaissance-by-amir-taaki.md";
  slug: "events/web3-summit/manifesto-for-a-dark-renaissance-by-amir-taaki";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"events/web3-summit/web3-citizenship-digital-individuality.md": {
	id: "events/web3-summit/web3-citizenship-digital-individuality.md";
  slug: "events/web3-summit/web3-citizenship-digital-individuality";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"interviews/behind-the-code/alan-vey-aventus.md": {
	id: "interviews/behind-the-code/alan-vey-aventus.md";
  slug: "interviews/behind-the-code/alan-vey-aventus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/bill-laboon-web3-foundation.md": {
	id: "interviews/behind-the-code/bill-laboon-web3-foundation.md";
  slug: "interviews/behind-the-code/bill-laboon-web3-foundation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/building-where-the-action-is-the-global-web3-joshua-cheong-interview.md": {
	id: "interviews/behind-the-code/building-where-the-action-is-the-global-web3-joshua-cheong-interview.md";
  slug: "interviews/behind-the-code/building-where-the-action-is-the-global-web3-joshua-cheong-interview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/decentralizing-ai-brana-rakic-nikola-todorovics-vision-with-origintrail.md": {
	id: "interviews/behind-the-code/decentralizing-ai-brana-rakic-nikola-todorovics-vision-with-origintrail.md";
  slug: "interviews/behind-the-code/decentralizing-ai-brana-rakic-nikola-todorovics-vision-with-origintrail";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/global-collaboration-on-polkadot-leemo-interview.md": {
	id: "interviews/behind-the-code/global-collaboration-on-polkadot-leemo-interview.md";
  slug: "interviews/behind-the-code/global-collaboration-on-polkadot-leemo-interview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/harry-evans-braxton-woodham-interview-behind-the-code.md": {
	id: "interviews/behind-the-code/harry-evans-braxton-woodham-interview-behind-the-code.md";
  slug: "interviews/behind-the-code/harry-evans-braxton-woodham-interview-behind-the-code";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/hyperbridge-by-seun-lanlege-secure-cross-chain-connectivity.md": {
	id: "interviews/behind-the-code/hyperbridge-by-seun-lanlege-secure-cross-chain-connectivity.md";
  slug: "interviews/behind-the-code/hyperbridge-by-seun-lanlege-secure-cross-chain-connectivity";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/index.mdx": {
	id: "interviews/behind-the-code/index.mdx";
  slug: "interviews/behind-the-code";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"interviews/behind-the-code/internet-id-dangers-decentralized-solution-ingo-rube-interview.md": {
	id: "interviews/behind-the-code/internet-id-dangers-decentralized-solution-ingo-rube-interview.md";
  slug: "interviews/behind-the-code/internet-id-dangers-decentralized-solution-ingo-rube-interview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/mandala-blockchain-uniting-indonesias-digital-future.md": {
	id: "interviews/behind-the-code/mandala-blockchain-uniting-indonesias-digital-future.md";
  slug: "interviews/behind-the-code/mandala-blockchain-uniting-indonesias-digital-future";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/nova-wallets-key-to-success-and-onboard-polkadot-usrs.md": {
	id: "interviews/behind-the-code/nova-wallets-key-to-success-and-onboard-polkadot-usrs.md";
  slug: "interviews/behind-the-code/nova-wallets-key-to-success-and-onboard-polkadot-usrs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/on-chain-energy-diplomacy-ewald-hess-interview.md": {
	id: "interviews/behind-the-code/on-chain-energy-diplomacy-ewald-hess-interview.md";
  slug: "interviews/behind-the-code/on-chain-energy-diplomacy-ewald-hess-interview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/subverting-systems-of-power-web3-tools-for-change-dakota-barnett-interview.md": {
	id: "interviews/behind-the-code/subverting-systems-of-power-web3-tools-for-change-dakota-barnett-interview.md";
  slug: "interviews/behind-the-code/subverting-systems-of-power-web3-tools-for-change-dakota-barnett-interview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/the-future-of-blockchain-with-gavin-wood-behind-the-code.md": {
	id: "interviews/behind-the-code/the-future-of-blockchain-with-gavin-wood-behind-the-code.md";
  slug: "interviews/behind-the-code/the-future-of-blockchain-with-gavin-wood-behind-the-code";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/behind-the-code/user-first-innovation-in-hydration-defi-stack-by-ben-mcmohan.md": {
	id: "interviews/behind-the-code/user-first-innovation-in-hydration-defi-stack-by-ben-mcmohan.md";
  slug: "interviews/behind-the-code/user-first-innovation-in-hydration-defi-stack-by-ben-mcmohan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/dotcast/index.mdx": {
	id: "interviews/dotcast/index.mdx";
  slug: "interviews/dotcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"interviews/index.mdx": {
	id: "interviews/index.mdx";
  slug: "interviews";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"interviews/miscellaneous/the-future-of-blockchain-insights-from-gavin-wood-vitalik-buterin.md": {
	id: "interviews/miscellaneous/the-future-of-blockchain-insights-from-gavin-wood-vitalik-buterin.md";
  slug: "interviews/miscellaneous/the-future-of-blockchain-insights-from-gavin-wood-vitalik-buterin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/ben-mcmahon-introducing-hydration-and-hollar-stablecoin.md": {
	id: "interviews/space-monkeys/ben-mcmahon-introducing-hydration-and-hollar-stablecoin.md";
  slug: "interviews/space-monkeys/ben-mcmahon-introducing-hydration-and-hollar-stablecoin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/documenting-gavin-wood-simon-hipkins-on-spacemonkeys146.md": {
	id: "interviews/space-monkeys/documenting-gavin-wood-simon-hipkins-on-spacemonkeys146.md";
  slug: "interviews/space-monkeys/documenting-gavin-wood-simon-hipkins-on-spacemonkeys146";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/gavin-wood-unveils-polkadot-future-jam-insights-kusamarian-podcast.md": {
	id: "interviews/space-monkeys/gavin-wood-unveils-polkadot-future-jam-insights-kusamarian-podcast.md";
  slug: "interviews/space-monkeys/gavin-wood-unveils-polkadot-future-jam-insights-kusamarian-podcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/how-easya-is-revolutionizing-blockchain-education-spacemonkeys.md": {
	id: "interviews/space-monkeys/how-easya-is-revolutionizing-blockchain-education-spacemonkeys.md";
  slug: "interviews/space-monkeys/how-easya-is-revolutionizing-blockchain-education-spacemonkeys";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/index.mdx": {
	id: "interviews/space-monkeys/index.mdx";
  slug: "interviews/space-monkeys";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"interviews/space-monkeys/pba-x-efficient-blockchain-education-for-polkadot.md": {
	id: "interviews/space-monkeys/pba-x-efficient-blockchain-education-for-polkadot.md";
  slug: "interviews/space-monkeys/pba-x-efficient-blockchain-education-for-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/polkadot-dao-leaders-debate-marketing-treasury-strategies.md": {
	id: "interviews/space-monkeys/polkadot-dao-leaders-debate-marketing-treasury-strategies.md";
  slug: "interviews/space-monkeys/polkadot-dao-leaders-debate-marketing-treasury-strategies";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/polkadot-key-unit-interview-space-monkeys.md": {
	id: "interviews/space-monkeys/polkadot-key-unit-interview-space-monkeys.md";
  slug: "interviews/space-monkeys/polkadot-key-unit-interview-space-monkeys";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/polkadot-whale-theory-giotto-de-filippi-opengov-space-monkeys.md": {
	id: "interviews/space-monkeys/polkadot-whale-theory-giotto-de-filippi-opengov-space-monkeys.md";
  slug: "interviews/space-monkeys/polkadot-whale-theory-giotto-de-filippi-opengov-space-monkeys";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/robert-habermeier-discusses-state-optimization-in-polkadot-nomt.md": {
	id: "interviews/space-monkeys/robert-habermeier-discusses-state-optimization-in-polkadot-nomt.md";
  slug: "interviews/space-monkeys/robert-habermeier-discusses-state-optimization-in-polkadot-nomt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/ryan-dinh-discusses-subwallets-innovations-and-future-plans.md": {
	id: "interviews/space-monkeys/ryan-dinh-discusses-subwallets-innovations-and-future-plans.md";
  slug: "interviews/space-monkeys/ryan-dinh-discusses-subwallets-innovations-and-future-plans";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"interviews/space-monkeys/what-is-bali-blockchain-center-and-indonesia-bet-on-blockchain-technology.md": {
	id: "interviews/space-monkeys/what-is-bali-blockchain-center-and-indonesia-bet-on-blockchain-technology.md";
  slug: "interviews/space-monkeys/what-is-bali-blockchain-center-and-indonesia-bet-on-blockchain-technology";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
