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
"club/archive/department-of-decentralization.md": {
	id: "club/archive/department-of-decentralization.md";
  slug: "club/archive/department-of-decentralization";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/archive/playproject.md": {
	id: "club/archive/playproject.md";
  slug: "club/archive/playproject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/archive/polkadot-brasil.md": {
	id: "club/archive/polkadot-brasil.md";
  slug: "club/archive/polkadot-brasil";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/archive/polkadot-philosophy.md": {
	id: "club/archive/polkadot-philosophy.md";
  slug: "club/archive/polkadot-philosophy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/archive/wizard-amigos.mdx": {
	id: "club/archive/wizard-amigos.mdx";
  slug: "club/archive/wizard-amigos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/antiscam.mdx": {
	id: "club/bounties/antiscam.mdx";
  slug: "club/bounties/antiscam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/bridges-bug-bounty.mdx": {
	id: "club/bounties/bridges-bug-bounty.mdx";
  slug: "club/bounties/bridges-bug-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/defi-bounty.mdx": {
	id: "club/bounties/defi-bounty.mdx";
  slug: "club/bounties/defi-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/dotplay.mdx": {
	id: "club/bounties/dotplay.mdx";
  slug: "club/bounties/dotplay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/events.mdx": {
	id: "club/bounties/events.mdx";
  slug: "club/bounties/events";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/ibp.mdx": {
	id: "club/bounties/ibp.mdx";
  slug: "club/bounties/ibp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/index.mdx": {
	id: "club/bounties/index.mdx";
  slug: "club/bounties";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/inkubator.md": {
	id: "club/bounties/inkubator.md";
  slug: "club/bounties/inkubator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/legal-bounty.mdx": {
	id: "club/bounties/legal-bounty.mdx";
  slug: "club/bounties/legal-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/marketing.mdx": {
	id: "club/bounties/marketing.mdx";
  slug: "club/bounties/marketing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/meetups.mdx": {
	id: "club/bounties/meetups.mdx";
  slug: "club/bounties/meetups";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/moderation.mdx": {
	id: "club/bounties/moderation.mdx";
  slug: "club/bounties/moderation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/bounties/pal.md": {
	id: "club/bounties/pal.md";
  slug: "club/bounties/pal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/pioneers-prize.md": {
	id: "club/bounties/pioneers-prize.md";
  slug: "club/bounties/pioneers-prize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/technical-support.md": {
	id: "club/bounties/technical-support.md";
  slug: "club/bounties/technical-support";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/ux-bounty.mdx": {
	id: "club/bounties/ux-bounty.mdx";
  slug: "club/bounties/ux-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/collectives/index.mdx": {
	id: "club/collectives/index.mdx";
  slug: "club/collectives";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/collectives/polkadot-ambassadors-collective.mdx": {
	id: "club/collectives/polkadot-ambassadors-collective.mdx";
  slug: "club/collectives/polkadot-ambassadors-collective";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/collectives/polkadot-fellowship.mdx": {
	id: "club/collectives/polkadot-fellowship.mdx";
  slug: "club/collectives/polkadot-fellowship";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/collectives/polkadot-tooling-collective.md": {
	id: "club/collectives/polkadot-tooling-collective.md";
  slug: "club/collectives/polkadot-tooling-collective";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/apexchimpz.mdx": {
	id: "club/daos/apexchimpz.mdx";
  slug: "club/daos/apexchimpz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/cctf-dao.mdx": {
	id: "club/daos/cctf-dao.mdx";
  slug: "club/daos/cctf-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/chaosdao.mdx": {
	id: "club/daos/chaosdao.mdx";
  slug: "club/daos/chaosdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/dot-validator-alliance.md": {
	id: "club/daos/dot-validator-alliance.md";
  slug: "club/daos/dot-validator-alliance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/index.mdx": {
	id: "club/daos/index.mdx";
  slug: "club/daos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/kappa-sigma-mu.mdx": {
	id: "club/daos/kappa-sigma-mu.mdx";
  slug: "club/daos/kappa-sigma-mu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/kusdao.mdx": {
	id: "club/daos/kusdao.mdx";
  slug: "club/daos/kusdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/lenexus.mdx": {
	id: "club/daos/lenexus.mdx";
  slug: "club/daos/lenexus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/lucky-friday.mdx": {
	id: "club/daos/lucky-friday.mdx";
  slug: "club/daos/lucky-friday";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/permanencedao.mdx": {
	id: "club/daos/permanencedao.mdx";
  slug: "club/daos/permanencedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/polkadot-africa.mdx": {
	id: "club/daos/polkadot-africa.mdx";
  slug: "club/daos/polkadot-africa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/polkadot-hungary.mdx": {
	id: "club/daos/polkadot-hungary.mdx";
  slug: "club/daos/polkadot-hungary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/polkadot-mexico.mdx": {
	id: "club/daos/polkadot-mexico.mdx";
  slug: "club/daos/polkadot-mexico";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/polkadot-poland.mdx": {
	id: "club/daos/polkadot-poland.mdx";
  slug: "club/daos/polkadot-poland";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/reeeeeeeeeedao.mdx": {
	id: "club/daos/reeeeeeeeeedao.mdx";
  slug: "club/daos/reeeeeeeeeedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/saxemberg.md": {
	id: "club/daos/saxemberg.md";
  slug: "club/daos/saxemberg";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/teddydao.mdx": {
	id: "club/daos/teddydao.mdx";
  slug: "club/daos/teddydao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/unitedbloc.md": {
	id: "club/daos/unitedbloc.md";
  slug: "club/daos/unitedbloc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/youdledao.mdx": {
	id: "club/daos/youdledao.mdx";
  slug: "club/daos/youdledao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/index.mdx": {
	id: "club/index.mdx";
  slug: "club";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/a-glass-with-gav-podcast.mdx": {
	id: "club/initiatives/a-glass-with-gav-podcast.mdx";
  slug: "club/initiatives/a-glass-with-gav-podcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/accelerate-polkadot.mdx": {
	id: "club/initiatives/accelerate-polkadot.mdx";
  slug: "club/initiatives/accelerate-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/alpha-airdrop.mdx": {
	id: "club/initiatives/alpha-airdrop.mdx";
  slug: "club/initiatives/alpha-airdrop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/dotcodeschool.mdx": {
	id: "club/initiatives/dotcodeschool.mdx";
  slug: "club/initiatives/dotcodeschool";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/dotlake.mdx": {
	id: "club/initiatives/dotlake.mdx";
  slug: "club/initiatives/dotlake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/dotleap.mdx": {
	id: "club/initiatives/dotleap.mdx";
  slug: "club/initiatives/dotleap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/easya.mdx": {
	id: "club/initiatives/easya.mdx";
  slug: "club/initiatives/easya";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/index.mdx": {
	id: "club/initiatives/index.mdx";
  slug: "club/initiatives";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/learn-with-bruno.mdx": {
	id: "club/initiatives/learn-with-bruno.mdx";
  slug: "club/initiatives/learn-with-bruno";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/oneblock.mdx": {
	id: "club/initiatives/oneblock.mdx";
  slug: "club/initiatives/oneblock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/opengov-watch.mdx": {
	id: "club/initiatives/opengov-watch.mdx";
  slug: "club/initiatives/opengov-watch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/openguild-labs.mdx": {
	id: "club/initiatives/openguild-labs.mdx";
  slug: "club/initiatives/openguild-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/polkadot-blockchain-academy.mdx": {
	id: "club/initiatives/polkadot-blockchain-academy.mdx";
  slug: "club/initiatives/polkadot-blockchain-academy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/polkadot-education-app.mdx": {
	id: "club/initiatives/polkadot-education-app.mdx";
  slug: "club/initiatives/polkadot-education-app";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/polkadot-prodigy.mdx": {
	id: "club/initiatives/polkadot-prodigy.mdx";
  slug: "club/initiatives/polkadot-prodigy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/subwork.md": {
	id: "club/initiatives/subwork.md";
  slug: "club/initiatives/subwork";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/wagmedia.mdx": {
	id: "club/initiatives/wagmedia.mdx";
  slug: "club/initiatives/wagmedia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/web3-educhain.md": {
	id: "club/initiatives/web3-educhain.md";
  slug: "club/initiatives/web3-educhain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/memecoins/beefy.mdx": {
	id: "club/memecoins/beefy.mdx";
  slug: "club/memecoins/beefy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/memecoins/gavunwud.mdx": {
	id: "club/memecoins/gavunwud.mdx";
  slug: "club/memecoins/gavunwud";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/memecoins/index.mdx": {
	id: "club/memecoins/index.mdx";
  slug: "club/memecoins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/memecoins/pink.mdx": {
	id: "club/memecoins/pink.mdx";
  slug: "club/memecoins/pink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/memecoins/stink.mdx": {
	id: "club/memecoins/stink.mdx";
  slug: "club/memecoins/stink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/harbour-industrial-capital.mdx": {
	id: "club/orgs/bd/harbour-industrial-capital.mdx";
  slug: "club/orgs/bd/harbour-industrial-capital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/illusionist-group.md": {
	id: "club/orgs/bd/illusionist-group.md";
  slug: "club/orgs/bd/illusionist-group";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/bd/just.mdx": {
	id: "club/orgs/bd/just.mdx";
  slug: "club/orgs/bd/just";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/magenta-labs.mdx": {
	id: "club/orgs/bd/magenta-labs.mdx";
  slug: "club/orgs/bd/magenta-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/nftmozaic.mdx": {
	id: "club/orgs/bd/nftmozaic.mdx";
  slug: "club/orgs/bd/nftmozaic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/papermoon.mdx": {
	id: "club/orgs/bd/papermoon.mdx";
  slug: "club/orgs/bd/papermoon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/polkabiz.mdx": {
	id: "club/orgs/bd/polkabiz.mdx";
  slug: "club/orgs/bd/polkabiz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/polkadot-community-foundation.mdx": {
	id: "club/orgs/bd/polkadot-community-foundation.mdx";
  slug: "club/orgs/bd/polkadot-community-foundation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/polkaport-east.mdx": {
	id: "club/orgs/bd/polkaport-east.mdx";
  slug: "club/orgs/bd/polkaport-east";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/scytale-digital.mdx": {
	id: "club/orgs/bd/scytale-digital.mdx";
  slug: "club/orgs/bd/scytale-digital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/transistor.mdx": {
	id: "club/orgs/bd/transistor.mdx";
  slug: "club/orgs/bd/transistor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/bd/velocity-labs.mdx": {
	id: "club/orgs/bd/velocity-labs.mdx";
  slug: "club/orgs/bd/velocity-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/index.mdx": {
	id: "club/orgs/index.mdx";
  slug: "club/orgs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/amforc.mdx": {
	id: "club/orgs/infrastructure/amforc.mdx";
  slug: "club/orgs/infrastructure/amforc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/bld-nodes.md": {
	id: "club/orgs/infrastructure/bld-nodes.md";
  slug: "club/orgs/infrastructure/bld-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/blockshard.md": {
	id: "club/orgs/infrastructure/blockshard.md";
  slug: "club/orgs/infrastructure/blockshard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/bloclick-staking.md": {
	id: "club/orgs/infrastructure/bloclick-staking.md";
  slug: "club/orgs/infrastructure/bloclick-staking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/certhum.md": {
	id: "club/orgs/infrastructure/certhum.md";
  slug: "club/orgs/infrastructure/certhum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/coinstudio-validator.md": {
	id: "club/orgs/infrastructure/coinstudio-validator.md";
  slug: "club/orgs/infrastructure/coinstudio-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/crifferent.md": {
	id: "club/orgs/infrastructure/crifferent.md";
  slug: "club/orgs/infrastructure/crifferent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/dominodes.md": {
	id: "club/orgs/infrastructure/dominodes.md";
  slug: "club/orgs/infrastructure/dominodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/dragonstake.mdx": {
	id: "club/orgs/infrastructure/dragonstake.mdx";
  slug: "club/orgs/infrastructure/dragonstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/dwellir.mdx": {
	id: "club/orgs/infrastructure/dwellir.mdx";
  slug: "club/orgs/infrastructure/dwellir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/ech0-laboratory.mdx": {
	id: "club/orgs/infrastructure/ech0-laboratory.mdx";
  slug: "club/orgs/infrastructure/ech0-laboratory";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/globalstake.mdx": {
	id: "club/orgs/infrastructure/globalstake.mdx";
  slug: "club/orgs/infrastructure/globalstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/gtstaking.md": {
	id: "club/orgs/infrastructure/gtstaking.md";
  slug: "club/orgs/infrastructure/gtstaking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/helikon-labs.mdx": {
	id: "club/orgs/infrastructure/helikon-labs.mdx";
  slug: "club/orgs/infrastructure/helikon-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/iceberg-nodes.md": {
	id: "club/orgs/infrastructure/iceberg-nodes.md";
  slug: "club/orgs/infrastructure/iceberg-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/masternode24.md": {
	id: "club/orgs/infrastructure/masternode24.md";
  slug: "club/orgs/infrastructure/masternode24";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/math-crypto.mdx": {
	id: "club/orgs/infrastructure/math-crypto.mdx";
  slug: "club/orgs/infrastructure/math-crypto";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/metaspan.mdx": {
	id: "club/orgs/infrastructure/metaspan.mdx";
  slug: "club/orgs/infrastructure/metaspan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/onfinality.mdx": {
	id: "club/orgs/infrastructure/onfinality.mdx";
  slug: "club/orgs/infrastructure/onfinality";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/opslayer.md": {
	id: "club/orgs/infrastructure/opslayer.md";
  slug: "club/orgs/infrastructure/opslayer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/p2p-validator.mdx": {
	id: "club/orgs/infrastructure/p2p-validator.mdx";
  slug: "club/orgs/infrastructure/p2p-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/paranodes.mdx": {
	id: "club/orgs/infrastructure/paranodes.mdx";
  slug: "club/orgs/infrastructure/paranodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/pathrock.md": {
	id: "club/orgs/infrastructure/pathrock.md";
  slug: "club/orgs/infrastructure/pathrock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/polkachu.md": {
	id: "club/orgs/infrastructure/polkachu.md";
  slug: "club/orgs/infrastructure/polkachu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/rotko-networks.mdx": {
	id: "club/orgs/infrastructure/rotko-networks.mdx";
  slug: "club/orgs/infrastructure/rotko-networks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/ryabina.md": {
	id: "club/orgs/infrastructure/ryabina.md";
  slug: "club/orgs/infrastructure/ryabina";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/senseinode.mdx": {
	id: "club/orgs/infrastructure/senseinode.mdx";
  slug: "club/orgs/infrastructure/senseinode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/stake-plus.mdx": {
	id: "club/orgs/infrastructure/stake-plus.mdx";
  slug: "club/orgs/infrastructure/stake-plus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/stakebaby.mdx": {
	id: "club/orgs/infrastructure/stakebaby.mdx";
  slug: "club/orgs/infrastructure/stakebaby";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/stakenode.md": {
	id: "club/orgs/infrastructure/stakenode.md";
  slug: "club/orgs/infrastructure/stakenode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/stakeworld.md": {
	id: "club/orgs/infrastructure/stakeworld.md";
  slug: "club/orgs/infrastructure/stakeworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/staking4all.mdx": {
	id: "club/orgs/infrastructure/staking4all.mdx";
  slug: "club/orgs/infrastructure/staking4all";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/stateless-money.mdx": {
	id: "club/orgs/infrastructure/stateless-money.mdx";
  slug: "club/orgs/infrastructure/stateless-money";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/infrastructure/telekom-mms.md": {
	id: "club/orgs/infrastructure/telekom-mms.md";
  slug: "club/orgs/infrastructure/telekom-mms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/infrastructure/turboflakes.md": {
	id: "club/orgs/infrastructure/turboflakes.md";
  slug: "club/orgs/infrastructure/turboflakes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/marcoms/astar-bulletin.md": {
	id: "club/orgs/marcoms/astar-bulletin.md";
  slug: "club/orgs/marcoms/astar-bulletin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/marcoms/distractive.mdx": {
	id: "club/orgs/marcoms/distractive.mdx";
  slug: "club/orgs/marcoms/distractive";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/dotcast.mdx": {
	id: "club/orgs/marcoms/dotcast.mdx";
  slug: "club/orgs/marcoms/dotcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/kusamarian.mdx": {
	id: "club/orgs/marcoms/kusamarian.mdx";
  slug: "club/orgs/marcoms/kusamarian";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/parachains-info.mdx": {
	id: "club/orgs/marcoms/parachains-info.mdx";
  slug: "club/orgs/marcoms/parachains-info";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/polkadot-en-espanol.md": {
	id: "club/orgs/marcoms/polkadot-en-espanol.md";
  slug: "club/orgs/marcoms/polkadot-en-espanol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/marcoms/polkadot-insider.mdx": {
	id: "club/orgs/marcoms/polkadot-insider.mdx";
  slug: "club/orgs/marcoms/polkadot-insider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/polkadot-now.mdx": {
	id: "club/orgs/marcoms/polkadot-now.mdx";
  slug: "club/orgs/marcoms/polkadot-now";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/polkadotters.mdx": {
	id: "club/orgs/marcoms/polkadotters.mdx";
  slug: "club/orgs/marcoms/polkadotters";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/polkafrance.md": {
	id: "club/orgs/marcoms/polkafrance.md";
  slug: "club/orgs/marcoms/polkafrance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/marcoms/polkaworld.mdx": {
	id: "club/orgs/marcoms/polkaworld.mdx";
  slug: "club/orgs/marcoms/polkaworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/promoteam.mdx": {
	id: "club/orgs/marcoms/promoteam.mdx";
  slug: "club/orgs/marcoms/promoteam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/the-dots.mdx": {
	id: "club/orgs/marcoms/the-dots.mdx";
  slug: "club/orgs/marcoms/the-dots";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/vds-academy.mdx": {
	id: "club/orgs/marcoms/vds-academy.mdx";
  slug: "club/orgs/marcoms/vds-academy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/marcoms/webzero.mdx": {
	id: "club/orgs/marcoms/webzero.mdx";
  slug: "club/orgs/marcoms/webzero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/4ire-labs.md": {
	id: "club/orgs/software/4ire-labs.md";
  slug: "club/orgs/software/4ire-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/software/blockdeep-labs.mdx": {
	id: "club/orgs/software/blockdeep-labs.mdx";
  slug: "club/orgs/software/blockdeep-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/boosty-labs.md": {
	id: "club/orgs/software/boosty-labs.md";
  slug: "club/orgs/software/boosty-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/software/cardinal-cryptography.md": {
	id: "club/orgs/software/cardinal-cryptography.md";
  slug: "club/orgs/software/cardinal-cryptography";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/software/chainsafe.mdx": {
	id: "club/orgs/software/chainsafe.mdx";
  slug: "club/orgs/software/chainsafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/coinfabrik.mdx": {
	id: "club/orgs/software/coinfabrik.mdx";
  slug: "club/orgs/software/coinfabrik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/limechain.mdx": {
	id: "club/orgs/software/limechain.mdx";
  slug: "club/orgs/software/limechain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/moonsong-labs.mdx": {
	id: "club/orgs/software/moonsong-labs.mdx";
  slug: "club/orgs/software/moonsong-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/oak-security.mdx": {
	id: "club/orgs/software/oak-security.mdx";
  slug: "club/orgs/software/oak-security";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/parity-technologies.mdx": {
	id: "club/orgs/software/parity-technologies.mdx";
  slug: "club/orgs/software/parity-technologies";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/polytope-labs.mdx": {
	id: "club/orgs/software/polytope-labs.mdx";
  slug: "club/orgs/software/polytope-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/probelab.mdx": {
	id: "club/orgs/software/probelab.mdx";
  slug: "club/orgs/software/probelab";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/project-liberty.mdx": {
	id: "club/orgs/software/project-liberty.mdx";
  slug: "club/orgs/software/project-liberty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/protofire.mdx": {
	id: "club/orgs/software/protofire.mdx";
  slug: "club/orgs/software/protofire";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/purestake.mdx": {
	id: "club/orgs/software/purestake.mdx";
  slug: "club/orgs/software/purestake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/r0gue.mdx": {
	id: "club/orgs/software/r0gue.mdx";
  slug: "club/orgs/software/r0gue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/sao-mai-games.md": {
	id: "club/orgs/software/sao-mai-games.md";
  slug: "club/orgs/software/sao-mai-games";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/software/scio-labs.mdx": {
	id: "club/orgs/software/scio-labs.mdx";
  slug: "club/orgs/software/scio-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/web3-foundation.mdx": {
	id: "club/orgs/software/web3-foundation.mdx";
  slug: "club/orgs/software/web3-foundation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/zeeve.mdx": {
	id: "club/orgs/software/zeeve.mdx";
  slug: "club/orgs/software/zeeve";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/software/zondax.mdx": {
	id: "club/orgs/software/zondax.mdx";
  slug: "club/orgs/software/zondax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/people/gavin-wood.md": {
	id: "club/people/gavin-wood.md";
  slug: "club/people/gavin-wood";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/resources/awesome-polkadot.mdx": {
	id: "club/resources/awesome-polkadot.mdx";
  slug: "club/resources/awesome-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/resources/handbook.mdx": {
	id: "club/resources/handbook.mdx";
  slug: "club/resources/handbook";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/resources/index.mdx": {
	id: "club/resources/index.mdx";
  slug: "club/resources";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"dapps/archive/cyborg-network.mdx": {
	id: "dapps/archive/cyborg-network.mdx";
  slug: "dapps/archive/cyborg-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/archive/dao-ipci.md": {
	id: "dapps/archive/dao-ipci.md";
  slug: "dapps/archive/dao-ipci";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"dapps/archive/datdot.md": {
	id: "dapps/archive/datdot.md";
  slug: "dapps/archive/datdot";
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
"dapps/bridges/index.mdx": {
	id: "dapps/bridges/index.mdx";
  slug: "dapps/bridges";
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
"dapps/defi/magic-ramp.mdx": {
	id: "dapps/defi/magic-ramp.mdx";
  slug: "dapps/defi/magic-ramp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"dapps/defi/zenlink.mdx": {
	id: "dapps/defi/zenlink.mdx";
  slug: "dapps/defi/zenlink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/depin/acurast.mdx": {
	id: "dapps/depin/acurast.mdx";
  slug: "dapps/depin/acurast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/depin/giant-protocol.mdx": {
	id: "dapps/depin/giant-protocol.mdx";
  slug: "dapps/depin/giant-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/depin/index.mdx": {
	id: "dapps/depin/index.mdx";
  slug: "dapps/depin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/depin/peaq-network.mdx": {
	id: "dapps/depin/peaq-network.mdx";
  slug: "dapps/depin/peaq-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/depin/robonomics.mdx": {
	id: "dapps/depin/robonomics.mdx";
  slug: "dapps/depin/robonomics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/gaming/age-of-chronos.mdx": {
	id: "dapps/gaming/age-of-chronos.mdx";
  slug: "dapps/gaming/age-of-chronos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/gaming/ajuna-network.mdx": {
	id: "dapps/gaming/ajuna-network.mdx";
  slug: "dapps/gaming/ajuna-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"dapps/gaming/evrloot.mdx": {
	id: "dapps/gaming/evrloot.mdx";
  slug: "dapps/gaming/evrloot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/gaming/exiled-racers.mdx": {
	id: "dapps/gaming/exiled-racers.mdx";
  slug: "dapps/gaming/exiled-racers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/gaming/gamedao.mdx": {
	id: "dapps/gaming/gamedao.mdx";
  slug: "dapps/gaming/gamedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/gaming/glmr-apes-the-great-escape.mdx": {
	id: "dapps/gaming/glmr-apes-the-great-escape.mdx";
  slug: "dapps/gaming/glmr-apes-the-great-escape";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/gaming/heal3.mdx": {
	id: "dapps/gaming/heal3.mdx";
  slug: "dapps/gaming/heal3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"dapps/gaming/mythos-chain.mdx": {
	id: "dapps/gaming/mythos-chain.mdx";
  slug: "dapps/gaming/mythos-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"dapps/miscellaneous/agrotoken.mdx": {
	id: "dapps/miscellaneous/agrotoken.mdx";
  slug: "dapps/miscellaneous/agrotoken";
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
"dapps/miscellaneous/ideal-network.mdx": {
	id: "dapps/miscellaneous/ideal-network.mdx";
  slug: "dapps/miscellaneous/ideal-network";
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
"dapps/miscellaneous/true-network.mdx": {
	id: "dapps/miscellaneous/true-network.mdx";
  slug: "dapps/miscellaneous/true-network";
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
"dapps/nft-marketplaces/dotmemo.mdx": {
	id: "dapps/nft-marketplaces/dotmemo.mdx";
  slug: "dapps/nft-marketplaces/dotmemo";
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
"dapps/nft-marketplaces/moonbeans.mdx": {
	id: "dapps/nft-marketplaces/moonbeans.mdx";
  slug: "dapps/nft-marketplaces/moonbeans";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"dapps/nft-marketplaces/singular-nft-marketplace.mdx": {
	id: "dapps/nft-marketplaces/singular-nft-marketplace.mdx";
  slug: "dapps/nft-marketplaces/singular-nft-marketplace";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"dapps/nft-marketplaces/unique-network.mdx": {
	id: "dapps/nft-marketplaces/unique-network.mdx";
  slug: "dapps/nft-marketplaces/unique-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/rwa/centrifuge.mdx": {
	id: "dapps/rwa/centrifuge.mdx";
  slug: "dapps/rwa/centrifuge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/rwa/curio.mdx": {
	id: "dapps/rwa/curio.mdx";
  slug: "dapps/rwa/curio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/rwa/g6networks.mdx": {
	id: "dapps/rwa/g6networks.mdx";
  slug: "dapps/rwa/g6networks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/rwa/index.mdx": {
	id: "dapps/rwa/index.mdx";
  slug: "dapps/rwa";
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
"dapps/social/dsnp-protocol.mdx": {
	id: "dapps/social/dsnp-protocol.mdx";
  slug: "dapps/social/dsnp-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/encointer.mdx": {
	id: "dapps/social/encointer.mdx";
  slug: "dapps/social/encointer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/frequency.mdx": {
	id: "dapps/social/frequency.mdx";
  slug: "dapps/social/frequency";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/imbue-network.mdx": {
	id: "dapps/social/imbue-network.mdx";
  slug: "dapps/social/imbue-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/index.mdx": {
	id: "dapps/social/index.mdx";
  slug: "dapps/social";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/invarch-network.mdx": {
	id: "dapps/social/invarch-network.mdx";
  slug: "dapps/social/invarch-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/joystream.mdx": {
	id: "dapps/social/joystream.mdx";
  slug: "dapps/social/joystream";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/kilt-protocol.mdx": {
	id: "dapps/social/kilt-protocol.mdx";
  slug: "dapps/social/kilt-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/litentry.mdx": {
	id: "dapps/social/litentry.mdx";
  slug: "dapps/social/litentry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/logion-network.mdx": {
	id: "dapps/social/logion-network.mdx";
  slug: "dapps/social/logion-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/mandala-chain.mdx": {
	id: "dapps/social/mandala-chain.mdx";
  slug: "dapps/social/mandala-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/polkaidentity.mdx": {
	id: "dapps/social/polkaidentity.mdx";
  slug: "dapps/social/polkaidentity";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/subsocial.mdx": {
	id: "dapps/social/subsocial.mdx";
  slug: "dapps/social/subsocial";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/social/virto-network.mdx": {
	id: "dapps/social/virto-network.mdx";
  slug: "dapps/social/virto-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/storage/avail-project.mdx": {
	id: "dapps/storage/avail-project.mdx";
  slug: "dapps/storage/avail-project";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/storage/cess.mdx": {
	id: "dapps/storage/cess.mdx";
  slug: "dapps/storage/cess";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/storage/crust-network.mdx": {
	id: "dapps/storage/crust-network.mdx";
  slug: "dapps/storage/crust-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/storage/index.mdx": {
	id: "dapps/storage/index.mdx";
  slug: "dapps/storage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"dapps/storage/midnight-network.mdx": {
	id: "dapps/storage/midnight-network.mdx";
  slug: "dapps/storage/midnight-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/ai/bittensor.mdx": {
	id: "de/dapps/ai/bittensor.mdx";
  slug: "de/dapps/ai/bittensor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/ai/index.mdx": {
	id: "de/dapps/ai/index.mdx";
  slug: "de/dapps/ai";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/ai/neurolanche.mdx": {
	id: "de/dapps/ai/neurolanche.mdx";
  slug: "de/dapps/ai/neurolanche";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/ai/neuroweb.mdx": {
	id: "de/dapps/ai/neuroweb.mdx";
  slug: "de/dapps/ai/neuroweb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/ai/phala-network.mdx": {
	id: "de/dapps/ai/phala-network.mdx";
  slug: "de/dapps/ai/phala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/bridges/axelar.md": {
	id: "de/dapps/bridges/axelar.md";
  slug: "de/dapps/bridges/axelar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/dapps/bridges/chainflip.md": {
	id: "de/dapps/bridges/chainflip.md";
  slug: "de/dapps/bridges/chainflip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/dapps/bridges/hyperbridge.mdx": {
	id: "de/dapps/bridges/hyperbridge.mdx";
  slug: "de/dapps/bridges/hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/bridges/index.mdx": {
	id: "de/dapps/bridges/index.mdx";
  slug: "de/dapps/bridges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/bridges/snowbridge.mdx": {
	id: "de/dapps/bridges/snowbridge.mdx";
  slug: "de/dapps/bridges/snowbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/bridges/wormhole.md": {
	id: "de/dapps/bridges/wormhole.md";
  slug: "de/dapps/bridges/wormhole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/dapps/depin/acurast.mdx": {
	id: "de/dapps/depin/acurast.mdx";
  slug: "de/dapps/depin/acurast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/depin/giant-protocol.mdx": {
	id: "de/dapps/depin/giant-protocol.mdx";
  slug: "de/dapps/depin/giant-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/depin/index.mdx": {
	id: "de/dapps/depin/index.mdx";
  slug: "de/dapps/depin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/depin/peaq-network.mdx": {
	id: "de/dapps/depin/peaq-network.mdx";
  slug: "de/dapps/depin/peaq-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/depin/robonomics.mdx": {
	id: "de/dapps/depin/robonomics.mdx";
  slug: "de/dapps/depin/robonomics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/dapps/index.mdx": {
	id: "de/dapps/index.mdx";
  slug: "de/dapps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/block-explorers/3xpl.md": {
	id: "de/tools/block-explorers/3xpl.md";
  slug: "de/tools/block-explorers/3xpl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/tools/block-explorers/blockchair.md": {
	id: "de/tools/block-explorers/blockchair.md";
  slug: "de/tools/block-explorers/blockchair";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/tools/block-explorers/chainspect.md": {
	id: "de/tools/block-explorers/chainspect.md";
  slug: "de/tools/block-explorers/chainspect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/tools/block-explorers/index.mdx": {
	id: "de/tools/block-explorers/index.mdx";
  slug: "de/tools/block-explorers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/block-explorers/statescan.md": {
	id: "de/tools/block-explorers/statescan.md";
  slug: "de/tools/block-explorers/statescan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/tools/block-explorers/subscan.mdx": {
	id: "de/tools/block-explorers/subscan.mdx";
  slug: "de/tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/dao-tools/chaosdao-bot.mdx": {
	id: "de/tools/dao-tools/chaosdao-bot.mdx";
  slug: "de/tools/dao-tools/chaosdao-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/dao-tools/delegit.mdx": {
	id: "de/tools/dao-tools/delegit.mdx";
  slug: "de/tools/dao-tools/delegit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/dao-tools/dotreasury.md": {
	id: "de/tools/dao-tools/dotreasury.md";
  slug: "de/tools/dao-tools/dotreasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"de/tools/dao-tools/index.mdx": {
	id: "de/tools/dao-tools/index.mdx";
  slug: "de/tools/dao-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/dao-tools/ogtracker.mdx": {
	id: "de/tools/dao-tools/ogtracker.mdx";
  slug: "de/tools/dao-tools/ogtracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/dao-tools/polkassembly.mdx": {
	id: "de/tools/dao-tools/polkassembly.mdx";
  slug: "de/tools/dao-tools/polkassembly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/dao-tools/subsquare.mdx": {
	id: "de/tools/dao-tools/subsquare.mdx";
  slug: "de/tools/dao-tools/subsquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/dao-tools/townhall.mdx": {
	id: "de/tools/dao-tools/townhall.mdx";
  slug: "de/tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/index.mdx": {
	id: "de/tools/index.mdx";
  slug: "de/tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/enkrypt-wallet.mdx": {
	id: "de/tools/wallets/enkrypt-wallet.mdx";
  slug: "de/tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/fearless-wallet.mdx": {
	id: "de/tools/wallets/fearless-wallet.mdx";
  slug: "de/tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/index.mdx": {
	id: "de/tools/wallets/index.mdx";
  slug: "de/tools/wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/kampela-signer.mdx": {
	id: "de/tools/wallets/kampela-signer.mdx";
  slug: "de/tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/mimir.mdx": {
	id: "de/tools/wallets/mimir.mdx";
  slug: "de/tools/wallets/mimir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/multix.mdx": {
	id: "de/tools/wallets/multix.mdx";
  slug: "de/tools/wallets/multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/nova-wallet.mdx": {
	id: "de/tools/wallets/nova-wallet.mdx";
  slug: "de/tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/plutowallet.mdx": {
	id: "de/tools/wallets/plutowallet.mdx";
  slug: "de/tools/wallets/plutowallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/polkadot-vault.mdx": {
	id: "de/tools/wallets/polkadot-vault.mdx";
  slug: "de/tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/polkagate.mdx": {
	id: "de/tools/wallets/polkagate.mdx";
  slug: "de/tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/polkasafe.mdx": {
	id: "de/tools/wallets/polkasafe.mdx";
  slug: "de/tools/wallets/polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/polkawallet.mdx": {
	id: "de/tools/wallets/polkawallet.mdx";
  slug: "de/tools/wallets/polkawallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/sporran-wallet.mdx": {
	id: "de/tools/wallets/sporran-wallet.mdx";
  slug: "de/tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/subwallet.mdx": {
	id: "de/tools/wallets/subwallet.mdx";
  slug: "de/tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/talisman-wallet.mdx": {
	id: "de/tools/wallets/talisman-wallet.mdx";
  slug: "de/tools/wallets/talisman-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/tools/wallets/xsigners.mdx": {
	id: "de/tools/wallets/xsigners.mdx";
  slug: "de/tools/wallets/xsigners";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/antiscam.mdx": {
	id: "es/club/bounties/antiscam.mdx";
  slug: "es/club/bounties/antiscam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/bridges-bug-bounty.mdx": {
	id: "es/club/bounties/bridges-bug-bounty.mdx";
  slug: "es/club/bounties/bridges-bug-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/defi-bounty.mdx": {
	id: "es/club/bounties/defi-bounty.mdx";
  slug: "es/club/bounties/defi-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/dotplay.mdx": {
	id: "es/club/bounties/dotplay.mdx";
  slug: "es/club/bounties/dotplay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/events.mdx": {
	id: "es/club/bounties/events.mdx";
  slug: "es/club/bounties/events";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/ibp.mdx": {
	id: "es/club/bounties/ibp.mdx";
  slug: "es/club/bounties/ibp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/index.mdx": {
	id: "es/club/bounties/index.mdx";
  slug: "es/club/bounties";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/inkubator.md": {
	id: "es/club/bounties/inkubator.md";
  slug: "es/club/bounties/inkubator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/bounties/legal-bounty.mdx": {
	id: "es/club/bounties/legal-bounty.mdx";
  slug: "es/club/bounties/legal-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/marketing.mdx": {
	id: "es/club/bounties/marketing.mdx";
  slug: "es/club/bounties/marketing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/meetups.mdx": {
	id: "es/club/bounties/meetups.mdx";
  slug: "es/club/bounties/meetups";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/moderation.mdx": {
	id: "es/club/bounties/moderation.mdx";
  slug: "es/club/bounties/moderation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/bounties/pal.md": {
	id: "es/club/bounties/pal.md";
  slug: "es/club/bounties/pal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/bounties/pioneers-prize.md": {
	id: "es/club/bounties/pioneers-prize.md";
  slug: "es/club/bounties/pioneers-prize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/bounties/technical-support.md": {
	id: "es/club/bounties/technical-support.md";
  slug: "es/club/bounties/technical-support";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/bounties/ux-bounty.mdx": {
	id: "es/club/bounties/ux-bounty.mdx";
  slug: "es/club/bounties/ux-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/collectives/index.mdx": {
	id: "es/club/collectives/index.mdx";
  slug: "es/club/collectives";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/collectives/polkadot-ambassadors-collective.mdx": {
	id: "es/club/collectives/polkadot-ambassadors-collective.mdx";
  slug: "es/club/collectives/polkadot-ambassadors-collective";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/collectives/polkadot-fellowship.mdx": {
	id: "es/club/collectives/polkadot-fellowship.mdx";
  slug: "es/club/collectives/polkadot-fellowship";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/collectives/polkadot-tooling-collective.md": {
	id: "es/club/collectives/polkadot-tooling-collective.md";
  slug: "es/club/collectives/polkadot-tooling-collective";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/daos/apexchimpz.mdx": {
	id: "es/club/daos/apexchimpz.mdx";
  slug: "es/club/daos/apexchimpz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/cctf-dao.mdx": {
	id: "es/club/daos/cctf-dao.mdx";
  slug: "es/club/daos/cctf-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/chaosdao.mdx": {
	id: "es/club/daos/chaosdao.mdx";
  slug: "es/club/daos/chaosdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/dot-validator-alliance.md": {
	id: "es/club/daos/dot-validator-alliance.md";
  slug: "es/club/daos/dot-validator-alliance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/daos/index.mdx": {
	id: "es/club/daos/index.mdx";
  slug: "es/club/daos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/kappa-sigma-mu.mdx": {
	id: "es/club/daos/kappa-sigma-mu.mdx";
  slug: "es/club/daos/kappa-sigma-mu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/kusdao.mdx": {
	id: "es/club/daos/kusdao.mdx";
  slug: "es/club/daos/kusdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/lenexus.mdx": {
	id: "es/club/daos/lenexus.mdx";
  slug: "es/club/daos/lenexus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/lucky-friday.mdx": {
	id: "es/club/daos/lucky-friday.mdx";
  slug: "es/club/daos/lucky-friday";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/permanencedao.mdx": {
	id: "es/club/daos/permanencedao.mdx";
  slug: "es/club/daos/permanencedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/polkadot-africa.mdx": {
	id: "es/club/daos/polkadot-africa.mdx";
  slug: "es/club/daos/polkadot-africa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/polkadot-hungary.mdx": {
	id: "es/club/daos/polkadot-hungary.mdx";
  slug: "es/club/daos/polkadot-hungary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/polkadot-mexico.mdx": {
	id: "es/club/daos/polkadot-mexico.mdx";
  slug: "es/club/daos/polkadot-mexico";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/polkadot-poland.mdx": {
	id: "es/club/daos/polkadot-poland.mdx";
  slug: "es/club/daos/polkadot-poland";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/reeeeeeeeeedao.mdx": {
	id: "es/club/daos/reeeeeeeeeedao.mdx";
  slug: "es/club/daos/reeeeeeeeeedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/saxemberg.md": {
	id: "es/club/daos/saxemberg.md";
  slug: "es/club/daos/saxemberg";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/daos/teddydao.mdx": {
	id: "es/club/daos/teddydao.mdx";
  slug: "es/club/daos/teddydao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/daos/unitedbloc.md": {
	id: "es/club/daos/unitedbloc.md";
  slug: "es/club/daos/unitedbloc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/daos/youdledao.mdx": {
	id: "es/club/daos/youdledao.mdx";
  slug: "es/club/daos/youdledao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/index.mdx": {
	id: "es/club/index.mdx";
  slug: "es/club";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/memecoins/beefy.mdx": {
	id: "es/club/memecoins/beefy.mdx";
  slug: "es/club/memecoins/beefy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/memecoins/gavunwud.mdx": {
	id: "es/club/memecoins/gavunwud.mdx";
  slug: "es/club/memecoins/gavunwud";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/memecoins/index.mdx": {
	id: "es/club/memecoins/index.mdx";
  slug: "es/club/memecoins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/memecoins/pink.mdx": {
	id: "es/club/memecoins/pink.mdx";
  slug: "es/club/memecoins/pink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/memecoins/stink.mdx": {
	id: "es/club/memecoins/stink.mdx";
  slug: "es/club/memecoins/stink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/harbour-industrial-capital.mdx": {
	id: "es/club/orgs/bd/harbour-industrial-capital.mdx";
  slug: "es/club/orgs/bd/harbour-industrial-capital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/illusionist-group.md": {
	id: "es/club/orgs/bd/illusionist-group.md";
  slug: "es/club/orgs/bd/illusionist-group";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/orgs/bd/magenta-labs.mdx": {
	id: "es/club/orgs/bd/magenta-labs.mdx";
  slug: "es/club/orgs/bd/magenta-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/nftmozaic.mdx": {
	id: "es/club/orgs/bd/nftmozaic.mdx";
  slug: "es/club/orgs/bd/nftmozaic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/papermoon.mdx": {
	id: "es/club/orgs/bd/papermoon.mdx";
  slug: "es/club/orgs/bd/papermoon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/polkabiz.mdx": {
	id: "es/club/orgs/bd/polkabiz.mdx";
  slug: "es/club/orgs/bd/polkabiz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/polkadot-community-foundation.mdx": {
	id: "es/club/orgs/bd/polkadot-community-foundation.mdx";
  slug: "es/club/orgs/bd/polkadot-community-foundation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/polkaport-east.mdx": {
	id: "es/club/orgs/bd/polkaport-east.mdx";
  slug: "es/club/orgs/bd/polkaport-east";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/scytale-digital.mdx": {
	id: "es/club/orgs/bd/scytale-digital.mdx";
  slug: "es/club/orgs/bd/scytale-digital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/transistor.mdx": {
	id: "es/club/orgs/bd/transistor.mdx";
  slug: "es/club/orgs/bd/transistor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/bd/velocity-labs.mdx": {
	id: "es/club/orgs/bd/velocity-labs.mdx";
  slug: "es/club/orgs/bd/velocity-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/orgs/index.mdx": {
	id: "es/club/orgs/index.mdx";
  slug: "es/club/orgs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/people/gavin-wood.md": {
	id: "es/club/people/gavin-wood.md";
  slug: "es/club/people/gavin-wood";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/club/resources/awesome-polkadot.mdx": {
	id: "es/club/resources/awesome-polkadot.mdx";
  slug: "es/club/resources/awesome-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/resources/handbook.mdx": {
	id: "es/club/resources/handbook.mdx";
  slug: "es/club/resources/handbook";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/club/resources/index.mdx": {
	id: "es/club/resources/index.mdx";
  slug: "es/club/resources";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/ai/bittensor.mdx": {
	id: "es/dapps/ai/bittensor.mdx";
  slug: "es/dapps/ai/bittensor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/ai/index.mdx": {
	id: "es/dapps/ai/index.mdx";
  slug: "es/dapps/ai";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/ai/neurolanche.mdx": {
	id: "es/dapps/ai/neurolanche.mdx";
  slug: "es/dapps/ai/neurolanche";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/ai/neuroweb.mdx": {
	id: "es/dapps/ai/neuroweb.mdx";
  slug: "es/dapps/ai/neuroweb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/ai/phala-network.mdx": {
	id: "es/dapps/ai/phala-network.mdx";
  slug: "es/dapps/ai/phala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/bridges/axelar.md": {
	id: "es/dapps/bridges/axelar.md";
  slug: "es/dapps/bridges/axelar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/bridges/chainflip.md": {
	id: "es/dapps/bridges/chainflip.md";
  slug: "es/dapps/bridges/chainflip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/bridges/hyperbridge.mdx": {
	id: "es/dapps/bridges/hyperbridge.mdx";
  slug: "es/dapps/bridges/hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/bridges/index.mdx": {
	id: "es/dapps/bridges/index.mdx";
  slug: "es/dapps/bridges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/bridges/snowbridge.mdx": {
	id: "es/dapps/bridges/snowbridge.mdx";
  slug: "es/dapps/bridges/snowbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/bridges/wormhole.md": {
	id: "es/dapps/bridges/wormhole.md";
  slug: "es/dapps/bridges/wormhole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/defi/acala-network.mdx": {
	id: "es/dapps/defi/acala-network.mdx";
  slug: "es/dapps/defi/acala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/algem.mdx": {
	id: "es/dapps/defi/algem.mdx";
  slug: "es/dapps/defi/algem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/arthswap.mdx": {
	id: "es/dapps/defi/arthswap.mdx";
  slug: "es/dapps/defi/arthswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/astriddao.mdx": {
	id: "es/dapps/defi/astriddao.mdx";
  slug: "es/dapps/defi/astriddao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/beamswap.mdx": {
	id: "es/dapps/defi/beamswap.mdx";
  slug: "es/dapps/defi/beamswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/bifrost.mdx": {
	id: "es/dapps/defi/bifrost.mdx";
  slug: "es/dapps/defi/bifrost";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/ceres.md": {
	id: "es/dapps/defi/ceres.md";
  slug: "es/dapps/defi/ceres";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/defi/curve-finance.md": {
	id: "es/dapps/defi/curve-finance.md";
  slug: "es/dapps/defi/curve-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/defi/dam-finance.mdx": {
	id: "es/dapps/defi/dam-finance.mdx";
  slug: "es/dapps/defi/dam-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/darwinia.mdx": {
	id: "es/dapps/defi/darwinia.mdx";
  slug: "es/dapps/defi/darwinia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/hydration.mdx": {
	id: "es/dapps/defi/hydration.mdx";
  slug: "es/dapps/defi/hydration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/index.mdx": {
	id: "es/dapps/defi/index.mdx";
  slug: "es/dapps/defi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/interlay.mdx": {
	id: "es/dapps/defi/interlay.mdx";
  slug: "es/dapps/defi/interlay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/kylix-finance.mdx": {
	id: "es/dapps/defi/kylix-finance.mdx";
  slug: "es/dapps/defi/kylix-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/linear-finance.md": {
	id: "es/dapps/defi/linear-finance.md";
  slug: "es/dapps/defi/linear-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/defi/magic-ramp.mdx": {
	id: "es/dapps/defi/magic-ramp.mdx";
  slug: "es/dapps/defi/magic-ramp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/moonwell.mdx": {
	id: "es/dapps/defi/moonwell.mdx";
  slug: "es/dapps/defi/moonwell";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/pendulum.mdx": {
	id: "es/dapps/defi/pendulum.mdx";
  slug: "es/dapps/defi/pendulum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/polimec.mdx": {
	id: "es/dapps/defi/polimec.mdx";
  slug: "es/dapps/defi/polimec";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/polkadex.mdx": {
	id: "es/dapps/defi/polkadex.mdx";
  slug: "es/dapps/defi/polkadex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/polkamarkets.mdx": {
	id: "es/dapps/defi/polkamarkets.mdx";
  slug: "es/dapps/defi/polkamarkets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/polkaswap.mdx": {
	id: "es/dapps/defi/polkaswap.mdx";
  slug: "es/dapps/defi/polkaswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/solarbeam.md": {
	id: "es/dapps/defi/solarbeam.md";
  slug: "es/dapps/defi/solarbeam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/defi/starfish-finance.md": {
	id: "es/dapps/defi/starfish-finance.md";
  slug: "es/dapps/defi/starfish-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/defi/stellaswap.mdx": {
	id: "es/dapps/defi/stellaswap.mdx";
  slug: "es/dapps/defi/stellaswap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/taiga-protocol.md": {
	id: "es/dapps/defi/taiga-protocol.md";
  slug: "es/dapps/defi/taiga-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/defi/zeitgeist.mdx": {
	id: "es/dapps/defi/zeitgeist.mdx";
  slug: "es/dapps/defi/zeitgeist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/defi/zenlink.mdx": {
	id: "es/dapps/defi/zenlink.mdx";
  slug: "es/dapps/defi/zenlink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/depin/acurast.mdx": {
	id: "es/dapps/depin/acurast.mdx";
  slug: "es/dapps/depin/acurast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/depin/giant-protocol.mdx": {
	id: "es/dapps/depin/giant-protocol.mdx";
  slug: "es/dapps/depin/giant-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/depin/index.mdx": {
	id: "es/dapps/depin/index.mdx";
  slug: "es/dapps/depin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/depin/peaq-network.mdx": {
	id: "es/dapps/depin/peaq-network.mdx";
  slug: "es/dapps/depin/peaq-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/depin/robonomics.mdx": {
	id: "es/dapps/depin/robonomics.mdx";
  slug: "es/dapps/depin/robonomics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/age-of-chronos.mdx": {
	id: "es/dapps/gaming/age-of-chronos.mdx";
  slug: "es/dapps/gaming/age-of-chronos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/ajuna-network.mdx": {
	id: "es/dapps/gaming/ajuna-network.mdx";
  slug: "es/dapps/gaming/ajuna-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/bitcountry.md": {
	id: "es/dapps/gaming/bitcountry.md";
  slug: "es/dapps/gaming/bitcountry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/gaming/cosmize.md": {
	id: "es/dapps/gaming/cosmize.md";
  slug: "es/dapps/gaming/cosmize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/gaming/evrloot.mdx": {
	id: "es/dapps/gaming/evrloot.mdx";
  slug: "es/dapps/gaming/evrloot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/exiled-racers.mdx": {
	id: "es/dapps/gaming/exiled-racers.mdx";
  slug: "es/dapps/gaming/exiled-racers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/gamedao.mdx": {
	id: "es/dapps/gaming/gamedao.mdx";
  slug: "es/dapps/gaming/gamedao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/glmr-apes-the-great-escape.mdx": {
	id: "es/dapps/gaming/glmr-apes-the-great-escape.mdx";
  slug: "es/dapps/gaming/glmr-apes-the-great-escape";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/heal3.mdx": {
	id: "es/dapps/gaming/heal3.mdx";
  slug: "es/dapps/gaming/heal3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/index.mdx": {
	id: "es/dapps/gaming/index.mdx";
  slug: "es/dapps/gaming";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/moonfit.md": {
	id: "es/dapps/gaming/moonfit.md";
  slug: "es/dapps/gaming/moonfit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/gaming/mythos-chain.mdx": {
	id: "es/dapps/gaming/mythos-chain.mdx";
  slug: "es/dapps/gaming/mythos-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/gaming/odyssey.md": {
	id: "es/dapps/gaming/odyssey.md";
  slug: "es/dapps/gaming/odyssey";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/gaming/zero-network.md": {
	id: "es/dapps/gaming/zero-network.md";
  slug: "es/dapps/gaming/zero-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/index.mdx": {
	id: "es/dapps/index.mdx";
  slug: "es/dapps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/agrotoken.mdx": {
	id: "es/dapps/miscellaneous/agrotoken.mdx";
  slug: "es/dapps/miscellaneous/agrotoken";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/archisinal.mdx": {
	id: "es/dapps/miscellaneous/archisinal.mdx";
  slug: "es/dapps/miscellaneous/archisinal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/ava-protocol.mdx": {
	id: "es/dapps/miscellaneous/ava-protocol.mdx";
  slug: "es/dapps/miscellaneous/ava-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/aventus-network.mdx": {
	id: "es/dapps/miscellaneous/aventus-network.mdx";
  slug: "es/dapps/miscellaneous/aventus-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/citizend.md": {
	id: "es/dapps/miscellaneous/citizend.md";
  slug: "es/dapps/miscellaneous/citizend";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/miscellaneous/composable-finance.md": {
	id: "es/dapps/miscellaneous/composable-finance.md";
  slug: "es/dapps/miscellaneous/composable-finance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/miscellaneous/hashed-network.mdx": {
	id: "es/dapps/miscellaneous/hashed-network.mdx";
  slug: "es/dapps/miscellaneous/hashed-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/ideal-network.mdx": {
	id: "es/dapps/miscellaneous/ideal-network.mdx";
  slug: "es/dapps/miscellaneous/ideal-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/index.mdx": {
	id: "es/dapps/miscellaneous/index.mdx";
  slug: "es/dapps/miscellaneous";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/integritee.mdx": {
	id: "es/dapps/miscellaneous/integritee.mdx";
  slug: "es/dapps/miscellaneous/integritee";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/laos-network.mdx": {
	id: "es/dapps/miscellaneous/laos-network.mdx";
  slug: "es/dapps/miscellaneous/laos-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/lastic.mdx": {
	id: "es/dapps/miscellaneous/lastic.mdx";
  slug: "es/dapps/miscellaneous/lastic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/regionx.mdx": {
	id: "es/dapps/miscellaneous/regionx.mdx";
  slug: "es/dapps/miscellaneous/regionx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/t3rn.mdx": {
	id: "es/dapps/miscellaneous/t3rn.mdx";
  slug: "es/dapps/miscellaneous/t3rn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/true-network.mdx": {
	id: "es/dapps/miscellaneous/true-network.mdx";
  slug: "es/dapps/miscellaneous/true-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/miscellaneous/xx-network.mdx": {
	id: "es/dapps/miscellaneous/xx-network.mdx";
  slug: "es/dapps/miscellaneous/xx-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/artzero.mdx": {
	id: "es/dapps/nft-marketplaces/artzero.mdx";
  slug: "es/dapps/nft-marketplaces/artzero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/bluez.mdx": {
	id: "es/dapps/nft-marketplaces/bluez.mdx";
  slug: "es/dapps/nft-marketplaces/bluez";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/destore.mdx": {
	id: "es/dapps/nft-marketplaces/destore.mdx";
  slug: "es/dapps/nft-marketplaces/destore";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/dotmemo.mdx": {
	id: "es/dapps/nft-marketplaces/dotmemo.mdx";
  slug: "es/dapps/nft-marketplaces/dotmemo";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/index.mdx": {
	id: "es/dapps/nft-marketplaces/index.mdx";
  slug: "es/dapps/nft-marketplaces";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/kodadot.mdx": {
	id: "es/dapps/nft-marketplaces/kodadot.mdx";
  slug: "es/dapps/nft-marketplaces/kodadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/moonbeans.mdx": {
	id: "es/dapps/nft-marketplaces/moonbeans.mdx";
  slug: "es/dapps/nft-marketplaces/moonbeans";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/nftrade.md": {
	id: "es/dapps/nft-marketplaces/nftrade.md";
  slug: "es/dapps/nft-marketplaces/nftrade";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/nft-marketplaces/public-pressure.md": {
	id: "es/dapps/nft-marketplaces/public-pressure.md";
  slug: "es/dapps/nft-marketplaces/public-pressure";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/nft-marketplaces/singular-nft-marketplace.mdx": {
	id: "es/dapps/nft-marketplaces/singular-nft-marketplace.mdx";
  slug: "es/dapps/nft-marketplaces/singular-nft-marketplace";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/nft-marketplaces/sonova.md": {
	id: "es/dapps/nft-marketplaces/sonova.md";
  slug: "es/dapps/nft-marketplaces/sonova";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/nft-marketplaces/tofunft-marketplace.md": {
	id: "es/dapps/nft-marketplaces/tofunft-marketplace.md";
  slug: "es/dapps/nft-marketplaces/tofunft-marketplace";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/nft-marketplaces/unique-network.mdx": {
	id: "es/dapps/nft-marketplaces/unique-network.mdx";
  slug: "es/dapps/nft-marketplaces/unique-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/rwa/centrifuge.mdx": {
	id: "es/dapps/rwa/centrifuge.mdx";
  slug: "es/dapps/rwa/centrifuge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/rwa/curio.mdx": {
	id: "es/dapps/rwa/curio.mdx";
  slug: "es/dapps/rwa/curio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/rwa/g6networks.mdx": {
	id: "es/dapps/rwa/g6networks.mdx";
  slug: "es/dapps/rwa/g6networks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/rwa/index.mdx": {
	id: "es/dapps/rwa/index.mdx";
  slug: "es/dapps/rwa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/rwa/unit-network.md": {
	id: "es/dapps/rwa/unit-network.md";
  slug: "es/dapps/rwa/unit-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/rwa/watr-protocol.md": {
	id: "es/dapps/rwa/watr-protocol.md";
  slug: "es/dapps/rwa/watr-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/rwa/xcavate.mdx": {
	id: "es/dapps/rwa/xcavate.mdx";
  slug: "es/dapps/rwa/xcavate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/smart-contracts/aleph-zero.mdx": {
	id: "es/dapps/smart-contracts/aleph-zero.mdx";
  slug: "es/dapps/smart-contracts/aleph-zero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/smart-contracts/astar-network.mdx": {
	id: "es/dapps/smart-contracts/astar-network.mdx";
  slug: "es/dapps/smart-contracts/astar-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/smart-contracts/energy-webx.mdx": {
	id: "es/dapps/smart-contracts/energy-webx.mdx";
  slug: "es/dapps/smart-contracts/energy-webx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/smart-contracts/index.mdx": {
	id: "es/dapps/smart-contracts/index.mdx";
  slug: "es/dapps/smart-contracts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/smart-contracts/moonbeam-network.mdx": {
	id: "es/dapps/smart-contracts/moonbeam-network.mdx";
  slug: "es/dapps/smart-contracts/moonbeam-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/smart-contracts/sora-network.md": {
	id: "es/dapps/smart-contracts/sora-network.md";
  slug: "es/dapps/smart-contracts/sora-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/smart-contracts/ternoa.md": {
	id: "es/dapps/smart-contracts/ternoa.md";
  slug: "es/dapps/smart-contracts/ternoa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/dapps/social/dsnp-protocol.mdx": {
	id: "es/dapps/social/dsnp-protocol.mdx";
  slug: "es/dapps/social/dsnp-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/encointer.mdx": {
	id: "es/dapps/social/encointer.mdx";
  slug: "es/dapps/social/encointer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/frequency.mdx": {
	id: "es/dapps/social/frequency.mdx";
  slug: "es/dapps/social/frequency";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/imbue-network.mdx": {
	id: "es/dapps/social/imbue-network.mdx";
  slug: "es/dapps/social/imbue-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/index.mdx": {
	id: "es/dapps/social/index.mdx";
  slug: "es/dapps/social";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/invarch-network.mdx": {
	id: "es/dapps/social/invarch-network.mdx";
  slug: "es/dapps/social/invarch-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/joystream.mdx": {
	id: "es/dapps/social/joystream.mdx";
  slug: "es/dapps/social/joystream";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/kilt-protocol.mdx": {
	id: "es/dapps/social/kilt-protocol.mdx";
  slug: "es/dapps/social/kilt-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/litentry.mdx": {
	id: "es/dapps/social/litentry.mdx";
  slug: "es/dapps/social/litentry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/logion-network.mdx": {
	id: "es/dapps/social/logion-network.mdx";
  slug: "es/dapps/social/logion-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/mandala-chain.mdx": {
	id: "es/dapps/social/mandala-chain.mdx";
  slug: "es/dapps/social/mandala-chain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/subsocial.mdx": {
	id: "es/dapps/social/subsocial.mdx";
  slug: "es/dapps/social/subsocial";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/social/virto-network.mdx": {
	id: "es/dapps/social/virto-network.mdx";
  slug: "es/dapps/social/virto-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/storage/avail-project.mdx": {
	id: "es/dapps/storage/avail-project.mdx";
  slug: "es/dapps/storage/avail-project";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/storage/cess.mdx": {
	id: "es/dapps/storage/cess.mdx";
  slug: "es/dapps/storage/cess";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/storage/crust-network.mdx": {
	id: "es/dapps/storage/crust-network.mdx";
  slug: "es/dapps/storage/crust-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/storage/index.mdx": {
	id: "es/dapps/storage/index.mdx";
  slug: "es/dapps/storage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/dapps/storage/midnight-network.mdx": {
	id: "es/dapps/storage/midnight-network.mdx";
  slug: "es/dapps/storage/midnight-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/block-explorers/3xpl.md": {
	id: "es/tools/block-explorers/3xpl.md";
  slug: "es/tools/block-explorers/3xpl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/block-explorers/blockchair.md": {
	id: "es/tools/block-explorers/blockchair.md";
  slug: "es/tools/block-explorers/blockchair";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/block-explorers/chainspect.md": {
	id: "es/tools/block-explorers/chainspect.md";
  slug: "es/tools/block-explorers/chainspect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/block-explorers/index.mdx": {
	id: "es/tools/block-explorers/index.mdx";
  slug: "es/tools/block-explorers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/block-explorers/statescan.md": {
	id: "es/tools/block-explorers/statescan.md";
  slug: "es/tools/block-explorers/statescan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/block-explorers/subscan.mdx": {
	id: "es/tools/block-explorers/subscan.mdx";
  slug: "es/tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dao-tools/chaosdao-bot.mdx": {
	id: "es/tools/dao-tools/chaosdao-bot.mdx";
  slug: "es/tools/dao-tools/chaosdao-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dao-tools/delegit.mdx": {
	id: "es/tools/dao-tools/delegit.mdx";
  slug: "es/tools/dao-tools/delegit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dao-tools/dotreasury.md": {
	id: "es/tools/dao-tools/dotreasury.md";
  slug: "es/tools/dao-tools/dotreasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/dao-tools/index.mdx": {
	id: "es/tools/dao-tools/index.mdx";
  slug: "es/tools/dao-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dao-tools/ogtracker.mdx": {
	id: "es/tools/dao-tools/ogtracker.mdx";
  slug: "es/tools/dao-tools/ogtracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dao-tools/polkassembly.mdx": {
	id: "es/tools/dao-tools/polkassembly.mdx";
  slug: "es/tools/dao-tools/polkassembly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dao-tools/subsquare.mdx": {
	id: "es/tools/dao-tools/subsquare.mdx";
  slug: "es/tools/dao-tools/subsquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dao-tools/townhall.mdx": {
	id: "es/tools/dao-tools/townhall.mdx";
  slug: "es/tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/apillon.mdx": {
	id: "es/tools/dev/apillon.mdx";
  slug: "es/tools/dev/apillon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/bagpipes.mdx": {
	id: "es/tools/dev/bagpipes.mdx";
  slug: "es/tools/dev/bagpipes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/chopsticks.mdx": {
	id: "es/tools/dev/chopsticks.mdx";
  slug: "es/tools/dev/chopsticks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/dedot.mdx": {
	id: "es/tools/dev/dedot.mdx";
  slug: "es/tools/dev/dedot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/frontier.mdx": {
	id: "es/tools/dev/frontier.mdx";
  slug: "es/tools/dev/frontier";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/gear-protocol.md": {
	id: "es/tools/dev/gear-protocol.md";
  slug: "es/tools/dev/gear-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/dev/glove.mdx": {
	id: "es/tools/dev/glove.mdx";
  slug: "es/tools/dev/glove";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/index.mdx": {
	id: "es/tools/dev/index.mdx";
  slug: "es/tools/dev";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/ink.mdx": {
	id: "es/tools/dev/ink.mdx";
  slug: "es/tools/dev/ink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/madara-starknet.mdx": {
	id: "es/tools/dev/madara-starknet.mdx";
  slug: "es/tools/dev/madara-starknet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/morekudos.mdx": {
	id: "es/tools/dev/morekudos.mdx";
  slug: "es/tools/dev/morekudos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/ocelloids.mdx": {
	id: "es/tools/dev/ocelloids.mdx";
  slug: "es/tools/dev/ocelloids";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/papi.mdx": {
	id: "es/tools/dev/papi.mdx";
  slug: "es/tools/dev/papi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/parachainbuilder.mdx": {
	id: "es/tools/dev/parachainbuilder.mdx";
  slug: "es/tools/dev/parachainbuilder";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/paraspell.mdx": {
	id: "es/tools/dev/paraspell.mdx";
  slug: "es/tools/dev/paraspell";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/polkadart.mdx": {
	id: "es/tools/dev/polkadart.mdx";
  slug: "es/tools/dev/polkadart";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/polkadot-contract-wizard.mdx": {
	id: "es/tools/dev/polkadot-contract-wizard.mdx";
  slug: "es/tools/dev/polkadot-contract-wizard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/polkadot-runtime-releaser.mdx": {
	id: "es/tools/dev/polkadot-runtime-releaser.mdx";
  slug: "es/tools/dev/polkadot-runtime-releaser";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/polkadot-sdk.mdx": {
	id: "es/tools/dev/polkadot-sdk.mdx";
  slug: "es/tools/dev/polkadot-sdk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/polkadotjs.mdx": {
	id: "es/tools/dev/polkadotjs.mdx";
  slug: "es/tools/dev/polkadotjs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/pop-cli.mdx": {
	id: "es/tools/dev/pop-cli.mdx";
  slug: "es/tools/dev/pop-cli";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/pop-network.md": {
	id: "es/tools/dev/pop-network.md";
  slug: "es/tools/dev/pop-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/dev/reactivedot.mdx": {
	id: "es/tools/dev/reactivedot.mdx";
  slug: "es/tools/dev/reactivedot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/revive.mdx": {
	id: "es/tools/dev/revive.mdx";
  slug: "es/tools/dev/revive";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/scout.mdx": {
	id: "es/tools/dev/scout.mdx";
  slug: "es/tools/dev/scout";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/simnode.mdx": {
	id: "es/tools/dev/simnode.mdx";
  slug: "es/tools/dev/simnode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/smoldot.mdx": {
	id: "es/tools/dev/smoldot.mdx";
  slug: "es/tools/dev/smoldot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/solang.mdx": {
	id: "es/tools/dev/solang.mdx";
  slug: "es/tools/dev/solang";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/sqd.md": {
	id: "es/tools/dev/sqd.md";
  slug: "es/tools/dev/sqd";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/dev/subcoin.mdx": {
	id: "es/tools/dev/subcoin.mdx";
  slug: "es/tools/dev/subcoin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/subquery.md": {
	id: "es/tools/dev/subquery.md";
  slug: "es/tools/dev/subquery";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/dev/substrate-api-sidecar.mdx": {
	id: "es/tools/dev/substrate-api-sidecar.mdx";
  slug: "es/tools/dev/substrate-api-sidecar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/substrate-connect.mdx": {
	id: "es/tools/dev/substrate-connect.mdx";
  slug: "es/tools/dev/substrate-connect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/subxt.mdx": {
	id: "es/tools/dev/subxt.mdx";
  slug: "es/tools/dev/subxt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/sygma.mdx": {
	id: "es/tools/dev/sygma.mdx";
  slug: "es/tools/dev/sygma";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/tanssi-network.mdx": {
	id: "es/tools/dev/tanssi-network.mdx";
  slug: "es/tools/dev/tanssi-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/txwrapper.mdx": {
	id: "es/tools/dev/txwrapper.mdx";
  slug: "es/tools/dev/txwrapper";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/vara-network.mdx": {
	id: "es/tools/dev/vara-network.mdx";
  slug: "es/tools/dev/vara-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/dev/zombienet.mdx": {
	id: "es/tools/dev/zombienet.mdx";
  slug: "es/tools/dev/zombienet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/index.mdx": {
	id: "es/tools/index.mdx";
  slug: "es/tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/chainviz.mdx": {
	id: "es/tools/miscellaneous/chainviz.mdx";
  slug: "es/tools/miscellaneous/chainviz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/fidi-web3-analytics.mdx": {
	id: "es/tools/miscellaneous/fidi-web3-analytics.mdx";
  slug: "es/tools/miscellaneous/fidi-web3-analytics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/index.mdx": {
	id: "es/tools/miscellaneous/index.mdx";
  slug: "es/tools/miscellaneous";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/polkadot-staking-dashboard.mdx": {
	id: "es/tools/miscellaneous/polkadot-staking-dashboard.mdx";
  slug: "es/tools/miscellaneous/polkadot-staking-dashboard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/polkadot-telemetry.md": {
	id: "es/tools/miscellaneous/polkadot-telemetry.md";
  slug: "es/tools/miscellaneous/polkadot-telemetry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/miscellaneous/polkatax.mdx": {
	id: "es/tools/miscellaneous/polkatax.mdx";
  slug: "es/tools/miscellaneous/polkatax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/polkawatch.md": {
	id: "es/tools/miscellaneous/polkawatch.md";
  slug: "es/tools/miscellaneous/polkawatch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"es/tools/miscellaneous/staking-rewards-collector.mdx": {
	id: "es/tools/miscellaneous/staking-rewards-collector.mdx";
  slug: "es/tools/miscellaneous/staking-rewards-collector";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/subvt.mdx": {
	id: "es/tools/miscellaneous/subvt.mdx";
  slug: "es/tools/miscellaneous/subvt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/wagmedia-bot.mdx": {
	id: "es/tools/miscellaneous/wagmedia-bot.mdx";
  slug: "es/tools/miscellaneous/wagmedia-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/miscellaneous/web3alert.mdx": {
	id: "es/tools/miscellaneous/web3alert.mdx";
  slug: "es/tools/miscellaneous/web3alert";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/enkrypt-wallet.mdx": {
	id: "es/tools/wallets/enkrypt-wallet.mdx";
  slug: "es/tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/fearless-wallet.mdx": {
	id: "es/tools/wallets/fearless-wallet.mdx";
  slug: "es/tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/index.mdx": {
	id: "es/tools/wallets/index.mdx";
  slug: "es/tools/wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/kampela-signer.mdx": {
	id: "es/tools/wallets/kampela-signer.mdx";
  slug: "es/tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/mimir.mdx": {
	id: "es/tools/wallets/mimir.mdx";
  slug: "es/tools/wallets/mimir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/multix.mdx": {
	id: "es/tools/wallets/multix.mdx";
  slug: "es/tools/wallets/multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/nova-wallet.mdx": {
	id: "es/tools/wallets/nova-wallet.mdx";
  slug: "es/tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/plutowallet.mdx": {
	id: "es/tools/wallets/plutowallet.mdx";
  slug: "es/tools/wallets/plutowallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/polkadot-vault.mdx": {
	id: "es/tools/wallets/polkadot-vault.mdx";
  slug: "es/tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/polkagate.mdx": {
	id: "es/tools/wallets/polkagate.mdx";
  slug: "es/tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/polkasafe.mdx": {
	id: "es/tools/wallets/polkasafe.mdx";
  slug: "es/tools/wallets/polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/polkawallet.mdx": {
	id: "es/tools/wallets/polkawallet.mdx";
  slug: "es/tools/wallets/polkawallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/sporran-wallet.mdx": {
	id: "es/tools/wallets/sporran-wallet.mdx";
  slug: "es/tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/subwallet.mdx": {
	id: "es/tools/wallets/subwallet.mdx";
  slug: "es/tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/talisman-wallet.mdx": {
	id: "es/tools/wallets/talisman-wallet.mdx";
  slug: "es/tools/wallets/talisman-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/tools/wallets/xsigners.mdx": {
	id: "es/tools/wallets/xsigners.mdx";
  slug: "es/tools/wallets/xsigners";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/ai/bittensor.mdx": {
	id: "fr/dapps/ai/bittensor.mdx";
  slug: "fr/dapps/ai/bittensor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/ai/index.mdx": {
	id: "fr/dapps/ai/index.mdx";
  slug: "fr/dapps/ai";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/ai/neurolanche.mdx": {
	id: "fr/dapps/ai/neurolanche.mdx";
  slug: "fr/dapps/ai/neurolanche";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/ai/neuroweb.mdx": {
	id: "fr/dapps/ai/neuroweb.mdx";
  slug: "fr/dapps/ai/neuroweb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/ai/phala-network.mdx": {
	id: "fr/dapps/ai/phala-network.mdx";
  slug: "fr/dapps/ai/phala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/bridges/axelar.md": {
	id: "fr/dapps/bridges/axelar.md";
  slug: "fr/dapps/bridges/axelar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/dapps/bridges/chainflip.md": {
	id: "fr/dapps/bridges/chainflip.md";
  slug: "fr/dapps/bridges/chainflip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/dapps/bridges/hyperbridge.mdx": {
	id: "fr/dapps/bridges/hyperbridge.mdx";
  slug: "fr/dapps/bridges/hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/bridges/index.mdx": {
	id: "fr/dapps/bridges/index.mdx";
  slug: "fr/dapps/bridges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/bridges/snowbridge.mdx": {
	id: "fr/dapps/bridges/snowbridge.mdx";
  slug: "fr/dapps/bridges/snowbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/dapps/bridges/wormhole.md": {
	id: "fr/dapps/bridges/wormhole.md";
  slug: "fr/dapps/bridges/wormhole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/dapps/index.mdx": {
	id: "fr/dapps/index.mdx";
  slug: "fr/dapps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/index.mdx": {
	id: "fr/index.mdx";
  slug: "fr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/block-explorers/3xpl.md": {
	id: "fr/tools/block-explorers/3xpl.md";
  slug: "fr/tools/block-explorers/3xpl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/tools/block-explorers/blockchair.md": {
	id: "fr/tools/block-explorers/blockchair.md";
  slug: "fr/tools/block-explorers/blockchair";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/tools/block-explorers/chainspect.md": {
	id: "fr/tools/block-explorers/chainspect.md";
  slug: "fr/tools/block-explorers/chainspect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/tools/block-explorers/index.mdx": {
	id: "fr/tools/block-explorers/index.mdx";
  slug: "fr/tools/block-explorers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/block-explorers/statescan.md": {
	id: "fr/tools/block-explorers/statescan.md";
  slug: "fr/tools/block-explorers/statescan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/tools/block-explorers/subscan.mdx": {
	id: "fr/tools/block-explorers/subscan.mdx";
  slug: "fr/tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/dao-tools/chaosdao-bot.mdx": {
	id: "fr/tools/dao-tools/chaosdao-bot.mdx";
  slug: "fr/tools/dao-tools/chaosdao-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/dao-tools/delegit.mdx": {
	id: "fr/tools/dao-tools/delegit.mdx";
  slug: "fr/tools/dao-tools/delegit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/dao-tools/dotreasury.md": {
	id: "fr/tools/dao-tools/dotreasury.md";
  slug: "fr/tools/dao-tools/dotreasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/tools/dao-tools/index.mdx": {
	id: "fr/tools/dao-tools/index.mdx";
  slug: "fr/tools/dao-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/dao-tools/ogtracker.mdx": {
	id: "fr/tools/dao-tools/ogtracker.mdx";
  slug: "fr/tools/dao-tools/ogtracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/dao-tools/polkassembly.mdx": {
	id: "fr/tools/dao-tools/polkassembly.mdx";
  slug: "fr/tools/dao-tools/polkassembly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/dao-tools/subsquare.mdx": {
	id: "fr/tools/dao-tools/subsquare.mdx";
  slug: "fr/tools/dao-tools/subsquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/dao-tools/townhall.mdx": {
	id: "fr/tools/dao-tools/townhall.mdx";
  slug: "fr/tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/index.mdx": {
	id: "fr/tools/index.mdx";
  slug: "fr/tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/enkrypt-wallet.mdx": {
	id: "fr/tools/wallets/enkrypt-wallet.mdx";
  slug: "fr/tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/fearless-wallet.mdx": {
	id: "fr/tools/wallets/fearless-wallet.mdx";
  slug: "fr/tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/index.mdx": {
	id: "fr/tools/wallets/index.mdx";
  slug: "fr/tools/wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/kampela-signer.mdx": {
	id: "fr/tools/wallets/kampela-signer.mdx";
  slug: "fr/tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/mimir.mdx": {
	id: "fr/tools/wallets/mimir.mdx";
  slug: "fr/tools/wallets/mimir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/multix.mdx": {
	id: "fr/tools/wallets/multix.mdx";
  slug: "fr/tools/wallets/multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/nova-wallet.mdx": {
	id: "fr/tools/wallets/nova-wallet.mdx";
  slug: "fr/tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/plutowallet.mdx": {
	id: "fr/tools/wallets/plutowallet.mdx";
  slug: "fr/tools/wallets/plutowallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/polkadot-vault.mdx": {
	id: "fr/tools/wallets/polkadot-vault.mdx";
  slug: "fr/tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/polkagate.mdx": {
	id: "fr/tools/wallets/polkagate.mdx";
  slug: "fr/tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/polkasafe.mdx": {
	id: "fr/tools/wallets/polkasafe.mdx";
  slug: "fr/tools/wallets/polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/polkawallet.mdx": {
	id: "fr/tools/wallets/polkawallet.mdx";
  slug: "fr/tools/wallets/polkawallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/sporran-wallet.mdx": {
	id: "fr/tools/wallets/sporran-wallet.mdx";
  slug: "fr/tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/subwallet.mdx": {
	id: "fr/tools/wallets/subwallet.mdx";
  slug: "fr/tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/talisman-wallet.mdx": {
	id: "fr/tools/wallets/talisman-wallet.mdx";
  slug: "fr/tools/wallets/talisman-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/tools/wallets/xsigners.mdx": {
	id: "fr/tools/wallets/xsigners.mdx";
  slug: "fr/tools/wallets/xsigners";
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
"it/dapps/bridges/axelar.md": {
	id: "it/dapps/bridges/axelar.md";
  slug: "it/dapps/bridges/axelar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/dapps/bridges/chainflip.md": {
	id: "it/dapps/bridges/chainflip.md";
  slug: "it/dapps/bridges/chainflip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/dapps/bridges/hyperbridge.mdx": {
	id: "it/dapps/bridges/hyperbridge.mdx";
  slug: "it/dapps/bridges/hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/bridges/index.mdx": {
	id: "it/dapps/bridges/index.mdx";
  slug: "it/dapps/bridges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/bridges/snowbridge.mdx": {
	id: "it/dapps/bridges/snowbridge.mdx";
  slug: "it/dapps/bridges/snowbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/bridges/wormhole.md": {
	id: "it/dapps/bridges/wormhole.md";
  slug: "it/dapps/bridges/wormhole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/dapps/depin/acurast.mdx": {
	id: "it/dapps/depin/acurast.mdx";
  slug: "it/dapps/depin/acurast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/depin/giant-protocol.mdx": {
	id: "it/dapps/depin/giant-protocol.mdx";
  slug: "it/dapps/depin/giant-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/depin/index.mdx": {
	id: "it/dapps/depin/index.mdx";
  slug: "it/dapps/depin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/depin/peaq-network.mdx": {
	id: "it/dapps/depin/peaq-network.mdx";
  slug: "it/dapps/depin/peaq-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/depin/robonomics.mdx": {
	id: "it/dapps/depin/robonomics.mdx";
  slug: "it/dapps/depin/robonomics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/dapps/index.mdx": {
	id: "it/dapps/index.mdx";
  slug: "it/dapps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/index.mdx": {
	id: "it/index.mdx";
  slug: "it";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/block-explorers/3xpl.md": {
	id: "it/tools/block-explorers/3xpl.md";
  slug: "it/tools/block-explorers/3xpl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/tools/block-explorers/blockchair.md": {
	id: "it/tools/block-explorers/blockchair.md";
  slug: "it/tools/block-explorers/blockchair";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/tools/block-explorers/chainspect.md": {
	id: "it/tools/block-explorers/chainspect.md";
  slug: "it/tools/block-explorers/chainspect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/tools/block-explorers/index.mdx": {
	id: "it/tools/block-explorers/index.mdx";
  slug: "it/tools/block-explorers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/block-explorers/statescan.md": {
	id: "it/tools/block-explorers/statescan.md";
  slug: "it/tools/block-explorers/statescan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/tools/block-explorers/subscan.mdx": {
	id: "it/tools/block-explorers/subscan.mdx";
  slug: "it/tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/dao-tools/chaosdao-bot.mdx": {
	id: "it/tools/dao-tools/chaosdao-bot.mdx";
  slug: "it/tools/dao-tools/chaosdao-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/dao-tools/delegit.mdx": {
	id: "it/tools/dao-tools/delegit.mdx";
  slug: "it/tools/dao-tools/delegit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/dao-tools/dotreasury.md": {
	id: "it/tools/dao-tools/dotreasury.md";
  slug: "it/tools/dao-tools/dotreasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/tools/dao-tools/index.mdx": {
	id: "it/tools/dao-tools/index.mdx";
  slug: "it/tools/dao-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/dao-tools/ogtracker.mdx": {
	id: "it/tools/dao-tools/ogtracker.mdx";
  slug: "it/tools/dao-tools/ogtracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/dao-tools/polkassembly.mdx": {
	id: "it/tools/dao-tools/polkassembly.mdx";
  slug: "it/tools/dao-tools/polkassembly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/dao-tools/subsquare.mdx": {
	id: "it/tools/dao-tools/subsquare.mdx";
  slug: "it/tools/dao-tools/subsquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/dao-tools/townhall.mdx": {
	id: "it/tools/dao-tools/townhall.mdx";
  slug: "it/tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/chainviz.mdx": {
	id: "it/tools/miscellaneous/chainviz.mdx";
  slug: "it/tools/miscellaneous/chainviz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/fidi-web3-analytics.mdx": {
	id: "it/tools/miscellaneous/fidi-web3-analytics.mdx";
  slug: "it/tools/miscellaneous/fidi-web3-analytics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/index.mdx": {
	id: "it/tools/miscellaneous/index.mdx";
  slug: "it/tools/miscellaneous";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/polkadot-staking-dashboard.mdx": {
	id: "it/tools/miscellaneous/polkadot-staking-dashboard.mdx";
  slug: "it/tools/miscellaneous/polkadot-staking-dashboard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/polkadot-telemetry.md": {
	id: "it/tools/miscellaneous/polkadot-telemetry.md";
  slug: "it/tools/miscellaneous/polkadot-telemetry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/tools/miscellaneous/polkatax.mdx": {
	id: "it/tools/miscellaneous/polkatax.mdx";
  slug: "it/tools/miscellaneous/polkatax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/polkawatch.md": {
	id: "it/tools/miscellaneous/polkawatch.md";
  slug: "it/tools/miscellaneous/polkawatch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"it/tools/miscellaneous/staking-rewards-collector.mdx": {
	id: "it/tools/miscellaneous/staking-rewards-collector.mdx";
  slug: "it/tools/miscellaneous/staking-rewards-collector";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/subvt.mdx": {
	id: "it/tools/miscellaneous/subvt.mdx";
  slug: "it/tools/miscellaneous/subvt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/wagmedia-bot.mdx": {
	id: "it/tools/miscellaneous/wagmedia-bot.mdx";
  slug: "it/tools/miscellaneous/wagmedia-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/miscellaneous/web3alert.mdx": {
	id: "it/tools/miscellaneous/web3alert.mdx";
  slug: "it/tools/miscellaneous/web3alert";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/enkrypt-wallet.mdx": {
	id: "it/tools/wallets/enkrypt-wallet.mdx";
  slug: "it/tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/fearless-wallet.mdx": {
	id: "it/tools/wallets/fearless-wallet.mdx";
  slug: "it/tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/index.mdx": {
	id: "it/tools/wallets/index.mdx";
  slug: "it/tools/wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/kampela-signer.mdx": {
	id: "it/tools/wallets/kampela-signer.mdx";
  slug: "it/tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/mimir.mdx": {
	id: "it/tools/wallets/mimir.mdx";
  slug: "it/tools/wallets/mimir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/multix.mdx": {
	id: "it/tools/wallets/multix.mdx";
  slug: "it/tools/wallets/multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/nova-wallet.mdx": {
	id: "it/tools/wallets/nova-wallet.mdx";
  slug: "it/tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/plutowallet.mdx": {
	id: "it/tools/wallets/plutowallet.mdx";
  slug: "it/tools/wallets/plutowallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/polkadot-vault.mdx": {
	id: "it/tools/wallets/polkadot-vault.mdx";
  slug: "it/tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/polkagate.mdx": {
	id: "it/tools/wallets/polkagate.mdx";
  slug: "it/tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/polkasafe.mdx": {
	id: "it/tools/wallets/polkasafe.mdx";
  slug: "it/tools/wallets/polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/polkawallet.mdx": {
	id: "it/tools/wallets/polkawallet.mdx";
  slug: "it/tools/wallets/polkawallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/sporran-wallet.mdx": {
	id: "it/tools/wallets/sporran-wallet.mdx";
  slug: "it/tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/subwallet.mdx": {
	id: "it/tools/wallets/subwallet.mdx";
  slug: "it/tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/talisman-wallet.mdx": {
	id: "it/tools/wallets/talisman-wallet.mdx";
  slug: "it/tools/wallets/talisman-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"it/tools/wallets/xsigners.mdx": {
	id: "it/tools/wallets/xsigners.mdx";
  slug: "it/tools/wallets/xsigners";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/ai/bittensor.mdx": {
	id: "pt/dapps/ai/bittensor.mdx";
  slug: "pt/dapps/ai/bittensor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/ai/index.mdx": {
	id: "pt/dapps/ai/index.mdx";
  slug: "pt/dapps/ai";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/ai/neurolanche.mdx": {
	id: "pt/dapps/ai/neurolanche.mdx";
  slug: "pt/dapps/ai/neurolanche";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/ai/neuroweb.mdx": {
	id: "pt/dapps/ai/neuroweb.mdx";
  slug: "pt/dapps/ai/neuroweb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/ai/phala-network.mdx": {
	id: "pt/dapps/ai/phala-network.mdx";
  slug: "pt/dapps/ai/phala-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/bridges/axelar.md": {
	id: "pt/dapps/bridges/axelar.md";
  slug: "pt/dapps/bridges/axelar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/dapps/bridges/chainflip.md": {
	id: "pt/dapps/bridges/chainflip.md";
  slug: "pt/dapps/bridges/chainflip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/dapps/bridges/hyperbridge.mdx": {
	id: "pt/dapps/bridges/hyperbridge.mdx";
  slug: "pt/dapps/bridges/hyperbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/bridges/index.mdx": {
	id: "pt/dapps/bridges/index.mdx";
  slug: "pt/dapps/bridges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/bridges/snowbridge.mdx": {
	id: "pt/dapps/bridges/snowbridge.mdx";
  slug: "pt/dapps/bridges/snowbridge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/bridges/wormhole.md": {
	id: "pt/dapps/bridges/wormhole.md";
  slug: "pt/dapps/bridges/wormhole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/dapps/depin/acurast.mdx": {
	id: "pt/dapps/depin/acurast.mdx";
  slug: "pt/dapps/depin/acurast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/depin/giant-protocol.mdx": {
	id: "pt/dapps/depin/giant-protocol.mdx";
  slug: "pt/dapps/depin/giant-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/depin/index.mdx": {
	id: "pt/dapps/depin/index.mdx";
  slug: "pt/dapps/depin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/depin/peaq-network.mdx": {
	id: "pt/dapps/depin/peaq-network.mdx";
  slug: "pt/dapps/depin/peaq-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/depin/robonomics.mdx": {
	id: "pt/dapps/depin/robonomics.mdx";
  slug: "pt/dapps/depin/robonomics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/index.mdx": {
	id: "pt/dapps/index.mdx";
  slug: "pt/dapps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/rwa/centrifuge.mdx": {
	id: "pt/dapps/rwa/centrifuge.mdx";
  slug: "pt/dapps/rwa/centrifuge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/rwa/curio.mdx": {
	id: "pt/dapps/rwa/curio.mdx";
  slug: "pt/dapps/rwa/curio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/rwa/g6networks.mdx": {
	id: "pt/dapps/rwa/g6networks.mdx";
  slug: "pt/dapps/rwa/g6networks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/rwa/index.mdx": {
	id: "pt/dapps/rwa/index.mdx";
  slug: "pt/dapps/rwa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/dapps/rwa/unit-network.md": {
	id: "pt/dapps/rwa/unit-network.md";
  slug: "pt/dapps/rwa/unit-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/dapps/rwa/watr-protocol.md": {
	id: "pt/dapps/rwa/watr-protocol.md";
  slug: "pt/dapps/rwa/watr-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/dapps/rwa/xcavate.mdx": {
	id: "pt/dapps/rwa/xcavate.mdx";
  slug: "pt/dapps/rwa/xcavate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/block-explorers/3xpl.md": {
	id: "pt/tools/block-explorers/3xpl.md";
  slug: "pt/tools/block-explorers/3xpl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/tools/block-explorers/blockchair.md": {
	id: "pt/tools/block-explorers/blockchair.md";
  slug: "pt/tools/block-explorers/blockchair";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/tools/block-explorers/chainspect.md": {
	id: "pt/tools/block-explorers/chainspect.md";
  slug: "pt/tools/block-explorers/chainspect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/tools/block-explorers/index.mdx": {
	id: "pt/tools/block-explorers/index.mdx";
  slug: "pt/tools/block-explorers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/block-explorers/statescan.md": {
	id: "pt/tools/block-explorers/statescan.md";
  slug: "pt/tools/block-explorers/statescan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/tools/block-explorers/subscan.mdx": {
	id: "pt/tools/block-explorers/subscan.mdx";
  slug: "pt/tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/dao-tools/chaosdao-bot.mdx": {
	id: "pt/tools/dao-tools/chaosdao-bot.mdx";
  slug: "pt/tools/dao-tools/chaosdao-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/dao-tools/delegit.mdx": {
	id: "pt/tools/dao-tools/delegit.mdx";
  slug: "pt/tools/dao-tools/delegit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/dao-tools/dotreasury.md": {
	id: "pt/tools/dao-tools/dotreasury.md";
  slug: "pt/tools/dao-tools/dotreasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"pt/tools/dao-tools/index.mdx": {
	id: "pt/tools/dao-tools/index.mdx";
  slug: "pt/tools/dao-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/dao-tools/ogtracker.mdx": {
	id: "pt/tools/dao-tools/ogtracker.mdx";
  slug: "pt/tools/dao-tools/ogtracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/dao-tools/polkassembly.mdx": {
	id: "pt/tools/dao-tools/polkassembly.mdx";
  slug: "pt/tools/dao-tools/polkassembly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/dao-tools/subsquare.mdx": {
	id: "pt/tools/dao-tools/subsquare.mdx";
  slug: "pt/tools/dao-tools/subsquare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/dao-tools/townhall.mdx": {
	id: "pt/tools/dao-tools/townhall.mdx";
  slug: "pt/tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/index.mdx": {
	id: "pt/tools/index.mdx";
  slug: "pt/tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/enkrypt-wallet.mdx": {
	id: "pt/tools/wallets/enkrypt-wallet.mdx";
  slug: "pt/tools/wallets/enkrypt-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/fearless-wallet.mdx": {
	id: "pt/tools/wallets/fearless-wallet.mdx";
  slug: "pt/tools/wallets/fearless-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/index.mdx": {
	id: "pt/tools/wallets/index.mdx";
  slug: "pt/tools/wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/kampela-signer.mdx": {
	id: "pt/tools/wallets/kampela-signer.mdx";
  slug: "pt/tools/wallets/kampela-signer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/mimir.mdx": {
	id: "pt/tools/wallets/mimir.mdx";
  slug: "pt/tools/wallets/mimir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/multix.mdx": {
	id: "pt/tools/wallets/multix.mdx";
  slug: "pt/tools/wallets/multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/nova-wallet.mdx": {
	id: "pt/tools/wallets/nova-wallet.mdx";
  slug: "pt/tools/wallets/nova-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/plutowallet.mdx": {
	id: "pt/tools/wallets/plutowallet.mdx";
  slug: "pt/tools/wallets/plutowallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/polkadot-vault.mdx": {
	id: "pt/tools/wallets/polkadot-vault.mdx";
  slug: "pt/tools/wallets/polkadot-vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/polkagate.mdx": {
	id: "pt/tools/wallets/polkagate.mdx";
  slug: "pt/tools/wallets/polkagate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/polkasafe.mdx": {
	id: "pt/tools/wallets/polkasafe.mdx";
  slug: "pt/tools/wallets/polkasafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/polkawallet.mdx": {
	id: "pt/tools/wallets/polkawallet.mdx";
  slug: "pt/tools/wallets/polkawallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/sporran-wallet.mdx": {
	id: "pt/tools/wallets/sporran-wallet.mdx";
  slug: "pt/tools/wallets/sporran-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/subwallet.mdx": {
	id: "pt/tools/wallets/subwallet.mdx";
  slug: "pt/tools/wallets/subwallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/talisman-wallet.mdx": {
	id: "pt/tools/wallets/talisman-wallet.mdx";
  slug: "pt/tools/wallets/talisman-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"pt/tools/wallets/xsigners.mdx": {
	id: "pt/tools/wallets/xsigners.mdx";
  slug: "pt/tools/wallets/xsigners";
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
"tools/block-explorers/subscan.mdx": {
	id: "tools/block-explorers/subscan.mdx";
  slug: "tools/block-explorers/subscan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dao-tools/chaosdao-bot.mdx": {
	id: "tools/dao-tools/chaosdao-bot.mdx";
  slug: "tools/dao-tools/chaosdao-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dao-tools/delegit.mdx": {
	id: "tools/dao-tools/delegit.mdx";
  slug: "tools/dao-tools/delegit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"tools/dao-tools/ogtracker.mdx": {
	id: "tools/dao-tools/ogtracker.mdx";
  slug: "tools/dao-tools/ogtracker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"tools/dao-tools/townhall.mdx": {
	id: "tools/dao-tools/townhall.mdx";
  slug: "tools/dao-tools/townhall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/apillon.mdx": {
	id: "tools/dev/apillon.mdx";
  slug: "tools/dev/apillon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/bagpipes.mdx": {
	id: "tools/dev/bagpipes.mdx";
  slug: "tools/dev/bagpipes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/chopsticks.mdx": {
	id: "tools/dev/chopsticks.mdx";
  slug: "tools/dev/chopsticks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/dedot.mdx": {
	id: "tools/dev/dedot.mdx";
  slug: "tools/dev/dedot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/frontier.mdx": {
	id: "tools/dev/frontier.mdx";
  slug: "tools/dev/frontier";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/gear-protocol.md": {
	id: "tools/dev/gear-protocol.md";
  slug: "tools/dev/gear-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dev/glove.mdx": {
	id: "tools/dev/glove.mdx";
  slug: "tools/dev/glove";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/index.mdx": {
	id: "tools/dev/index.mdx";
  slug: "tools/dev";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/ink.mdx": {
	id: "tools/dev/ink.mdx";
  slug: "tools/dev/ink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/madara-starknet.mdx": {
	id: "tools/dev/madara-starknet.mdx";
  slug: "tools/dev/madara-starknet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/morekudos.mdx": {
	id: "tools/dev/morekudos.mdx";
  slug: "tools/dev/morekudos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/ocelloids.mdx": {
	id: "tools/dev/ocelloids.mdx";
  slug: "tools/dev/ocelloids";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/papi.mdx": {
	id: "tools/dev/papi.mdx";
  slug: "tools/dev/papi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/parachainbuilder.mdx": {
	id: "tools/dev/parachainbuilder.mdx";
  slug: "tools/dev/parachainbuilder";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/paraspell.mdx": {
	id: "tools/dev/paraspell.mdx";
  slug: "tools/dev/paraspell";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/polkadart.mdx": {
	id: "tools/dev/polkadart.mdx";
  slug: "tools/dev/polkadart";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/polkadot-contract-wizard.mdx": {
	id: "tools/dev/polkadot-contract-wizard.mdx";
  slug: "tools/dev/polkadot-contract-wizard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/polkadot-runtime-releaser.mdx": {
	id: "tools/dev/polkadot-runtime-releaser.mdx";
  slug: "tools/dev/polkadot-runtime-releaser";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/polkadot-sdk.mdx": {
	id: "tools/dev/polkadot-sdk.mdx";
  slug: "tools/dev/polkadot-sdk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/polkadotjs.mdx": {
	id: "tools/dev/polkadotjs.mdx";
  slug: "tools/dev/polkadotjs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/pop-cli.mdx": {
	id: "tools/dev/pop-cli.mdx";
  slug: "tools/dev/pop-cli";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/pop-network.mdx": {
	id: "tools/dev/pop-network.mdx";
  slug: "tools/dev/pop-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/reactivedot.mdx": {
	id: "tools/dev/reactivedot.mdx";
  slug: "tools/dev/reactivedot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/revive.mdx": {
	id: "tools/dev/revive.mdx";
  slug: "tools/dev/revive";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/scout.mdx": {
	id: "tools/dev/scout.mdx";
  slug: "tools/dev/scout";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/simnode.mdx": {
	id: "tools/dev/simnode.mdx";
  slug: "tools/dev/simnode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/smoldot.mdx": {
	id: "tools/dev/smoldot.mdx";
  slug: "tools/dev/smoldot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/solang.mdx": {
	id: "tools/dev/solang.mdx";
  slug: "tools/dev/solang";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/sqd.md": {
	id: "tools/dev/sqd.md";
  slug: "tools/dev/sqd";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dev/subcoin.mdx": {
	id: "tools/dev/subcoin.mdx";
  slug: "tools/dev/subcoin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/subquery.md": {
	id: "tools/dev/subquery.md";
  slug: "tools/dev/subquery";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/dev/substrate-api-sidecar.mdx": {
	id: "tools/dev/substrate-api-sidecar.mdx";
  slug: "tools/dev/substrate-api-sidecar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/substrate-connect.mdx": {
	id: "tools/dev/substrate-connect.mdx";
  slug: "tools/dev/substrate-connect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/subxt.mdx": {
	id: "tools/dev/subxt.mdx";
  slug: "tools/dev/subxt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/sygma.mdx": {
	id: "tools/dev/sygma.mdx";
  slug: "tools/dev/sygma";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/tanssi-network.mdx": {
	id: "tools/dev/tanssi-network.mdx";
  slug: "tools/dev/tanssi-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/txwrapper.mdx": {
	id: "tools/dev/txwrapper.mdx";
  slug: "tools/dev/txwrapper";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/vara-network.mdx": {
	id: "tools/dev/vara-network.mdx";
  slug: "tools/dev/vara-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/dev/zombienet.mdx": {
	id: "tools/dev/zombienet.mdx";
  slug: "tools/dev/zombienet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/index.mdx": {
	id: "tools/index.mdx";
  slug: "tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/chainviz.mdx": {
	id: "tools/miscellaneous/chainviz.mdx";
  slug: "tools/miscellaneous/chainviz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/fidi-web3-analytics.mdx": {
	id: "tools/miscellaneous/fidi-web3-analytics.mdx";
  slug: "tools/miscellaneous/fidi-web3-analytics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/index.mdx": {
	id: "tools/miscellaneous/index.mdx";
  slug: "tools/miscellaneous";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/polkadot-staking-dashboard.mdx": {
	id: "tools/miscellaneous/polkadot-staking-dashboard.mdx";
  slug: "tools/miscellaneous/polkadot-staking-dashboard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/polkadot-telemetry.md": {
	id: "tools/miscellaneous/polkadot-telemetry.md";
  slug: "tools/miscellaneous/polkadot-telemetry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/miscellaneous/polkatax.mdx": {
	id: "tools/miscellaneous/polkatax.mdx";
  slug: "tools/miscellaneous/polkatax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/polkawatch.md": {
	id: "tools/miscellaneous/polkawatch.md";
  slug: "tools/miscellaneous/polkawatch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/miscellaneous/staking-rewards-collector.mdx": {
	id: "tools/miscellaneous/staking-rewards-collector.mdx";
  slug: "tools/miscellaneous/staking-rewards-collector";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/subvt.mdx": {
	id: "tools/miscellaneous/subvt.mdx";
  slug: "tools/miscellaneous/subvt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/wagmedia-bot.mdx": {
	id: "tools/miscellaneous/wagmedia-bot.mdx";
  slug: "tools/miscellaneous/wagmedia-bot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/miscellaneous/web3alert.mdx": {
	id: "tools/miscellaneous/web3alert.mdx";
  slug: "tools/miscellaneous/web3alert";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"tools/wallets/plutowallet.mdx": {
	id: "tools/wallets/plutowallet.mdx";
  slug: "tools/wallets/plutowallet";
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
"tools/wallets/xsigners.mdx": {
	id: "tools/wallets/xsigners.mdx";
  slug: "tools/wallets/xsigners";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
