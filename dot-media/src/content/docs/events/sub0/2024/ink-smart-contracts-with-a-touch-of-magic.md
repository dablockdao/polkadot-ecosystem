---
title: 'Ink! Smart Contracts with a Touch of Magic'
description: 'Discover how Gabriel González from Protofire uses Ink for smart contracts with innovative tools in the Polkadot ecosystem.'
sidebar: 
    label: Ink! Smart Contracts
---

Ink! smart contracts are crafted with a touch of magic. In a recent talk at Sub0 2024, Gabriel Nicolás González, a web3 engineer from Protofire, delved into the nuances of Ink smart contracts and shared his team’s journey in creating innovative tools to onboard the next generation of web3 developers.

## About Gabriel Nicolás González
Gabriel, affectionately known as Gabo or Gabo de Madera, has been a software developer for 15 years, with the last five focused on web3. He works at Protofire, a group dedicated to providing solutions across various web3 protocols and networks. Their mission is to simplify the interaction with web3 technologies for developers and users alike.

## The Journey to Ink
In 2022, Gabriel and his team attended the Decoded event in Buenos Aires, which proved to be a turning point. Despite their extensive knowledge of Ethereum, they realized they had much to learn about other ecosystems, particularly Polkadot. They discovered that many issues they faced on Ethereum were already solved by design in Polkadot, prompting them to shift their focus and start building on this new platform.

<iframe allowfullscreen="true" frameborder="0" height="569" mozallowfullscreen="true" src="https://docs.google.com/presentation/d/e/2PACX-1vSROFSnICTzbJEwcKJ9NTMJZbqW37ZBUhHkCHin2Bi1GlT7DSzH-q5vCegN7soxUK25Yl-k_ZxrSIkB/embed?start=false&loop=false&delayms=60000" webkitallowfullscreen="true" width="960"></iframe>

## The Wizard: An Innovative Tool
Their first major project, developed during the Paton Latin America Hackathon, was inspired by OpenZeppelin’s tool for Ethereum. They aimed to create a similar tool for the Polkadot ecosystem using Ink smart contracts. Despite the challenges of learning Rust and the Ink language, their persistence paid off, and they eventually won the first prize at the hackathon.

## Building the Contract Wizard
Supported by grants from the Web3 Foundation, the team developed the Contract Wizard, a tool designed to streamline the creation of smart contracts in the Polkadot ecosystem. The Contract Wizard simplifies the process by allowing users to connect their wallets, select networks, and choose from various contract types, including tokens and NFTs. The tool dynamically generates Rust code, compiles it via a backend, and deploys the contract, all while ensuring a user-friendly experience.

### Key Features of the Contract Wizard
1. **Wallet Integration:** Supports multiple wallets like SubWallet, Polkadot.js, and Talisman.
2. **Network Selection:** Connect to different networks such as Asar, Shibuya, Shiden, or custom networks.
3. **Contract Types:** Create standard tokens (PSP22), non-fungible tokens, and multi-tokens with customizable extensions like metadata, minting, and burning capabilities.
4. **Dynamic Code Generation:** Generates and compiles Rust code, with options to compile locally or through a backend service.
5. **Deployment and Interaction:** Deploy contracts with customizable parameters and interact with them directly from the tool.

## Pros and Cons of Ink*
*Pros:*
- Permissionless deployment
- Built-in safety measures
- Reduced development friction
- Ideal for developers transitioning from Ethereum
*Cons:*
- Performance limitations compared to pallet-level development
- Operational constraints for cross-chain communication (XCMP)
- Dependence on parachain infrastructure
- Lack of modularity in code structure

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/rDADX1NJvDs?si=nwWOjh8KeePFRD4r" title="YouTube video player" width="560"></iframe>

**Conclusion**
The Contract Wizard is an excellent tool for rapid prototyping and deploying smart contracts in the Polkadot ecosystem. It offers a smooth transition for developers from other networks and fosters community and ecosystem integration. Gabriel and his team’s dedication to simplifying the web3 development experience is evident in their innovative tools like the Contract Wizard and the upcoming Token Wizard.

Explore the [Contract Wizard](http://contractwizard.xyz) and dive into the world of Ink smart contracts with a touch of magic.