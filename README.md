# Bookstack (WSU Docs) JS, CSS

This repository (temporarily?) manages custom CSS and JS for the [WSU Docs (BookStack)](https://intranet.library.gsu.edu/docs/).

Deployed files are generated from files at `source/css`, and published on GitHub Pages from `docs/prod/css` and `docs/dev/css` directory.

## Production Assets:

- `https://gsu-library.github.io/bookstack-js-css/prod/css/main.css`
- `https://gsu-library.github.io/bookstack-js-css/prod/css/main.min.css`

- `<link rel="stylesheet" href="https://gsu-library.github.io/bookstack-js-css/prod/css/main.css" />`
- `<link rel="stylesheet" href="https://gsu-library.github.io/bookstack-js-css/prod/css/main.min.css" />`

## Development Assets:

- `https://gsu-library.github.io/bookstack-js-css/dev/css/main.css`
- `<link rel="stylesheet" href="https://gsu-library.github.io/bookstack-js-css/dev/css/main.css" />`

- `https://gsu-library.github.io/bookstack-js-css/dev/css/main.min.css`
- `<link rel="stylesheet" href="https://gsu-library.github.io/bookstack-js-css/dev/css/main.min.css" />`

## Development

- Install dependencies: `npm install`

### Build & Format CSS:

- Development: `npm run build:css -- dev`
- Production: `npm run build:css -- prod`

### Format Files

- Format all files: `npm run format:all`
- Check all formatting: `npm run format:check`
- Format CSS only (source, dev, and prod): `npm run format:css`

## Outputs

The `npm run build:css -- <dev|prod>` command references `docs/source/css/index.css` and generates:

- `docs/<prod|dev>/main.css` (expanded)
- `docs/<prod|dev>/main.min.css` (minified)

JavaScript note:

- There is no JavaScript script.
- JavaScript files in `docs/<prod|dev>/js/`, are accessible via GitHub Pages.

## Publishing (GitHub Pages)

GitHub Pages publishes exclusively from the `main` branch `docs/` folder. The `prod` and `dev` setup and scripting is the workaround for the branch limitation.

- Base URL: `https://gsu-library.github.io/bookstack-js-css/`
- Use published URLs for assets, not the raw URLs.
