---
title: Statescan
description: StateScan is a block explorer and analytics platform specifically designed for Substrate-based blockchains.
sidebar:
    label: ✪ Statescan
    order: 2
hero:
  tagline: Block explorer and analytics platform for Substrate-based blockchains,
  image: 
    file: ../../../../assets/tools/block-explorers/statescan.png
  actions:
    - text: Tool
      link: https://www.statescan.io/
      icon: external
    - text: Blog
      link: https://github.com/opensquare-network/
      icon: external
      variant: secondary
---

## Statescan: Open-Source Block Explorer for Substrate (Polkadot, Kusama & Parachains)
Statescan is a 100% open-source, multi-chain block explorer purpose-built for Substrate-based networks. It covers core on-chain data plus pallet-specific views (Identity, Multisig, Vesting, Proxy, Assets/NFTs) and can be self-hosted by parachain teams. This guide explains what Statescan is, how it works, how it compares to alternatives, and how builders and analysts can get practical value from it.


## What is Statescan? (and why it matters)
**Statescan** is an open-source, cost-efficient explorer dedicated to **Substrate** networks—**Polkadot, Kusama, and parachains**. It provides standard explorer views (blocks, extrinsics, events, accounts) **plus pallet-aware analytics** across Identity, Multisig, Vesting, Proxy, and Assets/NFTs. The project is built and maintained by **OpenSquare** (also behind SubSquare and doTreasury) and has served the ecosystem since 2020.

Critically, **Statescan is self-hostable** (statescan-v2), enabling parachain teams to run a chain-specific explorer with their own branding, RPC endpoints, and module coverage—without vendor lock-in.

## ELI5
Think of Polkadot as a city of many neighborhoods (parachains). An explorer is your **city map + security camera replay**. **Statescan** is that map—**open to everyone**, easy to install in your own neighborhood, and with special lenses to see **IDs, shared accounts (multisig), token vesting, proxies, and assets/NFTs**.

## Key features
* **100% open source** with transparent code and community contributions.
* **Multi-chain support** across Polkadot, Kusama, and dozens of parachains.
* **Pallet-aware analytics**: Identity, Multisig (approval flows), Vesting (timelines), Proxy (delegations), and Assets/NFTs (Asset Hub & parachain pallets).
* **Low-cost architecture** designed for ecosystem teams and community deployments.
* **Self-hostable** (statescan-v2) for full control over infra, branding, and data.
* **Ecosystem-friendly**: complements wallets, governance portals, and builder tooling.

## How Statescan works (high level)
1. **Indexers** connect to your chain’s RPC, **scan blocks, extrinsics, and events**, and parse pallet-specific business logic (e.g., `pallet-identity`, `pallet-multisig`, `pallet-vesting`, `pallet-proxy`, `pallet-assets`/`pallet-uniques`).
2. A **backend API** exposes normalized data models for chain entities (blocks, accounts, assets, NFTs, multisig approvals, etc.).
3. A **frontend UI** renders standard explorer pages plus **pallet-specific dashboards** (e.g., identity verifications, multisig approval timelines, vesting schedules, proxy hierarchies, asset catalogs).
4. **Self-hosting** is enabled via the statescan-v2 deployment setup; parachain teams configure nodes, endpoints, and chain metadata to tailor coverage.

## Who Statescan is for
* **Parachain teams** needing a **customizable, open** explorer for mainnets, testnets, and devnets.
* **Data analysts & protocol researchers** who require detailed pallet-level context.
* **Wallets, tooling, and integrators** that embed explorer links for support and UX.
* **OpenGov delegates & community members** tracing asset teleports, NFT lifecycles, and multisig flows.

## Real-world adoption
Statescan is used across multiple Substrate projects and ecosystems, with public instances and self-hosted deployments by parachain teams and testnets. Common use cases include:
* **Parachain-specific explorers** branded to match a project’s identity.
* **Testnet explorers** for dev workflows and QA.
* **Community mirrors** to improve availability and load distribution.

## Statescan vs Subscan vs polkadot.js Apps
**TL;DR:**
* Choose **Statescan** if you want **open source + self-hosting + pallet-aware views**.
* Choose **Subscan** for a mature, hosted **Explorer-as-a-Service** solution and wide network coverage.
* Use **polkadot.js Apps** when you need a **general on-chain UI** for transactions and development workflows.

### Feature comparison
| Feature                                                | **Statescan**                          | **Subscan**                                   | **polkadot.js Apps**                        |
| ------------------------------------------------------ | -------------------------------------- | --------------------------------------------- | ------------------------------------------- |
| Open source                                            | **Yes** (statescan-v2)                 | Mixed (primarily hosted product)              | Yes                                         |
| Self-hostable                                          | **Yes**                                | Limited (commercial hosting typical)          | N/A (UI/client, not an explorer stack)      |
| Multi-chain (Polkadot/Kusama/parachains)               | **Yes** (dozens of chains)             | Yes (very wide coverage)                      | Connects to many networks via endpoints     |
| Pallet-aware modules (Identity/Multisig/Vesting/Proxy) | **Yes**                                | Yes (varies by chain/plan)                    | Raw state views; less opinionated analytics |
| Assets/NFTs (Asset Hub; uniques)                       | **Yes**                                | Yes                                           | Raw state views                             |
| Pricing                                                | Open source; run your own infra        | Commercial EaaS                               | Free client UI                              |
| Typical users                                          | Builders, parachain teams, power users | Foundations/chain teams, exchanges, end-users | Developers, validators, advanced users      |

## Mini-guide: Auditing a Polkadot multisig with Statescan
**Goal:** Verify that a **multisig transfer** reached the required approvals and executed successfully.

1. **Search the multisig account address.** Open the Polkadot (or target chain) Statescan instance and paste the multisig address into search.
2. **Open the Multisig dashboard.** Locate the target **call hash / timepoint** and check the **required threshold** (e.g., 2/3).
3. **Review approvals.** Inspect events/extrinsics such as `asMulti` and `approveAsMulti`. Confirm each **signer** and **timestamp**.
4. **Verify execution.** Open the **extrinsic detail** to confirm **success**, **fee paid**, and **affected accounts**.
5. **Investigate blockers if failed.** Cross-check **proxy relationships** (Proxy view) or **vesting locks** (Vesting view) that could restrict free balance or authorization.

**Why this works:** Statescan’s pallet-aware parsing surfaces the **approval flow** and **execution status**, turning a complex multisig journey into a clear, auditable trail.
## Common pitfalls & pro tips
* **Account vs identity confusion:** Use the **Identity** view to disambiguate identities tied to multiple addresses; it reduces false assumptions in incident reviews.
* **Missing the final approval:** Multisig calls often stall at `n-1` approvals—check the **timepoint** and **signer list** to ensure the last approval was recorded.
* **Vesting timelines:** A transfer may fail due to **insufficient free balance** under vesting locks. Confirm unlock schedules in **Vesting**.
* **Proxy surprises:** Calls can be routed through a **Proxy**; verify the proxy hierarchy to ensure the correct delegate executed the call.
* **Choosing an explorer:** If you need **hosted simplicity** and an **SLA**, Subscan’s EaaS is strong; if you want **code control** and **cost efficiency**, Statescan’s self-hosting fits.
* **Ecosystem coverage:** For some chains, dedicated explorers exist; select the instance that best matches your module needs.

## FAQs
**1) Is Statescan really open source?**
Yes. Statescan provides a 100% open-source, self-hostable codebase (statescan-v2).

**2) Which pallets does Statescan cover out of the box?**
Identity, Multisig, Vesting, Proxy—and assets/NFT modules via Asset Hub and parachain pallets.

**3) How many chains are supported?**
Statescan supports Polkadot, Kusama, and dozens of parachains, with instances commonly added over time.

**4) How does Statescan differ from Subscan?**
Statescan is open and self-hostable; Subscan is a hosted Explorer-as-a-Service with broad coverage and SLAs.

**5) Can my team run Statescan for our parachain/testnet?**
Yes—teams routinely deploy custom Statescan instances for mainnets and testnets.

**6) Does Statescan support NFTs?**
Yes—Statescan implements uniques (NFTs) and asset views, including lifecycle events.

**7) Is polkadot.js Apps an explorer?**
It’s primarily an **on-chain UI** for transactions and chain state. It can display data but isn’t an analytics explorer.

**8) Who maintains Statescan?**
**OpenSquare**, the team behind SubSquare and doTreasury.

## Conclusion
**Statescan** gives the Polkadot ecosystem a **transparent, self-hostable** alternative for deep on-chain visibility—especially valuable for parachain teams and power users who need **pallet-aware analytics** without vendor lock-in. If you’re selecting an explorer stack for a new network or upgrading your analytics UX, **pilot Statescan**, validate the modules you need, and then decide whether to self-host or combine it with a hosted service.
