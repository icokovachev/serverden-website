// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const site = process.env.SITE;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),

  integrations: [mdx(), ...(site ? [sitemap()] : [])],

  vite: {
    plugins: [tailwindcss()]
  }
});
