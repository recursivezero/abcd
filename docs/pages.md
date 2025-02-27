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

#### Varnmala Page (/pages/varnmala.astro)

![Varnmala page](../src/assets/screenshots/varnmala.png)

- Displays Hindi and English alphabets
- Uses Alphabet component to render letter lists
- Includes help section explaining the concept

#### Typing Page (/pages/typing.astro)

![Typing practice page](../src/assets/screenshots/typing.png)

- Interactive typing practice
- Shows letters, emojis, and spelling animations
- Responds to keyboard input (A-Z)
- Includes visual feedback

#### Reader Page (/pages/reader.astro)

![Reader page](../src/assets/screenshots/reader.png)

- Text-to-speech functionality
- Multiple speaker options (Mudra, Rutvi)
- Audio control for alphabet pronunciation
- Emoji display with letters

#### Panel Page (/pages/panel.astro)

![3D Panel page](../src/assets/screenshots/panel.png)

- 3D rotating letter panel
- Arrow key navigation
- Custom HTML element (letter-panel)
- Interactive letter display

#### English Page (/pages/hindi.astro)

![English practice page](../src/assets/screenshots/english.png)

- English alphabet practice
- Color-changing letter display
- Keyboard interaction
- Visual feedback

#### Record Page (/pages/record.astro)

![Audio recording page](../src/assets/screenshots/record.png)

- Audio recording functionality
- Visualization of audio input
- Controls for record/pause/stop
- Clip management with naming and deletion

#### Vedic Time Page (/pages/vedic.astro)

![Vedic Time page](../src/assets/screenshots/vedic.png)

- Vedic time unit conversion tool
- Interactive converter with input form
- Comprehensive reference of vedic time units

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
