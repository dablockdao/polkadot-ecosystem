---
title: 'Polkadot XCMv5 Enhancing User Experience'
description: 'Discover the advancements in Polkadot XCMv5 for enhanced blockchain interoperability and user experience from Polkadot Decoded 2024.'
sidebar: 
    label: Francisco Aguirre (XCMv5)
---
At Polkadot Decoded 2024, Francisco Aguirre from Parity Technologies presented a session titled *“XCMv5: New Generation Aimed at Better UX”*. This presentation focused on the advancements in the Cross-Consensus Messaging (XCM) format, a pivotal component for enabling seamless interoperability across different blockchain networks within the Polkadot ecosystem. Aguirre, a developer on the bridges team, delved into the technical enhancements and future prospects of XCM, emphasizing the importance of user experience (UX) in blockchain interactions.

## XCMv5 Introduction Key Takeaways
One of Polkadot’s core promises is interoperability, allowing various blockchains (parachains) to communicate and interact efficiently. XCM plays a critical role in this vision by providing a standardized language for conveying intentions between consensus systems. This language facilitates the execution of actions either locally or across different blockchains, thereby forming the application layer for interoperable applications.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vSvQ2jwtr4E_LXPpaFJjcw8pmZxBrXynorhp3ag_1Z1krGzFjuXiZ_GgNHAEK3ItaO8Vwxf5VQ5vqrQ/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## Addressing Pain Points: Fees and Execution
Aguirre highlighted a common scenario where a decentralized application (DApp) needs to interact with multiple chains. The traditional process involves the DApp submitting an extrinsic, followed by local work on the chain, sending an XCM message to another chain, and remote execution. This multi-step process incurs several types of fees:
- **Local Execution Fees**: For executing transactions on the initial chain.
- **Delivery Fees**: For transmitting the message across chains.
- **Remote Execution Fees**: For actions performed on the target chain.

Estimating these fees accurately has been a significant challenge, often leading to bugs and unpredictable costs. To address this, new APIs—XCM Payment API and Dry Run API—have been introduced. These APIs allow developers to estimate fees more precisely and perform dry runs of transactions, ensuring that they will execute successfully before actual submission.

## Enhancements in XCMv5
The upcoming version, XCMv5, promises several improvements aimed at simplifying the fee mechanism and enhancing stability:
- **Unified Fee Mechanism**: Integrating delivery fees into the execution process to eliminate surprises and bugs.
- **Removal of Obsolete Instructions**: Simplifying the language by removing instructions that led to unpredictable results.
- **Better Error Handling**: Introducing new instructions for managing trapped assets, allowing users to reclaim their assets independently in case of transfer failures.

## XCM Practical Implications and Developer Tools
Francisco Aguirre also introduced practical tools for developers:
- **XCM Cookbook**: A comprehensive documentation resource providing examples and guidelines for configuring parachains, writing XCM messages, and integrating cross-chain transfers.
- **Ecosystem Tests Repository**: An initiative to perform end-to-end tests using live data across different chains, ensuring stability and seamless upgrades within the ecosystem.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/qQahedN-nWQ?si=on7opToCuN2zDvJe" title="YouTube video player" width="560"></iframe>

### Conclusion
The advancements in XCMv5 mark a significant step forward in enhancing the user experience and reliability of cross-chain interactions within the Polkadot ecosystem. By addressing pain points related to fee estimation and execution stability, and providing robust tools for developers, XCMv5 sets the stage for a more seamless and efficient interoperability framework. This evolution underscores Polkadot’s commitment to fostering a connected and user-friendly blockchain environment.