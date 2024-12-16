---
title: 'Verifiable Private Random Permutations in Web3'
description: 'Discover how Integritee leverages Trusted Execution Environments for secure randomness in blockchain, ensuring confidentiality, scalability..'
sidebar:
    label: Christian Langenbacher (Integritee)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

In blockchain technology, ensuring the integrity and security of transactions is paramount. At the Sub0 2024 conference in Bangkok, Christian Langenbacher from Integritee AG delivered an insightful presentation on “Verifiable Private Random Permutations in Web3”. This talk shed light on the importance of randomness in blockchain, the role of Trusted Execution Environments (TEEs), and how Integritee’s solutions address critical issues of confidentiality, scalability, and interoperability.

<iframe allowfullscreen="true" frameborder="0" height="569" mozallowfullscreen="true" src="https://docs.google.com/presentation/d/e/2PACX-1vTpSY3Hkma4zSTmhOqLWTceE00t4K43yQZGuOVqKg-LQj853LatiRpSliqrJVXhjX4XmnISgCuE_mzO/embed?start=false&loop=false&delayms=60000" webkitallowfullscreen="true" width="960"></iframe>

Understanding Randomness in Blockchain
--------------------------------------

Randomness is a cornerstone of blockchain security and fairness. It is essential for tasks such as private key generation, validator responsibilities, and the fair distribution of assets. However, generating true randomness in deterministic computer systems is challenging. Langenbacher highlighted the key properties that define randomness:

- **Unpredictable**: It should be impossible to predict the next value.
- **Unbiased**: Every possible value should have an equal chance of being chosen.
- **Provable**: The process of generating randomness should be verifiable.
- **Tamper-proof**: The process should be secure against manipulation.
- **Non-reproducible**: The same input should not produce the same output more than once.

The Role of Trusted Execution Environments (TEEs)
-------------------------------------------------

A TEE is a secure area of a processor that guarantees the confidentiality and integrity of the data and code inside it. It is used to run applications in a secure environment, ensuring that sensitive data remains protected even if the main operating system is compromised. Langenbacher explained that TEEs are crucial for achieving true randomness and secure computations in blockchain applications.

Integritee uses Intel’s SGX (Software Guard Extensions) to implement TEEs, which provide:

- **Confidentiality**: Data processed inside the TEE cannot be accessed by any external entity.
- **Integrity**: Ensures the code and data are not tampered with.
- **Remote Attestation**: Verifies that the code running inside the TEE is the correct and intended version.

Integritee’s Approach to Secure Randomness
------------------------------------------

Integritee leverages TEEs to generate true random numbers, ensuring high levels of security and integrity. The platform addresses several key challenges:

- **Confidentiality**: Data within the TEE remains private.
- **Scalability**: TEEs enable simplified consensus mechanisms, allowing for high transaction throughput.
- **Interoperability**: Integritee can securely interact with web2 services and other blockchains, providing a bridge for secure data transfer.

Demonstrating Verifiable Private Random Permutations
----------------------------------------------------

Langenbacher presented a demo of a raffle system to illustrate the application of verifiable private random permutations. The system allows users to participate in a lottery, with the randomness and fairness of the draw ensured by the TEE. Key steps in the demo included:

1. **Setup**: Launching a local blockchain and TEE environment.
2. **Raffle Creation**: Initiating a raffle and allowing users to register.
3. **Drawing Winners**: Using the TEE to generate true random winners.
4. **Verification**: Providing a Merkle proof to users, enabling them to verify their participation in the raffle.

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/MKJ0_eQQDX0?si=rdAIIUGqWl0uTDr2" title="YouTube video player" width="560"></iframe>

### Conclusion

Christian Langenbacher’s presentation underscored the importance of verifiable and secure randomness in blockchain applications. Integritee’s innovative use of TEEs to ensure confidentiality, scalability, and interoperability showcases a robust solution to the inherent challenges of blockchain technology. As blockchain continues to evolve, such advancements are crucial for building trust and integrity in decentralized systems.