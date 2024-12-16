---
title: DatDot
---
Infraestructure  
 Storage  

DatDot enables reliable peer-to-peer data sharing and storage, enhancing data sovereignty and portability through innovative technology.

DatDot is Revolutionizing Peer-to-Peer Data Sharing and Storage
---------------------------------------------------------------

**DatDot** is an innovative project that aims to enhance the reliability and accessibility of **peer-to-peer (P2P) data sharing** by enabling the sharing of storage space and data seeding among users. The project seeks to address the inherent challenges of P2P networks, particularly the difficulty of accessing less popular or rare files. By leveraging advanced technologies and a unique protocol, DatDot aspires to make data sovereignty and portability more attainable and dependable for users.

DatDot Addressing P2P Network Challenges
----------------------------------------

P2P networks are generally more stable and accessible for popular files due to the widespread availability of these files across multiple nodes. However, accessing less popular files can be problematic since it requires at least one node to have the requested data and be able to connect to the requesting peer. This requirement is often hindered by users having limited internet access or turning off their devices. DatDot tackles this issue by creating a robust system for P2P data sharing, eliminating the need for users to rent servers or deal with the unreliability of traditional P2P sharing.

Key Components of DatDot
------------------------

DatDot’s architecture comprises two main building blocks:

1. **Dat Logic**: This component, written in JavaScript, handles the storage and retrieval of data from peers in the network. It manages connections, data transmission, local data verification, and storage. When a peer requests hosting for their data, an event is triggered involving encoders, hosters, and an attestor to ensure data is compressed, verified, and stored correctly before being made available for requests.
2. **Ledger Logic**: Developed using Rust and Substrate, this component manages the incentivized relationships between hosting requests and offers. It tracks user accounts, hosting plans, and peer selection for hosting setups, ensuring reliability through verification methods such as proof of delivery and proof of storage.

DatDot Advanced Technology Integration
--------------------------------------

DatDot integrates two powerful technologies to enhance its functionality:

### Dat/Hypercore Protocol

The Hypercore protocol is a dataset synchronization protocol designed to handle mutable datasets efficiently. It facilitates fast and scalable peer-to-peer applications by distributing data across multiple nodes. The protocol’s Merkle tree structure ensures data integrity, while its append-only log design allows for efficient data management and retrieval.

### Substrate Framework

Substrate is a modular framework for building custom blockchains. It provides essential components such as P2P networking, consensus algorithms, and cryptographic libraries, allowing developers to create tailored blockchains with specific functionalities. DatDot utilizes Substrate to build its custom ledger, which supports the incentivized hosting model.

DatDot Usage Scenarios
----------------------

DatDot can be utilized in various ways, catering to different user needs and developer expertise:

1. **Substrate Blockchain Developers**: Developers can integrate the DatDot pallet into their blockchain projects, leveraging the built-in incentive model to manage relationships between data creators and hosters.
2. **Hypercore Protocol Developers**: By using DatDot’s API, developers can enhance the retrievability of hypercore data, ensuring their applications benefit from reliable data hosting and sharing.
3. **Hypercore Users**: Users can install the DatDot app to connect with other peers and access hypercore-based applications via their browsers. The app allows users to specify resource availability and earn rewards for providing hosting services.

DatDot Community and Open Source Commitment
-------------------------------------------

DatDot is driven by a small group of open-source developers dedicated to providing social and technical infrastructure for the next-generation internet. The project’s code is available on GitHub, reflecting its commitment to transparency and community collaboration. Regular updates and announcements are shared on Twitter, and the community can engage via Discord and Cabal.

Funding and Support
-------------------

The development of DatDot has been supported by the **Playproject**, private donations, the [**Web3 Foundation**](https://dablock.com/ecosystem/web3-foundation/), and the **Polkadot treasury**. This funding underscores the project’s potential to transform P2P data sharing and storage.

Conclusion
----------

DatDot represents a significant advancement in P2P technology, offering a reliable and efficient solution for data sharing and storage. By automating the matchmaking process and ensuring the integrity of hosted data, DatDot paves the way for a more accessible and sovereign data ecosystem. As the project progresses towards its alpha release, it holds the promise of revolutionizing how data is managed and shared in decentralized networks.
