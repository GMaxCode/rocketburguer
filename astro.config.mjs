import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rocketburger.com.br',
  integrations: [tailwind()],
});
