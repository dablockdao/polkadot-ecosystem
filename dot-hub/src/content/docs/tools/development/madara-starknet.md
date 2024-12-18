---
title: 'Madara Starknet'
description: Built on a fork of the Substrate Framework, Madara offers a flexible and robust solution for developers aiming to build their own L2.
---

Madara Starknet is an open-source framework designed to facilitate the creation of custom app chains leveraging the power of Cairo and the Starknet technology. Built on a fork of the Substrate Framework, Madara offers a flexible and robust solution for developers aiming to build their own Layer 2 (L2) or Layer 3 (L3) blockchains. This comprehensive article explores Madara Starknet’s architecture, features, and its role within the Polkadot ecosystem.

## The Madara Stack: An Overview

Madara is a generalized framework for building app chains, allowing developers to create sovereign, validity, or validium rollups. It combines the battle-tested Substrate Framework with the Cairo Virtual Machine (VM) and the blockifier, both of which are used in Starknet. This setup ensures that any program execution can be provable, making it a powerful tool for developing scalable and secure blockchain applications.

Why Build an App Chain with Madara?
-----------------------------------

Building an app chain with Madara provides several advantages:

1. **Sovereignty Over Tech Stack:**
  
  
  - Complete control over the technology running your chain, including account abstraction, alternative data availability (DA) layers, and new opcodes.
  - Flexibility to choose the best technologies for your application without being constrained by existing frameworks.
2. **Custom Features and Innovations:**
  
  
  - Ability to introduce new opcodes or use a different VM.
  - Implementation of native account abstraction.
  - Creation of custom fee tokens or no fees at all.
  - Use of alternative DA layers to reduce fees.
  - Enhanced throughput and reduced competition for block space.
  - Custom logic at the protocol level tailored to specific application needs.
3. **Rapid Deployment:**
  
  
  - Launch app chains that leverage ZK (zero-knowledge) technology to enhance Ethereum’s security while providing flexibility for technical innovations.

Pioneers of App Chain Technology
--------------------------------

Starkware, the team behind Starknet, has been a pioneer in app chain scaling since 2021. Cairo, one of the earliest ZK technologies, has been instrumental in scaling Ethereum and is used in production by major projects like dYdX, Immutable, Sorare, and Starknet. Cairo secures over $700 million and has facilitated more than $1 trillion in trades. Madara extends this innovation by providing an open-source framework to build app chains using Cairo and Starknet technology.

Madara and Starknet: A Symbiotic Relationship
---------------------------------------------

Starknet is a general-purpose ZK rollup that scales Ethereum using STARK cryptography and Cairo. It is designed to be the most scalable ZK scaling solution, innovating across all layers of the stack, including the VM, RPC layer, and account abstraction. Madara, while not a chain itself, provides the stack that allows developers to build their own chains using the same technology as Starknet and StarkEx.

#### Madara Architecture

Madara is built on the Substrate Framework, known for its flexibility and security. Substrate has secured over a billion dollars in production and supports more than 150 chains. Madara’s architecture is tailored to enhance modularity and performance for L2s/L3s by making the runtime std compatible and using the Bonsai trie for efficient data handling.

Transaction Lifecycle in Madara
-------------------------------

1. **JSON RPC Client:**
  
  
  - Handles user transactions, performs validation, and forwards them to the runtime.
2. **Pallet Starknet:**
  
  
  - The core component where most execution and storage operations occur.
  - Manages nonce and signature validation, transaction execution, and storage changes.
3. **Blockifier and Cairo VM:**
  
  
  - Executes Cairo smart contracts and manages block-building logic.
4. **Offchain Workers:**
  
  
  - Run asynchronously with the runtime to handle tasks like settlement, L1-&gt;L2 messaging, state diffs, and data availability.
5. **Execution Logic:**
  
  
  - Manages different transaction types including invoke, deploy account, declare, and L1 handler transactions.
  - Ensures transactions pass validation and are executed correctly.

Data Availability and Interoperability
--------------------------------------

Madara supports multiple DA layers like Ethereum, Avail, and Celestia, with plans to integrate EigenDA and NearDA. The framework aims to be modular at every layer, allowing developers to choose the DA layer that best suits their needs.

For interoperability, Madara envisions a future with thousands of app chains, each addressing unique problems. Solutions being discussed include shared sequencing and proof aggregation to enhance cross-chain communication and collaboration.

### Conclusion

Madara Starknet represents a significant advancement in blockchain technology, offering developers the tools to build highly customized, scalable, and secure app chains. By leveraging the robust Substrate Framework and the innovative Cairo VM, Madara provides a flexible and powerful platform for blockchain development. As part of the Polkadot ecosystem, Madara benefits from shared security and interoperability, making it a crucial player in the future of decentralized applications.

- <small>Related Token/s:</small> **STRK**
