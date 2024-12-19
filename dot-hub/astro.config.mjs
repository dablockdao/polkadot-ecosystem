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
								label: 'Wallets', collapsed: true, autogenerate: { directory: 'tools/wallets' }
							},
							{
								label: 'Block Explorers', collapsed: true, autogenerate: { directory: 'tools/block-explorers' }
							},
							{
								label: 'DAO Tools', collapsed: true, autogenerate: { directory: 'tools/dao-tools' }
							},
							{
								label: 'Development', collapsed: true, autogenerate: { directory: 'tools/development' }
							},
							{
								label: 'Archive', collapsed: true, autogenerate: { directory: 'tools/archive' }
							},
						]
					},
					{
					  label: 'Dapps',
					  link: '/dapps/',
					  icon: 'rocket',
					  items: [
						{
							label: 'DeFi', collapsed: true, autogenerate: { directory: 'dapps/defi' }
						},
						{
							label: 'Smart Contracts', collapsed: true, autogenerate: { directory: 'dapps/smart-contracts' }
						},
						{
							label: 'AI', collapsed: true, autogenerate: { directory: 'dapps/ai' }
						},
						{
							label: 'DePin', collapsed: true, autogenerate: { directory: 'dapps/depin' }
						},
						{
							label: 'Gaming', collapsed: true, autogenerate: { directory: 'dapps/gaming' }
						},
						{
							label: 'Social', collapsed: true, autogenerate: { directory: 'dapps/social' }
						},
						{
							label: 'Miscellaneous', collapsed: true, autogenerate: { directory: 'dapps/miscellaneous' }
						},
						{
							label: 'NFT Marketplaces', collapsed: true, autogenerate: { directory: 'dapps/nft-marketplaces' }
						},
						{
							label: 'Storage', collapsed: true, autogenerate: { directory: 'dapps/storage' }
						},
						{
							label: 'Archive', collapsed: true, autogenerate: { directory: 'dapps/archive' }
						},
					  ],
					},
					{
						label: 'Ecosystem',
						badge: { text: 'Hub', variant: 'success' },
						link: '/hub/',
						icon: 'heart',
						items: [
						  {
						  label: 'DAOs', collapsed: true, autogenerate: { directory: 'hub/daos' }
					  },
					  {
						  label: 'Initiatives', collapsed: true, autogenerate: { directory: 'hub/initiatives' }
					  },
					  {
						label: 'Media', collapsed: true, autogenerate: { directory: 'hub/media' }
					},
					  {
						  label: 'Orgs', collapsed: true, autogenerate: { directory: 'hub/orgs' }
					  },
					  {
						label: 'Validators', collapsed: true, autogenerate: { directory: 'hub/validators' }
					},
					  {
						label: 'People', collapsed: true, autogenerate: { directory: 'hub/people' }
					},
					{
						label: 'Resources', collapsed: true, autogenerate: { directory: 'hub/resources' }
					},
					{
						label: 'Archive', collapsed: true, autogenerate: { directory: 'hub/archive' }
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
				light: './src/assets/hub2.png',
				dark: './src/assets/hub1.png',
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
				github: 'https://github.com/dablockdao/',
				"x.com": 'https://x.com/polkadot',
				"reddit": 'https://www.reddit.com/r/Polkadot/',
			},
			lastUpdated: true,
			expressiveCode: {
				styleOverrides: { borderRadius: '10px',  // Slightly increased for a softer look
					borderWidth: '1px',  // Retaining the defined width for clarity
							},
				themes: ['github-dark-high-contrast', ]
			  },
		}),
	],
	i18n: {
		locales: ['en', 'es', 'fr', 'pt'],
		defaultLocale: 'en',
	},
});
