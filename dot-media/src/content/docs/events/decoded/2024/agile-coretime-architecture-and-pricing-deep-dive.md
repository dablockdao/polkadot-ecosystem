---
title: 'Donal Murray - Agile Coretime Architecture'
description: 'Explore the Agile Coretime Architecture in Polkadot, focusing on flexible procurement, price predictability, and market-driven pricing.'
sidebar:
    label: Donal Murray (Parity)
---
A new critical component of Polkadot is the Coretime architecture, designed to enhance the efficiency, flexibility, and predictability of blockchain resources. This article offers a **deep dive into the Agile Coretime Architecture** and its pricing mechanisms, providing insights valuable to developers, teams, and stakeholders in the Polkadot ecosystem. This is a brief summary taken from **[Donal Murray](https://x.com/domuiri)‘s talk at [Polkadot Decoded 2024](https://dablock.com/web3-events/polkadot-decoded/)**.

## Polkadot Coretime Aims and Objectives
The Coretime architecture was developed with specific objectives in mind, aiming to address the limitations of previous models and improve the overall utility of the Polkadot network. Key aims include:
1. **Flexible Coretime Procurement**: This objective is centered around lowering the barrier to entry for projects, allowing for more accessible and dynamic resource allocation. This flexibility is crucial for maximizing block space utilization, ensuring that resources are efficiently used without unnecessary overhead.
2. **Price Predictability**: Unlike previous models where long-term costs could be highly uncertain, the [**Polkadot Coretime architecture**](https://dablock.com/guides/what-is-polkadot-agile-coretime/) incorporates mechanisms to enhance price predictability. By doing so, it reduces financial uncertainty for projects, which can plan their resource needs with greater confidence.
3. **Market-Driven Price Discovery**: The Coretime architecture employs a market-driven approach to pricing, enabling a fair and transparent method for determining the cost of blockchain resources. This approach is aligned with the overall goal of making Polkadot a more accessible and sustainable platform for the long term.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vQNt5zJLQDm3yOrJcAAvl8CyNTLWBGvjIK7uA2DeMDUsFN2Il-Y0OP8YpzqsBrWCYGVzQwo0RLIAZh-/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## Polkadot Coretime Chain Architecture
The Coretime Chain serves as the backbone of the Coretime architecture, facilitating the allocation and management of blockchain resources. It operates through a system parachain that drives the marketplace for Coretime allocation, with significant operations occurring on the relay chain.
1. **Periodic Dutch Auction**: The Coretime Chain utilizes a periodic Dutch auction to manage the pricing of resources. This auction starts with a high price, which decreases over time along a predefined curve until it reaches a fixed price at the end. This mechanism is designed to **discover the fair market price dynamically**, ensuring that resources are allocated efficiently.
2. **Renewal Mechanisms**: A critical feature of the Coretime architecture is the built-in support for renewals. This feature is integral to maintaining stability within the ecosystem, allowing projects to secure resources for the long term while still benefiting from price predictability.
3. **Operational Flexibility**: The Coretime Chain supports various operations, including partitioning and interlacing, which allow for finer control over resource allocation. These operations are particularly useful for projects that need to manage their resources dynamically, adapting to changing demands without sacrificing stability.

## Coretime Pricing Models and Considerations
The pricing model within the Coretime architecture is designed to balance flexibility, predictability, and market-driven fairness. Key components of the pricing model include:

1. **Intra-Sale Price Finding**: The pricing model allows for significant price adjustments within a single sale period, providing a flexible approach to pricing that can adapt to fluctuations in supply and demand. This intra-sale adjustment helps prevent sharp price changes between sales, creating a more stable pricing environment.
2. **Market Adaptation**: The model includes mechanisms for adapting prices based on prior sales’ performance. This adaptability is crucial for maintaining a balance between affordability and the need to reflect true market conditions.
3. **Price Bounds and Exponential Decay**: The pricing curve is bounded to prevent extreme fluctuations. This approach ensures that even in low-demand scenarios, prices do not drop to unsustainable levels, preserving the economic viability of the network.

## Coretime Upcoming Developments
The Coretime architecture is continuously evolving, with several key developments on the horizon:
1. **Polkadot Launch**: August marks the **launch of Coretime on the Polkadot network**, following successful testing and deployment on Kusama. This launch will likely introduce minor tweaks to the pricing model based on insights gained during the Kusama implementation.
2. **Auto Renewal Functionality**: The introduction of auto-renewal is a significant upcoming feature that will streamline the renewal process, reducing the administrative overhead for projects and enhancing overall network stability.
3. **Future Pricing Adjustments**: As the network evolves, further adjustments to the pricing model may be necessary to ensure it continues to meet the needs of the ecosystem. These adjustments will be informed by ongoing analysis and community feedback, ensuring that the Coretime architecture remains responsive to the needs of its users.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/gPW4QygdsTU?si=kEK6RqLK-uzC_AI0" title="YouTube video player" width="560"></iframe>

### Conclusion
The Agile Coretime Architecture represents a significant advancement in how blockchain resources are allocated and priced within the Polkadot ecosystem. By combining **flexibility, predictability, and market-driven fairness**, it provides a robust framework that supports the long-term growth and sustainability of the network. As Polkadot continues to evolve, the Coretime architecture will play a pivotal role in shaping its future, ensuring that it remains a leading platform for blockchain innovation.