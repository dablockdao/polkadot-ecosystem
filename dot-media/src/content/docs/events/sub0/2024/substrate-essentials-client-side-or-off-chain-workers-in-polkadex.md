---
title: 'Client-Side or Off-Chain Workers in Polkadex'
description: 'Explore the essentials of client-side and off-chain workers in Polkadex, as discussed by Gautham Jayasankar, Co-founder and CEO of Polkadex.'
sidebar:
    label: Mohammadreza Ashouri (Security)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

In a recent tech talk at [**Polkadot Sub0 2024 in Bangkok, Asia**](https://dablock.com/web3-events/polkadot-sub0/), **Gautham Jayasankar**, **Co-founder and CEO of [Polkadex](https://dablock.com/dapps/polkadex/)**, delved into the nuanced topic of **client-side and off-chain workers within the Substrate framework**, using Polkadex’s journey as a case study. This presentation offered deep insights into the challenges and solutions associated with integrating long-running, computationally intensive tasks in a blockchain environment, particularly within the Polkadex ecosystem.

## Understanding the Challenge of Polkadex
Developers working with Substrate often focus on runtime development, but [**Polkadex**](https://dablock.com/dapps/polkadex/) faced unique challenges requiring solutions beyond standard practices. The core issue was the need for long-running, generic computations **essential for Polkadex’s order book functionality**, which could not be efficiently handled within the runtime due to speed and resource constraints.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vRAyFEQsCA3qeF3MT0MH5m3aX9jatfakts8AZ35U5EIKTFGAdcK0ph6jy0dA7yR4zpE1B4DSQyuSHGY/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## The Limitations of On-Chain Execution
When [**Polkadex**](https://dablock.com/dapps/polkadex/) initially implemented its business logic on-chain in 2021, the approach proved to be too slow and costly. **The inclusion times ranged from 6 to 12 seconds**, and the block capacity could handle only about 1,500 transactions, which was inadequate for a high-frequency trading platform. This necessitated the need for an alternative approach to handle the order matching logic effectively.

### Exploring Alternative Solutions
Polkadex considered three main options:
1. **Sub-Protocol Development**: Creating a sub-protocol similar to **GRANDPA** or **Beefy**, which, while effective, posed challenges due to insufficient documentation and the complexity involved in developing client-side pallets.
2. **Off-Chain Workers**: Embedding the business logic within off-chain workers, a relatively new but promising approach. This method allowed Polkadex to manage long-running tasks more effectively by decoupling them from the on-chain execution constraints.
3. **Client-Side Pallets**: A more flexible yet challenging approach due to the lack of documentation and the need for significant reverse engineering. Polkadex reverse-engineered protocols like Grandpa and Beefy to understand and implement their client-side pallet for order book management.

### Implementing Client-Side Pallets
Despite the difficulties, [**Polkadex**](https://dablock.com/dapps/polkadex/) opted to develop client-side pallets, which provided several advantages:
- **Ease of Use**: Written in pure Rust without heavy reliance on macros, making development straightforward.
- **Access to Networking**: Enabled the use of standard libraries and provided access to the gossip engine for data propagation across nodes.
- **Flexibility**: Allowed integration of custom cryptographic keys and network protocols, tailored to Polkadex’s specific requirements.

However, this approach also had its drawbacks, including **slower iteration cycles due to the need for validators to upgrade their binaries** and the potential for validators to run modified logic, risking system integrity.

### Off-Chain Workers: A Viable Alternative
**Off-chain workers** presented a balanced solution by allowing essential computations to be performed off-chain while ensuring the results were securely validated on-chain. This method provided:
- **Fast Iterations**: Quicker bug fixes and updates compared to client-side pallets.
- **Security Guarantees**: Ensured computations were verified by the validator network, providing a trustless validation process.
- **Access to External Systems**: Enabled HTTP requests and integration with off-chain databases, though it lacked the full networking capabilities of client-side pallets.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/EesM9pPuMCM?si=mNKLGL98nBkkzrXZ" title="YouTube video player" width="560"></iframe>

### Conclusion
For new teams exploring Substrate, **Gautham Jayasankar recommends starting with off-chain workers due to their simpler implementation and robust security features**. Client-side pallets, while powerful, require more expertise and should be considered only after thorough experimentation with off-chain solutions.

Polkadex’s experience underscores the importance of tailored solutions in blockchain development, advocating for better documentation and community support to harness the full potential of Substrate’s capabilities.