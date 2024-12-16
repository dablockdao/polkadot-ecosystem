---
title: 'Tanssi Network'
---
Infraestructure  

Tanssi is an appchain infrastructure protocol designed to streamline the development and deployment of custom blockchains for various applications

Tanssi Network: Simplifying Appchain Deployment in the Polkadot Ecosystem  

----------------------------------------------------------------------------

Tanssi is an appchain infrastructure protocol designed to streamline the development and deployment of custom blockchains for various applications. It empowers developers by addressing the complexities often associated with traditional appchain implementations.

The Challenge of Appchains
--------------------------

Building appchains typically involves managing numerous infrastructural components, including:

- Block producers
- Validators
- Wallets
- Block explorers
- Oracles
- Indexers
- RPC endpoints

This process is not only time-consuming but also resource-intensive. Additionally, early-stage appchains often face challenges with:

- **Weak Security:** Limited validator sets can lead to vulnerabilities.
- **Inefficient Resource Utilization:** Paying for full validation even when not needed.
- **Limited Interoperability:** Difficulty connecting to other blockchain ecosystems.
- **Slow Time to Market:** Complex infrastructure hinders development focus.

How Tanssi Streamlines Appchain Development
-------------------------------------------

Tanssi tackles these challenges by offering several key features:

- **Block Production as a Service:** Tanssi provides a pool of incentivized workers (block producers) to handle block production for deployed appchains, ensuring liveness and a decentralized set of validators.
- **Consensus on Demand:** Appchains inherit block finality (consensus) from Polkadot, eliminating the need for independent validation mechanisms. This approach offers Layer 1 security from the genesis block.
- **Modular Blockchain Framework:** Tanssi leverages Substrate, a framework enabling developers to build optimized and customizable blockchains for diverse use cases. Tanssi handles most infrastructural complexities, freeing developers to focus on appchain logic.
- **Key Integrations:** Appchains built with Tanssi benefit from automated access to crucial infrastructure like wallets, block explorers, indexers, and RPC providers. Additionally, they can leverage Cross-Consensus Messaging (XCM) for seamless communication with other chains within the Polkadot ecosystem, facilitating broader interoperability.

**In essence, Tanssi empowers developers to build highly modular and interconnected Layer 1 appchains. It simplifies the deployment process and enables customization, accelerating time to market and fostering greater integration within the blockchain landscape.**

Understanding Tanssi Architecture
---------------------------------

- **Appchains as Layer 1 Solutions:** Unlike Layer 2 solutions built on top of existing blockchains, Tanssi appchains are independent Layer 1 blockchains inheriting security from Polkadot.
- **Block Production and Consensus:** Block producers for Tanssi appchains are a subset of Tanssi’s overall pool. This is made possible by Polkadot’s shared consensus mechanism, allowing trustless and decentralized communication between chains.
- **Data Preservers:** Each chain (Tanssi and appchains) has its own set of Data Preservers running full archive nodes, providing RPC infrastructure for app and user interaction.

- <small>Related Token/s:</small> **N/A**
