# Proposal: Prepare i18n for US Traffic

## Intent

RedirectLink has measurable US traffic but currently presents a mostly Spanish experience. This change adds stable English routes and localized metadata while preserving existing Spanish URLs, so English-speaking visitors get a shareable, SEO-friendly experience without breaking current links or analytics continuity.

## Scope

### In Scope
- Add English static routes at `/en` and `/en/history`.
- Preserve `/` and `/history` as the Spanish routes.
- Introduce ES/EN dictionaries for profile, links, modal copy, history content, labels, alt text, and page metadata.
- Emit localized title, description, OpenGraph/Twitter metadata, canonical URLs, and `hreflang` alternates for equivalent routes.
- Add a manual ES/EN toggle between route equivalents.

### Out of Scope
- Automatic browser-language redirects in v1.
- Backend services, authentication, or user accounts.
- CMS, database-backed content, or complex state management.

## Capabilities

### New Capabilities
- `static-i18n-routing`: Covers route-based ES/EN pages, localized copy, metadata, `hreflang`/canonical behavior, and manual locale switching.

### Modified Capabilities
- None; `openspec/specs/` currently has no existing capability specs.

## Approach

Use static route-based localization: keep Spanish as the existing public route set and add English route files under `/en`. Move copy and metadata into lightweight dictionaries, pass localized content into Astro pages/components and the Svelte modal island, and keep Vercel Analytics path-based measurement intact. Avoid redirects until analytics justify the SEO and UX tradeoff.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modified | Spanish homepage consumes localized dictionary and metadata. |
| `src/pages/history.astro` | Modified | Spanish history page consumes localized story content and metadata. |
| `src/pages/en/index.astro` | New | English homepage route. |
| `src/pages/en/history.astro` | New | English history route. |
| `src/layouts/Layout.astro` | Modified | Locale-aware `lang`, canonical, alternates, and social metadata. |
| `src/data/` | Modified/New | Locale dictionaries replace hardcoded Spanish content. |
| `src/components/Modal.svelte` | Modified | Receives localized labels and CTA text. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Incorrect canonical or `hreflang` mappings reduce SEO value. | Med | Specify exact route pairs and inspect generated HTML. |
| Partial translation creates inconsistent English UX. | Med | Include both homepage and history in v1 scope. |
| No automated tests exist. | Med | Use `pnpm build` plus manual route and metadata checks. |

## Rollback Plan

Remove `/en` pages, dictionaries, toggle UI, and locale metadata changes; restore hardcoded Spanish content in current pages/components. Existing `/` and `/history` must remain functional throughout, so rollback should not require route redirects.

## Dependencies

- Existing Astro static output and Vercel deployment.
- `pnpm build` as the baseline verification command.
- English translations for current Spanish copy.

## Success Criteria

- [ ] `/`, `/history`, `/en`, and `/en/history` build as static pages.
- [ ] Spanish URLs remain unchanged and canonical to themselves.
- [ ] English routes expose localized copy, metadata, canonical URLs, and `hreflang` alternates.
- [ ] Manual ES/EN toggle links each page to its equivalent route.
