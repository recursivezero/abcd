# Pages Documentation

This document describes the functionality and purpose of each page in the application.

## Main Pages

### About Page (/pages/about.astro)

- Simple about page explaining the purpose of the application
- Contains a description of interactive games for kids
- Includes help component explaining keyboard interaction

### Blog Pages

- **Index** (/pages/blog/index.astro)
  Lists all blog posts in a grid layout
- **Blog Post** (/pages/blog/[slug].astro)
  Individual blog post template
- **Blog Card** (/pages/blog/BlogCard.astro)
  Reusable component for blog previews

### Interactive Learning Pages

#### Barahkhadi Page (/pages/barahkhadi/index.astro)

![Barahkhadi page](../src/assets/screenshots/barahkhadi.png)

- Grid display of Hindi consonants organized in traditional groups
- Quick view popover showing barahkhadi variations for each consonant
- Interactive buttons to show/hide variations
- Clickable consonants leading to detailed pages
- Responsive layout with consonant groups

#### Panel Page (/pages/panel.astro)

![3D Panel page](../src/assets/screenshots/panel.png)

- 3D rotating letter panel
- Arrow key navigation
- Custom HTML element (letter-panel)
- Interactive letter display

#### Record Page (/pages/record.astro)

![Audio recording page](../src/assets/screenshots/record.png)

- Audio recording functionality
- Visualization of audio input
- Controls for record/pause/stop
- Clip management with naming and deletion

#### Clan Explorer

![Clan explorer page](../src/assets/screenshots/clan.png)

- Family tree visualization tool
- Interactive legend with cultural elements:
  - Gotra (ancestral lineage)
  - Deity (family deity)
  - Caste information
  - Surname relationships

## Utility Pages

### Error Page (/pages/404.astro)

- Custom 404 error page
- Simple navigation guidance

### Legal Pages

- **Terms** (/pages/terms.astro)
  Terms and conditions page
- **Privacy** (/pages/privacy.astro)
  Privacy policy page

## Common Features

Most interactive pages include:

- Help component with instructions
- Keyboard interaction
- Visual feedback
- Consistent layout using BaseLayout
