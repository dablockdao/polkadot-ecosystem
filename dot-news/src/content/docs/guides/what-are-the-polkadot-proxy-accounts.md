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