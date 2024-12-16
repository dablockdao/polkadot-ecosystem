// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import starlightViewModes from 'starlight-view-modes';



// https://astro.build/config
export default defineConfig({
	site: 'https://news.polkadotecosystem.com/',
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		logLevel: 'error', 
		resolve: {
		  alias: {
			'~assets': '/src/assets',
		  }
		},
	  },
	build: {
		concurrency: 4,
	  },
	integrations: [
		sitemap(),
		starlight({
			plugins: [
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
				starlightBlog({
				authors: {
					LV: {
					  name: 'LV',
					  title: 'DOT Lover',
					  picture: 'https://avatars.githubusercontent.com/u/8305066?v=4', 
					  url: 'https://x.com/KusamaNFT',
					},
				  },
				postCount: 5,
				recentPostCount: 5,
				prefix: 'news',
				title: {
					en: 'Latest News',
					fr: 'News',
					es: 'Noticias',
					pt: 'Notícias',
		},})],
			title: 'Polkadot Ecosystem',
			editLink: {
				baseUrl: 'https://github.com/dablockdao/polkadotecosystem/edit/main/docs/',
			  },
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-face.css',
			  ],
			logo: {
				light: './src/assets/news1.png',
				dark: './src/assets/news2.png',
				replacesTitle: true,
			},
			components: {
				Head: './src/components/CustomHead.astro',
				SiteTitle: './src/components/CustomSiteTitle.astro',
				SocialIcons: './src/components/CustomSocial.astro',
				Hero: './src/components/CustomHero.astro',
				PageTitle: './src/components/CustomPageTitle.astro',
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
			  sidebar: [
				{
				  label: 'Guides',
				  autogenerate: { directory: 'guides' },
				  collapsed: true,
				},
				{
					label: 'Lists',
					autogenerate: { directory: 'lists' },
					collapsed: true,
				  },
			  ],
		}),
	],
	i18n: {
		locales: ['en', 'es', 'fr', 'pt'],
		defaultLocale: 'en',
	},
});
