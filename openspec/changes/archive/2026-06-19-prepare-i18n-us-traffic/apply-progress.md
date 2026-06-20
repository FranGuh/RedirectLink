# Apply Progress: Prepare i18n for US Traffic

## Mode

- Implementation mode: Standard
- Strict TDD: Disabled by `openspec/config.yaml` (`strict_tdd: false`, `rules.apply.tdd: false`)
- Delivery boundary: `size:exception` approved by maintainer for one demo-ready batch

## Completed Tasks

- [x] 1.1 Create `src/data/i18n/locales.js` with ES/EN locale constants, route pairs, and alternate helpers.
- [x] 1.2 Create `src/data/i18n/home.js` with localized profile, links, modal copy, labels, alt text, and metadata.
- [x] 1.3 Create `src/data/i18n/history.js` with localized hero, scenes, project cards, CTAs, labels, alt text, and metadata.
- [x] 1.4 Audit and remove `src/data/links.json` after confirming no runtime imports remain.
- [x] 2.1 Extend `Layout.astro` with locale-aware metadata, canonical, `hreflang`, keywords, and `ogImage` support.
- [x] 2.2 Create `LanguageToggle.astro` with equivalent ES/EN route links and `aria-current`.
- [x] 2.3 Create `HomePage.astro` shared homepage shell.
- [x] 2.4 Create `HistoryPage.astro` shared history shell.
- [x] 2.5 Modify `NavLink.astro` to receive localized content via props.
- [x] 2.6 Modify `Modal.svelte` to receive localized labels, content, and history href.
- [x] 2.7 Add compact language-toggle styles.
- [x] 3.1 Wire Spanish `/` route.
- [x] 3.2 Wire Spanish `/history` route.
- [x] 3.3 Add English `/en` route.
- [x] 3.4 Add English `/en/history` route.
- [x] 3.5 Remove obsolete `src/data/links.json` after import search and successful build.
- [x] 4.1 Run `pnpm build`; build output includes 4 static pages.
- [x] 4.2 Inspect generated HTML metadata for localized language, canonical, social, and alternates.
- [x] 4.3 Verify route toggle mappings in generated output: `/` ↔ `/en`, `/history` ↔ `/en/history`.
- [x] 4.4 Smoke-check accessibility wiring for toggle labels, `aria-current`, and localized modal close labels in source/build output.

## Verification

- Resume inspection confirmed the interrupted worktree already contained the full implementation; no unrelated files were overwritten.
- `pnpm build` succeeded again after resume.
- Astro generated `dist/index.html`, `dist/history/index.html`, `dist/en/index.html`, and `dist/en/history/index.html`.
- Generated HTML includes localized `html lang`, title/description, canonical URL, OpenGraph/Twitter metadata, and ES/EN `hreflang` alternates.
- Source search confirmed no browser-language redirect logic (`navigator.language`, `window.location`, or redirect code) was added.
- No automatic browser-language redirects were added.

## Deviations

None — implementation follows the OpenSpec design. `src/data/links.json` was deleted because import search confirmed it was unused after moving runtime content to `src/data/i18n/`.

## Remaining Work

None for apply. Ready for `sdd-verify`.
