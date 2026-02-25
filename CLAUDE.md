# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**TWS Gurukul** (`twsgurukul.com`) is a multi-page SPA for Trading With Sidhant LLP — an India-focused trading education business. It serves as a marketing/sales site for three paid programs, a free tool, a quiz funnel, and a blog.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript 5.9 |
| Build | Vite 7.3 |
| Styling | Tailwind CSS 4.2 (v4 compat via `@config` in `index.css`) |
| Routing | React Router v7 (BrowserRouter) |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Sanitization | DOMPurify 3 |
| Linting | ESLint 10 + typescript-eslint 8 |
| Testing | Vitest 4 |
| Package manager | npm |

## Commands

```bash
npm run dev            # Dev server (localhost:5173)
npm run build          # Production build → dist/
npm run preview        # Preview production build
npm run lint           # ESLint on all TS/TSX
npm run test           # Run tests once (vitest run)
npm run test:watch     # Run tests in watch mode
npm run build-secure   # security-check + lint + build
npm run upload:dry     # Preview S3 uploads (no changes)
npm run upload:s3      # Upload assets to S3 (skips existing)
npm run upload:s3:force # Re-upload all assets to S3
```

## Project Structure

```
├── index.html                  # HTML shell (GTM, fonts, OG meta)
├── index.css                   # Tailwind entry + global utilities + keyframes
├── vite.config.ts              # Dev proxy, chunk splitting, console stripping
├── tailwind.config.js          # Brand colors, fonts, animations
├── amplify.yml                 # AWS Amplify build config
├── scripts/upload-to-s3.mjs    # S3 asset upload with sharp optimisation
├── src/
│   ├── main.tsx                # React entry
│   ├── App.tsx                 # Route definitions (React.lazy + Suspense)
│   ├── constants.ts            # CDN_BASE, checkout URLs, WhatsApp, quiz config
│   ├── components/             # Shared: Layout, Navbar, Footer, Seo, UnifiedQuiz/
│   ├── pages/
│   │   ├── Home/               # Homepage with quiz modal integration
│   │   ├── Mentorship/         # ETM sales page (standalone layout)
│   │   ├── Footprint/          # Footprint Mastery sales page (standalone)
│   │   ├── Crypto/             # Crypto Mastery sales page (standalone)
│   │   ├── Blogs/              # Blog listing + detail + posts/
│   │   ├── Legal/              # Terms, Privacy, Disclaimer, Refund, Cookies
│   │   ├── PropScanner/        # Free prop firm safety checker tool
│   │   ├── Quiz/               # Standalone quiz landing page
│   │   └── Results/            # Verified results & claims page
│   ├── hooks/                  # useQuizModal (global quiz state)
│   ├── services/               # binanceV2.ts (Binance API with caching)
│   ├── types/                  # globals.d.ts (dataLayer, gtag, fbq)
│   └── utils/                  # animations, security (DOMPurify), cn
└── public/                     # Static: favicon, robots.txt, sitemap.xml, llms.txt, _headers
```

## Key Architecture Patterns

- **Route-level code splitting**: All pages use `React.lazy()` in App.tsx
- **Standalone course pages**: Mentorship, Footprint, Crypto have their own Header/Footer — they do NOT use the shared `Layout` component
- **Data co-location**: Page-specific data, types, hooks, and utils live inside the page folder (e.g., `src/pages/Crypto/data.ts`)
- **No state management library**: Local React state + sessionStorage (quiz) + localStorage (returning user)
- **Quiz system**: `src/components/UnifiedQuiz/` supports `mode: 'modal' | 'standalone'`
- **`.quiz-scope` CSS class**: Protects quiz components from global mobile CSS overrides
- **Centralised constants**: `src/constants.ts` is the single source of truth for CDN base URL, checkout IDs, WhatsApp number, AiSensy campaign names, and quiz thresholds — always import from here instead of hardcoding

## CDN & Asset Pipeline

All media assets (images, videos, brand files) are served from CloudFront CDN, not bundled locally.

- **CDN base URL**: `https://d2j3cl693ttatt.cloudfront.net` (defined in `src/constants.ts` as `CDN_BASE`)
- **S3 bucket**: `twsgurukul` (ap-south-1)
- **Upload script**: `scripts/upload-to-s3.mjs` — converts large PNGs/JPEGs (>200 KB) to WebP via sharp before upload, sets immutable cache headers
- **Usage pattern**: `${CDN_BASE}/assets/images/...` — never use local `/images/` paths for production assets

### S3 key structure

```
assets/images/            ← content images (proofs, headshots, course screenshots)
assets/images/footprint/  ← footprint-specific testimonial screenshots
assets/images/brand/      ← favicon/, icons/, wordmarks/, lockups/, raw/
assets/videos/            ← testimonial videos (.mp4)
```

## Deployment

- **Hosting**: AWS Amplify (auto-deploys on push)
- **Build config**: `amplify.yml` — runs `npm ci && npm run build`, serves from `dist/`
- **Client-side routing**: Amplify must serve `index.html` for all paths (SPA rewrite rule)

## Brand Design Tokens (Tailwind)

| Token | Hex | Usage |
|---|---|---|
| `deep-slate` | `#2C3539` | Primary dark bg |
| `burnt-amber` | `#C87533` | Primary CTA / accent |
| `brushed-gold` | `#B8956A` | Secondary accent |
| `warm-white` | `#FAF8F5` | Light section bg |
| `wealth-teal` | `#0A8D7A` | Success / secondary CTA |
| `soft-sand` | `#EDE6D8` | Subtle text on dark |
| `navy-black` | `#0B1221` | Deepest dark bg |
| `paper-cream` | `#FFF1E0` | Warm light surface |

### Typography System

**Font Hierarchy:**
- **Satoshi** (primary): Body text, buttons, labels, most UI elements — use `font-sans`
- **Instrument Serif** (accent): Italic highlights in headlines, emphasis — use `font-serif italic`
- **Inter** (fallback): System UI fallback only

**Headline Pattern:**
```jsx
<h1>
  <span className="font-sans font-bold text-white">Regular Part </span>
  <span className="font-serif italic font-normal text-[#C87533]">Emphasized Part</span>
</h1>
```
Combine Satoshi Bold (white) with Instrument Serif italic (burnt-amber/brushed-gold) for visual hierarchy.

## Environment Variables (.env)

```bash
VITE_BINANCE_API_KEY=          # Optional: Binance API for live market widgets
VITE_QUIZ_WEBHOOK_URL=         # Optional: Quiz lead capture webhook
VITE_NEWSLETTER_WEBHOOK_URL=   # Optional: Footer newsletter signup webhook
```

All optional — the app works without them.

## Analytics & Tracking

- **GTM** (GTM-TMQ589CP) loaded in index.html
- **GA4** via `window.gtag` + **Facebook Pixel** via `window.fbq`
- Quiz fires `dataLayer.push()` events: `quiz_open`, `quiz_answer`, `quiz_lead_submit`, `quiz_result_view`
- Crypto page has dedicated tracking: scroll depth, time-on-page, returning user detection
- Checkout clicks tracked via `getCheckoutUrl()` in `src/constants.ts` (fires `checkout_click` to dataLayer)

## Adding a Blog Post

1. Create `src/pages/Blogs/posts/YourPost.tsx`
2. Add metadata to `src/pages/Blogs/utils/blogData.ts`
3. Add `case 'your-slug': return <YourPost />;` in `BlogDetailPage.tsx`

## Payment / Checkout

Use `getCheckoutUrl(course, utmContent)` from `src/constants.ts` — it builds the full URL with UTM params and fires a GTM tracking event. Checkout IDs and the base URL are centralised in `CHECKOUT_IDS`. Checkout opens in `_blank` on `learn.tradingwithsidhant.com`.

## TypeScript Config

- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`
- Target: ES2020, module resolution: bundler

## Security

- DOMPurify for HTML sanitization (`src/utils/security.ts`)
- CSP + HSTS + X-Frame-Options DENY via `public/_headers`
- Console/debugger stripped in production builds via esbuild `drop: ['console', 'debugger']`
- `npm audit` in `build-secure` script
