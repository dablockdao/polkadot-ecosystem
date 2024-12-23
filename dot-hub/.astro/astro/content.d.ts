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
"dapps/ai/bittensor.mdx": {
	id: "dapps/ai/bittensor.mdx";
  slug: "dapps/ai/bittensor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/ai/index.mdx": {
	id: "dapps/ai/index.mdx";
  slug: "dapps/ai";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/ai/neurolanche.mdx": {
	id: "dapps/ai/neurolanche.mdx";
  slug: "dapps/ai/neurolanche";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/ai/neuroweb.mdx": {
	id: "dapps/ai/neuroweb.mdx";
  slug: "dapps/ai/neuroweb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/ai/phala-network.mdx": {
	id: "dapps/ai/phala-network.mdx";
  slug: "dapps/ai/phala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/archive/basilisk.md": {
	id: "dapps/archive/basilisk.md";
  slug: "dapps/archive/basilisk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/bitgreen.md": {
	id: "dapps/archive/bitgreen.md";
  slug: "dapps/archive/bitgreen";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/dao-ipci.md": {
	id: "dapps/archive/dao-ipci.md";
  slug: "dapps/archive/dao-ipci";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/dotins.md": {
	id: "dapps/archive/dotins.md";
  slug: "dapps/archive/dotins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/dotleap.md": {
	id: "dapps/archive/dotleap.md";
  slug: "dapps/archive/dotleap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/gm-chain.md": {
	id: "dapps/archive/gm-chain.md";
  slug: "dapps/archive/gm-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/jur-network.md": {
	id: "dapps/archive/jur-network.md";
  slug: "dapps/archive/jur-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/kaosland.md": {
	id: "dapps/archive/kaosland.md";
  slug: "dapps/archive/kaosland";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/layerx-network.md": {
	id: "dapps/archive/layerx-network.md";
  slug: "dapps/archive/layerx-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/manta-atlantic.md": {
	id: "dapps/archive/manta-atlantic.md";
  slug: "dapps/archive/manta-atlantic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/moonsama.md": {
	id: "dapps/archive/moonsama.md";
  slug: "dapps/archive/moonsama";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/nodle.md": {
	id: "dapps/archive/nodle.md";
  slug: "dapps/archive/nodle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/parallel-finance.md": {
	id: "dapps/archive/parallel-finance.md";
  slug: "dapps/archive/parallel-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/polkamaps.md": {
	id: "dapps/archive/polkamaps.md";
  slug: "dapps/archive/polkamaps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/raregems.md": {
	id: "dapps/archive/raregems.md";
  slug: "dapps/archive/raregems";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/rmrk.md": {
	id: "dapps/archive/rmrk.md";
  slug: "dapps/archive/rmrk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/shokunin-network.md": {
	id: "dapps/archive/shokunin-network.md";
  slug: "dapps/archive/shokunin-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/skybreach.md": {
	id: "dapps/archive/skybreach.md";
  slug: "dapps/archive/skybreach";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/starlay.mdx": {
	id: "dapps/archive/starlay.mdx";
  slug: "dapps/archive/starlay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/archive/subspace-network.md": {
	id: "dapps/archive/subspace-network.md";
  slug: "dapps/archive/subspace-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/tea-project.md": {
	id: "dapps/archive/tea-project.md";
  slug: "dapps/archive/tea-project";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/the-damned-pirates-society.md": {
	id: "dapps/archive/the-damned-pirates-society.md";
  slug: "dapps/archive/the-damned-pirates-society";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/bridges/axelar.md": {
	id: "dapps/bridges/axelar.md";
  slug: "dapps/bridges/axelar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/bridges/chainflip.md": {
	id: "dapps/bridges/chainflip.md";
  slug: "dapps/bridges/chainflip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/bridges/hyperbridge.mdx": {
	id: "dapps/bridges/hyperbridge.mdx";
  slug: "dapps/bridges/hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/bridges/snowbridge.mdx": {
	id: "dapps/bridges/snowbridge.mdx";
  slug: "dapps/bridges/snowbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/bridges/wormhole.md": {
	id: "dapps/bridges/wormhole.md";
  slug: "dapps/bridges/wormhole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/acala-network.mdx": {
	id: "dapps/defi/acala-network.mdx";
  slug: "dapps/defi/acala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/algem.mdx": {
	id: "dapps/defi/algem.mdx";
  slug: "dapps/defi/algem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/arthswap.mdx": {
	id: "dapps/defi/arthswap.mdx";
  slug: "dapps/defi/arthswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/astriddao.mdx": {
	id: "dapps/defi/astriddao.mdx";
  slug: "dapps/defi/astriddao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/beamswap.mdx": {
	id: "dapps/defi/beamswap.mdx";
  slug: "dapps/defi/beamswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/bifrost.mdx": {
	id: "dapps/defi/bifrost.mdx";
  slug: "dapps/defi/bifrost";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/ceres.md": {
	id: "dapps/defi/ceres.md";
  slug: "dapps/defi/ceres";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/curve-finance.md": {
	id: "dapps/defi/curve-finance.md";
  slug: "dapps/defi/curve-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/dam-finance.mdx": {
	id: "dapps/defi/dam-finance.mdx";
  slug: "dapps/defi/dam-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/darwinia.mdx": {
	id: "dapps/defi/darwinia.mdx";
  slug: "dapps/defi/darwinia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/hydration.mdx": {
	id: "dapps/defi/hydration.mdx";
  slug: "dapps/defi/hydration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/index.mdx": {
	id: "dapps/defi/index.mdx";
  slug: "dapps/defi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/interlay.mdx": {
	id: "dapps/defi/interlay.mdx";
  slug: "dapps/defi/interlay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/kylix-finance.mdx": {
	id: "dapps/defi/kylix-finance.mdx";
  slug: "dapps/defi/kylix-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/linear-finance.md": {
	id: "dapps/defi/linear-finance.md";
  slug: "dapps/defi/linear-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/moonwell.mdx": {
	id: "dapps/defi/moonwell.mdx";
  slug: "dapps/defi/moonwell";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/pendulum.mdx": {
	id: "dapps/defi/pendulum.mdx";
  slug: "dapps/defi/pendulum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/polimec.mdx": {
	id: "dapps/defi/polimec.mdx";
  slug: "dapps/defi/polimec";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/polkadex.mdx": {
	id: "dapps/defi/polkadex.mdx";
  slug: "dapps/defi/polkadex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/polkamarkets.mdx": {
	id: "dapps/defi/polkamarkets.mdx";
  slug: "dapps/defi/polkamarkets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/polkaswap.mdx": {
	id: "dapps/defi/polkaswap.mdx";
  slug: "dapps/defi/polkaswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/solarbeam.md": {
	id: "dapps/defi/solarbeam.md";
  slug: "dapps/defi/solarbeam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/starfish-finance.md": {
	id: "dapps/defi/starfish-finance.md";
  slug: "dapps/defi/starfish-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/stellaswap.mdx": {
	id: "dapps/defi/stellaswap.mdx";
  slug: "dapps/defi/stellaswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/taiga-protocol.md": {
	id: "dapps/defi/taiga-protocol.md";
  slug: "dapps/defi/taiga-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/zeitgeist.mdx": {
	id: "dapps/defi/zeitgeist.mdx";
  slug: "dapps/defi/zeitgeist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/zenlink.md": {
	id: "dapps/defi/zenlink.md";
  slug: "dapps/defi/zenlink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/depin/acurast.md": {
	id: "dapps/depin/acurast.md";
  slug: "dapps/depin/acurast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/depin/giant-protocol.md": {
	id: "dapps/depin/giant-protocol.md";
  slug: "dapps/depin/giant-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/depin/index.mdx": {
	id: "dapps/depin/index.mdx";
  slug: "dapps/depin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/depin/peaq-network.md": {
	id: "dapps/depin/peaq-network.md";
  slug: "dapps/depin/peaq-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/depin/robonomics.md": {
	id: "dapps/depin/robonomics.md";
  slug: "dapps/depin/robonomics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/ajuna-network.md": {
	id: "dapps/gaming/ajuna-network.md";
  slug: "dapps/gaming/ajuna-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/bitcountry.md": {
	id: "dapps/gaming/bitcountry.md";
  slug: "dapps/gaming/bitcountry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/cosmize.md": {
	id: "dapps/gaming/cosmize.md";
  slug: "dapps/gaming/cosmize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/evrloot.md": {
	id: "dapps/gaming/evrloot.md";
  slug: "dapps/gaming/evrloot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/exiled-racers.md": {
	id: "dapps/gaming/exiled-racers.md";
  slug: "dapps/gaming/exiled-racers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/gamedao.md": {
	id: "dapps/gaming/gamedao.md";
  slug: "dapps/gaming/gamedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/glmr-apes-the-great-escape.md": {
	id: "dapps/gaming/glmr-apes-the-great-escape.md";
  slug: "dapps/gaming/glmr-apes-the-great-escape";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/heal3.md": {
	id: "dapps/gaming/heal3.md";
  slug: "dapps/gaming/heal3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/index.mdx": {
	id: "dapps/gaming/index.mdx";
  slug: "dapps/gaming";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/gaming/moonfit.md": {
	id: "dapps/gaming/moonfit.md";
  slug: "dapps/gaming/moonfit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/mythos-chain.md": {
	id: "dapps/gaming/mythos-chain.md";
  slug: "dapps/gaming/mythos-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/odyssey.md": {
	id: "dapps/gaming/odyssey.md";
  slug: "dapps/gaming/odyssey";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/zero-network.md": {
	id: "dapps/gaming/zero-network.md";
  slug: "dapps/gaming/zero-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/index.mdx": {
	id: "dapps/index.mdx";
  slug: "dapps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/archisinal.mdx": {
	id: "dapps/miscellaneous/archisinal.mdx";
  slug: "dapps/miscellaneous/archisinal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/ava-protocol.mdx": {
	id: "dapps/miscellaneous/ava-protocol.mdx";
  slug: "dapps/miscellaneous/ava-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/aventus-network.mdx": {
	id: "dapps/miscellaneous/aventus-network.mdx";
  slug: "dapps/miscellaneous/aventus-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/citizend.md": {
	id: "dapps/miscellaneous/citizend.md";
  slug: "dapps/miscellaneous/citizend";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscellaneous/composable-finance.md": {
	id: "dapps/miscellaneous/composable-finance.md";
  slug: "dapps/miscellaneous/composable-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscellaneous/hashed-network.mdx": {
	id: "dapps/miscellaneous/hashed-network.mdx";
  slug: "dapps/miscellaneous/hashed-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/index.mdx": {
	id: "dapps/miscellaneous/index.mdx";
  slug: "dapps/miscellaneous";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/integritee.mdx": {
	id: "dapps/miscellaneous/integritee.mdx";
  slug: "dapps/miscellaneous/integritee";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/laos-network.mdx": {
	id: "dapps/miscellaneous/laos-network.mdx";
  slug: "dapps/miscellaneous/laos-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/lastic.mdx": {
	id: "dapps/miscellaneous/lastic.mdx";
  slug: "dapps/miscellaneous/lastic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/regionx.mdx": {
	id: "dapps/miscellaneous/regionx.mdx";
  slug: "dapps/miscellaneous/regionx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/t3rn.mdx": {
	id: "dapps/miscellaneous/t3rn.mdx";
  slug: "dapps/miscellaneous/t3rn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/xx-network.mdx": {
	id: "dapps/miscellaneous/xx-network.mdx";
  slug: "dapps/miscellaneous/xx-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/nft-marketplaces/artzero.mdx": {
	id: "dapps/nft-marketplaces/artzero.mdx";
  slug: "dapps/nft-marketplaces/artzero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/nft-marketplaces/bluez.mdx": {
	id: "dapps/nft-marketplaces/bluez.mdx";
  slug: "dapps/nft-marketplaces/bluez";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/nft-marketplaces/destore.mdx": {
	id: "dapps/nft-marketplaces/destore.mdx";
  slug: "dapps/nft-marketplaces/destore";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/nft-marketplaces/index.mdx": {
	id: "dapps/nft-marketplaces/index.mdx";
  slug: "dapps/nft-marketplaces";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/nft-marketplaces/kodadot.mdx": {
	id: "dapps/nft-marketplaces/kodadot.mdx";
  slug: "dapps/nft-marketplaces/kodadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/nft-marketplaces/moonbeans.md": {
	id: "dapps/nft-marketplaces/moonbeans.md";
  slug: "dapps/nft-marketplaces/moonbeans";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/nftrade.md": {
	id: "dapps/nft-marketplaces/nftrade.md";
  slug: "dapps/nft-marketplaces/nftrade";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/public-pressure.md": {
	id: "dapps/nft-marketplaces/public-pressure.md";
  slug: "dapps/nft-marketplaces/public-pressure";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/singular-nft-marketplace.md": {
	id: "dapps/nft-marketplaces/singular-nft-marketplace.md";
  slug: "dapps/nft-marketplaces/singular-nft-marketplace";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/sonova.md": {
	id: "dapps/nft-marketplaces/sonova.md";
  slug: "dapps/nft-marketplaces/sonova";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/tofunft-marketplace.md": {
	id: "dapps/nft-marketplaces/tofunft-marketplace.md";
  slug: "dapps/nft-marketplaces/tofunft-marketplace";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/unique-network.md": {
	id: "dapps/nft-marketplaces/unique-network.md";
  slug: "dapps/nft-marketplaces/unique-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/rwa/centrifuge.mdx": {
	id: "dapps/rwa/centrifuge.mdx";
  slug: "dapps/rwa/centrifuge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/rwa/unit-network.md": {
	id: "dapps/rwa/unit-network.md";
  slug: "dapps/rwa/unit-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/rwa/watr-protocol.md": {
	id: "dapps/rwa/watr-protocol.md";
  slug: "dapps/rwa/watr-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/rwa/xcavate.mdx": {
	id: "dapps/rwa/xcavate.mdx";
  slug: "dapps/rwa/xcavate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/smart-contracts/aleph-zero.mdx": {
	id: "dapps/smart-contracts/aleph-zero.mdx";
  slug: "dapps/smart-contracts/aleph-zero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/smart-contracts/astar-network.mdx": {
	id: "dapps/smart-contracts/astar-network.mdx";
  slug: "dapps/smart-contracts/astar-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/smart-contracts/energy-webx.mdx": {
	id: "dapps/smart-contracts/energy-webx.mdx";
  slug: "dapps/smart-contracts/energy-webx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/smart-contracts/index.mdx": {
	id: "dapps/smart-contracts/index.mdx";
  slug: "dapps/smart-contracts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/smart-contracts/moonbeam-network.mdx": {
	id: "dapps/smart-contracts/moonbeam-network.mdx";
  slug: "dapps/smart-contracts/moonbeam-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/smart-contracts/sora-network.md": {
	id: "dapps/smart-contracts/sora-network.md";
  slug: "dapps/smart-contracts/sora-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/smart-contracts/ternoa.md": {
	id: "dapps/smart-contracts/ternoa.md";
  slug: "dapps/smart-contracts/ternoa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/dsnp-protocol.md": {
	id: "dapps/social/dsnp-protocol.md";
  slug: "dapps/social/dsnp-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/encointer.md": {
	id: "dapps/social/encointer.md";
  slug: "dapps/social/encointer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/frequency.md": {
	id: "dapps/social/frequency.md";
  slug: "dapps/social/frequency";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/imbue-network.md": {
	id: "dapps/social/imbue-network.md";
  slug: "dapps/social/imbue-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/index.mdx": {
	id: "dapps/social/index.mdx";
  slug: "dapps/social";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/invarch-network.md": {
	id: "dapps/social/invarch-network.md";
  slug: "dapps/social/invarch-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/joystream.md": {
	id: "dapps/social/joystream.md";
  slug: "dapps/social/joystream";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/kilt-protocol.md": {
	id: "dapps/social/kilt-protocol.md";
  slug: "dapps/social/kilt-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/litentry.md": {
	id: "dapps/social/litentry.md";
  slug: "dapps/social/litentry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/logion-network.md": {
	id: "dapps/social/logion-network.md";
  slug: "dapps/social/logion-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/mandala-chain.md": {
	id: "dapps/social/mandala-chain.md";
  slug: "dapps/social/mandala-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/subsocial.md": {
	id: "dapps/social/subsocial.md";
  slug: "dapps/social/subsocial";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/social/virto-network.md": {
	id: "dapps/social/virto-network.md";
  slug: "dapps/social/virto-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/storage/avail-project.md": {
	id: "dapps/storage/avail-project.md";
  slug: "dapps/storage/avail-project";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/storage/cess.md": {
	id: "dapps/storage/cess.md";
  slug: "dapps/storage/cess";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/storage/crust-network.mdx": {
	id: "dapps/storage/crust-network.mdx";
  slug: "dapps/storage/crust-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/storage/datdot.md": {
	id: "dapps/storage/datdot.md";
  slug: "dapps/storage/datdot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/storage/index.mdx": {
	id: "dapps/storage/index.mdx";
  slug: "dapps/storage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/storage/midnight-network.md": {
	id: "dapps/storage/midnight-network.md";
  slug: "dapps/storage/midnight-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/index.mdx": {
	id: "es/index.mdx";
  slug: "es";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/archive/playproject.md": {
	id: "hub/archive/playproject.md";
  slug: "hub/archive/playproject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/archive/polkadot-brasil.md": {
	id: "hub/archive/polkadot-brasil.md";
  slug: "hub/archive/polkadot-brasil";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/archive/polkadot-philosophy.md": {
	id: "hub/archive/polkadot-philosophy.md";
  slug: "hub/archive/polkadot-philosophy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/archive/wizard-amigos.md": {
	id: "hub/archive/wizard-amigos.md";
  slug: "hub/archive/wizard-amigos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/bounties/poladot-marketing-bounty.md": {
	id: "hub/bounties/poladot-marketing-bounty.md";
  slug: "hub/bounties/poladot-marketing-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/bounties/polkadot-anti-scam-team.md": {
	id: "hub/bounties/polkadot-anti-scam-team.md";
  slug: "hub/bounties/polkadot-anti-scam-team";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/bounties/polkadot-events-bounty.md": {
	id: "hub/bounties/polkadot-events-bounty.md";
  slug: "hub/bounties/polkadot-events-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/business-development/harbour-industrial-capital.md": {
	id: "hub/business-development/harbour-industrial-capital.md";
  slug: "hub/business-development/harbour-industrial-capital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/business-development/illusionist-group.md": {
	id: "hub/business-development/illusionist-group.md";
  slug: "hub/business-development/illusionist-group";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/business-development/polkaport-east.md": {
	id: "hub/business-development/polkaport-east.md";
  slug: "hub/business-development/polkaport-east";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/business-development/scytale-digital.md": {
	id: "hub/business-development/scytale-digital.md";
  slug: "hub/business-development/scytale-digital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/collectives/kappa-sigma-mu.md": {
	id: "hub/collectives/kappa-sigma-mu.md";
  slug: "hub/collectives/kappa-sigma-mu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/collectives/polkadot-ambassadors-collective.md": {
	id: "hub/collectives/polkadot-ambassadors-collective.md";
  slug: "hub/collectives/polkadot-ambassadors-collective";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/collectives/polkadot-fellowship.mdx": {
	id: "hub/collectives/polkadot-fellowship.mdx";
  slug: "hub/collectives/polkadot-fellowship";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/collectives/polkadot-tooling-collective.md": {
	id: "hub/collectives/polkadot-tooling-collective.md";
  slug: "hub/collectives/polkadot-tooling-collective";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/apexchimpz.md": {
	id: "hub/daos/apexchimpz.md";
  slug: "hub/daos/apexchimpz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/cctf-dao.md": {
	id: "hub/daos/cctf-dao.md";
  slug: "hub/daos/cctf-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/chaosdao.md": {
	id: "hub/daos/chaosdao.md";
  slug: "hub/daos/chaosdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/department-of-decentralization.md": {
	id: "hub/daos/department-of-decentralization.md";
  slug: "hub/daos/department-of-decentralization";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/dot-validator-alliance.md": {
	id: "hub/daos/dot-validator-alliance.md";
  slug: "hub/daos/dot-validator-alliance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/index.mdx": {
	id: "hub/daos/index.mdx";
  slug: "hub/daos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/daos/kusdao.md": {
	id: "hub/daos/kusdao.md";
  slug: "hub/daos/kusdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/lenexus.md": {
	id: "hub/daos/lenexus.md";
  slug: "hub/daos/lenexus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/lucky-friday.md": {
	id: "hub/daos/lucky-friday.md";
  slug: "hub/daos/lucky-friday";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/permanencedao.mdx": {
	id: "hub/daos/permanencedao.mdx";
  slug: "hub/daos/permanencedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/daos/polkadot-hungary-dao.md": {
	id: "hub/daos/polkadot-hungary-dao.md";
  slug: "hub/daos/polkadot-hungary-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/polkadot-mexico.mdx": {
	id: "hub/daos/polkadot-mexico.mdx";
  slug: "hub/daos/polkadot-mexico";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/daos/polkadot-poland.mdx": {
	id: "hub/daos/polkadot-poland.mdx";
  slug: "hub/daos/polkadot-poland";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/daos/reeeeeeeeeedao.mdx": {
	id: "hub/daos/reeeeeeeeeedao.mdx";
  slug: "hub/daos/reeeeeeeeeedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/daos/saxemberg.md": {
	id: "hub/daos/saxemberg.md";
  slug: "hub/daos/saxemberg";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/teddydao.md": {
	id: "hub/daos/teddydao.md";
  slug: "hub/daos/teddydao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/unitedbloc.md": {
	id: "hub/daos/unitedbloc.md";
  slug: "hub/daos/unitedbloc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/youdledao.md": {
	id: "hub/daos/youdledao.md";
  slug: "hub/daos/youdledao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/index.mdx": {
	id: "hub/index.mdx";
  slug: "hub";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/initiatives/a-glass-with-gav-podcast.md": {
	id: "hub/initiatives/a-glass-with-gav-podcast.md";
  slug: "hub/initiatives/a-glass-with-gav-podcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/alpha-airdrop.mdx": {
	id: "hub/initiatives/alpha-airdrop.mdx";
  slug: "hub/initiatives/alpha-airdrop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/initiatives/index.mdx": {
	id: "hub/initiatives/index.mdx";
  slug: "hub/initiatives";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/initiatives/oneblock.md": {
	id: "hub/initiatives/oneblock.md";
  slug: "hub/initiatives/oneblock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/opengov-watch.md": {
	id: "hub/initiatives/opengov-watch.md";
  slug: "hub/initiatives/opengov-watch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/openguild-labs.md": {
	id: "hub/initiatives/openguild-labs.md";
  slug: "hub/initiatives/openguild-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/polkadot-blockchain-academy.md": {
	id: "hub/initiatives/polkadot-blockchain-academy.md";
  slug: "hub/initiatives/polkadot-blockchain-academy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/polkadot-prodigy.md": {
	id: "hub/initiatives/polkadot-prodigy.md";
  slug: "hub/initiatives/polkadot-prodigy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/subwork.md": {
	id: "hub/initiatives/subwork.md";
  slug: "hub/initiatives/subwork";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/wagmedia.md": {
	id: "hub/initiatives/wagmedia.md";
  slug: "hub/initiatives/wagmedia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/web3-educhain.md": {
	id: "hub/initiatives/web3-educhain.md";
  slug: "hub/initiatives/web3-educhain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/distractive-agency.md": {
	id: "hub/media/distractive-agency.md";
  slug: "hub/media/distractive-agency";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/dotcast.md": {
	id: "hub/media/dotcast.md";
  slug: "hub/media/dotcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/kusamarian.mdx": {
	id: "hub/media/kusamarian.mdx";
  slug: "hub/media/kusamarian";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/media/parachains-info.md": {
	id: "hub/media/parachains-info.md";
  slug: "hub/media/parachains-info";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-en-espanol.md": {
	id: "hub/media/polkadot-en-espanol.md";
  slug: "hub/media/polkadot-en-espanol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-france.md": {
	id: "hub/media/polkadot-france.md";
  slug: "hub/media/polkadot-france";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-insider.md": {
	id: "hub/media/polkadot-insider.md";
  slug: "hub/media/polkadot-insider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-promoteam-dao.md": {
	id: "hub/media/polkadot-promoteam-dao.md";
  slug: "hub/media/polkadot-promoteam-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadotters.md": {
	id: "hub/media/polkadotters.md";
  slug: "hub/media/polkadotters";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkaworld.md": {
	id: "hub/media/polkaworld.md";
  slug: "hub/media/polkaworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/the-astar-bulletin-tab.md": {
	id: "hub/media/the-astar-bulletin-tab.md";
  slug: "hub/media/the-astar-bulletin-tab";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/the-dots.md": {
	id: "hub/media/the-dots.md";
  slug: "hub/media/the-dots";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/vds-academy.md": {
	id: "hub/media/vds-academy.md";
  slug: "hub/media/vds-academy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/4ire-labs.md": {
	id: "hub/orgs/4ire-labs.md";
  slug: "hub/orgs/4ire-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/amforc.md": {
	id: "hub/orgs/amforc.md";
  slug: "hub/orgs/amforc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/bld-nodes.md": {
	id: "hub/orgs/bld-nodes.md";
  slug: "hub/orgs/bld-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/blockdeep-labs.md": {
	id: "hub/orgs/blockdeep-labs.md";
  slug: "hub/orgs/blockdeep-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/blockshard.md": {
	id: "hub/orgs/blockshard.md";
  slug: "hub/orgs/blockshard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/bloclick-staking.md": {
	id: "hub/orgs/bloclick-staking.md";
  slug: "hub/orgs/bloclick-staking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/boosty-labs.md": {
	id: "hub/orgs/boosty-labs.md";
  slug: "hub/orgs/boosty-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/cardinal-cryptography.md": {
	id: "hub/orgs/cardinal-cryptography.md";
  slug: "hub/orgs/cardinal-cryptography";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/certhum.md": {
	id: "hub/orgs/certhum.md";
  slug: "hub/orgs/certhum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/chainsafe.md": {
	id: "hub/orgs/chainsafe.md";
  slug: "hub/orgs/chainsafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/coinfabrik.md": {
	id: "hub/orgs/coinfabrik.md";
  slug: "hub/orgs/coinfabrik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/coinstudio-validator.md": {
	id: "hub/orgs/coinstudio-validator.md";
  slug: "hub/orgs/coinstudio-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/crifferent.md": {
	id: "hub/orgs/crifferent.md";
  slug: "hub/orgs/crifferent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/dominodes.md": {
	id: "hub/orgs/dominodes.md";
  slug: "hub/orgs/dominodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/dotlake.md": {
	id: "hub/orgs/dotlake.md";
  slug: "hub/orgs/dotlake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/dragonstake.md": {
	id: "hub/orgs/dragonstake.md";
  slug: "hub/orgs/dragonstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/dwellir.md": {
	id: "hub/orgs/dwellir.md";
  slug: "hub/orgs/dwellir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/globalstake.md": {
	id: "hub/orgs/globalstake.md";
  slug: "hub/orgs/globalstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/helikon-labs.md": {
	id: "hub/orgs/helikon-labs.md";
  slug: "hub/orgs/helikon-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/iceberg-nodes.md": {
	id: "hub/orgs/iceberg-nodes.md";
  slug: "hub/orgs/iceberg-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/index.mdx": {
	id: "hub/orgs/index.mdx";
  slug: "hub/orgs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hub/orgs/limechain.md": {
	id: "hub/orgs/limechain.md";
  slug: "hub/orgs/limechain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/masternode24.md": {
	id: "hub/orgs/masternode24.md";
  slug: "hub/orgs/masternode24";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/moonsong-labs.md": {
	id: "hub/orgs/moonsong-labs.md";
  slug: "hub/orgs/moonsong-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/oak-security.md": {
	id: "hub/orgs/oak-security.md";
  slug: "hub/orgs/oak-security";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/onfinality.md": {
	id: "hub/orgs/onfinality.md";
  slug: "hub/orgs/onfinality";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/opslayer.md": {
	id: "hub/orgs/opslayer.md";
  slug: "hub/orgs/opslayer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/p2p-validator.md": {
	id: "hub/orgs/p2p-validator.md";
  slug: "hub/orgs/p2p-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/paranodes.md": {
	id: "hub/orgs/paranodes.md";
  slug: "hub/orgs/paranodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/parity-technologies.md": {
	id: "hub/orgs/parity-technologies.md";
  slug: "hub/orgs/parity-technologies";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/pathrock.md": {
	id: "hub/orgs/pathrock.md";
  slug: "hub/orgs/pathrock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/polkachu.md": {
	id: "hub/orgs/polkachu.md";
  slug: "hub/orgs/polkachu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/polytope-labs.md": {
	id: "hub/orgs/polytope-labs.md";
  slug: "hub/orgs/polytope-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/project-liberty.md": {
	id: "hub/orgs/project-liberty.md";
  slug: "hub/orgs/project-liberty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/protofire.md": {
	id: "hub/orgs/protofire.md";
  slug: "hub/orgs/protofire";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/purestake.md": {
	id: "hub/orgs/purestake.md";
  slug: "hub/orgs/purestake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/r0gue.md": {
	id: "hub/orgs/r0gue.md";
  slug: "hub/orgs/r0gue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/ryabina.md": {
	id: "hub/orgs/ryabina.md";
  slug: "hub/orgs/ryabina";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/scio-labs.md": {
	id: "hub/orgs/scio-labs.md";
  slug: "hub/orgs/scio-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/senseinode.md": {
	id: "hub/orgs/senseinode.md";
  slug: "hub/orgs/senseinode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/stake-plus.md": {
	id: "hub/orgs/stake-plus.md";
  slug: "hub/orgs/stake-plus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/stakebaby.md": {
	id: "hub/orgs/stakebaby.md";
  slug: "hub/orgs/stakebaby";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/stakenode.md": {
	id: "hub/orgs/stakenode.md";
  slug: "hub/orgs/stakenode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/stakeworld.md": {
	id: "hub/orgs/stakeworld.md";
  slug: "hub/orgs/stakeworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/staking4all.md": {
	id: "hub/orgs/staking4all.md";
  slug: "hub/orgs/staking4all";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/stateless-money.md": {
	id: "hub/orgs/stateless-money.md";
  slug: "hub/orgs/stateless-money";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/telekom-mms.md": {
	id: "hub/orgs/telekom-mms.md";
  slug: "hub/orgs/telekom-mms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/turboflakes.md": {
	id: "hub/orgs/turboflakes.md";
  slug: "hub/orgs/turboflakes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/velocity-labs.md": {
	id: "hub/orgs/velocity-labs.md";
  slug: "hub/orgs/velocity-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/web3-foundation.md": {
	id: "hub/orgs/web3-foundation.md";
  slug: "hub/orgs/web3-foundation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/zeeve.md": {
	id: "hub/orgs/zeeve.md";
  slug: "hub/orgs/zeeve";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/orgs/zondax.md": {
	id: "hub/orgs/zondax.md";
  slug: "hub/orgs/zondax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/people/gavin-wood.md": {
	id: "hub/people/gavin-wood.md";
  slug: "hub/people/gavin-wood";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/resources/index.mdx": {
	id: "hub/resources/index.mdx";
  slug: "hub/resources";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/archive/polkaholic.md": {
	id: "tools/archive/polkaholic.md";
  slug: "tools/archive/polkaholic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/archive/polkastats.md": {
	id: "tools/archive/polkastats.md";
  slug: "tools/archive/polkastats";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/archive/xode-network.md": {
	id: "tools/archive/xode-network.md";
  slug: "tools/archive/xode-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/3xpl.md": {
	id: "tools/block-explorers/3xpl.md";
  slug: "tools/block-explorers/3xpl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/blockchair.md": {
	id: "tools/block-explorers/blockchair.md";
  slug: "tools/block-explorers/blockchair";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/chainspect.md": {
	id: "tools/block-explorers/chainspect.md";
  slug: "tools/block-explorers/chainspect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/index.mdx": {
	id: "tools/block-explorers/index.mdx";
  slug: "tools/block-explorers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/block-explorers/statescan.md": {
	id: "tools/block-explorers/statescan.md";
  slug: "tools/block-explorers/statescan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/subscan.md": {
	id: "tools/block-explorers/subscan.md";
  slug: "tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dao-tools/dotreasury.md": {
	id: "tools/dao-tools/dotreasury.md";
  slug: "tools/dao-tools/dotreasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dao-tools/index.mdx": {
	id: "tools/dao-tools/index.mdx";
  slug: "tools/dao-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dao-tools/ogtracker.md": {
	id: "tools/dao-tools/ogtracker.md";
  slug: "tools/dao-tools/ogtracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dao-tools/polkassembly.mdx": {
	id: "tools/dao-tools/polkassembly.mdx";
  slug: "tools/dao-tools/polkassembly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dao-tools/subsquare.mdx": {
	id: "tools/dao-tools/subsquare.mdx";
  slug: "tools/dao-tools/subsquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dao-tools/townhall.md": {
	id: "tools/dao-tools/townhall.md";
  slug: "tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/apillon.md": {
	id: "tools/development/apillon.md";
  slug: "tools/development/apillon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/gear-protocol.md": {
	id: "tools/development/gear-protocol.md";
  slug: "tools/development/gear-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/hellosqd.md": {
	id: "tools/development/hellosqd.md";
  slug: "tools/development/hellosqd";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/index.mdx": {
	id: "tools/development/index.mdx";
  slug: "tools/development";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/madara-starknet.md": {
	id: "tools/development/madara-starknet.md";
  slug: "tools/development/madara-starknet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/polkadotjs.md": {
	id: "tools/development/polkadotjs.md";
  slug: "tools/development/polkadotjs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/pop-cli.md": {
	id: "tools/development/pop-cli.md";
  slug: "tools/development/pop-cli";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/pop-network.md": {
	id: "tools/development/pop-network.md";
  slug: "tools/development/pop-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/subquery.md": {
	id: "tools/development/subquery.md";
  slug: "tools/development/subquery";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/tanssi-network.md": {
	id: "tools/development/tanssi-network.md";
  slug: "tools/development/tanssi-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/vara-network.md": {
	id: "tools/development/vara-network.md";
  slug: "tools/development/vara-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/index.mdx": {
	id: "tools/index.mdx";
  slug: "tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/fidi-web3-analytics.md": {
	id: "tools/miscellaneous/fidi-web3-analytics.md";
  slug: "tools/miscellaneous/fidi-web3-analytics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/miscellaneous/polkadot-staking-dashboard.md": {
	id: "tools/miscellaneous/polkadot-staking-dashboard.md";
  slug: "tools/miscellaneous/polkadot-staking-dashboard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/miscellaneous/polkadot-telemetry.md": {
	id: "tools/miscellaneous/polkadot-telemetry.md";
  slug: "tools/miscellaneous/polkadot-telemetry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/miscellaneous/polkawatch.md": {
	id: "tools/miscellaneous/polkawatch.md";
  slug: "tools/miscellaneous/polkawatch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/miscellaneous/web3alert.md": {
	id: "tools/miscellaneous/web3alert.md";
  slug: "tools/miscellaneous/web3alert";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/enkrypt-wallet.mdx": {
	id: "tools/wallets/enkrypt-wallet.mdx";
  slug: "tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/fearless-wallet.mdx": {
	id: "tools/wallets/fearless-wallet.mdx";
  slug: "tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/index.mdx": {
	id: "tools/wallets/index.mdx";
  slug: "tools/wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/kampela-signer.mdx": {
	id: "tools/wallets/kampela-signer.mdx";
  slug: "tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/mimir.mdx": {
	id: "tools/wallets/mimir.mdx";
  slug: "tools/wallets/mimir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/multix.mdx": {
	id: "tools/wallets/multix.mdx";
  slug: "tools/wallets/multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/nova-wallet.mdx": {
	id: "tools/wallets/nova-wallet.mdx";
  slug: "tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/polkadot-vault.mdx": {
	id: "tools/wallets/polkadot-vault.mdx";
  slug: "tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/polkagate.mdx": {
	id: "tools/wallets/polkagate.mdx";
  slug: "tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/polkasafe.mdx": {
	id: "tools/wallets/polkasafe.mdx";
  slug: "tools/wallets/polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/polkawallet.mdx": {
	id: "tools/wallets/polkawallet.mdx";
  slug: "tools/wallets/polkawallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/sporran-wallet.mdx": {
	id: "tools/wallets/sporran-wallet.mdx";
  slug: "tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/subwallet.mdx": {
	id: "tools/wallets/subwallet.mdx";
  slug: "tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/talisman-wallet.mdx": {
	id: "tools/wallets/talisman-wallet.mdx";
  slug: "tools/wallets/talisman-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/xsigners.md": {
	id: "tools/wallets/xsigners.md";
  slug: "tools/wallets/xsigners";
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
