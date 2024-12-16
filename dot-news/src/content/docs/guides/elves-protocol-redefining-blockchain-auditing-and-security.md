---
title: 'ELVES Protocol Redefining Blockchain Auditing and Security'
description: 'Discover the ELVES protocol for efficient blockchain auditing under Byzantine assumptions, ensuring scalability, security, and resilience.'
---
When we talk about blockchain technology, the need for secure, scalable, and efficient systems is paramount. Addressing this challenge head-on, **a team of researchers from the [Web3 Foundation](https://dablock.com/ecosystem/web3-foundation/)**, including Jeff Burdges, Alfonso Cevallos, Handan Kılınç Alper, Chen-Da Liu-Zhang, Fatemeh Shirazi, and Alistair Stewart, collaborated with implementors from Parity Technologies such as Alex Gheorghe, Rob Habermeier, Robert Klotzner, Bastian Köcher, Andronik Ordian, Maciej Kris Żyszkiewicz, and Andrei Sandu. Together, they developed the **ELVES protocol**, a groundbreaking **solution designed to ensure efficient execution auditing for blockchains operating under Byzantine assumptions**.

- Read the full research: [Efficient Execution Auditing for Blockchains under Byzantine Assumptions](https://eprint.iacr.org/2024/961).

Understanding Byzantine Assumptions in Blockchain
-------------------------------------------------

Byzantine assumptions refer to a scenario where parts of a decentralized system, such as nodes or validators, may fail or behave maliciously. This model assumes that there is no central authority to enforce trust, meaning that the system must be robust enough to handle failures or attacks from within. For blockchains, **this means ensuring that even if a subset of nodes is compromised, the integrity of the blockchain remains intact**.

### The Need for Efficient Execution Auditing

Block auditing in blockchain systems is a critical function that ensures the validity and availability of blocks added to the chain. Traditionally, this process requires significant computational resources, as every node in the network must validate the blocks independently. This approach, while secure, is inefficient and can become a bottleneck, especially as the blockchain scales. The challenge is to reduce the computational overhead while maintaining security and decentralization—key features of any blockchain.

The ELVES Protocol: A Solution for Efficient Auditing
-----------------------------------------------------

The **ELVES (*Endorsing Light Validity Evaluator System*)** **protocol**, introduced by the research team, represents a significant advancement in blockchain execution auditing. Developed and implemented by the [**Web3 Foundation**](https://dablock.com/ecosystem/web3-foundation/) and [**Parity Technologies**](https://dablock.com/ecosystem/parity-technologies/), **ELVES is designed to provide a scalable, efficient, and secure auditing layer** that addresses the limitations of traditional block auditing methods.

Key Features of the ELVES Protocol
----------------------------------

1. **Adaptive Auditing Committees**: Unlike static committees used in traditional approaches, ELVES employs dynamic auditing committees that adapt based on network conditions. This flexibility allows for smaller committee sizes, which reduces the computational load on individual nodes while maintaining the overall security of the network.
2. **Byzantine Resilience**: ELVES is designed to withstand Byzantine failures, including adaptive crashes where an adversary may attempt to disrupt the network by causing nodes to fail. The protocol ensures that the system remains secure and operational even under these conditions.
3. **Efficient Use of Resources**: By employing a phased approach to block validation, where only a subset of nodes initially audits the block, ELVES significantly reduces the resource requirements for block auditing. This is particularly beneficial in large networks where full node participation in every audit would be impractical.

How ELVES Works
---------------

The ELVES protocol operates in several distinct phases, each contributing to the overall efficiency and security of the blockchain auditing process:

1. **Backing Phase**: A small group of initial auditors, known as “backers,” receive and validate the block. If the block is deemed valid, these backers sign a claim attesting to its validity.
2. **Availability Phase**: The block is then distributed across the network using a **Reed-Solomon encoding**, ensuring that even if some nodes fail or are compromised, the block can still be reconstructed and validated by other nodes.
3. **Approval Phase**: Auditors are randomly selected to further check the block’s validity. If an auditor does not respond in time, additional auditors are selected. This dynamic adjustment ensures that the block is thoroughly vetted while keeping the committee sizes manageable.
4. **Dispute Resolution**: If any auditor flags a block as invalid, the protocol enters a dispute phase where all auditors are required to verify the block. This collective check ensures that no invalid block can pass through the system without detection.

ELVES Security Analysis
-----------------------

The security of the ELVES protocol is rooted in its ability to adapt to various network conditions and its resilience against Byzantine adversaries. The protocol’s design ensures that even in the presence of up to one-third of corrupted nodes, the blockchain remains secure and operational. This is achieved through:

- **Randomized Auditing**: The use of verifiable random functions (VRFs) to select auditors ensures that the selection process is unbiased and resistant to manipulation.
- **Incremental Validation**: By starting with a small committee and only expanding when necessary, **ELVES minimizes the risk of widespread failure** while ensuring that every block is thoroughly checked.
- **Collateral-Based Security**: Auditors in the ELVES protocol are required to stake collateral, which is forfeited in the case of misbehavior. This economic incentive discourages malicious actions and aligns the interests of the auditors with the overall security of the network.

### Comparison with Traditional Approaches

Traditional blockchain auditing systems often rely on static committees or full node participation, both of which have significant drawbacks:

- **Static Committees**: These require a large number of participants to ensure security, leading to high computational and communication costs. Additionally, they are vulnerable to targeted attacks that can compromise the entire committee.
- **Full Node Participation**: While this approach maximizes security, it is highly inefficient and not scalable for large networks.

In contrast, ELVES provides a more efficient and scalable solution by dynamically adjusting the size and composition of auditing committees, thereby reducing the resource burden on individual nodes and enhancing the overall security of the blockchain.

- - - - - -

### Conclusion

**The ELVES protocol, developed through the collaborative efforts of the [Web3 Foundation](https://dablock.com/ecosystem/web3-foundation/) and [Parity Technologies](https://dablock.com/ecosystem/parity-technologies/)**, represents a significant step forward in the efficient execution auditing of blockchains under Byzantine assumptions. By combining dynamic committee selection, Byzantine resilience, and resource efficiency, ELVES addresses the key challenges of traditional block auditing methods. As blockchain networks continue to grow in size and complexity, protocols like ELVES will be essential in ensuring their security, scalability, and efficiency.

For developers and network operators within the [**Polkadot and Kusama ecosystems**](https://dablock.com/ecosystem/), the implementation of ELVES offers a robust framework for maintaining the integrity of the blockchain while optimizing resource use. As blockchain technology continues to evolve, the principles and techniques pioneered by ELVES will likely become standard practice in the industry.

- Read the full research: **[Efficient Execution Auditing for Blockchains under Byzantine Assumptions](https://eprint.iacr.org/2024/961)**.

- - - - - -