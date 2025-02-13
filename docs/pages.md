# Pages Documentation

This document describes the functionality and purpose of each page in the application.

## Main Pages

### About Page (/pages/about.astro)

- Simple about page explaining the purpose of the application
- Contains a description of interactive games for kids
- Includes help component explaining keyboard interaction

### Blog Pages

- **Index** (/pages/blog/index.astro): Lists all blog posts in a grid layout
- **Blog Post** (/pages/blog/[slug].astro): Individual blog post template
- **Blog Card** (/pages/blog/BlogCard.astro): Reusable component for blog previews

### Interactive Learning Pages

#### Varnmala Page (/pages/varnmala.astro)

- Displays Hindi and English alphabets
- Uses Alphabet component to render letter lists
- Includes help section explaining the concept

#### Typing Page (/pages/typing.astro)

- Interactive typing practice
- Shows letters, emojis, and spelling animations
- Responds to keyboard input (A-Z)
- Includes visual feedback

#### Reader Page (/pages/reader.astro)

- Text-to-speech functionality
- Multiple speaker options (Mudra, Rutvi)
- Audio control for alphabet pronunciation
- Emoji display with letters

#### Panel Page (/pages/panel.astro)

- 3D rotating letter panel
- Arrow key navigation
- Custom HTML element (letter-panel)
- Interactive letter display

#### Hindi Page (/pages/hindi.astro)

- Hindi alphabet practice
- Color-changing letter display
- Keyboard interaction
- Visual feedback

#### Record Page (/pages/record.astro)

- Audio recording functionality
- Visualization of audio input
- Controls for record/pause/stop
- Clip management with naming and deletion

## Utility Pages

### Error Page (/pages/404.astro)

- Custom 404 error page
- Simple navigation guidance

### Legal Pages

- **Terms** (/pages/terms.astro): Terms and conditions page
- **Privacy** (/pages/privacy.astro): Privacy policy page

## Common Features

Most interactive pages include:

- Help component with instructions
- Keyboard interaction
- Visual feedback
- Consistent layout using BaseLayout
