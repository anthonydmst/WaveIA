import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [alpine()],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: true
  }
});
