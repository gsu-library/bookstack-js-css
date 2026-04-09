# Bookstack (WSU Docs) JS, CSS (JS? ¯\_(ツ)\_/¯)

This repository manages custom CSS and JavaScript for the WSU Docs (BookStack) site: [https://intranet.library.gsu.edu/docs/](https://intranet.library.gsu.edu/docs/)

The application files are built from source files under `docs/source/css` and published through GitHub Pages from the `docs/prod` and `docs/dev` directory.

## Development

- Install dependencies: `npm install`
- Build, format CSS for development: `npm run buildcss:dev`
- Build, format CSS for producion: `npm run buildcss:prod`
- Format all files: `npm run format`
- Check formatting: `npm run format:check`
- Format CSS only: `npm run format:css`

## Outputs

Running `npm run buildcss:dev` or `npm run buildcss:prod` references `docs/source/css/00-index.css` to create:

- `docs/<prod|dev>/main.css` (expanded)
- `docs/<prod|dev>/main.min.css` (minified)

JavaScript note:

- There is no JavaScript bundling script.
- If JavaScript files are added in `docs/<prod|dev|source>/js/`, they can be served via GitHub Pages.

## Publishing (GitHub Pages)

GitHub Pages publishes from the `main` branch's `docs/` folder. The `prod` and `dev` folders and build scripts are a workaround for the branch switching limitation.

- Pages base URL: `https://gsu-lib.github.io/bookstack-js-css/<prod|dev>`
- Use published URLs for assets. The raw URLs fail CSS/JS MIME type check (plain text).

## BookStack Customization Links

```html
<link rel="stylesheet" href="https://gsu-library.github.io/bookstack-js-css/<prod|dev>/main.css" />
```

or

```html
<link
  rel="stylesheet"
  href="https://gsu-libibrary.github.io/bookstack-js-css/<prod|dev>/main.min.css"
/>
```

If a JavaScript file exists in `docs/<prod|dev|source>/js/`:

```html
<script src="https://gsu-library.github.io/bookstack-js-css/<prod|dev|source>/js/<filename>.js"></script>
```
