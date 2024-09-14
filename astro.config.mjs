// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({

  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), react()]
});