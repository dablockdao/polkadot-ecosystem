/* Homepage content data - features, stats, quick start guide */

export const ecosystemFeatures = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    title: "Interoperability",
    description: "Seamlessly connect multiple blockchains through XCM messaging for true cross-chain composability."
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: "Shared Security",
    description: "All parachains benefit from the relay chain's pooled security model, eliminating individual chain vulnerabilities."
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    title: "Scalability",
    description: "Process thousands of transactions per second across parallel chains without compromising decentralization."
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    title: "Customizable",
    description: "Build application-specific chains with Substrate framework - optimize for your exact use case."
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12h-4V8"/></svg>',
    title: "On-Chain Governance",
    description: "Transparent, decentralized decision-making through OpenGov - no hard forks required for upgrades."
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    title: "Treasury System",
    description: "Community-controlled funding mechanism supporting ecosystem growth and innovation."
  }
];

export const ecosystemStats = [
  {
    value: "100",
    suffix: "+",
    label: "Active Projects"
  },
  {
    value: "50",
    suffix: "+",
    label: "Parachains"
  },
  {
    value: "1M",
    suffix: "+",
    label: "Community Members"
  },
  {
    value: "$10B",
    suffix: "+",
    label: "Total Value Locked"
  }
];

export const quickStartSteps = [
  {
    number: 1,
    title: "Get a Wallet",
    description: "Choose from trusted wallets like Talisman, SubWallet, or Nova Wallet to securely store your DOT and interact with the ecosystem.",
    link: "/tools/wallets",
    linkText: "Browse Wallets"
  },
  {
    number: 2,
    title: "Acquire DOT",
    description: "Purchase DOT from exchanges or use faucets for testnet tokens. DOT is used for governance, staking, and transaction fees.",
    link: "/resources/faucets",
    linkText: "Get Test Tokens"
  },
  {
    number: 3,
    title: "Explore Dapps",
    description: "Discover DeFi protocols, NFT marketplaces, gaming platforms, and more - all secured by Polkadot's shared security model.",
    link: "/dapps",
    linkText: "Explore Dapps"
  },
  {
    number: 4,
    title: "Join Governance",
    description: "Participate in OpenGov by voting on proposals, submitting ideas, or delegating your voting power to trusted representatives.",
    link: "/tools/dao-tools",
    linkText: "Start Voting"
  }
];

export const keyBenefits = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    title: "Developer-Friendly",
    description: "Build with Substrate framework using Rust, access comprehensive documentation, and leverage powerful SDKs."
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    title: "Multi-Chain Future",
    description: "Native support for bridging to Ethereum, Bitcoin, and other major networks through specialized bridge hubs."
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    title: "Economic Sustainability",
    description: "Fair tokenomics with inflation-adjusted staking rewards and a thriving on-chain treasury for ecosystem growth."
  }
];

export const featuredParachains = [
  { name: "Acala", url: "https://acala.network" },
  { name: "Moonbeam", url: "https://moonbeam.network" },
  { name: "Astar", url: "https://astar.network" },
  { name: "Hydration", url: "https://hydration.net" },
  { name: "Bifrost", url: "https://bifrost.finance" },
  { name: "Phala", url: "https://phala.network" },
  { name: "Centrifuge", url: "https://centrifuge.io" },
  { name: "Unique", url: "https://unique.network" },
  { name: "Subsocial", url: "https://subsocial.network" },
  { name: "Polkadex", url: "https://polkadex.trade" },
  { name: "Nodle", url: "https://nodle.com" },
  { name: "Interlay", url: "https://interlay.io" },
  { name: "Composable", url: "https://composable.finance" },
  { name: "Parallel", url: "https://parallel.fi" },
  { name: "KILT", url: "https://kilt.io" }
];

export const ecosystemTimeline = [
  {
    title: "The Vision Begins",
    date: "2016",
    content: `
      <p><strong>Polkadot was conceived</strong> by Dr. Gavin Wood, co-founder of Ethereum, with a vision to solve blockchain scalability and interoperability challenges.</p>
      <p>The whitepaper introduced revolutionary concepts like shared security, cross-chain communication, and specialized parachains working together as a unified network.</p>
    `
  },
  {
    title: "Web3 Foundation Launch",
    date: "2017",
    content: `
      <p><strong>Web3 Foundation was established</strong> to steward Polkadot's development and promote a decentralized web.</p>
      <p>The foundation raised funds through initial token sales and began building the core technology that would power the multi-chain future.</p>
    `
  },
  {
    title: "Mainnet Genesis",
    date: "May 2020",
    content: `
      <p><strong>Polkadot's mainnet went live</strong> with the genesis block, marking the beginning of the relay chain.</p>
      <p>Initial launch focused on relay chain validation and network security, with governance mechanisms activated shortly after.</p>
    `
  },
  {
    title: "Parachain Auctions Begin",
    date: "November 2021",
    content: `
      <p><strong>First parachain auctions launched</strong>, enabling projects to secure slots on the Polkadot relay chain through crowdloans.</p>
      <p>This milestone activated true multi-chain functionality, with parachains like Acala, Moonbeam, and Astar winning early slots.</p>
    `
  },
  {
    title: "OpenGov Revolution",
    date: "2023",
    content: `
      <p><strong>OpenGov governance system activated</strong>, replacing the original governance model with a more flexible, multi-track approach.</p>
      <p>Community members gained unprecedented control over network decisions through delegated voting and specialized governance tracks.</p>
    `
  },
  {
    title: "The Multi-Chain Future",
    date: "2024-Present",
    content: `
      <p><strong>Polkadot continues to evolve</strong> with 50+ parachains, advanced XCM messaging, and bridges to major ecosystems.</p>
      <p>The network now supports DeFi, gaming, identity, storage, and countless other specialized use cases through its vibrant parachain ecosystem.</p>
    `
  }
];
