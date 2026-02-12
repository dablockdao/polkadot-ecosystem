/* Navigation menu structure - centralized data */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  items?: { label: string; href: string; external?: boolean }[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  label: string;
}

/* Main navigation - used in header and footer */
export const navigationData: NavItem[] = [
  {
    label: 'Tools',
    href: '/tools/',
    items: [
      { label: 'Wallets', href: '/tools/wallets' },
      { label: 'Explorers', href: '/tools/block-explorers' },
      { label: 'Governance', href: '/tools/dao-tools' },
      { label: 'Development', href: '/tools/dev' },
      { label: 'Miscellaneous', href: '/tools/miscellaneous' }
    ]
  },
  {
    label: 'Dapps',
    href: '/dapps/',
    items: [
      { label: 'DeFi', href: '/dapps/defi' },
      { label: 'Gaming', href: '/dapps/gaming' },
      { label: 'Bridges', href: '/dapps/bridges' },
      { label: 'DePin', href: '/dapps/depin' },
      { label: 'Social', href: '/dapps/social' }
    ]
  },
  {
    label: 'Community',
    href: '/club/',
    items: [
      { label: 'Bounties', href: '/club/bounties' },
      { label: 'Initiatives', href: '/club/initiatives' },
      { label: 'Collectives', href: '/club/collectives' },
      { label: 'DAOs', href: '/club/daos' },
      { label: 'Orgs', href: '/club/orgs' }
    ]
  },
  {
    label: 'Resources',
    href: '/resources/',
    items: [
      { label: 'Media', href: '/resources/media/' },
      { label: 'Guides', href: '/resources/guides/' },
      { label: 'Templates', href: '/resources/templates' },
      { label: 'Glossary', href: '/resources/glossary' },
      { label: 'Faucets', href: '/resources/faucets' }
    ]
  }
];

/* DOT Portals - external links for footer */
export const dotPortals: NavItem = {
  label: 'DOT Portals',
  href: '#',
  items: [
    { label: 'DOT Site', href: 'https://polkadot.com/', external: true },
    { label: 'DOT Wiki', href: 'https://wiki.polkadot.com/', external: true },
    { label: 'DOT Docs', href: 'https://docs.polkadot.com/', external: true },
    { label: 'DOT Forum', href: 'https://forum.polkadot.network/', external: true },
    { label: 'DOT Support', href: 'https://support.polkadot.network/', external: true }
  ]
};

/* Social links - used in footer */
export const socialLinks: SocialLink[] = [
  { name: 'discord', href: 'https://polkadot-discord.w3f.tools/', icon: 'discord', label: 'Discord' },
  { name: 'reddit', href: 'https://www.reddit.com/r/Polkadot/', icon: 'reddit', label: 'Reddit' },
  { name: 'github', href: 'https://github.com/paritytech/polkadot-sdk', icon: 'github', label: 'GitHub' },
  { name: 'youtube', href: 'https://www.youtube.com/channel/UCB7PbjuZLEba_znc7mEGNgw', icon: 'youtube', label: 'YouTube' },
  { name: 'x', href: 'https://x.com/Polkadot', icon: 'x.com', label: 'Twitter' },
  { name: 'instagram', href: 'https://www.instagram.com/polkadotnetwork/', icon: 'instagram', label: 'Instagram' }
];
