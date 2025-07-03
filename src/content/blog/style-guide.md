---
title: "The style guide the must know to start the code"
description: "The full guid on file structure , css naming convention , tailwind usage and , css classes naming convention . "
image: "/assets/images/blog/blog-2.png"
publishDate: "26 December 2024"
---

## Style Guide Documentation

This document outlines the style guide we follow to maintain consistency and readability in our codebase. These principles apply to both CSS and JavaScript/TypeScript components.

---

## **1. File Structure**

- **1.1** Use a clear and consistent folder structure.
- **1.2** Place CSS files for components inside the `assets/styles` folder, named according to the component (e.g., `result-products.css` for `ResultProducts` component).
- **1.3** Keep reusable styles in a `globals.css` file.

---

## **2. CSS Naming Convention**

- **2.1** Use `kebab-case` for CSS class names.  
  Example: `card__image`, `container__card`

- **2.2** For component-specific styles, use the format:  
  `componentName__element` (e.g., `card__image` for an image in the `Card` component)

- **2.3** Use utility classes from Tailwind CSS wherever possible for common properties  
  (e.g., margins, padding, colors)

---

## **3. Tailwind CSS Usage**

- **3.1** Use Tailwind utilities for common tasks like spacing, typography, and colors:

  ```html
  <div class="rounded-lg bg-white p-4 text-gray-800"></div>
  ```

- **3.2** Avoid redundancy: Don't add CSS rules for properties already provided by Tailwind classes.
- **3.3** Create custom styles only when:
  - Tailwind utilities cannot achieve the desired layout or behavior.
  - Styles are specific to a particular component.

---

## **4. Component-Specific CSS**

- **4.1** For each React component, create a corresponding CSS file if it requires custom styles.
- **4.2** CSS file naming: Use the same name as the component, in lowercase and hyphen-separated.
  - Example:
    - Component: `ResultProducts.tsx`
    - CSS File: `result-products.css`
- **4.3** Limit the use of global styles to prevent style conflicts.

---

## **5. Naming Variables & Functions**

- **5.1** Use `camelCase` for variables, functions, and methods.  
  Example: `filterItemsByRating`, `sortItems`

- **5.2** Use `PascalCase` for React components and TypeScript interfaces/types.  
  Example: `ResultProducts`, `ProductProps`

- **5.3** Use `UPPER_SNAKE_CASE` for constants.  
  Example: `BASE_IMAGE_PATH`

---

## **6. JSX Structure**

- **6.1** Keep JSX clean and readable:
  -  Use meaningful class names.
  - Avoid inline styles unless absolutely necessary.
- **6.2** Wrap component logic (e.g., filtering, sorting) in separate functions for clarity.

---

## **7. Example: Component and CSS Pair**

### **7.1 React Component (`ResultProducts.tsx`)**

```tsx
<div className="container__card">
  <CardBase className="card__base">
    <img className="card__image" src={imageSrc} alt="Product Image" />
    <CardContent>
      <CardTitle className="card__content">Product Name</CardTitle>
    </CardContent>
  </CardBase>
</div>
```

### **7.2 CSS File (`result-products.css`)**

```css
.container__card {
  @apply rounded-lg border bg-white p-4 shadow-md;
}

.card__base {
  @apply flex flex-col items-center;
}

.card__image {
  @apply h-40 w-full rounded-md object-cover;
}

.card__content {
  @apply text-lg font-semibold text-gray-800;
}
```
