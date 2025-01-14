---
title: 'How to Claim OpenGov Deposits on Polkadot and Kusama'
description: 'Learn how to claim OpenGov deposits and unnote preimages on the Kusama network with this step-by-step technical guide.'
---
In blockchain, understanding the intricacies of governance mechanisms is crucial. This article delves into the process of claiming OpenGov deposits on the Kusama network, providing a step-by-step guide for users. Kusama, known for its rapid development and innovative features, offers a unique governance model that includes the ability to submit, vote on, and manage referenda. This guide focuses on claiming decision deposits and submission deposits, as well as unnoting preimages for referenda.

## Understanding Polkadot OpenGov Deposits
In Kusama’s governance system, deposits play a pivotal role in ensuring the seriousness and legitimacy of proposals. There are two primary types of deposits:

1. **Submission Deposit**: Required when submitting a referendum. This deposit is designed to discourage spam and low-quality proposals.
2. **Decision Deposit**: A deposit made to activate a referendum for voting.

## Claiming a Polkadot Submission Deposit
A submission deposit can be reclaimed if the referendum has been approved or canceled. If the referendum is rejected, the deposit is forfeited to prevent spammy submissions. Here’s how to claim a submission deposit:
1. **Navigate to Governance Section**: On the Kusama network, go to the “Governance” tab and select “Referenda.”
2. **Identify the Referendum**: Locate the referendum for which you want to claim the deposit. Ensure that it meets the criteria (approved or canceled).
3. **Use Developer Tools**: 
  - Go to “*Developer*” and then “*Extrinsics*“.
  - Select your account.
  - Choose the “Referenda” pallet.
  - Select the function “*refund\_submission\_deposit*“.
4. **Enter the Referendum Index**: Provide the specific index number of the referendum.
5. **Submit and Sign**: Confirm the transaction and sign it with your account. If the referendum is eligible, the deposit will be returned to your account balance.

## Claiming a Polkadot Decision Deposit
Claiming a decision deposit is permissionless, meaning anyone can perform this action on behalf of the deposit holder. This process is typically straightforward:

1. **Go to Governance Referenda**: Under the “Governance” tab, select “Referenda.”
2. **Locate Active Referenda**: Identify the active referenda you want to interact with.
3. **Claim the Deposit**: Look for the option to claim the decision deposit if it is available. This option should appear if the referendum has ended.
4. **Execute the Claim**: Confirm the action to reclaim the deposit.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/kkEq5cqW2Pk?si=mTpr_jvBAvs5aIJf" title="YouTube video player" width="560"></iframe>

## Unnoting a Preimage
Preimages in Kusama are detailed proposals that are hashed and submitted as part of a referendum. If a referendum is rejected, users can unnote the preimage to reclaim their deposit:

1. **Access Governance Preimages**: Go to the “*Governance*” tab and select “*Preimages*“.
2. **Identify the Preimage**: Find the preimage associated with your account and the specific referendum.
3. **Unnote the Preimage**: 
  - Select the preimage you want to unnote.
  - Click “*Unnote*“.
  - Sign and submit the transaction.
4. **Confirmation**: Once the transaction is confirmed, the deposit will be released back to your account balance.

### Conclusion
Navigating the Kusama governance model requires a thorough understanding of its processes and mechanisms. Claiming deposits, whether submission or decision, and unnoting preimages are essential actions for users engaged in the governance of the network. By following the steps outlined in this guide, users can efficiently manage their deposits and participate more effectively in Kusama’s decentralized governance.

This technical guide aims to empower users with the knowledge needed to interact with Kusama’s governance system, ensuring a smoother and more informed participation in the network’s decision-making processes.