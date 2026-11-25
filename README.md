# Mozde Design System

An enterprise-style design system for a corporate newsroom and intranet portal: designed in Figma, translated into a reusable React component library, and documented in Storybook with Light and Dark themes.

> Mozde is a fictional product name used for this portfolio project.

## At a glance

| | |
|---|---|
| **What it is** | A token-driven React + Tailwind component library with page templates built from it |
| **Scale** | 32 components, 31 Storybook story files, 4 full page templates |
| **Theming** | Light and Dark modes driven by CSS variables, with a live theme switch |
| **Documentation** | Storybook (interactive docs and controls) and a [developer handoff guide](docs/DEVELOPER_GUIDE.md) |
| **Design source** | Figma file with a Light/Dark color collection and a documented component library |

## Live links

- **Storybook (live component docs):** https://pbarick.github.io/mozde-design-system/
- **Developer handoff guide:** [docs/DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md)
- **Figma design file:** view-only link available on request

## Where to find everything

| What | Where |
|---|---|
| **Live component docs** | [Storybook](https://pbarick.github.io/mozde-design-system/) |
| **React components** (32, reusable) | [`src/components/`](src/components) |
| **Storybook stories** (one per component) | [`src/stories/`](src/stories) |
| **Design tokens** (Light and Dark) | [`src/theme/theme.css`](src/theme/theme.css) |
| **Page templates** built from the components | [`src/HomePage.jsx`](src/HomePage.jsx), [`ArticlePage.jsx`](src/ArticlePage.jsx), [`NewsListingPage.jsx`](src/NewsListingPage.jsx), [`TwoColumnPage.jsx`](src/TwoColumnPage.jsx) |
| **Developer handoff guide** | [`docs/DEVELOPER_GUIDE.md`](docs/DEVELOPER_GUIDE.md) |
| **Figma design file** | View-only link available on request |

## The problem

Design systems drift. The Figma file says one thing, the code says another, and every new screen re-implements the same button, form field or card. Colors get hard-coded, dark mode becomes a rewrite, and developers have no single place to see what already exists.

## What I did

1. **Modernized the Figma library.** Organized the components page into clear sections (buttons, forms, typography, iconography, tables and charts, banners and carousels, search, layout) and defined Light and Dark color variables.
2. **Turned the design into a token layer.** Every color is a CSS variable in [`src/theme/theme.css`](src/theme/theme.css). Components never use raw hex values, so Dark mode works everywhere from one attribute (`data-theme="dark"`).
3. **Built a reusable React component library.** Small, composable components with sensible defaults and props, styled with Tailwind and the token variables.
4. **Documented every component in Storybook.** Each component has states (default, hover, disabled, invalid and so on), controls, an auto-generated docs page, and an accessibility panel.
5. **Assembled real page templates** (home, article, news listing with working filters, two-column) from the same components to prove the library holds together.
6. **Wrote a developer handoff guide** covering setup, structure, tokens, theming and how to add a component.

## What's in the library

| Area | Components |
|---|---|
| **Actions** | Primary and secondary buttons, tertiary links |
| **Forms** | Text input, textarea, select, checkbox, radio and radio group, toggle, file upload |
| **Typography and icons** | Headings H1 to H6, body text, link variants, list items, alerts, icon set |
| **Data** | Table, line chart, area chart, donut chart |
| **Navigation** | Header, footer, sidebar and accordion nav, breadcrumb, sitemap, back to top |
| **Content** | Page banner, card, carousel, hero carousel, news cards and filters, social gallery, frequently used links |
| **Search and notifications** | Search bar, search result, notification panel |
| **Layout** | One, two and four column layouts |

## Tech stack

React 19, Vite, Tailwind CSS 4, React Router, Storybook 10 (docs, a11y, Vitest and Playwright test integration).

## Run it locally

```bash
npm install
npm run storybook      # component docs at http://localhost:6006
npm run dev            # the demo app
npm run build-storybook
```

## Project structure

```
src/
  components/    reusable components (one file per component)
  stories/       Storybook stories and docs pages
  theme/         theme.css (Light/Dark tokens) and ThemeToggle
  data/          sample content for the page templates
  *Page.jsx      page templates assembled from components
.storybook/      Storybook config (theme switch, router context)
docs/            developer handoff guide
```

## Notes

- All names, emails, phone numbers and content in the samples are fictional placeholders.
- Logos and photography are placeholders; swap in your own assets.
