---
title: 'Understanding Agile Coretime: Insights from Donal Murray'
description: 'Donal Murray insights on Agile CoreTime from Sub0 2024, highlighting its impact on resource allocation within the Polkadot ecosystem.'
sidebar:
    label: Donal Murray (Agile Coretime)
---

At the Sub0 2024 conference in Bangkok, Donal Murray from Parity delivered a thought-provoking talk on Agile Core Time, shedding light on its necessity, implementation, and future in the Polkadot ecosystem. This article delves into the key points from Murray’s presentation, providing an overview of Agile Core Time and its implications for Polkadot and Kusama.

## Introduction to Agile Core Time
Agile Core Time represents a fundamental shift in how network resources are allocated and utilized within the Polkadot ecosystem. Unlike traditional slot auctions, which require substantial commitments from participants, Agile Core Time introduces a more flexible and dynamic approach to resource allocation, aiming to lower the barrier to entry and enhance efficiency.

<iframe allowfullscreen="true" frameborder="0" height="569" mozallowfullscreen="true" src="https://docs.google.com/presentation/d/e/2PACX-1vT3UnFvG7sY5olbYQo_G_SsSXiOViTOjl4PgRHmEGvEGs_9o62XE_oSgx2PPvYIaBHKswEDj8NfFU20/embed?start=false&loop=true&delayms=60000" webkitallowfullscreen="true" width="960"></iframe>

## Motivation for Agile Core Time
Murray emphasized the motivation behind Agile Core Time, which is to address the inefficiencies and rigidities of the existing slot auction mechanism. The traditional system often resulted in underutilized block space and high entry barriers for smaller projects. Agile Core Time seeks to optimize resource utilization by allowing more granular and flexible allocation of core time, thus promoting maximal utilization of the network’s capabilities.

## Agile Coretime Key Specifications and Implementation
The core specifications of Agile Core Time are outlined in several RFCs (Request for Comments), primarily RFC 1 and RFC 5. These documents detail the overarching goals and interface requirements for Agile Core Time. Key aspects include:
1. **Minimizing Barriers**: Lowering the entry barriers for new projects by offering more flexible and predictable pricing models.
2. **Predictable Pricing**: Ensuring price predictability through mechanisms like periodic Dutch auctions and capped renewals, which help stabilize costs for long-term users.
3. **Optimal Resource Allocation**: Facilitating efficient allocation of work to cores, avoiding scenarios where resources are wasted or misallocated.
4. **Decoupling Complexity**: Reducing the complexity added to the relay chain by keeping core time-specific logic separate, allowing for independent evolution and adaptation of the core time system.

### Agile Coretime Pricing Model
One of the most intriguing aspects of Agile Core Time is its pricing model. Murray explained the use of periodic Dutch auctions, where the price of core time starts high and decreases until it meets market demand. This model is complemented by a renewal mechanism that caps the renewal price based on initial purchase prices, providing both predictability and flexibility to users.

### Agile Coretime Implementation Status
Agile Core Time is already operational on the Rococo and Westend test networks, with full deployment on Kusama expected soon. The system includes functionalities for on-demand core time purchases, core time credits, and the migration of existing slots to the new model. Future improvements and iterations are planned to enhance the system further.

### Impact on Network Utilization
Murray highlighted the potential impact of Agile Core Time on network utilization. By allowing more flexible and efficient allocation of resources, the system is expected to significantly increase the median utilization rates of the Polkadot and Kusama networks. This improvement is crucial for ensuring that the networks operate at their full potential, maximizing the value derived from their resources.  
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/ci-h9zC-57Y?si=FR6vTKPfEMuZ_TzJ" title="YouTube video player" width="560"></iframe>

#### Conclusion
Donal Murray’s talk at Sub0 2024 provided valuable insights into the transformative potential of Agile Core Time within the Polkadot ecosystem. By addressing the limitations of the traditional slot auction system and introducing a more dynamic and flexible approach, Agile Core Time promises to enhance resource utilization, lower entry barriers, and foster greater innovation within the network.