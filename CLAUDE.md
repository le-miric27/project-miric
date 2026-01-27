# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/blog website for a Full-Stack Developer, built with Hugo static site generator and deployed to GitHub Pages at `https://le-miric27.github.io/project-miric`.

## Commands

```bash
# Development server
hugo server --bind=0.0.0.0 --port=5000 --baseURL="/" --appendPort=false

# Production build (outputs to /public)
hugo --minify

# Deploy to GitHub Pages
./deploy.sh
```

## Architecture

### Hugo Structure
- `config.toml` - Site configuration, menu system, syntax highlighting settings
- `layouts/` - Hugo templates with base layout (`_default/baseof.html`) using flexbox for sticky footer
- `layouts/partials/` - Reusable components (head, header, footer, social-icons)
- `layouts/shortcodes/` - Custom shortcodes (e.g., `mermaid.html` for diagrams)
- `content/` - Markdown content (`blog/`, `cv/`, `contact/`)
- `data/` - YAML files for structured data (education, experience, projects, skills)
- `static/` - CSS, JS, and assets served as-is
- `public/` - Generated output directory (has its own git repo for gh-pages)

### Content Types
- `content/blog/*.md` - Blog posts (use `layouts/blog/single.html`)
- `content/cv/index.md` - CV page with tabbed sections (use `layouts/cv/single.html`)
- `content/contact/index.md` - Contact page (use `layouts/contact/single.html`)

Note: Use `index.md` (not `_index.md`) for single pages that need custom templates.

### Styling
- Tailwind CSS via CDN (`cdn.tailwindcss.com`) with inline config in `layouts/partials/head.html`
- Dark mode: class-based toggle with localStorage persistence and system preference detection
- Prism.js for code syntax highlighting (prism-tomorrow theme)
- MermaidJS for flowcharts and diagrams

### JavaScript
- `static/js/theme.js` - Dark mode toggle logic with flash prevention
- `static/js/search.js` - Search functionality

### Data-Driven Content
YAML files in `data/` feed Hugo templates via range loops:
- `education.yaml`, `experience.yaml`, `projects.yaml`, `skills.yaml`

### Shortcodes
Use in markdown files:
```markdown
{{</* mermaid */>}}
graph TD
    A[Start] --> B[End]
{{</* /mermaid */>}}
```

## Git Workflow

- Development branch: `develop`
- Production branch: `gh-pages`
- Deploy script force-pushes `/public` to `gh-pages` branch
