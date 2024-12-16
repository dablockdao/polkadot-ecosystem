---
title: 'Toni Mateos - Connecting Ethereum and Polygon to Polkadot Without Bridges'
description: 'Innovative tech talk by Toni Mateos from Freeverse on connecting Ethereum and Polygon to Polkadot without bridges, offering a live demo of this bridgeless solution.'
sidebar:
    label: Toni Mateos (Freeverse)
---

In a talk at Polkadot Sub0 2024 Bangkok, **Toni Mateos** from **Freeverse** presented an innovative approach to connecting major blockchain ecosystems like Ethereum and Polygon to Polkadot, without relying on traditional bridges. This novel method leverages the unique capabilities of the **Laos Network**, a parachain on Kusama, set to launch on Polkadot.

The Challenge with Current Blockchain Ecosystems
------------------------------------------------

Toni highlighted a significant challenge faced by Ethereum and Polygon: the high cost and congestion caused by minting NFTs. In 2022 alone, **Ethereum users paid over 1 billion dollars in gas fees for minting approximately 80 million NFTs**, accounting for around **20% of all transactions on the network**. This congestion not only makes transactions expensive but also limits the throughput of these networks.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vT1YQNpJTVqQyw67iCoICnBQlhyeO27rcEk6W9tR_mvtH6r1dXpUv-9OV69alLQKbkp09RqCaoFaxu1/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

The Bridgeless Solution
-----------------------

The core innovation discussed by Toni is the bridgeless pattern developed by the **Laos Network**. This method allows transactions, specifically NFT minting, to be offloaded from Ethereum and Polygon to Polkadot without the need for bridges. By doing so, the solution addresses the congestion and cost issues prevalent in these networks.

The process involves using Laos tokens on Polkadot to mint NFTs, while the recipients remain unaware of the underlying blockchain operations. From the user’s perspective, they continue to operate on Ethereum or Polygon, enjoying the benefits of these ecosystems without bearing the high costs and delays associated with NFT minting.

### Live Demo Highlights

During the live demo, Toni showcased the practical implementation of this bridgeless minting solution. Here are the key steps demonstrated:

1. **Setup**: The creator sets up a collection on Ethereum or Polygon and prepares to mint NFTs **using Laos tokens instead of paying in ETH or MATIC**.
2. **Minting Process**: The creator mints an NFT using a simple front-end interface, paying in Laos tokens. The recipient, using their MetaMask wallet, receives the NFT on Polygon or Ethereum without incurring any additional costs.
3. **User Experience**: The recipient can use the NFT within the ecosystem they are familiar with, such as trading on OpenSea or using it in various applications, without needing to interact with Polkadot directly.

### Technical Insights

The bridgeless pattern utilizes a unique approach to pre-allocate potential slots for each address on Ethereum and Polygon, linking them to resources on the Laos Network. This is achieved using Universal Location (ULOC), a concept familiar to those working with parachains on Polkadot. The system ensures that all transactions and ownership changes are traceable and verifiable across both consensus systems.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/W182ESHacK8?si=_TDb0lV4k36AhwEg" title="YouTube video player" width="560"></iframe>

### Future Prospects

As the **Laos Network** prepares for its full launch on Polkadot, the potential for this technology to revolutionize the scalability and efficiency of blockchain transactions is immense. By offloading a significant portion of transactions from congested networks like Ethereum and Polygon to Polkadot, this solution not only enhances the user experience but also opens up new possibilities for decentralized applications.

In conclusion, **Toni Mateos’s talk at Sub0 provided valuable insights into how Freeverse’s innovative bridgeless solution can alleviate some of the most pressing challenges in the blockchain space today**. This approach stands as a testament to the evolving landscape of blockchain technology and its potential to drive more efficient and user-friendly applications.