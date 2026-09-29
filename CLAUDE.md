# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Aerolínea PanAmérica: a fake airline booking site for Spanish-language learners. All user-facing text is in Spanish; keep it that way. It is a client-only React 18 single-page app built with Vite. There is no backend, no router and no state library.

## Commands

```
npm install
npm run dev       # Vite dev server (also: npm start)
npm run build     # production build to dist/
npm run preview   # serve the built dist/
npm run lint      # ESLint, --max-warnings 0 (any warning fails)
npm run format    # Prettier over src/**/*.{js,jsx}
```

There is no test suite.

## Architecture

- `index.html` → `src/main.jsx` → `App.jsx` (logo + header) → `Form.jsx`.
- `Form.jsx` holds all booking state in `useState` hooks. On Submit it sets `showDetails` and renders `Details.jsx`, passing dates already formatted as `yyyy/M/d` strings by `convertDate`.
- `Details.jsx` is presentational apart from `calculatePrice`. That function matches on the exact destination option strings from the `<select>` in `Form.jsx`. **When you add or rename a destination, update both files.** A mismatch falls through to the `default` case, which logs an error and returns 0. Round trips double the base price. Bags do not affect the price.
- `react-datepicker` is imported as `DatePickerModule.default || DatePickerModule` to handle CJS/ESM interop under current Vite. Keep that shim (commit "fixed DatePicker bug").

## Deployment

Pushes to `master` deploy to Azure Static Web Apps through `.github/workflows/azure-static-web-apps-*.yml`, with `app_location: "/"` and `output_location: "dist"`. PRs against `master` get preview environments.
