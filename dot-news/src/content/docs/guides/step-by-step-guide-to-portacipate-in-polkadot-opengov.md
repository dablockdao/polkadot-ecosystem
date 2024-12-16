---
title: 'Step-by-Step Guide to Portacipate in Polkadot OpenGov'
description: 'Learn how to participate in Polkadot OpenGov with this step-by-step guide, covering proposals, voting, and delegations.'
---
Polkadot, one of the most innovative blockchain ecosystems, has always prioritized decentralization and community governance. The evolution from its initial governance model (Governance V1) to the more advanced **Polkadot OpenGov marks a significant leap towards a truly decentralized**, flexible, and community-driven decision-making process. This article offers a detailed guide on how to participate in Polkadot OpenGov, breaking down the process into understandable steps, ensuring that both newcomers and experienced token holders can effectively engage with the governance system.

Understanding Polkadot OpenGov
------------------------------

Before diving into the practical aspects of participating, it is crucial to understand what Polkadot OpenGov is and how it differs from the previous governance model. Polkadot OpenGov is a refined governance mechanism designed to decentralize decision-making further, allowing all token holders to have a more direct impact on the network’s future.

Key features of Polkadot OpenGov include:

- **Direct Democracy:** Unlike Governance V1, which involved a Council and Technical Committee, **OpenGov eliminates these bodies**, placing all decision-making power in the hands of the public (i.e., **token holders**).
- **Multiple Voting Tracks:** OpenGov introduces a system where [**proposals are categorized and processed through different tracks**](https://dablock.com/guides/understanding-polkadot-opengov-tracks-guide/), each with its own parameters, including the length of the voting period and the number of simultaneous referenda.
- **Multi-Role Delegations:** Token holders can delegate their voting power on specific tracks to different entities, allowing for more nuanced and informed voting decisions.
- **Approval and Support Curves:** These curves determine whether a proposal is approved based on both the proportion of ‘aye’ votes and the overall support from the community.

Step 1: Preparing Your Wallet
-----------------------------

To participate in Polkadot OpenGov, you first need a wallet that holds **DOT** (Polkadot’s native token). If you don’t already have a wallet, here’s how to set one up:

1. **Choose a Wallet:** Several wallets support Polkadot, including the Polkadot.js browser extension, Talisman, and Nova Wallet. For this guide, we’ll use Polkadot.js, but the process is similar across different wallets.
2. **Install and Configure the Wallet:**
  - Visit the <a rel="noreferrer noopener" target="_new">Polkadot.js</a> website and install the extension for your browser.
  - Once installed, create a new account. Ensure that you securely back up your mnemonic phrase, as this is the only way to recover your account if you lose access.
  - After setting up the wallet, transfer DOT to your wallet from an exchange or another wallet.

Step 2: Understanding Polkadot Governance Roles
-----------------------------------------------

Polkadot OpenGov operates with specific roles that each participant can take on. These include:

- **Proposers:** Anyone can propose a referendum. To do this, you need to **create a proposal and submit it through one of the governance tracks**.
- **Voters:** Token holders who cast votes on referenda. Voting power can be enhanced by using the **conviction voting mechanism**, where tokens are locked for a specific period to increase voting influence.
- **Delegators:** Token holders who **delegate their voting power to other accounts**. This can be particularly useful if you want to participate in governance but prefer experts to make informed decisions on your behalf.

Step 3: Participating in Polkadot DAO Decision Making
-----------------------------------------------------

Polkadot OpenGov allows any token holder to propose a referendum. However, participation doesn’t end with submitting a proposal. As a participant, you can also vote on referenda proposed by others. Here’s how to engage in both activities:

### Proposing a Polkadot Referendum

1. **Navigate to the Governance Interface:**
  - Access the governance section via the [***Polkadot.js app***](https://dablock.com/dapps/polkadotjs/) or directly through some of the current Polkadot ecosystem governance forums like [***Polkassembly***](https://dablock.com/dapps/polkassembly/) or [**Subsquare**](https://dablock.com/dapps/subsquare/).
2. **Create a Proposal:**
  - Click on the “Submit preimage” option to propose a referendum.
  - Fill out the required fields, including the type of proposal (e.g., a treasury proposal, a runtime upgrade), and upload the preimage file that describes your proposal.
  - Set the deposit amount, which will be locked until the proposal is either approved or rejected.
3. **Choose the Appropriate Track:**
  - Select a track that corresponds to the nature of your proposal. Tracks include options like Small Tipper, Medium Spender, and Root, each with its own parameters regarding decision periods, deposit requirements, and voting timelines.
  - Once submitted, your proposal enters the Lead-in Period, where it will remain until it fulfills the necessary criteria for voting.

### Voting on a Polkadot OpenGov Referendum

1. **Find a Referendum to Vote On:**
  - In the Polkadot.js app, navigate to the “Referenda” tab to view active referenda. Each referendum will be listed with details about the proposal, the track it is on, and the current status.
2. **Cast Your Vote:**
  - Click on the referendum you want to vote on, and select either “Aye,” “Nay,” or “Abstain.” If you wish to enhance your vote’s impact, you can lock your tokens for a specified period using conviction voting.
  - Review the potential lock period for your tokens based on your chosen conviction multiplier.
  - Confirm your vote. Remember, the vote is not final until you submit the transaction on-chain, which will incur a small fee.
3. **Delegate Voting Power (Optional):**
  - If you prefer not to vote on every proposal yourself, you can delegate your voting power to another account. Delegation can be done for all tracks or on a per-track basis.
  - In the governance section, select “Delegate,” choose the track, and input the delegate’s address.
  - Confirm the delegation. Your chosen delegate will now vote on your behalf in that specific track.

Step 4: Monitoring and Managing Your Participation
--------------------------------------------------

Polkadot OpenGov is dynamic, with multiple referenda happening simultaneously across different tracks. To stay informed and manage your participation effectively, consider the following tools:

- **OG Tracker:** [OG Tracker](https://dablock.com/ecosystem/og-tracker/) is a dedicated tool that helps you monitor ongoing referenda, track your voting history, and analyze governance activity across the network.
- **OpenGov.watch:** [OpenGov.watch](https://dablock.com/ecosystem/opengov-watch/) provides real-time updates and insights on governance proposals, making it easier for token holders to stay informed about important decisions and upcoming votes.

Step 5: Understanding and Using Approval and Support Curves
-----------------------------------------------------------

Polkadot OpenGov uses approval and support curves to determine whether a referendum passes. These curves are crucial for understanding the outcome of your votes.

- **Approval Curve:** This curve represents the minimum percentage of ‘aye’ votes needed, considering the conviction weight. The curve starts at 100% and gradually decreases to 50%, but it never goes below 50%.
- **Support Curve:** This curve measures the total number of aye and abstain votes as a percentage of the total active issuance. The support curve ensures that a sufficient portion of the community backs the proposal.

As a voter, understanding these curves helps you anticipate whether a referendum is likely to pass and informs your decision on whether to participate in the vote.

Step 6: Handling Locks and Conviction Voting
--------------------------------------------

One of the unique features of Polkadot OpenGov is the concept of conviction voting, which allows you to lock your tokens for a period in exchange for increased voting power. Here’s how to manage this aspect:

- **Conviction Voting:** When casting your vote, you can choose a lock period ranging from 0 to 32 weeks. The longer the lock period, the more your vote will count. This is calculated using the formula: <div class="overflow-y-auto p-4" dir="ltr">`votes = tokens * conviction_multiplier<br></br>`</div>For example, locking your tokens for 32 weeks gives a multiplier of 6, effectively multiplying your vote’s power by six.
- **Managing Locks:** After a referendum ends, if you voted with conviction and your vote was on the winning side, your tokens will be locked for the duration you selected. If you were on the losing side or voted without conviction, you can unlock your tokens immediately.

Step 7: Canceling, Killing, and Blacklisting Referenda
------------------------------------------------------

Polkadot OpenGov includes mechanisms to cancel or kill referenda that are deemed harmful or incorrect:

- **Referendum Canceller:** This mechanism can cancel an ongoing referendum, refunding the submission and decision deposits to their originators. It is used when there is an error or when the proposal is no longer relevant.
- **Referendum Killer:** This more drastic option is used to immediately kill a referendum that is malicious or poses a risk to the network. The decision deposit is forfeited, and the proposal is removed from the voting queue.

- - - - - -

### Conclusion

Polkadot OpenGov represents a significant step forward in decentralized governance. By following the steps outlined in this guide, you can actively participate in shaping the future of the Polkadot network. Whether you are submitting proposals, voting on referenda, or delegating your voting power, your involvement is crucial to ensuring the network remains secure, innovative, and community-driven.

For more information and to stay updated on governance activities, regularly visit [OG Tracker](https://dablock.com/ecosystem/og-tracker/) and [OpenGov.watch](https://dablock.com/ecosystem/opengov-watch/).

- You can also visit the [official Polkadot wiki page covering the OpenGov topic](https://wiki.polkadot.network/docs/learn-polkadot-opengov).

- - - - - -