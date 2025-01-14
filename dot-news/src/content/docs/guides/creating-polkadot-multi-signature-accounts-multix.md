---
title: 'Creating Polkadot Multi-Signature Accounts with MultiX'
description: 'Create secure multi-signature accounts with MultiX in Polkadot, featuring flexible signatory management via pure proxies. Learn the process step-by-step.'
---
In a recent workshop, a comprehensive walkthrough was provided on **creating multi-signature (multisig) accounts using MultiX**, a tool developed by **ChainSafe**. This guide is essential for users interested in the Polkadot ecosystem, particularly those aiming to implement more secure and flexible account management.

## Introduction to MultiX and Multi-Signature Accounts
**MultiX, developed by the ChainSafe team**, is a tool designed for creating and managing multisig accounts on various networks, including Westend, Polkadot, and Kusama. A multisig account requires multiple approvals (signatures) for executing transactions, enhancing security by distributing control among several participants.

## Setting Up a Multi-Signature Account
1. **Login and Network Selection:** The process begins by logging into the MultiX platform and selecting the appropriate network. While the workshop used the Westend testnet, the same procedure applies to Polkadot and Kusama.
2. **Creating the Multi-Signature Account:**
  - **Add Signatories:** Users add multiple addresses as signatories. In the demonstration, *Alice*, *Bob*, and *Charlie* were selected.
  - **Set Threshold:** Determine the number of required approvals for a transaction. In this case, a 2-out-of-3 threshold was set, meaning any two signatories must approve a transaction.
  - **Name the Multisig:** Assign a name to the multisig account, such as “*ABC Multisig*“.
3. **Use a Pure Proxy:**
  - **Pure Proxy Setup:** It’s recommended to use a pure proxy, which allows changing signatories without altering the underlying address. This feature adds flexibility to the account management.
  - **Transaction for Pure Proxy Creation:** Creating a pure proxy involves a batch transaction to fund the multisig and establish the proxy. This requires initial approval from one signatory, followed by another approval from a different signatory.

## Understanding Pure Proxies
A pure proxy functions as a puppet controlled by the multisig account (the master). The master (*ABC Multisig*) acts as the any proxy, holding the highest rank, capable of executing all actions on behalf of the pure proxy. This setup ensures security and flexibility in managing the account.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/izaaHyPXs-U?si=oPsM8M4c-GXEtCtu" title="YouTube video player" width="560"></iframe>

## Multix Practical Application and Management
1. **Adding Multisig to Polkadot JS:**
  - Add the multisig account to Polkadot JS.
  - Create the multisig configuration with the specified signatories and threshold.
2. **Adding and Managing the Pure Proxy:**
  - Add the pure proxy account to Polkadot JS.
  - Ensure the proxy account (pure proxy) is always managed by the multisig account to prevent losing control over the proxy.

### Performing Transactions
To demonstrate practical application, the workshop included sending and approving transactions:

- **Funding the Pure Proxy:** Initially, the pure proxy is funded from one of the signatories.
- **Transaction Execution:** Transactions are created from the pure proxy account, requiring approvals from multiple signatories, ensuring the security and integrity of the process.

### Conclusion
MultiX provides a robust solution for creating and managing multisig accounts in the Polkadot ecosystem. The tool’s integration with pure proxies enhances flexibility, allowing for dynamic changes in signatory management without altering the core account address. This workshop highlighted the importance of using MultiX for secure, multi-party account management, emphasizing careful handling of advanced proxy configurations to avoid any potential loss of control.