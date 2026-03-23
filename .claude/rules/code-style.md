# Code Style

- Biome: double quotes, semicolons, 2 espaces, trailing commas all
- Naming: camelCase fonctions/variables, PascalCase composants/types
- Imports: triés automatiquement par Biome, utiliser `import type` pour les types
- Node.js builtins: toujours utiliser le protocole `node:` (`node:fs`, `node:path`)
- Pas de commentaires inutiles, le code doit être auto-documenté
- Utiliser `cn()` de `@/lib/utils` pour les classes conditionnelles

## Couleurs & Tokens

- **JAMAIS** hardcoder des hex Tailwind — utiliser les tokens CSS : `text-primary`, `bg-title`, `text-muted`, `bg-accent`, `text-background`, `border-muted`, etc.
- Les tokens sont définis via `@theme inline` dans `app/globals.css`
- Les classes avec opacité : `bg-accent/10`, `text-muted/70`, etc.
- Exception : attributs non-Tailwind (email HTML inline, meta `themeColor`) peuvent conserver le hex

## Tailwind v4

- Pas de `tailwind.config.ts` — configuration via `@theme inline` dans `app/globals.css`
- Plugins via `@plugin` dans le CSS (`@plugin "tailwindcss-animate"`)
- Ne pas utiliser `@apply` avec des classes custom définies dans le même fichier

## Images logo PeakLab

- Logo décoratif adjacent à du texte "PeakLab" → `alt=""`
- Logo seul sans texte adjacent → `alt="PeakLab"`
