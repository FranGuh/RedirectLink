## Exploration: prepare-i18n-us-traffic

### Current State
RedirectLink is an Astro 6 static site with a Svelte 5 modal island and Vercel Analytics. The homepage lives at `/`, the story page lives at `/history`, and content is mostly Spanish. The linktree content is centralized in `src/data/links.json`, but `src/pages/index.astro`, `src/pages/history.astro`, `src/layouts/Layout.astro`, and `src/components/Modal.svelte` still contain Spanish strings and metadata directly in code.

Routing is currently non-localized: `/` and `/history` are the only app routes. `Layout.astro` hardcodes `<html lang="es">`, computes canonical URLs from the current path, and emits OpenGraph/Twitter metadata from per-page props. There is no sitemap integration and no `hreflang` support today. `@vercel/analytics` is active globally through the layout.

### Affected Areas
- `astro.config.mjs` — would define Astro i18n routing if route-based locales are chosen; currently only sets `site` and integrations.
- `src/layouts/Layout.astro` — must accept locale-aware `lang`, canonical, alternate URLs, keywords, and social metadata.
- `src/pages/index.astro` — homepage metadata, background image alt text, and locale routing would need to be driven by dictionaries or localized routes.
- `src/pages/history.astro` — largest translation surface; narrative content and internal links are hardcoded in Spanish.
- `src/data/links.json` — good candidate to split or reshape into locale dictionaries for profile, links, about, projects, and labels.
- `src/components/NavLink.astro` — already consumes data and should stay mostly locale-agnostic if passed localized content.
- `src/components/Modal.svelte` — receives about/projects from data, but has hardcoded Spanish labels such as close labels, history CTA, and section title.
- `src/components/Profile.astro`, `src/components/LinkButton.astro`, `src/components/ImgContainer.astro` — minor impact through localized text/alt props only.
- `vercel.json` — redirects may be considered, but should be handled carefully to avoid breaking existing public links and analytics history.

### Approaches
1. **Manual dictionaries with existing routes (`/`, `/history`)** — Keep Spanish as the current route and select strings from local dictionaries or browser state only where needed.
   - Pros: lowest routing risk; existing links remain unchanged; minimal code movement.
   - Cons: weak SEO for English because there are no stable English URLs; browser-language content swapping can confuse crawlers and canonical metadata.
   - Effort: Low

2. **Route-based locales without redirecting existing URLs** — Add `/en` and `/en/history` for English, keep `/` and `/history` as Spanish aliases or canonical Spanish routes, and use dictionaries shared by both route sets.
   - Pros: strong SEO foundation; stable shareable English URLs; preserves existing Spanish URLs; works well with static output and Vercel Analytics path reporting.
   - Cons: introduces duplicated route entry points or dynamic localized page generation; requires careful canonical and `hreflang` metadata.
   - Effort: Medium

3. **Astro built-in i18n with prefixed locales (`/es`, `/en`) and root redirect** — Configure `i18n` with locale prefixes and redirect `/` to the default locale.
   - Pros: framework-supported routing; clean locale model; scales better if more languages are added.
   - Cons: breaks or redirects existing `/` and `/history` behavior unless aliases are preserved; root redirects add complexity for a linktree where link stability matters.
   - Effort: Medium/High

4. **Browser-language redirect at root** — Detect `Accept-Language` or `navigator.language` and redirect US/English visitors to `/en`.
   - Pros: English visitors can land on English automatically.
   - Cons: risky for SEO and user control; static-only hosting limits server-side negotiation; client redirects can distort analytics and cause surprising behavior for shared links.
   - Effort: Medium

5. **Manual language toggle only** — Add a visible ES/EN toggle linking between equivalent localized routes.
   - Pros: user-controlled, accessible, static, analytics-friendly, and easy to explain.
   - Cons: does not automatically personalize by browser language; depends on users noticing the toggle.
   - Effort: Low/Medium

### Recommendation
Use route-based localized URLs with dictionaries, preserve the existing Spanish URLs, and add English routes at `/en` and `/en/history`. Keep `/` and `/history` working to avoid breaking current links, make them the Spanish canonical URLs initially, and add `hreflang` alternates between Spanish and English equivalents. Add a manual ES/EN toggle rather than an automatic browser-language redirect for the first iteration.

This keeps the site static, fast, and maintainable: all copy can move into small locale dictionaries, Astro continues to prerender pages, the Svelte modal remains a small island that receives already-localized props, and Vercel Analytics can measure locale usage by route path (`/en` vs `/`). Browser-language redirect can be reconsidered later only if analytics prove enough English traffic and the SEO tradeoff is acceptable.

### Risks
- Translating only the homepage while leaving `/history` Spanish would create an inconsistent US visitor experience.
- Canonical mistakes could make English pages invisible or cause duplicate-content signals.
- `hreflang` must map exact equivalent URLs (`/` ↔ `/en`, `/history` ↔ `/en/history`) and include sensible language tags such as `es` and `en-US` or `en`.
- OpenGraph/Twitter titles and descriptions must be localized per route; otherwise shared English URLs may still preview Spanish copy.
- Introducing root redirects could break the linktree’s current public URL expectations and complicate analytics, so redirects should not be part of v1.
- No automated test runner exists; verification would rely on `pnpm build` and manual route/metadata inspection.

### Ready for Proposal
Yes. The next SDD phase should create a proposal for static route-based i18n with Spanish preserved at existing URLs, English added under `/en`, dictionary-driven copy, localized metadata, `hreflang` alternates, a manual language toggle, and `pnpm build` as the baseline verification command.
