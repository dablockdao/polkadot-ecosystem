---
title: Polkadot Proxy Accounts - Types, Setup, and Best Practices (2025)
description: 'Discover the benefits and types of proxy accounts on Polkadot for enhanced security and efficient digital asset management.'
sidebar: 
    label: Proxy Accounts 101
---
 
Proxy accounts let you perform specific actions on behalf of a primary account while keeping your “cold” keys offline. This guide explains every proxy type, deposits, time-delayed security, pure proxies for multisigs, setup steps, and pro tips—so you can harden security without sacrificing day-to-day operations.  

## What are Polkadot Proxy Accounts?
A **proxy** is an account that’s authorized to execute *only certain kinds of calls* for another (the “proxied” or primary) account. You keep your primary keys cold; your proxy (a “hotter” account) handles day-to-day tasks. If a proxy is compromised, impact is limited by its narrow permission scope.  

### Why use proxies (ELI5)
Think of the primary account as a vault and a proxy as a **doorman with a checklist**. The doorman can open specific doors (e.g., staking or governance), but not the one marked “transfer all funds.” If anything goes wrong, you revoke the doorman’s badge—your vault keys never left cold storage.  

## Proxy types (and what each can/can’t do)
When creating a proxy you must choose a **type**. The runtime filters calls so a proxy can only do what its type allows. Key types on Polkadot include:
* **Any** — Can do **anything**, including transfers. Powerful but risky; avoid unless absolutely required.  
* **Non-transfer** — Can do anything **except** balance/XCM transfers (incl. vested). Good default for operational access. 
* **Governance** — Can perform **governance-related** transactions only. Useful for voting/delegations without exposing funds. 
* **Nomination Pool** — Limited to **nomination pool** management (create/join/manage pools).  
* **Staking** — **Staking-only** operations (e.g., set session keys, nominate). Designed so a stash can stay cold.  
* **Identity Judgement** — For **registrars** to issue identity judgments (`provide_judgement` and utility helpers).  
* **Cancel** — Can **reject/remove** time-delay announcements (`reject_announcement`). Often paired with delayed proxies as a “panic button.” 
* **Auction** (historical context) — Used for **parachain auction/crowdloan** calls where applicable. *(If your UI doesn’t offer it, it may be deprecated or chain-specific.)*  [1])

*Note:* Kusama also exposes **Spokesperson** and **Society** proxy types for chain-specific pallets.  

## Proxy deposits & cost formula
Creating proxies reserves a **refundable deposit** to deter spam, since the proxy list consumes on-chain storage. The formula for *n* proxies is:

```
ProxyDepositBase + ProxyDepositFactor × n
```

These are chain constants defined in the runtime; on Polkadot, recent docs reflect **ProxyDepositBase ≈ 20.008 DOT** and **ProxyDepositFactor ≈ 0.033 DOT** (subject to change with runtime upgrades). Example for 3 proxies: `20.008 + 0.033×3 = 20.107 DOT` reserved (returned when you remove them).  

## Time-delayed proxies (announce → execute → cancel)
A **time-delayed proxy** adds a block-based delay (Polkadot \~6s/block) between **announcement** and **execution**. During the delay window, an authorized account can **cancel** the action—great for high-risk operations.

* Workflow: `announce` → wait N blocks → `execute announced call` (or `reject_announcement`).
* Important: You **must** use the **announce/execute** pattern with delayed proxies; a direct `proxy.proxy` won’t work (“Proxy unannounced” error). 

## Pure proxies for multisigs & teams
**Pure proxies** are *keyless* helper accounts you spawn and then control via another proxy (often an **Any** proxy held by a multisig). They shine in org setups because you can **change multisig signers/thresholds** over time while retaining a stable on-chain “operational address.” Highlights:
* **Keyless:** A pure proxy cannot sign by itself; control flows through its controlling proxy.
* **Flexible multisigs:** Keep the same working address while rotating members.
* **Composable:** You can put a pure proxy **inside** a multisig and operate it via a designated proxy. 

## How to set up a proxy (quick guide)
> Tools: Polkadot-JS Apps (or Staking Dashboard for some staking flows)

1. **Create a fresh account** for the proxy (hot wallet).
2. **Fund it lightly** for fees (keep large balances on the cold primary).
3. In Polkadot-JS: **Accounts → Proxies → Add proxy**, choose:

   * **Delegate** (the proxy account address)
   * **Proxy type** (e.g., *Non-transfer*, *Staking*, *Governance*)
   * **Delay** (0 for immediate; >0 for time-delayed)
4. **Sign with the primary account** (the proxied account) to add the proxy; deposit is reserved.
5. **Test** with a harmless call (e.g., `remark`) or a small staking action.
6. **Document recovery**: store a plan to remove/replace proxies if compromised.  

## Example setups
### A) Solo staker with cold stash
* Primary (cold): holds DOT; **adds Staking proxy**
* Proxy (hot): runs all staking ops; **cannot transfer funds**
* Optional: add a **Cancel** proxy and set **delay** for high-risk actions. 

### B) Nomination Pool operator
* Primary (cold): owns pool
* Proxy (ops wallet): **Nomination Pool proxy** for day-to-day management
* Use Dashboard/Polkadot-JS to manage pool roles and nominations. 

### C) Organization multisig with rotating signers
* Create **Multisig** for treasury; spawn a **Pure proxy** as the org’s stable “ops address.”
* Control the pure proxy via an **Any** proxy held by the multisig.
* Rotate multisig members over time—**pure proxy address stays the same**. 

## Common pitfalls & tips
* **Using the wrong call with delayed proxies:** You must **announce** then **execute announced**. Direct `proxy.proxy` will fail. 
* **Over-permissive proxies:** Avoid **Any** unless truly needed. Prefer **Non-transfer** + task-specific proxies.  
* **Forgetting a cancel path:** Add a **Cancel** proxy (different operator) when you use delays.  
* **Underestimating deposits:** Remember the **base + factor×n** reservation. Remove unused proxies to get the deposit back.  
* **Key hygiene:** Back up proxy mnemonics/JSON; keep primary keys fully offline. (General opsec best practice.)
* **Chain differences:** Some proxy types are chain-specific (e.g., Kusama Society/Spokesperson). Validate on your target network. 

## FAQs
**1) Can a proxy move my funds?**
Only if it’s an **Any** proxy. **Non-transfer**, **Staking**, **Governance**, etc., cannot transfer balances.  

**2) How do time-delayed proxies improve security?**
They insert a **cooldown window** so you can **cancel** suspicious actions before execution.  
**3) What happens to my deposit?**
It’s **reserved**, not spent, and is **returned** when you remove the proxy or announcement.  

**4) Are pure proxies safer?**
They’re **keyless**, so there’s no key to steal. Control comes from the designated proxy (often a multisig). 

**5) Do proxies work with nomination pools?**
Yes—use the **Nomination Pool** proxy for pool operations.  

**6) I got “Proxy unannounced.” Why?**
You tried to execute directly on a **time-delayed** proxy. Announce first, then execute within the allowed window. 

**7) Where do the deposit numbers come from?**
They’re **runtime constants** (ProxyDepositBase/Factor). Recent docs show **\~20.008 DOT** base and **\~0.033 DOT** per proxy on Polkadot; confirm in-app because upgrades can change values. ([Figment][5])

**8) Can I nest proxies?**
Yes. Proxies can be used inside proxy calls and combined with multisigs/pure proxies for advanced org setups.  

## Conclusion
**Proxy accounts are a must-have for secure operations on Polkadot.** Start with a **Non-transfer** proxy for daily tasks, add **Staking** or **Governance** proxies as needed, and consider **time-delays** and **pure proxies** for org-grade setups.