---
title: 'How to Create a Memecoin on Polkadot (Asset Hub + Hydration)'
description: 'Learn how to create, register, and manage a memecoin on Polkadot using AssetHub and Hydration with this step-by-step guide.'
sidebar: 
    label: Create Memecoins
---

This guide shows two reliable paths to launch a memecoin on Polkadot: (A) the **manual route**—create an asset on **Asset Hub**, register it on **Hydration**, transfer/seed liquidity, and list; and (B) the **fast route**—use **Hydration’s Memecoin Launchpad** to create, register, and pool liquidity in one flow. Includes concrete parameters, price math, pitfalls, and FAQs.

## What you’re building (ELI5)
You’re minting a brand-new **fungible token** on **Polkadot Asset Hub** (Polkadot’s native assets parachain). Then you make it tradable on **Hydration** (formerly HydraDX), a leading Polkadot DEX, by **registering** the asset and **seeding a liquidity pool** so people can buy/sell it. Optionally, you can use **Hydration’s Memecoin Launchpad** to compress these steps into a single wizard.

## Two launch paths: manual vs. launchpad
| Path                                  | When to choose                                                                                                     | What it does well                                                               | Trade-offs                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **A. Manual (Asset Hub → Hydration)** | You want fine-grained control (IDs, permissions, metadata), or you’re documenting a reproducible on-chain process. | Maximum configurability; transparent extrinsics; great for power users.         | More steps, more room for mis-clicks, takes longer.                                    |
| **B. Hydration Memecoin Launchpad**   | You want speed and convenience with a guided UX.                                                                   | Streamlined creation, registration, and pooling in one flow; beginner-friendly. | Fewer knobs; still need to understand supply/price math to avoid bad initial settings. |

## Prerequisites
* **Wallet & accounts:** Polkadot.js extension (or Talisman/SubWallet/Nova Wallet) with funded accounts on:
  * **Asset Hub (Polkadot)** for creating and minting your token.
  * **Hydration** for registering and seeding liquidity.
* **Fees & balances:** Keep a buffer of **DOT** for fees and pool seeding. On Asset Hub, plan a **minimum of \~12 DOT** to comfortably cover creation + a few extrinsics; more if seeding liquidity.
* **Token parameters decided in advance:**

  * **Name** (e.g., *DaBlock*), **symbol** (e.g., *DBLK*), **decimals** (commonly 10), **minimum balance** (existential deposit per account), **supply & minting policy**, **permissions** (admin, freezer, issuer, burner).

> ⚠️ **Reminder:** Changing some parameters post-launch (like permissions or metadata) can be restricted by who holds admin roles. Decide them **before** launch.

## Path A — Manual: Asset Hub → Hydration

### Step 1: Create the asset on Asset Hub
1. **Open Asset Hub** in Polkadot.js Portal.
2. Navigate to **Network → Assets → Create**.
3. Set:
   * **Name:** `DaBlock`
   * **Symbol:** `DBLK`
   * **Decimals:** `10` (typical on Polkadot; choose what fits your UX math)
   * **Minimum balance (ED):** e.g., `0.0000000001` (helps dust-resilience but don’t set it too high)
   * **Asset ID:** You can pick (e.g., `5555`) or let the chain assign.
4. **Permissions:** Start simple (default roles to your admin account). You can later decentralize (e.g., multisig/DAO).
5. **Create** and sign.
6. **Mint supply:** e.g., mint `32,000,000 DBLK` to your treasury account.

> Tip: Document the **Asset ID**, **admin account**, and **ED**; you’ll reuse them.

### Step 2: Register the asset on Hydration
Hydration must “know” your external Asset Hub token.

1. Switch network to **Hydration** in Polkadot.js Portal.
2. Go to **Developer → Extrinsics**.
3. Use the **asset-registry** extrinsic (often called `register`/`registerExternalAsset` depending on UI). Provide:

   * **Parachain (Location) → Parachain ID:** `1000` *(Asset Hub)*
   * **Pallet instance:** `50` *(assets pallet)*
   * **General index:** your **Asset ID** on Asset Hub (e.g., `5555`)
4. Submit and sign.

### Step 3: Verify registration on-chain
1. In Hydration, go to **Developer → Chain state**.
2. Open **Storage → assetRegistry** (lookup).
3. Query the same **(parachain=1000, instance=50, index=5555)**.
4. Confirm your token metadata & location mapping exist.

### Step 4: XCM transfer tokens to Hydration
1. From **Asset Hub**, use **Developer → Extrinsics** to send an **XCM transfer** of your token to your **Hydration account** (same SS58 or mapped).
2. For the destination, select **Hydration parachain**; include the **asset (DBLK)** and an amount to seed LP.
3. After inclusion/finalization, check **Accounts → Assets** on Hydration; you should see **DBLK** balance.

### Step 5: Create an isolated liquidity pool
1. Open Hydration app and navigate to **Liquidity → Create isolated pool**.
2. Choose the pair: **DBLK / DOT** (or another deep asset like **USDT**).
3. **Seed liquidity** with initial amounts (see *Pricing 101* below).
4. Confirm, sign, and **update metadata** if prompted.
5. Test a tiny **swap** to verify routing and price sanity.

## Path B — Faster: Hydration Memecoin Launchpad
Hydration’s launchpad bundles creation, registration, transfer, and pooling into a guided flow:

1. **Create**
   * **Asset Name:** *DaBlock*
   * **Symbol:** *DBLK*
   * **Total Supply:** e.g., `32,000,000`
2. **Register on Hydration**

   * **Deposit Initial Supply (%):** Choose how much of the supply to move into Hydration at launch (e.g., 10–25%).
   * **Initial Token Price:** Launchpad previews price based on **DOT you deposit** vs **tokens you deposit** into the pool.
3. **Transfer Liquidity (XCM under the hood)**

   * **Deposit DOT to Pool:** Decide DOT amount; larger DOT provides deeper liquidity and lower slippage at start.
4. **Create Pool**

   * Confirm the configuration; the app creates the isolated pool and lists it for trading.

> **Good default heuristic:** Start with a modest pool (enough to avoid wild slippage) and plan subsequent, **transparent top-ups**. Over-seeding at genesis can trap too much treasury at a fragile price.

## Pricing 101: how your initial price is set
Hydration’s AMM follows constant-product basics (**x·y = k**). Your initial **price** is set by the **ratio** of assets you seed:

* Let **x = DBLK deposited**, **y = DOT deposited**.
* **Price of DBLK in DOT** at genesis ≈ `y / x`.
* **Price in USD** ≈ `(y / x) × (DOT price in USD)`.

**Example (do the math carefully):**
* You deposit **10,000,000 DBLK** and **1,000 DOT**.
* Initial **DBLK/DOT** ≈ `1,000 / 10,000,000 = 0.0001 DOT` per DBLK.
* If **DOT = \$5.00**, initial **DBLK ≈ \$0.0005**.

**Implications:**
* Doubling DOT (with same DBLK) doubles the initial price.
* Doubling DBLK (with same DOT) halves it.
* Don’t ignore **decimals**: with 10 decimals, `1.0` on-chain means `10^10` base units.

## Common pitfalls & pro tips

**Asset design & safety**
* **Existential Deposit (ED):** If ED is too high, users can’t hold small balances; too low can create dust/spam issues.
* **Admin/mint/burn roles:** Migrate to a **multisig** or DAO once stable. Publish a **transparency note** about who controls what.
* **Metadata changes:** Some front-ends cache metadata; updates can take time to propagate.

**XCM gotchas**
* **Wrong location triple (para/pallet/index):** If you mistype `1000 / 50 / 5555`, Hydration won’t resolve your token. Always verify in **Chain state**.
* **Fees & keep-alive:** Leave a little DOT on **both** Asset Hub and Hydration accounts to avoid reaping.
* **Asset filters:** Some routers/aggregators only list **registered & verified** assets. Complete registration.

**Liquidity & price hygiene**
* **Too little liquidity:** Causes wild slippage, scary charts, and poor UX.
* **Too much at wrong ratio:** Locks in a bad implied valuation. Start balanced; plan incremental adds.
* **Avoid honeypot optics:** Enable **both** buy and sell routes; test swaps both ways from a fresh wallet.

**Comms & compliance**
* **No investment advice:** Memecoins are speculative. Add a plain-English disclaimer on your page.
* **Disclose tokenomics:** Supply, unlocks, admin keys, treasury policy, and any taxes/fees (ideally **none**).

## FAQs
**1) What balances do I need to start?**
Have **DOT on Asset Hub** (creation + XCM fees) and **DOT on Hydration** (pool seeding). Budget more for liquidity than for creation.

**2) Can I change decimals or symbol later?**
Decimals are effectively **baked in**—don’t plan to change them post-launch. Symbols and names can be updated as metadata but may take time to propagate across UIs.

**3) Do I need a unique Asset ID?**
On **Asset Hub**, the **Asset ID** must be unique **on that chain**. Hydration maps your Asset Hub ID via **(parachain=1000, pallet=50, index=ID)**.

**4) Should I pair with DOT or USDT?**
**DOT** is the most common base on Hydration. **USDT** gives cleaner USD pricing. Many projects launch with **DOT** first, then expand.

**5) How do I avoid a “honeypot” pool?**
Ensure your pool allows **both directions** of trade and that routing is enabled. Make a small test **buy and sell** from a fresh wallet post-launch.

**6) What’s a safe initial liquidity size?**
There’s no one-size-fits-all. A **rule of thumb**: enough DOT so a **\$100–\$500** trade moves price by only **a few percent**. You can top up later.

**7) Can I renounce admin or move to multisig/DAO?**
Yes. Transfer roles to a **multisig** (e.g., 2-of-3) or to a DAO pallet/account. Announce it publicly for trust.

**8) How do fees work across parachains?**
XCM **weighs** messages and charges fees in supported assets. Always keep a small DOT buffer on both sides.

## Conclusion
Launching a memecoin on Polkadot is straightforward and transparent. **Power users** can follow the **manual Asset Hub → Hydration** route with full control; **creators who value speed** can use the **Hydration Memecoin Launchpad** to get live in minutes. Either way, set sane token parameters, seed balanced liquidity, and communicate your tokenomics clearly.


### Feature comparison table (manual vs launchpad)
| Feature        | Manual (Asset Hub → Hydration) | Hydration Memecoin Launchpad |
| -------------- | ------------------------------ | ---------------------------- |
| Asset creation | Full control (ID, ED, roles)   | Assisted form                |
| Registration   | Manual extrinsic               | Automatic                    |
| XCM transfer   | Manual                         | Automatic                    |
| Pool creation  | Manual isolated pool           | One-click                    |
| Time to launch | Longer                         | Short                        |
| Best for       | Power users, auditors          | Creators, speed              |
