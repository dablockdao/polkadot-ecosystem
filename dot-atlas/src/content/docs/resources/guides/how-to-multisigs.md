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


**Multisignature wallets**, or multisig wallets, have become increasingly critical for securely managing assets in the Polkadot ecosystem, particularly in collaborative environments. This article provides an in-depth guide to the various multisig solutions available within the Polkadot ecosystem, with a special emphasis on Talisman Signet—a tool that is rapidly gaining traction due to its robust features and user-friendly interface.

## Overview of Multisig Solutions in the Polkadot Ecosystem
Multisig wallets are essential tools for users who need to enhance the security of their digital assets by requiring multiple signatures to authorize a transaction. In the Polkadot ecosystem, several solutions are available for creating and managing multisig wallets. Some of the most notable options include:

- **Nova Spektr**
- **Polkadot Multisig** (White-label version of Talisman Signet)
- **Multix**
- **PolkaSafe**
- **Mimir**
- **X Signers**
- **Omniway** (Currently under development by the **InvArch** team, focusing on cross-chain account abstraction)

In addition to these, Subscan, a popular block explorer within the Polkadot network, offers multisig creation tools, although these are not as comprehensive as the newer solutions that have emerged over the past year.

## Introduction to Talisman Signet
**Talisman Signet, developed by the Talisman team**, stands out among multisig solutions for its comprehensive functionality and ease of use. Talisman Signet allows users to create, manage, and interact with multisig wallets across different chains within the **Polkadot ecosystem**.

The Talisman Signet platform is integrated into the larger portal of DaBlock.com, a leading directory and content hub within the Polkadot ecosystem. This integration ensures that users have easy access to a range of tools and resources necessary for efficient interaction with blockchain projects and entities.

## Step-by-Step Guide to Creating a Multisig Wallet with Talisman Signet
Creating a multisig wallet with Talisman Signet is straightforward. Below is a step-by-step guide to help users get started:
1. **Launching Talisman Signet:**
  - Start by accessing the Talisman Signet application via the DaBlock portal. Select the account through which you want to create the multisig wallet.
2. **Signing the Transaction:**
  - To log in, users must sign a transaction using their chosen account. This process ensures that the wallet owner is securely authenticated before proceeding.
3. **Creating the Multisig Wallet:**
  - Users have the option to either import an existing multisig wallet or create a new one. For this guide, we’ll focus on creating a new multisig wallet.
  - Choose a name for the multisig wallet, then select the blockchain on which it will be created. **Talisman Signet supports several blockchains**, including Polkadot, Kusama, and other parachains such as Hydration (HydraDX).
4. **Adding Members:**
  - After selecting the blockchain, users can add members to the multisig wallet. Talisman Signet allows users to define the threshold (the number of signatures required to approve a transaction) based on the number of members added.
5. **Creating the Wallet on the Selected Chain:**
  - Once members are added, finalize the creation of the multisig wallet. If Polkadot is selected, the platform will prompt users to **reserve a certain amount of DOT tokens as a deposit**. However, for this demonstration, HydraDX was selected due to its lower reserve requirements, making it more accessible for users with limited funds.
6. **Finalizing the Multisig Wallet:**
  - After creating the wallet, users are presented with an overview of the multisig wallet, including its assets, members, and threshold requirements. The interface also provides options for managing transactions, such as sending multiple transactions simultaneously, which is particularly useful for organizational operations.
7. **Additional Features:**
  - Talisman Signet’s interface includes features for interacting with decentralized applications (dApps), managing smart contracts, **and even participating in governance through SubSquare Polkadot OpenGov forum**—a platform integrated directly into Signet.

<iframe allow="accelerometer; encrypted-media;accelerometer;autoplay;clipboard-write;gyroscope;picture-in-picture clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" frameborder="0" height="420" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/KJELR_cQei0?feature=oembed" title="Las 9 Wallets MultiSig de Polkadot - Guía de Talisman Signet" width="675"></iframe>

#### Conclusion
Talisman Signet represents a significant advancement in the management of multisig wallets within the Polkadot ecosystem. Its **user-friendly interface**, combined with a wide range of features, makes it an ideal solution for both individual users and organizations seeking to enhance the security and efficiency of their digital asset management.

As the Polkadot ecosystem continues to expand, Talisman Signet’s comprehensive approach to multisig wallets is likely to play a crucial role in facilitating secure, collaborative blockchain interactions.

Whether you’re a seasoned blockchain professional or new to the Polkadot ecosystem, **Talisman Signet offers a versatile and reliable platform for managing multisig wallets in the Polkadot ecosyste**, setting a new standard for security and ease of use in the decentralized space.

---
title: 'Polkadot Bounties Guide Using Multisigs &#038; Proxies'
description: 'Learn how to manage Polkadot bounties, multisigs, and proxies efficiently with Adam Steeber''s comprehensive tutorial for ecosystem professionals.'
---
Adam Steeber’s detailed **tutorial on Polkadot bounties, multisigs, proxies**, and permissions provides ecosystem professionals with essential knowledge and practical steps for managing bounties within the Polkadot ecosystem. This guide is designed for those with a foundational understanding of Polkadot, and aims to deepen their proficiency in handling these advanced functionalities. You can follow [Adam Steeber](https://x.com/AdamSteeber1) on X.

**What is a Polkadot Bounty?**
------------------------------

A Polkadot bounty is a **funding program where the treasury allocates funds toward specific goals**. Bounties are approved by **DOT token holders** and managed by curators, often through multisig accounts to ensure diverse oversight. The funds are distributed without requiring voter involvement for each individual expense. This tutorial by Adam Steeber covers key topics including the creation and management of bounties, the role of multisig accounts, and the use of proxy accounts to enhance security and operational efficiency.

**Polkadot Child Bounties**
---------------------------

Child bounties allow parent bounties to **allocate funds to specific sub-goals**. For example, an advertising parent bounty of 10,000 DOT might create a child bounty for an LAX airport campaign with a budget of 1,000 DOT. These child bounties are independently managed by curators who are proposed and overseen by the parent bounty curators.

### **Permissions and Deposits**

The process of establishing bounties and child bounties involves several steps:

1. **Proposing a Parent Bounty:** Anyone can propose a parent bounty by depositing 1 DOT and providing a description and amount.
2. **Approval by DOT Voters:** The proposed bounty is subject to approval via referendum.
3. **Appointment of Curators:** Approved bounties require curators, who also need to be approved by voters.
4. **Curator Acceptance:** Curators must place a deposit (10-200 DOT, depending on the fee) to accept their role.
5. **Creating Child Bounties:** Parent bounty curators can create child bounties, which are managed similarly to parent bounties but with funds drawn from the parent bounty’s budget.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/Qv_nJVcvQr8?si=A8k5YZ7MFWEyKtYz" title="YouTube video player" width="560"></iframe>

----------------------------------------------------------------------------------

Multisig (multi-signatory) accounts require multiple signatures to execute transactions, enhancing security and collaboration. A multisig account is deterministic and can be regenerated with the same set of signatories and thresholds.

### **Multisig Transactions**

There are three key multisig functions:

1. **asMulti:** Initiates a multisig transaction by providing the call data.
2. **approveAsMulti:** Approves a multisig transaction using the call hash.
3. **cancelAsMulti:** Cancels an initiated multisig transaction, a privilege held by the initiator.

### **Executing Multisig Transactions**

A multisig transaction process typically involves:

1. **Initiation:** A signatory initiates the transaction using asMulti.
2. **Approval:** Other signatories approve using approveAsMulti, providing the transaction timepoint.
3. **Execution:** The final approval, by the threshold signatory, executes the transaction.

Understanding Polkadot Proxies
------------------------------

**Proxy Accounts**

Proxies allow one account (proxy) to act on behalf of another (proxied). There are several types of proxies, but the tutorial focuses on any-type proxies with zero delay.

### **Creating and Managing Polkadot Proxies**

1. **Normal Proxies:** Created by adding a proxy with a base deposit of 20.008 DOT plus an additional factor for each proxy.
2. **Proxied Pure Accounts:** Created via createPure transaction, generating a keyless account managed by the spawner (proxy).

**Killing Proxied Accounts**

To remove a proxied pure account and reclaim the deposit, the spawner must submit a killPure transaction on behalf of the proxied account.

Combining Concepts: Bounty Management Configurations
----------------------------------------------------

**Conventional Configuration**

This standard approach involves creating a multisig, which then generates a proxied pure account. The multisig acts as the proxy for this account, managing the bounty funds. This configuration ensures high security but can be complex and lacks individual autonomy for signatories.

**Steeber Configuration**

Introduced by Adam Steeber, this configuration aims to enhance individual autonomy and flexibility. Each curator creates their own proxied pure account, and these accounts form the multisig. This setup allows easier replacement of signatories but requires DOT voter intervention if multiple curators become inactive.

#### Conclusion

[Adam Steeber](https://x.com/AdamSteeber1)’s tutorial provides an in-depth understanding of how bounties, multisigs, and proxies operate within the Polkadot ecosystem. By mastering these tools, ecosystem professionals can manage funds more securely and efficiently, ensuring the success and integrity of various projects funded by the Polkadot treasury.

For a detailed walkthrough, including practical examples and further explanations, **refer to Adam Steeber’s video tutorial on YouTube**.

Related Resources:

- <span class="yt-core-attributed-string--link-inherit-color" dir="auto">[**Subkey**](https://docs.substrate.io/reference/command-line-tools/subkey/) (account generation/transformation tool) / external link</span>
- <span class="yt-core-attributed-string--link-inherit-color" dir="auto">[**Polkadot Wiki**](https://wiki.polkadot.network/) / external link</span>