---
title: 'Gavin Wood Talk at Token2049: JAM, the future of Polkadot.'
description: 'Introduction of JAM, the future of Polkadot, at Token2049 by Gavin Wood'
sidebar:
    label: Gavin Wood (Token2049 2024)
---
In his speech at **TOKEN2049** Dubai 2024, **Dr. Gavin Wood, founder of Polkadot, unveiled JAM**, a significant upgrade designed to propel Polkadot towards a scalable and feature-rich future.

The ***Join-Accumulate-Machine (JAM)*** represents a groundbreaking shift in blockchain technology, promising to redefine the operational mechanics and scalability of networks like **Polkadot**. Conceived by **Gavin Wood**, JAM is envisioned as a **successor to Polkadot’s relay chain**, focusing on improved efficiency and a more generic, less dogmatic framework.

Concept and Design of JAM
-------------------------

JAM operates on a simplified computational model known as ***“Collect, Refine, Join, Accumulate”***, abbreviated as **CoreJAM**. In practice, the JAM chain only employs the “Join” and “Accumulate” processes directly on the chain, delegating “Collect” and “Refine” to off-chain activities. This division of labor seeks to optimize processing efficiency and system responsiveness.

One of the significant changes in the introduction of JAM is its implementation as a single comprehensive update, rather than a series of iterative updates. This approach avoids the frequent minor tweaks and compatibility issues seen with current blockchain technologies and ensures a more stable and predictable upgrade path.

<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/ewAPsjNx9VeMUQ?hostedIn=slideshare&page=upload" width="476"></iframe>

### JAM: Specific Chain for Roll-ups

**JAM is designed specifically to manage *roll-ups***, focusing particularly on what is known in Ethereum as **optimistic roll-ups**. This design choice allows JAM to seamlessly integrate the results of decentralized calculations, maintaining a shared state similar to how the Polkadot Relay Chain currently works.

### Similarities with Smart Contracts

Despite its unique structure, JAM shares several characteristics with traditional smart contract chains:

- **Permissionless Interaction:** Code execution and state changes do not require permissions or external approvals.
- **Modular State Organization:** The states within JAM are encapsulated in what are called “***services***”, each containing its code and balance, reminiscent of smart contracts.


### JAM Key Features

1. **Refine Function:** **Handles stateless computation**, transforming the input data into a more compact form, ready for integration into the state of the chain.
2. **Accumulate Function:** This function integrates the outputs of the Refine function into the overall state of the service, **maintaining the continuity and integrity of the blockchain ledger**.
3. **OnTransfer Function:** Manages **interactions between different services**, facilitating asynchronous communication and status updates through the blockchain.

<figure aria-describedby="caption-attachment-5163" class="wp-caption alignnone" id="attachment_5163" style="width: 659px">![polkadot jam](../../uploads/2024/04/refine.webp)<figcaption class="wp-caption-text" id="caption-attachment-5163">polkadot jam</figcaption></figure>

### Benefits of JAM

1. **Increased Scalability:** JAM allows Polkadot to handle a much **higher volume of transactions**, overcoming a major hurdle for blockchain adoption.
2. **Flexibility:** JAM can not only handle transactions but also **host various services**, including the core functionality of the Relay Chain itself. This opens doors for future innovations on the Polkadot network.
3. **Improved Efficiency:** JAM offers a more efficient way to process data by distilling information from parachains (individual blockchains connected to Polkadot) before final processing.

### Improved Safety and Efficiency

JAM introduces a new security framework using extrinsic information types such as Guarantees, Assurances and Judgments to ensure the integrity and accuracy of calculations. Additionally, the chain architecture allows for significant data compression and efficient processing, with **Refine handling up to 5 MB of data and producing a maximum of 4 kB of output**.

### The Polkadot Virtual Machine (PVM)

At the heart of JAM’s processing capabilities is the **Polkadot Virtual Machine (PVM)**, based on the RISC-V ISA. This system provides a simple, secure and deterministic environment for executing code, distinguishing itself from other virtual machines by its simple and less dogmatic design.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/xTMiE0UcZUo?si=buppBwGVOhALKAnN" title="YouTube video player" width="560"></iframe>

### Networks and Block Production

JAM uses the **QUIC protocol** for networks, allowing direct and efficient connections between nodes. The blockchain employs a block production algorithm called SAFROLE, focused on simplicity and security, which is crucial to maintaining anonymity and minimizing forks in block production.

Future Perspectives and Improvements

Looking ahead, JAM aims to support a wide range of applications and services, leveraging its generic framework

> ## *Explanation of JAM for a 5 year old*
> 
> *Imagine you have a huge box of LEGO blocks, and you and your friends want to build different things at the same time. Instead of fighting over who builds what, they decide to share the LEGO bricks. Everyone can take a few blocks and build whatever they want, and if they need more, they just take more from the box. After they finish building, they put the blocks back so others can use them too.*
> 
> *In this story, JAM is like that big box of LEGO bricks. It allows many people to use the same resources (such as LEGO blocks) to build their own projects at the same time without getting in each other’s way. This way, everyone can build awesome things quickly and easily share with others.*
> 
> *So JAM helps everyone work together seamlessly, sharing and using things without having to wait a long time or fight over who gets what.*

> Okay chatgpt, explain me a brand new Gray Paper by [@gavofyork](https://twitter.com/gavofyork?ref_src=twsrc%5Etfw) like I am 5 <https://t.co/dF2P7f3ol4> [pic.twitter.com/V57lkfLQOk](https://t.co/V57lkfLQOk)
> 
> — Anton Khvorov (@AntonTheDay7) [April 18, 2024](https://twitter.com/AntonTheDay7/status/1780883499324436690?ref_src=twsrc%5Etfw)

What is the future of Polkadot now?
-----------------------------------

JAM will replace the relay chain. #Polkadot will always be Polkadot (just more generalized and service/aggregate focused), and the only way to interact with it will be with #DOT. There will be no new token!

> JAM will “just” be a new kind of virtual more powerful and efficient [\#Polkadot](https://twitter.com/hashtag/Polkadot?src=hash&ref_src=twsrc%5Etfw) CPU that will replace the Relay Chain. That’s really it. It will be CPU swap essentially. [pic.twitter.com/G51w2zyoUB](https://t.co/G51w2zyoUB)
> 
> — Filippo Franchini | Web3 Foundation (@filippoweb3) [April 18, 2024](https://twitter.com/filippoweb3/status/1780889931172262391?ref_src=twsrc%5Etfw)


Key takeaways from Gavin Wood’s JAM presentation at #TOKEN2049
--------------------------------------------------------------

1. JAM protocol specification will be finalized by the **end of the year**.
2. This protocol will **replace the Polkadot relay chain**.
3. The ***Polkadot Fellowship*** will be responsible for developing and implementing that protocol.
4. Goal: at least 3 independent implementations of the specification.
5. 10 million DOT dollars allocated to the teams working on this.

<script async="" charset="utf-8" src="https://platform.twitter.com/widgets.js"></script>