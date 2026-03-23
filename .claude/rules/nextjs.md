# Next.js 16 (App Router)

## Structure du projet

- `app/` — routing exclusivement (page.tsx, layout.tsx, error.tsx, loading.tsx, route.ts, *.action.ts)
- `query/` — data fetching server-side (wrappé dans `React.cache()`)
- `lib/` — utilitaires partagés, clients API, env
- `components/` — composants réutilisables dans 2+ routes
- `components/ui/` — shadcn/ui (ne pas modifier directement)
- `data/blog/` — articles.json + fichiers Markdown

## Colocation dans `app/`

- Les composants spécifiques à une seule route vivent colocalisés dans le même dossier que la page (ex: `app/blog/ActionBar.tsx`)
- `components/` contient UNIQUEMENT les composants réutilisés dans 2+ routes
- Règle de promotion : coloquer d'abord, migrer vers `components/` quand réutilisé ailleurs

## Route Groups

- `(home)/` — sections de la landing page, sans impact sur l'URL
- `(public)/` — pages publiques légales (CGV, legal, partnerships)
- Nommage des routes : kebab-case (`job-offers/`, `developpeurs/`)

## Middleware

- Fichier `middleware.ts` à la racine (Edge runtime)
- Géré par next-intl pour la détection de locale (`fr-FR`)
- Réservé aux préoccupations réseau : redirects, locale, headers

## React.cache()

- Toutes les fonctions de `query/` sont wrappées dans `React.cache()`
- Permet de déduplicer les lectures entre `generateMetadata` et le composant page
- Ne dupliquer une requête que si les paramètres diffèrent

## Loading States

- Chaque route avec data fetching async doit avoir un `loading.tsx`
- Skeletons inline dans `loading.tsx` (pas de composants séparés)
- Utiliser `animate-pulse` + hauteurs fixes pour éviter le CLS

## Server vs Client Components

- Par défaut tout composant est un Server Component
- N'ajouter `"use client"` que si nécessaire : useState, useEffect, event handlers, browser APIs
- Ne JAMAIS mettre `"use client"` sur un composant qui n'en a pas besoin

## Server Actions

- Fichiers `*.action.ts` avec directive `"use server"` en haut
- Toujours valider les inputs avec Zod 4 côté serveur
- Pattern retour : `{ success: true }` ou `{ error: string }`
- Utiliser `revalidatePath()` après mutation de données cachées

## Metadata SEO

- Chaque page doit exporter `metadata` ou `generateMetadata()`
- Pattern pages statiques : `export const metadata: Metadata = { title: "...", description: "..." }`
- Pattern pages dynamiques : `export async function generateMetadata({ params }) { ... }`

## Bundler & conventions

- Turbopack activé via `--turbopack` dans `pnpm dev` (dotenv-cli le charge)
- Fichiers de convention Next.js à utiliser : `error.tsx`, `loading.tsx`, `not-found.tsx`
- `PORT=3105` chargé depuis `.env` par dotenv-cli — ne pas hardcoder le port
