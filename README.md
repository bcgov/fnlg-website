# First Nations Leaders' Gathering

An Astro website for the First Nations Leaders' Gathering.

## Prerequisites

This project is built with [Astro](https://astro.build/). You'll need to a node environment with npm.

## Installation

1. Install dependancies with `npm install`
2. Launch local dev envinronment with `npm run dev`

## Project Structure

Inside of the project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src
│   ├── components
│   │   └── Header.astro
│   ├── images
│   │   └── logo.png
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro
│   ├── scripts
│   │   └── main.js
│   └── styles
│       └── main.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Learn about [building websites with Astro](https://docs.astro.build/)

## Required Configurations

- `site` must be set to the production URL in `/astro.config.mjs` for the sitemap
- `shareImage` should be set in `/src/layouts/Layout.astro` to set a site-wide social share / open graph imaage
- `pageTitle` and `description` must be specified for each page to set correct metadata and open graph data

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

...
