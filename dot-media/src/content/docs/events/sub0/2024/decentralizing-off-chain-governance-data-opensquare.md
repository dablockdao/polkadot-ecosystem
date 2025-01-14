---
title: 'Yongfeng - Decentralizing Off-Chain Governance Data'
description: 'Yongfeng Li from OpenSquare discusses decentralizing off-chain governance data with SmartSpec for enhanced blockchain transparency.'
sidebar:
    label: Yongfeng (OpenSquare)
---

In an enlightening session at Sub0 Asia 2024, **Yongfeng Li from OpenSquare** discussed the imperative need and methodology for **decentralizing off-chain governance data**. His presentation offered a deep dive into the workings and future directions of OpenSquare’s products, especially focusing on their innovative approach to governance in the Web3 ecosystem.

## OpenSquare’s Vision and Product Suite
OpenSquare aims to create a comprehensive collaboration platform for the Web3 world, akin to LinkedIn but tailored for blockchain environments. Currently, they are emphasizing infrastructure products, with **SubsSquare** being the most prominent among them. SubsSquare has gained significant traction, being trusted by numerous users and projects.

## The Governance Process and Current Challenges
Yongfeng outlined the typical governance process, which involves two main activities:

1. **Proposal Submission and Voting**: Users submit proposals and vote on them. Successful proposals are then executed.
2. **Discussion**: Users engage in discussions about the proposals.

The core issue is that while voting and execution data are visible and verifiable, the discussion data is stored in centralized databases (e.g., Po Assembly and SubsSquare). This centralization poses several problems, including unverifiability and lack of auditability.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vQkJQFu_zMykdHTHcJjY08qRCrMy7E7-IT_zVNB4Oz9n7jtd9JhHjwnk_GFf1y3b6M_Inl2IKJMUGDn/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

## Introducing Smart Specification (SmartSpec)
To address these issues, OpenSquare has introduced SmartSpec, a set of user actions and data standards designed to decentralize user collaboration data on Substrate-based chains. This specification ensures that governance data is not only decentralized but also auditable and verifiable.

### How SmartSpec Works
**Workflow Overview**:
1. **Data Submission**: Users submit data to SubsSquare or Po Assembly.
2. **Data Upload to IPFS**: The data is then uploaded to IPFS (InterPlanetary File System).
3. **Blockchain Integration**: Finally, the data’s CID (Content Identifier) is submitted to the blockchain.

This process ensures that governance data is stored in a decentralized manner, making it inherently more secure and transparent.

### Proposal and Discussion Posts
Yongfeng explained the two main types of posts in the governance process:
1. **Proposal Posts**: These include various types of proposals such as open governance, democracy proposals, and treasury proposals. Each proposal post is tracked by an indexer and includes a title, content, and content format.
2. **Discussion Posts**: Users can create discussion posts with unique CIDs. Discussions can be started, commented on, and upvoted or downvoted, with each action recorded on the blockchain.

### User Actions and Data Format
Each user action, whether it is submitting a proposal or commenting, is defined by an action object entity, which includes an ID, context, and associated metadata. This standardization allows for a seamless and consistent data structure across the platform.

### Third-Party Data Recovery
Third-party applications can recover decentralized data by indexing the blockchain and fetching data from IPFS. This process involves some trade-offs, especially in handling large volumes of comments and ensuring efficient gas usage for blockchain transactions.

### Addressing User Customization and Announcements
Currently, user customization data and delegation announcements are centralized, limiting interoperability across platforms. SmartSpec aims to decentralize these elements, allowing for personalized settings and announcements to be stored and managed on the blockchain.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/stu9PIwLkX0?si=PLynGaBk5nybfrdb" title="YouTube video player" width="560"></iframe>

#### Conclusion
Yongfeng Li concluded by reiterating the importance of decentralizing off-chain governance data. By leveraging SmartSpec, OpenSquare is paving the way for a more transparent, secure, and collaborative Web3 environment. This initiative not only enhances the efficiency of governance processes but also aligns with the core principles of decentralization and user sovereignty in the blockchain space.