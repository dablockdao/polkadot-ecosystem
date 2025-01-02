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
"club/archive/wizard-amigos.md": {
	id: "club/archive/wizard-amigos.md";
  slug: "club/archive/wizard-amigos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/antiscam.md": {
	id: "club/bounties/antiscam.md";
  slug: "club/bounties/antiscam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/bridges-bug-bounty.md": {
	id: "club/bounties/bridges-bug-bounty.md";
  slug: "club/bounties/bridges-bug-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/defi-bounty.md": {
	id: "club/bounties/defi-bounty.md";
  slug: "club/bounties/defi-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/dotplay.md": {
	id: "club/bounties/dotplay.md";
  slug: "club/bounties/dotplay";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/events.md": {
	id: "club/bounties/events.md";
  slug: "club/bounties/events";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/ibp.md": {
	id: "club/bounties/ibp.md";
  slug: "club/bounties/ibp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"club/bounties/marketing.md": {
	id: "club/bounties/marketing.md";
  slug: "club/bounties/marketing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/meetups.md": {
	id: "club/bounties/meetups.md";
  slug: "club/bounties/meetups";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/bounties/moderation.md": {
	id: "club/bounties/moderation.md";
  slug: "club/bounties/moderation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"club/bounties/ux-bounty.md": {
	id: "club/bounties/ux-bounty.md";
  slug: "club/bounties/ux-bounty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/business-development/harbour-industrial-capital.mdx": {
	id: "club/business-development/harbour-industrial-capital.mdx";
  slug: "club/business-development/harbour-industrial-capital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/business-development/illusionist-group.md": {
	id: "club/business-development/illusionist-group.md";
  slug: "club/business-development/illusionist-group";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/business-development/polkaport-east.md": {
	id: "club/business-development/polkaport-east.md";
  slug: "club/business-development/polkaport-east";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/business-development/scytale-digital.md": {
	id: "club/business-development/scytale-digital.md";
  slug: "club/business-development/scytale-digital";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"club/daos/apexchimpz.md": {
	id: "club/daos/apexchimpz.md";
  slug: "club/daos/apexchimpz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/cctf-dao.md": {
	id: "club/daos/cctf-dao.md";
  slug: "club/daos/cctf-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/chaosdao.md": {
	id: "club/daos/chaosdao.md";
  slug: "club/daos/chaosdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"club/daos/kappa-sigma-mu.md": {
	id: "club/daos/kappa-sigma-mu.md";
  slug: "club/daos/kappa-sigma-mu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/kusdao.mdx": {
	id: "club/daos/kusdao.mdx";
  slug: "club/daos/kusdao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/daos/lenexus.md": {
	id: "club/daos/lenexus.md";
  slug: "club/daos/lenexus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"club/daos/teddydao.md": {
	id: "club/daos/teddydao.md";
  slug: "club/daos/teddydao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/unitedbloc.md": {
	id: "club/daos/unitedbloc.md";
  slug: "club/daos/unitedbloc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/daos/youdledao.md": {
	id: "club/daos/youdledao.md";
  slug: "club/daos/youdledao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"club/initiatives/alpha-airdrop.mdx": {
	id: "club/initiatives/alpha-airdrop.mdx";
  slug: "club/initiatives/alpha-airdrop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/dotlake.md": {
	id: "club/initiatives/dotlake.md";
  slug: "club/initiatives/dotlake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/index.mdx": {
	id: "club/initiatives/index.mdx";
  slug: "club/initiatives";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/initiatives/oneblock.md": {
	id: "club/initiatives/oneblock.md";
  slug: "club/initiatives/oneblock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/opengov-watch.md": {
	id: "club/initiatives/opengov-watch.md";
  slug: "club/initiatives/opengov-watch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/openguild-labs.md": {
	id: "club/initiatives/openguild-labs.md";
  slug: "club/initiatives/openguild-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/polkadot-blockchain-academy.md": {
	id: "club/initiatives/polkadot-blockchain-academy.md";
  slug: "club/initiatives/polkadot-blockchain-academy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/polkadot-prodigy.md": {
	id: "club/initiatives/polkadot-prodigy.md";
  slug: "club/initiatives/polkadot-prodigy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/subwork.md": {
	id: "club/initiatives/subwork.md";
  slug: "club/initiatives/subwork";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/wagmedia.md": {
	id: "club/initiatives/wagmedia.md";
  slug: "club/initiatives/wagmedia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/initiatives/web3-educhain.md": {
	id: "club/initiatives/web3-educhain.md";
  slug: "club/initiatives/web3-educhain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/media/distractive-agency.mdx": {
	id: "club/media/distractive-agency.mdx";
  slug: "club/media/distractive-agency";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/dotcast.mdx": {
	id: "club/media/dotcast.mdx";
  slug: "club/media/dotcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/kusamarian.mdx": {
	id: "club/media/kusamarian.mdx";
  slug: "club/media/kusamarian";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/parachains-info.mdx": {
	id: "club/media/parachains-info.mdx";
  slug: "club/media/parachains-info";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/polkadot-en-espanol.md": {
	id: "club/media/polkadot-en-espanol.md";
  slug: "club/media/polkadot-en-espanol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/media/polkadot-insider.mdx": {
	id: "club/media/polkadot-insider.mdx";
  slug: "club/media/polkadot-insider";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/polkadot-now.mdx": {
	id: "club/media/polkadot-now.mdx";
  slug: "club/media/polkadot-now";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/polkadot-promoteam-dao.md": {
	id: "club/media/polkadot-promoteam-dao.md";
  slug: "club/media/polkadot-promoteam-dao";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/media/polkadotters.mdx": {
	id: "club/media/polkadotters.mdx";
  slug: "club/media/polkadotters";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/polkafrance.md": {
	id: "club/media/polkafrance.md";
  slug: "club/media/polkafrance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/media/polkaworld.mdx": {
	id: "club/media/polkaworld.mdx";
  slug: "club/media/polkaworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/the-astar-bulletin-tab.md": {
	id: "club/media/the-astar-bulletin-tab.md";
  slug: "club/media/the-astar-bulletin-tab";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/media/the-dots.mdx": {
	id: "club/media/the-dots.mdx";
  slug: "club/media/the-dots";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/vds-academy.mdx": {
	id: "club/media/vds-academy.mdx";
  slug: "club/media/vds-academy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/media/webzero.mdx": {
	id: "club/media/webzero.mdx";
  slug: "club/media/webzero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/4ire-labs.md": {
	id: "club/orgs/4ire-labs.md";
  slug: "club/orgs/4ire-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/amforc.md": {
	id: "club/orgs/amforc.md";
  slug: "club/orgs/amforc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/bld-nodes.md": {
	id: "club/orgs/bld-nodes.md";
  slug: "club/orgs/bld-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/blockdeep-labs.md": {
	id: "club/orgs/blockdeep-labs.md";
  slug: "club/orgs/blockdeep-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/blockshard.md": {
	id: "club/orgs/blockshard.md";
  slug: "club/orgs/blockshard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/bloclick-staking.md": {
	id: "club/orgs/bloclick-staking.md";
  slug: "club/orgs/bloclick-staking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/boosty-labs.md": {
	id: "club/orgs/boosty-labs.md";
  slug: "club/orgs/boosty-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/cardinal-cryptography.md": {
	id: "club/orgs/cardinal-cryptography.md";
  slug: "club/orgs/cardinal-cryptography";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/certhum.md": {
	id: "club/orgs/certhum.md";
  slug: "club/orgs/certhum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/chainsafe.md": {
	id: "club/orgs/chainsafe.md";
  slug: "club/orgs/chainsafe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/coinfabrik.md": {
	id: "club/orgs/coinfabrik.md";
  slug: "club/orgs/coinfabrik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/coinstudio-validator.md": {
	id: "club/orgs/coinstudio-validator.md";
  slug: "club/orgs/coinstudio-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/crifferent.md": {
	id: "club/orgs/crifferent.md";
  slug: "club/orgs/crifferent";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/dominodes.md": {
	id: "club/orgs/dominodes.md";
  slug: "club/orgs/dominodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/dragonstake.md": {
	id: "club/orgs/dragonstake.md";
  slug: "club/orgs/dragonstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/dwellir.md": {
	id: "club/orgs/dwellir.md";
  slug: "club/orgs/dwellir";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/globalstake.md": {
	id: "club/orgs/globalstake.md";
  slug: "club/orgs/globalstake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/helikon-labs.md": {
	id: "club/orgs/helikon-labs.md";
  slug: "club/orgs/helikon-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/iceberg-nodes.md": {
	id: "club/orgs/iceberg-nodes.md";
  slug: "club/orgs/iceberg-nodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/index.mdx": {
	id: "club/orgs/index.mdx";
  slug: "club/orgs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/limechain.md": {
	id: "club/orgs/limechain.md";
  slug: "club/orgs/limechain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/masternode24.md": {
	id: "club/orgs/masternode24.md";
  slug: "club/orgs/masternode24";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/moonsong-labs.md": {
	id: "club/orgs/moonsong-labs.md";
  slug: "club/orgs/moonsong-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/oak-security.md": {
	id: "club/orgs/oak-security.md";
  slug: "club/orgs/oak-security";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/onfinality.md": {
	id: "club/orgs/onfinality.md";
  slug: "club/orgs/onfinality";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/opslayer.md": {
	id: "club/orgs/opslayer.md";
  slug: "club/orgs/opslayer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/p2p-validator.md": {
	id: "club/orgs/p2p-validator.md";
  slug: "club/orgs/p2p-validator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/paranodes.md": {
	id: "club/orgs/paranodes.md";
  slug: "club/orgs/paranodes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/parity-technologies.mdx": {
	id: "club/orgs/parity-technologies.mdx";
  slug: "club/orgs/parity-technologies";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"club/orgs/pathrock.md": {
	id: "club/orgs/pathrock.md";
  slug: "club/orgs/pathrock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/polkachu.md": {
	id: "club/orgs/polkachu.md";
  slug: "club/orgs/polkachu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/polytope-labs.md": {
	id: "club/orgs/polytope-labs.md";
  slug: "club/orgs/polytope-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/project-liberty.md": {
	id: "club/orgs/project-liberty.md";
  slug: "club/orgs/project-liberty";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/protofire.md": {
	id: "club/orgs/protofire.md";
  slug: "club/orgs/protofire";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/purestake.md": {
	id: "club/orgs/purestake.md";
  slug: "club/orgs/purestake";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/r0gue.md": {
	id: "club/orgs/r0gue.md";
  slug: "club/orgs/r0gue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/ryabina.md": {
	id: "club/orgs/ryabina.md";
  slug: "club/orgs/ryabina";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/scio-labs.md": {
	id: "club/orgs/scio-labs.md";
  slug: "club/orgs/scio-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/senseinode.md": {
	id: "club/orgs/senseinode.md";
  slug: "club/orgs/senseinode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/stake-plus.md": {
	id: "club/orgs/stake-plus.md";
  slug: "club/orgs/stake-plus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/stakebaby.md": {
	id: "club/orgs/stakebaby.md";
  slug: "club/orgs/stakebaby";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/stakenode.md": {
	id: "club/orgs/stakenode.md";
  slug: "club/orgs/stakenode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/stakeworld.md": {
	id: "club/orgs/stakeworld.md";
  slug: "club/orgs/stakeworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/staking4all.md": {
	id: "club/orgs/staking4all.md";
  slug: "club/orgs/staking4all";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/stateless-money.md": {
	id: "club/orgs/stateless-money.md";
  slug: "club/orgs/stateless-money";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/telekom-mms.md": {
	id: "club/orgs/telekom-mms.md";
  slug: "club/orgs/telekom-mms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/turboflakes.md": {
	id: "club/orgs/turboflakes.md";
  slug: "club/orgs/turboflakes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/velocity-labs.md": {
	id: "club/orgs/velocity-labs.md";
  slug: "club/orgs/velocity-labs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/web3-foundation.md": {
	id: "club/orgs/web3-foundation.md";
  slug: "club/orgs/web3-foundation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/zeeve.md": {
	id: "club/orgs/zeeve.md";
  slug: "club/orgs/zeeve";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/orgs/zondax.md": {
	id: "club/orgs/zondax.md";
  slug: "club/orgs/zondax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"club/people/gavin-wood.md": {
	id: "club/people/gavin-wood.md";
  slug: "club/people/gavin-wood";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"tools/development/apillon.mdx": {
	id: "tools/development/apillon.mdx";
  slug: "tools/development/apillon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/bagpipes.mdx": {
	id: "tools/development/bagpipes.mdx";
  slug: "tools/development/bagpipes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/dedot.mdx": {
	id: "tools/development/dedot.mdx";
  slug: "tools/development/dedot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/frontier.mdx": {
	id: "tools/development/frontier.mdx";
  slug: "tools/development/frontier";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/gear-protocol.md": {
	id: "tools/development/gear-protocol.md";
  slug: "tools/development/gear-protocol";
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
"tools/development/ink.mdx": {
	id: "tools/development/ink.mdx";
  slug: "tools/development/ink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/madara-starknet.mdx": {
	id: "tools/development/madara-starknet.mdx";
  slug: "tools/development/madara-starknet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/papi.mdx": {
	id: "tools/development/papi.mdx";
  slug: "tools/development/papi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/paraspell.mdx": {
	id: "tools/development/paraspell.mdx";
  slug: "tools/development/paraspell";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/polkadot-sdk.mdx": {
	id: "tools/development/polkadot-sdk.mdx";
  slug: "tools/development/polkadot-sdk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/polkadotjs.mdx": {
	id: "tools/development/polkadotjs.mdx";
  slug: "tools/development/polkadotjs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/pop-cli.mdx": {
	id: "tools/development/pop-cli.mdx";
  slug: "tools/development/pop-cli";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/pop-network.md": {
	id: "tools/development/pop-network.md";
  slug: "tools/development/pop-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/development/reactivedot.mdx": {
	id: "tools/development/reactivedot.mdx";
  slug: "tools/development/reactivedot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/smoldot.mdx": {
	id: "tools/development/smoldot.mdx";
  slug: "tools/development/smoldot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/sqd.md": {
	id: "tools/development/sqd.md";
  slug: "tools/development/sqd";
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
"tools/development/substrate-api-sidecar.mdx": {
	id: "tools/development/substrate-api-sidecar.mdx";
  slug: "tools/development/substrate-api-sidecar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/substrate-connect.mdx": {
	id: "tools/development/substrate-connect.mdx";
  slug: "tools/development/substrate-connect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/subxt.mdx": {
	id: "tools/development/subxt.mdx";
  slug: "tools/development/subxt";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/tanssi-network.mdx": {
	id: "tools/development/tanssi-network.mdx";
  slug: "tools/development/tanssi-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/txwrapper.mdx": {
	id: "tools/development/txwrapper.mdx";
  slug: "tools/development/txwrapper";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/vara-network.mdx": {
	id: "tools/development/vara-network.mdx";
  slug: "tools/development/vara-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/development/zombienet.mdx": {
	id: "tools/development/zombienet.mdx";
  slug: "tools/development/zombienet";
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
"tools/miscellaneous/fidi-web3-analytics.md": {
	id: "tools/miscellaneous/fidi-web3-analytics.md";
  slug: "tools/miscellaneous/fidi-web3-analytics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"tools/miscellaneous/index.mdx": {
	id: "tools/miscellaneous/index.mdx";
  slug: "tools/miscellaneous";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
