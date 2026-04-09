# Bookstack (WSU Docs) CSS and JS Assets

This repository manages custom CSS and JavaScript assets for the WSU Docs (BookStack) site:
https://intranet.library.gsu.edu/docs/

CSS is built from source files under `docs/css/` and published through GitHub Pages from the `docs/` directory. JavaScript assets may also be published from `docs/js/` as they are added.

## Current Scope

- CSS build and publish workflow is implemented.
- JavaScript build output is not currently implemented.
- `docs/js/` is available for current or future JavaScript files served via GitHub Pages.

## Repository Layout

```text
.
├── build-css.js            # esbuild script for CSS bundles
├── package.json            # npm scripts and dev dependencies
└── docs/
      ├── css/
      │   ├── 00-index.css    # CSS entry point
      │   ├── *.css           # authored styles
      │   ├── main.css        # generated (expanded bundle)
      │   └── main.min.css    # generated (minified bundle)
      └── js/
          └── gitkeep         # placeholder directory
```

## Local Development

Install dependencies:

```bash
npm install
```

Build CSS bundles:

```bash
npm run build:css
```

Format all files:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Format CSS only:

```bash
npm run format:css
```

## Build Outputs

Running `npm run build:css` generates:

- `docs/css/main.css` (expanded, readable)
- `docs/css/main.min.css` (minified for production)

Entry point:

- `docs/css/00-index.css` imports authored CSS (currently `style.css`).

JavaScript note:

- There is no JavaScript bundling script yet.
- If JavaScript files are added in `docs/js/`, they can still be published directly via GitHub Pages.

## Publishing (GitHub Pages)

This repository expects GitHub Pages to publish from the `docs/` folder.

Note the Pages base URL: `https://gsu-lib.github.io/bookstack-js-css/`

Use published Pages URLs for assets. The `raw.githubusercontent.com` URLs fail CSS/JS MIME type as plain text.

## BookStack Integration

In BookStack:

1. Go to `Settings -> Customisations -> Custom HTML Head Content`.
2. Add links:

```html
<link rel="stylesheet" href="https://gsu-lib.github.io/bookstack-js-css/css/main.css" />
```

or

```html
<link rel="stylesheet" href="https://gsu-lib.github.io/bookstack-js-css/css/main.min.css" />
```

If a JavaScript file exists in `docs/js/`:

```html
<script src="https://gsu-lib.github.io/bookstack-js-css/js/<filename>.js"></script>
```
