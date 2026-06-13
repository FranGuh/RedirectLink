import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://redirectlink.vercel.app',
  integrations: [svelte(), icon()],
});
