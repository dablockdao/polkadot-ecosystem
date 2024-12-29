---
title: Polkadot.js
description: Suite of tools designed for developers and power users within the Polkadot ecosystem
hero:
  tagline: A suite of powerful tools designed for Polkadot devs.
  image: 
    file: ../../../../assets/tools/dev/polkadotjs.png
  actions:
    - text: Site
      link: https://polkadot.js.org/
      icon: external
    - text: Docs
      link: https://polkadot.js.org/docs/
      icon: external
      variant: secondary
---

**Polkadot-J**S is a suite of powerful tools designed for developers and power users to interact with the Polkadot blockchain at a granular level. This article provides an in-depth look at the various components of Polkadot-JS, explaining their functionalities, use cases, and how they contribute to the broader Polkadot ecosystem.

## Overview of Polkadot-JS Tools
Polkadot-JS encompasses several key tools:
1. **Polkadot-JS UI**
2. **Polkadot-JS UI Desktop App**
3. **Polkadot-JS Extension**
4. **Polkadot-JS API**
5. **Polkadot-JS Phishing List**
Each of these components plays a unique role in providing a comprehensive interface for interacting with the Polkadot blockchain.

### Polkadot-JS UI
**Polkadot-JS UI** is a web application that loads in your browser, offering extensive functionalities beyond basic wallet operations. It allows users to create accounts, send and receive transactions, and manage staking operations, among other advanced features. The UI is available in two versions: a standard DNS hosted version with the latest features, and an IPFS version, which is updated less frequently but offers greater decentralization.

**Polkadot.js Key Features**:
- **Account Management**: Create, manage, and recover accounts.
- **Transaction Management**: Send and receive transactions.
- **Staking**: Participate in staking, manage validators, and view staking rewards.
- **Governance**: Participate in Polkadot governance through voting and proposal creation.
- **Advanced Developer Tools**: Query chain state, interact with RPC calls, and issue extrinsics.

### Polkadot-JS Extension
The **Polkadot-JS Extension** is an account management tool that functions as a secure key storage solution. It allows users to create, import, and manage accounts, including importing accounts from Ledger devices or Parity Signer. It does not interact directly with on-chain functions but provides a secure interface for interacting with extension-compliant dApps such as Polkadot-JS UI and Polkadot Staking Dashboard.

**Key Features**:
- **Account Management**: Create and import accounts, manage keys securely.
- **Metadata Updates**: Ensure compatibility with the latest chain metadata.
- **Security**: Warn users about malicious URLs and automatically block suspicious accounts.

### Polkadot-JS API
The **Polkadot-JS API** is a JavaScript API that allows developers to interact with the Polkadot blockchain programmatically. It dynamically generates interfaces based on the metadata retrieved from the connected node, making it highly flexible and adaptable to different chains and runtime versions.

**Key Functionalities**:
- **Querying On-chain Data**: Retrieve chain state, constants, and events.
- **Issuing Extrinsics**: Submit signed, unsigned, or inherent transactions to the blockchain.
- **Dynamic Interface Generation**: Automatically adapt to different chains and runtime versions.

### Polkadot-JS Phishing List
The **Polkadot-JS Phishing List** is a community-driven curation of malicious actors and operators. The Polkadot-JS Extension uses this list to warn users about suspicious URLs and automatically block listed accounts. This enhances security and protects users from phishing attacks.

## Using Polkadot-JS Tools
**Creating an Account**:

1. Navigate to the Polkadot-JS UI or use the Polkadot-JS Extension.
2. Follow the prompts to create a new account, ensuring to securely store the seed phrase or JSON backup file.

**Querying Chain State**:
1. Open Polkadot-JS UI and navigate to Developer &gt; Chain state.
2. Select the module and method you wish to query, then execute the query to retrieve the data.

**Issuing Extrinsics**:
1. Navigate to the Extrinsics tab in the Polkadot-JS UI.
2. Select the type of transaction you wish to submit, fill in the required parameters, and sign the transaction using your account.

**Staking**
1. Go to the Network &gt; Staking section in Polkadot-JS UI.
2. Manage your staking operations, including bonding funds, nominating validators, and claiming rewards.

**Best Practices**:
- **Use Multiple Accounts**: For enhanced security and privacy, use different accounts for different chains.
- **Leverage Proxies**: Use pure proxies to manage multisigs without changing external addresses.
- **Community Involvement**: Contribute to the Polkadot-JS Phishing List to help protect the community from malicious actors.

### Conclusion
Polkadot-JS provides a comprehensive suite of tools for developers and power users to interact with the Polkadot blockchain. From the versatile Polkadot-JS UI to the robust Polkadot-JS API, these tools offer extensive functionalities for managing accounts, querying data, issuing transactions, and participating in governance and staking. Whether you are a developer building on Polkadot or a power user managing complex operations, Polkadot-JS equips you with the tools you need to navigate the Polkadot ecosystem effectively.