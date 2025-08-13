import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: ['@react-email/render']
		}
	},
	ssr: {
		external: ['@react-email/render']
	}
});
