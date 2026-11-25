# Developer Handoff Guide

How to run, use and extend the Mozde design system. Read the [README](../README.md) first for the overview.

## 1. Setup

Requirements: Node.js 20.19 or newer (22 recommended) and npm.

```bash
npm install
npm run storybook          # component docs, http://localhost:6006
npm run dev                # demo app with the page templates
npm run build-storybook    # static Storybook in storybook-static/
npm run build              # production build of the demo app
npm run lint               # oxlint
```

## 2. Folder map

| Path | Purpose |
|---|---|
| `src/components/` | One file per reusable component. Some files export a few closely related pieces (for example `Button.jsx` exports `PrimaryButton` and `SecondaryButton`). |
| `src/stories/` | One `*.stories.jsx` per component, plus `Introduction.mdx` and `Theming.mdx`. |
| `src/theme/theme.css` | The design tokens: Light and Dark values as CSS variables. |
| `src/theme/ThemeToggle.jsx` | Light/Dark switch used by the demo app. |
| `src/*Page.jsx` | Page templates built from components (Home, Article, News Listing, Two Column). |
| `src/data/` | Sample content used by the templates. |
| `.storybook/preview.jsx` | Loads Tailwind and the tokens, adds the toolbar Theme switch, and wraps stories in a router. |

## 3. Design tokens

All color is defined once in `src/theme/theme.css` as CSS variables. Light values are the default; Dark values apply when `<html data-theme="dark">` is set.

| Token | Use |
|---|---|
| `--black-101010` | Primary text and filled controls |
| `--text-muted` | Secondary text |
| `--bordergray-d5d5d5` | Default borders and dividers |
| `--white-ffffff` | Page and control surfaces |
| `--lightgray-f5f5f5`, `--mediumgray-e7e7e7` | Subtle and hover surfaces |
| `--darkgray-2b2b2b` | Focus rings, selected toggles, footer surface |
| `--errorred-910a2d` | Errors and required markers |
| `--text-on-footer` | Text on the footer surface |
| `--border-control` | Borders on form controls |

Variable names describe the Light value, so `--black-101010` becomes near-white in Dark mode. That is intentional: components reference the role, not a literal color.

Use tokens in Tailwind arbitrary values:

```jsx
<p className="text-[var(--black-101010)] border-[var(--bordergray-d5d5d5)]">...</p>
```

Rules:

1. Never write a raw hex color in a component.
2. Add new colors to both the Light and Dark blocks of `theme.css`.
3. Images and logos do not change with the theme.

## 4. Theming

- **In Storybook:** use the Theme switch in the toolbar.
- **In the app:** render `<ThemeToggle />`. It sets `data-theme` on `<html>`, saves the choice in `localStorage` under `mozde-theme`, and uses the visitor's system preference on first visit.

## 5. Using components

Import from the component file and pass props. Defaults make every component render without arguments.

```jsx
import { PrimaryButton, SecondaryButton } from "./components/Button";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";

<TextInput label="Email" required helperText="We never share it" />
<Checkbox label="Subscribe" checked={value} onChange={() => setValue(!value)} />
<PrimaryButton onClick={save}>Save</PrimaryButton>
```

Conventions followed across the library:

- Function components with default props, and a `className` escape hatch on most of them.
- Form controls render a real, visually hidden input with a styled sibling, so keyboard and screen reader behavior is native.
- Labels are linked to inputs with `useId`, so IDs never collide.
- Focus is visible on every interactive element.
- Components that use links assume a React Router context (the app provides it; Storybook wraps stories in a `MemoryRouter`).

## 6. Adding a component

1. Create `src/components/YourComponent.jsx` using tokens for color and Tailwind for layout.
2. Create `src/stories/YourComponent.stories.jsx`:

```jsx
import YourComponent from "../components/YourComponent";

export default {
  title: "Components/Your Component",
  component: YourComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: { description: { component: "One sentence on what it is and when to use it." } },
  },
};

export const Default = { args: {} };
```

3. Add a story for each state (hover, disabled, invalid, empty, long content).
4. Check it in Light and Dark with the Theme switch, and read the Accessibility panel.
5. Run `npm run lint`.

## 7. Accessibility

The Storybook a11y addon is installed and reports on every story. It is currently set to report only (`a11y: { test: "todo" }` in `.storybook/preview.jsx`), so violations are visible but do not fail a test run. Move it to `"error"` once the remaining findings are cleared.

## 8. Known limitations

- Brand fonts and the original icon font are not bundled. The library uses system fonts and a small inline-SVG icon set (`src/components/Icon.jsx`).
- Logos and photography are placeholders.
- Chart components are lightweight SVG primitives, not a full charting library.
- Sample content is fictional.

## 9. Figma to code mapping

Components in Storybook follow the sections of the Figma components page: buttons and links, form elements, typography, iconography, tables and charts, banners and carousels, search and results, layout, sitemap, notifications. When a component changes in Figma, update the matching file in `src/components/` and its story, keeping token names identical.
