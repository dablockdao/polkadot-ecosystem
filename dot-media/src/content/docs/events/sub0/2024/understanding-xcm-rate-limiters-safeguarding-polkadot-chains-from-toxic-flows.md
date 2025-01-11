---
title: 'XCM Rate Limiters Protecting Polkadot Chains'
description: 'Explore how XCM rate limiters protect Polkadot chains from toxic flows, as presented by Jakub Panik at Sub0 2024.'
sidebar:
    label: Jakub Panik (Hydration)
---

In a compelling presentation at Sub0 2024, **Jakub Panik**, **CTO of Intergalactic and builder of Hydration (former HydraDX)**, delved into the necessity and **implementation of XCM (Cross-Consensus Messaging) rate limiters** to protect blockchain ecosystems from toxic liquidity flows. Here’s an in-depth look at why these rate limiters are essential, how they function, and their future potential in the Polkadot ecosystem.

## The Need for XCM Rate Limiters
Blockchain security is paramount, especially given the numerous hacks and exploits targeting various chains. The XCM rate limiters act as a critical defense layer for parachains within the Polkadot network, offering protection against malicious activities and ensuring the stability and integrity of the chain.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vRRfmA896HLN15r0kEoY60QXm6tacQHsv7-7v1yR7wPqooI7b_vcvLMW8FcgfZSDRnZec8XBQSZ0yqD/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## How XCM Rate Limiters Work
1. **XCM Barrier and Execute Filters:** Rate limiters utilize barriers and execute filters to scrutinize XCM messages. These barriers act as simple filters that decide whether an XCM message should be processed based on its origin and fee payments. Execute filters, on the other hand, allow or block specific functions that other parachains attempt to execute on your chain, adding a more complex level of scrutiny.
2. **XCM Deferring:** Jakub explained how messages can be deferred rather than lost in case of suspicious activity. By deferring messages, the system temporarily halts their execution, adding a layer of protection without discarding potentially important messages outright.
3. **Process Flow:** The process begins with the XCM message queue, which handles incoming, outgoing, and deferred messages. Messages are processed in sequence, with the rate limiter assessing whether to defer based on predefined limits and the message’s origin and content.
4. **Defer and Discard Functions:** Critical to this system are the defer and discard functions. The defer function decides the delay for message execution, while the discard function is used in extreme cases to permanently reject harmful messages. These functions ensure that even during an attack, the chain can manage and control the flow of messages effectively.
5. **Rate Limiter Implementation:** The rate limiter is configured with specific thresholds, such as a maximum amount of tokens per time unit. If these thresholds are exceeded, subsequent messages are deferred proportionally, ensuring the chain isn’t overwhelmed by sudden spikes in activity.

## Future of XCM Rate Limiters
HydraDX’s implementation of XCM rate limiters represents a significant advancement in blockchain security. Looking ahead, the team aims to net inflow and outflow volumes to **prevent distributed denial-of-service (DDoS) attacks** via rate limit abuse. They also plan to propose this solution as an optional standard within the XCM framework, potentially benefiting the broader Polkadot ecosystem.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/QNaJxMdjss0?si=Shvcsox0GD8ctN_g" title="YouTube video player" width="560"></iframe>

### Conclusion
XCM rate limiters are a vital tool in the ongoing effort to secure blockchain networks against toxic flows and malicious activities. Jakub Panik’s presentation highlighted both the technical details and the strategic importance of these limiters, providing a robust framework for enhancing the security of Polkadot chains.