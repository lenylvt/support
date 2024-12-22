import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Utilisation du preprocesseur Vite
	preprocess: vitePreprocess(),

	kit: {
		// Configuration pour utiliser l'adaptateur Cloudflare
		adapter: adapter()
	}
};

export default config;