# TWS Gurukul - Trading Education Platform

[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-blue)](https://tailwindcss.com/)

The official repository for TWS Gurukul, a modern trading education platform dedicated to transforming beginners into market masters. Built with cutting-edge web technologies and hosted on AWS for optimal performance and reliability.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Core Features](#core-features)
  - [Trading Courses](#trading-courses)
  - [Blog System](#blog-system)
  - [Design System](#design-system)
- [Deployment](#deployment)
- [Security & Performance](#security--performance)
- [SEO & Analytics](#seo--analytics)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

TWS Gurukul is a comprehensive trading education platform that serves as the primary hub for our professional trading courses. The platform showcases our innovative teaching methodology and provides access to three flagship programs:

- **Crypto Market Mastery** - Master cryptocurrency trading strategies
- **Footprint Mastery System** - Advanced order flow and volume analysis
- **Super Streams** - Elite trading mentorship program

The website features a modern, responsive design with glass morphism effects, comprehensive blog system for market insights, and is optimized for conversion and user engagement.

## Key Features

✨ **Modern UI/UX**
- Glass morphism design throughout the application
- Floating navbar with dynamic transparency
- Smooth animations powered by Framer Motion
- Dark theme optimized for extended viewing
- Fully responsive across all devices

📚 **Educational Content**
- Three specialized trading courses
- Comprehensive blog system with trading insights
- Featured posts and dynamic routing
- SEO-optimized content delivery

🎨 **Home Page Design**
- Hero section with gradient backgrounds and floating elements
- Glass morphism feature cards with hover effects
- Program showcase with interactive cards
- Social proof section with testimonials
- Modern footer with quick links and social media

🛡️ **Security & Performance**
- XSS protection with DOMPurify
- Optimized build with code splitting
- Production-ready security configurations
- AWS hosting for reliability and speed

🔧 **Developer Experience**
- TypeScript for type safety
- Modular component architecture
- Hot module replacement with Vite
- ESLint configuration for code quality

## Tech Stack

### Core Technologies
- **Frontend Framework:** React 19.2 with TypeScript
- **Build Tool:** Vite 7.3 for lightning-fast development
- **Styling:** Tailwind CSS 4.2 with CSS-based theme configuration
- **Routing:** React Router v7
- **Animation:** Framer Motion 12 for smooth transitions
- **Icons:** Lucide React for consistent iconography

### Additional Libraries
- **Security:** DOMPurify for XSS protection
- **Development:** ESLint 10, PostCSS
- **Type Safety:** TypeScript 5.9+ with strict mode

### Infrastructure
- **Hosting:** AWS (Amazon Web Services)
- **CDN:** CloudFront for global content delivery
- **SSL:** Full HTTPS encryption

## Getting Started

### Prerequisites

- Node.js v20+ (LTS recommended)
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/twsgurukul.git
cd twsgurukul
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

1. Run security checks and build:
```bash
npm run build-secure
```

2. Preview the production build:
```bash
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks
- `npm run security-check` - Check for vulnerabilities
- `npm run build-secure` - Run all checks and build

## Project Structure

```
twsgurukul/
├── public/               # Static assets
│   ├── robots.txt       # SEO crawler configuration
│   └── sitemap.xml      # Site structure for search engines
├── src/
│   ├── components/      # Shared components
│   │   ├── Layout.tsx   # Main layout wrapper
│   │   ├── Navbar.tsx   # Glass morphism navigation
│   │   ├── Footer.tsx   # Site footer
│   │   ├── Seo.tsx      # SEO metadata component
│   │   └── ErrorBoundary.tsx # Error handling
│   ├── pages/           # Application pages
│   │   ├── Home/        # Landing page
│   │   ├── Crypto/      # Crypto Market Mastery course
│   │   ├── Footprint/   # Footprint Mastery System
│   │   ├── SuperStreams/ # Super Streams program
│   │   ├── Mentorship/  # Mentorship program
│   │   ├── PropScanner/ # Prop trading scanner tool
│   │   ├── Quiz/        # Interactive quiz system
│   │   ├── Results/     # Quiz/assessment results
│   │   └── Blogs/       # Blog system
│   ├── hooks/           # Global custom hooks
│   ├── services/        # External service integrations
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
│       └── security.ts  # XSS protection utilities
│   ├── App.tsx          # Route configuration
│   └── main.tsx         # Application entry
├── index.html           # Entry HTML
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind JS config (v4 compat)
└── package.json         # Project dependencies
```

## Core Features

### Trading Courses

The platform features three comprehensive trading programs:

1. **Crypto Market Mastery**
   - Complete cryptocurrency trading education
   - Technical and fundamental analysis
   - Risk management strategies
   - Live trading examples

2. **Footprint Mastery System**
   - Advanced order flow analysis
   - Volume profile trading
   - Market microstructure insights
   - Professional trading tools

3. **Super Streams**
   - Elite mentorship program
   - Live trading sessions
   - Personalized coaching
   - Community access

### Blog System

A comprehensive content management system for trading insights:

#### Features
- **Dynamic Routing**: `/blog` for listing, `/blog/:slug` for posts
- **Featured Posts**: Highlight important content
- **Metadata Management**: Categories, tags, read time
- **Type-Safe**: Full TypeScript implementation
- **SEO Optimized**: Meta tags and structured data

#### Adding New Blog Posts

1. Create post component in `src/pages/Blogs/posts/`
2. Add metadata to `src/pages/Blogs/utils/blogData.ts`
3. Update routing in `BlogDetailPage.tsx`

### Design System

#### Glass Morphism Theme (Tailwind v4)

The project uses Tailwind CSS v4 in compatibility mode. The existing `tailwind.config.js` is loaded via `@config` in `index.css` (the upgrade tool could not auto-migrate the JS config to full CSS `@theme {}` format):

```css
/* index.css */
@import "tailwindcss";

@config './tailwind.config.js';

@layer utilities {
  .glass-effect {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
}
```

Custom animations, screens, and font families remain in `tailwind.config.js`. Full migration to `@theme {}` is a future step.

#### Key Design Elements
- **Floating Navbar**: Dynamic transparency on scroll
- **Dark Theme**: Optimized for extended viewing
- **Smooth Animations**: Framer Motion transitions
- **Responsive Grid**: Mobile-first approach
- **Brand Colors**: #01d449 gradient for CTAs

## Deployment

### AWS Infrastructure

The application is hosted on AWS for optimal performance:

1. **S3 Bucket**: Static website hosting
2. **CloudFront CDN**: Global content delivery
3. **Route 53**: DNS management
4. **Certificate Manager**: SSL/TLS certificates

### Deployment Process

1. Build the application:
```bash
npm run build
```

2. Deploy to AWS S3:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

3. Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Security & Performance

### Security Measures
- **XSS Protection**: DOMPurify sanitization
- **HTTPS Only**: Full SSL encryption
- **Security Headers**: Configured via CloudFront
- **Dependency Scanning**: Regular npm audits

### Performance Optimizations
- **Code Splitting**: Dynamic imports for routes
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed images and fonts
- **Caching Strategy**: CloudFront edge caching
- **Lazy Loading**: Components loaded on demand

### Build Optimizations
```javascript
// vite.config.ts optimizations
- Terser minification
- Source maps disabled in production
- Console statements removed
- Chunking strategy for optimal loading
```

## SEO & Analytics

### SEO Implementation
- **Meta Tags**: Dynamic SEO component for each page
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Crawler configuration
- **Structured Data**: Schema.org markup
- **Open Graph**: Social media optimization

### Analytics Integration

1. **Google Tag Manager**:
   - Add GTM snippet to `index.html`
   - Configure tracking events
   - Set up conversion goals

2. **Performance Monitoring**:
   - Core Web Vitals tracking
   - User engagement metrics
   - Conversion funnel analysis

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## Recent Updates

### Dependency Update (2026-02-23)
- **React 19.2**: Latest React with improved concurrent features
- **Tailwind CSS v4**: Migrated to CSS-based `@theme {}` configuration
- **ESLint v10**: Updated flat config with `defineConfig` wrapper
- **Vite 7.3**: Latest build tooling
- **All packages**: Updated to latest stable versions

### Home Page Redesign (Latest)
- **Hero Section**: New glass morphism design with gradient backgrounds and floating animations
- **Feature Cards**: Six modern cards showcasing platform benefits with hover effects
- **Program Showcase**: Interactive program cards with gradient accents
- **Social Proof**: Testimonials and statistics section
- **Modern Footer**: Professional footer with quick links, social media, and contact info
- **Animations**: Smooth entrance animations and floating elements

### Navigation Improvements
- Fixed scroll-to-top behavior on route changes
- Resolved exit intent popup positioning on SuperStreams page
- Enhanced navbar spacing and floating behavior

## License

This project is proprietary software. All rights reserved.

---

<p align="center">
  Built with ❤️ by TWS Gurukul Team
</p> 