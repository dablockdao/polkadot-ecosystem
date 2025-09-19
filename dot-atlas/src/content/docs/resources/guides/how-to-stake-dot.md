---
title: How to Stake DOT Tokens on Polkadot (Beginner’s Guide, 2025)
description: 'Learn how to stake DOT tokens on Polkadot, select validators, and maximize rewards in this comprehensive staking guide.'
sidebar: 
    label: Stake DOT 101
---

This guide shows you how to stake DOT on Polkadot using solo nominating or nomination pools, pick reliable validators, and manage risks. It also covers fast-unstake, proxies, and the latest change that lets **pool members vote in OpenGov** while staking.

## Why stake DOT? (ELI5)
Staking means locking DOT to **help secure the network**. In return, you earn DOT rewards. Unlike energy-hungry mining, Polkadot uses **Nominated Proof-of-Stake (NPoS)**—you either run a validator or **nominate validators** you trust, and the protocol shares rewards between them and you. 

## How Polkadot staking works (NPoS)
* **Nominators** select up to **16 validators** on Polkadot (24 on Kusama). The system optimizes assignments every **era** (≈ 24 hours) to spread stake efficiently across the active set. 
* A dynamic **minimum active bond** determines whether your solo nomination is big enough to make the reward set that era; it fluctuates with network conditions. If you’re under it, use a pool. 

## Staking options
### 1) Solo nominating (direct staking)
* You bond DOT and nominate up to 16 validators yourself.
* **Active-bond threshold** is dynamic; smaller solo stakes may not earn every era.

### 2) Nomination pools (recommended for small/medium balances)
* **Low entry**: as little as **\~1 DOT** can participate and earn.
* Pool operators curate validators; members earn pro-rata.
* **New:** Pool members can **vote in OpenGov with staked funds** via the “delegate-and-stake” mechanism (rolled out across 2024–2025). 

## Wallets & tools
| Tool                            | What it’s best for                                                                 | Notes                                                                                      |
| ------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Polkadot Staking Dashboard**  | End-to-end staking (solo & pools), fast-unstake eligibility checks, Ledger support | Official UI; no extensions required; pool creation & admin flows.  |
| **Polkadot{.js} UI**            | Advanced controls & extrinsics                                                     | Useful for manual operations (e.g., fastUnstake extrinsic).     |
| **Ledger + supported wallets**  | Cold storage + staking                                                             | Works with the Staking Dashboard.         |
| **Nova / Talisman / SubWallet** | Mobile/extension UX, notifications, proxy setup helpers                            | Nova docs cover staking proxy patterns.             |

## Step-by-step: stake DOT
### A) Join a **nomination pool** (easiest)
1. **Open Staking Dashboard** → **Pools** → **Join**.
2. Pick a pool (check **commission**, validator policy, activity). 
3. **Bond** your chosen amount (≥ \~1 DOT).
4. Optional: enable **permissionless claiming** so trusted accounts can help compound rewards. 

### B) **Solo nominating**
1. **Bond DOT** in the Dashboard (Accounts → Stake).
2. **Nominate** up to 16 validators. The protocol assigns your stake at era boundaries. 
3. Monitor minimum active bond; if you’re not consistently active, consider a pool.

> ⏱️ **Timing:** Rewards accrue by **era (\~24h)**. First rewards typically appear after your nomination becomes active in the next era. 

## Choosing good validators
Key criteria to balance yield and safety:
* **Commission:** Lower commission generally means more to you; sustainable single-digit rates are common. Pools may charge their own commission too. 
* **Performance / era points:** Consistent block-authoring & participation.
* **Self-stake & decentralization:** Operators with meaningful skin-in-the-game; avoid over-concentrating on “whales.” (General best practice in NPoS; see nominator guidance.)
* **Identity & history:** Prefer verified identities with **no slashes**. (Staking docs detail identity and track record considerations.)

## Rewards, payouts & compounding
* Rewards distribute per **era** to active validators and their nominators, then shared after validator commission. 
* **Compounding:** In Dashboard, set rewards to **bond** automatically, or claim and re-bond manually. 

## Unstaking & fast-unstake
* Standard **unbonding** period on Polkadot: **28 days** (no rewards, not transferable). 
* **Fast Unstake:** If your nominator **hasn’t been active/exposed for 28 eras**, you may **unlock immediately** after an eligibility check (Dashboard prevents accidental slashes). Requires a **1 DOT** deposit that can be slashed if conditions aren’t met—use the Dashboard to verify. 

## Security best practices (stash + proxy)
* **Controller accounts are deprecated**. Use your **stash** directly and set a **staking proxy** (hot wallet) to operate on behalf of your cold stash for day-to-day actions. This reduces risk while keeping long-term funds offline. 

## Common pitfalls & tips
* **Solo stake too small?** If you’re often *not* in the active set, your effective APR drops. **Switch to a pool** to earn consistently. 
* **Ignoring commissions:** Validator and **pool** commissions directly impact your net rewards—review them before joining.
* **Set-and-forget:** Commissions and performance change. **Re-check** your validators/pool monthly.
* **Fast-unstake misuse:** The 1 DOT deposit can be slashed if you don’t meet criteria—**let the Dashboard check** first. 
* **Governance while pooling:** With “delegate-and-stake,” you **can vote** with pooled funds—ensure you’ve migrated if you’re an older pool member. 

## FAQs
**1) What’s the minimum DOT to start staking?**
* **Pools:** \~**1 DOT** can participate and earn.
* **Solo nominating:** There’s no fixed “minimum to bond,” but you must exceed the **dynamic minimum active bond** to be active and earn routinely.

**2) How many validators can I nominate?**
Up to **16** on Polkadot (24 on Kusama). 

**3) How often are rewards paid?**
Per **era (\~24 hours)**, once your nomination is active.

**4) Can pool members vote in OpenGov?**
Yes—**delegate-and-stake** lets pool members **vote with staked funds**. Older pool members may need to migrate; new joins are already enabled.

**5) Is there a risk of slashing for nominators?**
Yes. If a validator you back is slashed, your staked funds are penalized proportionally. Choose validators carefully. (See validator selection above.)

**6) How do I get out quickly if I bonded by mistake?**
Use **Fast Unstake**—if eligible (no exposure for 28 eras), you can unlock immediately after the protocol checks your history.

**7) Do I still need a controller account?**
No. **Controller accounts are deprecated**; use a **staking proxy** instead.

**8) Can I use a hardware wallet?**
Yes—**Ledger** works with the **Staking Dashboard** for pools and solo. 

## Conclusion
Staking DOT is straightforward with the Staking Dashboard. For smaller balances, **nomination pools** deliver consistent rewards and now preserve **OpenGov voting**. For larger, hands-on users, **solo nominating** provides full control. 