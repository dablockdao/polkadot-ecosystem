---
title: 'Zero Knowledge Proofs on Polkadot with Jeff Burdges'
description: 'Explore zero knowledge proofs on blockchains, focusing on Polkadot innovative approaches to enhancing privacy, efficiency, and security.'
sidebar:
    label: Jeff Burdges (Polkadot)
    order: 2
---


In a recent tech talk at Sub0 2024, **Jeff Burdges** delved into the intricacies of **zero knowledge proofs (ZKPs)** and their application in **identity systems on blockchains**. The talk covered several key areas, including the limitations of current systems, advancements in cryptographic techniques, and practical implementations on platforms like Polkadot and Kusama. Here, we’ll break down the essential points from the discussion to provide a comprehensive understanding of these cutting-edge technologies.

<iframe frameborder="0" height="400" marginheight="0" marginwidth="0" scrolling="no" src="https://www.slideshare.net/slideshow/embed_code/key/Nrov8mNKXunrnE?hostedIn=slideshare&page=upload" width="476"></iframe>

## Understanding Zero Knowledge Proofs (ZKPs)
Zero knowledge proofs are cryptographic methods that **allow one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself**. This concept is particularly valuable in blockchain and online identity systems, where privacy and security are paramount.

### Limitations of Current Systems
The speaker highlighted the **inefficiencies in current systems like Ethereum**, where adding elliptic curve points or performing certain cryptographic operations requires pre-compilation. These operations, while fast, introduce maintenance burdens and potential risks. Ethereum’s approach involves adding numerous pre-compiled contracts, which can be slow and inflexible.

## Polkadot’s Approach: Host Calls for Slow Parts
Polkadot’s approach, as described in the talk, focuses on adding host calls only for the slowest parts of cryptographic operations. This method enhances flexibility and performance. For instance, operations like multi-scalar multiplications and pairings, which typically run in tight loops and are computationally intensive, benefit from this strategy. Polkadot uses host calls for these specific operations, making the system more efficient.

### Simplifying Development with Rust and Substrate
One of the major takeaways for developers is the streamlined process of **implementing zero knowledge proofs on Polkadot**. Developers can use existing Rust infrastructure without needing to code separately for different environments. By modifying curves and compiling extensions, they can achieve seamless integration, simplifying the development process.

## Ring Verifiable Random Functions (VRFs)
The talk introduced the concept of **ring VRFs**, combining ring signatures and verifiable random functions. A ring signature allows a signer to prove that they belong to a set without revealing their identity. VRFs produce a pseudo-random output based on a secret key. The combination, a ring VRF, enables anonymous yet verifiable random outputs, useful in various blockchain applications.

### Zero Knowledge Continuations
Zero knowledge continuations address the high computational costs associated with **SNARKs** (Succinct Non-Interactive Arguments of Knowledge). By reusing proofs and re-randomizing them, Polkadot achieves efficient computations. This technique, termed “***Specialized Groth16***”, involves modifying the trusted setup to enable continuous use without compromising security.

### Practical Applications: Identity and Resource Management
Jeff Burdges emphasized practical applications of these technologies in identity systems and resource management. For instance, users can register identities using zero knowledge proofs, ensuring privacy. **Ring VRFs** can limit actions like spam prevention or free play limits in online games, offering a flexible and anonymous way to manage user interactions.

### Advancements in Host Calls
One of the notable advancements discussed was the implementation of host calls for slow cryptographic operations. These **host calls are specifically designed for operations such as multi-scalar multiplications and pairings**. This approach reduces the need for multiple pre-compiled contracts, as seen in other blockchain systems, thereby enhancing efficiency and flexibility. The expert explained that by focusing on the slow parts of cryptographic processes, Polkadot can offer a more streamlined and efficient solution for developers and users alike.

### Identity Systems and Ring VRFs
The integration of zero knowledge proofs into identity systems on blockchains represents a significant advancement. By using ring VRFs, users can maintain their anonymity while proving their membership in a set. This is particularly useful for applications requiring identity verification without revealing personal information. The speaker emphasized the potential of these technologies to enhance privacy and security in various applications, from online services to resource management.

### Specialized Groth16 and Zero Knowledge Continuations
Specialized Groth16, a technique for zero knowledge continuations, was another focal point of the talk. This method involves creating a SNARK that leaks secrets and then modifying the trusted setup to allow for continuous use. By re-randomizing the proofs, this technique ensures efficient and secure computations. The expert highlighted the importance of this approach in reducing computational costs and improving the scalability of zero knowledge proofs in blockchain applications.

### Practical Use Cases and Real-World Applications
The talk also explored several **practical use cases for zero knowledge proofs and ring VRFs**. One notable example was the application of these technologies in resource management systems. For instance, governments can use ring VRFs to implement anonymous ration card systems, ensuring fair distribution of resources while maintaining user privacy. Additionally, online services can leverage these technologies to prevent spam and manage user interactions more effectively.  
<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/36GqJ4XRvi0?si=rek-rH_69ukqll2_" title="YouTube video player" width="560"></iframe>

### Conclusion
The tech talk provided a deep dive into the advancements and practical implementations of zero knowledge proofs and related cryptographic techniques on blockchain platforms like Polkadot. By addressing inefficiencies in current systems and introducing innovative approaches like ring VRFs and zero knowledge continuations, the discussed methods offer promising solutions for secure, private, and efficient blockchain applications.

For developers and blockchain enthusiasts, these insights pave the way for building robust and privacy-preserving systems, leveraging the power of zero knowledge proofs and advanced cryptographic methods. As these technologies continue to evolve, they hold the potential to transform how we manage identity and security in the digital age.