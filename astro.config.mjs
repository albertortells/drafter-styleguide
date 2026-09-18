// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Guia d'estils de Drafter",
			defaultLocale: 'root',
			locales: {
				root: { label: 'Català', lang: 'ca' },
			},
			sidebar: [
				{
					label: 'Primers passos',
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{
					label: 'Components',
					items: [{ autogenerate: { directory: 'components' } }],
				},
			],
		}),
	],
});
