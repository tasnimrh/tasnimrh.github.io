import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address. Change it here if a custom domain is added later.
export default defineConfig({
  site: 'https://tasnimrh.github.io',
  integrations: [sitemap()],
});
