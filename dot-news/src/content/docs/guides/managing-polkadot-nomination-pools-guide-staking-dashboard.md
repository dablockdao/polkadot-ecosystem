---
title: 'Managing Polkadot Nomination Pools Guide'
description: 'Manage staking on Polkadot with the dashboard: create, join, and manage nomination pools efficiently. Comprehensive guide included.'
---
Polkadot offers users a comprehensive staking dashboard to manage their staking activities efficiently. This guide provides an in-depth exploration of the functionalities available on the Polkadot staking dashboard, particularly focusing on creating and managing nomination pools, a critical feature for both pool administrators and members.

Overview of the Polkadot Staking Dashboard
------------------------------------------

The[ **Polkadot staking dashboard**](https://dablock.com/dapps/polkadot-staking-dashboard/) serves as a user-friendly interface for staking operations within the Polkadot ecosystem. Users can access various features, including account management, nomination pools, and detailed staking information. While this guide uses the Westend testnet for demonstration, the procedures are identical for Kusama and Polkadot networks.

### Getting Started: Connecting an Account

To utilize the dashboard, users must first connect their accounts. The dashboard supports the Polkadot browser extension for seamless integration. Upon logging in with an account, users can access the dashboard sections relevant to their roles, such as nominators or pool administrators.

Creating a Polkadot Nomination Pool
-----------------------------------

1. **Navigating to the Pools Section**: Users can switch to the pools section to start the pool creation process.
2. **Initiating Pool Creation**: By clicking on the ‘Create’ button, users are guided through a step-by-step process. This includes specifying the pool name, selecting validators, and defining pool roles.
3. **Validator Selection**: The dashboard offers multiple validator selection options: 
  - Optimal Selection: Includes a mix of active and inactive validators.
  - Active Validators: Focuses on validators with low commissions.
  - Favorites: Allows selection from a pre-defined list of favorite validators.
  - Manual Selection: Enables manual selection of specific validators.
4. **Assigning Pool Roles**: Users can assign roles such as depositor, root, nominator, and bouncer. These roles can be managed later, ensuring flexible pool administration.
5. **Bonding Funds**: A minimum of one token is required to create a pool. Users can bond their tokens, ensuring they meet the necessary requirements.
6. **Finalizing Creation**: A summary displays all entered details, and users can confirm the creation by signing the transaction through the browser extension.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/aTFWhwy_Mxg?si=gQgBnf4TpJ2z_sWd" title="YouTube video player" width="560"></iframe>

Managing a Polkadot Nomination Pool
-----------------------------------

Once a pool is created, administrators can manage various aspects through the dashboard:

1. **Claim Permissions**: Administrators can update claim permissions, allowing other users to compound or withdraw rewards on their behalf. Options include: 
  - Allowing only compounding.
  - Allowing only withdrawing rewards.
  - Allowing both actions.
2. **Commission Management**: The dashboard enables administrators to set and manage pool commissions. This includes: 
  - Setting the commission rate (up to 10% on Kusama and Polkadot, and 100% on Westend).
  - Defining a maximum commission to safeguard pool members’ interests.
  - Establishing a change rate and minimum delay between updates to ensure fair and predictable commission adjustments.

Pool Member Management
----------------------

Pool members can join pools and manage their staking within those pools:

1. **Joining a Pool**: Members can search and join pools by bonding their tokens. They can also enable permissionless claiming during the joining process.
2. **Claiming Rewards**: Members with permissionless claiming enabled can allow other users to compound or withdraw rewards on their behalf using external tools like polk.js apps.

Destroying a Pool
-----------------

Pool administrators have the option to destroy a pool when necessary:

1. **Initiating Destruction**: Administrators can set the pool to a destroying state. This action is irreversible and requires careful consideration.
2. **Unbonding Funds**: Administrators must unbond and withdraw funds for all members. This includes managing unbonding periods and ensuring all tokens are unlocked.
3. **Finalizing Destruction**: Once all funds are unbonded and withdrawn, the pool is officially destroyed, and its status is updated on the dashboard.

#### Conclusion

The [**Polkadot staking dashboard** ](https://dablock.com/dapps/polkadot-staking-dashboard/)provides a robust platform for managing staking activities, particularly through its nomination pools feature. By offering detailed control over pool creation, management, and destruction, the dashboard ensures both administrators and members can participate effectively in the Polkadot ecosystem. This guide highlights the critical steps and features, enabling users to leverage the full potential of Polkadot’s staking capabilities.