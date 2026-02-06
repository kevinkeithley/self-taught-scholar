# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Self-Taught Scholar - an Astro 5.x educational platform with Blog, Essays, Courses (Scrolls), and Library (Atoms). Uses Every Layout primitives for CSS composition, Tailwind CSS v4, and Buttondown.email for newsletter.

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run astro check  # Type-check Astro files
```

## Content Collections

Defined in `src/content.config.ts`:

| Collection | Path | Key Fields |
|------------|------|------------|
| `blog` | `src/content/blog/` | title, description, pubDate |
| `essays` | `src/content/essays/` | title, description, pubDate, school? |
| `courses` | `src/content/courses/` | title, courseSlug, courseTitle, lessonOrder |
| `library` | `src/content/library/` | title, description, school (required) |

**Four Schools taxonomy**: `pattern-and-play`, `story-and-expression`, `society-and-self`, `making`

## Routing

| Section | Index | Detail |
|---------|-------|--------|
| Blog | `/blog` | `/blog/[slug]` |
| Essays | `/essays` | `/essays/[slug]` |
| Courses | `/courses` | `/courses/[courseSlug]/[lessonSlug]` |
| Library | `/library` | `/library/[slug]` |

## Every Layout Primitives

Located in `src/layouts/primitives/`. Import individually or from index:

```astro
import Stack from '../layouts/primitives/Stack.astro';
import { Center, Grid, Cluster } from '../layouts/primitives';
```

| Primitive | Purpose | Key Props |
|-----------|---------|-----------|
| `Stack` | Vertical flow with consistent spacing | `space` |
| `Cluster` | Horizontal wrapping groups | `space`, `justify`, `align` |
| `Sidebar` | Two-column layout that wraps | `sideWidth`, `contentMin`, `side` |
| `Grid` | Auto-fit responsive grid | `min`, `space` |
| `Center` | Max-width centering with gutters | `max`, `gutters` |
| `Box` | Padding/border wrapper | `padding`, `borderWidth` |

## Design Tokens

Defined in `src/styles/global.css`:

- **Space scale**: `--space-3xs` through `--space-3xl` (fluid with clamp)
- **Type scale**: `--step--2` through `--step-5` (fluid)
- **Measure**: `--measure` (65ch), `--measure-narrow`, `--measure-wide`
- **Colors**: `--color-text`, `--color-accent`, `--color-border`, etc.

## Layouts

- `BlogPost.astro` - Blog and essay articles
- `TutorialLayout.astro` - Course lessons with sidebar navigation
- `DocsLayout.astro` - Library articles with school-organized sidebar

## Key Components

- `Header.astro` - Site navigation using Cluster
- `Footer.astro` - Subscribe form and copyright
- `CourseSidebar.astro` - Lesson progress navigation
- `LibrarySidebar.astro` - School-organized atom navigation

## Environment Variables

- `BUTTONDOWN_API_KEY` - Required for `/api/subscribe` endpoint
