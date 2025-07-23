---
title: "The style guide the must know to start the code"
description: "The full guid on file structure , css naming convention , tailwind usage and , css classes naming convention . "
image: "/assets/images/blog/blog-2.png"
publishDate: "26 December 2024"
---

## **Style Guide Documentation**

This document outlines the style guide we follow to maintain consistency and readability in our codebase. These principles apply to both CSS and JavaScript/TypeScript components.

---

## File Structure

- Use a clear and consistent folder structure.
- Place CSS files for components inside the `assets/styles` folder, named according to the component (e.g., `common-product.css` for `COmmonProduct` component).
- Keep reusable styles in a `global.css` file.
- Keep common style in `common.css`

---

## CSS Naming Convention

- Use BEM for CSS class names.
  Example: `card__image`, `container__card`

- For component-specific styles, use the format:
  `componentName__element` (e.g., `card__image` for an image in the `Card` component)

---

## Component-Specific CSS

- For each component, create a corresponding CSS file if it requires custom styles.
- CSS file naming: Use the same name as the component, in lowercase and hyphen-separated.
  - Example:
    - Component: `CommonProduct.astro`
    - CSS File: `common-product.css`
- Limit the use of global styles to prevent style conflicts.

---

## Naming Variables & Functions

- Use `camelCase` for variables, functions, and methods.
  Example: `filterItemsByRating`, `sortItems`

- Use `PascalCase` for React components and TypeScript interfaces/types.
  Example: `ResultProducts`, `ProductProps`

- Use `UPPER_SNAKE_CASE` for constants.
  Example: `BASE_IMAGE_PATH`

---

## Example: Component and CSS Pair

### CommonProduct.astro

```html
<div class="container__card">
  <CardBase class="card__base">
    <img class="card__image" src="{imageSrc}" alt="Product Image" />
    <CardContent>
      <CardTitle class="card__content">Product Name</CardTitle>
    </CardContent>
  </CardBase>
</div>
```

- CSS File (`common-product.css`)

  ```css
  .container__card {
    container-size: inline-size;
    container-name: card;

    & .card__base {
      display: flex;

      & .card__image {
        object-fit: cover;
        height: 2rem;
      }
    }

    &.card__content {
      font-size: large;
      font-style: italic;
      color: var(--text);
    }
  }
  ```
