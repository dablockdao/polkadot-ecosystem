---
title: Snowbridge
description: Snowbridge is a trustless, decentralized bridge between Polkadot and Ethereum, enabling seamless cross-chain communication and diverse asset transfers with secure governance.
---

Snowbridge is a general-purpose, trustless, and decentralized **bridge designed to facilitate seamless communication and asset transfer between Polkadot and Ethereum**. Its objective is to launch as a common-good bridge on the proposed BridgeHub parachain, enhancing interoperability within the blockchain ecosystem.

Snowbridge Key Concepts
-----------------------

### Trustlessness 

In blockchain technology, trustlessness refers to a system where end users do not need to trust any participants or group of participants to protect their funds and ensure system functionality. Instead, they rely on protocols, mathematics, cryptography, code, and economic principles. **Snowbridge aims to provide a trustless environment** where user safety and expectations are maintained regardless of participant behavior.

### General-Purpose Functionality

Unlike many bridges that focus solely on token transfers, **Snowbridge supports the transfer of various assets**, including non-fungible tokens, loan contracts, and generalized asset transfers. It facilitates arbitrary state transfer across chains through messages not tied to any specific application, enabling diverse cross-chain applications.

### Deliverability and Delivery

Snowbridge differentiates between **Guaranteed Deliverability** and **Guaranteed Delivery**. Guaranteed Deliverability ensures that a message can be delivered across the bridge if the sender is willing to run the software and pay gas fees. Guaranteed Delivery ensures that there are **strong incentives or requirements for third parties to relay messages**, ensuring message delivery even if the sender does not relay them.

Snowbridge Overview
-------------------

Snowbridge provides a secure bridge between the BridgeHub parachain and the Ethereum Gateway contract. It enables communication between any Polkadot parachain and Ethereum using **Polkadot’s XCMP messaging protocol**. Parachains can send XCM instructions to BridgeHub to use the bridge.

Snowbridge Components
---------------------

### BridgeHub

**BridgeHub hosts various bridges**, including those to Ethereum and Kusama. It includes the following components:

- **InboundQueue**: Verifies inbound messages from Ethereum, converts them to XCM scripts, and sends them to the destination parachain.
- **OutboundQueue**: Manages outbound XCM messages to Ethereum, buffering messages and generating Merkle roots for verification.
- **EthereumBeaconClient**: Implements a light client to track Ethereum’s Beacon Chain, verifying inbound messages.
- **System**: Provides basic system functionality for bridge operations.

### Ethereum

On the Ethereum side, the bridge revolves around a central gateway contract responsible for receiving, verifying, and dispatching messages between Ethereum and Polkadot.

- **Gateway**: Manages inbound and outbound messages, token transfers, and other higher-level application features.
- **Agent**: Acts as a proxy for consensus systems in Polkadot, facilitating token deposits and message dispatch to destination contracts.
- **BeefyClient**: Implements a light client for verifying Polkadot Consensus using the BEEFY gadget.

### Channels

Bridge messages flow through logical channels, with each parachain allocated its own dedicated channel. This design allows parachain governance to manage rebalancing and custom fee/reward models, **minimizing potential blocking issues**.

#### Channels API

- **create\_channel**: Create a new channel with an initial configuration.
- **update\_channel**: Update an existing channel with a new configuration.

Snowbridge Fees &amp; Rewards
-----------------------------

Fees are managed through a structured system where collected fees are credited to an account controlled by the parachain on the source network. Costs are debited from an account controlled by the parachain on the destination network, ensuring **financial balance and sustainability**.

Snowbridge Verification
-----------------------

Snowbridge employs on-chain light clients for trustless message verification. It has developed **light clients for Polkadot** (**BEEFY**) and **Ethereum** (**PoS**), ensuring secure and efficient cross-chain communication.

Snowbridge Governance
---------------------

As a common-good project, Snowbridge’s **governance is exclusively managed by Polkadot’s Gov2 model**. This decentralized governance structure ensures no centralized control, promoting community involvement and decision-making.

### Conclusion

Snowbridge stands out as a robust, trustless, and decentralized bridge facilitating extensive interoperability between Polkadot and Ethereum. By supporting diverse asset transfers and employing advanced verification and governance mechanisms, Snowbridge aims to enhance the blockchain ecosystem’s connectivity and security.
