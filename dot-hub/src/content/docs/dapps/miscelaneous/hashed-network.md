---
title: 'Hashed Network'
---
Ecosystem  

Hashed Network is a blockchain-based platform built on Substrate, designed to provide useful functionalities for businesses through various purpose-built pallets.


Introduction to Hashed Network
------------------------------

Hashed Network is a blockchain-based platform built on Substrate, designed to provide useful functionalities for businesses through various purpose-built pallets. It supports applications and products that operate using these network pallets, creating a versatile and secure ecosystem for business operations. While advanced users can directly interact with the network using tools like polkadot-js, most users access the network through independent applications built on top of it.

This article delves into the architecture, components, and functionalities of the Hashed Network, highlighting its significance within the Polkadot ecosystem.

Hashed Network General Architecture
-----------------------------------

The architecture of Hashed Network is divided into three main layers:

1. **Hashed Network Core**
2. **Application Layer**
3. **Polkadot Relay Chain**

### Hashed Network Core

The core is divided into two primary sections: Protocols and Core.

#### Protocols

- **Frequent Upgrades**: Focused on core developer improvements and market-led functionalities.
- **Core Developer Focus**: Prioritizes innovations and advanced functionalities for businesses.

Key components include:

- **Fruniques**: Allows the creation and management of fractional assets, building on the Uniques pallet.
- **Confidential Documents**: Provides services for handling confidential documents securely.
- **Marketplace**: Enables users to create and manage their own marketplaces.
- **Bitcoin Vaults**: Supports multi-user signature orchestration for Bitcoin and other assets.
- **Fund Administration**: Offers tools for fund management.
- **RBAC**: Role-Based Access Control for managing user permissions.

#### Core

- **Infrequent Changes**: Primarily uses parity-authored pallets with a focus on maintenance and reusability.
- **Market-Led Functionality**: Implements stable and reusable components.

Key components include:

- **Treasury**: Manages network funds.
- **Collectives**: Supports collective decision-making processes.
- **Balances**: Handles balance-related transactions.
- **Identity**: Manages user identities.
- **Gov**: Governance-related functionalities.
- **Recovery**: Supports account recovery mechanisms.
- **XCM**: Cross-chain messaging for communication between parachains.

### Application Layer

This layer hosts various applications that interact with the Hashed Network Core to provide business functionalities to end-users.

Key applications include:

- **Afloat**: A tax credit marketplace with functionalities for verified users, fractional assets, and appraisals.
- **Treasury Vaults**: Provides multi-user signature orchestration for Bitcoin, USD/T, and DOT-native assets.
- **EB5 Proxy**: A fund administration platform for the EB5 investment industry.
- **Business Directory**: Lists verified business entities and multi-network receiving addresses.

### Polkadot Relay Chain

The Hashed Network communicates with other parachains via the Polkadot Relay Chain, ensuring security and interoperability across different networks.

Hashed Network Components
-------------------------

### Afloat Client API

Provides methods to interact with the gated Marketplace, Uniques, and Fruniques pallets, facilitating the Afloat-specific flow.

### Marketplace UI

The user interface for the Hashed Network Portal, allowing users to interact with all system components.

### Confidential Documents Server and API

Handles backend services for confidential documents, enabling secure storage and sharing of sensitive information.

### Faucet Server

Provides token distribution services for new accounts, reducing user onboarding friction.

Bitcoin Orchestration
---------------------

### Introduction

Recent Bitcoin innovations, such as BIP 174 and the Taproot upgrade, enable developers to decouple the signing experience from transaction orchestration. Hashed Network leverages these innovations for Bitcoin orchestration.

### Key Features

- **No-Code Spending Policies**: Tools like Elephant allow constructing complex spending policies.
- **Coin Control**: Organizes and labels UTXOs for proper bookkeeping.
- **Proof of Reserves**: Ensures treasurers can prove access to listed UTXOs.

Hashed Network Marketplace Protocol
-----------------------------------

### Roles and Permissions

- **Owner**: Manages the marketplace and specifies accounts for commission payments.
- **Administrator**: Approves new participants and asset graders.
- **Asset Grader/Appraiser**: Adds grades and scores to assets.
- **Redemption Specialist**: Transforms on-chain assets into real-world assets.
- **Market Participant**: Originates and purchases assets.
- **Arbitrator**: Resolves disputes and releases escrowed funds.

### Fractionalizable Assets

Each asset can be infinitely fractionalized, allowing partial ownership and detailed tracking of asset transactions.

Hashed Privacy and Security
---------------------------

### Privacy-Preserving Storage

Users can encrypt and selectively share data linked to assets and marketplace transactions, ensuring privacy and security.

Hashed Network Developer SDK
----------------------------

### Features

- Flexible authentication methods.
- Configurable integrations for asset management and payments.
- Business pallets supporting role-based access control and on-chain accounting.
- End-to-end file storage with peer and group sharing.
- WASM-based runtime for industrial-grade network operations.

Genesis Allocations and HASH Tokenomics
---------------------------------------

### Allocation Categories

- Founding Team
- Investors
- Community
- Ecosystem
- Marketing
- Development
- Slot Leases
- Reserve

### Vesting and Budgeting

Vesting records are created for each allocation category, ensuring balanced distribution and network health management.

### Governance Plan

- Phase 1: Initial setup with Sudo key for upgrades.
- Phase 2: Remove Sudo key and diversify signers.
- Phase 3: Implement burns on unused allocations and adopt Gov2 practices.

### Conclusion

Hashed Network provides a robust, secure, and versatile platform for businesses within the Polkadot ecosystem. With its comprehensive architecture, extensive functionality, and developer-friendly SDK, it stands out as a valuable addition to the blockchain landscape. Advanced users can leverage its full potential directly, while most users benefit from the seamless integration of independent applications.
