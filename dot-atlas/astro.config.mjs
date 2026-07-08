// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightViewModes from 'starlight-view-modes'
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import starlightLinksValidator from 'starlight-links-validator'
import basicSsl from '@vitejs/plugin-basic-ssl'


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
			//	starlightLinksValidator(),
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
								label: '🗳️ DAOs & Governance', collapsed: true, autogenerate: { directory: 'tools/dao-tools' }
							},
							{
								label: '🛠️ Development', collapsed: true, autogenerate: { directory: 'tools/dev' }
							},
							{
								label: '🧿 Miscellaneous', collapsed: true, autogenerate: {directory: 'tools/miscellaneous'}
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
							label: '🎮 Gaming', collapsed: true, autogenerate: { directory: 'dapps/gaming' }
						},
						{
							label: '🌉 Bridges', collapsed: true, autogenerate: { directory: 'dapps/bridges' }
						},
						{
							label: '⛽️ DePin', collapsed: true, autogenerate: { directory: 'dapps/depin' }
						},
						{
							label: '🎨 NFTs', collapsed: true, autogenerate: { directory: 'dapps/nft-marketplaces' }
						},
						{
							label: '🤖 AI', collapsed: true, autogenerate: { directory: 'dapps/ai' }
						},
						{
							label: '🏠 RWA', collapsed: true, autogenerate: { directory: 'dapps/rwa' }
						},
						{
							label: '💬 Social', collapsed: true, autogenerate: { directory: 'dapps/social' }
						},
						{
							label: '💻 Smart Contracts', collapsed: true, autogenerate: { directory: 'dapps/smart-contracts' }
						},
						{
							label: '🧿 Miscellaneous', collapsed: true, autogenerate: { directory: 'dapps/miscellaneous' }
						},
						{
							label: '⚫️ Archive', collapsed: true, autogenerate: { directory: 'dapps/archive' }
						},
					  ],
					},
										{
						label: 'Resources',
						link: '/resources/',
						icon: 'open-book',
						items: [
					  {
								label: 'How-to Guides', collapsed: true, autogenerate: { directory: 'resources/guides' }
						},
						{
								label: 'Concepts', collapsed: true, autogenerate: { directory: 'resources/concepts' }
						},
											  	{
								label: 'Media', collapsed: true, items: [
									{ label: 'Ecosystem Library', link: '/eco-library/' },
									{ label: 'Polkadot Media', link: '/resources/media/' },
									{ label: 'Lectures', autogenerate: { directory: 'resources/media/lectures' }, collapsed: true },
									{ label: 'Interviews', autogenerate: { directory: 'resources/media/interviews' }, collapsed: true },
								]
						},
						{
								label: 'Kits & Templates', collapsed: true, autogenerate: { directory: 'resources/templates' }
						},
						{
								label: 'Glossary', link: '/resources/glossary/' 
						},
						{
								label: 'Faucets', link: '/resources/faucets/' 
						},
					  ]},
					  					{
						label: 'Community',
						link: '/club/',
						icon: 'heart',
						items: [
					{
						label: '🗳️ OpenGov', collapsed: true, items: [
							{ label: '📝 OpenGov Treasury', link: '/governance/proposal-intake/' },
						]
					},
					  {
						  label: '🌱 Initiatives', collapsed: true, autogenerate: { directory: 'club/initiatives' }
					  },
					  	{
								label: '🏛️ Collectives', collapsed: true, autogenerate: { directory: 'club/collectives' }
						},
					  {
						  label: '👥 DAOs', collapsed: true, autogenerate: { directory: 'club/daos' }
					  },
					  {
						label: '💰 Bounties', collapsed: true, autogenerate: { directory: 'club/bounties' }
					  },
					  {
						  label: '💼 Orgs', collapsed: true, autogenerate: { directory: 'club/orgs' }
					  },
					{
						label: '⚫️ Archive', collapsed: true, autogenerate: { directory: 'club/archive' }
					},
					  ]},
				  ])],
			title: 'Polkadot Ecosystem',
			editLink: {
				baseUrl: 'https://github.com/dablockdao/polkadot-ecosystem/tree/main/dot-atlas/',
			  },
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-face.css',
			  ],
			logo: {
				light: './src/assets/polkadot11.png',
				dark: './src/assets/polkadot22.png',
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
	vite: {
		plugins: [
			// Self-signed HTTPS for `astro dev`. Required because CryptPad's
			// `frame-ancestors 'self' https: vector:` CSP refuses to load inside
			// an http://localhost parent. Browser will show a one-time cert warning.
			// Cast to `any` to avoid a benign dual-Vite-version type mismatch
			// between the plugin's Vite and Astro's bundled Vite — runtime is fine.
			/** @type {any} */ (basicSsl()),
			{
				// Scoped COOP/COEP for the OpenGov Proposal Intake page so the
				// CryptPad iframe (which requires cross-origin isolation for its
				// SharedArrayBuffer crypto) can load. Production headers are set
				// via vercel.json; this plugin mirrors them in `astro dev`.
				name: 'coep-proposal-intake',
				configureServer(server) {
					server.middlewares.use((req, res, next) => {
						if (req.url && req.url.startsWith('/governance/proposal-intake')) {
							res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
							res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
						}
						next();
					});
				},
			},
		],
	},
});
