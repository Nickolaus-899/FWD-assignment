import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const dev = process.argv.includes('dev');
export default defineConfig({
	base: '/FWD',
	plugins: [sveltekit()]
});
