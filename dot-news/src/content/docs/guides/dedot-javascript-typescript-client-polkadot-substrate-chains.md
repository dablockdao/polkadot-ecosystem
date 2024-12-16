---
title: 'DeDot JavaScript / TypeScript Client for Polkadot'
description: 'DeDot is a JavaScript/TypeScript client for Substrate-based blockchains, offering a optimized performance developer experience.'
---
As more developers look to build on Polkadot and Substrate, the demand for efficient, easy-to-use tools grows. Enter **DeDot**, a modern **JavaScript/TypeScript client designed specifically for interacting with Substrate-based blockchains**, including Polkadot. With a focus on performance, usability, and a seamless developer experience, DeDot is poised to become a vital tool for developers within the Polkadot ecosystem.

Understanding DeDot’s Core Features
-----------------------------------

DeDot is built to offer a delightful experience for developers, providing a comprehensive set of features tailored to the needs of the [**Polkadot and Substrate ecosystem**](https://dablock.com/ecosystem/). Here are some of the key features that make DeDot stand out:

### 1. **Small Bundle Size and Tree-Shakable Design**

One of the primary concerns for developers is the <span style="color: #ff0000;">size of their application bundles</span>. Large dependencies can slow down build times and impact the performance of web applications. DeDot addresses this issue with a <span style="color: #000000;">**small bundle size and a tree-shakable design**</span>. By eliminating tight dependencies like `bn.js` or `wasm-blob`, DeDot ensures that only the necessary code is included in the final bundle, optimizing performance.

### 2. **TypeScript and API Suggestions for Substrate Networks**

DeDot offers native TypeScript support, providing developers with type safety and autocompletion. This feature is particularly beneficial when working with Substrate-based blockchains, as each network may have its own unique set of data types and APIs. By leveraging the `@dedot/chaintypes` package, developers can receive accurate type suggestions and API autocompletion, making the development process smoother and more efficient.

### 3. **Familiar API Style with Seamless Migration**

For developers familiar with the `@polkadot/api` library, DeDot offers a familiar API style. This design choice ensures that developers can easily migrate their projects from `@polkadot/api` to DeDot without a steep learning curve. The intuitive API style, combined with detailed documentation, makes DeDot an accessible and powerful tool for both new and experienced developers.

### 4. **Native TypeScript Type System for Scale-Codec**

DeDot leverages the native TypeScript type system to represent scale-codec types directly, eliminating the need for manual unwrapping of data. This approach simplifies the handling of complex data structures and improves the overall developer experience.

### 5. **Support for the Latest Metadata Versions**

DeDot supports Metadata V14 and V15, ensuring compatibility with the latest advancements in the Substrate ecosystem. This includes a built-in metadata caching mechanism, which reduces the need for repeated metadata fetching and improves the efficiency of network interactions.

### 6. **Built-in Support for Light Clients**

With the growing popularity of [**light clients**](https://dablock.com/tech-talks/light-clients-decentralized-scalability-on-substrate-avail-sub0/), DeDot includes built-in support for tools like `smoldot`. This feature allows developers to interact with the Polkadot network using light clients, reducing resource consumption and improving the responsiveness of decentralized applications (dApps).

### 7. **Typed Contract APIs for ink! Smart Contracts**

Smart contracts are a crucial component of the Polkadot ecosystem, and DeDot provides type-safe APIs for interacting with ink! smart contracts. This feature ensures that developers can work with smart contracts confidently, knowing that their interactions are fully typed and reliable.

Getting Started with DeDot
--------------------------

Setting up DeDot in a new or existing project is straightforward. Developers can install DeDot and its related packages using either `yarn` or `npm`. For those using TypeScript, the additional `@dedot/chaintypes` package provides enhanced type safety and API suggestions.

> <span style="color: #800080;">\# Install DeDot using yarn</span>  
> `yarn add dedot`
> 
> <span style="color: #800080;">\# Install DeDot using npm</span>  
> `npm i dedot`
> 
> <span style="color: #800080;">\# Optional: Install chaintypes package for TypeScript support</span>  
> `yarn add -D @dedot/chaintypes`

Once installed, developers can initialize a `DedotClient` instance and **start interacting with the Polkadot network**. The client can be configured to connect to various Substrate-based blockchains, including Polkadot, Kusama, Moonbeam, and Astar.

> `import { DedotClient, WsProvider } from 'dedot';`  
> `import type { PolkadotApi } from '@dedot/chaintypes';`
> 
> `const run = async () => {<br></br>const provider = new WsProvider('wss://rpc.polkadot.io');<br></br>const api = await DedotClient.new<PolkadotApi>(provider);`
> 
> <span style="color: #800080;">// Example: Fetch metadata</span>  
> `const metadata = await api.rpc.state_getMetadata();<br></br>console.log('Metadata:', metadata);`
> 
> <span style="color: #800080;">// Example: Query account balance</span>  
> `const balance = await api.query.system.account('<address>');<br></br>console.log('Balance:', balance);<br></br>};` `run().catch(console.error);`

Advanced Use Cases with DeDot
-----------------------------

DeDot’s flexibility allows developers to execute a wide range of tasks, **from simple on-chain queries to complex smart contract interactions**. Below, we explore some advanced use cases that showcase the power of DeDot.

### 1. **Interacting with JSON-RPC Methods**

DeDot provides a straightforward API for executing JSON-RPC methods. This allows developers to interact with the Polkadot network at a low level, calling any supported RPC methods.

> <span style="color: #800080;">// Example: Call a specific RPC method</span>  
> `const result = await api.rpc.module_rpc_name('param1', 'param2');<br></br>console.log('RPC Result:', result);`

For developers who prefer direct interaction with the JSON-RPC server, DeDot offers a lightweight `JsonRpcClient`. This client provides a more granular control over the network interactions, suitable for advanced users.

> `import { JsonRpcClient, WsProvider } from 'dedot';<br></br>import type { PolkadotApi } from '@dedot/chaintypes';`
> 
> `const provider = new WsProvider('wss://rpc.polkadot.io');<br></br>const client = await JsonRpcClient.new<PolkadotApi>(provider);<br></br>const chain = await client.rpc.system_chain();<br></br>console.log('Chain:', chain);`

### 2. **Querying On-Chain Storage**

On-chain storage is a vital component of any blockchain application. DeDot makes it easy to query on-chain storage, whether it’s to check account balances, retrieve events, or access runtime constants.

> <span style="color: #800080;">// Example: Query account balance</span>  
> `const balance = await api.query.system.account('<address>');<br></br>console.log('Account Balance:', balance);`
> 
> <span style="color: #800080;">// Example: Retrieve all events in the current block</span>  
> `const events = await api.query.system.events();<br></br>console.log('Block Events:', events);`

### 3. **Submitting Transactions**

Transaction handling in DeDot is designed to be compatible with various signing mechanisms, including keyring pairs and Polkadot{.js} wallet extensions. This flexibility ensures that developers can securely sign and submit transactions within their dApps.

> `import { cryptoWaitReady } from '@polkadot/util-crypto';<br></br>import { Keyring } from '@polkadot/keyring';`
> 
> `await cryptoWaitReady();<br></br>const keyring = new Keyring({ type: 'sr25519' });<br></br>const alice = keyring.addFromUri('//Alice');`
> 
> `const unsub = await api.tx.balances<br></br>.transferKeepAlive('<destAddress>', 2_000_000_000_000n)<br></br>.signAndSend(alice, async ({ status }) => {<br></br>console.log('Transaction status:', status.type);<br></br>if (status.type === 'BestChainBlockIncluded' || status.type === 'Finalized') {<br></br>console.log(`Transaction completed at block hash ${status.value.blockHash}`);<br></br>await unsub();<br></br>}<br></br>});`

### 4. **Interacting with ink! Smart Contracts**

DeDot’s type-safe APIs for ink! smart contracts streamline the process of deploying, querying, and interacting with contracts. This feature is crucial for developers building decentralized applications that rely on smart contract functionality.

> `import { Contract } from 'dedot/contract';<br></br>import { FlipperContractApi } from './flipper';<br></br>import flipperMetadata from './flipper.json' assert { type: 'json' };`
> 
> <span style="color: #800080;">// Initializing DeDotClient</span>  
> `const client = await DedotClient.new(new WsProvider('wss://rpc.polkadot.io'));<br></br>const contract = new Contract<FlipperContractApi>(client, flipperMetadata, '<contractAddress>');`
> 
> <span style="color: #800080;">// Query contract state</span>  
> `const result = await contract.query.get({ caller: '<address>' });<br></br>console.log('Flipper State:', result.data);`
> 
> <span style="color: #800080;">// Submit transaction to flip contract state</span>  
> `await contract.tx.flip({ gasLimit: result.raw.gasRequired })<br></br>.signAndSend('<address>', ({ status, events }) => {<br></br>console.log('Transaction Status:', status.type);<br></br>});`

Migration from `@polkadot/api` to DeDot
---------------------------------------

For developers currently using `@polkadot/api`, migrating to DeDot is a straightforward process. DeDot’s API design intentionally mirrors that of `@polkadot/api`, minimizing the changes required to switch libraries. The primary differences lie in the handling of data types and the underlying implementation of the API.

> <span style="color: #800080;">// @polkadot/api example</span>  
> `import { ApiPromise, WsProvider } from '@polkadot/api';`
> 
> `const api = await ApiPromise.create({ provider: new WsProvider('wss://rpc.polkadot.io') });`
> 
> <span style="color: #800080;">// With @polkadot/api, you initialize the API client using the `ApiPromise` class.</span>  
> <span style="color: #800080;">// Once initialized, you can interact with the Polkadot network, querying on-chain data, submitting transactions, etc.</span>  
> <span style="color: #800080;">// Note that in this setup, data types are wrapped in a codec, so you’ll often need to unwrap the data before using it</span>
> 
> `const runtimeVersion = await api.consts.system.version;<br></br>console.log(runtimeVersion.specName.toString());`
> 
> <span style="color: #800080;">// DeDot example</span>  
> `import { DedotClient, WsProvider } from 'dedot';<br></br>import type { PolkadotApi } from '@dedot/chaintypes';`
> 
> `const api = await DedotClient.new<PolkadotApi>(new WsProvider('wss://rpc.polkadot.io'));`
> 
> <span style="color: #800080;">// With DeDot, the process is similar, but with some key enhancements.</span>  
> <span style="color: #800080;">// By specifying the `ChainApi` interface (like `PolkadotApi`), DeDot provides more accurate type suggestions and better autocompletion.</span>  
> <span style="color: #800080;">// Additionally, DeDot uses TypeScript’s native type system, meaning that you don’t need to unwrap data types manually</span>
> 
> `const runtimeVersion = api.consts.system.version;<br></br>console.log(runtimeVersion.specName); // No need to use .toString() or .unwrap(), the data is ready to use directly.`

### Polkadot Key Differences Summarized:

- **Type System:** DeDot uses TypeScript’s native type system, which eliminates the need for manual unwrapping of data, resulting in cleaner and more intuitive code.
- **API Initialization:** While both libraries share a similar initialization process, DeDot offers enhanced type suggestions and the ability to specify a `ChainApi` interface, which provides better autocompletion and developer experience.

DeDot’s approach simplifies the codebase and reduces the potential for errors, making it a more efficient choice for developers who are deeply integrated into the TypeScript ecosystem and working within the Polkadot network.

Benefits of Using DeDot in the Polkadot Ecosystem
-------------------------------------------------

DeDot is more than just another JavaScript/TypeScript client—it’s a tool designed with the needs of the modern developer in mind. By integrating seamlessly with the existing Polkadot ecosystem and providing advanced features like type-safe smart contract interactions and a small, tree-shakable bundle, DeDot offers several key benefits:

1. **Enhanced Developer Experience:** DeDot’s emphasis on TypeScript support and API suggestions greatly enhances the developer experience. With type safety, autocompletion, and built-in support for the latest Substrate features, developers can build robust applications with fewer errors and more confidence.
2. **Performance Optimization:** The small bundle size and tree-shakable architecture of DeDot mean that developers can build highly optimized dApps that load quickly and run efficiently. This is particularly important in the context of decentralized applications, where performance can directly impact user adoption and satisfaction.
3. **Future-Proofing with the Latest Standards:** By supporting the latest Substrate metadata versions and providing a built-in metadata caching mechanism, DeDot ensures that developers are always working with the most up-to-date standards. This future-proofing is crucial in a rapidly evolving ecosystem like Polkadot, where staying current can mean the difference between success and obsolescence.
4. **Seamless Integration with Existing Tools:** DeDot’s design philosophy emphasizes compatibility with existing tools and workflows. Whether you’re migrating from `@polkadot/api` or integrating with popular wallets like Polkadot{.js}, DeDot is built to work harmoniously with the tools you already use.

- - - - - -

### DeDot JavaScript/TypeScript Client for Substrate Chains Final Thoughts

As the Polkadot ecosystem continues to mature, the need for powerful, flexible, and easy-to-use development tools will only grow. DeDot addresses this need by offering a modern JavaScript/TypeScript client that is both feature-rich and highly optimized. With its small bundle size, TypeScript-first approach, and support for the latest Substrate features, DeDot is well-positioned to become an essential tool for developers building on Polkadot and other Substrate-based blockchains.

For developers looking to take their Polkadot projects to the next level, **DeDot offers a compelling combination of performance, usability, and future-proofing**. Whether you’re building complex dApps, interacting with smart contracts, or simply looking for a better way to work with Polkadot, DeDot is the tool that can help you achieve your goals.

By choosing DeDot, developers can focus on what they do best—building innovative applications—while relying on a solid, well-supported client that takes care of the complexities of interacting with the Polkadot ecosystem. As the Polkadot network grows and evolves, DeDot will continue to be a valuable ally for developers, helping them navigate the challenges and opportunities of decentralized development.

- [**DeDot Github repository**](https://github.com/dedotdev/dedot).
- [**DeDot Docs**](https://docs.dedot.dev/).

- - - - - -