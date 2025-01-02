---
title: SQD
description: SQD Network is a decentralized query engine optimized for the batch extraction of large volumes of data.
hero:
  tagline: A decentralized query engine.
  image: 
    file: ../../../../assets/tools/dev/hellosqd.png
  actions:
    - text: Site
      link: https://www.sqd.dev/
      icon: external
    - text: Docs
      link: https://docs.sqd.dev/
      icon: external
      variant: secondary
---

As blockchain ecosystems grow more complex and interconnected, developers face increasing challenges in accessing, processing, and analyzing on-chain data. The SQD Network emerges as a groundbreaking solution, offering unparalleled capabilities for blockchain indexing and data querying. Designed to streamline the development process for decentralized applications (dApps) and other blockchain-based solutions, the SQD Network is a key player for developers within the Polkadot ecosystem and beyond.

## What is SQD Network?
SQD Network is a decentralized query engine and data lake optimized for high-volume batch data extraction. Its innovative architecture allows developers to access raw and processed blockchain data with unprecedented speed, efficiency, and cost-effectiveness. Currently, the network serves over 200 blockchain protocols, including major EVM-based chains, Substrate networks like Polkadot, and even emerging blockchains such as Solana, Tron, and Fuel.

The core functionalities of the SQD Network revolve around providing a robust infrastructure for indexing historical blockchain data, enabling use cases such as:
- Transaction and event analysis
- Data-driven decision-making for dApps
- Custom API development for smart contracts

By addressing the limitations of traditional RPC nodes and subgraph indexing solutions, SQD Network significantly enhances the efficiency of blockchain data processing.

## Key Components of the SQD Ecosystem
The SQD ecosystem encompasses several complementary tools and services tailored to streamline blockchain development. These include:

### 1. Squid SDK
The Squid SDK is a Typescript toolkit that serves as the backbone for building high-performance blockchain indexers. It enables developers to extract, transform, and load (ETL) data from the SQD Network efficiently, without relying on archival RPC nodes. Key features of the Squid SDK include:
- High-level data extraction and filtering capabilities
- Support for decoding and normalizing raw blockchain data
- Integration with popular data storage solutions like PostgreSQL, BigQuery, and local file systems
- An expressive GraphQL server for tailored API development
- Real-time data synchronization with support for chain reorganizations

The Squid SDK is particularly beneficial for Polkadot developers, given its seamless compatibility with Substrate-based chains and its ability to handle complex indexing tasks with ease.

### 2. SQD Cloud
SQD Cloud offers a Platform-as-a-Service (PaaS) solution for deploying and managing blockchain indexers built using the Squid SDK. It provides a fully hosted environment, eliminating the operational complexities of maintaining custom indexers. Features include:
- Zero-downtime migrations between indexer versions
- Provisioning of high-performance RPC endpoints
- Intuitive deployment management through a web interface or CLI
- Enterprise-grade SLAs for reliability and performance

For projects requiring enterprise-level infrastructure, SQD Cloud offers a scalable and secure solution.

### 3. SQD Firehose
The SQD Firehose acts as a lightweight adapter, enabling existing subgraph frameworks to run on the SQD Network without needing archival RPC nodes. This tool significantly reduces operational costs while maintaining high data throughput.

### 4. ApeWorx SQD Plugin
For developers leveraging the ApeWorx framework, the SQD plugin integrates the SQD Network as a fast and reliable data source. This plugin simplifies data access for testing and deployment workflows.

## Why is SQD Network Essential for Polkadot Development?
Polkadot’s innovative architecture, built on the Substrate framework, facilitates seamless interoperability and scalability. However, this also introduces complexities in data indexing and querying, particularly across multiple parachains. The SQD Network’s capabilities align perfectly with these needs:

### 1. Comprehensive Data Access
SQD Network ingests petabytes of data from over 200 blockchain networks, including Polkadot and its parachains. Developers can retrieve historical transaction data, event logs, state diffs, and execution traces, enabling in-depth analysis and decision-making.

### 2. Scalability and Performance
The decentralized architecture of the SQD Network allows horizontal scalability, ensuring that the system can handle increasing data loads without compromising performance. A single query can replace up to 100,000 RPC requests, making data access over 100 times faster than traditional methods.

### 3. Cost-Effectiveness
By eliminating egress fees and offering RPC-free access to blockchain data, SQD Network drastically reduces data access costs. Developers only pay for compute resources, making it an economical choice for projects of all sizes.

### 4. Real-Time Data Processing
For Polkadot developers building real-time applications, such as DeFi protocols or gaming platforms, the SQD Network’s ability to handle unfinalized blocks and chain reorganizations ensures accurate and timely data delivery.

### 5. Interoperability Across Ecosystems
Given Polkadot’s focus on interoperability, the SQD Network’s support for multiple blockchain protocols—from Substrate to EVM and beyond—enables developers to build multichain applications effortlessly.

## Success Stories and Real-World Applications

The impact of SQD Network on blockchain development is evident from its adoption by leading projects across the Web3 ecosystem. Notable use cases include:

1. **PancakeSwap:** The decentralized exchange leverages SQD Network for high-performance data indexing, enabling seamless integration of multichain functionalities.
2. **RAILGUN:** RAILGUN utilizes SQD Network’s call tracing capabilities to support its privacy-preserving mechanisms, such as the Privacy Pool/Proof of Innocence (PPOI).
3. **Guru Network:** By integrating the Squid SDK, Guru Network enhances its analytics dashboards and AI-driven processes with real-time and historical blockchain data.
4. **Skybreach:** The gaming ecosystem relies on SQD’s indexing SDK to access holistic EVM data, powering next-generation gaming experiences.
5. **[Polimec](/dapps/defi/polimec):** The Polimec platform benefits from SQD Network’s robust infrastructure, ensuring scalability as it expands its DeFi services across multiple chains.

## How to Get Started with SQD Network
For Polkadot developers looking to harness the power of SQD Network, the onboarding process is straightforward:
1. **Explore Documentation:** Visit the official SQD Network documentation to understand the APIs, SDKs, and deployment options available.
2. **Set Up a Squid SDK Indexer:** Follow the step-by-step guide to build a custom indexer tailored to your project’s needs.
3. **Leverage SQD Cloud:** Deploy your indexer on SQD Cloud for a hassle-free and scalable hosting solution.
4. **Participate in the Decentralized Network:** Join the permissionless SQD Network by running a worker node or delegating SQD tokens to support the ecosystem.

## The Road Ahead
As blockchain adoption continues to accelerate, the demand for efficient and cost-effective data access solutions will only grow. The SQD Network, with its cutting-edge infrastructure and developer-friendly tools, is poised to play a pivotal role in shaping the future of blockchain innovation. For the Polkadot ecosystem, SQD Network offers a transformative solution that empowers developers to build scalable, interoperable, and data-driven applications with ease.

Whether you’re building the next big DeFi protocol, a gaming platform, or an AI-powered analytics tool, SQD Network provides the foundation you need to succeed in the ever-evolving world of Web3.
