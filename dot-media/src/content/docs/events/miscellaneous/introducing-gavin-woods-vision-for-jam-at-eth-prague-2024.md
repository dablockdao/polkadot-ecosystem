---
title: 'Introducing Gavin Wood Vision for JAM at ETH Prague 2024'
description: 'jam at eth prague 2024'
sidebar:
    label: Gavin Wood (ETH Prague 2024)
---

At a recent blockchain conference, Gavin Wood, co-founder of Ethereum and Polkadot, introduced his latest project, JAM (Join Accumulate Machine). Presented through a comprehensive discussion, Wood detailed the motivations, structure, and potential of JAM, offering a glimpse into the future of blockchain technology. This article explores the key points from his talk, providing insights into what JAM aims to achieve and how it differentiates itself from existing blockchain protocols.

Understanding JAM: The Driving Factors
--------------------------------------

Gavin Wood began his presentation by outlining the fundamental principles that have guided his work in blockchain over the past decade. These principles are:

1. **Resilience**: Ensuring the system is robust and can withstand various challenges.
2. **Coherency**: Maintaining a consistent and unified state across the network.
3. **Generality**: Providing a versatile platform that can support a wide range of applications.
4. **Performance**: Enhancing the speed and efficiency of the network.
5. **Accessibility**: Making the technology available and easy to use for developers and users alike.

These principles form the backbone of JAM, which seeks to build on the strengths of previous blockchain systems while addressing their limitations.  
<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/abRBRVfAmDLlF5?hostedIn=slideshare&page=upload" width="476"></iframe>

The Structure of JAM
--------------------

JAM is designed to be a protocol that balances performance with coherency, aiming to minimize the challenges associated with sharding and state fragmentation. Wood emphasized the importance of avoiding persistent fragmentation of state, which can lead to inefficiencies and complexities in maintaining a coherent system.

### Key Components of JAM:

1. **In-Core Computation**: This is akin to computation that happens within a rollup, accessing a decentralized data lake and remaining largely stateless.
2. **On-Chain Computation**: This involves stateful computations that interact with an on-chain database, ensuring coherent integration of data.
3. **Decentralized Data Lake**: JAM features a decentralized data storage system that allows for efficient data access and management across the network.
4. **ELVES Algorithm**: A bounded security optimistic rollup algorithm that ensures reliable and efficient transaction processing.
5. **Hybrid Consensus Algorithm**: Similar to Ethereum, JAM employs a hybrid consensus mechanism, one for block production and another for finalization.

The Unique Data Topology of JAM
-------------------------------

JAM’s data topology is distinctively designed to resemble a flower, with petals representing separate computational elements that share a central coherent core. This structure allows JAM to scale effectively by parallelizing workloads across the network.

Each “petal” operates independently, handling significant data and computation loads, while the central core consolidates these efforts into a coherent state. This approach helps JAM achieve high performance without compromising on coherency.

The PVM: A New Computational Paradigm
-------------------------------------

One of the standout features of JAM is the introduction of the PVM (Pseudonymous Virtual Machine). The PVM is based on the RISC-V architecture, offering a simplified, efficient, and scalable execution environment for smart contracts and decentralized applications. The PVM supports high-performance computation, enabling JAM to handle complex tasks with lower latency and higher throughput.

Decentralizing Expertise and Implementation
-------------------------------------------

Gavin Wood stressed the importance of decentralizing not just the network but also the expertise and development efforts. To this end, JAM employs a protocol-first development strategy, ensuring that the protocol specification comes before implementation. This approach encourages multiple independent implementations, enhancing the system’s resilience and robustness.

### Incentivizing Development and Participation

To foster a diverse and active developer community, JAM introduces several initiatives:

- **The JAM Prize**: A fund that rewards developers for implementing the JAM protocol according to specified milestones.
- **JAM Toaster**: A shared hardware environment where different implementations can be tested and validated.
- **Fellowship and On-Chain Salaries**: Inspired by Polkadot’s Fellowship, JAM aims to provide on-chain salaries in stablecoins, funded by a central treasury, to support ongoing development and maintenance.

#### Conclusion

Gavin Wood’s introduction of JAM marks a significant step forward in the evolution of blockchain technology. By addressing the limitations of previous systems and introducing innovative solutions, JAM promises to offer a more resilient, coherent, and high-performance blockchain platform. As the development of JAM progresses, it will be exciting to see how it transforms the landscape of decentralized technology and applications.

Stay tuned for more updates on JAM and other groundbreaking advancements in the blockchain world.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/Mtz9zTATFK8?si=es-90u0t9OMdi-CC" title="YouTube video player" width="560"></iframe>