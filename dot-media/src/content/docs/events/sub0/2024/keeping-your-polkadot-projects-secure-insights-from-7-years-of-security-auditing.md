---
title: 'Keeping Polkadot Projects Secure w/ Philip Stanislaus'
description: 'Insights from Oak Security on maintaining Polkadot project security through thorough auditing practices and lessons from seven years of experience.'
sidebar:
    label: Philip Stanislaus (Oak Security)
---

In a recent talk, Christian Vari and Philip Stanislaus from Oak Security shared their extensive experience and valuable insights into the security auditing of Polkadot projects. With over seven years of experience in security auditing, they highlighted the best practices and common pitfalls in maintaining the security of blockchain projects. Here are the key takeaways from their presentation.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://docs.google.com/presentation/d/e/2PACX-1vQD7K1jvl3WDkc4CcJbjvpvcst9Xk5SClqowcesmMKlHHIy93CmdYbN8R9pUR3GgQ2SkKQ6BYghV5OI/embed?start=false&loop=false&delayms=60000" width="700"><span class="mce_SELRES_start" data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;">﻿</span></iframe>

## Oak Security Audit Methodology
Oak Security employs a distinctive audit process designed to ensure thorough and independent reviews. Each project undergoes a rigorous audit where every line of code within the scope is meticulously examined. This process includes:
1. **Independent Auditor Reviews**: Auditors work independently to avoid bias and ensure a competitive environment, which enhances the thoroughness of the audit.
2. **Use of Specialized Tools**: Auditors utilize a variety of tools for verification, including economic modeling of the protocol.
3. **Experience-Based Auditor Assignment**: Auditors are assigned based on their expertise and the specific needs of the project.

### Lessons Learned from Security Audits
1. **Comprehensive Security Mindset**: The best teams embed security throughout their development lifecycle. They understand they are building financial software and hence, get the right domain experts involved.
2. **Simplicity and Best Practices**: These teams keep their solutions simple, well-documented, and rigorously tested. Innovation is approached incrementally, avoiding untested large-scale changes.
3. **Limitations of Audits**: Even the best audits may miss vulnerabilities. The Swiss Cheese Model is recommended, where multiple layers of security (like audits, internal reviews, and bug bounties) are stacked to minimize risks.
4. **Audit Timing and Scope**: Audits are typically performed on snapshots of the code, which may not cover all subsequent changes. Oak Security has adopted a credit model for ongoing audits to address this issue.
5. **Logical Flaws as Common Issues**: A significant portion of security issues are logical flaws in business logic, which are independent of the technology stack used. These require careful review beyond standard checklists.

## Audit Tools and Services
Oak Security offers a range of services to support projects at different stages of development:
- **Economic Consulting**: With economists on the team, Oak Security provides valuable insights into the economic models of blockchain projects.
- **Threat Modeling**: Identifying potential threats and vulnerabilities, and developing strategies to mitigate them.
- **Partnerships for Comprehensive Security**: Collaborations with other specialists to provide services like bug bounties, monitoring, and alerting.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/MjhXQbdXyyM?si=0RWFLvljDEkP5ugh" title="YouTube video player" width="560"></iframe>

### Real-World Examples
During the talk, specific issues identified in past audits, such as those for Snowbridge and Bifrost, were discussed. These examples highlighted common problems like improper handling of partial states and static calculation of weights, emphasizing the need for dynamic and context-aware solutions.

#### Conclusion
Security in blockchain projects, particularly those on Polkadot, requires a comprehensive, continuous, and multi-layered approach. By following best practices and leveraging specialized audit services like those from Oak Security, projects can significantly enhance their security posture and resilience against potential threats.