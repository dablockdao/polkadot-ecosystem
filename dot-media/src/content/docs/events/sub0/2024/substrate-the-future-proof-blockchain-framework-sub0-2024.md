---
title: 'Substrate as the Future-Proof Blockchain Framework'
description: 'Learn about Substrate, the open-source framework simplifying custom blockchain development, from Sub0 Asia 2024 insights.'
sidebar:
    label: Bruno (R0gue)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

At the recent [**Sub0 Asia 2024**](https://dablock.com/web3-events/polkadot-sub0/), Bruno from [**R0gue**](https://dablock.com/ecosystem/r0gue/) provided an insightful **introduction to Substrate, an open-source framework for building blockchains**. With his extensive experience as a Substrate developer at [**Parity Technologies**](https://dablock.com/ecosystem/parity-technologies/), Bruno outlined the key aspects of Substrate, its architecture, and the benefits it offers to developers and businesses. This article will summarize the main points of Bruno’s presentation, highlighting why Substrate is a powerful tool for building future-proof blockchains.

## What is Substrate Framework?
**Substrate is an open-source, battle-tested Rust framework designed for building future-proof blockchains**. It is optimized for most use cases and built by developers for developers. Substrate simplifies the process of creating custom blockchains by providing a modular architecture that abstracts away the common components of blockchain development, such as database management, networking, transaction processing, and consensus mechanisms.

## Why Do We Need a Blockchain Framework?
Building a blockchain from scratch is a complex, resource-intensive process that requires specialized knowledge and significant time and financial investment. S**ubstrate addresses these challenges by providing a comprehensive framework that includes all the essential components needed for blockchain development**. This allows developers to focus on the business logic and unique features of their blockchain rather than reinventing the wheel.

<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/x2P5iG1IWJUmf?hostedIn=slideshare&page=upload" width="476"></iframe>

## Substrate Framework Architecture
Substrate’s architecture consists of two main parts: the node and the runtime.
1. **Node**: The node handles the **blockchain’s networking, transaction pool, consensus, and RPC server**, among other functionalities. It ensures that nodes can discover each other, gossip transactions, and maintain the blockchain’s overall health.
2. **Runtime**: The runtime is **where the business logic of the blockchain resides**. It defines how the blockchain transitions from one state to another, including account management, balances, and any custom logic specific to the blockchain’s use case. The runtime is written in Rust and compiled to WebAssembly for efficiency and portability.

### Substrate State Transition Functions
**The Substrate runtime functions as a state transition function**, which dictates how the blockchain’s state changes in response to transactions. These transactions, called extrinsics in Substrate, are commands from the outside world that trigger changes in the blockchain’s state. The runtime validates and executes these extrinsics, ensuring that the blockchain’s state is updated correctly.

### Frame: Simplifying Runtime Development
To make runtime development more accessible, Substrate includes a framework within a framework called **FRAME** (***Framework for Runtime Aggregation of Modularized Entities***). Frame provides a set of pre-built modules, called pallets, which encapsulate common blockchain functionalities such as balances, staking, and governance. Developers can use these pallets as building blocks to construct their custom runtime, significantly reducing the amount of code they need to write.

### Forkless Upgrades with Substrate
One of Substrate’s standout features is its support for forkless upgrades. **The runtime, compiled to WebAssembly, can be updated by simply replacing a key-value pair in the blockchain’s database**. This allows seamless upgrades without the need for node operators to manually update their software, reducing the risk of forks and improving the overall flexibility and maintainability of the blockchain.

### Governance and Customization
Substrate provides various **governance modules to manage blockchain upgrades and other critical decisions**. These include the sudo pallet for centralized control during initial development stages, as well as more advanced governance mechanisms like collective and democracy pallets for decentralized decision-making. This flexibility ensures that Substrate-based blockchains can evolve and adapt over time.

## Getting Started with Substrate
For developers and businesses interested in using Substrate, there are extensive resources available:
- **[Polkadot SDK Docs](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/index.html)**: Comprehensive documentation for Substrate and Frame.
- [**Templates**](https://dablock.com/tech-talks/openzeppelin-polkadot-runtime-templates-evm-chains/): Pre-built blockchain templates to kickstart development.
- **[Substrate Stack Exchange](https://substrate.stackexchange.com/)**: A vibrant community for asking questions and getting feedback.
- [**Polkadot Blockchain Academy**](https://dablock.com/ecosystem/polkadot-blockchain-academy/): Training programs to help developers become proficient in Substrate.

## Smart Contracts on Substrate
For those who may not need a full custom blockchain, [**Substrate also supports smart contracts through its Ink! framework**](https://dablock.com/guides/ink-smart-contracts-tools-in-the-polkadot-ecosystem/). **Ink! allows developers to write smart contracts in Rust**, which are then compiled to WebAssembly and deployed on a Substrate chain using the pallet contracts. This provides a smooth entry point for developers, with the option to scale up to a full blockchain if needed.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/_cbJh1WQMy8?si=dQHDNccnVTjKeUz3" title="YouTube video player" width="560"></iframe>

### Conclusion

Substrate is a powerful framework for building custom blockchains that offers flexibility, modularity, and future-proof capabilities through forkless upgrades. With a strong community, comprehensive documentation, and robust governance tools, **Substrate is well-suited for developers and businesses looking to leverage blockchain technology**. As demonstrated by Bruno Galvao ([**R0GUE**](https://dablock.com/ecosystem/r0gue/)) at [**Sub0 Asia 2024**](https://dablock.com/web3-events/polkadot-sub0/), Substrate’s combination of advanced features and ease of use makes it a compelling choice for blockchain development.