---
title: 'Robert Habermeier Discusses State Optimization in Polkadot and NOMT'
description: 'Robert Habermeier discusses blockchain state optimization and the Nearly Optimal Merkle Tree (NOMT) on the Kusamarian Space Monkeys podcast.'
sidebar: 
    label: Robert Habermeier (NOMT)
---
In a recent episode of the [**Kusamarian Space Monkeys podcast**](https://dablock.com/ecosystem/kusamarian/), **Robert Habermeier**, a founding engineer of **Polkadot**, delved into the intricate details of blockchain state optimization and performance improvements. The discussion, hosted by Jay Chrawnna, focused on the challenges and innovations within the[ **Polkadot ecosystem**](https://dablock.com/ecosystem/), highlighting Habermeier’s latest project, the **Nearly Optimal Merkle Tree (NOMT)**, developed in collaboration with **Sovereign Labs**.

## Understanding Blockchain State
Habermeier began by explaining the concept of “state” in blockchain technology. In this context, “state” refers to the current truth of the blockchain, encompassing all account balances, smart contracts, tokens, and other data. State updates occur through transactions recorded in blocks. The efficiency of accessing and updating this state is crucial for blockchain performance.

He emphasized that accessing and updating state is a significant bottleneck in blockchain performance, particularly in systems like Polkadot. Nodes, which store the state data on their SSDs, must frequently load and update this information, causing delays. This process is compounded by the structure of **Merkle trees**, a data structure used to secure and verify blockchain data, which can be computationally intensive and slow.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/nS9gej5JzMM?si=K8BNDNXso-9707xy" title="YouTube video player" width="560"></iframe>

## The Nearly Optimal Merkle Tree (NOMT)
Habermeier introduced the NOMT, an innovative approach designed to enhance state access and update efficiency. Developed in partnership with Sovereign Labs, the NOMT leverages the unique characteristics of modern SSDs, which excel at random data access in large blocks. By organizing data into pages of 4,096 bytes and optimizing data access patterns, the NOMT achieves significant performance improvements.

Key advancements of the NOMT include:
- **Speed**: The NOMT enables nodes to build blocks up to ten times faster than current systems.
- **Efficiency**: It improves state update and proof generation times by seven to eight times.
- **Proof Sizes**: The NOMT reduces proof sizes by nearly 50%, enhancing data transmission efficiency.

These improvements are particularly relevant for scaling Polkadot to handle more transactions and larger datasets, addressing current bottlenecks and paving the way for greater scalability.

## NOMT Implications for the Polkadot Ecosystem
The NOMT’s potential extends beyond Polkadot. As Habermeier explained, the technology can benefit any blockchain using Merkle trees, offering industry-wide performance enhancements. Within Polkadot, integrating the NOMT could significantly improve node efficiency and transaction throughput.

Habermeier also touched on how these advancements align with broader initiatives like Polkadot 2.0 and elastic scaling. By optimizing state management, the NOMT complements efforts to dynamically allocate block space and enhance overall network performance.

## NOMT & Habermeier Future Directions
While no longer full-time at[ **Parity Technologies**](https://dablock.com/ecosystem/parity-technologies/), Habermeier remains actively involved in the Polkadot community. He expressed excitement about projects like **[Polkadot HyperBridge](https://dablock.com/dapps/hyperbridge/)**, which aim to leverage Polkadot’s capabilities in new and innovative ways. He also highlighted the importance of open-source development and his commitment to contributing to the ecosystem through governance and advisory roles.

In conclusion, Robert Habermeier’s insights on the Space Monkeys podcast underscore the importance of state optimization in blockchain technology. His work on the NOMT promises to enhance performance, scalability, and efficiency, benefiting not only Polkadot but the broader blockchain community. As the ecosystem evolves, innovations like the NOMT will play a crucial role in driving forward the capabilities and adoption of blockchain technology.