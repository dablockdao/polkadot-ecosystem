---
title: 'What are the Polkadot Proxy Accounts?'
description: 'Discover the benefits and types of proxy accounts on Polkadot for enhanced security and efficient digital asset management.'
---
Polkadot stands out for its innovative features designed to enhance security and efficiency. Among these features, proxy accounts are particularly notable. They allow users to delegate tasks securely and efficiently, adding a crucial layer of protection to their digital assets. This article delves into the concept of proxy accounts within the Polkadot ecosystem, exploring their various types, uses, and the underlying mechanisms that make them a vital tool for both individual users and organizations.

What Are Polkadot Proxy Accounts?
---------------------------------

Proxy accounts in Polkadot serve as intermediaries that execute transactions on behalf of a primary or stash account. This delegation mechanism minimizes the exposure of the main account, which can be kept in cold storage for added security. Proxies can be more frequently accessed (“hotter”) than the stash account, handling specific tasks while the main account remains secure and largely inactive.

Benefits of Polkadot Proxy Accounts
-----------------------------------

1. **Enhanced Security**: By reducing the number of transactions directly involving the stash account, proxies help in safeguarding the primary assets. If a proxy is compromised, the damage is limited since proxies have restricted permissions.
2. **Efficient Management**: Proxies enable more granular control over different types of transactions, facilitating efficient account management at both individual and corporate levels.
3. **Versatility in Use**: Proxies can be employed for various tasks such as staking, governance participation, and managing multi-signature accounts.

Types of Polkadot Proxy Accounts
--------------------------------

Polkadot provides several types of proxy accounts, each tailored for specific tasks:

1. **Any Proxy**: Allows any transaction, including balance transfers. While versatile, this type should be used cautiously as it increases security risks.
2. **Non-transfer Proxy**: Permits all transactions except balance transfers, preventing access to the Balances and XCM pallet.
3. **Governance Proxy**: Enables the proxy to participate in governance-related transactions.
4. **Nomination Pool Proxy**: Manages transactions related to Nomination Pools.
5. **Staking Proxy**: Handles all staking-related activities, ensuring the stash account remains in cold storage.
6. **Identity Judgement Proxy**: Allows registrars to make judgments on an account’s identity.
7. **Cancel Proxy**: Permits the rejection and removal of time-delay proxy announcements.
8. **Auction Proxy**: Manages transactions pertaining to parachain auctions and crowdloans.

Setting Up Polkadot Proxy Accounts
----------------------------------

Creating a proxy account on Polkadot requires a deposit in the native currency, DOT. This deposit is necessary to cover the storage space on-chain, preventing potential Denial-of-Service attacks. The required deposit amount is calculated using the formula:

**ProxyDepositBase**+**ProxyDepositFactor**×**n**

where <span class="katex"><span class="katex-mathml">nn</span><span aria-hidden="true" class="katex-html"><span class="base"><span class="mord mathnormal">n</span></span></span></span> is the number of proxies, ProxyDepositBase is 20.008 DOT, and ProxyDepositFactor is 0.033 DOT.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/1tcygkq52tU?si=T77_fE56tAPmzhWf" title="YouTube video player" width="560"></iframe>

Polkadot Time-Delayed Proxies
-----------------------------

To further enhance security, Polkadot allows setting a delay time for proxy actions. This delay, quantified in blocks (with approximately 6 seconds per block), provides a window during which the intended action can be canceled by the account controlling the proxy. This feature is particularly useful for mitigating risks associated with immediate proxy actions.

### Practical Application

Consider a scenario where an individual holds a significant amount of DOT tokens and wants to participate in staking without frequently accessing the main stash account. By setting up a staking proxy, they can handle all staking-related transactions, such as nominating validators and bonding/unbonding tokens, without exposing the primary account to potential risks.

### Conclusion

Proxy accounts in Polkadot offer a sophisticated solution for managing digital assets securely and efficiently. By allowing specific types of transactions to be delegated to proxy accounts, users can protect their main accounts from frequent exposure, thereby enhancing overall security. Whether for individual use or corporate account management, proxies provide a flexible and powerful tool within the Polkadot ecosystem. For those looking to leverage these benefits, understanding the various proxy types and their applications is crucial.


Polkadot introduces a robust feature known as **Proxy Accounts**. This functionality is not only instrumental in enhancing the security of user accounts but also in streamlining complex account management processes, particularly for corporate and high-stakes use cases.

## What are Polkadot Proxy Accounts?
Proxy Accounts in the **Polkadot ecosystem** offer users the ability to delegate specific roles and tasks from a primary account to smaller, secondary accounts. These proxies can perform actions on behalf of the main account, reducing the need for the primary account to engage in frequent transactions, thereby minimizing the exposure of its private keys to potential threats.

### Why Use Proxy Accounts?
Proxy Accounts serve multiple purposes, primarily revolving around **security and efficiency**:

1. **Increased Security**: By delegating tasks to proxy accounts, the primary or stash account can remain in cold storage, reducing its exposure. This setup makes it more challenging for potential attackers to compromise the primary account, as the proxies handle day-to-day operations.
2. **Efficient Delegation**: Proxies allow for the separation of roles and responsibilities, enabling more granular control over account actions. For instance, different proxies can be set up for staking, governance, or other specific tasks, ensuring that each proxy only performs its designated functions.
3. **Corporate Account Management**: In a corporate setting, where multiple users may need to access and manage funds or participate in network governance, proxies provide a streamlined and secure method for delegating these responsibilities without compromising the main account’s security.

## Types of Polkadot Proxy Accounts
Polkadot offers various types of proxy accounts, each tailored to specific use cases:
- **Any**: This type of proxy allows for any transaction, including balance transfers. However, due to the increased security risks, it is generally recommended to avoid using this type unless absolutely necessary.
- **Non-transfer**: These proxies can perform any transaction except for balance transfers, providing a balance between functionality and security.
- **Governance**: Designed for governance-related transactions, these proxies allow participation in the network’s decision-making processes without exposing the primary account.
- **Nomination Pool**: Specifically for transactions related to Nomination Pools, these proxies help manage staking activities within these pools.
- **Staking**: These proxies handle all staking-related transactions, such as setting session keys or nominating validators, allowing the primary account to remain secure in cold storage.
- **Identity Judgement**: Used by registrars to make judgments on an account’s identity, these proxies are crucial for maintaining the integrity of identity verification on the Polkadot network.
- **Cancel**: These proxies are tasked with rejecting and removing any time-delay proxy announcements, providing an additional layer of control and security.
- **Auction**: Designed for participating in parachain auctions and crowdloans, these proxies can manage auction-related transactions while keeping the primary account secure.

## Proxy Deposits and Security
To create a proxy account, users must **reserve a deposit in the native DOT token**. This requirement exists **to prevent Denial-of-Service (DoS) attacks**, as creating and maintaining proxies consume storage space on the blockchain. The deposit amount is **calculated based on the number of proxies associated with the primary account**, ensuring that the network remains secure and resistant to potential abuses.

## Polkadot Time-Delayed Proxies
**A unique feature of Polkadot’s proxy system is the ability to add a delay time to proxies**. This delay, measured in blocks, adds an additional layer of security by giving the account owner time to cancel any potentially malicious or unintended transactions before they are executed. This feature is particularly valuable in high-security environments, where immediate execution of transactions might expose the account to unnecessary risks.

## Polkadot Pure Proxy Accounts
Polkadot also introduces Pure Proxy Accounts, a specialized type of proxy account that enhances security and simplifies account management. Unlike traditional proxies, pure proxies are keyless and non-deterministic, meaning they do not have a private key but can still act as proxies within the network.

**Advantages of Pure Proxy Accounts**:
- **Enhanced Security**: Pure proxies cannot be stolen because they lack private keys. They are controlled by other proxies (e.g., an “Any” proxy), and once the relationship between the pure proxy and its controller is severed, the pure proxy becomes inaccessible.
- **Simplified Management**: In corporate settings, pure proxies allow for the seamless management of multi-signature accounts, where changing signatories can be a common occurrence. Pure proxies enable the retention of the same multi-signature account even as signatories change, avoiding the need to create new accounts frequently.
- **Multi-signature Efficiency**: By integrating pure proxies with multi-signature accounts, organizations can maintain secure and flexible account structures without compromising on efficiency.

### Conclusion

Polkadot’s Proxy Accounts provide a powerful tool for enhancing security and efficiency in the management of digital assets. Whether for individual users seeking to protect their primary accounts or for organizations managing complex account structures, proxies offer a customizable solution to meet various needs. As the Polkadot ecosystem continues to evolve, the strategic **use of Proxy Accounts** will undoubtedly play a crucial role in ensuring the security and scalability of decentralized operations.

- [Polkadot Wiki page about Proxies](https://wiki.polkadot.network/docs/learn-proxies).