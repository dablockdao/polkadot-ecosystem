---
title: 'Security and Bugfinding in Ink! Smart Contracts'
description: 'Ariel Waissbein from CoinFabrik recently delivered an insightful talk focusing on bugfinding in Ink! smart contracts'
sidebar:
    label: Ariel Waissbein (CoinFabrik)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

In blockchain technology, security remains a paramount concern. Ariel Waissbein from CoinFabrik recently delivered an insightful talk at Sub0 2024 Bangkok, focusing on bugfinding in Ink! smart contracts. This article delves into the core aspects of his presentation, highlighting the importance of security, the development of a bug detection tool called Scout, and the methodologies employed to ensure robust smart contract security.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://docs.google.com/presentation/d/e/2PACX-1vR4MraUMYyzFhlfK3Ic6ECgPduCysqU8Hp9AaGrA6ZoNii5mVPT93_m2S4_GcpGywj_sIunRKGyaj_P/embed?start=false&loop=false&delayms=60000" width="700"><span class="mce_SELRES_start" data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;">﻿</span></iframe>

The Importance of Security in Blockchain
----------------------------------------

Blockchain and DeFi ecosystems have witnessed numerous attacks, leading to significant financial losses. According to Defi Llama, **millions of dollars are stolen each year due to vulnerabilities in smart contracts**. Therefore, enhancing security to lower the risk of attacks is crucial. Waissbein emphasized that while complete hacker-proof security is unattainable, making your platform more secure than others can deter potential attackers.

Developing a Security Framework
-------------------------------

A robust security framework involves several in-house measures:

- **In-House Training:** Regular training sessions for developers to stay updated on security practices.
- **Attack Intelligence:** Understanding potential threats specific to your platform.
- **Secure Software Development Lifecycle (SDLC):** Integrating security at every stage of development.
- **External Audits:** Employing external auditors to identify and mitigate vulnerabilities.

Introducing Scout: A Ink! Smart Contracts Bug Detection Tool
------------------------------------------------------------

To facilitate in-house security measures, Waissbein introduced **Scout, a tool designed for detecting bugs in Ink! smart contracts**. Scout aims to eliminate low-hanging fruits, adhere to best practices, and identify common threats. The tool integrates with VS Code and GitHub Actions, making it accessible and easy to use within CI/CD pipelines.

### How Scout Works

Scout leverages static analysis provided by the Rust compiler to detect vulnerabilities. The tool performs several functions:

- **Static Analysis:** Utilizing representations from the Rust compiler (HIR, MIR, and AST) to identify potential security issues.
- **Detectors:** Specific pieces of code that analyze the smart contract for vulnerabilities.
- **Output Formats:** Provides results in various formats such as HTML, PDF, and JSON for easy interpretation.

Key Vulnerabilities and Detection Techniques
--------------------------------------------

Waissbein discussed several common vulnerabilities and the techniques used to detect them:

- **Unauthorized Storage Access:** Detects if `set_contract_storage` is called without proper authorization checks.
- **Integer Overflow/Underflow:** Identifies cases where integers might overflow or underflow.
- **Zero or Test Address Usage:** Ensures that contracts do not inadvertently use known zero or test addresses.

### Practical Example: Unauthorized Storage Access

Waissbein provided a practical example to illustrate how Scout detects unauthorized storage access. The tool checks for calls to `set_contract_storage` and verifies if they are protected by proper conditionals. If not, it raises an alarm, flagging the potential vulnerability.

### Community Contributions and Future Development

Scout is open for community contributions. Developers can add new detectors or test cases to enhance the tool’s capabilities. Waissbein encouraged the community to participate actively, highlighting the importance of collaborative efforts in improving smart contract security.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/5I5Vuog2RXg?si=ulCFCzoQRQMin7DV" title="YouTube video player" width="560"></iframe>

### Conclusion

Ariel Waissbein’s presentation underscored the critical role of security in the blockchain space and introduced Scout as a valuable tool for developers. By integrating such tools and following best practices, the blockchain community can significantly reduce vulnerabilities, making the ecosystem safer for all participants.