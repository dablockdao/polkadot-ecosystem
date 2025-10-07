---
title: Range
description: Trace XCMP and bridge transfers across Polkadot, Asset Hub, and parachains in real time with the Polkadot Range Explorer.
hero:
  tagline: The real-time blockchain intelligence and security platform.
  image: 
    file: ../../../../assets/tools/block-explorers/range.png
  actions:
    - text: Tool
      link: https://polkadot.range.org/
      icon: external
    - text: Twitter
      link: https://x.com/range_org
      icon: external
      variant: secondary
---

## Polkadot Range Explorer: Real-Time Cross-Chain Visibility for XCMP, Bridges, and Asset Hub

This guide shows builders and power users how to get the most from the Polkadot Range Explorer—what it covers, how to trace an XCMP or bridge transfer end-to-end, practical workflows, and where it complements other ecosystem explorers.

## Why a cross-chain explorer matters now
Polkadot apps don’t live on a single chain—they span **parachains** and rely on **XCMP/XCM** to move assets and messages. On top of that, **bridges** connect Polkadot to external ecosystems. Standard per-chain explorers often fragment these journeys into separate, unconnected events. The **Polkadot Range Explorer** fills this gap with **real-time, cross-chain context**, so you can follow an asset from **source to destination**—including hops across **Asset Hub**, parachains, and supported bridges.

**Who benefits:**
* **Builders & DevOps:** Verify integrations, debug routes, and monitor live flows.
* **Analysts & Ops:** Track liquidity, understand protocol usage, and compile audits.
* **Support & Community:** Resolve “where is my transfer?” questions with evidence.

## What is the Polkadot Range Explorer?
The **Polkadot Range Explorer** provides **end-to-end visibility** across the **Relay Chain**, **Asset Hub**, and covered parachains (e.g., **Moonbeam**, **Hydration**), while **stitching cross-chain hops** for **XCMP/XCM** and selected **bridge protocols** into a single trace. It’s part of a broader cross-chain observability engine that already spans many networks and protocols, which helps with accurate labeling and analytics on Polkadot specifically.

**Scope (as of September 2025):**
* Relay Chain + Asset Hub + initial parachains (e.g., Moonbeam, Hydration).
* Cross-chain: **XCMP/XCM**.
* Bridges: **Snowbridge**, **Wormhole**, **Axelar**, **LayerZero**, **Hyperlane** (coverage expanding over time).

## Quick ELI5: XCMP, Asset Hub, and bridges
* **XCM vs. XCMP:**
  **XCM** is the **message format** (what gets said); **XCMP** is the **transport** (how it travels). Together they enable parachains to talk to each other under Polkadot’s shared security.

* **Asset Hub:**
  A **system parachain** for **issuing and managing assets**. Tokens created or registered here can be **sent across parachains** using XCM.

* **Bridges:**
  Mechanisms that connect **Polkadot** to **other ecosystems** (e.g., Ethereum or Cosmos stacks). They wrap/unwrap assets and relay messages according to their respective trust models and finality rules.

## How the Polkadot Range Explorer works
Range ingests events from the **Relay Chain**, **Asset Hub**, and covered **parachains**, along with **bridge protocol** data, then **unifies** what would otherwise be multiple partial logs into **one coherent transaction journey**. This solves the classic issue where a single cross-chain transfer shows up as several disconnected entries across different explorers.

**Key capabilities:**
* **Transaction stitching:** See **source → hops → destination** in one pane.
* **Protocol awareness:** Distinguish **XCMP/XCM** from **bridge-based** flows.
* **Filters for investigation:** Narrow by **time**, **protocol**, **asset**, **source/destination chain**, or **address**.
* **Ops-friendly timelines:** Watch live activity and isolate anomalies quickly.

## Key views & filters (with workflows)
> Tip: Start in the **Cross-Chain** transactions view. Apply **time**, **protocol**, **route**, and **asset** filters to reduce noise.

### 1) Live Cross-Chain feed
* **What you see:** A streaming list of XCMP and bridge transfers involving Polkadot chains.
* **Workflow:** Spot spikes in **USDC inflows**, campaigns affecting **Moonbeam ↔ Asset Hub** routes, or unusual volumes via a specific bridge.

### 2) Asset-centric view
* **What you see:** Transfers involving a particular **asset** (e.g., USDC on Asset Hub).
* **Workflow:**

  * Track **liquidity movements** and **treasury operations**.
  * Check **decimals** and **origin** differences for wrapped assets across routes.
  * Validate a **marketing push** by correlating with inflow patterns.

### 3) Chain-to-chain path
* **What you see:** Transactions **from Chain A to Chain B** only (e.g., Asset Hub → Moonbeam).
* **Workflow:** Confirm end-to-end **finalization**, evaluate **latency**, or detect **stuck routes**.

### 4) Protocol selector
* **What you see:** Isolate **XCMP/XCM** or a specific **bridge** (Snowbridge, Wormhole, Axelar, LayerZero, Hyperlane).
* **Workflow:**

  * **Security/ops:** Investigate anomalies limited to one protocol.
  * **Product:** Compare bridge **latency windows** or **success ratios**.

### 5) Drill-down details
* **What you see:** The transfer’s **source event**, **message hops**, **destination receipt**, and metadata.
* **Workflow:**

  * **Audits:** Export the **hashes**, **block heights**, and **protocol notes**.
  * **Support:** Provide a clear **evidence trail** to users.

## Range vs. other explorers
| Scenario                                                                                                    | Best Tool                   | Why                                                       |
| ----------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------- |
| Need **end-to-end** visibility for cross-chain transfers (XCMP or bridge) across Relay/Asset Hub/parachains | **Polkadot Range Explorer** | Purpose-built **cross-chain stitching** with live focus   |
| Deep diving **single-chain** blocks/extrinsics/events                                                       | **Subscan**                 | Rich per-chain Substrate insights                         |
| Ecosystem-level overview of **inbound/outbound** activity into Polkadot                                     | **RASE live**               | High-level dashboards and quick macro trends              |
| Validating protocol concepts and terminology                                                                | **Polkadot Docs**           | Canonical references for XCMP/XCM, Asset Hub, Relay Chain |

> Takeaway: use **Range** to answer “**Where did this asset actually go across chains and bridges, right now?**” Pair it with Subscan for chain-level forensics and RASE live for macro context.

## Mini-guide: Trace a cross-chain transfer step-by-step
**Goal:** Verify a transfer from **Asset Hub → Moonbeam** over **XCMP/XCM**, or isolate inbound **Snowbridge** flows.

1. **Open the Cross-Chain view**
   Set **Time** (e.g., **Last 24h**) to narrow the window.

2. **Apply filters**

   * For XCMP: **Source = Asset Hub**, **Destination = Moonbeam**.
   * For bridges: **Protocol = Snowbridge** (or Wormhole/Axelar/LayerZero/Hyperlane).
   * Optional: **Asset symbol** or **address**.

3. **Locate the candidate row**
   Identify by **timestamp**, **value**, or **address fragment**.

4. **Expand details**
   Confirm **message hops** and **destination receipt**. Note any protocol-specific **finality windows**.

5. **Cross-verify (optional)**

   * Inspect the destination parachain in a **single-chain explorer** for the corresponding extrinsic/event.
   * Compare **macro trend** with a dashboard tool to see if your transfer aligns with broader activity.

6. **Export & document**
   Record **hashes**, **block numbers**, **asset IDs**, and **protocol** for support tickets or internal audits.

## Common pitfalls & pro tips
* **Don’t conflate XCM and XCMP.**
  XCM is **what** is sent; XCMP is **how** it’s transported. When filtering, you generally want the **Cross-Chain** or **XCMP/XCM** selector for routed transfers.

* **Mind wrapped asset metadata.**
  The same ticker can represent **different origins or decimals** across routes. Verify **asset IDs** on **Asset Hub** and on destination parachains.

* **Expect protocol-specific finality.**
  Bridges may include **proof delays** or **challenge periods**. If a receipt isn’t visible yet, check again after the expected finality window.

* **Single-chain views are partial.**
  A cross-chain transfer can appear as **separate events** on different UIs. Range’s stitched view prevents false “missing tx” conclusions.

* **Coverage evolves.**
  Newly added parachains or bridge protocols may roll out progressively. If you don’t see a route yet, try again later or check announcements.

## FAQs
**1) What does the Polkadot Range Explorer support today?**
Relay Chain, Asset Hub, and initial parachains (e.g., Moonbeam, Hydration) with **XCMP/XCM** plus integrations for **Snowbridge**, **Wormhole**, **Axelar**, **LayerZero**, and **Hyperlane**. Coverage expands over time.

**2) How is it different from Subscan?**
Subscan excels at **single-chain** details. Range is built for **cross-chain stitching** so one transfer appears as **one journey** with source, hops, and destination.

**3) Can it help audit treasury or protocol flows?**
Yes. Filter by **asset**, **protocol**, **route**, and **time** to build a verifiable trail for monthly reports or incident reviews.

**4) Does it label USDC routes reliably?**
Range’s cross-ecosystem engine emphasizes consistent **stablecoin labeling**, which helps trace **USDC** routes across different bridges and chains.

**5) Can I isolate Snowbridge flows?**
Yes. Use **Protocol = Snowbridge** to filter only those transfers and verify the **finality** on the destination chain.

**6) Where should I verify core concepts like XCMP and Asset Hub?**
Use the **official Polkadot documentation** to confirm terminology, architecture, and message/transport distinctions.

**7) How does Range fit with Polkadot’s roadmap (e.g., Hyperbridge, JAM)?**
As the ecosystem adopts new bridging layers and runtime capabilities, **cross-chain observability** remains essential. Expect continued protocol integrations and wider parachain coverage.

**8) Is there a public feed of updates?**
Product announcements typically highlight **new protocol support**, **coverage expansions**, and **UI improvements** relevant to Polkadot users.

## Conclusion
The **Polkadot Range Explorer** gives you the **complete story** of an asset’s journey across **parachains and bridges**—exactly what builders, analysts, and ops teams need to **debug, monitor, and audit** in real time. Pair it with per-chain explorers for low-level details and macro dashboards for ecosystem overviews.