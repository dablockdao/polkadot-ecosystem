---
title: Polkadot Stablecoins 101 - What to Use, How They Work, and Where to Start (2025)
sidebar: 
    label: Stablecoins 101
---

This guide explains **Polkadot stablecoins**—what they are, the main options in 2025 (USDC, USDT, HOLLAR), how XCM & Asset Hub make them move across parachains, plus setup steps, pitfalls, FAQs, and trusted sources to verify each claim.

## Why stablecoins on Polkadot? (TL;DR + ELI5)
**TL;DR:** Stablecoins let you settle payments, quote prices, and run DeFi strategies without constant price swings. On **Polkadot**, they benefit from **parachain specialization** and **XCM**, so a dollar you mint/hold on the **Asset Hub** can be used on DeFi parachains (e.g., trading on Moonbeam, liquidity on Hydration) with native security and low friction.

**ELI5:** Think of Polkadot as a city of districts (parachains). **Asset Hub** is the city’s mint & vault for tokens; **XCM** is the safe road system connecting districts. You can “mint” dollars (USDC) at the mint, then drive them safely to whichever district you want to use them in.

## Core concepts: Asset Hub, XCM, native vs bridged
* **Asset Hub (formerly Statemint):** Polkadot’s system parachain for issuing and managing fungible/non-fungible assets. It is the **canonical home** for native USDC on Polkadot and the place many teams register assets before moving them via XCM.
* **XCM (Cross-Consensus Messaging):** The protocol that lets assets move between parachains. Send USDC from Asset Hub to a parachain DEX, then back again when needed. (Circle also notes you must return to Asset Hub before depositing USDC back into Circle.) 
* **Native vs bridged:**
  * *Native* = minted/issued directly on Polkadot (e.g., **USDC on Asset Hub**, **USDT on Asset Hub**).
  * *Bridged/wrapped* = brought from another chain via a bridge or compatibility layer. **Best practice on Polkadot DeFi in 2025 is to prefer native where possible** for simpler redemption and fewer trust assumptions. 

## The Polkadot stablecoin landscape (2025)
### 1) USDC (native on Asset Hub)
**What it is:** Circle’s fiat-backed USD stablecoin, **natively issued on Polkadot Asset Hub** since 2023; fully supported by Circle Mint/APIs for mint/redeem on Asset Hub. Move to parachains via XCM. **To redeem via Circle, you must route USDC back to Asset Hub.** 

**Where it’s used:** Commonly transferred from Asset Hub to DeFi parachains (e.g., Moonbeam for EVM DeFi, Hydration for omnipool liquidity) via XCM; analytics reports show USDC remains a dominant stablecoin in Moonbeam DeFi activity.

### 2) USDT (native on Asset Hub)
**What it is:** Tether’s fiat-backed USD stablecoin; launched support for Polkadot, with availability via the Polkadot system chain (now Asset Hub). Parachains can accept USDT via XCM channels. 

### 3) HOLLAR (Hydration)
**What it is:** **Hydration’s decentralized, over-collateralized stablecoin** designed to target \~\$1, minted against crypto collateral and integrated tightly with Hydration’s Omnipool/DeFi suite. As of September 2025, docs and team communications describe HOLLAR as native to Hydration’s stack with over-collateralization and stability mechanisms. 

> Note: HOLLAR is designed as a decentralized, crypto-collateralized model (think DAI-style but Polkadot-native). Always check current launch/composability details in the official docs or announcements before production use. 

## Feature comparison: USDC vs USDT vs HOLLAR
| Feature              | **USDC (Asset Hub)**                                                                           | **USDT (Asset Hub)**                                      | **HOLLAR (Hydration)**                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Issuer / Model       | Circle; fiat-backed reserves                                                                   | Tether; fiat-backed reserves                              | Hydration; **over-collateralized crypto**                                           |
| Where it’s native    | **Polkadot Asset Hub**                                                                         | **Polkadot Asset Hub**                                    | Hydration (HydraDX)                                                                 |
| XCM support          | Yes; **transfer from Asset Hub to parachains**; must return to Asset Hub for Circle redemption | Yes; similar XCM pathing to supported parachains          | Expected via Hydration integrations; check latest docs for cross-chain availability |
| Primary use cases    | Payments, stable DeFi base pair, settlement                                                    | Liquidity, trading pairs                                  | On-protocol borrowing/liquidity, Omnipool strategies                                |
| Redemption / convert | Circle Mint/APIs for Asset-Hub native USDC                                                     | Tether mechanisms & supporting exchanges                  | Redeem by repaying debt/unwinding positions on Hydration                            |
| Maturity on Polkadot | Live since 2023; widely integrated                                                             | Live since 2022; ecosystem integrations vary by parachain | 2025 roll-out; **decentralized design** and native to Hydration                     |
| Docs / Authority     | Circle USDC for Polkadot hub page                                                              | Polkadot/Tether press                                     | Hydration docs & announcements                                                      |

## How to get and use USDC on Polkadot
1. **Acquire native USDC on Asset Hub**
   * If you’re a business/dev team, **mint/redeem via Circle** for **USDC (Asset Hub)**. Retail users typically obtain USDC on exchanges or DEXs that support native Polkadot routing. **Confirm the asset is “USDC on Asset Hub”, not a bridged look-alike.** 

2. **Move to a parachain via XCM**
   * Use a wallet/portal that supports XCM transfers. For example, route USDC from **Asset Hub → Moonbeam (EVM DeFi)** or **Asset Hub → Hydration** for trading/liquidity.

3. **Use in DeFi**
   * On **Moonbeam**, USDC is a leading quote asset on DEXs like StellaSwap (per Messari Q2’25). On **Hydration**, USDC can be paired in the Omnipool or used as collateral (depending on current product configuration).

4. **Bring it back for redemption (if needed)**
   * If you plan to **redeem via Circle**, **first XCM back to Asset Hub** before initiating redemption/Mint flows. 

## Mini-guide: Sending stablecoins across parachains
**Goal:** Send 100 USDC from **Asset Hub** to **Moonbeam** to LP or trade.

1. **Start on Asset Hub** with 100 USDC in your wallet.
2. **Open your wallet/portal** with XCM support, choose **Cross-Chain Transfer (XCM)**.
3. **Select destination parachain** = *Moonbeam* (or your target).
4. **Select asset** = USDC (verify it’s the **Asset Hub native** USDC).
5. **Enter address & amount**, sign the transaction.
6. **Wait for inclusion/finality**, then check your USDC on the destination parachain (EVM address on Moonbeam if using EVM).
7. **To redeem via Circle later**, reverse the flow back to **Asset Hub** first.

> **Tip:** Some parachain portals offer a guided “Transfer USDT/USDC from Asset Hub” flow—use official docs when in doubt. 

## Practical checklist for teams
* **Decide model:** Fiat-backed (USDC/USDT) vs decentralized (HOLLAR). Regulatory and treasury needs matter. 
* **Standardize on native asset IDs:** Use **USDC (Asset Hub)** canonical asset; document XCM routes in runbooks. 
* **Pick your venues:** For EVM DeFi, Moonbeam + StellaSwap are widely used; for concentrated, single-pool liquidity and DOT-centric strategies, Hydration is a core venue. 
* **Automate checks:** Validate **origin chain, asset ID, decimals** and **XCM channel** before execution.
* **Redemption flows:** If your finance ops use Circle, bake **return-to-Asset-Hub** into your SOPs. 
* **Monitoring:** Track liquidity, price, and peg health; watch parachain status and XCM channels (e.g., via your preferred explorers/dashboards). 
## Common pitfalls & pro tips
* **Confusing bridged vs native USDC/USDT**
  Always confirm the **Asset Hub origin** when your SOP requires redemption or when minimizing bridge risk. Circle explicitly supports **only the Asset Hub native USDC** for Circle Mint/APIs. 
* **Forgetting the “return to Asset Hub” step**
  You won’t be able to deposit to Circle directly from a parachain—**XCM it back first**. 

* **Assuming all stablecoins are the same**
  **USDC/USDT** are fiat-backed and centralized; **HOLLAR** is decentralized and over-collateralized—operational risk and failure modes differ. Read the docs and quantify collateral behavior under stress.

* **Historical lessons: aUSD 2022 incident**
  A misconfiguration in Acala’s iBTC/aUSD pool led to erroneous mints and a severe depeg. Takeaway: favor **battle-tested issuance paths**, staged rollouts, circuit breakers, and rapid incident response plans.

* **Asset Hub migrations & UX quirks**
  During network-wide migrations (balances/governance functions moving to Asset Hub), watch for **temporary UI/transfer limitations** and follow official guidance. 

## FAQs
**1) What’s the most “canonical” dollar on Polkadot today?**
**USDC on Asset Hub** is natively issued and supported by Circle for enterprise mint/redeem; it moves via XCM to other parachains. 

**2) Can I use USDT too?**
Yes. USDT is available on Polkadot via the system chain (Asset Hub) and can be moved to parachains through XCM where supported. 

**3) How is HOLLAR different from USDC/USDT?**
HOLLAR is **decentralized and over-collateralized** (crypto-backed), integrated with Hydration’s DeFi stack, whereas USDC/USDT are fiat-backed. 

**4) Do I need a special wallet to do XCM transfers?**
Use a wallet/portal that supports **Asset Hub** and **XCM** for the target chain; always verify the destination asset ID and decimals before sending. 

**5) I’m an enterprise. Any special step for Circle flows?**
Yes—Circle Mint/APIs only support **USDC native on Asset Hub**. If you used USDC on other parachains, **return to Asset Hub via XCM** before deposit.

**6) Where is USDC most used for DeFi today on Polkadot?**
Reports show **Moonbeam** remains a primary venue with USDC dominance in DeFi TVL/activity; **Hydration** is core for Omnipool-centric liquidity. 

**7) Is there a DOT-collateralized stablecoin coming to Polkadot?**
Polkadot leadership discussed plans for a **DOT-collateralized decentralized stablecoin** in 2025. Treat as **work-in-progress** and watch for on-chain proposals/launch details.

**8) What went wrong with aUSD in 2022?**
A liquidity pool misconfiguration allowed erroneous mints and a violent depeg—read the official incident reports for technical post-mortems. 

## Conclusion
Stablecoins on Polkadot are **production-ready** and **multichain-native**: use **USDC/USDT on Asset Hub** for fiat-backed settlement and liquidity; evaluate **HOLLAR** for decentralized, over-collateralized exposure integrated with Hydration’s liquidity architecture. Bake **Asset-Hub-first** processes and **XCM** runbooks into your ops—and verify each step with the docs above.