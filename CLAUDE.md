# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FreeMatch is a Next.js 16-based landing page for an AI-powered job board targeting developers. The application uses server-side rendering, internationalization (next-intl), and a JSON/Markdown blog system. It is the first product of **[PeakLab](https://peaklab.fr)**, a French tech studio.

## Development Commands

### Running the Application
```bash
pnpm dev          # Start dev server on port 3105 (uses dotenv-cli to load .env)
make dev          # Same via Makefile
```

### Building and Deployment
```bash
pnpm build        # Build for production
pnpm start        # Start production server
```

### Code Quality
```bash
pnpm lint         # Run Biome check
pnpm lint:fix     # Run Biome check with auto-fix
pnpm format       # Run Biome formatter
pnpm typecheck    # TypeScript type check (tsc --noEmit)
pnpm knip         # Find unused files, exports, and dependencies
```

### Testing
```bash
pnpm test         # Run unit tests (Vitest)
pnpm test:watch   # Run Vitest in watch mode
pnpm e2e          # Run Playwright e2e tests
pnpm e2e:ui       # Run Playwright with UI
```

### Git Workflow
```bash
make auto-commit  # Auto-generate commit message from branch name
make push         # Run analyze, auto-commit, and push
make commit       # Alias for 'make push'
```

Branch naming convention: `<issue-number>-<type>-<description>` (e.g., `123-feat-add-dark-mode`)

## Architecture

### Directory Structure

- **`app/`** - Next.js 16 App Router
  - **`(home)/`** - Landing page sections
  - **`(public)/`** - Public pages (legal, CGV, partnerships)
  - **`blog/`** - Blog listing and detail pages
  - **`about/`** - About page (founders + PeakLab studio section)
  - **`developpeurs/[...slug]/`** - Dynamic SEO pages for developer job types
  - **`job-offers/`** - Job offer pages
  - **`webinar/`** - Webinar landing page
  - **`layout.tsx`** - Root layout with analytics, fonts, providers
  - **`nav.tsx`** - Main navigation
  - **`footer.tsx`** - Footer (includes PeakLab link)
  - **`seo.ts`** - SEO configuration with 20+ developer job type routes

- **`lib/`** - Shared utilities
  - **`env.ts`** - Type-safe environment variables (@t3-oss/env-core + Zod)
  - **`notion.ts`** - Notion API client
  - **`loops.ts`** - Loops API for newsletter
  - **`api.ts`** - API client configuration
  - **`http.ts`** - HTTP utilities
  - **`promote-kit.ts`** - PromoteKit integration
  - **`json-ld.ts`** - JSON-LD structured data helpers

- **`query/`** - Server-side data fetching
  - **`article.query.ts`** - JSON/Markdown blog article queries (React.cache)
  - **`count-jobs.query.ts`** - Job count queries (returns null on failure)
  - **`plan.query.ts`** - Subscription plan queries
  - **`partnershipService.ts`** - Partnership data service

- **`components/`** - Reusable React components
  - **`ui/`** - Radix UI-based components (shadcn/ui pattern) — ignored by Knip
  - **`Notion/`** - Notion block renderer components
  - **`webinar/`** - Webinar-specific components

- **`data/blog/`** - Blog content
  - **`articles.json`** - Article metadata
  - **`content/`** - Markdown files per article

- **`messages/`** - i18n files
  - **`fr.json`** - French translations (primary language)
  - **`en.json`** - English translations

- **`public/images/`** - Static images including `peaklab-logo.png`

### Key Technical Details

#### Tooling
- **Biome** — linter + formatter (replaces ESLint/Prettier). Config: `biome.json`
- **Knip** — unused code detection. Config: `knip.json`. Run before removing files/deps.
- **Husky + lint-staged** — pre-commit hook runs `biome check --write` on staged files
- **Vitest** — unit tests
- **Playwright** — e2e tests (config: `playwright.config.ts`, locale `fr-FR`)
- **dotenv-cli** — loads `.env` before `next dev` (PORT=3105 defined in `.env`)

#### Blog System
- Content stored in **JSON + Markdown** files under `data/blog/`
- Articles fetched with `getArticles()` and `getArticle(id)` from `query/article.query.ts`
- Both functions wrapped in `React.cache()` to deduplicate reads across `generateMetadata` + page render

#### SEO & Dynamic Routes
- `app/seo.ts` contains 20+ predefined SEO routes for developer job types
- `app/developpeurs/[...slug]/page.tsx` uses `getSeoDataFromSlug()` to match slugs
- Routes pre-generated at build time via `generateStaticParams()`

#### Internationalization
- **next-intl** with locale detection via `accept-language` header
- Default locale: French (`fr-FR`)
- Usage: `const t = useTranslations('HomePage.Section')`

#### Styling
- **Tailwind CSS v4** — `@import "tailwindcss"` in `globals.css`, no `tailwind.config.ts`
- PostCSS: `@tailwindcss/postcss` (not the old `tailwindcss` plugin)
- **Fonts**: Poppins (headings), Nunito Sans (body)
- **shadcn/ui** — Radix UI primitives with custom styling (`components.json`)
- **Icons**: Lucide React

#### Analytics & Tracking
- **Google Tag Manager** — `NEXT_PUBLIC_GTM_ID`
- **PostHog** — product analytics with PostHogProvider
- **Umami** — self-hosted analytics
- **HotJar** — user behavior tracking
- **Vercel Speed Insights** — performance monitoring

#### Environment Variables
Type-safe via Zod schemas in `lib/env.ts`:
- Server-only: `LOOPS_API_KEY`, `NOTION_API_KEY`, `SCRAPPER_API_TOKEN`, etc.
- Client-exposed (`NEXT_PUBLIC_` prefix): `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_POSTHOG_KEY`, etc.
- `PORT=3105` in `.env` (loaded by dotenv-cli)

#### Forms & Validation
- **Zod v4** for schema validation
- Newsletter subscription via Loops API
- Server actions pattern (`*.action.ts` files)

### Important Patterns

1. **Server Components by Default** — `"use client"` only when needed
2. **Server Actions** — `"use server"` directive for mutations
3. **React.cache()** — wraps data fetching functions to deduplicate across metadata + page render
4. **Route Groups** — `(home)` and `(public)` for layout organization without URL impact
5. **Metadata** — every page exports `metadata` or `generateMetadata()`
6. **Error resilience** — external API calls (scrapper) wrapped in try/catch, return `null` on failure
7. **Node.js imports** — always use `node:` protocol (`node:fs`, `node:path`)

### Biome Rules (notable)
- `noDangerouslySetInnerHtml` → **warn** (intentional for GTM scripts and job HTML content)
- `noExplicitAny` → **warn**
- `noArrayIndexKey` → **off**
- `useNodejsImportProtocol` → **error** (use `node:fs` not `fs`)
- `noUnusedVariables` → **error** on `.ts`/`.tsx` files

### External Integrations

- **Notion API** — Blog CMS fallback (`NOTION_API_KEY`, `NOTION_BLOG_DATABASE_ID`)
- **Loops** — Email marketing (`LOOPS_API_KEY`)
- **Scrapper API** — Job data aggregation (`SCRAPPER_API_URL`, `SCRAPPER_API_TOKEN`)
- **PromoteKit** — Referral program
- **PostHog** — Product analytics
- **Google Tag Manager** — Tag management

## Deployment

- Hosted on **Vercel** (CNAME: `405328847047dc9c.vercel-dns-017.com`)
- Custom security headers for CORS in `next.config.ts`
- Remote image patterns for Notion CDN and external sources

## Notes

- Dev server runs on port **3105** — set via `PORT=3105` in `.env`, loaded by `dotenv-cli`
- Primary audience: French-speaking developers
- SEO-heavy: 20+ landing pages for developer specializations
- `playwright-report/` and `test-results/` are git-ignored
- **PeakLab** links appear in: footer, about page, mentions légales
