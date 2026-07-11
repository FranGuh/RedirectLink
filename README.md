# RedirectLink

Language / Idioma: **English** | [Español](README.es.md)

![RedirectLink Banner](docs/banner.jpg)

Personal linktree and navigation hub for **Gustavo Francisco** — a fast, lightweight, and modern single-page site listing projects, social links, and professional experience. Equipped with an interactive "About me" modal and production-ready internationalization (i18n).

## 🚀 Features

- **Blazing Fast**: Built with Astro 6, shipping virtually zero JS to the client.
- **Interactive Islands**: Svelte 5 handles interactive UI elements, such as the "About me" modal.
- **Multilingual Support (i18n)**:
  - English (EN) and Spanish (ES) routing.
  - Automatic browser-language soft detection.
  - Localized routes: `/` for Spanish (default) and `/en/` for English.
  - Persistent manual language preferences saved in `localStorage`.
- **Dynamic Content**: Single-source-of-truth configuration files for easy maintenance of links and copy.
- **Analytics**: Pre-integrated with Vercel Analytics for tracking visitor engagements.
- **Production-Ready Deployment**: Configured for Vercel with optimized security headers and asset caching.

## 🛠️ Tech Stack

- **Framework**: [Astro 6](https://astro.build/) (Static Site Generation)
- **UI Components**: [Svelte 5](https://svelte.dev/)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) & `@iconify-json/lucide` / `@iconify-json/simple-icons` for static elements; `@lucide/svelte` for interactive components.
- **Hosting & Analytics**: [Vercel](https://vercel.com/) & [@vercel/analytics](https://vercel.com/analytics).

## 📁 Project Structure

```text
├── .agents/          # Agent instructions and workspace metadata
├── openspec/         # Specification-driven development tracking
├── public/           # Static assets (favicons, images)
└── src/
    ├── components/   # Astro and Svelte components
    ├── data/         # Content and translation data
    │   ├── i18n/     # Multilingual translation dictionaries (EN/ES)
    │   └── links.json# Profile config, links, and project lists
    ├── layouts/      # Main HTML page templates
    ├── pages/        # File-based routing (including /en for English)
    ├── styles/       # Styling system (Vanilla CSS)
    └── utils/        # Helper modules and utilities
```

## ⚙️ Getting Started

First, ensure you have [pnpm](https://pnpm.io/) installed.

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Development Server
Start the local development server with hot-module replacement:
```bash
pnpm dev
```

### 3. Production Build
Build the optimized static site into the `dist/` directory:
```bash
pnpm build
```

### 4. Local Preview
Preview the production build locally:
```bash
pnpm preview
```

## ✏️ Customization

All personal details, project data, and redirection paths are centralized.
- **Links & Bio**: Modify `src/data/links.json` to change the profile details, social icons, projects list, and redirects.
- **Translations**: Text strings for pages and components are located in `src/data/i18n/`.

## 🌐 Deployment

The project is configured for seamless deployment as a static site on **Vercel**. Custom caching strategies, redirects, and security headers (such as CSP, X-Frame-Options, and HSTS) are defined in `vercel.json`.
