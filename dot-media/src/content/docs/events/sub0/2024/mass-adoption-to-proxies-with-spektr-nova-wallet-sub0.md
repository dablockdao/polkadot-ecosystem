---
title: 'Mass Adoption to Proxies with Spektr and Nova Wallet'
description: 'Learn how to use proxies for secure and efficient account management with insights from Valentin Sergeev on Spektr and Nova Wallet.'
sidebar: 
  label: Nova Wallet
---

In today’s web3 ecosystem, **proxies** are an often underutilized yet incredibly **powerful tool for managing account permissions and operations**. Valentin Sergeev’s recent talk delves into the **essentials of proxies** and demonstrates how to set up advanced account structures using Spektr and Nova Wallet. This blog post will provide an overview of Sergeev’s insights and practical steps to leverage proxies for more efficient and secure digital operations.

## Understanding Proxies on Polkadot
At its core, a proxy allows one account to perform actions on behalf of another. This is achieved through granting permissions from the primary account (proxy account) to the secondary account (proed account). Proxies can simplify many aspects of account management, from delegating staking operations to setting up complex **multi-signature (multi-sig) accounts**.

### Types of Proxies
1. **Regular Proxies**: These are straightforward setups where the proxy account grants specific permissions to the proed account. This setup is ideal for scenarios like delegating staking operations from a cold wallet to a hot wallet, reducing the need to frequently access the more secure but less convenient cold wallet.
2. **Pure Proxies**: Unlike regular proxies, pure proxies create a new account that is initially only accessible by the proxy account. This method is particularly useful for setting up accounts that need to remain secure and independent until further permissions are granted.
3. **Time-Delayed Proxies**: These proxies introduce a delay between the announcement of an action and its execution. This setup is beneficial for high-security operations where an additional layer of verification is needed before actions are carried out.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vQc0ti3hzW4mntO4OFknwLdSfX9MeEV6BO0Xw5VjiMQffq4eS4c8-CZDk5G0bOJExiJnCJSgrhEV9RU/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## Setting Up Proxies with Spektr and Nova Wallet
**1. Delegating Staking Operations:**
- **Cold Wallet to Hot Wallet**: If you have a cold wallet (e.g., a **Ledger device**) and want to delegate staking operations to a hot wallet (e.g., [**Nova Wallet**](https://dablock.com/dapps/nova-wallet/)), you can set up a regular proxy. This setup allows you to perform staking-related tasks without repeatedly accessing your cold wallet.**Steps:**
  - Connect your cold wallet to [**Nova Wallet**](https://dablock.com/dapps/nova-wallet/).
  - Set up a proxy account with permissions limited to staking operations.
  - Use your hot wallet to perform staking operations, reducing the need to access the cold wallet frequently.

**2. Flexible Multi-Sigs:**
- **Creating Flexible Multi-Sigs**: Multi-signature accounts are essential for shared account control. **A flexible multi-sig setup involves creating a pure proxy account that can be managed by a multi-sig group**. This configuration allows for easy modification of signatories without changing the primary account.**Steps:**
  - Use Nova Wallet to create a pure proxy account.
  - Assign the multi-sig group as the controllers of this proxy.
  - Adjust signatories by changing the multi-sig group, ensuring the primary account remains consistent.
**3. Optimistic Voting Setups:**
- **Setting Up Time-Delayed Proxies**: For operations requiring high security, time-delayed proxies can be used. This setup involves a delay period during which the proposed action can be reviewed and canceled if necessary.**Steps:**
  - Set up a proxy account with a specified delay for sensitive operations.
  - Announce the intended action, triggering the delay period.
  - Allow designated reviewers (counselors) to approve or cancel the action within the delay period.

#### Practical Demonstrations
Sergeev’s talk included practical demonstrations using Nova Wallet, showcasing how to set up these proxies efficiently. The steps are designed to be user-friendly, making it accessible for both individual users and enterprises.
- **Nova Wallet’s Interface**: The wallet’s interface simplifies the process of creating and managing proxies, from adding new wallets to setting up multi-sig accounts and managing permissions.
- **Real-World Use Cases**: Examples such as managing referral programs and setting up flexible multi-sig accounts in a corporate environment illustrate the practical benefits of using proxies.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/26zgX-8pnuU?si=UC-uo2hc9FQT5Tur" title="YouTube video player" width="560"></iframe>

#### Conclusion
Proxies, when used effectively, can significantly enhance the security and efficiency of digital account management. By understanding and implementing the setups discussed by Valentin Sergeev, users can leverage the full potential of proxies through tools like **Spektr** and [**Nova Wallet**](https://dablock.com/dapps/nova-wallet/). Whether you’re managing personal accounts or overseeing corporate finances, proxies offer a flexible and secure solution to streamline your operations.