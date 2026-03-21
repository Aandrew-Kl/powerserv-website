# PowerServ Website

Corporate website for PowerServ PCC, focused on integrated engineering solutions across the marine, energy, and industrial sectors.

## Live site

- [GitHub Pages](https://aandrew-kl.github.io/powerserv-website/)

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI building blocks

## Highlights

- Premium landing page with hero, trust bar, about, services, process, projects, and CTA sections
- Static deployment to GitHub Pages through GitHub Actions
- Separate brand and project asset library for portfolio content

## Repository layout

- `app/`: deployable frontend application
- `assets/`: shared imagery and brand assets used by the site
- `.github/workflows/deploy.yml`: build and Pages deployment pipeline

## Local development

```bash
cd app
npm install
npm run dev
```

## Production build

```bash
cd app
npm run build
```
