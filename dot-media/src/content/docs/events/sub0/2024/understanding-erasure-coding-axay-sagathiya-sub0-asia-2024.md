---
title: 'Understanding Erasure Coding with Chainsafe'
description: 'Explore erasure coding with Axay Sagathiya. Enhance data durability and efficiency in Polkadot blockchain. Join ChainSafe.'
sidebar:
    label: Axay Sagathiya (Chainsafe)
---

In a recent tech talk, Axay Sagathiya, a software engineer at ChainSafe, delved into the intricacies of erasure coding, a pivotal technology in data protection and redundancy. Here’s an overview of his insightful presentation.

## What is Erasure Coding?
Erasure coding is a data protection method that ensures the durability and availability of crucial data without the excessive storage overhead associated with traditional data replication methods. Instead of creating multiple identical copies of data, erasure coding divides data into fragments and adds redundant information, enabling data reconstruction even if some fragments are lost.

<iframe allowfullscreen="true" frameborder="0" height="569" mozallowfullscreen="true" src="https://docs.google.com/presentation/d/e/2PACX-1vT7hJaypwmcI-uxeE0APdySer2LsRLPlOtR8GP8oAz7M12TD-GPrEefNS1vTz-edTEmDhYnSrywtibe/embed?start=false&loop=false&delayms=60000" webkitallowfullscreen="true" width="960"></iframe>

## How Erasure Coding Works
Imagine having crucial data that you absolutely cannot afford to lose. Traditionally, you might create identical copies of this data and store them in various locations, which, while safe, is highly redundant and requires significant memory space. Erasure coding addresses this by dividing the data into fragments, adding redundancy, and distributing these fragments across multiple devices or nodes.

For example, if you have important data and six storage devices, erasure coding can create six fragments of this data, where four are original data fragments and two are redundant fragments (parity). Even if you lose some fragments, you can still reconstruct the original data using the remaining fragments.

## Advantages of Erasure Coding
1. **Improved Durability**: Data can be reconstructed anytime from the available fragments.
2. **Enhanced Availability**: Fragments can be accessed simultaneously, ensuring data availability.
3. **Reduced Memory Space**: No need to store entire redundant copies, thus saving storage space.

### Trade-offs of Erasure Coding
While erasure coding offers significant benefits, it also comes with trade-offs:

- **Computational Overhead**: Encoding and decoding data require additional computational resources, potentially impacting system performance.
- **Slower Reconstruction**: Reconstructing data can be slower due to the computational demands of encoding and decoding.

## Application of Erasure Coding in Polkadot
In the Polkadot ecosystem, erasure coding is used to ensure data availability and integrity. Polkadot’s architecture involves validators and collators working together to maintain the network. Here’s how erasure coding fits in:
1. **Parachain Validators**: Validators assigned to specific parachains (parallel chains) generate erasure-coded fragments of parachain blocks and their proofs of validity.
2. **Distribution of Chunks**: These fragments are distributed to corresponding validators on the relay chain.
3. **Reconstruction**: Even if some fragments are lost, the original data can be reconstructed using the remaining fragments.

Polkadot uses its implementation of erasure coding based on a polynomial approach, optimizing encoding and decoding processes.

### Formula for Reconstruction
Polkadot’s implementation uses a specific formula to determine the number of chunks required to reconstruct the original data. For instance, with six validators, only two chunks are needed to regenerate the data.

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/sLv0hgqE8u4?si=-Q42WiwQaeD9xypW" title="YouTube video player" width="560"></iframe>

#### Conclusion
Erasure coding is a game-changer in the realm of data protection and redundancy. It offers a more efficient way to ensure data durability and availability while reducing storage overhead. As demonstrated in Polkadot, it is a vital component in maintaining a robust and scalable network.

For those interested in the technical details and implementation of erasure coding in Polkadot, Axay recommended checking out the research papers and resources provided in his presentation.