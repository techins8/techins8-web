# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FreeMatch is a Next.js 15-based landing page for an AI-powered job board targeting developers. The application uses server-side rendering, internationalization (next-intl), and integrates with Notion for blog content management.

## Development Commands

### Running the Application
```bash
make dev           # Start development server on port 3105 (via Makefile)
pnpm dev          # Alternative: direct pnpm command
```

### Building and Deployment
```bash
make build        # Install dependencies and build for production
pnpm build        # Build the application
pnpm start        # Start production server
```

### Code Quality
```bash
make lint         # Run ESLint
make analyze      # Run linters and build
```

### Git Workflow (via Makefile)
```bash
make auto-commit  # Auto-generate commit message from branch name
make push         # Run analyze, auto-commit, and push
make commit       # Alias for 'make push'
```

Branch naming convention: `<issue-number>-<type>-<description>` (e.g., `123-feat-add-dark-mode`)
Commit messages are auto-generated as: `<type>: #<issue-number> <description with spaces>`

## Architecture

### Directory Structure

- **`app/`** - Next.js 15 App Router structure
  - **`(home)/`** - Main landing page with home sections
  - **`(public)/`** - Public pages (legal, CGV, partnerships)
  - **`blog/`** - Blog listing and detail pages (Notion integration)
  - **`developpeurs/[...slug]/`** - Dynamic SEO pages for developer job types
  - **`job-offers/`** - Job offer pages
  - **`layout.tsx`** - Root layout with analytics, fonts, and providers
  - **`nav.tsx`** - Main navigation component
  - **`footer.tsx`** - Footer component
  - **`seo.ts`** - SEO configuration with 20+ developer job type routes

- **`lib/`** - Shared utilities
  - **`env.ts`** - Type-safe environment variables using @t3-oss/env-core
  - **`notion.ts`** - Notion API client
  - **`loops.ts`** - Loops API for newsletter
  - **`api.ts`** - API client configuration
  - **`http.ts`** - HTTP utilities
  - **`promote-kit.ts`** - PromoteKit integration

- **`query/`** - Server-side data fetching
  - **`article.query.ts`** - Notion blog article queries
  - **`count-jobs.query.ts`** - Job count queries
  - **`plan.query.ts`** - Subscription plan queries
  - **`partnershipService.ts`** - Partnership data service

- **`components/`** - Reusable React components
  - **`ui/`** - Radix UI-based components (shadcn/ui pattern)
  - **`Notion/`** - Notion block renderer components

- **`messages/`** - Internationalization files
  - **`fr.json`** - French translations (primary language)
  - **`en.json`** - English translations

### Key Technical Details

#### SEO & Dynamic Routes
- **SEO Configuration**: `app/seo.ts` contains 20+ predefined SEO routes for different developer job types (full-stack, frontend, backend, React, Angular, etc.)
- **Dynamic Route Handler**: `app/developpeurs/[...slug]/page.tsx` uses `getSeoDataFromSlug()` to match slugs to SEO data
- **Static Generation**: Routes are pre-generated at build time via `generateStaticParams()`

#### Internationalization
- Uses **next-intl** for i18n
- Translations stored in `messages/` directory
- Default locale: French (`fr`)
- Usage pattern: `const t = useTranslations('HomePage.Section')`

#### Blog System
- Content managed in **Notion** via `@notionhq/client`
- Articles fetched server-side using `getArticles()` and `getArticle(id)`
- Custom Notion block renderer in `components/Notion/Block.tsx`
- Article metadata includes: title, tags, teaser, publishedAt, author, readtime, cover image

#### Analytics & Tracking
- **Google Tag Manager** - GTM_ID in env
- **PostHog** - Product analytics with PostHogProvider
- **Umami** - Self-hosted analytics
- **HotJar** - User behavior tracking
- **Vercel Speed Insights** - Performance monitoring

#### Environment Variables
All environment variables are **type-safe** and validated using Zod schemas in `lib/env.ts`:
- Server-only: LOOPS_API_KEY, NOTION_API_KEY, SCRAPPER_API_TOKEN, etc.
- Client-exposed: NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_POSTHOG_KEY, etc.
- Required prefix for client vars: `NEXT_PUBLIC_`

#### Styling
- **Tailwind CSS** with custom configuration
- **Fonts**: Poppins (headings) and Nunito Sans (body)
- **Component Library**: Radix UI primitives with custom styling (shadcn/ui pattern)
- **Icons**: Lucide React

#### Forms & Validation
- **Zod** for schema validation
- Newsletter subscription uses Loops API
- Server actions pattern for form submissions (e.g., `newsletter.action.ts`)

### Important Patterns

1. **Server Components by Default**: All components are server components unless marked with `"use client"`
2. **Server Actions**: Use `"use server"` directive for server-side mutations (forms, API calls)
3. **Type Safety**: Heavy use of TypeScript with strict types for Notion API responses
4. **Route Groups**: `(home)` and `(public)` groups for layout organization without affecting URL structure
5. **Metadata Generation**: Dynamic metadata via `generateMetadata()` async functions

### External Integrations

- **Notion API** - Blog CMS (NOTION_API_KEY, NOTION_BLOG_DATABASE_ID)
- **Loops** - Email marketing (LOOPS_API_KEY)
- **Scrapper API** - Job data aggregation (SCRAPPER_API_URL, SCRAPPER_API_TOKEN)
- **PromoteKit** - Referral program
- **PostHog** - Product analytics
- **Google Tag Manager** - Tag management

## Deployment

The application is configured for Vercel deployment with:
- Images unoptimized (static export compatible)
- Custom security headers for CORS
- Remote image patterns for Notion CDN and external sources
- TypeScript build errors not ignored

## Notes

- The dev server runs on port **3105** (not the default 3000)
- Remote work conditions verification is a core feature highlighted throughout the copy
- The application targets French-speaking developers primarily
- SEO is heavily optimized with 20+ landing pages for different developer specializations
