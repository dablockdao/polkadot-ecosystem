---
title: 'Introduction to Polkadot&#8217;s Minimal Relay Proposal'
description: 'Explore Polkadot''s Minimal Relay, optimizing the Relay Chain by migrating key functions to System Chains for enhanced scalability.'
---
Polkadot, a highly sophisticated blockchain network, has been evolving steadily since its inception. At the core of Polkadot lies the **Relay Chain**, often referred to as the “heart” of the network. This central component is responsible for securing the entire ecosystem and facilitating cross-chain communication between various parachains. As Polkadot approaches its next major evolution—Polkadot 2.0—there is a significant focus on optimizing the Relay Chain’s efficiency, leading to the development of the concept known as the **Minimal Relay**.

The Relay Chain’s Role in Polkadot
----------------------------------

To fully grasp the importance of the Minimal Relay, it is crucial to understand the current role of the Relay Chain within Polkadot. The Relay Chain is responsible for a wide range of critical functions, including:

1. **Staking:** The process that secures the network by selecting validators who, in turn, verify transactions.
2. **Governance:** The system through which network participants propose, vote on, and enact changes to the network.
3. **On-Chain Identity:** The mechanism that allows users to register and manage their digital identities on the blockchain.
4. **Balances:** The system that manages account balances and transactions across the network.

All of these functions are executed by every validator within the Relay Chain, resulting in a high level of resource consumption and, consequently, a potential bottleneck as the network scales.

The Shift to a Minimal Relay
----------------------------

Polkadot 2.0 introduces the concept of the Minimal Relay, a strategic move aimed at offloading certain functionalities from the Relay Chain to improve the network’s overall efficiency. The core idea behind the Minimal Relay is to remove as much processing burden as possible from the Relay Chain, allowing it to focus primarily on its essential role of securing the network and facilitating cross-chain communication.

The proposal for the Minimal Relay is detailed in **RFC 32**, authored by **Joe Petrowski** and **Gavin Wood**. According to their proposal, several key services currently handled by the Relay Chain will be migrated to dedicated **System Chains** or **Common Good Parachains**. These specialized parachains will take over functions such as staking, governance, identity management, and balance tracking, thus reducing the load on the Relay Chain.

The Rationale Behind the Polkadot Minimal Relay
-----------------------------------------------

The motivation for implementing the Minimal Relay concept is clear: to enhance the robustness and scalability of Polkadot as it transitions to Polkadot 2.0 and eventually to its next major upgrade, codenamed “Jam.” By externalizing non-essential functions to System Chains, the Relay Chain can focus on its primary purpose, offering a more secure and efficient **blockspace** to the network.

### The Technical Challenges

The migration of services like staking, governance, and identity management from the Relay Chain to System Chains is not without its challenges. As highlighted by Petrowski and Wood in RFC 32, the **staking system** is highly complex and integral to the network’s security. Migrating this system to a System Chain requires careful planning to ensure that there is no interruption in service or security lapses.

The governance system, while also complex, poses fewer risks in terms of migration. However, it is still critical to ensure that the transition is seamless and that the new governance parachain can interact effectively with the rest of the network.

The Role of XCM and System-Chains for Polkadot Minimal Relay
------------------------------------------------------------

One of the key enablers of this migration is **Cross-Consensus Messaging (XCM)**, a technology developed within the Polkadot ecosystem that allows for secure communication between different parachains. XCM is essential for the Minimal Relay concept as it facilitates the coordination and communication required for these System Chains to function correctly in their new roles.

Moreover, certain System Chains have already begun to be implemented. For example, the **People Chain** on Kusama (Polkadot’s canary network) is set to manage on-chain identities, reducing the cost and complexity associated with identity registration. Similar chains will be developed for staking, governance, and balances, ensuring that these critical functions are handled efficiently and securely outside the Relay Chain.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/cXa1oEEzcRE?si=yXyuuAdQp1UQeBTG" title="YouTube video player" width="560"></iframe>

### Polkadot Looking Forward
As Polkadot continues its evolution towards Polkadot 2.0 and beyond, the **Polkadot** **Minimal Relay concept** represents a significant step forward in optimizing the network for scalability and performance. By migrating key functions to **System Chains**, Polkadot aims to reduce the load on its Relay Chain, allowing it to offer more secure and efficient services to its growing ecosystem of parachains.

This strategic move not only prepares Polkadot for future growth but also reinforces its position as a leader in blockchain technology, setting a precedent for other networks to follow in their quest for scalability and efficiency.
