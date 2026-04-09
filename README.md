# Bookstack (WSU Docs) CSS and JS Assets

This repository manages custom CSS and JavaScript assets for the WSU Docs (BookStack) site:
https://intranet.library.gsu.edu/docs/

CSS is built from source files under `docs/css/` and published through GitHub Pages from the `docs/` directory. JavaScript assets may also be published from `docs/js/` as they are added.

## Repository Layout

```text
.
├── build-css.js            # Script (esbuild) for CSS concatenation and minification
├── package.json            # npm scripts and dev dependencies
└── docs/                   # GitHub Pages publishing source
      ├── css/              # CSS files
      │   ├── 00-index.css    # CSS entry point
      │   ├── *.css           # authored styles
      │   ├── main.css        # generated (expanded bundle)
      │   └── main.min.css    # generated (minified bundle)
    └── js/                 # placeholder directory
          └── gitkeep
```

## Development

- Install dependencies: `npm install`
- Build CSS bundles: `npm run build:css`
- Format all files: `npm run format`
- Check formatting: `npm run format:check`
- Format CSS only: `npm run format:css`

## Outputs

Running `npm run build:css` references `docs/css/00-index.css` to create:

- `docs/css/main.css` (expanded)
- `docs/css/main.min.css` (minified)

JavaScript note:

- There is no JavaScript bundling script yet.
- If JavaScript files are added in `docs/js/`, they can still be published directly via GitHub Pages.

## Publishing (GitHub Pages)

GitHub Pages publishes from the `docs/` folder.

- Pages base URL: `https://gsu-lib.github.io/bookstack-js-css/`
- Use published URLs for assets. The `raw.githubusercontent.com` URLs fail CSS/JS MIME type check (plain text).

## BookStack Customization Links

```html
<link rel="stylesheet" href="https://gsu-library.github.io/bookstack-js-css/css/main.css" />
```

or

```html
<link rel="stylesheet" href="https://gsu-libibrary.github.io/bookstack-js-css/css/main.min.css" />
```

If a JavaScript file exists in `docs/js/`:

```html
<script src="https://gsu-library.github.io/bookstack-js-css/js/<filename>.js"></script>
```
