# Design: Prepare i18n for US Traffic

## Technical Approach

Keep Astro static output and add explicit route-based locale entry points: `/` and `/history` stay Spanish, while `/en` and `/en/history` render English. Move localized homepage, modal, history, labels, alt text, and metadata into shared data modules, then pass the selected locale into reusable page sections. No browser-language redirect is introduced in v1; navigation between languages is a normal link toggle.

## Architecture Decisions

| Topic | Choice | Alternatives considered | Rationale |
|------|--------|-------------------------|-----------|
| Routing | Manual Astro routes: existing Spanish pages plus `src/pages/en/index.astro` and `src/pages/en/history.astro` | Astro built-in i18n or redirects | Preserves `/` and `/history` exactly, avoids redirect behavior, and keeps route output obvious for demo inspection. |
| Content model | Create shared typed JS modules under `src/data/i18n/` for locales, route metadata, home content, and history content | Keep `links.json` and add conditionals in pages | Current copy is split between JSON, pages, layout, and Svelte. Shared modules avoid duplicated copy and make equivalent route rendering predictable. |
| Page reuse | Extract reusable `HomePage.astro` and `HistoryPage.astro` components that receive `locale` | Duplicate full markup in four route files | Keeps route files small while avoiding duplicated homepage/history markup. |
| Metadata | Extend `Layout.astro` props with `lang`, `canonicalPath`, `alternates`, `keywords`, and optional social image | Compute all metadata from `Astro.url.pathname` only | Localized canonical and `hreflang` require explicit equivalent paths, not only current path. |
| Toggle | Add an accessible language toggle component rendered on home and history pages | Auto-detect browser language | Spec forbids automatic redirects; a link toggle is static, measurable, and user-controlled. |

## Data Flow

```text
Route file (/en/history) ── locale ──→ data/i18n dictionaries
        │                              │
        ├──→ Layout metadata ← route equivalents
        └──→ reusable page component ──→ Astro components / Svelte modal props
```

Vercel Analytics remains global in `Layout.astro`, so locale usage is measured by path (`/en` vs `/`).

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/data/i18n/locales.js` | Create | Locale constants, labels, route pairs, helper to get alternate URLs. |
| `src/data/i18n/home.js` | Create | ES/EN profile, links, about, projects, labels, alt text, and homepage metadata. Replaces `links.json` as the runtime content source. |
| `src/data/i18n/history.js` | Create | ES/EN history hero, scenes, project cards, CTAs, labels, alt text, and metadata. |
| `src/pages/index.astro` | Modify | Render Spanish `HomePage` with Spanish metadata and `/` canonical. |
| `src/pages/history.astro` | Modify | Render Spanish `HistoryPage` with Spanish content and `/history` canonical. |
| `src/pages/en/index.astro` | Create | Render English `HomePage` with `/en` canonical. |
| `src/pages/en/history.astro` | Create | Render English `HistoryPage` with `/en/history` canonical. |
| `src/components/HomePage.astro` | Create | Shared homepage shell using `ImgContainer`, `NavLink`, and language toggle. |
| `src/components/HistoryPage.astro` | Create | Shared history markup using `TypewriterHeading` and localized history content. |
| `src/components/LanguageToggle.astro` | Create | Accessible ES/EN equivalent-route links; uses `aria-current` for current locale. |
| `src/components/NavLink.astro` | Modify | Accept localized content via props instead of importing `links.json` directly. |
| `src/components/Modal.svelte` | Modify | Accept `labels` and localized history href; remove hardcoded Spanish labels. |
| `src/layouts/Layout.astro` | Modify | Accept locale-aware SEO props, emit canonical and `hreflang` alternates. |
| `src/styles/global.css` | Modify | Add compact toggle styles consistent with existing link/history visual language. |
| `src/data/links.json` | Delete or stop importing | Superseded by locale modules; removal is preferred after confirming no imports remain. |

## Interfaces / Contracts

```js
// locale module shape
export const locales = { es: { lang: 'es', base: '/' }, en: { lang: 'en', base: '/en' } };
export const routes = {
  home: { es: '/', en: '/en' },
  history: { es: '/history', en: '/en/history' },
};

// Layout props
{ title, description, lang, canonicalPath, alternates, keywords, ogImage }
```

`Modal.svelte` receives build-time trusted localized content only; existing `{@html}` remains limited to hand-authored dictionary paragraphs.

## Testing Strategy

| Layer | What to Test | Approach |
|-------|--------------|----------|
| Build | All four static routes compile | Run `pnpm build`. |
| Manual route inspection | `/`, `/history`, `/en`, `/en/history` render correct language and links | Run `pnpm preview` and inspect pages. |
| Manual metadata inspection | `lang`, canonical, `hreflang`, title, description, OG/Twitter are localized | View generated `dist/**/*.html` or browser page source. |
| Accessibility smoke check | Toggle labels, modal close labels, internal links, reduced-motion typewriter remain usable | Keyboard/manual inspection. |

## Migration / Rollout

No data migration required. Roll out as static pages in one change. Existing Spanish URLs remain live throughout. Rollback removes `/en` route files, toggle, and locale data, then restores direct Spanish content imports.

## Open Questions

- None.
