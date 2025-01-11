---
title: 'Signet: Data Privacy and Account Abstraction for Multisigs'
description: 'Explore Signet multisig solution for enhanced data privacy and account abstraction, introduced by Talisman at Sub0 2024.'
sidebar:
    label: Chris Ling (Talisman Wallet)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

At the Sub0 2024 conference, **Chris Ling** and **Glide** from [**Talisman**](https://dablock.com/dapps/talisman-wallet/) introduced Signet, a groundbreaking multi-signature (multisig) solution designed to enhance data privacy and account abstraction for enterprises and institutions. The presentation delved into the technical intricacies and practical applications of Signet, showcasing its innovative features through live demonstrations.

## What is Talisman Signet?
**Signet is a multisig solution based on the proxy and multisig pallets**, designed to streamline the management of proxy accounts and multisig configurations. The core concept revolves around the “*Vault*,” which serves as a unit of the proxied account and the multisig. This structure allows for a seamless integration of the proxy account, which can be a pure proxy (seedless) or an imported non-pure proxy, with the multisig account derived from the signers and the threshold.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/amCegXTK_xA?si=10itTZWyM1cM6sOd" title="YouTube video player" width="560"></iframe>

### Key Features of Signet
1. **Multisig Configuration**: Signet simplifies the multisig setup by allowing users to add or remove signers and update thresholds. This flexibility is crucial as it enables organizations to adjust their security measures based on the value and importance of the assets managed within the vault.
2. **Data Privacy and Sharing**: One of the significant challenges with multisigs is the need to share transaction data among signers. Signet addresses this by providing a secure platform for sharing call data, transaction descriptions, address book entries, and contact information. This ensures that all necessary context is available for transaction approvals **without compromising data privacy**.
3. **Integration with DApps**: Signet enhances the utility of multisigs by enabling their use with decentralized applications (DApps). Through the Talisman extension, users can connect their multisig accounts with various DApps, allowing for **seamless interactions and transaction crafting directly from the DApp interfaces**.
4. **Account Abstraction**: Signet treats multisigs like any other account, enhancing their utility and simplifying their use within the broader ecosystem. This approach allows for organizational views of multisig accounts, providing an executive overview of all vaults, their balances, and transaction histories.

### Practical Applications
During the presentation, several practical applications of Signet were demonstrated:
- **Payroll Management**: Organizations can create a payroll vault with a lower threshold for signers to manage monthly payrolls efficiently. This setup allows for the easy drafting and approval of payroll transactions, ensuring a smooth and secure payroll process.
- **Treasury Management**: For managing larger assets, a treasury vault with a higher threshold for signers provides enhanced security. This setup can include features like **governance proxies** to allow for voting on fund allocations without risking unauthorized transactions.
- **Non-Profit Operations**: Different vaults can be set up for various operations, such as managing a non-profit pool, ensuring that each operation has the appropriate level of security and signer configuration.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vR_H6J9VqYHrXZpb3-JE7U41SktEVPOxYWcpD0pR0cky5qIMRO5bdw0J2c-m7JXmpjvK3dCWyoqusYp/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

### Signet Future Developments
The presentation also highlighted upcoming features and products, including:
- **Self-Hosting Options**: For organizations concerned about data privacy, Signet offers self-hosting options, allowing them to host the backend and database themselves.
- **Enhanced Reporting and Management**: Future updates will include more advanced reporting tools for tax reporting and profit and loss statements, catering to the needs of enterprise users.
- **Polkadot Multisig**: A new product line powered by Signet, offering a free and open multisig solution for the Polkadot ecosystem, launched in April 2024.

#### Conclusion
**Signet is poised to revolutionize the way organizations handle multisig accounts**, offering unparalleled flexibility, security, and integration capabilities. By abstracting the complexities of multisig configurations and enhancing data privacy, Signet empowers enterprises to manage their digital assets more effectively and securely.