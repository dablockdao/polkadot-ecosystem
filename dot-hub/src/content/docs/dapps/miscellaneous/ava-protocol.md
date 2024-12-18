---
title: 'Ava Protocol'
description: Ava Protocol (former OAK Network), or On-chain Autonomous Kernel, is a decentralized and trustless architecture designed to execute automated actions on the blockchain based on specific triggers.
---

AVA Protocol, or On-chain Autonomous Kernel, is a decentralized and trustless architecture designed to execute automated actions on the blockchain based on specific triggers. These triggers can include time, price, on-chain events, and interactions with smart contracts. OAK Network aims to provide a reliable, flexible, and secure way to automate financial transactions, metaverse actions, and other on-chain interactions, especially within a multi-chain environment.

The Need for OAK Network
------------------------

Automation on the blockchain is currently limited by centralized or semi-centralized solutions that are not fully trustless. OAK Network addresses this by enabling decentralized automation that is fully under the control of its creator. This is particularly important in a multi-chain ecosystem, where different blockchains can offload expensive and complex automation computations to OAK Network. This approach ensures ownership, security, and flexibility for users and developers.

### OAK Network Key Components

#### The Substrate Framework

OAK Network is built using the Substrate framework, which is also the foundation for Polkadot and its canary network Kusama. Substrate provides extensive out-of-the-box functionality, including peer-to-peer networking, consensus mechanisms, governance features, and an Ethereum Virtual Machine (EVM) implementation. This allows OAK Network to leverage these features without needing to build them from scratch, reducing development time and effort.

#### Polkadot Parachains

As a parachain on Polkadot, OAK Network can directly integrate with other parachains and parathreads, facilitating token transfers and ensuring security through the relay chain. This interoperability is crucial for OAK’s cross-chain automation goals, allowing seamless interactions between different blockchain networks.

### OAK Network Participants

#### Collators

Collators play a vital role in maintaining OAK Network’s performance and security. They are responsible for producing blocks and must meet specific technical specifications to ensure high availability and efficiency. These include bare metal servers, high-speed internet connections, and robust hardware configurations.

#### Nominators

Nominators are token holders who support collators by staking their tokens. They choose collators based on their performance and reliability, ensuring that only the best collators are selected. This delegated proof of stake (dPoS) mechanism helps maintain the network’s decentralization and security.

#### DApp Developers

OAK Network provides a software development kit (SDK) for DApp developers, enabling them to build decentralized applications using JavaScript (or TypeScript). The SDK supports extrinsic calls, event subscriptions, and end-user function calls, making it easier for developers to integrate with OAK Network.

### The OAK Kernel

The OAK Kernel is the core component of OAK Network, featuring a persistent event registry for managing automated tasks. It includes the following data structures:

1. **Task Map**: Stores information about tasks, including their owners and actions to be performed.
2. **Trigger Map**: Stores information about triggers, such as time intervals and associated tasks.
3. **Task Queue**: Stores task IDs that are ready to be executed.
4. **Missed Queue**: Stores task IDs and execution times for tasks that missed their scheduled slots.

OAK Network Key Features
------------------------

#### Registration

Users or remote calls can interact with OAK Network to set up recurring events. The system verifies the inputs, generates a unique task ID, and adds the task to the appropriate maps and queues.

#### Cancellation

Tasks can be canceled by authorized users or remote calls. The system verifies the cancellation request, deletes the task from the maps and queues, and ensures that all future occurrences of the task are also removed.

#### Time-triggered Execution

OAK Network executes tasks based on pre-defined time intervals. The system calculates the current time slot, identifies tasks to be executed, and processes them within the allocated block weight. Missed tasks are moved to the missed queue for later execution.

OAK Network Future Plans
------------------------

OAK Network plans to introduce custom no-code triggers, allowing users to create automation rules without needing to write code. This will enable broader adoption and more flexible use cases. Additionally, OAK aims to address front-running issues by integrating solutions that keep action data off-chain until execution.

### Conclusion

OAK Network is poised to revolutionize on-chain automation by providing a trustless, decentralized, and flexible platform for executing automated actions. Its integration with the Polkadot ecosystem and use of the Substrate framework ensures robust security, interoperability, and scalability. As OAK Network continues to evolve, it aims to support a wide range of automation use cases, driving innovation and efficiency in the blockchain space.

- <small>Related Token/s:</small> **OAK**

### Related Projects:
