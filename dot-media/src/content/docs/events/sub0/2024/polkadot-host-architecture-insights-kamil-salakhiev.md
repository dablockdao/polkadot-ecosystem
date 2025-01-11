---
title: 'Polkadot Host Architecture in 2024 by Kamil Salakhiev'
description: 'Learn about the 2024 Polkadot Host updates by Kamil Salakhiev, including block production and parachain protocol innovations.'
sidebar: 
  label: Kamil Salakhiev (Quadrivium)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

In 2024, Polkadot is poised to introduce a series of enhancements to its host architecture, driven by the efforts of developers like Kamil Salakhiev, the CEO of Quadrivium. At the forefront of these changes is Kagome, a C++ implementation of Polkadot Host, which aims to diversify client options for Polkadot and Kusama. Here’s an in-depth look at the future of Polkadot Host as presented by Salakhiev.

## Understanding Polkadot Host
Polkadot’s architecture is notable for its upgradable runtime contained within a WebAssembly (Wasm) environment. This setup limits direct access to essential functions like storage, networking, and cryptographic primitives, which are instead managed by the Polkadot Host. This design allows multiple implementations of the host, promoting client diversity and enhancing network resilience.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vT7kNzWE-3WI0arXmjBaWjta4H6JwgHr2yf0SoZqmXXgjkSXW2Y5Kg-uJBRCwliZf5EKrCzLnwVRi8O/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## Polkadot Host Key Features and Upcoming Changes
1. **Consensus Mechanism Enhancements**
    - **Block Production**: Polkadot’s current block production uses a combination of BABE (Blind Assignment for Blockchain Extension) and Aura (Authority Round). While BABE ensures unpredictability in leader selection, Aura steps in to fill gaps, leading to occasional predictable block production that could be exploited for denial-of-service attacks.
    - **Sassafras Protocol**: The introduction of the Sassafras protocol aims to improve block production by using Ring VRF (Verifiable Random Function) to maintain leader anonymity until block creation. This reduces the likelihood of denial-of-service attacks and enhances network security by ensuring a single, unique block producer per slot.
2. **Optimized Caching**
    - With Sassafras reducing the occurrence of forks, the implementation of advanced caching techniques becomes more feasible. This improves performance by allowing faster state access and reduces the complexity of managing multiple forks.
3. **Parachain Protocol Improvements**
    - **Synchronous vs. Asynchronous Backing**: Current parachain block validation involves synchronous backing, where validators execute blocks sequentially, leading to latency issues. The asynchronous backing model allows for simultaneous processing of multiple parachain blocks, increasing throughput while maintaining latency.
    - **Elastic Scaling**: This upcoming feature will enable parallel processing of parachain blocks by multiple validator groups, further enhancing scalability.
4. **Grid Topology for Statement Distribution**
    - To handle the increased volume of validation statements in an asynchronous backing model, Polkadot will adopt a grid topology for more efficient message distribution. This system ensures that messages propagate quickly across the network, reducing redundancy and enhancing validator performance.

## The Role of Kagome
Kagome, developed by Quadrivium, plays a crucial role in these advancements. As an alternative Polkadot Host implementation, Kagome ensures client diversity and robustness of the network. It is already operational in Kusama and undergoing security audits to be deployed in Polkadot.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/Lv2KQ2EDyM8?si=HXPqHo7R4tsTP7md" title="YouTube video player" width="560"></iframe>

### Conclusion
The 2024 enhancements to Polkadot Host architecture, highlighted by Kamil Salakhiev, underscore the network’s commitment to security, performance, and scalability. With innovative protocols like Sassafras, optimized caching, and improved parachain validation processes, Polkadot is well-positioned to meet the growing demands of its ecosystem and maintain its position as a leading blockchain platform.