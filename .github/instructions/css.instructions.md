---
applyTo: "**/*.css"
---

## Project coding standards for CSS

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

- Use BEM (Block Element Modifier) methodology for class naming
- Use lowercase and hyphens for class names (e.g., `.block__element--modifier`)
- Use meaningful class names that describe the purpose of the element
- Use shorthand properties where applicable (e.g., `margin: 0 auto;` instead of `margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto;`)
- Use CSS variables for colors and common values to ensure consistency
- Use comments to explain complex styles or layout decisions
- Use media queries for responsive design, keeping them close to the relevant styles
- Avoid using IDs for styling; prefer classes
- Use grid in place of flex wherever possible for layout instead of floats
- Use `box-sizing: border-box;` to simplify box model calculations
- Use css scroll snap properties for scrollable sections
- writ css in nested structure to improve readability
- Use `rem` or `em` units for font sizes and spacing to ensure scalability
- Use `@import` for modular CSS files, but prefer CSS preprocessors like SASS or LESS for better organization
- Use `:root` for defining global CSS variables
- Use `transition` and `transform` for animations instead of JavaScript where possible
- Use `:hover`, `:focus`, and `:active` pseudo-classes for interactive elements
- Use `@media` queries for responsive design, keeping them close to the relevant styles
- Use `@supports` for feature queries to ensure compatibility with older browsers
- Use `@keyframes` for custom animations, keeping them modular and reusable
- Use `@font-face` for custom fonts, ensuring proper fallbacks
- Use `@layer` for CSS layering to control specificity and avoid conflicts
- Use `@apply` for utility classes in Tailwind CSS or similar frameworks
