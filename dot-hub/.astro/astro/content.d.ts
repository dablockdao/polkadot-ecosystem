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
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/ai/bittensor.md": {
	id: "dapps/ai/bittensor.md";
  slug: "dapps/ai/bittensor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/ai/index.mdx": {
	id: "dapps/ai/index.mdx";
  slug: "dapps/ai";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/ai/neuroweb.md": {
	id: "dapps/ai/neuroweb.md";
  slug: "dapps/ai/neuroweb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/ai/phala-network.md": {
	id: "dapps/ai/phala-network.md";
  slug: "dapps/ai/phala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/acala-network.md": {
	id: "dapps/defi/acala-network.md";
  slug: "dapps/defi/acala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/algem.md": {
	id: "dapps/defi/algem.md";
  slug: "dapps/defi/algem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/arthswap.mdx": {
	id: "dapps/defi/arthswap.mdx";
  slug: "dapps/defi/arthswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/astriddao.md": {
	id: "dapps/defi/astriddao.md";
  slug: "dapps/defi/astriddao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/axelar.md": {
	id: "dapps/defi/axelar.md";
  slug: "dapps/defi/axelar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/basilisk.md": {
	id: "dapps/defi/basilisk.md";
  slug: "dapps/defi/basilisk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/beamswap.md": {
	id: "dapps/defi/beamswap.md";
  slug: "dapps/defi/beamswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/bifrost.md": {
	id: "dapps/defi/bifrost.md";
  slug: "dapps/defi/bifrost";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/centrifuge.md": {
	id: "dapps/defi/centrifuge.md";
  slug: "dapps/defi/centrifuge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/ceres.md": {
	id: "dapps/defi/ceres.md";
  slug: "dapps/defi/ceres";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/chainflip.md": {
	id: "dapps/defi/chainflip.md";
  slug: "dapps/defi/chainflip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/composable-finance.md": {
	id: "dapps/defi/composable-finance.md";
  slug: "dapps/defi/composable-finance";
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
"dapps/defi/dam-finance.md": {
	id: "dapps/defi/dam-finance.md";
  slug: "dapps/defi/dam-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/darwinia.md": {
	id: "dapps/defi/darwinia.md";
  slug: "dapps/defi/darwinia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/hydration.md": {
	id: "dapps/defi/hydration.md";
  slug: "dapps/defi/hydration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/hyperbridge.md": {
	id: "dapps/defi/hyperbridge.md";
  slug: "dapps/defi/hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/index.mdx": {
	id: "dapps/defi/index.mdx";
  slug: "dapps/defi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/integritee.md": {
	id: "dapps/defi/integritee.md";
  slug: "dapps/defi/integritee";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/interlay.md": {
	id: "dapps/defi/interlay.md";
  slug: "dapps/defi/interlay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/kylix-finance.md": {
	id: "dapps/defi/kylix-finance.md";
  slug: "dapps/defi/kylix-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/laos-network.md": {
	id: "dapps/defi/laos-network.md";
  slug: "dapps/defi/laos-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/layerx-network.md": {
	id: "dapps/defi/layerx-network.md";
  slug: "dapps/defi/layerx-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/linear-finance.md": {
	id: "dapps/defi/linear-finance.md";
  slug: "dapps/defi/linear-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/mangata-x.md": {
	id: "dapps/defi/mangata-x.md";
  slug: "dapps/defi/mangata-x";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/moonwell.md": {
	id: "dapps/defi/moonwell.md";
  slug: "dapps/defi/moonwell";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/parallel-finance.md": {
	id: "dapps/defi/parallel-finance.md";
  slug: "dapps/defi/parallel-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/pendulum.md": {
	id: "dapps/defi/pendulum.md";
  slug: "dapps/defi/pendulum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/polimec.md": {
	id: "dapps/defi/polimec.md";
  slug: "dapps/defi/polimec";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/polkadex.md": {
	id: "dapps/defi/polkadex.md";
  slug: "dapps/defi/polkadex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/polkamarkets.md": {
	id: "dapps/defi/polkamarkets.md";
  slug: "dapps/defi/polkamarkets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/polkaswap.md": {
	id: "dapps/defi/polkaswap.md";
  slug: "dapps/defi/polkaswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/qoda-finance.md": {
	id: "dapps/defi/qoda-finance.md";
  slug: "dapps/defi/qoda-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/snowbridge.md": {
	id: "dapps/defi/snowbridge.md";
  slug: "dapps/defi/snowbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"dapps/defi/starlay.mdx": {
	id: "dapps/defi/starlay.mdx";
  slug: "dapps/defi/starlay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/defi/stellaswap.md": {
	id: "dapps/defi/stellaswap.md";
  slug: "dapps/defi/stellaswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/taiga-protocol.md": {
	id: "dapps/defi/taiga-protocol.md";
  slug: "dapps/defi/taiga-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/unit-network.md": {
	id: "dapps/defi/unit-network.md";
  slug: "dapps/defi/unit-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/watr-protocol.md": {
	id: "dapps/defi/watr-protocol.md";
  slug: "dapps/defi/watr-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/wormhole.md": {
	id: "dapps/defi/wormhole.md";
  slug: "dapps/defi/wormhole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/xcavate.md": {
	id: "dapps/defi/xcavate.md";
  slug: "dapps/defi/xcavate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/defi/zeitgeist.md": {
	id: "dapps/defi/zeitgeist.md";
  slug: "dapps/defi/zeitgeist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"dapps/depin/nodle.md": {
	id: "dapps/depin/nodle.md";
  slug: "dapps/depin/nodle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"dapps/gaming/kaosland.md": {
	id: "dapps/gaming/kaosland.md";
  slug: "dapps/gaming/kaosland";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/moonfit.md": {
	id: "dapps/gaming/moonfit.md";
  slug: "dapps/gaming/moonfit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/moonsama.md": {
	id: "dapps/gaming/moonsama.md";
  slug: "dapps/gaming/moonsama";
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
"dapps/gaming/skybreach.md": {
	id: "dapps/gaming/skybreach.md";
  slug: "dapps/gaming/skybreach";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/gaming/the-damned-pirates-society.md": {
	id: "dapps/gaming/the-damned-pirates-society.md";
  slug: "dapps/gaming/the-damned-pirates-society";
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
"dapps/miscelaneous/archisinal.md": {
	id: "dapps/miscelaneous/archisinal.md";
  slug: "dapps/miscelaneous/archisinal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/bitgreen.md": {
	id: "dapps/miscelaneous/bitgreen.md";
  slug: "dapps/miscelaneous/bitgreen";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/citizend.md": {
	id: "dapps/miscelaneous/citizend.md";
  slug: "dapps/miscelaneous/citizend";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/dao-ipci.md": {
	id: "dapps/miscelaneous/dao-ipci.md";
  slug: "dapps/miscelaneous/dao-ipci";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/giant-protocol.md": {
	id: "dapps/miscelaneous/giant-protocol.md";
  slug: "dapps/miscelaneous/giant-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/gm-chain.md": {
	id: "dapps/miscelaneous/gm-chain.md";
  slug: "dapps/miscelaneous/gm-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/hashed-network.md": {
	id: "dapps/miscelaneous/hashed-network.md";
  slug: "dapps/miscelaneous/hashed-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/oak-network.md": {
	id: "dapps/miscelaneous/oak-network.md";
  slug: "dapps/miscelaneous/oak-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/regionx.md": {
	id: "dapps/miscelaneous/regionx.md";
  slug: "dapps/miscelaneous/regionx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/subspace-network.md": {
	id: "dapps/miscelaneous/subspace-network.md";
  slug: "dapps/miscelaneous/subspace-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/t3rn.md": {
	id: "dapps/miscelaneous/t3rn.md";
  slug: "dapps/miscelaneous/t3rn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/tea-project.md": {
	id: "dapps/miscelaneous/tea-project.md";
  slug: "dapps/miscelaneous/tea-project";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/miscelaneous/xx-network.md": {
	id: "dapps/miscelaneous/xx-network.md";
  slug: "dapps/miscelaneous/xx-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/artzero.md": {
	id: "dapps/nft-marketplaces/artzero.md";
  slug: "dapps/nft-marketplaces/artzero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/bluez.md": {
	id: "dapps/nft-marketplaces/bluez.md";
  slug: "dapps/nft-marketplaces/bluez";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/destore.md": {
	id: "dapps/nft-marketplaces/destore.md";
  slug: "dapps/nft-marketplaces/destore";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/dotins.md": {
	id: "dapps/nft-marketplaces/dotins.md";
  slug: "dapps/nft-marketplaces/dotins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/kodadot.md": {
	id: "dapps/nft-marketplaces/kodadot.md";
  slug: "dapps/nft-marketplaces/kodadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"dapps/nft-marketplaces/polkamaps.md": {
	id: "dapps/nft-marketplaces/polkamaps.md";
  slug: "dapps/nft-marketplaces/polkamaps";
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
"dapps/nft-marketplaces/raregems.md": {
	id: "dapps/nft-marketplaces/raregems.md";
  slug: "dapps/nft-marketplaces/raregems";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/nft-marketplaces/rmrk.md": {
	id: "dapps/nft-marketplaces/rmrk.md";
  slug: "dapps/nft-marketplaces/rmrk";
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
"dapps/smart-contracts/aleph-zero.md": {
	id: "dapps/smart-contracts/aleph-zero.md";
  slug: "dapps/smart-contracts/aleph-zero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/smart-contracts/astar-network.md": {
	id: "dapps/smart-contracts/astar-network.md";
  slug: "dapps/smart-contracts/astar-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/smart-contracts/energy-web-x.md": {
	id: "dapps/smart-contracts/energy-web-x.md";
  slug: "dapps/smart-contracts/energy-web-x";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/smart-contracts/manta-atlantic.md": {
	id: "dapps/smart-contracts/manta-atlantic.md";
  slug: "dapps/smart-contracts/manta-atlantic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/smart-contracts/moonbeam-network.md": {
	id: "dapps/smart-contracts/moonbeam-network.md";
  slug: "dapps/smart-contracts/moonbeam-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"dapps/social/jur-network.md": {
	id: "dapps/social/jur-network.md";
  slug: "dapps/social/jur-network";
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
"dapps/social/lastic.md": {
	id: "dapps/social/lastic.md";
  slug: "dapps/social/lastic";
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
"dapps/storage/crust-network.md": {
	id: "dapps/storage/crust-network.md";
  slug: "dapps/storage/crust-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/storage/datdot.md": {
	id: "dapps/storage/datdot.md";
  slug: "dapps/storage/datdot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/storage/midnight-network.md": {
	id: "dapps/storage/midnight-network.md";
  slug: "dapps/storage/midnight-network";
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
"hub/daos/example.md": {
	id: "hub/daos/example.md";
  slug: "hub/daos/example";
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
"hub/daos/kappa-sigma-mu.md": {
	id: "hub/daos/kappa-sigma-mu.md";
  slug: "hub/daos/kappa-sigma-mu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/polkadot-fellowship.md": {
	id: "hub/daos/polkadot-fellowship.md";
  slug: "hub/daos/polkadot-fellowship";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/polkadot-tooling-collective.md": {
	id: "hub/daos/polkadot-tooling-collective.md";
  slug: "hub/daos/polkadot-tooling-collective";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/daos/shokunin-network.md": {
	id: "hub/daos/shokunin-network.md";
  slug: "hub/daos/shokunin-network";
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
"hub/daos/wagmedia.md": {
	id: "hub/daos/wagmedia.md";
  slug: "hub/daos/wagmedia";
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
"hub/dev/4ire-labs.md": {
	id: "hub/dev/4ire-labs.md";
  slug: "hub/dev/4ire-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/amforc.md": {
	id: "hub/dev/amforc.md";
  slug: "hub/dev/amforc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/bld-nodes.md": {
	id: "hub/dev/bld-nodes.md";
  slug: "hub/dev/bld-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/blockdeep-labs.md": {
	id: "hub/dev/blockdeep-labs.md";
  slug: "hub/dev/blockdeep-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/blockshard.md": {
	id: "hub/dev/blockshard.md";
  slug: "hub/dev/blockshard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/bloclick-staking.md": {
	id: "hub/dev/bloclick-staking.md";
  slug: "hub/dev/bloclick-staking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/boosty-labs.md": {
	id: "hub/dev/boosty-labs.md";
  slug: "hub/dev/boosty-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/cardinal-cryptography.md": {
	id: "hub/dev/cardinal-cryptography.md";
  slug: "hub/dev/cardinal-cryptography";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/cctf-dao.md": {
	id: "hub/dev/cctf-dao.md";
  slug: "hub/dev/cctf-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/certhum.md": {
	id: "hub/dev/certhum.md";
  slug: "hub/dev/certhum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/chainsafe.md": {
	id: "hub/dev/chainsafe.md";
  slug: "hub/dev/chainsafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/coinfabrik.md": {
	id: "hub/dev/coinfabrik.md";
  slug: "hub/dev/coinfabrik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/coinstudio-validator.md": {
	id: "hub/dev/coinstudio-validator.md";
  slug: "hub/dev/coinstudio-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/crifferent.md": {
	id: "hub/dev/crifferent.md";
  slug: "hub/dev/crifferent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/dominodes.md": {
	id: "hub/dev/dominodes.md";
  slug: "hub/dev/dominodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/dotlake.md": {
	id: "hub/dev/dotlake.md";
  slug: "hub/dev/dotlake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/dragonstake.md": {
	id: "hub/dev/dragonstake.md";
  slug: "hub/dev/dragonstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/dwellir.md": {
	id: "hub/dev/dwellir.md";
  slug: "hub/dev/dwellir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/globalstake.md": {
	id: "hub/dev/globalstake.md";
  slug: "hub/dev/globalstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/helikon-labs.md": {
	id: "hub/dev/helikon-labs.md";
  slug: "hub/dev/helikon-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/iceberg-nodes.md": {
	id: "hub/dev/iceberg-nodes.md";
  slug: "hub/dev/iceberg-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/limechain.md": {
	id: "hub/dev/limechain.md";
  slug: "hub/dev/limechain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/lucky-friday-labs.md": {
	id: "hub/dev/lucky-friday-labs.md";
  slug: "hub/dev/lucky-friday-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/masternode24.md": {
	id: "hub/dev/masternode24.md";
  slug: "hub/dev/masternode24";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/moonsong-labs.md": {
	id: "hub/dev/moonsong-labs.md";
  slug: "hub/dev/moonsong-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/neurolanche-labs.md": {
	id: "hub/dev/neurolanche-labs.md";
  slug: "hub/dev/neurolanche-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/oak-security.md": {
	id: "hub/dev/oak-security.md";
  slug: "hub/dev/oak-security";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/onfinality.md": {
	id: "hub/dev/onfinality.md";
  slug: "hub/dev/onfinality";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/opslayer.md": {
	id: "hub/dev/opslayer.md";
  slug: "hub/dev/opslayer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/p2p-validator.md": {
	id: "hub/dev/p2p-validator.md";
  slug: "hub/dev/p2p-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/paranodes.md": {
	id: "hub/dev/paranodes.md";
  slug: "hub/dev/paranodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/parity-technologies.md": {
	id: "hub/dev/parity-technologies.md";
  slug: "hub/dev/parity-technologies";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/pathrock.md": {
	id: "hub/dev/pathrock.md";
  slug: "hub/dev/pathrock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/playproject.md": {
	id: "hub/dev/playproject.md";
  slug: "hub/dev/playproject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/polkachu.md": {
	id: "hub/dev/polkachu.md";
  slug: "hub/dev/polkachu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/polytope-labs.md": {
	id: "hub/dev/polytope-labs.md";
  slug: "hub/dev/polytope-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/project-liberty.md": {
	id: "hub/dev/project-liberty.md";
  slug: "hub/dev/project-liberty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/protofire.md": {
	id: "hub/dev/protofire.md";
  slug: "hub/dev/protofire";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/purestake.md": {
	id: "hub/dev/purestake.md";
  slug: "hub/dev/purestake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/r0gue.md": {
	id: "hub/dev/r0gue.md";
  slug: "hub/dev/r0gue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/ryabina.md": {
	id: "hub/dev/ryabina.md";
  slug: "hub/dev/ryabina";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/saxemberg.md": {
	id: "hub/dev/saxemberg.md";
  slug: "hub/dev/saxemberg";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/scio-labs.md": {
	id: "hub/dev/scio-labs.md";
  slug: "hub/dev/scio-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/senseinode.md": {
	id: "hub/dev/senseinode.md";
  slug: "hub/dev/senseinode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/stake-plus.md": {
	id: "hub/dev/stake-plus.md";
  slug: "hub/dev/stake-plus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/stakebaby.md": {
	id: "hub/dev/stakebaby.md";
  slug: "hub/dev/stakebaby";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/stakenode.md": {
	id: "hub/dev/stakenode.md";
  slug: "hub/dev/stakenode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/stakeworld.md": {
	id: "hub/dev/stakeworld.md";
  slug: "hub/dev/stakeworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/staking4all.md": {
	id: "hub/dev/staking4all.md";
  slug: "hub/dev/staking4all";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/stateless-money.md": {
	id: "hub/dev/stateless-money.md";
  slug: "hub/dev/stateless-money";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/telekom-mms.md": {
	id: "hub/dev/telekom-mms.md";
  slug: "hub/dev/telekom-mms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/turboflakes.md": {
	id: "hub/dev/turboflakes.md";
  slug: "hub/dev/turboflakes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/velocity-labs.md": {
	id: "hub/dev/velocity-labs.md";
  slug: "hub/dev/velocity-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/web3-foundation.md": {
	id: "hub/dev/web3-foundation.md";
  slug: "hub/dev/web3-foundation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/zeeve.md": {
	id: "hub/dev/zeeve.md";
  slug: "hub/dev/zeeve";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/dev/zondax.md": {
	id: "hub/dev/zondax.md";
  slug: "hub/dev/zondax";
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
"hub/initiatives/alpha-airdrop.md": {
	id: "hub/initiatives/alpha-airdrop.md";
  slug: "hub/initiatives/alpha-airdrop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/initiatives/index.mdx": {
	id: "hub/initiatives/index.mdx";
  slug: "hub/initiatives";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"hub/media/dotleap.md": {
	id: "hub/media/dotleap.md";
  slug: "hub/media/dotleap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/harbour-industrial-capital.md": {
	id: "hub/media/harbour-industrial-capital.md";
  slug: "hub/media/harbour-industrial-capital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/illusionist-group.md": {
	id: "hub/media/illusionist-group.md";
  slug: "hub/media/illusionist-group";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/kusamarian.md": {
	id: "hub/media/kusamarian.md";
  slug: "hub/media/kusamarian";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/og-tracker.md": {
	id: "hub/media/og-tracker.md";
  slug: "hub/media/og-tracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/oneblock.md": {
	id: "hub/media/oneblock.md";
  slug: "hub/media/oneblock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/opengov-watch.md": {
	id: "hub/media/opengov-watch.md";
  slug: "hub/media/opengov-watch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/openguild-labs.md": {
	id: "hub/media/openguild-labs.md";
  slug: "hub/media/openguild-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/parachains-info.md": {
	id: "hub/media/parachains-info.md";
  slug: "hub/media/parachains-info";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/poladot-marketing-bounty.md": {
	id: "hub/media/poladot-marketing-bounty.md";
  slug: "hub/media/poladot-marketing-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-ambassadors-program.md": {
	id: "hub/media/polkadot-ambassadors-program.md";
  slug: "hub/media/polkadot-ambassadors-program";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-anti-scam-team.md": {
	id: "hub/media/polkadot-anti-scam-team.md";
  slug: "hub/media/polkadot-anti-scam-team";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-blockchain-academy.md": {
	id: "hub/media/polkadot-blockchain-academy.md";
  slug: "hub/media/polkadot-blockchain-academy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-brasil.md": {
	id: "hub/media/polkadot-brasil.md";
  slug: "hub/media/polkadot-brasil";
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
"hub/media/polkadot-events-bounty.md": {
	id: "hub/media/polkadot-events-bounty.md";
  slug: "hub/media/polkadot-events-bounty";
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
"hub/media/polkadot-mexico.md": {
	id: "hub/media/polkadot-mexico.md";
  slug: "hub/media/polkadot-mexico";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-philosophy.md": {
	id: "hub/media/polkadot-philosophy.md";
  slug: "hub/media/polkadot-philosophy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/polkadot-prodigy.md": {
	id: "hub/media/polkadot-prodigy.md";
  slug: "hub/media/polkadot-prodigy";
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
"hub/media/polkaport-east.md": {
	id: "hub/media/polkaport-east.md";
  slug: "hub/media/polkaport-east";
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
"hub/media/scytale-digital.md": {
	id: "hub/media/scytale-digital.md";
  slug: "hub/media/scytale-digital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/subwork.md": {
	id: "hub/media/subwork.md";
  slug: "hub/media/subwork";
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
"hub/media/web3-educhain.md": {
	id: "hub/media/web3-educhain.md";
  slug: "hub/media/web3-educhain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hub/media/wizard-amigos.md": {
	id: "hub/media/wizard-amigos.md";
  slug: "hub/media/wizard-amigos";
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
"tools/block-explorers/din-web3go.md": {
	id: "tools/block-explorers/din-web3go.md";
  slug: "tools/block-explorers/din-web3go";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/dotreasury.md": {
	id: "tools/block-explorers/dotreasury.md";
  slug: "tools/block-explorers/dotreasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/fidi-web3-analytics.md": {
	id: "tools/block-explorers/fidi-web3-analytics.md";
  slug: "tools/block-explorers/fidi-web3-analytics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/polkadot-staking-dashboard.md": {
	id: "tools/block-explorers/polkadot-staking-dashboard.md";
  slug: "tools/block-explorers/polkadot-staking-dashboard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/polkadot-telemetry.md": {
	id: "tools/block-explorers/polkadot-telemetry.md";
  slug: "tools/block-explorers/polkadot-telemetry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/polkaholic.md": {
	id: "tools/block-explorers/polkaholic.md";
  slug: "tools/block-explorers/polkaholic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/polkassembly.md": {
	id: "tools/block-explorers/polkassembly.md";
  slug: "tools/block-explorers/polkassembly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/polkastats.md": {
	id: "tools/block-explorers/polkastats.md";
  slug: "tools/block-explorers/polkastats";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/polkawatch.md": {
	id: "tools/block-explorers/polkawatch.md";
  slug: "tools/block-explorers/polkawatch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"tools/block-explorers/subsquare.md": {
	id: "tools/block-explorers/subsquare.md";
  slug: "tools/block-explorers/subsquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/townhall.md": {
	id: "tools/block-explorers/townhall.md";
  slug: "tools/block-explorers/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/block-explorers/web3alert.md": {
	id: "tools/block-explorers/web3alert.md";
  slug: "tools/block-explorers/web3alert";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dao-tools/mimir.md": {
	id: "tools/dao-tools/mimir.md";
  slug: "tools/dao-tools/mimir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dao-tools/multix.md": {
	id: "tools/dao-tools/multix.md";
  slug: "tools/dao-tools/multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dao-tools/polkasafe.md": {
	id: "tools/dao-tools/polkasafe.md";
  slug: "tools/dao-tools/polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dao-tools/xsigners.md": {
	id: "tools/dao-tools/xsigners.md";
  slug: "tools/dao-tools/xsigners";
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
"tools/development/xode-network.md": {
	id: "tools/development/xode-network.md";
  slug: "tools/development/xode-network";
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
"tools/wallets/enkrypt-wallet.md": {
	id: "tools/wallets/enkrypt-wallet.md";
  slug: "tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/fearless-wallet.md": {
	id: "tools/wallets/fearless-wallet.md";
  slug: "tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/index.mdx": {
	id: "tools/wallets/index.mdx";
  slug: "tools/wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/wallets/kampela-signer.md": {
	id: "tools/wallets/kampela-signer.md";
  slug: "tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/nova-wallet.md": {
	id: "tools/wallets/nova-wallet.md";
  slug: "tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/polkadot-vault.md": {
	id: "tools/wallets/polkadot-vault.md";
  slug: "tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/polkagate.md": {
	id: "tools/wallets/polkagate.md";
  slug: "tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/polkawallet.md": {
	id: "tools/wallets/polkawallet.md";
  slug: "tools/wallets/polkawallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/sporran-wallet.md": {
	id: "tools/wallets/sporran-wallet.md";
  slug: "tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/subwallet.md": {
	id: "tools/wallets/subwallet.md";
  slug: "tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/wallets/talisman-wallet.md": {
	id: "tools/wallets/talisman-wallet.md";
  slug: "tools/wallets/talisman-wallet";
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
