---
title: 'TEA Project'
description: The TEA Project is a decentralized cloud computing platform designed to host rich, decentralized applications (dApps) in a fully serverless environment.
---

The TEA Project is a decentralized cloud computing platform designed to host rich, decentralized applications (dApps) in a fully serverless environment. Built upon blockchain technology and trusted hardware, the TEA Project aims to bridge the gap between the decentralized and centralized computing paradigms, providing developers with the tools to create secure, scalable, and censorship-resistant applications. This article provides an in-depth look at the TEA Project, its unique features, technological underpinnings, and its place within the Polkadot ecosystem.

TEA Project Executive Summary
-----------------------------

The TEA Project offers a decentralized compute layer that operates on par with traditional cloud applications. By leveraging hardware security modules (HSM) within decentralized compute nodes, TEA ensures a secure app execution environment. Its state machine runs continuously using time as a root of trust to order transactions, making the TEA Project an ideal entry point for developers transitioning from Web2 to Web3 without needing to learn new programming languages or adapt to blockchain concepts.

The Problem with Current Decentralized Systems
----------------------------------------------

Current decentralized systems, particularly those based on smart contracts, face significant limitations in terms of scalability, speed, and complexity. Smart contracts are slow and expensive to execute due to their reliance on consensus mechanisms. Additionally, while technologies like IPFS enable decentralized file storage, they struggle with dynamic content, further limiting the capabilities of decentralized applications (dApps).

TEA Project’s Solution
----------------------

The TEA Project addresses these limitations by combining blockchain technology with trusted hardware and time-based consensus mechanisms. This triad of roots of trust—blockchain, trusted hardware, and time—enables the TEA Project to offer decentralized front-end and back-end server tiers, along with a decentralized database, effectively mimicking traditional cloud computing environments but with enhanced security and decentralization.

1. **Proof of Time:**
  
  
  - TEA’s state machine uses time (via atomic clocks or GPS) to order transactions. This method, similar to Google’s Spanner database, allows for reliable transaction ordering without the delays associated with traditional consensus mechanisms.
2. **Proof of Trust:**
  
  
  - The execution environment’s integrity is ensured using trust data from onboard TPM chips. This data is recorded on the blockchain, verifying that each compute node operates as expected.

#### Key Features of the TEA Project

1. **Trusted Execution and Attestation (TEA):**
  
  
  - TEA nodes use HSM to create secure enclaves for app execution. This ensures that user data remains private and computations are tamper-proof.
  - The platform’s non-traditional consensus mechanisms eliminate the need for complex math problems, reducing the computational burden on nodes.
2. **Decentralized App Execution:**
  
  
  - The TEA Project enables full-speed decentralized app execution by leveraging blockchain for remote attestation results and economic incentives.
  - Compute nodes process transactions based on time-ordered consensus, ensuring consistency across the network.
3. **Developer-Friendly Environment:**
  
  
  - Developers can build and deploy applications using familiar programming languages, with output compiled into WebAssembly (Wasm) for execution within the TEA network.
  - TEA’s SDK and development framework simplify the transition from Web2 to Web3, allowing developers to create decentralized apps without extensive blockchain knowledge.
4. **Enhanced Privacy and Security:**
  
  
  - User data and app code are processed within HSM-protected enclaves, ensuring no data leakage.
  - After execution, enclave contents are destroyed, leaving no traces of private data.

TEA Project Architecture
------------------------

1. **Compute Layer:**
  
  
  - The TEA compute layer runs within nodes equipped with TPM chips and GPS modules. These nodes form a secure, decentralized network where app code and user data are processed in protected enclaves.
  - Transactions are timestamped and ordered by their timestamps, creating a consistent transaction sequence across all nodes.
2. **State Storage:**
  
  
  - State changes are stored in RAM within the state maintainer nodes, with backups kept in encrypted form on IPFS. This setup ensures quick synchronization and reliable state maintenance.
3. **Consensus Mechanisms:**
  
  
  - **Proof of Time:** Uses timestamps from atomic clocks or GPS to order transactions.
  - **Proof of Trust:** Verifies node integrity using trust data from TPM chips, recorded on the blockchain.

### Developer Experience

The TEA Project provides a seamless development experience, allowing developers to build decentralized applications using the same three-tier architecture (front-end, back-end, database) prevalent in cloud computing. The platform supports various programming languages, compiling them into Wasm for execution. Developers can focus on app logic without worrying about server management, as the TEA network handles hosting and execution.

TEA Project Ecosystem
---------------------

The ecosystem consists of miners, developers, and consumers:

- **Miners:** Provide the infrastructure by hosting nodes and are rewarded in TEA tokens based on resource consumption.
- **Developers:** Create and deploy TApps using the TEA SDK, benefiting from the platform’s security and decentralization.
- **Consumers:** Use TApps, invest in them through bonding curves, and promote TApps, contributing to the ecosystem’s growth.

TEA Project Tokenomics
----------------------

The TEA Project employs a multi-token system:

- **TEA Tokens (ERC-20):** Used for transactions, paying for app usage, and incentivizing node operators.
- **CML NFTs (ERC-721):** Represent mining licenses and are tied to node performance and trust status.

### Conclusion

The TEA Project stands at the forefront of decentralized cloud computing, offering a secure, scalable, and developer-friendly platform. By integrating blockchain, trusted hardware, and time-based consensus mechanisms, the TEA Project provides a robust solution for creating decentralized applications that can rival traditional cloud-based apps. As part of the Polkadot ecosystem, the TEA Project enhances the possibilities for secure, censorship-resistant, and privacy-focused computing.

- <small>Related Token/s:</small> **TEA**

