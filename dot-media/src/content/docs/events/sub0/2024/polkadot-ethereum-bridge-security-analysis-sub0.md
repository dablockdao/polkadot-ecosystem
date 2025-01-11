---
title: 'Polkadot <> Ethereum Bridge: Security Analysis'
description: 'Discover the security innovations of the Polkadot Ethereum Bridge by Bhargav Bhatt, enhancing blockchain interoperability.'
sidebar:
    label: Bhargav Bhatt
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

In a recent talk at Polkadot Sub0 Bangkok 2024, **Bhargav Bhatt** from the **Web3 Foundation** delved into the intricate details of the **Polkadot &lt;&gt; Ethereum Bridge**, which is on the verge of going live. This analysis, conducted with contributions from Dev at Parity, Snowbridge, and external auditors, focuses on the security measures put in place to ensure the robustness of the bridge. Here’s a comprehensive overview of the talk.

## Understanding Blockchain Bridges
Bhargav Bhatt began by explaining the fundamental concept of bridges in the blockchain world. Much like physical bridges that connect two isolated regions, blockchain bridges facilitate interoperability between independent and technically diverse chains. For instance, Polkadot and Ethereum have different consensus mechanisms and networking layers, making direct communication challenging. Bridges help these chains fetch and verify each other’s states, enabling functionalities like asset transfers and state migrations.  
<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/bCmhip74tzbdlR?hostedIn=slideshare&page=upload" width="476"></iframe>

### Traditional vs. Trustless Blockchain Bridges
Traditionally, bridges have relied on trusted intermediaries, which are entities that both source and target chains trust to relay information. However, this centralized approach poses several risks, including extra trust assumptions, potential safety issues, and a single point of failure. Bhargav highlighted numerous bridge-related hacks, emphasizing that traditional multi-sig bridges are extremely vulnerable.

To mitigate these risks, the Polkadot &lt;&gt; Ethereum Bridge aims to be trustless, meaning no additional trust is placed on intermediaries. Instead, the system relies on the inherent security of the participating chains.

## Key Requirements for a Trustless Bridge
1. **Open Relayers**: Anyone can run a relayer without needing to stake or deposit.
2. **Traceable Misbehavior**: Any detected misbehavior should be traceable to the validators, who are then punished accordingly.

## The Light Client Approach
The trustless bridge employs a light client approach:
- **Ethereum to Polkadot**: An Ethereum light client runs as a parachain on Polkadot, listening to Ethereum’s finality via the sync committees.
- **Polkadot to Ethereum**: A Polkadot light client operates as a smart contract on Ethereum, listening to Polkadot’s finality.

Relayers only need to relay messages between chains, collecting fees for their efforts.

### Challenges and Optimizations
One of the significant challenges is making Ethereum listen to Polkadot’s finality efficiently, given Ethereum’s high transaction costs. Bhargav introduced an optimized protocol using a technique called interactive random sampling to address this.

## Interactive Random Sampling Protocol
Instead of sending all validator signatures to the smart contract, the relayer claims to have the necessary signatures. The light client then uses an unbiased source of randomness to sample a subset of these signatures for verification. This approach reduces the cost while ensuring probabilistic soundness. The key to this method’s security is determining the appropriate number of signatures to sample (denoted as M), which balances efficiency and security.

### Crypto-Economic Security Analysis
The analysis incorporates crypto-economic principles, ensuring that rational players find it unprofitable to attack the system. The expected value of an attack must be negative when factoring in the probability of getting caught and the potential slashing penalties.

### Addressing Rand Bias and Concurrency Issues
Two main issues were identified:
1. **Rand Bias**: Ethereum’s randomness mechanism, Rand, is known to be biased. Bhargav and his team conducted a detailed analysis and countered this by increasing the number of signature checks required.
2. **Concurrency Issues**: Malicious validators could exploit delays in slashing by spinning multiple relayers. The solution, called dynamic sampling, increases the security parameter logarithmically with the number of relayers, making such attacks impractical.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/SSmtwvoZgDw?si=Je3sPtwtq1lmGh7i" title="YouTube video player" width="560"></iframe>

#### Conclusion
Bhargav concluded by highlighting how the security analysis not only ensures the bridge’s safety but also significantly enhances its efficiency. The detailed examination of various parameters, including validator honesty, attack values, and slashing rates, has led to a robust and economically viable bridge design.

The **Polkadot &lt;&gt; Ethereum Bridge** represents a significant advancement in blockchain interoperability, emphasizing security and efficiency. As it prepares to go live, the rigorous analysis and innovative solutions discussed by Bhargav Bhatt promise a new standard for blockchain bridges.