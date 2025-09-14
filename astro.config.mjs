import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { expressiveCodeOptions } from './src/site.config';
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts';
import vercel from '@astrojs/vercel'; //removed /serverless
import yaml from '@rollup/plugin-yaml';

const options = {
	// Specify the theme to use or a custom theme json, in our case
	// it will be a moonlight-II theme from
	// https://github.com/atomiks/moonlight-vscode-theme/blob/master/src/moonlight-ii.json
	// Callbacks to customize the output of the nodes
	//theme: json,
	onVisitLine(node) {
		// Prevent lines from collapsing in `display: grid` mode, and
		// allow empty lines to be copy/pasted
		if (node.children.length === 0) {
			node.children = [
				{
					type: 'text',
					value: ' '
				}
			];
		}
	},
	onVisitHighlightedLine(node) {
		// Adding a class to the highlighted line
		node.properties.className = ['highlighted'];
	}
};

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false
	},
	site: 'https:dev.quiachonj.us',
	integrations: [
		expressiveCode(expressiveCodeOptions),
		tailwind({
			applyBaseStyles: false
		}),
		sitemap(),
		mdx(),
		icon(),
		alpinejs()
	],
	markdown: {
		// Disable syntax built-in syntax hightlighting from astro
		remarkPlugins: [remarkReadingTime]
	},
	prefetch: true,
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true }
	}),
	vite: {
		plugins: [yaml()]
	}
});
