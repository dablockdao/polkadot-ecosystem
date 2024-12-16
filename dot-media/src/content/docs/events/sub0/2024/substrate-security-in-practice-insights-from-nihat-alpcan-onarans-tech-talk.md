---
title: 'Substrate Security in Practice by Nihat Alpcan Onaran'
description: 'Explore Nihat Alpcan Onaran’s insights on substrate security, real-world vulnerabilities, and fuzzing techniques for robust blockchain applications.'
sidebar:
    label: Nihat Alpcan (Security)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

In a talk at Polkadot Sub0 2024, **Nihat Alpcan Onaran**, a leading security expert from **Analog**, shared valuable insights on substrate security, highlighting real-world examples and practical fuzzing techniques. This talk delved deep into the intricacies of substrate security, shedding light on common vulnerabilities, their impacts, and remediation strategies.

Understanding Substrate Security
--------------------------------

Substrate, a framework for building blockchain applications, demands robust security measures to safeguard against various vulnerabilities. As the blockchain ecosystem grows, so does the sophistication of potential attacks. Onaran’s expertise in security audits, penetration tests, and his extensive experience with both Web2 and Web3 environments, provide a comprehensive perspective on addressing these challenges.

<iframe allowfullscreen="true" frameborder="0" height="569" mozallowfullscreen="true" src="https://docs.google.com/presentation/d/e/2PACX-1vRHyqBMQavz7j0jkwHS8jZtmBMrwCo0G725kplQ-izmp90kcAjv_kemb7tytve68deOysaMRiXq23tZ/embed?start=false&loop=false&delayms=60000" webkitallowfullscreen="true" width="960"></iframe>

### Integer Vulnerabilities

One of the fundamental issues discussed was integer-related vulnerabilities, which are prevalent in Rust-based systems like Substrate. These include:

- **Integer Overflow/Underflow**: When an integer exceeds its maximum value, it wraps around, causing unexpected behaviors. Similarly, underflows occur when integers drop below their minimum value.
- **Casting Overflows**: Errors arise when converting between integer types, potentially leading to significant bugs.
- **Precision Loss**: Dividing integers can result in the loss of floating-point precision, crucial in financial calculations.

### Real-World Examples

Onaran provided practical examples to illustrate these vulnerabilities:

1. **Trigger Function Bug**: An off-chain worker’s trigger function suffered from an overflow issue due to unsafe math operations. Remediation involved implementing safe math checks to handle overflows gracefully.
2. **Vesting Schedule Issue**: A function calculating daily vested tokens lost precision in integer division, affecting economic calculations. The solution was to use larger data models and scaling factors to retain precision.

### Weight Calculation and Fees

Accurate weight calculations are vital to managing blockchain resources effectively. Onaran emphasized the importance of dynamic and precise fee calculations to prevent denial-of-service (DoS) attacks. Examples included:

- **Credentials Vector Handling**: A bug in weight calculation allowed attackers to exploit vector lengths, leading to potential network exhaustion. The fix involved bounding vectors and recalculating fees dynamically.
- **Hash Length Casting Issue**: Improper casting of hash lengths to `u32` allowed attackers to bypass weight calculations, causing storage exhaustion. Proper bounding and type checks were essential to prevent this.

Runtime Panics and Storage Exhaustion
-------------------------------------

Onaran highlighted the severe consequences of runtime panics in substrate, which can halt block production if triggered on multiple nodes. Proper error handling and avoiding unsafe operations like `unwrap` and `expect` are critical. Additionally, he discussed:

- **NFT Metadata Update**: An example where outdated data accumulated in storage, causing slowdowns. Regular cleanup or implementing storage deposits were recommended solutions.

### Insecure Signature Implementations

Signatures play a crucial role in verifying transactions and data integrity. Onaran discussed common pitfalls, such as:

- **Replay Attacks**: Reusing signatures without unique identifiers can allow unauthorized actions. Including task-specific variables and nonces mitigates this risk.
- **Hash Collisions**: Creating signatures without delimiters between variables can lead to collisions. Introducing delimiters and ensuring unique signatures for each action are essential.

### Fuzzing for Enhanced Security

Fuzzing, an automated testing technique, plays a crucial role in identifying hidden bugs. Onaran emphasized coverage-guided fuzzing, which explores various code paths to uncover deep-seated issues. The process involves:

1. **Setting Up the Environment**: Using tools like `honggfuzz` to perform fuzzing on Substrate.
2. **Defining Fuzzing Logic**: Implementing checks to handle random data and convert byte arrays into usable data structures.
3. **Crash Analysis**: Replaying crashes to identify the exact cause and location of bugs, facilitating targeted fixes.

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/ndoL_OdjOaM?si=30MHI2ZRKw_ioaED" title="YouTube video player" width="560"></iframe>

#### Conclusion

Nihat Alpcan Onaran’s talk provided invaluable insights into substrate security, emphasizing practical approaches to identifying and mitigating vulnerabilities. As the blockchain ecosystem continues to evolve, staying ahead of potential threats through robust security practices and advanced testing techniques like fuzzing is paramount.

By adopting these strategies, developers and security professionals can build more resilient blockchain applications, ensuring the integrity and reliability of their platforms.