# TWS Gurukul - Trading Education Platform

[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-blue)](https://tailwindcss.com/)

The official repository for TWS Gurukul, a modern trading education platform dedicated to transforming beginners into market masters. Built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Features](#pages--features)
- [Deployment](#deployment)
- [SEO & AI Discoverability](#seo--ai-discoverability)
- [Security & Performance](#security--performance)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

TWS Gurukul is a comprehensive trading education platform that serves as the primary hub for professional trading courses. The platform showcases three flagship programs:

- **1-on-1 Mentorship** - Personalized trading mentorship with live portfolio access and daily trade setups
- **Footprint Mastery** - Institutional order flow and volume analysis using footprint charts
- **Crypto Trading** - Comprehensive crypto trading covering Bitcoin, altcoins, and on-chain analysis

The site also includes a blog, prop firm safety checker tool, interactive trading style quiz, and full legal pages.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19.2 + TypeScript 5.9 |
| Build | Vite 7.3 |
| Styling | Tailwind CSS 4.2 (compat mode via `@config`) |
| Routing | React Router v7 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Security | DOMPurify |
| Linting | ESLint 10 |

## Getting Started

### Prerequisites

- Node.js v20+
- npm

### Install & Run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run security-check` | Audit deps + check outdated |
| `npm run build-secure` | Security check + lint + build |

### Environment Variables

Copy `.env.example` and fill in values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_BINANCE_API_KEY` | Binance API key for live market data widgets (optional) |
| `VITE_QUIZ_WEBHOOK_URL` | Webhook URL for quiz lead capture (optional) |
| `VITE_NEWSLETTER_WEBHOOK_URL` | Webhook URL for footer WhatsApp signup (optional) |

## Project Structure

```
twsgurukul/
├── public/
│   ├── robots.txt          # Crawler rules (incl. AI bots)
│   ├── sitemap.xml         # XML sitemap
│   ├── llms.txt            # LLM-readable site description
│   └── _headers            # Security headers
├── src/
│   ├── components/         # Shared components
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Seo.tsx         # Dynamic meta tags
│   │   ├── StructuredData.tsx  # Schema.org markup
│   │   ├── ErrorBoundary.tsx
│   │   ├── UnifiedQuiz/    # Quiz component system
│   │   └── ...
│   ├── pages/
│   │   ├── Home/           # Landing page
│   │   ├── Mentorship/     # 1-on-1 Mentorship program
│   │   ├── Footprint/      # Footprint Mastery course
│   │   ├── Crypto/         # Crypto Trading course
│   │   ├── PropScanner/    # Prop firm safety checker
│   │   ├── Quiz/           # Trading style quiz
│   │   ├── Results/        # Results & claims
│   │   ├── Blogs/          # Blog system
│   │   └── Legal/          # Terms, Privacy, etc.
│   ├── hooks/              # Custom hooks
│   ├── services/           # External API integrations
│   ├── styles/             # Global CSS
│   ├── utils/              # Utilities (animations, security, etc.)
│   ├── App.tsx             # Route configuration
│   └── main.tsx            # Entry point
├── index.html              # HTML shell
├── index.css               # Tailwind imports + custom utilities
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config (v4 compat mode)
└── package.json
```

## Pages & Features

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, programs overview, social proof |
| `/mentorship` | Mentorship | 1-on-1 mentorship program sales page |
| `/footprint` | Footprint | Footprint Mastery course page |
| `/crypto` | Crypto | Crypto Trading course page |
| `/prop-firm-safety-checker` | PropScanner | Free tool to verify prop firm legitimacy |
| `/quiz` | Quiz | Interactive trading style quiz |
| `/results-and-claims` | Results | Verified trading results and testimonials |
| `/blog` | Blog | Blog listing page |
| `/blog/:slug` | Blog Post | Individual blog post |
| `/terms` | Terms | Terms of service |
| `/privacy` | Privacy | Privacy policy |
| `/disclaimer` | Disclaimer | Trading disclaimer |
| `/refunds` | Refunds | Refund policy |
| `/cookies` | Cookies | Cookie policy |

### Blog System

Blog posts are defined in `src/pages/Blogs/utils/blogData.ts` with components in `src/pages/Blogs/posts/`.

To add a new blog post:
1. Create a post component in `src/pages/Blogs/posts/YourPost.tsx`
2. Add metadata to `blogData.ts`
3. Add the route mapping in `BlogDetailPage.tsx`

### Design System

The project uses a dark theme with glass morphism effects. Tailwind CSS v4 runs in compatibility mode - the existing `tailwind.config.js` is loaded via `@config` in `index.css`. Key design tokens:

- **Brand green**: `#01d449` gradient for CTAs
- **Fonts**: Satoshi (primary), Inter (secondary), Instrument Serif (accent)
- **Glass effects**: Defined as utilities in `index.css`

## Deployment

Production build outputs to `dist/`. All routes use client-side routing (React Router), so the hosting platform must serve `index.html` for all paths.

```bash
npm run build
```

## SEO & AI Discoverability

| File | Purpose |
|------|---------|
| `robots.txt` | Allows all search engines + AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.). Blocks aggressive scrapers. |
| `sitemap.xml` | All public pages with accurate `lastmod` dates and priority values |
| `llms.txt` | [llmstxt.org](https://llmstxt.org/) compliant file for LLM inference-time discovery |
| `_headers` | Security headers (CSP, HSTS, X-Frame-Options, etc.) |

Each page also renders dynamic `<meta>` tags and Schema.org structured data via the `Seo` and `StructuredData` components.

## Security & Performance

### Security
- XSS protection via DOMPurify
- Content Security Policy headers
- HTTPS enforced with HSTS
- Regular `npm audit` via `build-secure` script

### Performance
- Route-level code splitting with `React.lazy`
- Non-blocking font loading
- Vite tree shaking + Terser minification
- Console statements stripped in production builds

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes with meaningful messages
4. Push and open a Pull Request

## License

This project is proprietary software. All rights reserved.
