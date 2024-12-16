---
title: Multix
---
Tools  
 DAO Tools  

Multix is an easy-to-use interface developed by ChainSafe Systems for managing complex multisig accounts on the Polkadot ecosystem.

Multix: Simplifying Complex Multisigs on Polkadot
-------------------------------------------------

In the rapidly evolving world of blockchain technology, managing digital assets securely and efficiently is paramount. Multi-signature (multisig) accounts have been a staple for secure asset management since the early days of cryptocurrency. However, managing these multisigs, especially on platforms like Polkadot and Kusama, can be complex. Enter Multix, a user-friendly, open-source interface designed to simplify the creation and management of complex multisigs. This article explores the features, benefits, and technical intricacies of Multix, a groundbreaking tool by ChainSafe Systems.

What is Multix Multisig?
------------------------

Multix is an easy-to-use interface developed by ChainSafe Systems for managing complex multisig accounts on the Polkadot ecosystem. It provides a seamless way to create, manage, and interact with multisig accounts, addressing the challenges that users typically face. Multix leverages the power of pure proxies to enhance the flexibility and security of multisig accounts.

Core Values of Multix
---------------------

1. **Open Source**: Multix is completely open-source, with both the back-end and front-end code available on GitHub. This transparency allows developers to contribute to and audit the codebase.
2. **Permissionless**: The platform is designed to be trust-minimized, only storing data from the blockchain without collecting user information. The database can be rebuilt by anyone, ensuring decentralization and security.
3. **Interoperable**: Multix does not create a walled garden. Multisigs created on-chain are immediately visible on Multix, ensuring seamless integration with other platforms.
4. **Privacy-Preserving**: No private information is gathered. Additional details such as account names are stored locally on your browser and are only visible to you.
5. **User-Friendly**: The interface is designed to simplify the process of managing multisigs, making it accessible to both novice and experienced users.

Key Features of Multix Multisig
-------------------------------

**1. Simplified Multisig Management**

Multix addresses several pain points associated with multisig accounts:

- **Automatic Visibility**: When a multisig account is created, all signatories can see it immediately in their interface, eliminating the need for off-chain communication to share multisig details.
- **Call Data Management**: Multix retrieves call data directly from the blockchain, displaying it to users without requiring manual data sharing.
- **Flexible Signatory Management**: Thanks to pure proxies, adding or removing signatories and adjusting the threshold is possible without changing the external address.

**2. Pure Proxies**

Pure proxies allow for the management of multisig accounts without altering the external address. This means that even if signatories change or thresholds are adjusted, the multisig address remains the same, maintaining continuity and security.

**3. Integration with WalletConnect v2**

Multix supports WalletConnect v2, enabling users to connect their multisig accounts with decentralized applications (Dapps). This integration allows for seamless interaction with Dapps, making it easier to perform transactions, delegate votes, or stake tokens using multisig accounts.

Multix Multisig Technical Overview
----------------------------------

**Architecture**

Multix is built on the robust infrastructure provided by Polkadot and Kusama, leveraging their multisig pallet. It uses Subsquid, an open-source indexer, to retrieve and display blockchain data. This setup ensures that all information shown in Multix is directly sourced from the blockchain, enhancing transparency and reliability.

**Indexer and Front-End**

The Multix repository contains code for running an indexer (`./squid`) and the front-end interface (`./packages/ui`). This architecture supports a smooth user experience by efficiently indexing and displaying multisig data.

**Proxy Mechanism**

The proxy mechanism in Multix functions like a vault with a specific lock that can be opened by combining keys from the signatories. If a signatory’s key is compromised, others can change the lock without changing the external address. This ensures that funds remain secure and the address remains consistent.

Multix Multisig Use Cases and Benefits
--------------------------------------

**1. Business and DAO Use**

Multix is ideal for businesses and decentralized autonomous organizations (DAOs) that need to manage large amounts of tokens securely. The ability to maintain the same address while adjusting signatories is crucial for maintaining trust and continuity with partners.

**2. Enhanced Security**

By eliminating the need for off-chain communication and manual data sharing, Multix reduces the risk of errors and security breaches. All multisig data is retrieved directly from the blockchain, ensuring accuracy and reliability.

**3. Improved User Experience**

The intuitive interface of Multix simplifies the process of creating and managing multisigs. Users can easily add or remove signatories, adjust thresholds, and interact with Dapps, making the management of digital assets more accessible.

Getting Started with Multix
---------------------------

**Creating a Multisig**

Creating a multisig with Multix is straightforward. One user initiates the multisig, and all signatories can see and interact with it immediately. There is no need to manually share call data or addresses.

**Managing Multisigs**

With the proxy mechanism, users can manage signatories and thresholds without changing the external address. This ensures that the multisig account remains consistent even as the composition of signatories changes.

**Connecting to Dapps**

Using WalletConnect v2, users can connect their multisig accounts to various Dapps. This allows for a wide range of interactions, from asset swaps to voting and staking, all managed through the Multix interface.

### Conclusion

Multix by ChainSafe Systems is a powerful tool that simplifies the management of multisig accounts on Polkadot and Kusama. By leveraging open-source technology, permissionless architecture, and pure proxies, Multix provides a secure, user-friendly, and flexible solution for managing complex multisigs. Whether you are a business, DAO, or individual user, Multix offers the tools you need to navigate the complexities of digital asset management with ease. Try Multix today and experience the future of multisig management on Polkadot.
