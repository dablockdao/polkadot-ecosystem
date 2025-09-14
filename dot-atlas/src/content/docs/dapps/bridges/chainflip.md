---
title: Chainflip
description: Discover Chainflip’s decentralized protocol for seamless, efficient cross-chain swaps with accurate pricing and minimal slippage. Revolutionize crypto trading.
hero:
  tagline: Cross-chain swaps with accurate pricing and minimal slippage.
  image: 
    file: ../../../../assets/dapps/bridges/chainflip.png
  actions:
    - text: Dapp
      link: https://swap.chainflip.io/
      icon: external
    - text: Docs
      link: https://docs.chainflip.io/swapping/introduction
      icon: external
      variant: secondary
---

## Chainflip on Polkadot: Native Cross-Chain Swaps with JIT AMM & FROST Security

Chainflip is a decentralized cross-chain swap network built around a Substrate “State Chain,” a 150-validator MPC/TSS custody model, and a Just-In-Time (JIT) AMM. In July 2025, Chainflip shipped an integration with Polkadot Asset Hub, enabling one-click native swaps between Polkadot-native assets and BTC/ETH/USDC/SOL via wallets like SubWallet—without wrapped tokens.

## ELI5: Chainflip in one minute
* Imagine a **robotic cashier** that speaks Bitcoin, Ethereum, Solana, and Polkadot natively.
* A **validator swarm** collectively holds vault keys using cryptography called **MPC/TSS**, so no single party can move funds alone.
* Prices are set by a **JIT AMM** running on Chainflip’s own blockchain (the **State Chain**), which coordinates every swap.
* In **July 2025**, Chainflip integrated **Polkadot Asset Hub**, so you can do one-click swaps between Polkadot-native assets and BTC/ETH/USDC via supported wallets like **SubWallet**—**no wraps, no bridges**.

## How Chainflip works
### State Chain (Substrate appchain)
The **State Chain** is Chainflip’s application-specific blockchain, built with Substrate. It records protocol events (deposits, swaps, vault rotations, governance) and runs the AMM logic. Think of it as the **accounting & coordination** layer for cross-chain settlement.

### Validators, MPC/TSS & FROST
* Chainflip runs a permissionless network of **up to 150 validators**. They collectively manage vault keys via **MPC/TSS**—no central custodian.
* Chainflip employs **FROST** (Flexible Round-Optimized Schnorr Threshold) for fast, scalable threshold signatures (e.g., “100-of-150” signing), enabling quick egress transactions and simpler vault management.

### JIT AMM & pricing
* The **Just-In-Time AMM** is implemented on the State Chain (Rust/Substrate), drawing inspiration from concentrated-liquidity designs while adapting them for cross-chain operations. LPs can place range liquidity; execution is optimized for **accurate pricing and minimal slippage** across L1 assets.

## Why this matters for Polkadot
Polkadot’s **Asset Hub** concentrates native assets and fee-payment features for the ecosystem. Chainflip’s **Asset Hub integration** lets users swap **directly between Polkadot-native assets (e.g., hubUSDC) and external L1 assets (BTC/ETH/USDC/SOL)**—removing wrapper risk and fragmentation, and easing capital in/out flows for users and DAOs. One-click routes in popular wallets simplify UX for non-experts while preserving native settlement.

## Key features & benefits
* **Native L1 ↔ L1 swaps** (e.g., BTC ↔ DOT/hubUSDC) without wrappers or centralized custody.
* **Security by design:** threshold signatures (FROST) and distributed validators securing shared vaults across chains.
* **Pricing quality:** JIT AMM on the State Chain focuses on capital efficiency and tight execution, aiming to rival CEX-like pricing.
* **Composability:** SDKs and integrations with wallets/aggregators, including SubWallet and other routers.
* **Governance & upgradability:** protocol evolution managed on the State Chain (validator auctions, vault rotations, parameter updates).

## Chainflip vs alternatives
| Protocol      | Settlement model                                              | BTC L1 support                     | Polkadot integration                  | Execution model                             | Who runs it            | Notes                                                        |
| ------------- | ------------------------------------------------------------- | ---------------------------------- | ------------------------------------- | ------------------------------------------- | ---------------------- | ------------------------------------------------------------ |
| **Chainflip** | Native L1↔L1 swaps via MPC/TSS vaults + Substrate State Chain | **Yes**                            | **Yes** (Asset Hub; wallet one-click) | JIT AMM on State Chain                      | \~150 validators (PoS) | FROST TSS; SDKs & wallet/aggregator integrations.            |
| **THORChain** | Native L1↔L1 swaps via TSS vaults on a dedicated chain        | **Yes**                            | Not native to Polkadot                | Continuous liquidity pools (CLP)            | Node operators (PoS)   | Pioneer of native cross-chain swaps; widely used BTC routes. |
| **UniswapX**  | Intents + third-party fillers; often routes via bridges/DEXs  | Limited/varies (not native BTC L1) | Not specific                          | Dutch-auction intents; gasless for swappers | Open filler network    | Useful for EVM-centric intents and aggregation.              |
| **LI.FI**     | Aggregator of bridges/DEXs; smart routing                     | Via connected bridges (not native) | Not specific                          | Aggregation & solver routing                | Aggregator + partners  | SDK/API across many chains; strong bridge coverage.          |

> *Table intent:* decide when **native L1 settlement** (Chainflip/THORChain) is preferable vs **intents/aggregation** (UniswapX/LI.FI).

## Step-by-step: BTC → hubUSDC (Asset Hub) in SubWallet
> Interfaces evolve—always follow the latest wallet prompts.

1. **Open SubWallet** and choose **Swap / Cross-Chain**. Select **From: BTC (Bitcoin)** and **To: hubUSDC (Polkadot Asset Hub)**.
2. **Enter amount** and review the **quoted price/fees** (Chainflip route).
3. **Generate deposit instructions** (a BTC address controlled by Chainflip’s TSS vaults).
4. **Send BTC** from your Bitcoin wallet to the provided address. Wait for BTC confirmations.
5. Once confirmed and executed by Chainflip, **hubUSDC** credits to your **Asset Hub** account in SubWallet—**no wrapped assets**.
6. Optional: swap **hubUSDC → DOT** using Asset Hub conversion flows or a supported DEX route.

## Common pitfalls & pro tips
* **Confirm the destination chain & address format** (e.g., Polkadot SS58 vs EVM). A wrong address equals loss of funds.
* **Observe minimum confirmations** on the source chain (BTC takes time). Faster chains ≠ instant settlement.
* **Mind gas on both sides.** You may need a small balance of DOT for fees on Asset Hub, or use fee-payment features if supported.
* **No wrappers ≠ no risk.** MPC/TSS reduces single-custodian risk but still relies on validator set security and protocol correctness. Review security assumptions and validator incentives.
* **Liquidity depth matters.** Large clips can move price; consider splitting orders or monitoring pool depth and JIT ranges.
* **UX differs by wallet/aggregator.** One-click flows abstract steps; other UIs may require manual confirmations.

## FAQs
**1) How is Chainflip different from a bridge?**
Bridges usually **lock & mint** representations on a destination chain. Chainflip executes **native L1 swaps** via MPC/TSS vaults and its State Chain—no wrapped tokens needed.

**2) Does Chainflip support native BTC swaps into Polkadot?**
Yes. The **Asset Hub integration (July 30, 2025)** enabled one-click swaps between Polkadot-native assets and BTC/ETH/USDC via supported wallets.

**3) Who secures funds during a swap?**
A **permissionless validator set (up to \~150)** collectively controls vaults using **FROST** threshold signatures; no single operator can move funds.

**4) What is the State Chain used for?**
It’s the **coordination & accounting chain** (Substrate appchain) that tracks deposits, executes the **JIT AMM**, manages vault rotations, and handles governance for Chainflip.

**5) How good is pricing? Where does it come from?**
Pricing emerges from liquidity provided to the **JIT AMM** (range liquidity) plus arbitrage with external markets via integrators, aiming for low slippage and tight quotes.

**6) Can integrators plug Chainflip into wallets/DEXs?**
Yes—Chainflip ships SDKs and has growing wallet/aggregator integrations, including SubWallet and third-party routers.

**7) Is KYC required?**
Swapping is **on-chain and permissionless**; some purchase flows market **no KYC**. Your wallet and local rules still apply.

**8) Is this investment advice?**
No—this guide is educational. Chain parameters, liquidity, and pricing can change; do your own research.

## Conclusion
Chainflip brings **bridge-free, native L1 swapping** to Polkadot with production-grade security (MPC/TSS + FROST), a **Substrate State Chain**, and a **JIT AMM** optimized for execution quality. For users, that means **simpler in/out flows** (BTC/ETH/USDC ↔ Asset Hub). For integrators, it’s a **turnkey backend** to add native cross-chain routes to wallets and apps.

1. **[Chainflip backend repo](https://github.com/chainflip-io/chainflip-backend)**
2. **[Chainflip SDK monorepo](https://github.com/chainflip-io/chainflip-sdk-monorepo)**
3. **[Chainflip eth contracts](https://github.com/chainflip-io/chainflip-eth-contracts)**