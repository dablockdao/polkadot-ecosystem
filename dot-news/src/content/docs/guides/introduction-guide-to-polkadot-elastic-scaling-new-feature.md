---
title: 'Introduction Guide to Polkadot Elastic Scaling New Feature'
description: 'Polkadot''s Elastic Scaling, enhancing blockchain throughput with multi-core processing and asynchronous backing.'
---
Polkadot network is designed to facilitate interoperability between multiple blockchains, known as parachains. As the demand for scalable and efficient blockchain solutions grows, **Polkadot’s architecture continues to evolve**. One of the most significant advancements in this evolution is the introduction of **Elastic Scaling**, a feature that promises to enhance the network’s ability to process multiple transactions and increase throughput without compromising security or decentralization.

Understanding Polkadot Elastic Scaling
--------------------------------------

Elastic Scaling is a pivotal upgrade in the Polkadot ecosystem, **aimed at optimizing the way parachains interact with the relay chain**. The relay chain is the central component of Polkadot, responsible for coordinating and securing the activities of all connected parachains. Traditionally, parachains submit blocks, known as parablocks, to the relay chain for validation and inclusion. However, the sequential nature of this process can limit the number of transactions processed per unit of time.

With Elastic Scaling, Polkadot introduces a paradigm shift by **enabling parachains to use multiple cores for processing and including parablocks within the relay chain block**. This multi-core approach allows parachains to submit and validate multiple parablocks simultaneously, significantly reducing the time required to finalize transactions and increasing the overall network throughput.

How Polkadot Elastic Scaling Works
----------------------------------

The Elastic Scaling mechanism operates in distinct phases, progressively enhancing the capabilities of parachains and the relay chain:

1. **Asynchronous Backing**: The first step towards Elastic Scaling involves asynchronous backing, an optimization that allows parachains to produce blocks more rapidly. This is achieved by allowing collators—entities responsible for producing parablocks—to generate multiple blocks even if previous blocks have not yet been included in the relay chain. Asynchronous backing also introduces unincluded segments and augmented information, further streamlining the block production process.
2. **Multi-Core Processing**: Elastic Scaling enables the relay chain to allocate multiple cores for parachain block processing. This means that multiple parablocks can be backed and included within the same relay chain block, significantly reducing the time taken for transactions to be finalized. For example, using two cores, a parachain can submit and **include four parablocks in just 12 seconds**, as opposed to the 24 seconds required without Elastic Scaling.
3. **Phase Implementation**: The implementation of Elastic Scaling is being rolled out in multiple phases. The initial phase targets parachains with a trusted and permissioned collator set, allowing for a seamless introduction of Elastic Scaling without altering the candidate receipt. Subsequent phases will introduce changes to the candidate receipt, enabling the use of an untrusted and permissionless collator set, and ultimately, full integration with the Cumulus framework. **This will allow appchains to continuously access multiple cores**, further enhancing their processing capabilities.

Polkadot Elastic Scaling Technical Challenges
---------------------------------------------

The introduction of Elastic Scaling presents several technical challenges, particularly concerning the coordination between collators and the relay chain. Collators must increase their block production rate to fully utilize the multiple cores available on the relay chain. Additionally, the relay chain must ensure that **all state roots of the parachain blocks align during inclusion**, even as these blocks are processed on different cores.

As Elastic Scaling progresses through its implementation phases, the technical specifications for collators and the relay chain will likely evolve to accommodate the increased processing demands. These developments are crucial for maintaining the security, decentralization, and efficiency of the Polkadot network.

### Conclusion

Elastic Scaling represents a significant advancement in Polkadot’s ongoing mission to create a scalable, interoperable, and secure blockchain ecosystem. By enabling parachains to utilize multiple cores and process blocks more efficiently, Polkadot is poised to meet the growing demands of decentralized applications and services. As **Elastic Scaling** continues to roll out, it will play a crucial role in solidifying Polkadot’s position as a leading blockchain protocol capable of supporting the next wave of innovation in the decentralized web.