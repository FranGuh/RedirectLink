# RedirectLink

Personal linktree for **Gustavo Francisco** — a single-page hub linking to his
projects, portfolio, social profiles, and contact, with an "About me" modal
that showcases featured projects.

## Stack

- [Astro 6](https://astro.build/) — static output, ships near-zero JavaScript.
- [Svelte 5](https://svelte.dev/) — one interactive island (the modal).
- [astro-icon](https://github.com/natemoo-re/astro-icon) + `@iconify-json/lucide`
  for icons in Astro components; [`@lucide/svelte`](https://lucide.dev/) for
  icons inside the island.
- [@vercel/analytics](https://vercel.com/analytics) via the official Astro
  integration.

## Getting started

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # build the static site into dist/
pnpm preview  # preview the production build locally
```

## Content

All content (profile, about text, links, and projects) lives in a single file:

```
src/data/links.json
```

Edit that file to update links, projects, or the about section. Icons use
Iconify Lucide slugs (e.g. `lucide:github`).

## Deployment

Deployed on [Vercel](https://vercel.com/) as a static site. Astro builds to
`dist/` with zero additional configuration; security headers and asset caching
are defined in `vercel.json`.
