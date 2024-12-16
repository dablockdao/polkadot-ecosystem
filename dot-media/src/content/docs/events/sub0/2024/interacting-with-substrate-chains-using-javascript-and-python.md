---
title: 'Interacting with Substrate Chains w/ JavaScript and Python'
description: 'Learn how to interact with substrate chains using JavaScript and Python, as explained by Michalis Fragkiadakis at Sub0 Asia 2024.'
sidebar:
    label: Michalis Frakiadakis (Web3 Foundation)
---

At the recent Sub0 Asia 2024 event, **Michalis Fragkiadakis from the [Web3 Foundation](https://dablock.com/ecosystem/web3-foundation/) delivered an insightful talk on interacting with substrate chains using JavaScript and Python**. This session provided valuable information on leveraging these programming languages to automate and simplify tasks for both developers and non-developers. Here’s a detailed look at the key points from his talk.  
<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/94lRnDFcqyJnFS?hostedIn=slideshare&page=upload" width="700"><span class="mce_SELRES_start" data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;">﻿</span></iframe>  
Michalis Fragkiadakis, the Support and Anti-Scam Lead at the Web3 Foundation, emphasized that the tools and scripts he discussed are designed for non-developers. This approach ensures that anyone can efficiently handle tasks that would otherwise be tedious and time-consuming.

Python Library: PySubstrate Interface
-------------------------------------

The first part of the talk focused on the Python library called **PySubstrate Interface**, developed by Polkascan and funded by the Polkadot Treasury. This library allows users to **interact with substrate chains using Python**, making it accessible for those who are more comfortable with Python than JavaScript.

### **PySubstrate Key Features:**

- **Automation of Tasks:** Michalis demonstrated how a script could automate sending Bill coins to multiple addresses. The script processes a list of destination addresses, the amount to be sent, and the sender’s seed phrase to execute transactions efficiently.
- **Practical Example:** The example script highlighted how to create a substrate object, read destination addresses from a file, and execute batch transactions. This method significantly reduces the manual effort required for multiple transactions.

JavaScript Library: Polkadot.js
-------------------------------

The second part of the talk moved to the JavaScript library,**[ Polkadot.js](https://dablock.com/dapps/polkadotjs/), developed and maintained by [Parity Technologies](https://dablock.com/ecosystem/parity-technologies/)**. Polkadot.js offers a suite of tools including apps, APIs, and extensions, but Michalis focused on using the API to build scripts.

### **Polkadot.js Key Features:**

- **Sorting Accounts for Nominated Proof of Stake (NPoS):** Michalis explained a script that sorts accounts in the last bag for the NPoS election. This script ensures that accounts with higher stakes are prioritized, which is crucial for fair and efficient staking rewards distribution.
- **Integrated JavaScript Tool:** Polkadot.js apps include a built-in JavaScript tool that allows users to write and test scripts directly within the platform.

**Detailed Workflow:**

1. **Initialization:** Creating API and WebSocket provider instances.
2. **Account Sorting:** Iterating through bags and sorting accounts based on their stake.
3. **Rebagging Accounts:** Adjusting accounts within the appropriate bags and ensuring accurate sorting.
4. **Executing Batch Calls:** Using batch calls to update account positions efficiently.

### Polkadot Python Practical Insights and Benefits

The scripts and libraries discussed are designed to simplify complex processes:

- **Ease of Use:** Both the Python and JavaScript libraries are user-friendly, even for those with minimal development experience.
- **Efficiency:** Automating repetitive tasks saves time and reduces the likelihood of errors.
- **Improved User Experience:** By sorting accounts accurately and automating transactions, users enjoy a smoother experience with fewer manual interventions.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/lfzOt3AEMAs?si=0qlySUs7CGFi3Z0V" title="YouTube video player" width="560"></iframe>

#### Conclusion

Michalis Fragkiadakis’ talk at Sub0 Asia 2024 provided practical insights into using JavaScript and Python for interacting with substrate chains. These tools and scripts are invaluable for both developers and non-developers, enabling efficient management of blockchain interactions and enhancing overall productivity.

For further details and access to the scripts, the audience was encouraged to refer to the detailed documentation available on the respective GitHub repositories. This talk not only highlighted the technical aspects but also emphasized the importance of making blockchain technology accessible to a broader audience.