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
"club/archive/dotleap.mdx": {
	id: "club/archive/dotleap.mdx";
  slug: "club/archive/dotleap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"club/orgs/infrastructure/globalstake.mdx": {
	id: "club/orgs/infrastructure/globalstake.mdx";
  slug: "club/orgs/infrastructure/globalstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
"es/index.mdx": {
	id: "es/index.mdx";
  slug: "es";
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
"tools/dev/pop-network.md": {
	id: "tools/dev/pop-network.md";
  slug: "tools/dev/pop-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
