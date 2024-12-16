---
title: 'Common Security Risks in Polkadot and Substrate'
description: 'Discover the top security risks in Polkadot and Substrate from Sub0 Asia 2024, along with key strategies to enhance blockchain security.'
sidebar:
  label: Serhan Bahar (Parity)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

At the Sub0 Asia 2024 conference, **Serhan Bahar** and **Giovanny Gongora** from Parity shared vital insights into the **top security risks facing the Polkadot and Substrate ecosystems**. Their talk, based on years of engagement with third-party auditors and internal security processes, aimed to educate developers on common vulnerabilities and provide strategies for mitigating these risks.

Why Security is Crucial in Blockchain Development
-------------------------------------------------

Security in blockchain development is not just a technical concern but a critical business issue. For startups and established companies alike, managing residual risk is paramount. Founders and CEOs need to know if their systems are secure and understand how to manage these risks effectively.

<iframe allowfullscreen="true" frameborder="0" height="569" mozallowfullscreen="true" src="https://docs.google.com/presentation/d/e/2PACX-1vTaP7eC1fmtymQbJI43F2KxWgY-Cx0Yy4MRsXRVTZC_5W3Tv3_NKsXtUgS-T55Quh_sTtsyJcyms0Xo/embed?start=false&loop=false&delayms=60000" webkitallowfullscreen="true" width="960"></iframe>

Common Security Risks in Polkadot and Substrate
-----------------------------------------------

1. **Insecure Randomness**
  - **Category:** Cryptography Failure
  - **Issue:** Using weak algorithms for cryptographic operations can compromise security.
  - **Example:** Random values generated based on block hashes in Substrate’s collective flip pallet.
  - **Mitigation:** Use well-established cryptographic libraries and ensure the chosen algorithms meet the required security standards.
2. **Storage Exhaustion**
  - **Category:** Resource Management
  - **Issue:** Improper configuration leading to cheap storage costs can allow attackers to flood the storage with data, disrupting services.
  - **Example:** Low existential deposits in Polkadot that enable storage abuse.
  - **Mitigation:** Set appropriate transaction costs and ensure that storage pricing reflects its value.
3. **Unsafe Arithmetic Operations**
  - **Category:** Mathematical Operations
  - **Issue:** Unchecked arithmetic operations can lead to overflows and other errors.
  - **Example:** Calculating voting power based on balances without proper checks.
  - **Mitigation:** Use checked or saturated arithmetic operations provided by Rust’s standard libraries.
4. **Unsafe Type Conversions**
  - **Category:** Data Handling
  - **Issue:** Downcasting large types to smaller ones without validation can lead to data loss or corruption.
  - **Example:** Converting balances between different types in Substrate.
  - **Mitigation:** Implement checks to ensure safe type conversions and avoid unnecessary downcasting.

### Additional Mitigation Strategies

1. **Implement Internal and External Audits**
  - Regular internal audits help catch issues early, while external audits provide an additional layer of scrutiny.
  - Use community resources and audit initiatives to ensure a baseline level of security.
2. **Leverage Bug Bounties**
  - Encourage external security researchers to find and report bugs by offering financial incentives.
3. **Adopt a Proactive Security Culture**
  - Foster a security-first mindset among developers. Continuous learning and awareness are crucial for maintaining robust security.
4. **Utilize Tools and Automation**
  - Employ static analysis tools and extend them to cover specific vulnerabilities relevant to the Polkadot and Substrate ecosystems.
5. **Knowledge Sharing and Community Engagement**
  - Share findings and best practices within the community to uplift the overall security posture.

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/OSU9PE0FLUc?si=cDxZPdTI4wQ1E_ER" title="YouTube video player" width="560"></iframe>

#### Conclusion

The talk at Sub0 Asia 2024 by Serhan Bahar and Giovanny Gongora emphasized the importance of understanding and mitigating common security risks in the Polkadot and Substrate ecosystems. By adopting a comprehensive approach that includes audits, bug bounties, and proactive security practices, developers can significantly reduce vulnerabilities and enhance the security of their projects.

For more detailed information and resources, refer to the Polkadot Blockchain Academy Book and the Substrate War Game on GitHub, which offers hands-on practice in identifying and mitigating vulnerabilities.