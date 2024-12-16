---
title: 'Generic Ledger App and Verifiable Metadata'
description: 'Juan Leni from Zondax share advancements in the realm of secure digital transactions through the introduction of the Generic Ledger App and verifiable metadata'
sidebar:
    label: Juan Leni (Zondax)
---

In a recent talk by Juan Leni from Zondax at Polkadot Sub0 2024, significant advancements were discussed in the realm of secure digital transactions through the introduction of the Generic Ledger App and verifiable metadata. This blog post delves into the highlights of the talk, exploring the implications of these innovations for the broader blockchain ecosystem.

Overview of the Generic Ledger App
----------------------------------

The Generic Ledger App aims to streamline and secure the use of hardware wallets, such as those produced by Ledger, across multiple blockchain networks. Traditionally, each blockchain required a distinct Ledger application, complicating the user experience and maintenance. The new Generic Ledger App consolidates this by supporting various blockchains through a single application.

### **Generic Ledger App Key Benefits:**

1. **Unified Support:** Users can manage assets across different blockchains without needing multiple apps.
2. **Enhanced Security:** The app leverages advanced cryptographic techniques to ensure transaction integrity, even if the host system is compromised.

<iframe allowfullscreen="true" frameborder="0" height="569" mozallowfullscreen="true" src="https://docs.google.com/presentation/d/e/2PACX-1vSuVNI8LaCBq-4iHDk0xgHdFlzhhoe2g_XD0gUjk6gzhSuQEM72AgN6P-mu6uq0ud-2NPRUVnWraX81/embed?start=false&loop=false&delayms=60000" webkitallowfullscreen="true" width="960"></iframe>

Verifiable Metadata: Ensuring Trust and Security
------------------------------------------------

One of the core challenges in using hardware wallets is ensuring that the transaction details displayed on the wallet accurately reflect the actual transaction being signed. This is crucial because any mismatch could lead to unauthorized or incorrect transactions.

Verifiable metadata addresses this issue by introducing a Merkle tree structure to store and validate transaction data. This method provides cryptographic proof of the data’s integrity, ensuring that users are always aware of the exact nature of the transaction they are signing.

### **Technical Highlights:**

1. **Merkle Tree Structure:** Metadata is stored in a Merkle tree, allowing for efficient and secure validation.
2. **Proof Generation:** Only the necessary parts of the transaction metadata are transmitted, reducing the risk of data tampering.
3. **Root Validation:** The root of the Merkle tree is included in the signed transaction, ensuring end-to-end security.

Generic Ledger App Collaboration and Development
------------------------------------------------

The development of the Generic Ledger App and verifiable metadata has been a collaborative effort involving multiple stakeholders, including Parity Technologies and the Substrate community. This collaboration ensures that the solutions are robust, secure, and widely applicable across different blockchain environments.

**Progress and Challenges:**

- **RFC Approval:** A key milestone is the approval of the RFC (Request for Comments), which standardizes the implementation across different platforms.
- **Wallet Integration:** Integration with popular wallets like Talisman and SubWallet is underway, ensuring a seamless user experience.
- **Runtime Upgrades:** The deployment of runtime upgrades across various blockchain networks is critical to the adoption of these innovations.

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/wVMsWdwkfkA?si=gHFZ8HDUtQxEkHim" title="YouTube video player" width="560"></iframe>

Generic Ledger App Future Outlook
---------------------------------

The transition to the Generic Ledger App and verifiable metadata represents a significant leap forward in blockchain security and usability. As the ecosystem adopts these standards, users can expect a more secure, efficient, and unified experience when interacting with different blockchain networks.

**Next Steps:**

- **Community Engagement:** Continuous feedback and collaboration with the blockchain community to refine and enhance the solutions.
- **Education and Awareness:** Efforts to educate users on the benefits and usage of the new app and metadata verification methods.
- **Ongoing Development:** Continued development to support new blockchains and address emerging security challenges.