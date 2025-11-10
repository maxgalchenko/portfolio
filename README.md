# Portfolio

![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript%205.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Emotion](https://img.shields.io/badge/Emotion-D36AC2?style=for-the-badge&logo=emotion&logoColor=white) ![React Router](https://img.shields.io/badge/React%20Router%207-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Overview

A personal portfolio website showcasing professional work experience across multiple companies. Features responsive design, smooth page transitions, CV download functionality, and direct links to contact information. Built with modern React patterns and TypeScript for type safety.

## Key Features

- Interactive company showcase with detailed work experience pages
- Smooth page transitions powered by React Spring animations
- Responsive layout with breakpoint-aware components
- CV download functionality (PDF/DOCX formats)
- Direct links to professional profiles and contact information
- Accessible UI with semantic HTML and keyboard navigation support
- **Code Quality Tools**: ESLint, Prettier, and Husky pre-commit hooks ensure consistent code quality

## Tech Stack

React 19, TypeScript 5.7, Vite 6, Emotion CSS-in-JS, React Router v7, React Spring v10

## Architecture

Built with Vite for blazing-fast development and optimized production builds. Uses React Router v7 for client-side routing with enhanced features. Emotion provides CSS-in-JS styling with a centralized theme system. Custom hooks for breakpoint detection enable responsive behavior. Page transitions implemented with React Spring v10 animations. Component structure organized by pages and common reusable components. Vitest for modern, fast unit testing.

## Code Quality & Developer Experience

This project includes a comprehensive code quality setup to ensure consistent, error-free code:

- **ESLint 9**: Modern linting with flat config for TypeScript and React 19
- **Prettier**: Automatic code formatting for consistent style
- **Husky**: Git hooks that automatically run checks before commits
- **lint-staged**: Only lint and format files that are being committed (fast!)
- **TypeScript**: Full type checking to catch errors at compile time

### Pre-commit Hooks

Every commit automatically runs:

- ✨ **ESLint** with auto-fix on staged TypeScript/React files
- 💅 **Prettier** formatting on staged files
- 🎯 Only processes changed files (typically completes in 2-5 seconds)

This ensures all committed code is properly formatted and free of common errors without slowing down your workflow.

## Performance & Accessibility

Optimized bundle with code-splitting via React Router. Image optimization with WebP format for company showcases. Semantic HTML structure throughout. Accessibility features include visually hidden elements, proper ARIA patterns, and keyboard navigation support. Global styles normalized for consistent cross-browser rendering.

## Prerequisites

- Node.js: `18.17.0` or higher (React 19 recommended with Node 18+)
- npm: `10.9.0` or higher

## Installation

```bash
git clone https://github.com/maxgalchenko/Portfolio.git
cd Portfolio
npm install --legacy-peer-deps
```

> **Note:** The `--legacy-peer-deps` flag is used to handle React 19 peer dependencies that some packages haven't yet formally declared support for, though they work correctly.

## Quick Start

```bash
npm run dev
```

Open <http://localhost:3000>

## Available Scripts

### Development

- `npm run dev` – Start Vite development server with HMR
- `npm run build` – Create optimized production build
- `npm run preview` – Preview production build locally

### Testing

- `npm run test` – Run Vitest test suite
- `npm run test:ui` – Run tests with Vitest UI

### Code Quality

- `npm run lint` – Run ESLint to check for code issues
- `npm run lint:fix` – Run ESLint and automatically fix issues
- `npm run format` – Format code with Prettier
- `npm run format:check` – Check if code is formatted correctly
- `npm run type-check` – Run TypeScript type checking without emitting files

## Recent Updates

**React 19 Migration** (November 2025): Successfully migrated from React 18 to React 19 with enhanced performance and modern tooling. See [MIGRATION_REACT19.md](./MIGRATION_REACT19.md) for detailed migration notes.

### What's New

- ⚡ **React 19**: Latest React version with improved performance and new features
- 🚀 **Vite 6**: Lightning-fast development server and optimized builds
- 📦 **React Router v7**: Enhanced routing capabilities
- 🎨 **React Spring v10**: Updated animation library with React 19 support
- 🧪 **Vitest**: Modern, fast testing framework replacing Jest
- 📘 **TypeScript 5.7**: Latest TypeScript with improved type checking
- ✨ **ESLint 9 + Prettier**: Automatic code quality and formatting
- 🪝 **Husky + lint-staged**: Fast pre-commit hooks for consistent code

## Screenshots

![Main](./src/assets/project_screenshot.png)

---

Built with ❤️ by [Maksym Galchenko](https://github.com/maxgalchenko)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/galchenko-max/) [![Portfolio](https://img.shields.io/badge/Portfolio-Visit-green?style=for-the-badge&logo=web)](https://maxgalchenko.github.io/portfolio/) [![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:galchenko.maksym@gmail.com) ![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
