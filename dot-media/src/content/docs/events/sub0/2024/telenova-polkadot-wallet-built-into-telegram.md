---
title: 'Telenova Polkadot Wallet Built into Telegram'
description: 'Discover Telenova: a user-friendly Polkadot wallet in Telegram, simplifying Web3 onboarding and token management.'
sidebar:
    label: Leemo (Telenova)
---

Telenova is an innovative Polkadot wallet seamlessly integrated into Telegram, introduced by Leemo from **Nova Technologies**. This tech talk, presented at **Sub0 Asia 2024**, delves into the intricacies of building substrate apps on Telegram, the rationale behind choosing this platform, and the features and benefits of Telenova. Here, we expand on the key points from Leemo’s presentation and incorporate insights from the presentation slides.

## Introduction to Substrate Apps on Telegram
**Leemo** began by explaining the architecture of Telegram apps, highlighting that they function as web apps within Telegram itself. These apps utilize the standard JavaScript stack for frontend development and any standard backend stack for bot development. **Nova Technologies** leveraged these tools to create **Telenova**, although they encountered some limitations, such as differing behaviors across devices and the need to navigate both Telegram and Substrate SDKs’ restrictions.

### Why Telegram?
Telegram boasts over 800 million monthly active users, with significant overlap between its user base and the Web3 community. The platform’s widespread adoption and existing integration of a wallet make it an ideal environment for deploying Web3 applications. Telegram’s existing ecosystem includes numerous Web3 communities, and its users are already familiar with using apps within the platform. This familiarity reduces the friction typically associated with onboarding new users to Web3 applications.

<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/EgZxG07ZnlMmve?hostedIn=slideshare&page=upload" width="476"></iframe>

## Introducing Telenova Wallet
**Telenova** is a Polkadot wallet embedded within Telegram, designed with user-friendly features that mimic familiar Web2 onboarding processes. Key features include:
1. **Web2-like Onboarding**: Simplified onboarding without the hassle of seed phrases, making it accessible for users unfamiliar with Web3.
2. **Encrypted Cloud Backups**: Facilitates easy account recovery when switching devices.
3. **Send Tokens to Any Telegram User**: Allows sending tokens to any Telegram user by simply entering their username, even if they don’t have a pre-existing wallet.
4. **Token Management**: Users can manage **Polkadot (DOT) and Kusama (KSM) tokens**, with plans to support more tokens in the future.
5. **Price Monitoring and Trading**: Enables users to monitor token prices and soon, buy and sell tokens through integrated on and off-ramp partners.
6. **Account Migration**: Easy migration from Telenova to the Nova wallet for advanced features like staking, swaps, and governance.

### Telenova’s Ecosystem and Demo
Telenova is part of a broader ecosystem designed to cater to users at different stages of their Web3 journey:
1. **Telenova**: Ideal for beginners with an easy onboarding flow.
2. **Nova Wallet**: Offers more features for users wanting to delve deeper into the Polkadot ecosystem.
3. **Nova Spektr**: Provides advanced functionalities like multisig operations and pure proxy support for experienced users.
During the demo, Leemo demonstrated the seamless process of **sending DOT tokens via Telegram**, showcasing the **app’s user-friendly interface** and efficient transaction flow. The demo illustrated how users could easily onboard, create a wallet, and manage their tokens, emphasizing Telenova’s simplicity and effectiveness.

### TeleNova Q&amp;A Session Highlights
- **Account Migration**: Users can migrate their accounts from Telenova to Nova Wallet through the settings menu by revealing their passphrase and importing it into Nova Wallet.
- **User Guidance on Fund Storage**: The app prompts users to migrate to Nova Wallet for enhanced security and features.
- **Technical Implementation**: Instead of using the gift pallet, which is only available on Kusama, Telenova generates a new passphrase, sends funds to it, and provides the passphrase in a link, ensuring compatibility with both Polkadot and Kusama.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/PI-rDTr8SC4?si=_WJxXpRAv_1VS2fR" title="YouTube video player" width="560"></iframe>

### Conclusion
Telenova represents a significant advancement in making Polkadot more accessible to everyday users through the familiar environment of Telegram. By simplifying the onboarding process and integrating essential wallet functionalities, Telenova aims to bridge the gap between Web2 and Web3, fostering greater adoption and utility of blockchain technology.

**Leemo** concluded the talk with a call to action, inviting the community to try **Telenova**, provide feedback, and explore potential collaborations. This tech talk not only highlighted the innovative features of Telenova but also underscored the potential of Telegram as a platform for driving Web3 adoption.