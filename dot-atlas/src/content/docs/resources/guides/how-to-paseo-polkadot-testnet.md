---
title: 'How to Use Paseo Network: New Polkadot Testnet'
description: 'Learn how to use Paseo Network, Polkadot’s testnet, for safe blockchain experimentation and development with test tokens.'
sidebar: 
    label: Paseo Testnet 101
---

Paseo is Polkadot’s primary testnet where builders and curious users can practice everything from simple transfers to governance, staking pools, and cross-chain teleports—using **PAS** test tokens that hold no real value. This guide shows how Paseo works, how to get tokens from the faucet, and how to try the same workflows you’ll later use on mainnet.

## What Is Paseo (and Why It Replaced Rococo)
**Paseo** is the community-run, decentralized testnet for Polkadot. It mirrors the relay-chain + parachain model so teams can test dApps, pallets, and chain logic safely before deploying to mainnet. Its native test token is **PAS** (sometimes shown in the faucet UI as “Get some PASs”)—usable across Paseo’s relay chain and test parachains.  

Polkadot has historically offered multiple test networks (e.g., Westend for low-level testing, Rococo for parachains). Today, **Paseo is the primary testnet for users and builders**, and the official faucet lets you request PAS for the relay chain and test parachains (e.g., Asset Hub, Bridge Hub, People, Coretime, and a temporary smart-contracts chain listed as “Passet Hub: smart contracts”).  

## Quick ELI5
**Mainnet is real money; testnet is play money.** Paseo behaves like Polkadot, but you use **PAS** tokens that can’t be sold. That means you can click buttons, submit transactions, join pools, vote in governance, and even try cross-chain moves—without risking a single DOT.  

## Key Features of the Paseo Testnet

* **Free test tokens:** Request **PAS** from the official Polkadot faucet. Choose the network/chain in the dropdown, paste your address, and receive a drip (often \~5,000 PAS) in seconds.  
* **Parachain realism:** Practice with relay-chain and parachain flows (Asset Hub, Bridge Hub, People, Coretime, and a contracts-testing chain).  
* **Staking pools UX:** Try **nomination pools** to understand how pool membership, bonding, and validator selection work—mirroring mainnet UX.  
* **Governance rehearsal:** Vote on referenda and submit proposals end-to-end, without risking DOT.
* **Dev-friendly tooling:** Make RPC queries, submit extrinsics, and test smart contracts builds against a living network; ink! docs explicitly describe getting PAS for testing. ( 

## Step-by-Step: Getting Started on Paseo

### 1) Set up a Substrate-compatible wallet
Use a wallet that supports Polkadot networks and testnets (e.g., **Talisman**, **SubWallet**, **Nova**). Create a wallet, back up your seed phrase securely, and enable test networks in settings if needed.

### 2) Get **PAS** from the Polkadot Faucet
1. Open the official **Polkadot Faucet**.
2. In **Network**, choose **Paseo**.
3. In **Chain**, pick where you need funds (e.g., **Paseo Relay** or **AssetHub**).
4. Paste your **Paseo** address, click **Get some PASs**, and wait for confirmation.  

> Tip: Many docs and tutorials refer to the token as **PAS**. If you see “PASs” in the button text, it’s the same token—just pluralized in the UI. 
### 3) Connect an interface
* **Polkadot-JS Apps** for full-fidelity chain interactions (accounts, extrinsics, staking, governance).
* **Staking Dashboard (staking.polkadot.cloud)** for a streamlined staking/pools experience.
### 4) Update metadata when prompted
When your wallet or Polkadot-JS prompts to update metadata for Paseo, approve it so calls and type definitions match the network.

## Hands-On Walkthroughs
### 1) Governance dry-run
* Navigate to **Governance** in Polkadot-JS Apps on **Paseo**.
* Explore **referenda**: open a referendum, read context, and cast a test vote using **PAS**.
* Advanced: submit a **preimage** and then a test **proposal** to simulate the full flow.

### 2) Staking via nomination pools
* Open the **Staking Dashboard** and switch to **Paseo**.
* Create or **join a nomination pool** with a small amount of PAS (no real value).
* Review pool limits, membership rules (one pool per member), and try **increasing your bond**. These steps mirror mainnet mechanics so you can practice before staking DOT. 
### 3) Cross-chain “teleport” between chains
* In the faucet UI you can see the set of chains under Paseo (Relay, AssetHub, BridgeHub, People, Coretime, contracts test chain). Once funded, use Polkadot-JS to **transfer/teleport** PAS across supported chains.
* Verify balances on the **destination chain** after finalization. This helps you understand XCMP/teleport concepts used across Polkadot.  
### 4) Developer flows (RPC, extrinsics, contracts)
* **RPC & extrinsics:** From Polkadot-JS, open **Developer → RPC calls** or **Extrinsics** to test storage queries and transactions.
* **Smart contracts:** Follow the **ink! on Paseo** docs: create an account, request **PAS** test tokens, deploy, and interact.  

## Common Pitfalls & Pro Tips
* **Token symbol correctness:** It’s **PAS**, not DOT (and not “PASS”). Always select the correct **Network/Chain** in the faucet.  
* **Per-chain balances:** Funding **AssetHub** doesn’t automatically fund the **Relay** (and vice-versa). Request PAS for the specific chain you plan to use.  
* **Pool membership rules:** You can join **one** nomination pool per account; practice pool joining/leaving and bond adjustments on testnet first.  
* **Metadata drift:** If calls fail, update chain metadata (wallet + Polkadot-JS).
* **Testnet resets:** Expect occasional upgrades or state resets. Don’t store anything “important” on a testnet.
* **Security hygiene still matters:** Treat seed phrases like real, even on testnet.

## FAQs
**What’s the difference between Paseo and Westend?**
Westend is a long-running low-level testnet; **Paseo is the primary testnet for users and builders**, especially for parachain and app workflows.  

**What token does Paseo use?**
**PAS**. You’ll see a “Get some PASs” button in the faucet UI; it dispenses PAS test tokens.  

**Where do I get PAS?**
Use the official **Polkadot Faucet** and select **Paseo** in the **Network** dropdown; then choose the **Chain** you need (Relay, AssetHub, BridgeHub, etc.).  

**Can I try staking on Paseo?**
Yes—use the **Staking Dashboard** to create or join a **nomination pool** and simulate staking flows.  

**Does governance on testnet work like mainnet?**
Mechanically, yes. You can submit preimages, proposals, and vote in referenda—without risking DOT.

**Can I test smart contracts on Paseo?**
Yes. There’s a temporary contracts testing chain listed in faucet dropdown (“Passet Hub: smart contracts”), and the **ink!** docs describe getting PAS and deploying on Paseo.  

**Is PAS ever worth money?**
No. PAS is **testnet-only** and has **no monetary value**.

**Do I need to worry about fees?**
Fees exist but are covered by your PAS faucet funds, not real DOT.

## Conclusion
Paseo gives you a safe, realistic sandbox to learn **Polkadot workflows**—from governance to staking pools to cross-chain moves—before you touch real assets. Grab some **PAS**, run through the guides above, and you’ll be deployment-ready on mainnet.
 