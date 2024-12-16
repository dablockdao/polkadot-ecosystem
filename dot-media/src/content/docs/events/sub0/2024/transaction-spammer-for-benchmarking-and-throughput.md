---
title: 'Shawn Tabrizi - Transaction Spammer for Benchmarking and Throughput'
description: 'Shawn Tabrizi insights on benchmarking and optimizing blockchain performance, focusing on transaction throughput in the Polkadot ecosystem.'
sidebar:
    label: Shawn Tabrizi (Transaction Spammer)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

At Sub0 2024 in Bangkok, Shawn Tabrizi from Substrate delivered a fascinating presentation on “Building a Transaction Spammer for Benchmarking and Throughput.” This talk delved into the intricacies of measuring and optimizing transaction per second (TPS) in blockchain systems, focusing on the Polkadot ecosystem.

Understanding Transaction Per Second (TPS)
------------------------------------------

Transaction per second, or TPS, has been a longstanding metric used to gauge blockchain performance. Originating from the Bitcoin era, TPS initially represented the number of transactions a network could process per second. However, as blockchain technology has evolved, the relevance and accuracy of TPS as a sole performance metric have diminished. Modern blockchains like Polkadot and Ethereum support diverse transaction types, making it necessary to rethink how we measure performance.

### The Evolution of TPS

Shawn highlighted that TPS has become a gameable and often misleading metric. In the early Bitcoin era, TPS was straightforward since transactions were primarily balance transfers. Today’s blockchains, however, handle complex operations, from smart contract executions to bundled transactions. Thus, measuring scalability and performance requires more nuanced metrics.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vQIEav2c_WCcBcFYRL2gIpLrwhy2MO-j-DQ_3UCgn4fPAwp59rgiTANzPreeLYwdEt09K-rKfxNwOPT/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

Introducing Standard TPS (sTPS)
-------------------------------

To address these challenges, Shawn introduced the concept of Standard TPS (sTPS). This metric aims to provide a reproducible, cross-chain standard for measuring basic transaction throughput. By focusing on “keep-alive” balance transfers between existing accounts, sTPS offers a more consistent baseline for comparison across different blockchain platforms.

### Alternative Metrics for Blockchain Performance

Beyond sTPS, Shawn discussed the importance of other metrics such as:

1. **Weight/Gas Computation per Second**: This measures the computational throughput of a blockchain, accounting for variability in transaction complexity and block time.
2. **Resource Consumption per Transaction**: Especially relevant for rollup-based solutions, this metric considers the computational resources required to generate proofs or perform other pre-blockchain operations.

Benchmarking in the Polkadot Ecosystem
--------------------------------------

In the Polkadot ecosystem, the goal is to have minimal transactions on the relay chain, focusing instead on securing and scaling through parachains. Shawn emphasized that the real measure of Polkadot’s scalability is the sum of all transactions across its parachains. This approach leverages Polkadot’s sharded architecture to optimize performance and security.

### Practical Demonstrations

Shawn’s presentation included several live demonstrations, showcasing tools and techniques for benchmarking TPS on Substrate-based blockchains. Key takeaways from these demos included:

- **Weight Overestimation**: Substrate overestimates transaction weights to ensure network safety under worst-case scenarios. While this conservatism impacts raw TPS numbers, it ensures the blockchain remains secure and resilient.
- **Optimizing Throughput**: By pre-signing transactions and adjusting runtime configurations, substantial improvements in TPS can be achieved. For instance, batching transactions significantly reduces overhead and increases throughput.

### Polkadot Future Directions

Shawn highlighted ongoing efforts to optimize benchmarking tools and methodologies within the Polkadot ecosystem. Future initiatives may include dedicated development sprints to enhance throughput, reproducible benchmarking frameworks, and deeper investigations into VM-specific optimizations.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/MTzeE0fNSZ0?si=V25D8x5bjcLZA9iX" title="YouTube video player" width="560"></iframe>

#### Conclusion

Shawn Tabrizi’s talk at Sub0 2024 provided valuable insights into the complexities of measuring and optimizing blockchain performance. By moving beyond simplistic TPS metrics and adopting more comprehensive measures like sTPS, weight computation per second, and resource consumption per transaction, the blockchain community can better understand and improve the scalability of decentralized networks.