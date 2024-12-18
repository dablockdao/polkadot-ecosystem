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
"dapps/ai/aventus-network.md": {
	id: "dapps/ai/aventus-network.md";
  slug: "dapps/ai/aventus-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/ai/bittensor.md": {
	id: "dapps/ai/bittensor.md";
  slug: "dapps/ai/bittensor";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/ai/index.mdx": {
	id: "dapps/ai/index.mdx";
  slug: "dapps/ai";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/ai/neuroweb.md": {
	id: "dapps/ai/neuroweb.md";
  slug: "dapps/ai/neuroweb";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/ai/phala-network.md": {
	id: "dapps/ai/phala-network.md";
  slug: "dapps/ai/phala-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/basilisk.md": {
	id: "dapps/archive/basilisk.md";
  slug: "dapps/archive/basilisk";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/bitgreen.md": {
	id: "dapps/archive/bitgreen.md";
  slug: "dapps/archive/bitgreen";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/dao-ipci.md": {
	id: "dapps/archive/dao-ipci.md";
  slug: "dapps/archive/dao-ipci";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/dotins.md": {
	id: "dapps/archive/dotins.md";
  slug: "dapps/archive/dotins";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/dotleap.md": {
	id: "dapps/archive/dotleap.md";
  slug: "dapps/archive/dotleap";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/gm-chain.md": {
	id: "dapps/archive/gm-chain.md";
  slug: "dapps/archive/gm-chain";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/jur-network.md": {
	id: "dapps/archive/jur-network.md";
  slug: "dapps/archive/jur-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/kaosland.md": {
	id: "dapps/archive/kaosland.md";
  slug: "dapps/archive/kaosland";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/layerx-network.md": {
	id: "dapps/archive/layerx-network.md";
  slug: "dapps/archive/layerx-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/manta-atlantic.md": {
	id: "dapps/archive/manta-atlantic.md";
  slug: "dapps/archive/manta-atlantic";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/nodle.md": {
	id: "dapps/archive/nodle.md";
  slug: "dapps/archive/nodle";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/parallel-finance.md": {
	id: "dapps/archive/parallel-finance.md";
  slug: "dapps/archive/parallel-finance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/polkamaps.md": {
	id: "dapps/archive/polkamaps.md";
  slug: "dapps/archive/polkamaps";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/raregems.md": {
	id: "dapps/archive/raregems.md";
  slug: "dapps/archive/raregems";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/rmrk.md": {
	id: "dapps/archive/rmrk.md";
  slug: "dapps/archive/rmrk";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/shokunin-network.md": {
	id: "dapps/archive/shokunin-network.md";
  slug: "dapps/archive/shokunin-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/skybreach.md": {
	id: "dapps/archive/skybreach.md";
  slug: "dapps/archive/skybreach";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/starlay.mdx": {
	id: "dapps/archive/starlay.mdx";
  slug: "dapps/archive/starlay";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/archive/subspace-network.md": {
	id: "dapps/archive/subspace-network.md";
  slug: "dapps/archive/subspace-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/tea-project.md": {
	id: "dapps/archive/tea-project.md";
  slug: "dapps/archive/tea-project";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/archive/the-damned-pirates-society.md": {
	id: "dapps/archive/the-damned-pirates-society.md";
  slug: "dapps/archive/the-damned-pirates-society";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/acala-network.md": {
	id: "dapps/defi/acala-network.md";
  slug: "dapps/defi/acala-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/algem.md": {
	id: "dapps/defi/algem.md";
  slug: "dapps/defi/algem";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/arthswap.mdx": {
	id: "dapps/defi/arthswap.mdx";
  slug: "dapps/defi/arthswap";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/defi/astriddao.md": {
	id: "dapps/defi/astriddao.md";
  slug: "dapps/defi/astriddao";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/axelar.md": {
	id: "dapps/defi/axelar.md";
  slug: "dapps/defi/axelar";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/beamswap.md": {
	id: "dapps/defi/beamswap.md";
  slug: "dapps/defi/beamswap";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/bifrost.md": {
	id: "dapps/defi/bifrost.md";
  slug: "dapps/defi/bifrost";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/centrifuge.mdx": {
	id: "dapps/defi/centrifuge.mdx";
  slug: "dapps/defi/centrifuge";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/defi/ceres.md": {
	id: "dapps/defi/ceres.md";
  slug: "dapps/defi/ceres";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/chainflip.md": {
	id: "dapps/defi/chainflip.md";
  slug: "dapps/defi/chainflip";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/composable-finance.md": {
	id: "dapps/defi/composable-finance.md";
  slug: "dapps/defi/composable-finance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/curve-finance.md": {
	id: "dapps/defi/curve-finance.md";
  slug: "dapps/defi/curve-finance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/dam-finance.md": {
	id: "dapps/defi/dam-finance.md";
  slug: "dapps/defi/dam-finance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/darwinia.md": {
	id: "dapps/defi/darwinia.md";
  slug: "dapps/defi/darwinia";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/hydration.md": {
	id: "dapps/defi/hydration.md";
  slug: "dapps/defi/hydration";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/hyperbridge.md": {
	id: "dapps/defi/hyperbridge.md";
  slug: "dapps/defi/hyperbridge";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/index.mdx": {
	id: "dapps/defi/index.mdx";
  slug: "dapps/defi";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/defi/interlay.md": {
	id: "dapps/defi/interlay.md";
  slug: "dapps/defi/interlay";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/kylix-finance.md": {
	id: "dapps/defi/kylix-finance.md";
  slug: "dapps/defi/kylix-finance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/linear-finance.md": {
	id: "dapps/defi/linear-finance.md";
  slug: "dapps/defi/linear-finance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/moonwell.md": {
	id: "dapps/defi/moonwell.md";
  slug: "dapps/defi/moonwell";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/pendulum.md": {
	id: "dapps/defi/pendulum.md";
  slug: "dapps/defi/pendulum";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/polimec.md": {
	id: "dapps/defi/polimec.md";
  slug: "dapps/defi/polimec";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/polkadex.md": {
	id: "dapps/defi/polkadex.md";
  slug: "dapps/defi/polkadex";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/polkamarkets.md": {
	id: "dapps/defi/polkamarkets.md";
  slug: "dapps/defi/polkamarkets";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/polkaswap.md": {
	id: "dapps/defi/polkaswap.md";
  slug: "dapps/defi/polkaswap";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/snowbridge.md": {
	id: "dapps/defi/snowbridge.md";
  slug: "dapps/defi/snowbridge";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/solarbeam.md": {
	id: "dapps/defi/solarbeam.md";
  slug: "dapps/defi/solarbeam";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/starfish-finance.md": {
	id: "dapps/defi/starfish-finance.md";
  slug: "dapps/defi/starfish-finance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/stellaswap.md": {
	id: "dapps/defi/stellaswap.md";
  slug: "dapps/defi/stellaswap";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/taiga-protocol.md": {
	id: "dapps/defi/taiga-protocol.md";
  slug: "dapps/defi/taiga-protocol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/unit-network.md": {
	id: "dapps/defi/unit-network.md";
  slug: "dapps/defi/unit-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/watr-protocol.md": {
	id: "dapps/defi/watr-protocol.md";
  slug: "dapps/defi/watr-protocol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/wormhole.md": {
	id: "dapps/defi/wormhole.md";
  slug: "dapps/defi/wormhole";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/xcavate.md": {
	id: "dapps/defi/xcavate.md";
  slug: "dapps/defi/xcavate";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/zeitgeist.md": {
	id: "dapps/defi/zeitgeist.md";
  slug: "dapps/defi/zeitgeist";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/defi/zenlink.md": {
	id: "dapps/defi/zenlink.md";
  slug: "dapps/defi/zenlink";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/depin/acurast.md": {
	id: "dapps/depin/acurast.md";
  slug: "dapps/depin/acurast";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/depin/giant-protocol.md": {
	id: "dapps/depin/giant-protocol.md";
  slug: "dapps/depin/giant-protocol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/depin/index.mdx": {
	id: "dapps/depin/index.mdx";
  slug: "dapps/depin";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/depin/peaq-network.md": {
	id: "dapps/depin/peaq-network.md";
  slug: "dapps/depin/peaq-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/depin/robonomics.md": {
	id: "dapps/depin/robonomics.md";
  slug: "dapps/depin/robonomics";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/ajuna-network.md": {
	id: "dapps/gaming/ajuna-network.md";
  slug: "dapps/gaming/ajuna-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/bitcountry.md": {
	id: "dapps/gaming/bitcountry.md";
  slug: "dapps/gaming/bitcountry";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/cosmize.md": {
	id: "dapps/gaming/cosmize.md";
  slug: "dapps/gaming/cosmize";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/evrloot.md": {
	id: "dapps/gaming/evrloot.md";
  slug: "dapps/gaming/evrloot";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/exiled-racers.md": {
	id: "dapps/gaming/exiled-racers.md";
  slug: "dapps/gaming/exiled-racers";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/gamedao.md": {
	id: "dapps/gaming/gamedao.md";
  slug: "dapps/gaming/gamedao";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/glmr-apes-the-great-escape.md": {
	id: "dapps/gaming/glmr-apes-the-great-escape.md";
  slug: "dapps/gaming/glmr-apes-the-great-escape";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/heal3.md": {
	id: "dapps/gaming/heal3.md";
  slug: "dapps/gaming/heal3";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/index.mdx": {
	id: "dapps/gaming/index.mdx";
  slug: "dapps/gaming";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/gaming/moonfit.md": {
	id: "dapps/gaming/moonfit.md";
  slug: "dapps/gaming/moonfit";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/moonsama.md": {
	id: "dapps/gaming/moonsama.md";
  slug: "dapps/gaming/moonsama";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/mythos-chain.md": {
	id: "dapps/gaming/mythos-chain.md";
  slug: "dapps/gaming/mythos-chain";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/odyssey.md": {
	id: "dapps/gaming/odyssey.md";
  slug: "dapps/gaming/odyssey";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/gaming/zero-network.md": {
	id: "dapps/gaming/zero-network.md";
  slug: "dapps/gaming/zero-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/index.mdx": {
	id: "dapps/index.mdx";
  slug: "dapps";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/archisinal.mdx": {
	id: "dapps/miscellaneous/archisinal.mdx";
  slug: "dapps/miscellaneous/archisinal";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/ava-protocol.md": {
	id: "dapps/miscellaneous/ava-protocol.md";
  slug: "dapps/miscellaneous/ava-protocol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/citizend.md": {
	id: "dapps/miscellaneous/citizend.md";
  slug: "dapps/miscellaneous/citizend";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/hashed-network.md": {
	id: "dapps/miscellaneous/hashed-network.md";
  slug: "dapps/miscellaneous/hashed-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/index.mdx": {
	id: "dapps/miscellaneous/index.mdx";
  slug: "dapps/miscellaneous";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/miscellaneous/integritee.md": {
	id: "dapps/miscellaneous/integritee.md";
  slug: "dapps/miscellaneous/integritee";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/laos-network.md": {
	id: "dapps/miscellaneous/laos-network.md";
  slug: "dapps/miscellaneous/laos-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/lastic.md": {
	id: "dapps/miscellaneous/lastic.md";
  slug: "dapps/miscellaneous/lastic";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/regionx.md": {
	id: "dapps/miscellaneous/regionx.md";
  slug: "dapps/miscellaneous/regionx";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/t3rn.md": {
	id: "dapps/miscellaneous/t3rn.md";
  slug: "dapps/miscellaneous/t3rn";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/miscellaneous/xx-network.md": {
	id: "dapps/miscellaneous/xx-network.md";
  slug: "dapps/miscellaneous/xx-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/artzero.md": {
	id: "dapps/nft-marketplaces/artzero.md";
  slug: "dapps/nft-marketplaces/artzero";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/bluez.md": {
	id: "dapps/nft-marketplaces/bluez.md";
  slug: "dapps/nft-marketplaces/bluez";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/destore.md": {
	id: "dapps/nft-marketplaces/destore.md";
  slug: "dapps/nft-marketplaces/destore";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/index.mdx": {
	id: "dapps/nft-marketplaces/index.mdx";
  slug: "dapps/nft-marketplaces";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/nft-marketplaces/kodadot.md": {
	id: "dapps/nft-marketplaces/kodadot.md";
  slug: "dapps/nft-marketplaces/kodadot";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/moonbeans.md": {
	id: "dapps/nft-marketplaces/moonbeans.md";
  slug: "dapps/nft-marketplaces/moonbeans";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/nftrade.md": {
	id: "dapps/nft-marketplaces/nftrade.md";
  slug: "dapps/nft-marketplaces/nftrade";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/public-pressure.md": {
	id: "dapps/nft-marketplaces/public-pressure.md";
  slug: "dapps/nft-marketplaces/public-pressure";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/singular-nft-marketplace.md": {
	id: "dapps/nft-marketplaces/singular-nft-marketplace.md";
  slug: "dapps/nft-marketplaces/singular-nft-marketplace";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/sonova.md": {
	id: "dapps/nft-marketplaces/sonova.md";
  slug: "dapps/nft-marketplaces/sonova";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/tofunft-marketplace.md": {
	id: "dapps/nft-marketplaces/tofunft-marketplace.md";
  slug: "dapps/nft-marketplaces/tofunft-marketplace";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/unique-network.md": {
	id: "dapps/nft-marketplaces/unique-network.md";
  slug: "dapps/nft-marketplaces/unique-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/smart-contracts/aleph-zero.md": {
	id: "dapps/smart-contracts/aleph-zero.md";
  slug: "dapps/smart-contracts/aleph-zero";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/smart-contracts/astar-network.md": {
	id: "dapps/smart-contracts/astar-network.md";
  slug: "dapps/smart-contracts/astar-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/smart-contracts/energy-web-x.md": {
	id: "dapps/smart-contracts/energy-web-x.md";
  slug: "dapps/smart-contracts/energy-web-x";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/smart-contracts/index.mdx": {
	id: "dapps/smart-contracts/index.mdx";
  slug: "dapps/smart-contracts";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/smart-contracts/moonbeam-network.md": {
	id: "dapps/smart-contracts/moonbeam-network.md";
  slug: "dapps/smart-contracts/moonbeam-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/smart-contracts/sora-network.md": {
	id: "dapps/smart-contracts/sora-network.md";
  slug: "dapps/smart-contracts/sora-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/smart-contracts/ternoa.md": {
	id: "dapps/smart-contracts/ternoa.md";
  slug: "dapps/smart-contracts/ternoa";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/dsnp-protocol.md": {
	id: "dapps/social/dsnp-protocol.md";
  slug: "dapps/social/dsnp-protocol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/encointer.md": {
	id: "dapps/social/encointer.md";
  slug: "dapps/social/encointer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/frequency.md": {
	id: "dapps/social/frequency.md";
  slug: "dapps/social/frequency";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/imbue-network.md": {
	id: "dapps/social/imbue-network.md";
  slug: "dapps/social/imbue-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/index.mdx": {
	id: "dapps/social/index.mdx";
  slug: "dapps/social";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/social/invarch-network.md": {
	id: "dapps/social/invarch-network.md";
  slug: "dapps/social/invarch-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/joystream.md": {
	id: "dapps/social/joystream.md";
  slug: "dapps/social/joystream";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/kilt-protocol.md": {
	id: "dapps/social/kilt-protocol.md";
  slug: "dapps/social/kilt-protocol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/litentry.md": {
	id: "dapps/social/litentry.md";
  slug: "dapps/social/litentry";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/logion-network.md": {
	id: "dapps/social/logion-network.md";
  slug: "dapps/social/logion-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/mandala-chain.md": {
	id: "dapps/social/mandala-chain.md";
  slug: "dapps/social/mandala-chain";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/subsocial.md": {
	id: "dapps/social/subsocial.md";
  slug: "dapps/social/subsocial";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/social/virto-network.md": {
	id: "dapps/social/virto-network.md";
  slug: "dapps/social/virto-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/storage/avail-project.md": {
	id: "dapps/storage/avail-project.md";
  slug: "dapps/storage/avail-project";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/storage/cess.md": {
	id: "dapps/storage/cess.md";
  slug: "dapps/storage/cess";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/storage/crust-network.mdx": {
	id: "dapps/storage/crust-network.mdx";
  slug: "dapps/storage/crust-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/storage/datdot.md": {
	id: "dapps/storage/datdot.md";
  slug: "dapps/storage/datdot";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"dapps/storage/index.mdx": {
	id: "dapps/storage/index.mdx";
  slug: "dapps/storage";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"dapps/storage/midnight-network.md": {
	id: "dapps/storage/midnight-network.md";
  slug: "dapps/storage/midnight-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/archive/playproject.md": {
	id: "hub/archive/playproject.md";
  slug: "hub/archive/playproject";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/archive/polkadot-brasil.md": {
	id: "hub/archive/polkadot-brasil.md";
  slug: "hub/archive/polkadot-brasil";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/archive/polkadot-philosophy.md": {
	id: "hub/archive/polkadot-philosophy.md";
  slug: "hub/archive/polkadot-philosophy";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/archive/wizard-amigos.md": {
	id: "hub/archive/wizard-amigos.md";
  slug: "hub/archive/wizard-amigos";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/apexchimpz.md": {
	id: "hub/daos/apexchimpz.md";
  slug: "hub/daos/apexchimpz";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/cctf-dao.md": {
	id: "hub/daos/cctf-dao.md";
  slug: "hub/daos/cctf-dao";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/chaosdao.md": {
	id: "hub/daos/chaosdao.md";
  slug: "hub/daos/chaosdao";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/department-of-decentralization.md": {
	id: "hub/daos/department-of-decentralization.md";
  slug: "hub/daos/department-of-decentralization";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/dot-validator-alliance.md": {
	id: "hub/daos/dot-validator-alliance.md";
  slug: "hub/daos/dot-validator-alliance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/index.mdx": {
	id: "hub/daos/index.mdx";
  slug: "hub/daos";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hub/daos/kappa-sigma-mu.md": {
	id: "hub/daos/kappa-sigma-mu.md";
  slug: "hub/daos/kappa-sigma-mu";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/polkadot-ambassadors-collective.md": {
	id: "hub/daos/polkadot-ambassadors-collective.md";
  slug: "hub/daos/polkadot-ambassadors-collective";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/polkadot-fellowship.md": {
	id: "hub/daos/polkadot-fellowship.md";
  slug: "hub/daos/polkadot-fellowship";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/polkadot-mexico.md": {
	id: "hub/daos/polkadot-mexico.md";
  slug: "hub/daos/polkadot-mexico";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/polkadot-tooling-collective.md": {
	id: "hub/daos/polkadot-tooling-collective.md";
  slug: "hub/daos/polkadot-tooling-collective";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/teddydao.md": {
	id: "hub/daos/teddydao.md";
  slug: "hub/daos/teddydao";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/unitedbloc.md": {
	id: "hub/daos/unitedbloc.md";
  slug: "hub/daos/unitedbloc";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/wagmedia.md": {
	id: "hub/daos/wagmedia.md";
  slug: "hub/daos/wagmedia";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/daos/youdledao.md": {
	id: "hub/daos/youdledao.md";
  slug: "hub/daos/youdledao";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/index.mdx": {
	id: "hub/index.mdx";
  slug: "hub";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hub/initiatives/a-glass-with-gav-podcast.md": {
	id: "hub/initiatives/a-glass-with-gav-podcast.md";
  slug: "hub/initiatives/a-glass-with-gav-podcast";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/initiatives/alpha-airdrop.md": {
	id: "hub/initiatives/alpha-airdrop.md";
  slug: "hub/initiatives/alpha-airdrop";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/initiatives/index.mdx": {
	id: "hub/initiatives/index.mdx";
  slug: "hub/initiatives";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hub/initiatives/polkadot-prodigy.md": {
	id: "hub/initiatives/polkadot-prodigy.md";
  slug: "hub/initiatives/polkadot-prodigy";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/distractive-agency.md": {
	id: "hub/media/distractive-agency.md";
  slug: "hub/media/distractive-agency";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/dotcast.md": {
	id: "hub/media/dotcast.md";
  slug: "hub/media/dotcast";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/harbour-industrial-capital.md": {
	id: "hub/media/harbour-industrial-capital.md";
  slug: "hub/media/harbour-industrial-capital";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/illusionist-group.md": {
	id: "hub/media/illusionist-group.md";
  slug: "hub/media/illusionist-group";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/kusamarian.md": {
	id: "hub/media/kusamarian.md";
  slug: "hub/media/kusamarian";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/oneblock.md": {
	id: "hub/media/oneblock.md";
  slug: "hub/media/oneblock";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/opengov-watch.md": {
	id: "hub/media/opengov-watch.md";
  slug: "hub/media/opengov-watch";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/openguild-labs.md": {
	id: "hub/media/openguild-labs.md";
  slug: "hub/media/openguild-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/parachains-info.md": {
	id: "hub/media/parachains-info.md";
  slug: "hub/media/parachains-info";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/poladot-marketing-bounty.md": {
	id: "hub/media/poladot-marketing-bounty.md";
  slug: "hub/media/poladot-marketing-bounty";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadot-anti-scam-team.md": {
	id: "hub/media/polkadot-anti-scam-team.md";
  slug: "hub/media/polkadot-anti-scam-team";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadot-blockchain-academy.md": {
	id: "hub/media/polkadot-blockchain-academy.md";
  slug: "hub/media/polkadot-blockchain-academy";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadot-en-espanol.md": {
	id: "hub/media/polkadot-en-espanol.md";
  slug: "hub/media/polkadot-en-espanol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadot-events-bounty.md": {
	id: "hub/media/polkadot-events-bounty.md";
  slug: "hub/media/polkadot-events-bounty";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadot-france.md": {
	id: "hub/media/polkadot-france.md";
  slug: "hub/media/polkadot-france";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadot-insider.md": {
	id: "hub/media/polkadot-insider.md";
  slug: "hub/media/polkadot-insider";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadot-promoteam-dao.md": {
	id: "hub/media/polkadot-promoteam-dao.md";
  slug: "hub/media/polkadot-promoteam-dao";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkadotters.md": {
	id: "hub/media/polkadotters.md";
  slug: "hub/media/polkadotters";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkaport-east.md": {
	id: "hub/media/polkaport-east.md";
  slug: "hub/media/polkaport-east";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/polkaworld.md": {
	id: "hub/media/polkaworld.md";
  slug: "hub/media/polkaworld";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/scytale-digital.md": {
	id: "hub/media/scytale-digital.md";
  slug: "hub/media/scytale-digital";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/subwork.md": {
	id: "hub/media/subwork.md";
  slug: "hub/media/subwork";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/the-astar-bulletin-tab.md": {
	id: "hub/media/the-astar-bulletin-tab.md";
  slug: "hub/media/the-astar-bulletin-tab";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/the-dots.md": {
	id: "hub/media/the-dots.md";
  slug: "hub/media/the-dots";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/vds-academy.md": {
	id: "hub/media/vds-academy.md";
  slug: "hub/media/vds-academy";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/media/web3-educhain.md": {
	id: "hub/media/web3-educhain.md";
  slug: "hub/media/web3-educhain";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/4ire-labs.md": {
	id: "hub/orgs/4ire-labs.md";
  slug: "hub/orgs/4ire-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/amforc.md": {
	id: "hub/orgs/amforc.md";
  slug: "hub/orgs/amforc";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/bld-nodes.md": {
	id: "hub/orgs/bld-nodes.md";
  slug: "hub/orgs/bld-nodes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/blockdeep-labs.md": {
	id: "hub/orgs/blockdeep-labs.md";
  slug: "hub/orgs/blockdeep-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/blockshard.md": {
	id: "hub/orgs/blockshard.md";
  slug: "hub/orgs/blockshard";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/bloclick-staking.md": {
	id: "hub/orgs/bloclick-staking.md";
  slug: "hub/orgs/bloclick-staking";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/boosty-labs.md": {
	id: "hub/orgs/boosty-labs.md";
  slug: "hub/orgs/boosty-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/cardinal-cryptography.md": {
	id: "hub/orgs/cardinal-cryptography.md";
  slug: "hub/orgs/cardinal-cryptography";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/certhum.md": {
	id: "hub/orgs/certhum.md";
  slug: "hub/orgs/certhum";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/chainsafe.md": {
	id: "hub/orgs/chainsafe.md";
  slug: "hub/orgs/chainsafe";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/coinfabrik.md": {
	id: "hub/orgs/coinfabrik.md";
  slug: "hub/orgs/coinfabrik";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/coinstudio-validator.md": {
	id: "hub/orgs/coinstudio-validator.md";
  slug: "hub/orgs/coinstudio-validator";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/crifferent.md": {
	id: "hub/orgs/crifferent.md";
  slug: "hub/orgs/crifferent";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/dominodes.md": {
	id: "hub/orgs/dominodes.md";
  slug: "hub/orgs/dominodes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/dotlake.md": {
	id: "hub/orgs/dotlake.md";
  slug: "hub/orgs/dotlake";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/dragonstake.md": {
	id: "hub/orgs/dragonstake.md";
  slug: "hub/orgs/dragonstake";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/dwellir.md": {
	id: "hub/orgs/dwellir.md";
  slug: "hub/orgs/dwellir";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/globalstake.md": {
	id: "hub/orgs/globalstake.md";
  slug: "hub/orgs/globalstake";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/helikon-labs.md": {
	id: "hub/orgs/helikon-labs.md";
  slug: "hub/orgs/helikon-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/iceberg-nodes.md": {
	id: "hub/orgs/iceberg-nodes.md";
  slug: "hub/orgs/iceberg-nodes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/index.mdx": {
	id: "hub/orgs/index.mdx";
  slug: "hub/orgs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hub/orgs/limechain.md": {
	id: "hub/orgs/limechain.md";
  slug: "hub/orgs/limechain";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/lucky-friday-labs.md": {
	id: "hub/orgs/lucky-friday-labs.md";
  slug: "hub/orgs/lucky-friday-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/masternode24.md": {
	id: "hub/orgs/masternode24.md";
  slug: "hub/orgs/masternode24";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/moonsong-labs.md": {
	id: "hub/orgs/moonsong-labs.md";
  slug: "hub/orgs/moonsong-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/neurolanche-labs.md": {
	id: "hub/orgs/neurolanche-labs.md";
  slug: "hub/orgs/neurolanche-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/oak-security.md": {
	id: "hub/orgs/oak-security.md";
  slug: "hub/orgs/oak-security";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/onfinality.md": {
	id: "hub/orgs/onfinality.md";
  slug: "hub/orgs/onfinality";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/opslayer.md": {
	id: "hub/orgs/opslayer.md";
  slug: "hub/orgs/opslayer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/p2p-validator.md": {
	id: "hub/orgs/p2p-validator.md";
  slug: "hub/orgs/p2p-validator";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/paranodes.md": {
	id: "hub/orgs/paranodes.md";
  slug: "hub/orgs/paranodes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/parity-technologies.md": {
	id: "hub/orgs/parity-technologies.md";
  slug: "hub/orgs/parity-technologies";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/pathrock.md": {
	id: "hub/orgs/pathrock.md";
  slug: "hub/orgs/pathrock";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/polkachu.md": {
	id: "hub/orgs/polkachu.md";
  slug: "hub/orgs/polkachu";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/polytope-labs.md": {
	id: "hub/orgs/polytope-labs.md";
  slug: "hub/orgs/polytope-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/project-liberty.md": {
	id: "hub/orgs/project-liberty.md";
  slug: "hub/orgs/project-liberty";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/protofire.md": {
	id: "hub/orgs/protofire.md";
  slug: "hub/orgs/protofire";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/purestake.md": {
	id: "hub/orgs/purestake.md";
  slug: "hub/orgs/purestake";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/r0gue.md": {
	id: "hub/orgs/r0gue.md";
  slug: "hub/orgs/r0gue";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/ryabina.md": {
	id: "hub/orgs/ryabina.md";
  slug: "hub/orgs/ryabina";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/saxemberg.md": {
	id: "hub/orgs/saxemberg.md";
  slug: "hub/orgs/saxemberg";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/scio-labs.md": {
	id: "hub/orgs/scio-labs.md";
  slug: "hub/orgs/scio-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/senseinode.md": {
	id: "hub/orgs/senseinode.md";
  slug: "hub/orgs/senseinode";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/stake-plus.md": {
	id: "hub/orgs/stake-plus.md";
  slug: "hub/orgs/stake-plus";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/stakebaby.md": {
	id: "hub/orgs/stakebaby.md";
  slug: "hub/orgs/stakebaby";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/stakenode.md": {
	id: "hub/orgs/stakenode.md";
  slug: "hub/orgs/stakenode";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/stakeworld.md": {
	id: "hub/orgs/stakeworld.md";
  slug: "hub/orgs/stakeworld";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/staking4all.md": {
	id: "hub/orgs/staking4all.md";
  slug: "hub/orgs/staking4all";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/stateless-money.md": {
	id: "hub/orgs/stateless-money.md";
  slug: "hub/orgs/stateless-money";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/telekom-mms.md": {
	id: "hub/orgs/telekom-mms.md";
  slug: "hub/orgs/telekom-mms";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/turboflakes.md": {
	id: "hub/orgs/turboflakes.md";
  slug: "hub/orgs/turboflakes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/velocity-labs.md": {
	id: "hub/orgs/velocity-labs.md";
  slug: "hub/orgs/velocity-labs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/web3-foundation.md": {
	id: "hub/orgs/web3-foundation.md";
  slug: "hub/orgs/web3-foundation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/zeeve.md": {
	id: "hub/orgs/zeeve.md";
  slug: "hub/orgs/zeeve";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/orgs/zondax.md": {
	id: "hub/orgs/zondax.md";
  slug: "hub/orgs/zondax";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/people/gavin-wood.md": {
	id: "hub/people/gavin-wood.md";
  slug: "hub/people/gavin-wood";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hub/resources/index.mdx": {
	id: "hub/resources/index.mdx";
  slug: "hub/resources";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/archive/polkaholic.md": {
	id: "tools/archive/polkaholic.md";
  slug: "tools/archive/polkaholic";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/archive/polkastats.md": {
	id: "tools/archive/polkastats.md";
  slug: "tools/archive/polkastats";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/archive/polkawallet.md": {
	id: "tools/archive/polkawallet.md";
  slug: "tools/archive/polkawallet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/archive/xode-network.md": {
	id: "tools/archive/xode-network.md";
  slug: "tools/archive/xode-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/3xpl.md": {
	id: "tools/block-explorers/3xpl.md";
  slug: "tools/block-explorers/3xpl";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/blockchair.md": {
	id: "tools/block-explorers/blockchair.md";
  slug: "tools/block-explorers/blockchair";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/chainspect.md": {
	id: "tools/block-explorers/chainspect.md";
  slug: "tools/block-explorers/chainspect";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/din-web3go.md": {
	id: "tools/block-explorers/din-web3go.md";
  slug: "tools/block-explorers/din-web3go";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/fidi-web3-analytics.md": {
	id: "tools/block-explorers/fidi-web3-analytics.md";
  slug: "tools/block-explorers/fidi-web3-analytics";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/index.mdx": {
	id: "tools/block-explorers/index.mdx";
  slug: "tools/block-explorers";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/block-explorers/polkadot-staking-dashboard.md": {
	id: "tools/block-explorers/polkadot-staking-dashboard.md";
  slug: "tools/block-explorers/polkadot-staking-dashboard";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/polkadot-telemetry.md": {
	id: "tools/block-explorers/polkadot-telemetry.md";
  slug: "tools/block-explorers/polkadot-telemetry";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/polkawatch.md": {
	id: "tools/block-explorers/polkawatch.md";
  slug: "tools/block-explorers/polkawatch";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/statescan.md": {
	id: "tools/block-explorers/statescan.md";
  slug: "tools/block-explorers/statescan";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/subscan.md": {
	id: "tools/block-explorers/subscan.md";
  slug: "tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/block-explorers/web3alert.md": {
	id: "tools/block-explorers/web3alert.md";
  slug: "tools/block-explorers/web3alert";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/dao-tools/dotreasury.md": {
	id: "tools/dao-tools/dotreasury.md";
  slug: "tools/dao-tools/dotreasury";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/dao-tools/index.mdx": {
	id: "tools/dao-tools/index.mdx";
  slug: "tools/dao-tools";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/dao-tools/og-tracker.md": {
	id: "tools/dao-tools/og-tracker.md";
  slug: "tools/dao-tools/og-tracker";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/dao-tools/polkassembly.md": {
	id: "tools/dao-tools/polkassembly.md";
  slug: "tools/dao-tools/polkassembly";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/dao-tools/subsquare.md": {
	id: "tools/dao-tools/subsquare.md";
  slug: "tools/dao-tools/subsquare";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/dao-tools/townhall.md": {
	id: "tools/dao-tools/townhall.md";
  slug: "tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/apillon.md": {
	id: "tools/development/apillon.md";
  slug: "tools/development/apillon";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/gear-protocol.md": {
	id: "tools/development/gear-protocol.md";
  slug: "tools/development/gear-protocol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/hellosqd.md": {
	id: "tools/development/hellosqd.md";
  slug: "tools/development/hellosqd";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/index.mdx": {
	id: "tools/development/index.mdx";
  slug: "tools/development";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/development/madara-starknet.md": {
	id: "tools/development/madara-starknet.md";
  slug: "tools/development/madara-starknet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/polkadotjs.md": {
	id: "tools/development/polkadotjs.md";
  slug: "tools/development/polkadotjs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/pop-cli.md": {
	id: "tools/development/pop-cli.md";
  slug: "tools/development/pop-cli";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/pop-network.md": {
	id: "tools/development/pop-network.md";
  slug: "tools/development/pop-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/subquery.md": {
	id: "tools/development/subquery.md";
  slug: "tools/development/subquery";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/tanssi-network.md": {
	id: "tools/development/tanssi-network.md";
  slug: "tools/development/tanssi-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/development/vara-network.md": {
	id: "tools/development/vara-network.md";
  slug: "tools/development/vara-network";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/index.mdx": {
	id: "tools/index.mdx";
  slug: "tools";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/wallets/enkrypt-wallet.md": {
	id: "tools/wallets/enkrypt-wallet.md";
  slug: "tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/fearless-wallet.md": {
	id: "tools/wallets/fearless-wallet.md";
  slug: "tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/index.mdx": {
	id: "tools/wallets/index.mdx";
  slug: "tools/wallets";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/wallets/kampela-signer.md": {
	id: "tools/wallets/kampela-signer.md";
  slug: "tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/mimir.md": {
	id: "tools/wallets/mimir.md";
  slug: "tools/wallets/mimir";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/multix.md": {
	id: "tools/wallets/multix.md";
  slug: "tools/wallets/multix";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/nova-wallet.md": {
	id: "tools/wallets/nova-wallet.md";
  slug: "tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/polkadot-vault.md": {
	id: "tools/wallets/polkadot-vault.md";
  slug: "tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/polkagate.md": {
	id: "tools/wallets/polkagate.md";
  slug: "tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/polkasafe.md": {
	id: "tools/wallets/polkasafe.md";
  slug: "tools/wallets/polkasafe";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/sporran-wallet.md": {
	id: "tools/wallets/sporran-wallet.md";
  slug: "tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/subwallet.md": {
	id: "tools/wallets/subwallet.md";
  slug: "tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/talisman-wallet.md": {
	id: "tools/wallets/talisman-wallet.md";
  slug: "tools/wallets/talisman-wallet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"tools/wallets/xsigners.md": {
	id: "tools/wallets/xsigners.md";
  slug: "tools/wallets/xsigners";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
