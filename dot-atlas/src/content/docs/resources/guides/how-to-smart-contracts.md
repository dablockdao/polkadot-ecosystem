---
title: 'Beginners Guide to Polkadot Smart Contracts'
description: 'Explore smart contracts on Polkadot, including ink! and EVM environments, and learn about differences between smart contracts and parachains.'
sidebar: 
    label: Smart Contracts 101
---

A practical, expert-level tour of smart contracts in the Polkadot ecosystem. We cover the architecture (Layer-0 Relay Chain vs parachains), the two dominant environments (ink!/Wasm and EVM), how fees/weights work, when to choose contracts vs. a custom parachain, and what’s coming next with PolkaVM and the proposed “Plaza” system chain.

## Polkadot at a Glance: Layer-0 & Parachains
Polkadot is a **Layer-0 network** (the Relay Chain) that provides security, consensus, and cross-chain interoperability for a set of sovereign **Layer-1 parachains**. The Relay Chain itself does **not** run user smart contracts; parachains do. This design lets teams pick or build the best execution environment for their use case while sharing security and messaging across the ecosystem.

## Smart Contract Environments on Polkadot
Polkadot supports multiple smart-contract styles—most notably **ink! (Wasm)** and **EVM (Solidity)** today, plus the **PolkaVM** (RISC-V-based) path that’s rolling out across the stack.

### ink! (Wasm)
**ink!** is a Rust-based domain-specific language that compiles to **WebAssembly (Wasm)**. It runs via a **Contracts pallet** on parachains that enable it, offering memory safety from Rust and predictable performance from Wasm. The ink! toolchain integrates tightly with Substrate, and the docs explain how ink!, Substrate and the Contracts pallet fit together.

**Where you’ll use it:** ink! contracts are live on multiple parachains that enable the Contracts pallet (e.g., Astar’s Wasm/ink! environment).

**Why choose ink!:**
* **Safety & performance** via Rust/Wasm.
* **First-class Substrate integration** and palette-level control for chain builders.
* **Future-friendly** with Polkadot’s multi-VM direction.

### EVM (Solidity via Frontier)
For Solidity developers, Polkadot offers broad **EVM compatibility** through **Frontier**—a Substrate suite providing EVM execution and Ethereum-style JSON-RPC. Parachains like **Moonbeam** and **Astar** expose familiar Ethereum tooling (Remix, Hardhat, Foundry) with full JSON-RPC, so existing dApps can port with minimal change.

**Why choose EVM:**
* **Familiar tooling** and large developer pool.
* **Fast migration** for existing Ethereum dApps.
* **Rich wallet/tool support** via JSON-RPC.

### PolkaVM & RISC-V (emerging)
Polkadot’s roadmap introduces **PolkaVM**, a **RISC-V-based** virtual machine and new contract stack designed for scale and broad language support, alongside Ethereum compatibility routes on Polkadot Hub and beyond. It aims for high performance and a simpler developer path while staying inside Polkadot’s shared-security model.

## Smart Contracts vs. Parachains
**Smart Contracts**
Deploying a contract is lightweight and fast: you target an existing parachain, pay fees, and ship. Best for **dApps, DeFi protocols, NFTs, games**, and experiments where you don’t need to control the chain’s core logic.

**Parachains**
Building a parachain means writing the **runtime (state-transition logic)**—maximum control and customization: custom pallets, fee models, scheduling, governance hooks, and the ability to expose **your own contract environment** (ink!, EVM, or both). Choose this when you need **custom economics, execution semantics, or deep performance tuning**.

**Rule of thumb**
* Start with **contracts** to validate product–market fit quickly.
* Move to (or launch with) a **parachain** when platform-level control or bespoke features become essential.


## Fees, Weights, and Resource Management
Polkadot and most parachains use a **weight-based fee model** (not gas metering in the Ethereum sense). Each extrinsic (transaction) typically carries:

* a **base/length fee** component, and
* a **weight fee** proportional to execution complexity.

This protects network resources and incentivizes efficient code. Parachains may tweak parameters, but the core approach—**“convert weight to fee”**—is standard across Substrate-based chains.

## Mini-Guides: Hello World in Each Environment
> High-level steps to orient you. Always follow the latest chain-specific docs for precise commands and versions.

### ink! on a Contracts-enabled parachain
1. **Tooling:** Install Rust toolchain + `cargo-contract`.
2. **Scaffold:** `cargo contract new flipper` to generate a sample project.
3. **Build & test:** `cargo contract build` and run unit/integration tests locally.
4. **Choose a network:** Select a Contracts-enabled parachain (e.g., Astar’s ink! environment).
5. **Fund & connect:** Get an account funded on your target network; connect via Polkadot.js Apps or the chain’s portal.
6. **Deploy:** Upload Wasm, instantiate with constructor args, record the contract address.
7. **Interact:** Use the chain portal or SDK (e.g., Polkadot.js) to call messages; monitor storage/weight usage.

### Solidity on an EVM parachain (Moonbeam/Astar)
1. **Tooling:** Hardhat or Foundry; set the network RPC to your target.
2. **Write & test:** Author Solidity contracts, run unit tests locally.
3. **Compile:** `npx hardhat compile` (or Foundry `forge build`).
4. **Deploy:** Run your migration script against the parachain RPC; confirm the on-chain address.
5. **Verify (optional):** Use the chain’s explorer verification flow.
6. **Integrate:** Frontends use standard Ethereum JSON-RPC methods and libraries.

## Common Pitfalls & Pro Tips
* **Assume weight, not gas:** Even on EVM chains, fee dynamics and block fullness may differ from Ethereum mainnet. Profile your calls and watch block limits.
* **Version drift:** Keep `cargo-contract`, ink! macros, and node runtimes aligned; read release notes before upgrading.
* **Chain specifics:** Moonbeam vs. Astar differ in precompiles, fee curves, and native assets. Read each network’s docs before deploying.
* **Upgradability:** Prefer well-audited proxy/upgrade patterns; Wasm and EVM ecosystems both support safe upgrade strategies (be deliberate with admin keys and governance).
* **Cross-chain UX:** When contracts rely on XCM or cross-chain calls, test failure modes (timeouts, fees, queues).
* **Security first:** Use formal audits where appropriate; minimally, threat-model reentrancy, unchecked external calls, and resource-exhaustion patterns.


## What’s Next: Plaza & a Unified Developer UX
Polkadot contributors proposed **Plaza**—a “batteries-included,” high-throughput **system chain** intended to consolidate common functions (assets, contracts, staking, bridging) with **near-zero fees until scaling limits** and elastic multi-core throughput. The vision includes **smart-contract support (Rust and EVM via RISC-V/PolkaVM)** and priority-fee economics. It’s a strategic move to improve UX by concentrating functionality in a single, scalable hub.

> **Takeaway:** Build today on existing parachains (ink! or EVM). Track PolkaVM and Plaza for next-gen scale and a simpler deployment target across the ecosystem.

## FAQs
**Is the Relay Chain ever going to support smart contracts directly?**
No—by design, the Relay Chain focuses on consensus/security and leaves execution to parachains.

**Which should I pick—ink! or EVM?**
If you want Rust safety/Wasm performance and tight Substrate integration, choose **ink!**. If you’re porting an Ethereum dApp with minimal changes and want maximum tooling continuity, pick **EVM** (Moonbeam/Astar). Many teams use both.

**Do Polkadot chains use gas?**
They use a **weight-based fee model**. Some EVM parachains expose gas-like UX for compatibility, but under the hood fees map to execution weight and network conditions.

**Can I deploy Solidity and ink! on the same parachain?**
Yes, on chains that enable both environments (for example, Astar supports EVM and Wasm).

**What is PolkaVM and why RISC-V?**
PolkaVM is a Polkadot-native, **RISC-V-based VM** for contracts, aiming for high performance and broad language options, with paths for Ethereum compatibility.

**What is Plaza?**
A proposed **system chain** to unify common functions (contracts, assets, staking, bridging) with high throughput and near-zero fees until scaling limits.

**How do JSON-RPC tools work on Moonbeam?**
Moonbeam provides **Ethereum JSON-RPC compatibility**, so standard Ethereum wallets/libraries work out of the box.

**Where do I find the latest fee/weight parameters?**
In each chain’s runtime docs and explorers; start with Polkadot developer docs on weights/fees, then your target parachain’s documentation.

## Conclusion
Polkadot gives you a **choose-your-own-runtime** path: ship fast with **smart contracts** (ink! or EVM) or build deep with a **custom parachain**. Today’s contracts are production-ready across multiple parachains, and tomorrow’s stack (PolkaVM + Plaza) is set to improve scale, compatibility, and UX further.