# Mozde React App

This folder contains pages from your design system rebuilt as real React
components, rebranded from "Mazda" to the fictional placeholder "Mozde" for
safe portfolio / demo use. Real car model names and real news-outlet content
have also been swapped for generic placeholders, for the same reason.

## What's inside

### Shared components
- src/components/Header.jsx    — top utility nav + main header bar with logo and primary nav
- src/components/Footer.jsx    — full site footer, link columns, IT support card, legal bar

### Two Column Page
- src/components/Sidebar.jsx   — sidebar nav items, collapsible accordion nav, filter accordions
- src/components/Breadcrumb.jsx — breadcrumb trail (Home > Level 1 > Level 2 > Page)
- src/TwoColumnPage.jsx         — the page itself, assembles all the above pieces together

### Home Page
- src/components/HeroCarousel.jsx       — full-width image carousel with dots + prev/next arrows
- src/components/FrequentlyUsedLinks.jsx — "Your most frequently-used links" 3-column grid
- src/components/NewsSection.jsx        — company news + newswire two-column card grid (NewsCard supports an `href` or `onClick` prop to link to ArticlePage)
- src/components/SocialMediaGallery.jsx — filterable social media thumbnail gallery
- src/HomePage.jsx                      — the page itself, assembles all the above pieces together

### Article Page (News Details)
- src/ArticlePage.jsx — single full article view: date/author, headline, intro,
  an optional "By / To" memo block, body paragraphs, a closing note, and tags.
  Reuses Header, Footer, the sidebar nav items, and the breadcrumb trail for
  consistency. Pulled from the real "Blog content-News Details" Figma frame;
  sample names, emails and event details are genericized placeholders.

### News Listing Page (filterable)
- src/components/NewsListingFilters.jsx — sidebar of collapsible filter groups
  (dates, communication type, categories with a search box, departments,
  product line), each with checkboxes and a count. Holds its own selection
  state and reports changes up via onFilterChange. Includes "Clear All
  Filters" once anything is checked.
- src/components/NewsListingCard.jsx    — large article preview card (date,
  department, title, snippet, optional corner label like "All Employees").
  Accepts an href to link through to ArticlePage.
- src/NewsListingPage.jsx               — the page itself: breadcrumb, banner,
  filter sidebar + article grid. Filtering is real and client-side — checking
  a filter narrows the visible articles by matching each article's tags
  against the selected filter values. Comes with genericized sample filter
  groups and sample articles so it's fully interactive out of the box; swap
  in real data via the articles and filterGroups props. Pulled from the real
  "Mazda News Latest-expanded data" Figma frame.

## How to use this

These are plain React components using Tailwind-style utility classes for
styling. They are not yet wired into a runnable project (no package.json,
no build tool) — that next step needs a proper code environment such as
Claude Code, CodeSandbox, or a local setup with Vite, since it can't be
done over voice chat.

You can open and read/edit every file right now in any text or code editor,
for example VS Code, to get a feel for the structure.

## Branding

All visible "Mazda" text has been replaced with "Mozde" (component prop
`brandName`, defaults to "Mozde"). The banner image and logo mark are left
as placeholders — swap in your own fictional logo image when ready.

## Next steps

1. Set up a runnable React project (Vite + Tailwind is the simplest combination).
2. Drop these component files into src/.
3. Add the Mozde logo/banner image assets.
4. Preview locally, then deploy to Vercel (free tier supports password
   protection for private client demos).
