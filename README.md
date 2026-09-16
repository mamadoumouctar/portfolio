# Portfolio — Mamadou Mouctar Diallo

Portfolio personnel présentant mon profil, mes compétences, mon expérience et mes projets. Site statique construit avec **Next.js** (App Router) et **Tailwind CSS**, avec des pages de détail de projets rédigées en **MDX** et un mode clair/sombre.

**En ligne :** https://mamadoumouctar.github.io/portfolio/

## Stack technique

- **Next.js 16** (App Router, export statique `output: 'export'`)
- **React 19** + **TypeScript**
- **Tailwind CSS 3** (mode sombre via classe `dark`)
- **MDX** (`@next/mdx`) pour les pages de détail des projets
- **ESLint 9** (flat config, `eslint-config-next`)
- Déploiement **GitHub Pages** via **GitHub Actions**

## Fonctionnalités

- Page unique responsive : profil, compétences, expérience, projets, langues, contact.
- Pages de détail par projet en MDX, stylées automatiquement et accessibles sous `/projects/<nom>`.
- Bascule clair/sombre persistée (localStorage) et respectant la préférence système, sans flash au chargement.
- 100 % statique : aucun serveur requis en production.

## Prérequis

- **Node.js 20+**
- **npm**

## Démarrage

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

En local, le `basePath` est désactivé (site servi à la racine). Il n'est appliqué (`/portfolio`) qu'en CI GitHub Actions — voir la section Déploiement.

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production + export statique dans `out/` |
| `npm run start` | Sert le build de production |
| `npm run lint` | Analyse ESLint |

## Structure du projet

```
.
├── app/
│   ├── layout.tsx           # Layout racine (NavBar, thème, métadonnées)
│   ├── page.tsx             # Page d'accueil (données du portfolio)
│   ├── global.css           # Directives Tailwind
│   └── projects/            # Pages de détail des projets (MDX)
│       ├── stockflow/page.mdx
│       ├── ugram/page.mdx
│       ├── floppa/page.mdx
│       └── heatmyfloor/page.mdx
├── components/
│   ├── NavBar.tsx
│   └── ThemeToggle.tsx      # Bouton clair/sombre (composant client)
├── mdx-components.tsx        # Styles Tailwind appliqués au contenu MDX
├── next.config.js           # Export statique, MDX, basePath conditionnel
├── tailwind.config.js
└── .github/workflows/nextjs.yml
```

## Ajouter un projet

1. Créer un dossier `app/projects/<slug>/` contenant un fichier `page.mdx`.
2. Rédiger le contenu en Markdown/MDX (les styles sont appliqués via `mdx-components.tsx`).
3. Ajouter une entrée correspondante dans le tableau `projects` de `data/projects.ts` (avec le même `slug`) pour afficher la carte sur la page d'accueil.

## Déploiement

Le site est déployé automatiquement sur **GitHub Pages** à chaque push sur `main`, via `.github/workflows/nextjs.yml`. Le pipeline enchaîne quatre étapes :

1. **lint** — `npm run lint` (bloquant)
2. **audit** — `npm audit --audit-level=high` (non bloquant car site statique)
3. **build** — `next build` (ne démarre que si lint et audit réussissent)
4. **deploy** — publication de l'export statique (`out/`) sur GitHub Pages

### basePath

Le site étant servi sous `https://<user>.github.io/portfolio/`, un `basePath` `/portfolio` est nécessaire pour que les assets et les liens internes se résolvent correctement. Il est appliqué **uniquement en CI** (variable `GITHUB_ACTIONS`), et laissé vide en local :

```js
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const repoBasePath = isGitHubPages ? '/portfolio' : ''
```

Si le dépôt est renommé ou déplacé vers un domaine racine, ajuster `repoBasePath` dans `next.config.js`.

## Licence

Projet personnel. Tous droits réservés.
