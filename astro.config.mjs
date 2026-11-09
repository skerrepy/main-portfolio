import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://omarhanafi.dev',
  adapter: cloudflare({ imageService: 'compile', prerenderEnvironment: 'node' }),
  session: false,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr', nl: 'nl' } },
  })],
});

