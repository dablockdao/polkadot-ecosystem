---
title: 'Jeff Burdges - Polkadot Sharding Protocol Block Auditing'
description: 'adgsgeargerg'
sidebar:
    label: Jeff Burdges
---

Sharding has become an indispensable component in scaling blockchain networks to handle real-world applications. **Jeff Burdges of the Web3 Foundation** recently delivered an insightful presentation titled “*WIP: Efficient Block-Auditing for Blockchains*“, shedding light on Polkadot’s innovative approach to sharding and block auditing. This article delves into the key aspects of his talk, exploring how Polkadot addresses the challenges of scalability, security, and efficiency in blockchain technology.

**The Necessity of Sharding in Blockchain Networks**
----------------------------------------------------

In the realm of Web 2.0, horizontal data partitioning, commonly known as sharding, is essential for scaling services as they grow beyond the capacity of a single machine. Blockchains, which simulate a database through auditing, face similar scalability challenges. Traditional blockchains operate like single-threaded databases, which are insufficient for handling complex, real-world services.

The central question is whether blockchains are limited to simple applications or if they can scale to accommodate more demanding services. To achieve this scalability, the efficiency of the auditing process must be enhanced. **Efficient block auditing ensures that updates to the blockchain are verified promptly and securely**, without imposing prohibitive computational or bandwidth costs on the network.

**Block Auditing Protocols: Existing Approaches and Their Limitations**
-----------------------------------------------------------------------

Several block auditing protocols have been proposed to address scalability and security in blockchain networks. Each approach comes with its advantages and drawbacks.

1. **Bridged Blockchains**: Connecting multiple blockchains via bridges is a straightforward method. However, as more blockchains are interconnected, the assumption of a two-thirds honest majority on each becomes less tenable. The overall security of the network diminishes as the number of interconnected chains increases, potentially leading to vulnerabilities.
2. **Optimistic Rollups**: These rely on the assumption that most validators act honestly, with disputes resolved after the fact. Optimistic rollups often lack provable security guarantees and may involve significant latency between shards—sometimes up to a week—which is impractical for many applications.
3. **Zero-Knowledge (ZK) Rollups**: ZK rollups provide succinct cryptographic proofs for each block, offering strong security under minimal assumptions. While they are highly secure and composable, ZK rollups are computationally intensive. They can be up to a million times more costly in terms of CPU time compared to traditional verification methods, leading to high latency and resource consumption.
4. **True Sharding**: This approach involves distributing a large set of validators across multiple shards, assuming an 80% honest majority. While true sharding can efficiently scale a network and reduce inter-shard latency to seconds or minutes, it requires a significant number of validators (often thousands) per shard. Additionally, achieving and maintaining such a high level of honest participation can be challenging.

**Polkadot’s Innovative Approach to Sharding**
----------------------------------------------

Polkadot, a leading blockchain platform in the Web3 ecosystem, has implemented a unique sharding protocol since 2021. Jeff Burdges presentation highlights how Polkadot addresses the limitations of existing block auditing protocols by introducing a set of tools and methodologies designed for efficiency and security.

<div class="ose-wrapper ose-uid-30b785712f84b14351ba8c65b64d85a8 ose-embedpress-responsive" style="width:675px; height:420px; max-height:420px; max-width:100%; display:inline-block;"><iframe allowfullscreen="true" height="420" src="//view.officeapps.live.com/op/embed.aspx?src=https://dablock.com/wp-content/uploads/2024/09/Jeff-Polkadot-auditing-block.pptx" width="675"> </iframe></div>### **Four Essential Tools in Polkadot’s Sharding Protocol**

1. **Soundness Slashing**: Slashing is a mechanism where validators are penalized (usually financially) for malicious or negligent behavior. In Polkadot, soundness **slashing is employed to ensure validators act correctly during the auditing process**. Unlike traditional slashing methods, soundness slashing requires provable violations, minimizing the risk of unjust penalties. By setting a tolerable soundness error (e.g., less than 1 in 20,000), Polkadot ensures that the network remains secure without excessively penalizing validators.
2. **Stateless Blocks**: To make blocks verifiable without requiring the full state of the blockchain, Polkadot uses stateless blocks. This involves **attaching Merkle proofs to blocks**, effectively increasing their size but enabling transparent validation by any node. While this approach increases bandwidth consumption, it significantly reduces computational overhead and allows for efficient verification.
3. **Availability Commitments via Erasure Coding**: Polkadot employs Reed-Solomon erasure coding to ensure data availability. The block body is transformed into a codeword, which is then split into chunks distributed across validators. By committing to these chunks through Merkle trees, the network can guarantee that the data is retrievable and that the encoding is correct. Polkadot’s use of one-dimensional Reed-Solomon coding with a one-third threshold ensures that even if up to two-thirds of the chunks are missing or corrupted, the data can still be reconstructed.
4. **Efficient Block Auditing Protocol**: Polkadot’s block auditing protocol resembles a cut-and-choose mechanism under Byzantine fault tolerance assumptions. Validators declare responsibility for specific blocks and distribute the associated chunks to other validators. The network then performs an optimistic execution, sending messages across shards before full validation is complete. Finality is delayed until all blocks are approved, ensuring security without sacrificing performance. If disputes arise, the protocol escalates, and all validators check the block in question, with penalties applied to malicious actors.

**Key Features of Polkadot’s Protocol**
---------------------------------------

- **Inter-Shard Latency**: Polkadot achieves inter-shard latency on the order of tens of seconds, a significant improvement over the hour-long latencies in some ZK rollups or the week-long latencies in optimistic rollups.
- **Reduced Computational Overhead**: By requiring only about 30 to 35 checks per block (with potential reductions in future optimizations), Polkadot’s protocol is approximately **29 times more efficient than traditional sharding methods** in terms of total CPU time.
- **Security through Stake Exhaustion**: The protocol is designed to withstand attacks by economically disincentivizing malicious behavior. Validators stand to lose significant stakes (e.g., a $2 million penalty) if they are found to have acted dishonestly, providing a strong deterrent against attacks.

**Detailed Breakdown of the Block Auditing Process**
----------------------------------------------------

1. **Assignment of Auditing Tasks**: Validators use verifiable random functions (VRFs) to self-assign auditing tasks. This randomization ensures a fair distribution of workload and reduces the risk of collusion among malicious validators.
2. **Announcement and Synchrony**: Validators announce their assigned tasks to the network. This step requires synchrony assumptions, meaning that validators must have a consistent view of the network state to coordinate effectively.
3. **Reconstruction and Verification**: Validators reconstruct the block data from the available chunks and verify the correctness of the erasure coding. They then perform a full validation of the block’s contents.
4. **Delayed Finality**: The network delays finality until all assigned validators have approved the block. This approach balances performance with security, allowing for efficient processing while ensuring that invalid blocks are not finalized.
5. **Escalation and Disputes**: If any validator disputes the validity of a block or fails to report their findings, the protocol escalates. Additional validators are assigned to audit the block, and if the block is found invalid, severe penalties are imposed on the responsible parties.

**Advantages and Disadvantages of Polkadot’s Approach**
-------------------------------------------------------

*Advantages*:

- **Efficiency**: The protocol significantly reduces computational requirements compared to other methods, making it more scalable and cost-effective.
- **Security**: By combining soundness slashing with rigorous auditing and dispute mechanisms, Polkadot ensures a high level of security against malicious actors.
- **Low Latency**: The inter-shard communication is optimized for speed, enabling near real-time interactions between different parts of the network.

*Disadvantages*:

- **Complexity**: The protocol’s sophistication introduces complexity in implementation and maintenance. Developers and validators must navigate intricate processes, which can increase the risk of errors.
- **Dependence on Assumptions**: The protocol relies on synchrony assumptions and the effectiveness of soundness slashing, which may present challenges in certain network conditions.
- **Scaling Limitations**: While the protocol efficiently handles a moderate number of validators (e.g., up to 1,000), it may not scale indefinitely without adopting true sharding techniques or further innovations.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/C1teIFTSphE?si=nrFLm6LxO_lLlcTU" title="YouTube video player" width="560"></iframe>

**Observations and Insights from Jeff Burdges’ Presentation**
-------------------------------------------------------------

- **Off-Chain Execution**: The protocol benefits significantly from off-chain execution, allowing for faster and more efficient processing. However, this approach may not translate well to zero-knowledge rollups or similar technologies that rely heavily on on-chain computations.
- **Importance of Pipelining and Batching**: To achieve optimal performance, the protocol relies on pipelining and batching techniques. These methods streamline processing but add layers of complexity that must be carefully managed.
- **Need for Validator Accountability**: The protocol depends on validators acting responsibly and maintaining adequate hardware capabilities. Polkadot plans to introduce reward systems tied to performance to incentivize validators to meet the required standards.
- **Continuous Improvement**: The Polkadot team acknowledges that the protocol is a work in progress, with ongoing efforts to optimize performance, reduce latency, and enhance security.

### **Conclusion**

Jeff Burdges’ exploration of Polkadot’s efficient block auditing protocol highlights the platform’s commitment to advancing blockchain scalability and security. By innovatively combining soundness slashing, stateless blocks, availability commitments, and a sophisticated auditing process, Polkadot addresses many of the challenges inherent in existing block auditing protocols.

While the approach is not without its complexities and limitations, it represents a significant step forward in enabling blockchains to support real-world applications at scale. As Polkadot continues to refine its protocol and expand its capabilities, it contributes valuable insights and technologies to the broader blockchain ecosystem.