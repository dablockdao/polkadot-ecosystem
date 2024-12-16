---
title: 'Light Clients and Scalability on Substrate w/ Avail'
description: 'Ghali El Ouarzazi from Avail discusses decentralized scalability on Substrate using light clients for secure and efficient data availability.'
sidebar:
    label: Ghali El Ouarzazi (Avail)
---

At Sub0 Asia 2024, **Ghali El Ouarzazi**, a senior blockchain engineer at [**Avail**](https://dablock.com/dapps/avail-project/), delivered an insightful presentation on the role of light clients and decentralized scalability on Substrate. Here’s a comprehensive overview of the talk, focusing on the importance of light clients and the architectural choices that make decentralized scalability feasible.

Introduction to Avail Project
-----------------------------

Avail is renowned as a data availability layer built on Substrate. This layer is crucial in the Ethereum ecosystem, especially as rollups become a central solution for off-chain computation. With increasing demand for data availability, solutions like Avail are essential for ensuring that rollups and app-specific chains have access to reliable and scalable data.

Avail, initially developed within Polygon and later spun out as a standalone entity, aims to be a credibly neutral data availability layer for the broader blockchain ecosystem. The decision to build on Substrate was driven by several factors, including validator decentralization and the robust features provided by the **Polkadot SDK**.

### Why Substrate?

Substrate was chosen for its flexibility and modularity, allowing Avail to build a robust infrastructure. Substrate’s fast finality, proven consensus mechanisms (BABE/GRANDPA), and resilient architecture make it ideal for supporting Avail’s goals of creating a scalable, secure, and trust-minimized blockchain environment.

### The Role of Light Clients

Light clients are pivotal in ensuring decentralized scalability. They allow secure and decentralized access to blockchain data without requiring full node capabilities, making them ideal for devices with limited resources. Light clients verify information using block headers and Merkle roots, enabling trust-minimized interactions.

Avail’s scalable light client network efficiently verifies KZG Polynomial Commitments in block headers. These light clients can operate on various devices, including mobile phones, smartwatches, and browsers, making them highly versatile.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vSCLBMMl8FA2ZzQSNsnZYjN_WT39QfyxIdeiQW6Y3qNH3qkDDlhYOBYPtffOzTT1lysFCR6rbLw7L9O/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

Avail’s Light Client Architecture
---------------------------------

Avail’s light clients are designed to provide the highest data availability guarantees. Key features include:

- **Data Availability Sampling**: Light clients use advanced techniques like KZG polynomial commitments and erasure coding to verify data availability by downloading only small portions of the block.
- **Application-Specific Queries**: Transactions are associated with an application ID, allowing light clients to query and retrieve data specific to one rollup or application.
- **Cross-Platform Compatibility**: Light clients can operate on various devices, from desktops to mobile phones, enhancing the network’s reach and resilience.

### Detailed Architecture and Modifications

1. **Substrate Base Layer**: Provides the block space and infrastructure, ensuring proper sequencing, packaging, and publication of data.
2. **Extended Headers**: Avail’s blocks contain extended headers with all necessary information for data availability sampling.
3. **Sign Extension**: Associates each transaction with an application ID for easy retrieval.
4. **20-Second Block Time**: Chosen to allow sufficient processing time for light clients and additional processing at the end of each block.

### Data Flow in Avail

- **Data Submission**: Applications submit data blobs associated with application IDs.
- **Data Sorting and Commitments**: Data is sorted, chunked, padded, and KZG commitments are generated.
- **Erasure Coding**: Data is erasure-coded, extended commitments are created, and the data is included in the extended header.
- **Verification and Import**: Blocks are propagated and imported after native Substrate verification and additional header checks.

### Light Client Network

Light clients operate in a peer-to-peer overlay network, communicating with each other to enhance performance and reliability. They perform data availability sampling, query relevant data, and cache queried cells to optimize network efficiency.

### Future Optimizations

Ghali highlighted several areas for future improvements:

- **RPC Enhancements**: Enable light clients to perform additional processes, reducing the workload on RPC nodes.
- **Submatrix Level Openings**: Improve efficiency by allowing commitments at the submatrix level.
- **Networking Improvements**: Enhance block propagation and import mechanisms to handle larger payloads.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/HAUDAMDyNuw?si=4-TGq-i_ElK5YFKh" title="YouTube video player" width="560"></iframe>

#### Conclusion

Ghali’s presentation underscored the critical role of light clients in achieving decentralized scalability on **Substrate**. By leveraging advanced data availability techniques and a robust light client architecture, Avail is poised to support a wide range of rollups and app-specific chains, ensuring secure, scalable, and efficient data availability.