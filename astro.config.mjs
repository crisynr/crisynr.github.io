import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://crisynr.github.io',
  base: 'hotel',
  outDir: 'public',
  publicDir: 'static',
  output: "server",
  adapter: netlify()
});
