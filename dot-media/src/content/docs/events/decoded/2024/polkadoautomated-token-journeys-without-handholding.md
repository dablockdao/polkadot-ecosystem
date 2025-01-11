---
title: 'Automated Token Journeys Without Handholding'
description: 'Vortex streamlines cross-chain transactions, optimizing user experience with seamless, compliant, multi-network token flows.'
sidebar:
    label: Torsten (Pendulum)
---
At Polkadot Decoded 2024, Torsten, the Chief Technology Officer of Pendulum, delivered an insightful presentation on the latest advancements in automating token flows across multiple networks and protocols. The focus of his talk was on the concept of a “token journey” and the steps required to send tokens through various networks and protocols, emphasizing the importance of user experience and automation.

Torsten highlighted that users often need to send tokens through bridges, decentralized exchanges (DEXs), or even convert them into fiat currency. These processes can be cumbersome and require users to manually handle multiple wallets and currencies across different networks. To address this, Pendulum has been working on a system designed to automate these complex token flows, ensuring a seamless and user-friendly experience.

## Introducing Vortex: The Next Step in Token Flow Automation
The centerpiece of the presentation was the introduction of Vortex, a prototype system aimed at automating various token flows. Vortex is designed to handle multi-chain transactions, including bridging tokens from one network to another, exchanging tokens on DEXs, and off-ramping to fiat currencies. Torsten explained that Vortex’s goal is to provide a one-step, fully automated user experience, eliminating the need for manual intervention.  
<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vSkNDKvNUMvrZj4VcQwF4egzN2v6-nTu8cW_nh4qpjxlhYsNx8JophN9BgPErUFoEciAtsNwDhNN-Cc/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## A Concrete Use Case of Vortex: Freelancers in Emerging Markets
To illustrate the capabilities of Vortex, Torsten presented a real-world use case involving a freelancer in an emerging market, such as Brazil. The freelancer receives their salary in US dollar stablecoins (e.g., USDC) and needs to convert these into local fiat currency (Brazilian real) for everyday expenses. The token flow for this use case involves multiple steps: transferring USDC from Polygon via the Axelar bridge to Moonbeam, using XCM to send tokens to Pendulum, exchanging USDC for Euro or Brazilian real tokens through Pendulum’s Forex-optimized AMM, and finally off-ramping via the Spacewalk bridge to Stellar for direct fiat conversion.

This complex flow demonstrates Vortex’s ability to automate intricate processes, leveraging Pendulum’s powerful primitives to save users up to 85% in fees compared to conventional methods.

## The Power of Stellar and Spacewalk
One of the key components of Vortex is the integration with Stellar, known for its robust network of fiat gateways and compliance-friendly on-ramps and off-ramps. Pendulum’s Spacewalk bridge connects Pendulum and Stellar, enabling the seamless transfer of various fiat tokens. This connection is essential for providing users with direct fiat conversions and maintaining compliance through standardized KYC processes.

## Forex-Optimized AMM: Nabla
Torsten also introduced Nabla, an advanced automated market maker (AMM) designed to optimize Forex transactions. Unlike conventional AMMs, Nabla employs single-sided liquidity pools and a proactive price feed oracle, minimizing risks for liquidity providers and reducing slippage for users. This innovative approach ensures more efficient capital use and better exchange rates for users.

## Challenges and Solutions in Automated Token Flows
Automating token flows presents several challenges, such as ensuring that users do not need wallets for every involved network and maintaining compliance without relying on custodians. Vortex addresses these challenges by creating ephemeral accounts for users at the beginning of the flow, ensuring that private keys remain secure on the user’s side. The system collects all necessary signatures before initiating the automated process, ensuring security and compliance throughout the journey.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/ZjMPPwAJ170?si=T72OMO4ed3u8Xlkh" title="YouTube video player" width="560"></iframe>

### Conclusion and Future Outlook
Torsten’s presentation at Polkadot Decoded 2024 showcased Pendulum’s commitment to improving the user experience in the blockchain ecosystem. By automating complex token flows and leveraging powerful tools like Vortex, Spacewalk, and Nabla, Pendulum aims to make cross-chain transactions seamless and efficient. Although the Vortex prototype encountered some issues during the live demo, the potential of this system to revolutionize token journeys is evident.

As Pendulum continues to refine and develop these technologies, the future of automated token flows looks promising, paving the way for a more interconnected and user-friendly blockchain ecosystem.