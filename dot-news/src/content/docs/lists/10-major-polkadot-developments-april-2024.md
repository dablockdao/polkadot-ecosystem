---
title: '10 Major Polkadot Developments in April 2024'
description: '10 takeaways from the Parity team''s latest report highlighting key April updates to the Polkadot tech stack, essential for advanced users.'
---
The Parity team has released a new report by Pierre Aubert on the Polkadot forum, detailing the most recent **[advancements in the Polkadot tech stack in the month of April](https://forum.polkadot.network/t/paritytech-update-for-april-2024/7646)** made by Parity. In this article we bring you a brief summary with the 10 most relevant updates that may be most interesting for advanced users of the Polkadot ecosystem.

1. Polkadot Asynchronous Backing Launched
-----------------------------------------

A significant update in April was the launch of **asynchronous backing on Kusama**, with plans to enable it on Polkadot soon. This technology enhances the efficiency of block production, reducing delays and improving scalability across the network.

> ### *What is Asynchronous Backing?*
> 
> *Polkadot asynchronous backing is a new way for parachains (blockchains connected to Polkadot) to submit blocks for validation. In the older system, a parachain had to wait for its previous block to be included in the relay chain (the main chain of Polkadot) before it could submit a new block. This limited throughput and wasted resources.*
> 
> *With asynchronous backing, parachains can submit new blocks without waiting for the previous one to be included. This is because parachains can build blocks based on the latest information available to them, even if that information hasn’t been officially included in the relay chain yet. This allows for more efficient use of resources and faster transaction processing.*

2. Agile Coretime Deployment
----------------------------

The introduction of **Agile Coretime** marked a pivotal development, first deployed on Kusama with a Polkadot launch in preparation. This new runtime architecture aims to streamline operations and facilitate smoother transitions and updates within the network.

> ### *What is Agile Coretime?*
> 
> *Agile Coretime is a new resource management system for Polkadot that allows projects to buy access to the network’s processing power for specific periods of time, instead of renting a slot for a long time like in the older system. This makes it cheaper and more efficient for small projects and allows for better overall network utilization.*

3. Polkadot &lt;&gt; Kusama Bridge Activations
----------------------------------------------

April saw the activation of the BEEFY protocol on the [**Polkadot &lt;&gt; Kusama Bridge**](https://dablock.com/news/the-polkadot-kusama-bridge-is-now-live/), enabling the first transactions of DOT and KSM across the bridge. The initial transfers of DOT and KSM across the bridge demonstrate progress in interoperability between the Polkadot and Kusama networks.

### Snowbridge Development Progress

Additionally, the **Snowbridge launch went up for a community vote**, highlighting the ongoing efforts to enhance interconnectivity between different blockchains. [Snowbridge: Sepolia &lt;&gt; Rococo Walkthrough](https://forum.polkadot.network/t/snowbridge-sepolia-rococo-walkthrough/7452).

4. Understand JAM with the latest Talks by Dr. Gavin Wood
---------------------------------------------------------

In a recent keynote at Sub0, Gavin Wood provided an extensive overview of JAM, a cutting-edge project under development at Parity Technologies. Designed as a potential successor to the Polkadot relay chain, JAM introduces several innovative concepts poised to reshape blockchain technology. In this article you can see a **[summary of Gavin Wood’s Keynote at Sub0 2023 presenting JAM](https://dablock.com/tech-talks/jam-overview-of-gavin-woods-keynote-at-sub0/)**, with the links and the full video..

JAM, short for Join Accumulate Machine, is a novel blockchain concept designed to improve and extend the capabilities of Polkadot. The acronym JAM originates from its computational model: Collect, Refine, Join, Accumulate.

5. New 1-Click Deployment Product
---------------------------------

In collaboration with **Zeeve**, Polkadot is developing a 1-click deployment product that leverages **OpenZeppelin templates**. This initiative aims to streamline the deployment process and make it more accessible. [An MVP of using OZ templates with POP and deployed with Zeeve](https://docs.google.com/document/d/1hOI-qGqeWGPIme1roLhTc4kGMxYEQjogapIS7Hj_2So/edit#heading=h.h075dmg1clv1).

6. Paseo Testnet Q1 Achievements
--------------------------------

The **Paseo testnet** has successfully onboarded seven parachains and completed the first quarter payments to the participating teams, marking a successful start to its operations.

7. Ink! will continue to evolve thanks to various ecosystem teams
-----------------------------------------------------------------

The **ink! smart contract language** is set to evolve with contributions from various ecosystem teams including **R0GUE**, **Aleph Zero**, and **Scio Labs**. This collaboration will ensure the continued development and enhancement of the ink! platform. You can learn more about this news and the future of ink! in this [article published on the Parity Technologies blog](https://www.parity.io/blog/ink-new-journey).

8. Developer Hero Community Transition
--------------------------------------

The **Dev Heroes program was sunset**, transitioning to a new format where communication and collaboration will continue through a self-driven community on Discord, fostering an open and inclusive environment for developers.

9. Nomination Pools and OpenGov Overhaul
----------------------------------------

There’s an ongoing **revamp of nomination pools to integrate tokens more effectively into governance processes**. This update is in its final phases and will soon be deployed on the **Westend testnet**.

> ### *What are the Polkadot Nomination Pools?*
> 
> *Polkadot’s nomination pools are a feature in its staking system that allows users to collectively stake their DOT tokens by pooling them together on-chain to nominate validators. This pooling mechanism enhances scalability by enabling even those with as little as **1 DOT to potentially earn staking rewards**. The system currently comprises more than 250 pools with more than 45,000 members, with **no caps on the number of pools or the number of members per pool**. However, rewards are only distributed to active pools that have **sufficient bonded funds to be included in the bags list**, making inclusion and activity essential for earning rewards. You can learn more about [nomination pools on the Polkadot Wiki](https://wiki.polkadot.network/docs/learn-nomination-pools).*

10. Data Initiatives and Reports
--------------------------------

The Polkadot community approved the [**Parity Data team’s proposal**](https://polkadot.polkassembly.io/referenda/552), entrusting them with the **task of managing data analytics and reporting**. This includes contributions to the **Messari Q1 2024 report**, providing a comprehensive overview of the network’s performance and trends.

Incidents derived from the latest upgrades and its solutions.
-------------------------------------------------------------

The month of April has been full of important updates and launches of new features in production, both in Polkadot and Kusama. With all these advances we had some small surprises that were quickly resolved by ecosystem teams like Parity. Below you have links to the postmortem of each event:

1. [Polkadot parachains stalled on 04/21/2024 for around 1 hour](https://forum.polkadot.network/t/2024-04-21-polkadot-parachains-stalled-until-next-session/7526) due to an issue related to the enabling of asynchronous backing. The issues have been identified and fixed.
2. Kusama successfully migrated to Coretime, [but a minor hurdle remained regarding XCM messages](https://forum.polkadot.network/t/kusama-v1-2-0-coretime-migration-xcm-failure-a-postmortem/7536). This event was quickly mitigated with [referendum #380](https://kusama.subsquare.io/referenda/380) and the consequent upgrade of the[ Kusama runtime to version 1.2.2](https://github.com/polkadot-fellows/runtimes/releases/tag/v1.2.2) with the errors resolved.
3. A[ bug affecting collator selection](https://github.com/paritytech/polkadot-sdk/pull/4229) has been patched.

Although the incidents have not had a relevant impact and have been resolved practically immediately after they were generated, the **Parity team highlights that it is trying to improve how they detect, handle and resolve these incidents**.

- - - - - -

Conclusion
----------

These developments not only reflect Polkadot’s robust technical foundation but also highlight its community’s commitment to fostering an **innovative and scalable ecosystem**. As these technologies mature, they promise to enhance the capabilities and interoperability of the Polkadot and Kusama networks, paving the way for a more interconnected and efficient blockchain environment.

That’s all for this month’s update! Polkadot continues to make **significant progress on its core tech and bridges**, along with **ongoing security measures**. Stay tuned for the May update!

Before finishing this post, remember that tickets are now available to attend the[ **2024 edition of Polkadot Decoded** ](https://dablock.com/news/polkadot-decoded-2024-tickets/)on July 11 in Brussels!

If you want to know more about the **latest developments in Polkadot technology**, you can read the **[full report on the network’s official forum](https://forum.polkadot.network/t/paritytech-update-for-april-2024/7646)**.

- - - - - -