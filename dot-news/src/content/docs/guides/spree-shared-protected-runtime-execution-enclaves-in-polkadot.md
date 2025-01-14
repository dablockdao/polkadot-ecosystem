---
title: 'Polkadot SPREE: Shared Protected Runtime Execution Enclaves'
description: 'Learn about SPREE in Polkadot: secure, shared logic modules enabling trustless cross-chain communication and consistent execution.'
---
One of the critical innovations within the **Polkadot ecosystem** is the concept of **Shared Protected Runtime Execution Enclaves (SPREE)**. This article provides an introduction to SPREE, highlighting its significance, functionalities, and potential use cases in the broader context of the Polkadot ecosystem.

What is SPREE?
--------------

**Shared Protected Runtime Execution Enclaves (SPREE)** are specialized fragments of logic designed to enhance trust and security across parachains within the Polkadot network. Often referred to as *“trust wormholes”,* SPREE modules operate on the Polkadot Relay Chain and can be opted into by parachains. These modules are **comparable to runtime modules in Substrate**, but with a distinctive feature: **they live on the Relay Chain, providing a shared and protected execution environment.**

Core Properties and Functions of SPREE
--------------------------------------

SPREE modules are characterized by several key properties that make them an integral part of the Polkadot ecosystem:

1. **Opt-In Logic Fragments**: Parachains have the option to integrate SPREE modules, which function similarly to smart contracts. These modules can be called upon as needed by the parachains.
2. **Independent Storage and XCM Endpoints**: Each SPREE module maintains its own storage and possesses a dedicated XCM (Cross-Consensus Message) endpoint, ensuring that the module’s logic and data are consistent across all parachains that opt into it.
3. **Identical Logic Across Parachains**: SPREE modules guarantee that all instances across different parachains operate with identical logic, promoting uniformity and reducing the risk of discrepancies in cross-chain interactions.
4. **Protected Execution Environment**: SPREE modules are designed with security in mind. The storage of a SPREE module cannot be altered by the parachain’s own logic, and messages originating from a SPREE module cannot be falsified by parachains. This ensures that the logic within the SPREE module is executed as intended without interference.

The Origin of SPREE
-------------------

The concept of SPREE has its roots in the Polkadot community. On March 28, 2019, a community member known as u/Tawaren posted an idea on the r/dot subreddit titled “SmartProtocols Idea.” This post proposed the development of Smart Protocols to address a critical challenge in cross-chain message passing (XCMP). Specifically, the difficulty in verifying and proving that code executed on a parachain without trust was highlighted as a significant hurdle. The solution proposed was to install Smart Protocols on the Relay Chain, which would later evolve into the concept of SPREE.

Understanding SPREE Modules
---------------------------

**SPREE modules are fragments of logic**, typically written in WebAssembly (Wasm), that can be **uploaded to the Polkadot Relay Chain through a governance mechanism or directly by parachains**. Once a SPREE module is uploaded, other parachains can choose to opt into the module’s logic. The module’s storage remains independent of the parachain, but the parachain can interface with the module to execute its logic.

**A crucial aspect of SPREE modules is their role in the XCMP architecture**. While XCMP ensures the trustless delivery of messages between parachains, SPREE guarantees the trustless execution of those messages. In other words, SPREE modules ensure that the code executed on the receiving parachain is consistent with the expectations of the sending parachain, eliminating the need for trust.

Why SPREE Matters
-----------------

The importance of SPREE modules within the Polkadot ecosystem cannot be overstated. They address a fundamental challenge in cross-chain communication: ensuring that the execution of cross-chain messages is consistent and secure. Without SPREE, parachains would need to rely on trust-based mechanisms to verify the execution of messages on other parachains, introducing potential vulnerabilities.

By providing shared, protected logic that parachains can opt into, **SPREE modules enable a trustless environment for cross-chain interactions**. This is particularly relevant for use cases such as decentralized exchanges, where consistency in the execution of token transfers across parachains is critical.

### SPREE Example Use Case: Decentralized Exchange

One of the most compelling use cases for SPREE modules is in the creation of a decentralized exchange (DEX) that operates seamlessly across multiple parachains. For example, a SPREE module could be designed to handle the incrementing and decrementing of balances of various assets. **By opting into this SPREE module, parachains can participate in a DEX without the need for additional development effort**.

In this scenario, the SPREE module would ensure that asset transfers between parachains are executed consistently and securely. The module’s logic would be identical across all participating parachains, and its storage would be protected from alteration by individual parachains, ensuring the integrity of the DEX.

- - - - - -

### Conclusion

**Shared Protected Runtime Execution Enclaves (SPREE)** represent a significant advancement in the Polkadot ecosystem, enabling secure, trustless execution of cross-chain messages. By providing a shared and protected execution environment, SPREE modules ensure that parachains can interact with each other consistently and securely, without the need for trust-based mechanisms. As Polkadot continues to evolve, **SPREE is poised to play a crucial role in enabling innovative cross-chain applications and enhancing the overall security of the network**.
