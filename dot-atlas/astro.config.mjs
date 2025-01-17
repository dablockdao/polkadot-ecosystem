// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightViewModes from 'starlight-view-modes'
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import starlightLinksValidator from 'starlight-links-validator'


// https://astro.build/config
export default defineConfig({
	site: 'https://polkadotecosystem.com',
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		sitemap(),
		starlight({
			plugins: [
				starlightLinksValidator(),
				starlightViewModes({
					zenModeEnabled: true,
					zenModeCloseButtonPosition: "top-right",
					zenModeShowHeader: false,
					zenModeShowSidebar: false,
					zenModeShowTableOfContents: true,
					zenModeShowFooter: true,
					zenModeShowSwitchInHeader: true,
					zenModeShowSwitchInHeaderMobile: true,
					zenModeShowSwitchInTableOfContents: true,
					presentationModeEnabled: false, 
					presentationModeShowSwitchInHeader: false, // not supported yet
					presentationModeShowSwitchInTableOfContents: false, // not supported yet
				}),
				starlightSidebarTopics([
					{
						label: 'Tools',
						link: '/tools/',
						icon: 'seti:config',
						items: [
							{
								label: '👛 Wallets', collapsed: true, autogenerate: { directory: 'tools/wallets' }
							},
							{
								label: '🔎 Block Explorers', collapsed: true, autogenerate: { directory: 'tools/block-explorers' }
							},
							{
								label: '🗳️ DAO Tools', collapsed: true, autogenerate: { directory: 'tools/dao-tools' }
							},
							{
								label: '🧿 Miscellaneous', collapsed: true, autogenerate: {directory: 'tools/miscellaneous'}
							},
							{
								label: '🛠️ Development', collapsed: true, autogenerate: { directory: 'tools/dev' }
							},
							{
								label: '⚫️ Archive', collapsed: true, autogenerate: { directory: 'tools/archive' }
							},
						]
					},
					{
					  label: 'Dapps',
					  link: '/dapps/',
					  icon: 'rocket',
					  items: [
						{
							label: '🪙 DeFi', collapsed: true, autogenerate: { directory: 'dapps/defi' }
						},
						{
							label: '🌉 Bridges', collapsed: true, autogenerate: { directory: 'dapps/bridges' }
						},
						{
							label: '🏠 RWA', collapsed: true, autogenerate: { directory: 'dapps/rwa' }
						},
						{
							label: '💻 Smart Contracts', collapsed: true, autogenerate: { directory: 'dapps/smart-contracts' }
						},
						{
							label: '🤖 AI', collapsed: true, autogenerate: { directory: 'dapps/ai' }
						},
						{
							label: '⛽️ DePin', collapsed: true, autogenerate: { directory: 'dapps/depin' }
						},
						{
							label: '🎮 Gaming', collapsed: true, autogenerate: { directory: 'dapps/gaming' }
						},
						{
							label: '💬 Social', collapsed: true, autogenerate: { directory: 'dapps/social' }
						},
						{
							label: '🧿 Miscellaneous', collapsed: true, autogenerate: { directory: 'dapps/miscellaneous' }
						},
						{
							label: '🛍️ NFT Marketplaces', collapsed: true, autogenerate: { directory: 'dapps/nft-marketplaces' }
						},
						{
							label: '📦 Storage', collapsed: true, autogenerate: { directory: 'dapps/storage' }
						},
						{
							label: '⚫️ Archive', collapsed: true, autogenerate: { directory: 'dapps/archive' }
						},
					  ],
					},
					{
						label: 'Community',
						link: '/club/',
						icon: 'heart',
						items: [
							{
								label: '🏛️ Collectives', collapsed: true, autogenerate: { directory: 'club/collectives' }
							},
						  {
						  label: '🏴‍☠️ DAOs', collapsed: true, autogenerate: { directory: 'club/daos' }
					  },
					  {
						  label: '👍 Initiatives', collapsed: true, autogenerate: { directory: 'club/initiatives' }
					  },
					  {
						label: '💰 Bounties', collapsed: true, autogenerate: { directory: 'club/bounties' }
					},
					  {
						  label: '💼 Orgs', collapsed: true, autogenerate: { directory: 'club/orgs' }
					  },
					  {
						label: '👥 Catalysts', collapsed: true, autogenerate: { directory: 'club/people' }
					},
					{
						label: '📚 Resources', collapsed: true, autogenerate: { directory: 'club/resources' }
					},
					{
						label: '🎪 Memecoins', collapsed: true, autogenerate: { directory: 'club/memecoins' }
					},
					{
						label: '⚫️ Archive', collapsed: true, autogenerate: { directory: 'club/archive' }
					},
					  ]}
				  ])],
			title: 'Polkadot Ecosystem',
			editLink: {
				baseUrl: 'https://github.com/dablockdao/polkadot-ecosystem/tree/main/dot-hub/',
			  },
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-face.css',
			  ],
			logo: {
				light: './src/assets/ecosystem1.png',
				dark: './src/assets/ecosystem2.png',
				replacesTitle: true,
			},
			components: {
				Head: './src/components/CustomHead.astro',
				Footer:'./src/components/CustomFooter.astro',
				SocialIcons: './src/components/CustomSocial.astro',
				Hero: './src/components/CustomHero.astro',
				PageTitle: './src/components/CustomPageTitle.astro',
				SiteTitle: './src/components/CustomSiteTitle.astro',
				TableOfContents: './src/components/TableOfContents.astro',
			  },
			social: {
				github: 'https://github.com/dablockdao/polkadot-ecosystem',
				"x.com": 'https://x.com/polkadot',
				"reddit": 'https://www.reddit.com/r/Polkadot/',
			},
			lastUpdated: true,
			expressiveCode: {
				styleOverrides: { borderRadius: '10px',
					borderWidth: '1px',
							},
				themes: ['github-dark-high-contrast', ]
			  },
		}),
	],
	i18n: {
		locales: ['en', 'es', 'fr', 'pt', 'it', 'de'],
		defaultLocale: 'en',
	},
});
