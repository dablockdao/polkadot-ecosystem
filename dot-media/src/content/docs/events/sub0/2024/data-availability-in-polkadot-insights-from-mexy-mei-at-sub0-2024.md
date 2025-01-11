---
title: 'Mexy Mei - Data Availability in Polkadot, Insights'
description: 'Mexy Mei insights on blob transactions and data availability on Polkadot. Learn how Crust Network is enhancing scalability in Polkadot.
'
sidebar:
    label: Mexy Mei - (Crust Network)
---

At the Sub0 2024 conference in Bangkok, Mexy Mei from Crust Network delivered an enlightening talk on blob transactions and the data availability problem within the Polkadot ecosystem. This article delves into the key points from Mei’s presentation, exploring the fundamentals and the innovative solutions proposed by Crust Network to enhance data availability in decentralized environments.

## Introduction to Crust Network
Crust Network is a parachain designed specifically for decentralized storage, integrating IPFS as its native storage layer. With over 1,500 nodes and more than 2 million storage orders on-chain, Crust Network has established itself as a pivotal player in providing decentralized storage solutions. These solutions cater to various applications, including decentralized hosting and storage for dApps, NFTs, and more.

<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/fSVqo7n4cfHZRy?hostedIn=slideshare&page=upload" width="476"></iframe>

## Understanding Data Availability
Mei began by explaining the concept of data availability and its significance. Data availability ensures that data required for transaction verification is accessible and can be verified in a trustless manner. This concept is crucial for the functionality of light nodes in networks like Bitcoin and Ethereum, where nodes must verify transactions efficiently without storing the entire blockchain.

## The Evolution of Ethereum’s Sharding and Rollups
Mei highlighted the historical context of Ethereum’s scalability issues and the shift from execution sharding to rollup-centric solutions. The introduction of rollups like Arbitrum and Optimism addressed execution scalability but brought about new challenges in data costs. This led to the development of data sharding, aimed at optimizing data storage and reducing costs.

## Blob Transactions and Proto-Danksharding
The talk introduced the concept of blob transactions, a new transaction type that includes a data blob as an attachment. Validators and full nodes store and verify these blobs temporarily, reducing long-term storage demands on the blockchain. This approach is a precursor to Proto-Danksharding, which aims to enhance data availability while minimizing resource usage.
1. **Blob Transactions**: Users attach data blobs to transactions, which are stored and verified by validators for a limited period (e.g., one or two weeks). This reduces the storage burden on the blockchain.
2. **Data Availability Committee**: A small, randomly selected group of validators is responsible for processing and verifying blob transactions, further optimizing resource use.
3. **Data Availability Sampling (DAS)**: This involves techniques like erasure coding, where data is split into chunks and distributed across the network. Validators only store and verify a subset of these chunks, ensuring data can always be reconstructed.

## Crust Network’s SubDA Proposal
Mei introduced the SubDA proposal, which aims to provide a data availability package for Substrate-based blockchains. This proposal includes:
- **User Blob Transactions**: Standardized interfaces for data availability operations compatible with Substrate-based chains.
- **Standalone DA Chain**: A dedicated parachain offering data availability services, enhancing scalability and reducing costs.
- **Blob Market and Assurance Pool**: Mechanisms for pricing and securing data blobs, ensuring long-term data availability.

The SubDA proposal leverages the decentralized nature of Crust Network’s storage solutions, integrating seamlessly with the Polkadot ecosystem to offer robust data availability.

### The Need for Modularity
Mei emphasized the trend towards modular blockchain designs, driven by the need to optimize resource use and reduce costs. As blockchains become more complex and data-heavy, separating data availability functions from core operations becomes increasingly important. This modular approach not only enhances scalability but also ensures that blockchains can adapt to evolving demands efficiently.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/yWmSNRl7uCQ?si=D3e7IGK3EQZ1It5k" title="YouTube video player" width="560"></iframe>

#### Conclusion
Mexy Mei’s talk at Sub0 2024 provided valuable insights into the challenges and solutions surrounding data availability in decentralized networks. By introducing innovative concepts like blob transactions and the SubDA proposal, Crust Network is paving the way for more scalable and efficient blockchain ecosystems. As the Polkadot network continues to evolve, these advancements will play a crucial role in supporting its growth and sustainability.