---
title: HelloSQD
---
Data  

SQD Network is a decentralized query engine optimized for the batch extraction of large volumes of data.

SQD Network &amp; Data Access in the Polkadot Ecosystem  

----------------------------------------------------------

The Polkadot ecosystem continues to grow, with numerous projects and innovations enhancing its versatility and robustness. One such significant addition is the Subsquid Network, a decentralized query engine designed for efficient, large-scale data extraction. This article delves into the details of the **Subsquid Network**, its components, and its role within the broader Polkadot ecosystem.

What is Subsquid Network?
-------------------------

Subsquid Network is a **decentralized query engine optimized for the batch extraction of large volumes of data**. It currently serves historical on-chain data from **over 100 EVM and Substrate networks**, as well as beta support for Solana and Starknet. The data includes comprehensive elements such as event logs, transaction receipts, execution traces, and per-transaction state diffs on EVM.

Components of Subsquid Network
------------------------------

The Subsquid Network comprises several complementary products, each serving a unique purpose:

1. **Squid SDK**: A TypeScript toolkit designed for high-performance batch indexing. It sources data directly from the Subsquid Network without the need for an archival RPC, making it ideal for building custom APIs and data pipelines.
2. **Subsquid Cloud**: A hosted service for deploying custom indexers and GraphQL APIs. It provides the necessary infrastructure to run and manage indexers seamlessly.
3. **Subsquid Firehose**: A lightweight adapter that allows subgraphs to run against the Subsquid Network, bypassing the need for an archival RPC node.
4. **ApeWorx Subsquid Plugin**: This plugin integrates the Subsquid Network as a fast data source for the ApeWorx framework.

Detailed Features of Subsquid Network
-------------------------------------

### **API Capabilities**:

- Raw event logs
- Transaction data with receipts
- Execution traces for selected networks
- State diffs for selected networks

### **Deployments**:

- A production-ready private cluster running on Subsquid infrastructure (formerly Subsquid Archives)
- A decentralized, permissionless network currently in testnet phase

Subsquid Use Cases
------------------

Subsquid Network’s capabilities make it suitable for various applications, including but not limited to:

- Historical blockchain data retrieval
- Custom APIs for specific applications
- Real-time data synchronization and analysis
- In-house data pipelines for efficient and low-cost data handling

Squid SDK
---------

The Squid SDK is a robust toolkit for building efficient indexers. Key features include:

- High-level libraries for ETL (Extract-Transform-Load) pipelines
- Tools for decoding and normalizing raw data
- Data sinks for Postgres, local or s3 files, and BigQuery
- An expressive GraphQL server with schema-based configuration
- Real-time data ingestion with seamless handling of unfinalized blocks and chain reorganizations

Subsquid Cloud
--------------

Subsquid Cloud offers a Platform-as-a-Service (PaaS) for deploying Squid SDK indexers. Features include:

- Provisioning of compute resources and Postgres databases
- Zero downtime migrations
- High-performance RPC endpoints for real-time applications
- Intuitive deployment management via web or CLI
- Google Cloud-level SLA

Permissionless Public Network
-----------------------------

The decentralized version of Subsquid Network is a testnet providing data for a growing subset of networks supported by the private cluster. It routes requests to network nodes responsible for specific data subsets via a local p2p gateway.

Open Private Network
--------------------

The private data lake, formerly known as Archives, is a production-ready network running on Subsquid infrastructure. It serves as a stand-in for the permissionless network, with an identical API. The gateway is public and free to query.

Subsquid Tokenomics and Rewards
-------------------------------

The SQD token is integral to the Subsquid Network, serving multiple roles:

- **Incentivizing Infrastructure Providers**: SQD tokens reward node operators contributing storage and computation resources.
- **Curation of Network Participants**: Delegation of SQD tokens allows for permissionless selection of reliable node operators.
- **Fair Resource Consumption**: Locking SQD tokens allows consumers to increase rate limits.
- **Governance**: SQD tokenholders participate in network governance, voting on protocol changes and proposals.

Conclusion
----------

The Subsquid Network is a crucial component of the Polkadot ecosystem, providing an efficient and decentralized solution for large-scale data extraction and access. Its innovative architecture and comprehensive features make it a valuable tool for developers and enterprises looking to leverage historical and real-time blockchain data. As it evolves, Subsquid Network promises to play a significant role in the growth and development of Web3 technologies.

- <small>Related Token/s:</small> **SQD**
