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
├── astro.config.mjs
├── astro-i18next.config.mjs
├── CHANGELOG.MD
├── components.json
├── docs
│   ├── README.md
│   └── pages.md        # Documentation for all pages and their functionality
├── jsconfig.json
├── LICENSE
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── 192x192.png
│   ├── 512x512.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   ├── logo-white.svg
│   ├── manifest.webmanifest
│   ├── profile-placeholder.jpg
│   ├── robots.txt
│   ├── sitemap-index.html
├── README.md
├── src
│   ├── assets
│   ├── components
│   ├── content
│   ├── env.d.ts
│   ├── hooks
│   ├── icons
│   ├── layouts
│   ├── libs
│   ├── locales
│   ├── mocks
│   ├── models
│   ├── pages
│   ├── postcss.config.cjs
│   ├── site.config.ts
│   ├── types.ts
│   └── utils
├── tailwind.config.ts
├── todo.md
├── tsconfig.eslint.json
├── tsconfig.json
└── <project>.code-workspace
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

## 📄 Pages Documentation

---

## Home Page

### Description

The landing page for abcdkbd, introducing the platform and its key features for interactive learning.

### Screenshots

- **Light Mode:** ![Home Light](/public/assets/images/screenshots/light/home.png)
- **Dark Mode:** ![Home Dark](/public/assets/images/screenshots/dark/home.png)

---

## About Page

### Description

This page introduces the mission, team, and values behind abcdkbd. It provides an overview of the platform's goals, core values, and contact information for contributors and educators.

### Screenshots

- **Light Mode:** ![About Light](/public/assets/images/screenshots/light/about.png)
- **Dark Mode:** ![About Dark](/public/assets/images/screenshots/dark/about.png)

---

## Varnmala Page

### Description

Explore the vowels and consonants of different Indian languages. Compare scripts and sounds across regions in a simple, visual way.

### Screenshots

- **Light Mode:** ![Varnmala Light](/public/assets/images/screenshots/light/varnmalaLight.png)
- **Dark Mode:** ![Varnmala Dark](/public/assets/images/screenshots/dark/varnmala.png)

---

## Vedic Page

### Description

Learn about Vedic timekeeping, tithi, and traditional Indian calendars.

### Screenshots

- **Light Mode:** ![Vedic Light](/public/assets/images/screenshots/light/vedic.png)
- **Dark Mode:** ![Vedic Dark](/public/assets/images/screenshots/dark/vedic.png)

---

## Akshar (Indic Alphabets) Page

### Description

Learn Indian culture and diversity through Indian languages. Compare alphabets, pronunciation, and examples across different Indian scripts.

### Screenshots

- **Light Mode:** ![Akshar Light](/public/assets/images/screenshots/light/indic.png)
- **Dark Mode:** ![Akshar Dark](/public/assets/images/screenshots/dark/indic.png)

---

## Panel Page

### Description

The Panel page provides users with a personal dashboard to manage their account, view activity, and access learning resources.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/panel.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/panel.png)

---

## Alphabet Page

### Description

Explore the alphabets of different Indian languages, compare scripts, and learn pronunciation and examples.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/alphabets.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/alphabets.png)

---

## Number Page

### Description

Learn and practice numbers in different languages with interactive grids and examples.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/numbers.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/numbers.png)

---

## Glossary Page

### Description

Browse and search for educational terms and definitions relevant to the platform's content.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/glossary.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/glossary.png)

---

## India(Map) Page

### Description

An interactive journey through India's states, displaying their various dance form and related information.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/map.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/map.png)

---

## Crossword Page

### Description

Solve interactive crossword puzzles to reinforce learning and vocabulary.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/crossword.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/crossword.png)

---

## Capital Page

### Description

An interactive journey through India's states and territories, displaying their capitals and related information.

### Screenshots

- **Light Mode:** ![Capital Light](/public/assets/images/screenshots/light/capitalLight.png)
- **Dark Mode:** ![Capital Dark](/public/assets/images/screenshots/dark/capital.png)

## Hide & Seek Page

### Description

Play hide and seek games to learn letters, numbers, and more in a fun, interactive way.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/hideseek.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/hideseek.png)

---

## Canvas Page

### Description

Create, draw, and generate art or text on a digital canvas. Includes quote and text generation features.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/canvas.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/canvas.png)

---

## Draw Page

### Description

Practice drawing letters and shapes using your keyboard. An interactive tool for learning letter formation and improving motor skills.

### Screenshots

- **Light Mode:** ![Draw Light](/public/assets/images/screenshots/light/draw.png)
- **Dark Mode:** ![Draw Dark](/public/assets/images/screenshots/dark/draw.png)

---

## Gallery Page

### Description

Explore interactive ways to learn alphabets with Stack, Queue, and Slider gallery layouts. Choose your favorite mode to visualize and play with alphabet cards.

### Screenshots

- **Light Mode:** ![Gallery Light](/public/assets/images/screenshots/light/gallery.png)
- **Dark Mode:** ![Gallery Dark](/public/assets/images/screenshots/dark/gallery.png)

---

## Nakshtra Page

### Description

Learn about the Nakshatras (lunar mansions) in Indian astronomy and astrology.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/nakshatra.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/nakshtra.png)

---

## Stories Page

### Description

Browse a curated collection of stories, tales, and creative writing for kids. Stories are organized by category and feature author, reading time, and beautiful cover images.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/storyLight.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/story.png)

---

## Poem Page

### Description

Read and listen to poems for kids, with interactive cards and audio support.

### Screenshots

- **Light Mode:** ![Stories Light](/public/assets/images/screenshots/light/poems.png)
- **Dark Mode:** ![Stories Dark](/public/assets/images/screenshots/dark/poems.png)

---

## Blog Page

### Description

Read the latest articles, updates, and educational insights from abcdkbd.com.

### Screenshots

- **Light Mode:** ![Blog Light](/public/assets/images/screenshots/light/blog.png)
- **Dark Mode:** ![Blog Dark](/public/assets/images/screenshots/dark/blog.png)

---
