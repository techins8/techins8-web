# Architecture

Projet marketing/landing page — pas de base de données locale. L'architecture est orientée **data fetching** vers des APIs externes.

## Couches

- `app/` — routing exclusivement (page.tsx, layout.tsx, loading.tsx, etc.)
- `query/` — data fetching server-side (wrappé dans `React.cache()`)
- `lib/` — utilitaires partagés, clients API, env, helpers
- `components/` — composants réutilisables (2+ routes) et `ui/` (shadcn)

## Règles strictes

- **JAMAIS** de fetch direct dans `app/` — toujours passer par `query/`
- Les fonctions de `query/` sont wrappées dans `React.cache()` pour déduplication entre `generateMetadata` et le composant page
- Les appels vers des APIs externes (Scrapper, Notion, Loops) vivent dans `lib/` ou `query/`, jamais dans les composants
- **Toujours** wrapper les appels d'APIs externes dans un try/catch — retourner `null` en cas d'échec plutôt que de planter la page

## APIs externes

- **Scrapper API** — données offres d'emploi (`lib/api.ts`, `SCRAPPER_API_URL`)
- **Notion API** — blog CMS fallback (`lib/notion.ts`, `NOTION_API_KEY`)
- **Loops** — email marketing (`lib/loops.ts`, `LOOPS_API_KEY`)
- **Blog** — JSON + Markdown dans `data/blog/` (source principale)

## Server Actions

- Fichiers nommés `*.action.ts`, directive `"use server"` en haut du fichier
- Toujours valider les inputs avec Zod 4 (`z.email()`, `z.string().min()`, etc.)
- Pattern de retour : `{ success: true }` ou `{ error: string }`

## Validation

- Zod 4 pour la validation des entrées
- Variables d'env type-safe via `@t3-oss/env-core` dans `lib/env.ts` — ne JAMAIS accéder à `process.env` directement, toujours passer par `env`
