---
title: Frequency
description: Frequency is a specialized Layer 1 public blockchain designed to realize the Decentralized Social Networking Protocol (DSNP).
---

**Frequency** is a specialized **Layer 1 public blockchain designed to realize the [Decentralized Social Networking Protocol (DSNP)](https://dablock.com/dapps/dsnp-protocol/)**. It offers critical infrastructure for next-generation social networking applications, empowering individuals with greater control over their data and enabling participation in the evolving digital economy. Frequency provides scalable message discovery, flexible state storage for **social graph and identity data**, and primitives for cost-shifting and delegation of authority. This unique combination allows applications to offer intuitive user experiences while ensuring user control over personal data and online relationships. Frequency introduces an alternative **economic model based on Message Batching** and token staking for recurring network capacity, making it adaptable for future protocols with similar requirements. The native coin for Frequency is named **FRQCY**.

## Frequency Architecture

Frequency is built as a Layer 1 blockchain tailored to support high-volume, data-driven applications within a decentralized environment. Its architecture includes core components essential for operation within the **Polkadot ecosystem**, ensuring robust performance and interoperability.

1. **Operational Model**Frequency nodes are crucial for maintaining chain state and processing data. Nodes can be configured for various roles:
  
  
  - **Full Nodes:** Maintain the full state of the chain.
  - **Light Client Nodes:** Allow applications to observe chain events.
  - **Archive Nodes:** Store the complete historical state of the chain.
  
  Nodes run the Frequency Runtime, encapsulated in platform-independent WebAssembly (Wasm) code, ensuring consistent state transition processing across the network. Upgrades to the Frequency Runtime are managed through Frequency Governance.
2. **Deployment**
  - **Mainnet:** Utilizes validators from the Polkadot Relay Chain for production.
  - **Testnet:** Uses validators on the Polkadot Rococo Testnet Relay Chain for testing and development.
  
  Changes are first deployed to Testnet before Mainnet, ensuring robust testing and smooth upgrades.

## Frequency Interaction Model

Users and applications interact with Frequency Nodes through extrinsics, State Queries, Runtime APIs, and Custom RPCs.

1. **Extrinsics:** Transactions performed on the chain, requiring cryptographic signatures for validation.
2. **State Queries:** Directly access the key-value store of the chain state.
3. **Runtime APIs:** Provide access to chain and node information without direct key-value store access.
4. **Custom RPCs:** Allow for complex processing and external calls not suitable for the Wasm runtime.

### Collators and Relay Chain

Frequency uses collator nodes to collect transactions and produce state transition proofs. These blocks are submitted to the **Polkadot relay chain** for validation and security. This setup allows Frequency to focus on user functionality while leveraging the Relay Chain’s robust security.

## Frequency Identity Management

Frequency introduces a discoverable and addressable user identity system, crucial for social networking applications. Key components include:

1. **Message Source Accounts (MSAs):** Unique to Frequency, enabling data with verifiable authorship.
2. **Control Keys:** Cryptographic keys for identity control.
3. **User Handles:** Human-readable identifiers for MSAs.

## Frequency Data Management

Frequency’s data management is designed for secure and efficient high-volume user-generated data distribution.

1. **Schemas:** Define data structure, storage, and semantics for protocol-related data.
2. **Schema Registry:** On-chain repository for Frequency Schemas, ensuring data correctness and interoperability.
3. **Messages:** Published data conforming to Frequency Schemas, facilitating high scalability through off-chain aggregation.
4. **Stateful Storage:** Allows users to store data as part of the chain state, with itemized and paginated storage options for efficient data management.

## Frequency Delegation Model

Frequency’s Delegation Model balances accessibility with user control by shifting complexity and fees to Providers. Users can interact with the chain without needing tokens, delegating tasks to Providers who act on their behalf.

**Frequency (FRQCY) Tokenomics**

Frequency’s economic model supports scalable social networking, focusing on non-financial data transactions.

1. **Collator Incentives:** Rewards for block formation.
2. **Provider Incentives:** Capacity model for cost-efficient Message publishing.
3. **User Incentives:** Provider Boosting mechanism for user support and rewards.

### FRQCY Initial Token Distribution

 One billion FRQCY were created at Genesis and allocated as follows:

- **Frequency Network Foundation**
  - Foundation: 2.0%
  - On-Chain Treasury: 53.0%
  - Strategic Partners: 5.0%
- **Amplica Labs**
  - Investors: 22.0%
  - Team: 14.5%
  - Treasury: 3.5%

#### Conclusion

Frequency, developed by[ **Project Liberty**](https://dablock.com/ecosystem/project-liberty/), stands as a robust infrastructure for decentralized social networking within the Polkadot ecosystem. Its innovative architecture, comprehensive data management, and user-centric economic model position it as a cornerstone for future social networking applications, emphasizing user control, scalability, and interoperability.
