import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://crisynr.github.io/hotel/',
  base: '/hotel',
  outDir: 'public',
  publicDir: 'static',
});