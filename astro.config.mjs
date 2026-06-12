// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

import cloudflare from "@astrojs/cloudflare";

// Server-side rendering: every request is rendered on the Node server.
// The React marketing app is rendered to HTML on the server (client:load
// hydrates it in the browser for interactivity — dropdowns, scroll pins,
// the music toggle). Assets live as separate static files under public/.
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [react()],
  server: { port: 4321, host: true },
  vite: {
    // GSAP ships a CJS bundle; pre-bundle it so the React island imports cleanly.
    ssr: { noExternal: ['gsap'] },
  },
});