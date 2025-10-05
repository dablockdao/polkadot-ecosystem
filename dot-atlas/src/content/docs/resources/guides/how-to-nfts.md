---
title: 'How to Create NFTs on Polkadot (Koda, Chaotic, Unique Network)'
description: 'Learn how to create and sell NFTs on Polkadot with Kodadot. Step-by-step guide for artists and creators.'
sidebar: 
    label: Create NFTs
---

A practical, up-to-date guide to minting and selling NFTs on Polkadot using three routes: **Koda/Kodadot** on Asset Hub, the newly opened **Chaotic (beta)** marketplace, and **Unique Network** (NFT-centric parachain). Includes steps, comparisons, pitfalls, and FAQs—no external links.

## Why mint NFTs on Polkadot
Polkadot combines **low fees**, **shared security**, and **interoperability**. You can mint on a common-good chain (Asset Hub) with broad reach or on a purpose-built parachain (Unique Network) with advanced NFT primitives. Marketplaces like **Koda/Kodadot** and **Chaotic (beta now open)** provide friendly UIs for creators.

## ELI5
* **Asset Hub** = a public gallery where anyone can create a room (collection) and hang pieces (NFTs).
* **Koda/Kodadot** = the concierge/storefront that makes using Asset Hub easy.
* **Chaotic (beta)** = a fresh, curated marketplace experience now open for creators and early adopters.
* **Unique Network** = a building designed just for NFTs, with advanced features for utility and programmability.

## Your main options

### 1) Koda/Kodadot (on Polkadot Asset Hub)
* Mature, creator-friendly UI.
* Fast path to minting and listing on Asset Hub.
* Supports images, audio, video, 3D, and editions; royalties and collection settings included.

### 2) Chaotic (beta) — **now open**
* New flagship marketplace experience for Polkadot.
* Beta is live: you can connect, mint (as available), and list.
* Strong focus on discovery and community momentum during the beta phase.

### 3) Unique Network (NFT-centric parachain)
* Advanced NFT features and dev tooling (Substrate & EVM-style APIs).
* Ideal for custom logic, on-chain utilities, and complex metadata workflows.
* Multiple routes: no-code minting UIs and full developer SDKs.

## Key concepts: Asset Hub, EDs, deposits
* **Existential Deposit (ED):** Minimum native balance to keep an account alive on Asset Hub (commonly 0.01 DOT).
* **Returnable Deposits:** Creating collections/items on Asset Hub requires deposits to deter spam; **burning** items/collections typically unlocks them.
* **Budgeting:** Keep extra DOT for deposits and tx fees beyond the ED.

## Koda/Kodadot: step-by-step

> Target: Polkadot **Asset Hub** (system chain). Wallet examples: **Talisman**, **SubWallet**, **Nova** (extension/desktop as appropriate).

1. **Prepare wallet & funds**
   * Install your Polkadot wallet.
   * XCM-transfer a small amount of **DOT to Asset Hub** (≥ ED + buffer for deposits/fees).

2. **Connect to Koda/Kodadot**
   * Open Koda/Kodadot and connect your Asset Hub account.
   * Verify the account holding the DOT you just moved.

3. **Create a collection**
   * Go to **Create → Collection**.
   * Upload **cover image**, set **Name**, **Description**, and optional **supply cap** (uncheck “Unlimited” to cap).
   * Choose **Chain: Polkadot Asset Hub**.
   * Set **royalties** (percentage) and optional **payout address**.
   * **Sign** to pay the **returnable deposit** and finalize the collection.

4. **Mint NFTs**
   * **Create → NFT**. Upload media (PNG/JPG/GIF/SVG, audio/video/3D).
   * Name, description, **attributes/traits**, supply (editions), and **select the collection**.
   * (Optional) enable **For Sale** and set **price in DOT**.
   * **Sign** to mint (per-item deposit + fees).

5. **Manage & sell**
   * Edit metadata (where supported), list/unlist, transfer, or burn to reclaim deposits.
   * Track primary sales and royalties on secondary trades within supported markets.

## Chaotic (beta): step-by-step
> **Beta is active.** Interfaces and exact flows can evolve—watch the app’s UI cues.

1. **Connect wallet**
   * Use a Polkadot wallet and ensure **DOT on Asset Hub** (≥ ED + buffer).

2. **Create or import collection**
   * If the beta UI supports creating new collections, follow prompts similar to Koda/Kodadot.
   * If importing, point to an existing Asset Hub collection you own.

3. **Mint items**
   * Upload media, set metadata and traits, choose editions/supply.
   * Confirm deposits/fees and sign.

4. **List for sale**
   * Set price (DOT) and listing parameters (fixed price / other modes as available).
   * Confirm and sign the listing transaction.

5. **Promote**
   * Announce on social, share previews, and leverage Chaotic’s beta-phase discovery to reach early collectors.

## Unique Network: step-by-step
**No-code route**
1. Create a Unique Network account.
2. Use the chain’s web minting UI (or partner UIs) to define **collection**, **royalties**, and **metadata**.
3. Upload media; mint items; optionally list on supported markets.

**Developer route**
1. Choose **Substrate SDK** or **EVM-style API**.
2. Define schemas, attributes, and logic (e.g., upgradeable traits, tickets, in-app utility).
3. Script collection creation, minting, and marketplace integration in CI.

**When to pick Unique**
* You need **programmable utility**, unusual ownership logic, or heavier on-chain features than Asset Hub workflows typically offer.

## Feature comparison
| Capability | **Koda/Kodadot (Asset Hub)**             | **Chaotic (Beta)**                       | **Unique Network**                           |
| ---------- | ---------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| Focus      | Mature, creator-friendly UI on Asset Hub | New marketplace experience (beta active) | NFT-centric parachain with advanced features |
| Minting    | Full UI for collections & items          | Beta minting/listing (features evolving) | No-code UI + SDKs (Substrate/EVM)            |
| Costs      | Asset Hub deposits + low tx fees         | Similar, if using Asset Hub              | Chain-specific fees; no Asset Hub deposits   |
| Royalties  | Configurable in flow                     | Supported in marketplace listing (beta)  | Highly flexible via chain features           |
| Best for   | Quick start, broad reach on Polkadot     | Early discovery in a fresh market        | Complex logic & utility-heavy collections    |

## Launch checklist
* [ ] Wallet installed and **Asset Hub funded** (≥ 0.01 DOT + buffer).
* [ ] **Collection basics**: name, cover, description, license, royalty split.
* [ ] **Metadata plan**: traits/attributes schema, versioning, image derivatives.
* [ ] **Storage**: IPFS/Arweave + pinning; keep CIDs manifest.
* [ ] **Editions & pricing**: fixed price, auctions (if supported), allowlist or open.
* [ ] **Reveal plan**: pre-reveal placeholder, final metadata switch.
* [ ] **QA**: test a small “Gen-0” mint end-to-end.
* [ ] **Go-to-market**: teaser thread, spaces/AMAs, collabs, cross-post to communities.

## Common pitfalls & pro tips
**Pitfall:** Funding only the Relay Chain account.
**Fix:** **XCM-transfer DOT to Asset Hub** before minting/listing.

**Pitfall:** Forgetting returnable deposits.
**Fix:** Budget for **collection + per-item deposits + tx fees**; remember you can **reclaim** on burn.

**Pitfall:** Unpinned media/metadata.
**Fix:** Pin files and keep a **CID manifest**; test renders on mobile/desktop.

**Pitfall:** Royalty path not tested.
**Fix:** Mint a low-price test item, run a secondary sale, and verify payouts.

**Pro tips:**
* Use a **cap** for scarcity; document it in the collection description.
* Keep a **press kit** (logo, banners, artist statement) to streamline listings and PR.
* In beta markets (Chaotic), ship **smaller drops** to learn the flow, then scale.

## FAQs
**1) What’s the minimum DOT I need on Asset Hub?**
Keep at least **0.01 DOT** for the ED and extra for deposits/fees.

**2) Are Asset Hub deposits permanent costs?**
No. They are **returnable** when you burn the items/collection.

**3) Can I start on Koda and also list on Chaotic?**
Yes—if both target the same chain (e.g., Asset Hub) and your collection is compatible, you can broaden distribution.

**4) How do I choose between Asset Hub and Unique Network?**
If you want **speed and simplicity**, pick Asset Hub (Koda/Chaotic). If you need **advanced logic/utility**, use Unique.

**5) What media types can I mint?**
Common formats (images, audio, video, 3D) are supported; check the UI for current limits.

**6) How do royalties work?**
Set a royalty % and payout address during collection/NFT creation, then verify behavior on your marketplace.

**7) Can I migrate chains later?**
Yes. You can re-issue a collection elsewhere, but plan for brand continuity and collector communication.

**8) Is Chaotic safe to use during beta?**
Treat beta as **production-lite**: test small, monitor updates, and read all prompts carefully.