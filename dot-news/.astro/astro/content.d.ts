declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
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
"guides/analyzing-polkadot-stablecoins-usdc-and-usdt-in-the-assethub.md": {
	id: "guides/analyzing-polkadot-stablecoins-usdc-and-usdt-in-the-assethub.md";
  slug: "guides/analyzing-polkadot-stablecoins-usdc-and-usdt-in-the-assethub";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/beginners-guide-to-polkadot-proxy-accounts.md": {
	id: "guides/beginners-guide-to-polkadot-proxy-accounts.md";
  slug: "guides/beginners-guide-to-polkadot-proxy-accounts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/beginners-guide-to-polkadot-smart-contracts.md": {
	id: "guides/beginners-guide-to-polkadot-smart-contracts.md";
  slug: "guides/beginners-guide-to-polkadot-smart-contracts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/beguinners-guide-to-participating-in-the-polimec-plmc-airdrop.md": {
	id: "guides/beguinners-guide-to-participating-in-the-polimec-plmc-airdrop.md";
  slug: "guides/beguinners-guide-to-participating-in-the-polimec-plmc-airdrop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/creating-polkadot-multi-signature-accounts-multix.md": {
	id: "guides/creating-polkadot-multi-signature-accounts-multix.md";
  slug: "guides/creating-polkadot-multi-signature-accounts-multix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/dedot-javascript-typescript-client-polkadot-substrate-chains.md": {
	id: "guides/dedot-javascript-typescript-client-polkadot-substrate-chains.md";
  slug: "guides/dedot-javascript-typescript-client-polkadot-substrate-chains";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/delegation-and-voting-in-polkadot-opengov-guide.md": {
	id: "guides/delegation-and-voting-in-polkadot-opengov-guide.md";
  slug: "guides/delegation-and-voting-in-polkadot-opengov-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/elves-protocol-redefining-blockchain-auditing-and-security.md": {
	id: "guides/elves-protocol-redefining-blockchain-auditing-and-security.md";
  slug: "guides/elves-protocol-redefining-blockchain-auditing-and-security";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/ethereum-forks-vs-forkless-upgrades-with-polkadot-runtime.md": {
	id: "guides/ethereum-forks-vs-forkless-upgrades-with-polkadot-runtime.md";
  slug: "guides/ethereum-forks-vs-forkless-upgrades-with-polkadot-runtime";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/grandpa-vs-tendermint-consensus-mechanisms-comparison.md": {
	id: "guides/grandpa-vs-tendermint-consensus-mechanisms-comparison.md";
  slug: "guides/grandpa-vs-tendermint-consensus-mechanisms-comparison";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/guide-to-polkadot-multisig-solutions-talisman-signet.md": {
	id: "guides/guide-to-polkadot-multisig-solutions-talisman-signet.md";
  slug: "guides/guide-to-polkadot-multisig-solutions-talisman-signet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/guide-to-polkadot-security-essential-steps-for-beginners.md": {
	id: "guides/guide-to-polkadot-security-essential-steps-for-beginners.md";
  slug: "guides/guide-to-polkadot-security-essential-steps-for-beginners";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/guide-to-secure-storage-of-assets-in-the-polkadot-ecosystem.md": {
	id: "guides/guide-to-secure-storage-of-assets-in-the-polkadot-ecosystem.md";
  slug: "guides/guide-to-secure-storage-of-assets-in-the-polkadot-ecosystem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/guide-to-setting-up-and-using-deloitte-kyc-credentials.md": {
	id: "guides/guide-to-setting-up-and-using-deloitte-kyc-credentials.md";
  slug: "guides/guide-to-setting-up-and-using-deloitte-kyc-credentials";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-check-your-mythos-airdrop-allocation.md": {
	id: "guides/how-to-check-your-mythos-airdrop-allocation.md";
  slug: "guides/how-to-check-your-mythos-airdrop-allocation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-claim-opengov-deposits-on-polkadot-and-kusama.md": {
	id: "guides/how-to-claim-opengov-deposits-on-polkadot-and-kusama.md";
  slug: "guides/how-to-claim-opengov-deposits-on-polkadot-and-kusama";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-create-a-memecoin-on-polkadot-a-step-by-step-guide.md": {
	id: "guides/how-to-create-a-memecoin-on-polkadot-a-step-by-step-guide.md";
  slug: "guides/how-to-create-a-memecoin-on-polkadot-a-step-by-step-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-create-an-nft-with-unique-network-beginners-guide.md": {
	id: "guides/how-to-create-an-nft-with-unique-network-beginners-guide.md";
  slug: "guides/how-to-create-an-nft-with-unique-network-beginners-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-create-polkadot-nft-collection-kodadot.md": {
	id: "guides/how-to-create-polkadot-nft-collection-kodadot.md";
  slug: "guides/how-to-create-polkadot-nft-collection-kodadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-earn-passive-income-with-subsocial-guide.md": {
	id: "guides/how-to-earn-passive-income-with-subsocial-guide.md";
  slug: "guides/how-to-earn-passive-income-with-subsocial-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-stake-dot-tokens-polkadot-beginners-guide.md": {
	id: "guides/how-to-stake-dot-tokens-polkadot-beginners-guide.md";
  slug: "guides/how-to-stake-dot-tokens-polkadot-beginners-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-use-paseo-network-new-polkadot-testnet.md": {
	id: "guides/how-to-use-paseo-network-new-polkadot-testnet.md";
  slug: "guides/how-to-use-paseo-network-new-polkadot-testnet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-use-polkadot-vault-a-technical-guide.md": {
	id: "guides/how-to-use-polkadot-vault-a-technical-guide.md";
  slug: "guides/how-to-use-polkadot-vault-a-technical-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/how-to-vote-in-polkadot-opengov-with-vdot-bifrost-liquid-staking.md": {
	id: "guides/how-to-vote-in-polkadot-opengov-with-vdot-bifrost-liquid-staking.md";
  slug: "guides/how-to-vote-in-polkadot-opengov-with-vdot-bifrost-liquid-staking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/index.mdx": {
	id: "guides/index.mdx";
  slug: "guides";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/ink-smart-contracts-tools-in-the-polkadot-ecosystem.md": {
	id: "guides/ink-smart-contracts-tools-in-the-polkadot-ecosystem.md";
  slug: "guides/ink-smart-contracts-tools-in-the-polkadot-ecosystem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/introduction-guide-to-polkadot-coretime-sales.md": {
	id: "guides/introduction-guide-to-polkadot-coretime-sales.md";
  slug: "guides/introduction-guide-to-polkadot-coretime-sales";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/introduction-guide-to-polkadot-elastic-scaling-new-feature.md": {
	id: "guides/introduction-guide-to-polkadot-elastic-scaling-new-feature.md";
  slug: "guides/introduction-guide-to-polkadot-elastic-scaling-new-feature";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/introduction-to-polkadot-beefy-for-cross-chain-bridging.md": {
	id: "guides/introduction-to-polkadot-beefy-for-cross-chain-bridging.md";
  slug: "guides/introduction-to-polkadot-beefy-for-cross-chain-bridging";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/introduction-to-polkadot-block-production-with-safrole.md": {
	id: "guides/introduction-to-polkadot-block-production-with-safrole.md";
  slug: "guides/introduction-to-polkadot-block-production-with-safrole";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/introduction-to-polkadot-light-clients-guide.md": {
	id: "guides/introduction-to-polkadot-light-clients-guide.md";
  slug: "guides/introduction-to-polkadot-light-clients-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/introduction-to-polkadot-minimal-relay-proposal.md": {
	id: "guides/introduction-to-polkadot-minimal-relay-proposal.md";
  slug: "guides/introduction-to-polkadot-minimal-relay-proposal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/learn-about-existential-deposit-keep-alive-transfers-on-polkadot.md": {
	id: "guides/learn-about-existential-deposit-keep-alive-transfers-on-polkadot.md";
  slug: "guides/learn-about-existential-deposit-keep-alive-transfers-on-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/managing-polkadot-nomination-pools-guide-staking-dashboard.md": {
	id: "guides/managing-polkadot-nomination-pools-guide-staking-dashboard.md";
  slug: "guides/managing-polkadot-nomination-pools-guide-staking-dashboard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/nominating-validators-vs-joining-nomination-pools-on-polkadot.md": {
	id: "guides/nominating-validators-vs-joining-nomination-pools-on-polkadot.md";
  slug: "guides/nominating-validators-vs-joining-nomination-pools-on-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/phala-phat-contracts-guide-unlocking-off-chain-computation.md": {
	id: "guides/phala-phat-contracts-guide-unlocking-off-chain-computation.md";
  slug: "guides/phala-phat-contracts-guide-unlocking-off-chain-computation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/polkadot-bounties-guide-multisigs-proxies-adam-steeber.md": {
	id: "guides/polkadot-bounties-guide-multisigs-proxies-adam-steeber.md";
  slug: "guides/polkadot-bounties-guide-multisigs-proxies-adam-steeber";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/polkadot-ethereum-snowbridge-guide-for-new-users.md": {
	id: "guides/polkadot-ethereum-snowbridge-guide-for-new-users.md";
  slug: "guides/polkadot-ethereum-snowbridge-guide-for-new-users";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/polkadot-memecoins-launchpad-with-hydration-memepad-guide.md": {
	id: "guides/polkadot-memecoins-launchpad-with-hydration-memepad-guide.md";
  slug: "guides/polkadot-memecoins-launchpad-with-hydration-memepad-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/polkadot-open-source-stack-tools-guide.md": {
	id: "guides/polkadot-open-source-stack-tools-guide.md";
  slug: "guides/polkadot-open-source-stack-tools-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/polkadot-security-hub-resources.md": {
	id: "guides/polkadot-security-hub-resources.md";
  slug: "guides/polkadot-security-hub-resources";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/quic-protocol-role-jam-chains-networking-architecture.md": {
	id: "guides/quic-protocol-role-jam-chains-networking-architecture.md";
  slug: "guides/quic-protocol-role-jam-chains-networking-architecture";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/spree-shared-protected-runtime-execution-enclaves-in-polkadot.md": {
	id: "guides/spree-shared-protected-runtime-execution-enclaves-in-polkadot.md";
  slug: "guides/spree-shared-protected-runtime-execution-enclaves-in-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/step-by-step-guide-to-portacipate-in-polkadot-opengov.md": {
	id: "guides/step-by-step-guide-to-portacipate-in-polkadot-opengov.md";
  slug: "guides/step-by-step-guide-to-portacipate-in-polkadot-opengov";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/understanding-polkadot-opengov-tracks-guide.md": {
	id: "guides/understanding-polkadot-opengov-tracks-guide.md";
  slug: "guides/understanding-polkadot-opengov-tracks-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/understanding-polkadot-xcm-a-comprehensive-guide.md": {
	id: "guides/understanding-polkadot-xcm-a-comprehensive-guide.md";
  slug: "guides/understanding-polkadot-xcm-a-comprehensive-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/using-the-polkadot-ledger-app-a-beginners-guide.md": {
	id: "guides/using-the-polkadot-ledger-app-a-beginners-guide.md";
  slug: "guides/using-the-polkadot-ledger-app-a-beginners-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/what-are-the-polkadot-proxy-accounts.md": {
	id: "guides/what-are-the-polkadot-proxy-accounts.md";
  slug: "guides/what-are-the-polkadot-proxy-accounts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/what-is-polkadot-agile-coretime.md": {
	id: "guides/what-is-polkadot-agile-coretime.md";
  slug: "guides/what-is-polkadot-agile-coretime";
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
"lists/10-key-aspects-of-the-polkadot-fellowship.md": {
	id: "lists/10-key-aspects-of-the-polkadot-fellowship.md";
  slug: "lists/10-key-aspects-of-the-polkadot-fellowship";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/10-major-polkadot-developments-april-2024.md": {
	id: "lists/10-major-polkadot-developments-april-2024.md";
  slug: "lists/10-major-polkadot-developments-april-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/5-reasons-kusama-is-the-catalyst-for-blockchain-innovation.md": {
	id: "lists/5-reasons-kusama-is-the-catalyst-for-blockchain-innovation.md";
  slug: "lists/5-reasons-kusama-is-the-catalyst-for-blockchain-innovation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/5-ways-to-get-involved-in-polkadot-a-comprehensive-guide.md": {
	id: "lists/5-ways-to-get-involved-in-polkadot-a-comprehensive-guide.md";
  slug: "lists/5-ways-to-get-involved-in-polkadot-a-comprehensive-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/best-moonbeam-gaming-projects.md": {
	id: "lists/best-moonbeam-gaming-projects.md";
  slug: "lists/best-moonbeam-gaming-projects";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/best-polkadot-ecosystem-bounties.md": {
	id: "lists/best-polkadot-ecosystem-bounties.md";
  slug: "lists/best-polkadot-ecosystem-bounties";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/index.mdx": {
	id: "lists/index.mdx";
  slug: "lists";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"lists/top-15-peaq-ecosystem-projects-driving-the-future-of-depin.md": {
	id: "lists/top-15-peaq-ecosystem-projects-driving-the-future-of-depin.md";
  slug: "lists/top-15-peaq-ecosystem-projects-driving-the-future-of-depin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/top-5-frontend-tools-for-polkadot-development.md": {
	id: "lists/top-5-frontend-tools-for-polkadot-development.md";
  slug: "lists/top-5-frontend-tools-for-polkadot-development";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/top-5-moonbeam-defi-projects-to-watch-in-2024.md": {
	id: "lists/top-5-moonbeam-defi-projects-to-watch-in-2024.md";
  slug: "lists/top-5-moonbeam-defi-projects-to-watch-in-2024";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"lists/top-polkadot-asset-hub-dex-uis.md": {
	id: "lists/top-polkadot-asset-hub-dex-uis.md";
  slug: "lists/top-polkadot-asset-hub-dex-uis";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"news/approval-based-committee-voting-on-the-polkadot-blockchain.mdx": {
	id: "news/approval-based-committee-voting-on-the-polkadot-blockchain.mdx";
  slug: "news/approval-based-committee-voting-on-the-polkadot-blockchain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/cardano-partnerchain-framework-built-on-substrate.mdx": {
	id: "news/cardano-partnerchain-framework-built-on-substrate.mdx";
  slug: "news/cardano-partnerchain-framework-built-on-substrate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/cardano-polkadot-bridge-bridging-two-powerhouses-of-blockchain.mdx": {
	id: "news/cardano-polkadot-bridge-bridging-two-powerhouses-of-blockchain.mdx";
  slug: "news/cardano-polkadot-bridge-bridging-two-powerhouses-of-blockchain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/decentralizing-tiktok-with-polkadot-solution-to-the-us-ban.mdx": {
	id: "news/decentralizing-tiktok-with-polkadot-solution-to-the-us-ban.mdx";
  slug: "news/decentralizing-tiktok-with-polkadot-solution-to-the-us-ban";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/developer-onboarding-in-the-polkadot-ecosystem-with-kudos.mdx": {
	id: "news/developer-onboarding-in-the-polkadot-ecosystem-with-kudos.mdx";
  slug: "news/developer-onboarding-in-the-polkadot-ecosystem-with-kudos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/elastic-scaling-polkadot-parachains-cumulus-node-mvp.mdx": {
	id: "news/elastic-scaling-polkadot-parachains-cumulus-node-mvp.mdx";
  slug: "news/elastic-scaling-polkadot-parachains-cumulus-node-mvp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/expected-jam-launch-on-july-2025.mdx": {
	id: "news/expected-jam-launch-on-july-2025.mdx";
  slug: "news/expected-jam-launch-on-july-2025";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/exploring-reactive-dot-tool-for-polkadot-development.mdx": {
	id: "news/exploring-reactive-dot-tool-for-polkadot-development.mdx";
  slug: "news/exploring-reactive-dot-tool-for-polkadot-development";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/improving-polkadot-developer-experience.mdx": {
	id: "news/improving-polkadot-developer-experience.mdx";
  slug: "news/improving-polkadot-developer-experience";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/improving-transparency-polkadot-opengov-bounties.mdx": {
	id: "news/improving-transparency-polkadot-opengov-bounties.mdx";
  slug: "news/improving-transparency-polkadot-opengov-bounties";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/integration-of-move-vm-with-substrate.mdx": {
	id: "news/integration-of-move-vm-with-substrate.mdx";
  slug: "news/integration-of-move-vm-with-substrate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/introducing-polkadot-plaza-a-vision-for-the-future-of-polkadot.mdx": {
	id: "news/introducing-polkadot-plaza-a-vision-for-the-future-of-polkadot.mdx";
  slug: "news/introducing-polkadot-plaza-a-vision-for-the-future-of-polkadot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/introducing-the-polkadot-mobile-app-for-blockchain-mass-adoption.mdx": {
	id: "news/introducing-the-polkadot-mobile-app-for-blockchain-mass-adoption.mdx";
  slug: "news/introducing-the-polkadot-mobile-app-for-blockchain-mass-adoption";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/introduction-to-the-new-polkadot-ledger-app.mdx": {
	id: "news/introduction-to-the-new-polkadot-ledger-app.mdx";
  slug: "news/introduction-to-the-new-polkadot-ledger-app";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/lionel-messi-polkadot-dao-blockchain-marketing.mdx": {
	id: "news/lionel-messi-polkadot-dao-blockchain-marketing.mdx";
  slug: "news/lionel-messi-polkadot-dao-blockchain-marketing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/new-polkadot-education-app.mdx": {
	id: "news/new-polkadot-education-app.mdx";
  slug: "news/new-polkadot-education-app";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/new-polkadot-head-ambassador-role-and-its-10000-salary.mdx": {
	id: "news/new-polkadot-head-ambassador-role-and-its-10000-salary.mdx";
  slug: "news/new-polkadot-head-ambassador-role-and-its-10000-salary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/new-polkadot-logo-web-rebranding.mdx": {
	id: "news/new-polkadot-logo-web-rebranding.mdx";
  slug: "news/new-polkadot-logo-web-rebranding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/opengov-direction-proactive-polkadot-ecosystem-agents.mdx": {
	id: "news/opengov-direction-proactive-polkadot-ecosystem-agents.mdx";
  slug: "news/opengov-direction-proactive-polkadot-ecosystem-agents";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/poke-initiative-for-polkadot-enterprise-and-government-adoption.mdx": {
	id: "news/poke-initiative-for-polkadot-enterprise-and-government-adoption.mdx";
  slug: "news/poke-initiative-for-polkadot-enterprise-and-government-adoption";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-community-driven-indy-500-sponsorship-for-conor-daly.mdx": {
	id: "news/polkadot-community-driven-indy-500-sponsorship-for-conor-daly.mdx";
  slug: "news/polkadot-community-driven-indy-500-sponsorship-for-conor-daly";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-coretime-chain-launch.mdx": {
	id: "news/polkadot-coretime-chain-launch.mdx";
  slug: "news/polkadot-coretime-chain-launch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-course-2024-for-new-users-at-edx.mdx": {
	id: "news/polkadot-course-2024-for-new-users-at-edx.mdx";
  slug: "news/polkadot-course-2024-for-new-users-at-edx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-dao-spends-in-2023-by-category.mdx": {
	id: "news/polkadot-dao-spends-in-2023-by-category.mdx";
  slug: "news/polkadot-dao-spends-in-2023-by-category";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-decoded-2024-tickets.mdx": {
	id: "news/polkadot-decoded-2024-tickets.mdx";
  slug: "news/polkadot-decoded-2024-tickets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-enables-governance-for-nomination-pool-stakers.mdx": {
	id: "news/polkadot-enables-governance-for-nomination-pool-stakers.mdx";
  slug: "news/polkadot-enables-governance-for-nomination-pool-stakers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-expands-validator-set-from-297-to-400.mdx": {
	id: "news/polkadot-expands-validator-set-from-297-to-400.mdx";
  slug: "news/polkadot-expands-validator-set-from-297-to-400";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-invarch-network-airdrop-varch.mdx": {
	id: "news/polkadot-invarch-network-airdrop-varch.mdx";
  slug: "news/polkadot-invarch-network-airdrop-varch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-may-2024-ecosystem-report-key-metrics-and-insights.mdx": {
	id: "news/polkadot-may-2024-ecosystem-report-key-metrics-and-insights.mdx";
  slug: "news/polkadot-may-2024-ecosystem-report-key-metrics-and-insights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-opengov-by-web3-foundations-decentralized-voices.mdx": {
	id: "news/polkadot-opengov-by-web3-foundations-decentralized-voices.mdx";
  slug: "news/polkadot-opengov-by-web3-foundations-decentralized-voices";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/polkadot-staking-changes-dynamic-unbonding-period.mdx": {
	id: "news/polkadot-staking-changes-dynamic-unbonding-period.mdx";
  slug: "news/polkadot-staking-changes-dynamic-unbonding-period";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/reduction-of-polkadot-token-dot-inflation.mdx": {
	id: "news/reduction-of-polkadot-token-dot-inflation.mdx";
  slug: "news/reduction-of-polkadot-token-dot-inflation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/securing-polkadot-quantum-generated-randomness.mdx": {
	id: "news/securing-polkadot-quantum-generated-randomness.mdx";
  slug: "news/securing-polkadot-quantum-generated-randomness";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/shape-polkadots-future-with-the-jam-prize-10m-dot.mdx": {
	id: "news/shape-polkadots-future-with-the-jam-prize-10m-dot.mdx";
  slug: "news/shape-polkadots-future-with-the-jam-prize-10m-dot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/tapdot-simplifying-polkadot-with-one-click-blockchain-actions.mdx": {
	id: "news/tapdot-simplifying-polkadot-with-one-click-blockchain-actions.mdx";
  slug: "news/tapdot-simplifying-polkadot-with-one-click-blockchain-actions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/the-jam-toaster-testing-at-scale-for-the-future-of-blockchain.mdx": {
	id: "news/the-jam-toaster-testing-at-scale-for-the-future-of-blockchain.mdx";
  slug: "news/the-jam-toaster-testing-at-scale-for-the-future-of-blockchain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/the-polkadot-kusama-bridge-is-now-live.mdx": {
	id: "news/the-polkadot-kusama-bridge-is-now-live.mdx";
  slug: "news/the-polkadot-kusama-bridge-is-now-live";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/theories-of-daos-treasury-management-polkadot-treasury.mdx": {
	id: "news/theories-of-daos-treasury-management-polkadot-treasury.mdx";
  slug: "news/theories-of-daos-treasury-management-polkadot-treasury";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/trustless-liquidity-with-snowbridge-bridging-polkadot-and-ethereum.mdx": {
	id: "news/trustless-liquidity-with-snowbridge-bridging-polkadot-and-ethereum.mdx";
  slug: "news/trustless-liquidity-with-snowbridge-bridging-polkadot-and-ethereum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/unifying-polkadot-address-formats.mdx": {
	id: "news/unifying-polkadot-address-formats.mdx";
  slug: "news/unifying-polkadot-address-formats";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/web3-foundation-grants-program-round-20.mdx": {
	id: "news/web3-foundation-grants-program-round-20.mdx";
  slug: "news/web3-foundation-grants-program-round-20";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/what-is-the-polkadot-blockchain-academys-impact-on-the-ecosystem.mdx": {
	id: "news/what-is-the-polkadot-blockchain-academys-impact-on-the-ecosystem.mdx";
  slug: "news/what-is-the-polkadot-blockchain-academys-impact-on-the-ecosystem";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"news/xcm-tracer-tool-tracking-cross-chain-messages.mdx": {
	id: "news/xcm-tracer-tool-tracking-cross-chain-messages.mdx";
  slug: "news/xcm-tracer-tool-tracking-cross-chain-messages";
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
