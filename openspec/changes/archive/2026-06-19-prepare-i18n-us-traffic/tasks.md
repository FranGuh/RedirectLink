# Tasks: Prepare i18n for US Traffic

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 450-650 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 data/SEO → PR 2 pages/components → PR 3 verification |
| Delivery strategy | exception-ok (`size:exception`) |
| Chain strategy | size-exception |

Decision needed before apply: Resolved — maintainer-approved `size:exception`
Chained PRs recommended: Yes
Chain strategy: size-exception
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Locale data and metadata | PR 1 | Dictionaries, `Layout.astro` SEO props. |
| 2 | Static localized routes and shared UI | PR 2 | `/en` routes, page shells, modal/nav/toggle; depends on PR 1. |
| 3 | Demo verification and cleanup | PR 3 | Remove obsolete data if safe; inspect generated HTML. |

## Phase 1: Locale Data Foundation

- [x] 1.1 Create `src/data/i18n/locales.js` with ES/EN locale constants, `home` and `history` route pairs, and alternate helpers.
- [x] 1.2 Create `src/data/i18n/home.js` with localized profile, links, modal copy, labels, alt text, and metadata.
- [x] 1.3 Create `src/data/i18n/history.js` with localized hero, scenes, project cards, CTAs, labels, alt text, and metadata.
- [x] 1.4 Audit `src/data/links.json` imports; remove only after runtime imports move to i18n modules.

## Phase 2: Metadata and Shared Components

- [x] 2.1 Extend `src/layouts/Layout.astro` props for `lang`, `canonicalPath`, `alternates`, `keywords`, and `ogImage`; emit canonical and `hreflang` tags.
- [x] 2.2 Create `src/components/LanguageToggle.astro` with ES/EN equivalent-route links and `aria-current`.
- [x] 2.3 Create `src/components/HomePage.astro` using localized home data, `ImgContainer`, `NavLink`, `Modal`, and `LanguageToggle`.
- [x] 2.4 Create `src/components/HistoryPage.astro` using localized history data, `TypewriterHeading`, route-equivalent CTAs, and `LanguageToggle`.
- [x] 2.5 Modify `src/components/NavLink.astro` to receive localized link content via props instead of importing `src/data/links.json`.
- [x] 2.6 Modify `src/components/Modal.svelte` to receive localized labels, about content, and history href; remove hardcoded Spanish strings.
- [x] 2.7 Add compact language toggle styles to `src/styles/global.css` consistent with existing link/history visuals.

## Phase 3: Route Wiring

- [x] 3.1 Modify `src/pages/index.astro` to render Spanish `HomePage` with `/` canonical, Spanish metadata, and alternates to `/en`.
- [x] 3.2 Modify `src/pages/history.astro` to render Spanish `HistoryPage` with `/history` canonical, Spanish metadata, and alternates to `/en/history`.
- [x] 3.3 Create `src/pages/en/index.astro` to render English `HomePage` with `/en` canonical and alternates to `/`.
- [x] 3.4 Create `src/pages/en/history.astro` to render English `HistoryPage` with `/en/history` canonical and alternates to `/history`.
- [x] 3.5 Remove `src/data/links.json` only if `pnpm build` and import search confirm it is unused.

## Phase 4: Verification and Demo Readiness

- [x] 4.1 Run `pnpm build` and confirm static output includes `/`, `/history`, `/en`, and `/en/history`.
- [x] 4.2 Inspect generated HTML for localized `lang`, title, description, canonical, OpenGraph/Twitter, and `hreflang` tags.
- [x] 4.3 Manually verify toggle paths: `/` ↔ `/en` and `/history` ↔ `/en/history`; confirm no browser-language redirect occurs.
- [x] 4.4 Keyboard-smoke the toggle and modal labels; verify ES/EN copy is demo-ready.
