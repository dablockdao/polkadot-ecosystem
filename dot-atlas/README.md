# Polkadot Ecosystem Atlas

A comprehensive resource with profiles and direct links to projects within the Polkadot ecosystem.

Built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/), deployed on [Vercel](https://vercel.com/).

## Quick Start

```bash
npm install
npm run dev
```

The dev server runs at `https://localhost:4321/` (HTTPS required for the OpenGov proposal intake iframe).

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Type-check + build for production |
| `npm run preview` | Preview production build locally |
| `npx astro check` | Run type checking only |

## Project Structure

```
src/
├── components/        # Reusable UI components (footer, header, modals, landing)
├── content/docs/      # All documentation pages (EN + locales)
│   ├── club/          # Community: DAOs, Orgs, Initiatives, Bounties, Archive
│   ├── dapps/         # Dapps: DeFi, Gaming, AI, Bridges, NFTs, etc.
│   ├── learn/         # Educational concept pages
│   ├── resources/     # Guides, Glossary, Faucets, Media, Templates
│   └── tools/         # Wallets, Dev Tools, Explorers, DAO Tools
├── layouts/           # Page layouts (Starlight-based)
├── pages/             # Standalone pages (404, eco-library)
├── styles/            # Global CSS
├── data/              # Data files (eco-library content)
└── assets/            # Images, logos, fonts
```

### Key Features

- **Curated directories** of projects and infrastructure (dApps, wallets, dev tools, DAOs, initiatives, bounties…).
- Each profile includes:
  - **Overview** — concise summary of purpose and functionality.
  - **Category** — clear classification into sectors and subcategories.
  - **Direct Links** — official sites, docs, and socials.

### Locales

The atlas supports 6 languages: `en` (default), `es`, `fr`, `de`, `it`, `pt`.

Locale files live in `src/content/docs/{locale}/` mirroring the EN structure.

## Contributing

1. Fork the repo and create a feature branch.
2. Make your changes (add a project, fix a description, update a link).
3. Run `npm run build` to verify there are no errors.
4. Open a pull request.

For major structural changes, please open an issue first to discuss.
