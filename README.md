# ABCD KBD

A Interactive game for kids ; building in Astro

main codebase for [abcdkbd.com](https://www.abcdkbd.com)

## The tech Stacks

- Astro js
- Shadcn for component
- tailwind for styling
- Zustand for state management
- TypeScript for type safety
- Zod for form type safe form validation

### How To Start

### pre-requisite

- Node v 18 or higher
- open vscode and open startup.vscode-workspace file

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
.
├── abcd.code-workspace
├── astro.config.mjs
├── astro-i18next.config.mjs
├── CHANGELOG.md
├── CNAME
├── docs
│   ├── index.html
│   └── README.md
├── guide
│   ├── pages.md
│   ├── style-guide.md
│   └── todo.md
├── jsconfig.json
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   ├── assets
│     ├── 512x512.png
│     ├── apple-touch-icon.png
│     ├── favicon.ico
│     ├── favicon.svg
│     ├── fonts
│     ├── icons
│     ├── images
│     ├── json
│     ├── media
│     ├── site.webmanifest
│   ├── robots.txt
│   ├── service-worker.js
│   ├── sitemap-index.html
│   └── sounds
├── README.md
├── setup-hooks.sh
├── src
├── assets
│      ├── icons
│      ├── screenshots
│      └── styles
├── components
├── content
│     ├── article
│     ├── blog
│     ├── stories
│   ├── content.config.ts
│   ├── data
│   ├── env.d.ts
│   ├── env.patch.ts
│   ├── layouts
│   ├── mappers
│   ├── pages
│   ├── site.config.ts
│   ├── types
│   └── utils
├── tsconfig.eslint.json
└── tsconfig.json

```

and src

## Installation

```bash
npm install
```

### Development

To start the development server, run:

```bash
npm run dev
```

### test and lint

run

```sh
npm run lint
```

### Deployment

run in local

```sh
npm run lint
npm run build
```

and then check with

```sh
npm run preview
```
