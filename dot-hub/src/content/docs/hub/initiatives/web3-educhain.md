---
title: 'Web3 EduChain'
description: EduChain educates on Web3 through Polkadot SDK, offering guides and examples for launching and maintaining parachains.
---

*Educating Web3 through the Polkadot Ecosystem*

EduChain is a pioneering project focused on advancing Web3 education through the comprehensive utilization of the Polkadot SDK. As an on-demand parachain, EduChain is now live on the Rococo testnet, offering invaluable resources and practical examples for launching and maintaining production-grade parachains.

## Why EduChain?
When EduChain was conceived, the Polkadot network boasted around 50 parachains, yet lacked detailed guides for deploying and sustaining a production-level parachain. Additionally, there was a scarcity of tutorials demonstrating the extensive features of the Polkadot SDK and FRAME library. EduChain aims to fill these gaps by providing thorough insights, practical examples, and comprehensive documentation to guide developers through the parachain lifecycle.

## Why Polkadot?
Polkadot offers several compelling advantages that make it an ideal platform for EduChain:
1. **Robust Security and Finality**: Polkadot provides multi-billion-dollar crypto-economic security and block finality from the very first block, ensuring secure transactions and operations.
2. **Interoperability**: Polkadot enables seamless interaction between multiple blockchains, both within and outside its ecosystem, enhancing the utility and flexibility of parachains.
3. **Customizable Runtimes**: Parachains on Polkadot are built with customizable runtimes written in Rust and executed as Wasm code, allowing for tailored blockchain solutions.
4. **Decentralized Network**: The network prioritizes a decentralized approach with a light-client design, supporting secure and efficient operations.
5. **Innovative Community**: Polkadot’s developer community is known for its visionary and highly intellectual contributions, fostering a dynamic environment for innovation.
6. **Polkadot OpenGov and Treasury**: The governance model and treasury system of Polkadot support numerous development initiatives, offering competitive compensation and funding through bounties.

With features like Agile Coretime and Async Backing, parachains on Polkadot can produce blocks continuously or on demand, achieving finality in 20-60 seconds with a throughput of around 800 transactions per second (TPS). Future enhancements like elastic scaling will further improve parachain throughput by utilizing multiple cores simultaneously.

## Launching a Parachain with EduChain
EduChain simplifies the process of launching a parachain with the following steps:
1. **Templates**: Utilize the available templates to launch a production-grade blockchain swiftly. The OpenZeppelin Polkadot Generic Runtime Template serves as a foundation, offering a minimalistic yet functional pallet list to streamline the launch process.
2. **Personalization**: Customize the runtime template by replacing placeholder names with your project’s identifiers. This step allows for the addition, removal, or creation of new pallets, which can be integrated into the runtime using the construct\_runtime! macro.
3. **Genesis Configuration**: Configure the genesis settings by replacing default keys (e.g., Alice and Bob) with custom keys for root, collator, and session purposes. This ensures a secure setup tailored to your specific needs.
4. **Collator Node Setup**: Deploy collator nodes locally or on a cloud service like Digital Ocean. Secure the connection through SSL to interact with the node via the Polkadot JS UI, enabling seamless monitoring and management.
5. **Local Development**: Use the pop-cli tool for local development and testing. Customize the Zombienet configuration to spawn relay chain and parachain collator nodes for a comprehensive development environment.
6. **Block Production**: On Rococo, EduChain operates as an on-demand parachain. Transactions submitted to the collator node enter the transaction pool and can be executed upon ordering block production and validation through the Rococo relay chain. Continuous block production can be facilitated by purchasing bulk coretime via platforms like Lastic or RegionX.

### Conclusion
EduChain is poised to transform Web3 education by providing a robust platform for launching and maintaining parachains on Polkadot. With detailed guides, practical examples, and a supportive ecosystem, EduChain empowers developers to navigate the complexities of blockchain technology, fostering innovation and growth within the Polkadot network.

For more information and detailed documentation, visit the EduChain website and explore the Polkadot SDK resources to get started on your journey with EduChain.
