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