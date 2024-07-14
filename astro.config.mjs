import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import { whyframe } from '@whyframe/core';
import { whyframeAstro } from '@whyframe/astro';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  vite: {
    plugins: [
    // Initialize core plugin
    whyframe({
      defaultSrc: '/frames/default' // provide our own html
    }),
    // Initialize Astro integration plugin
    whyframeAstro({
      // Render `iframe`s as Svelte components by default,
      // can be changed via `data-why="vue"`
      defaultFramework: 'svelte'
    })]
  }
});