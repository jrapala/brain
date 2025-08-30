// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Juliette\'s Second Brain',
			editLink: {
				baseUrl: "https://github.com/jrapala/brain/edit/main"
			},
			sidebar: [
				{
					label: 'Home',
					link: "/",
				},
				{
					label: 'Aviation',
					items: [
						{ label: 'Basics', slug: 'aviation/basics' },
					],
				},
			],
		}),
	],
});
