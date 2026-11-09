# Omar Hanafi · Portfolio

Astro and TypeScript portfolio for a developer and data analyst based in Brussels. English is served at `/`, French at `/fr/` and Dutch at `/nl/`.

## Development

Use Node.js 24 LTS or a supported newer release.

```sh
npm ci
npm run dev
npm run check
npm run deploy:check
npm run preview
```

Edit interface text in `src/content/copy.ts` and `src/content/contact.ts`, project details in `src/content/projects.ts` and work history in `src/content/experience.ts`. Keep each entry available in all three languages. Project screenshots in `src/assets` are resized and converted to WebP by Astro.

## Deployment

The Astro Cloudflare adapter prerenders the portfolio and serves `/api/contact/` on Workers. Astro compiles the WebP images at build time. Edit `wrangler.jsonc` for Worker settings and let Astro generate the deploy configuration. `npm run deploy:check` builds the site and checks the bundle without uploading it. `npm run preview` runs the build in Cloudflare's local Workers runtime.

Copy `.dev.vars.example` to `.dev.vars` for local development. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` to enable form delivery. Use an address on a domain verified in Resend, such as `Portfolio <contact@your-verified-domain.example>`.

For the first release, authenticate with Wrangler and deploy with both secrets from an ignored file containing the production values:

```sh
npx wrangler login
npm run deploy -- --secrets-file .dev.vars.production
```

For later releases, run `npm run deploy`. Use `npx wrangler secret put RESEND_API_KEY` or `npx wrangler secret put CONTACT_FROM_EMAIL` to update those values separately. Attach `omarhanafi.dev` as a Custom Domain in the Worker's **Settings → Domains & Routes** when ready to switch traffic. This is the production origin used in canonical URLs and the sitemap.
