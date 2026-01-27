# https://le-miric27.github.io/project-miric

Personal portfolio and blog website for Leonardo Mirić, built with Hugo and deployed to GitHub Pages.

## Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **CSS**: [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Code Highlighting**: [Prism.js](https://prismjs.com/)
- **Diagrams**: [MermaidJS](https://mermaid.js.org/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Hosting**: GitHub Pages

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version recommended)

### Development

Start the development server:

```bash
hugo server --bind=0.0.0.0 --port=5000 --baseURL="/" --appendPort=false
```

The site will be available at `http://localhost:5000`.

### Production Build

Generate the static site:

```bash
hugo --minify
```

Output is generated to the `/public` directory.

### Deploy

Deploy to GitHub Pages:

```bash
./deploy.sh
```

## Project Structure

```
.
├── config.toml          # Site configuration
├── content/             # Markdown content
│   ├── blog/            # Blog posts
│   ├── cv/              # CV page
│   └── contact/         # Contact page
├── data/                # YAML data files
│   ├── education.yaml
│   ├── experience.yaml
│   ├── projects.yaml
│   └── skills.yaml
├── layouts/             # Hugo templates
│   ├── _default/        # Base layouts
│   ├── blog/            # Blog templates
│   ├── cv/              # CV template
│   ├── contact/         # Contact template
│   ├── partials/        # Reusable components
│   └── shortcodes/      # Custom shortcodes
├── static/              # Static assets (CSS, JS, images)
│   ├── assets/
│   ├── css/
│   └── js/
└── public/              # Generated output (git submodule for gh-pages)
```

## Features

- Dark mode with system preference detection
- Responsive design
- SEO optimized with JSON-LD structured data
- Blog with syntax highlighting
- Mermaid diagram support
- Data-driven CV sections

## Content Management

### Blog Posts

Create new posts in `content/blog/`:

```markdown
---
title: "Post Title"
date: 2025-01-15
description: "Post description"
author: "Leonardo Mirić"
tags: ["tag1", "tag2"]
categories: ["Category"]
---

Your content here...
```

### CV Data

Update YAML files in `data/` to modify CV sections:

- `experience.yaml` - Work experience
- `education.yaml` - Education history
- `skills.yaml` - Technical skills
- `projects.yaml` - Featured projects

## Git Workflow

- **Development branch**: `develop`
- **Production branch**: `gh-pages`

The deploy script builds the site and force-pushes `/public` to the `gh-pages` branch.

## License

All rights reserved.
