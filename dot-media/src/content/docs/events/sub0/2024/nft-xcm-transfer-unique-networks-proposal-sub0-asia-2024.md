---
title: 'NFT XCM Transfer Unique Network Proposal'
description: 'Daniel Shiposha review of Unique Network XCM NFT proposal, cross-chain NFT transfers and future developments in the Polkadot ecosystem.'
sidebar:
  label: Daniel Shiposha (Unique Netowrk)
---

In a recent presentation at the Sub0 conference, **Daniel Shiposha** provided a comprehensive **review of the** **Unique Network’s treasury proposal concerning XCM** (Cross-Consensus Messaging) NFTs. Here’s a detailed look into the key points discussed.

Introduction to XCM NFTs
------------------------

**XCM NFTs** represent a significant advancement in cross-chain NFT transfers within the [**Polkadot ecosystem**](https://dablock.com/ecosystem/). Shiposha highlighted that the first successful cross-chain NFT transfers between [**Quartz**](https://dablock.com/dapps/unique-network/) and [**Karura**](https://dablock.com/dapps/acala-network/) networks marked a critical milestone. The proposal aims to extend these capabilities, benefiting the entire ecosystem.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vTFb8y5NPbMOGIdM6612TDPEys96VCK-E3kJ2zo9rPV8HTiZT2Bdrbrdceo87sYxSvmMRFK8bNMcTqj/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

### Unique Network’s Proposal Milestones Overview

The proposal is structured into several milestones, each focusing on different aspects of the implementation:

1. **Milestone 2**: 
  - **XNFT Pallet**: Development of the XNFT pallet, which includes the **NFT XCM asset transactor**.
  - **Custom Claimer RFC**: Implementation of the accepted RFC to facilitate custom asset claiming mechanisms.
  - **XCM Runtime API**: Creation of APIs to help UI and web developers estimate fees and understand acceptable currencies for XCM transactions.
  - **JavaScript API**: Development of a JavaScript API to simplify integration for wallet developers.
  - **R&amp;D for EVM Adaptation**: Initial research and development for adapting XCM NFT to Ethereum Virtual Machine (EVM).
  - **Documentation and Educational Materials**: Comprehensive guides and documentation for developers and users.
2. **Milestone 3**: 
  - Focuses on adapting the XCM NFT tooling to smart contract platforms, including EVM and Ink!.
3. **Milestone 4**: 
  - Implementation of the XCM asset metadata RFC to enable cross-chain metadata operations.

Unique Netowek XCM NFT Key Features and Goals
---------------------------------------------

The ultimate goal of the Unique Network’s proposal is to create robust and easy-to-integrate **XCM NFT tooling**. Shiposha emphasized the following key features:

- **Generic Functionality**: The tooling should provide essential functions like creating collections, minting, transferring, and burning NFTs, adaptable to various NFT engines across the Polkadot ecosystem.
- **Reuse Existing Solutions**: To minimize integration costs and simplify audits, the proposal recommends reusing existing NFT solutions as much as possible.
- **Handling Foreign NFTs**: The system should handle both local and foreign NFTs, enabling seamless cross-chain transfers and interactions.

#### Addressing Common Issues

Shiposha discussed common issues faced in **cross-chain NFT transfers**, such as trapped assets due to incorrect fee estimations. The proposed solutions include:

- **Set Asset Claimer Instruction**: A new XCM instruction to specify who can claim trapped assets, enhancing the convenience and security of asset recovery.
- **XCM Payment API**: An API to provide methods for comparing acceptable currencies, estimating fees, and converting weights into fees, making the process more predictable and user-friendly.

Unique Network XCM NFT Future Developments
------------------------------------------

The proposal also envisions future developments, including:

- **JavaScript Tooling**: Enhancing the developer experience by integrating the XCM Payment API into existing libraries.
- **Smart Contract Adaptation**: Working with EVM and Ink! experts to ensure compatibility and optimize the functionality of XCM NFTs on smart contract platforms.
- **Cross-Chain Metadata Operations**: Finalizing the XCM asset metadata RFC to support more complex cross-chain interactions involving metadata.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/xmLWjiujNAg?si=xAO7w89-U-3HLV79" title="YouTube video player" width="560"></iframe>

### Conclusion

Daniel Shiposha’s review of the Unique Network’s proposal for XCM NFTs outlines a clear path towards **making NFTs easily transferable and functional across different chains within the Polkadot ecosystem**. This proposal, with its focus on ease of integration, robust functionality, and comprehensive developer support, promises to significantly enhance the utility and interoperability of NFTs.