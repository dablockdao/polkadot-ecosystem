// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightImageZoom from 'starlight-image-zoom';
import starlightViewModes from 'starlight-view-modes';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: 'https://media.polkadotecosystem.com/',
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		icon(),
		sitemap({ xslURL: '/sitemap.xsl' }),
		starlight({
			plugins: [
				starlightImageZoom(),
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
					presentationModeShowSwitchInHeader: false,// not supported yet
                    presentationModeShowSwitchInTableOfContents: false, // not supported yet
				}),
				starlightSidebarTopics([
					{
						label: 'Events',
						link: '/events/',
						icon: 'heart',
						items: [
							{
								label: 'Sub0',
								collapsed: true,
								items: [
									{
										label: 'Sub0',
										link: '/events/sub0/',
										badge: { text: 'Feed' },
									},
									{
										label: 'Sub0 Reset',
										collapsed: true,
										badge: { text: 'New!', variant: 'success' },
										autogenerate: { directory: 'events/sub0/reset' }
									},
									{
										label: 'Sub0 March 2024',
										collapsed: true,
										autogenerate: { directory: 'events/sub0/2024' }
									},
								],
							},
							{
								label: 'Decoded',
								collapsed: true,
								items: [
									{
										label: 'Decoded',
										link: '/events/decoded/',
										badge: { text: 'Feed' },
									},
									{
										label: '2024',
										collapsed: true,
										autogenerate: { directory: 'events/decoded/2024' }
									},
									{
										label: '2023',
										collapsed: true,
										autogenerate: { directory: 'events/decoded/2023' }
									},
								],
							},
							{
								label: 'Web3 Summit',
								collapsed: true,
								autogenerate: { directory: 'events/web3-summit' }
							},
							{
								label: 'Miscellaneous',
								collapsed: true,
								autogenerate: { directory: 'events/miscellaneous' }
							}
						]
					},
					{
						label: 'Interviews',
						link: '/interviews/',
						icon: 'comment',
						items: [
							{
								label: 'Space Monkeys',
								collapsed: true,
								autogenerate: { directory: 'interviews/space-monkeys' }
							},
							{
								label: 'Behind the Code',
								collapsed: true,
								autogenerate: { directory: 'interviews/behind-the-code' }
							},
							{
								label: 'Dotcast',
								collapsed: true,
								autogenerate: { directory: 'interviews/dotcast' }
							},
							{
								label: 'Miscellaneous',
								collapsed: true,
								autogenerate: { directory: 'interviews/miscellaneous' }
							}
						]
					}
				])
			],
			title: 'Polkadot Ecosystem',
			editLink: {
				baseUrl: 'https://github.com/dablockdao/dot-media/tree/main/',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-face.css',
			],
			logo: {
				light: './src/assets/media5.png',
				dark: './src/assets/media2.png',
				replacesTitle: true,
			},
			components: {
				Head: './src/components/CustomHead.astro',
				Footer:'./src/components/CustomFooter.astro',
				SiteTitle: './src/components/CustomSiteTitle.astro',
				SocialIcons: './src/components/CustomSocial.astro',
				Hero: './src/components/CustomHero.astro',
				PageTitle: './src/components/CustomPageTitle.astro',
				TableOfContents: './src/components/TableOfContents.astro',
			},
			social: {
				github: 'https://github.com/dablockdao/',
				"x.com": 'https://x.com/polkadot',
				reddit: 'https://www.reddit.com/r/Polkadot/',
			},
			lastUpdated: true,
			expressiveCode: {
				styleOverrides: {
					borderRadius: '10px',
					borderWidth: '1px',
				},
				themes: ['github-dark-high-contrast'],
			},
		}),
	],
	i18n: {
		locales: ['en', 'es', 'fr', 'pt'],
		defaultLocale: 'en',
	},
});