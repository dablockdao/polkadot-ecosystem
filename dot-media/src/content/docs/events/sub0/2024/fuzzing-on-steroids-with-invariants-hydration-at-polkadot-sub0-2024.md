---
title: 'Fuzzing on Steroids with Invariants'
description: 'Learn about HydraDX innovative approach to fuzzing with invariants to enhance blockchain application security and reliability.'
sidebar:    
    label: Martin Hloska (Hydration)
---

![Mohammadreza Ashouri - Polkadot Security Vectors](/src/assets/sub0-2024/mohammadreza-sub0.webp)

In a recent tech talk at [**Polkadot Sub0 2024**](https://dablock.com/web3-events/polkadot-sub0/) by **Martin Hloska** and **Valery Gantchev** from **Hydration** (former HydraDX), the spotlight was on an advanced approach to fuzzing known as “*Fuzzing on Steroids with Invariants*“. This innovative technique is tailored to enhance the detection of edge cases and potential vulnerabilities within the substrate runtimes of blockchain applications, particularly those utilizing the **Hydration (former known as HydraDX) protocol**.

## What is Fuzzing?
Fuzzing is an **automated testing technique that involves generating streams of random inputs and applying them to an API to detect unexpected behaviors** or crashes. In the context of blockchain, fuzzing is crucial for identifying potential vulnerabilities in the extrinsics, which are the public APIs that can be called by anyone.

## Hydration’s Approach to Fuzzing
Hydration (former HydraDX) utilizes a specific fuzzer developed by **SRLabs**, known as the **Substrate Runtime Fuzzer**, which is built on top of **Ziggy**. This fuzzer employs coverage-guided fuzzing to systematically explore the code and detect areas that might cause crashes or unexpected behavior. The fuzzer’s ability to provide insights into the coverage of the code and help identify roadblocks makes it an invaluable tool in the development process.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="569" src="https://docs.google.com/presentation/d/e/2PACX-1vRSJTwR_oGeIwvVZqVLQ7_Jk9-dYeycoHvucotHhAS6d7k4jJ_eS8ZnGq8qjbACFqkOwKevjCWUUs63/embed?start=false&loop=false&delayms=60000" width="960"></iframe>

Optimizing Fuzzing with Invariants
----------------------------------

The core innovation presented by HydraDX involves the integration of invariants into the fuzzing process. Invariants are conditions that must hold true after certain operations are executed. For instance, in the context of **Hydration’s Omni Pool** implementation, invariants ensure that the value of the pool does not decrease after a trade. By embedding these invariants directly into the fuzzing process, developers can detect not just crashes but also logical errors in the business logic.

### Fuzzing Practical Implementation

The implementation of this advanced fuzzing technique is straightforward. The fuzzer starts with a seed pool, which includes initial extrinsics and parameters. It then runs these through the substrate runtime, checking for crashes and logging any deviations from the expected behavior. By continuously mutating the input data and leveraging the feedback from coverage reports, the fuzzer can explore deeper into the code, identifying potential issues that might not be caught by traditional testing methods.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/bSd2cCqpNyg?si=-Pzh7wRfIS9VeroM" title="YouTube video player" width="560"></iframe>

### Live Demo Insights

During the live demo, Martin demonstrated how the fuzzer could detect a rounding issue within the Omnipool implementation. By deliberately introducing an error in the rounding logic, the fuzzer was able to identify the issue within minutes, showcasing its efficiency and effectiveness. This real-time detection is crucial for maintaining the integrity and security of blockchain applications.

#### Conclusion

**Fuzzing on Steroids with Invariants represents a significant advancement in automated testing for blockchain applications**. By combining traditional fuzzing techniques with the power of invariants, HydraDX has developed a robust method for ensuring the reliability and security of their substrate runtimes. This approach not only helps in identifying crashes but also ensures that the business logic adheres to the defined constraints, providing a comprehensive testing solution.