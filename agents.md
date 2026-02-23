# AI Agent Development Guide - TWS Gurukul

This guide provides comprehensive instructions for AI agents and developers working with the TWS Gurukul trading education platform codebase.

## Tech Stack Overview

- **Framework**: React 19.2 with TypeScript 5.9+
- **Build Tool**: Vite 7.3 (fast HMR and optimized builds)
- **Styling**: Tailwind CSS 4.2 with CSS-based `@theme {}` configuration
- **Routing**: React Router v7
- **Animation**: Framer Motion 12.34
- **Icons**: Lucide React 0.575
- **Security**: DOMPurify 3.3 for XSS protection
- **Hosting**: AWS (S3 + CloudFront CDN)
- **Linting**: ESLint 10 with flat config (`eslint.config.js`)

## Project Structure

```
twsgurukul/
├── public/                 # Static assets
│   ├── robots.txt         # SEO crawler config
│   └── sitemap.xml        # Sitemap for search engines
├── src/
│   ├── components/        # Shared components
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   ├── Navbar.tsx     # Glass morphism navigation
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Seo.tsx        # SEO metadata component
│   │   └── ErrorBoundary.tsx # Error handling
│   ├── pages/             # Application pages
│   │   ├── Home/          # Landing page
│   │   ├── Crypto/        # Crypto Market Mastery course
│   │   ├── Footprint/     # Footprint Mastery System
│   │   ├── SuperStreams/  # Super Streams program
│   │   ├── Mentorship/    # Mentorship program
│   │   ├── PropScanner/   # Prop trading scanner tool
│   │   ├── Quiz/          # Interactive quiz system
│   │   ├── Results/       # Quiz/assessment results
│   │   └── Blogs/         # Blog system
│   │       ├── components/ # Blog-specific components
│   │       ├── hooks/      # Custom hooks
│   │       ├── posts/      # Blog post components
│   │       ├── utils/      # Blog data management
│   │       ├── BlogsPage.tsx
│   │       └── BlogDetailPage.tsx
│   ├── hooks/             # Global custom hooks
│   ├── services/          # External service integrations
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   │   └── security.ts    # XSS protection utilities
│   ├── App.tsx            # Route configuration
│   └── main.tsx           # Application entry with ErrorBoundary
├── index.html             # Entry HTML
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind JS config (v4 compat)
└── package.json           # Dependencies and scripts
```

## Design System & UI Guidelines

### Glass Morphism Theme (Tailwind v4)

Tailwind CSS v4 uses CSS-based configuration. The theme is defined in `index.css` using `@theme {}` blocks instead of `tailwind.config.js`. Key custom utilities are defined in `@layer`:

```css
/* index.css */
@import "tailwindcss";

@theme {
  --font-sans: Inter, system-ui, sans-serif;
  --breakpoint-xs: 475px;
  --animate-float: float 6s ease-in-out infinite;
  /* ... all custom animations */
}

@layer utilities {
  .glass-effect {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(40px) saturate(180%) brightness(120%);
    -webkit-backdrop-filter: blur(40px) saturate(180%) brightness(120%);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
}
```

The project uses a modern glass morphism design system. Key classes available globally:

```css
/* Animations */
.animate-slide-down     /* Smooth entrance animation */
.animate-fade-in        /* Fade in effect */
.animate-float          /* Floating animation for decorative elements */
.animate-float-delayed  /* Delayed floating animation */
.animate-fade-in-up     /* Fade in with upward motion */
```

### Color Palette
- **Background**: Black (#000000)
- **Text**: White/Gray shades
- **CTA/Brand**: #01d449 gradient (green)
- **Accents**: Purple (#8B5CF6), Blue (#3B82F6), Orange (#F97316)
- **Glass elements**: White with low opacity (0.03-0.10)

### Component Guidelines
- Use Framer Motion for complex animations
- Implement responsive design (mobile-first)
- Follow the floating navbar pattern
- Use Lucide React icons consistently
- Apply gradient backgrounds for visual interest
- Add hover effects on interactive elements

### Home Page Components
The redesigned home page showcases best practices:

1. **HeroSection**: Full-screen hero with gradients and floating elements
2. **ModernFeaturesSection**: Grid of glass morphism cards
3. **ProgramsShowcase**: Interactive program cards with gradient accents
4. **SocialProofSection**: Testimonials with ratings and verified badges
5. **ModernCTASection**: Conversion-focused section with urgency elements
6. **Footer**: Multi-column layout with social links and glass effects

## Blog System Development

### Adding New Blog Posts

1. **Create Blog Post Component**
   ```typescript
   // src/pages/Blogs/posts/YourNewPost.tsx
   import React from 'react';
   
   const YourNewPost: React.FC = () => {
     return (
       <article className="prose prose-invert max-w-4xl mx-auto">
         {/* Blog content */}
       </article>
     );
   };
   
   export default YourNewPost;
   ```

2. **Add Metadata** to `src/pages/Blogs/utils/blogData.ts`:
   ```typescript
   {
     id: 'your-post-slug',
     title: 'Your Post Title',
     excerpt: 'Brief description',
     date: '2024-01-15',
     readTime: '5 min read',
     category: 'Trading Strategy',
     tags: ['technical-analysis', 'crypto'],
     slug: 'your-post-slug',
     featured: false
   }
   ```

3. **Update Routing** in `BlogDetailPage.tsx`:
   ```typescript
   case 'your-post-slug':
     return <YourNewPost />;
   ```

### Blog Content Standards
- Use semantic HTML structure
- Include proper headings hierarchy
- Add alt text to all images
- Ensure mobile responsiveness
- Follow SEO best practices

## Coding Standards & Best Practices

### TypeScript Guidelines
```typescript
// ✅ DO: Use proper TypeScript types
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

// ❌ DON'T: Use 'any' type
const handleClick = (data: any) => { /* ... */ };
```

### React Best Practices
- **Components**: Functional components with TypeScript interfaces
- **Hooks**: Custom hooks in dedicated `hooks/` folders
- **State Management**: useState, useContext for local state
- **Error Handling**: Use ErrorBoundary wrapper
- **Performance**: Implement code splitting for routes

### Styling Conventions
```tsx
// Use Tailwind classes with consistent ordering
<div className="
  // Layout
  flex flex-col items-center
  // Spacing
  p-6 mt-4
  // Styling
  bg-black text-white
  // Effects
  glass-effect animate-fade-in
  // Responsive
  md:flex-row lg:p-8
">
```

### File Naming
- Components: `PascalCase.tsx` (e.g., `BlogCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Hooks: `useCamelCase.ts` (e.g., `useScrollPosition.ts`)
- Pages: `PascalCasePage.tsx` (e.g., `CryptoPage.tsx`)

## Security & Performance Guidelines

### Security Best Practices
1. **XSS Protection**: Always use DOMPurify for user-generated content
   ```typescript
   import { sanitizeHtml } from '@/utils/security';
   const clean = sanitizeHtml(userContent);
   ```

2. **Dependencies**: Run security checks before deployment
   ```bash
   npm run security-check
   ```

3. **Environment Variables**: Never commit sensitive data
   - Use `.env.local` for local development
   - Configure AWS environment variables for production

### Performance Optimization
1. **Code Splitting**: Routes are automatically code-split
2. **Image Optimization**: Use WebP format, lazy loading
3. **Bundle Size**: Monitor with `npm run build`
4. **Caching**: Leverage CloudFront CDN caching

## Development Workflow

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates

### Pull Request Checklist
- [ ] Clear, descriptive title and description
- [ ] All lint checks pass (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console.log statements in production code
- [ ] Responsive design tested on mobile/desktop
- [ ] SEO meta tags updated if adding new pages
- [ ] No security vulnerabilities (`npm audit`)
- [ ] Documentation updated if needed

## Development Commands

### Essential Scripts
```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Security audit
npm run security-check

# Production build with all checks
npm run build-secure

# Preview production build
npm run preview
```

### Pre-Deployment Checklist
```bash
# 1. Run all checks
npm run build-secure

# 2. Test production build locally
npm run preview

# 3. Verify all routes work
# - / (Home)
# - /crypto
# - /footprint
# - /super-streams
# - /mentorship
# - /prop-scanner
# - /quiz
# - /results
# - /blog
# - /blog/:slug

# 4. Check responsive design
# - Mobile (320px - 768px)
# - Tablet (768px - 1024px)
# - Desktop (1024px+)
```

### AWS Deployment
```bash
# Build for production
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## AI Agent Integration

### Working with AI Assistants
This codebase is optimized for AI-assisted development. When working with AI agents:

1. **Provide Context**: Share the relevant file paths and component names
2. **Use Type Definitions**: TypeScript interfaces help AI understand data structures
3. **Reference Design System**: Mention glass-effect, animations, and color scheme
4. **Follow Patterns**: Point to existing implementations as examples

### Common AI Tasks

#### Adding New Features
```
"Add a new testimonials section to the HomePage using the glass-effect design,
similar to the existing FeatureCard components. Use Framer Motion for animations."
```

#### Updating Styles
```
"Update the CryptoPage hero section to match the glass morphism navbar design.
Use the existing .glass-effect class and maintain the dark theme."
```

#### Creating Blog Posts
```
"Create a new blog post about 'Risk Management in Crypto Trading' following
the existing blog post structure in src/pages/Blogs/posts/. Include proper
metadata and update the routing."
```

### Best Practices for AI Collaboration
- Always mention the file paths when discussing components
- Reference the design system (glass morphism, dark theme)
- Specify TypeScript types for new interfaces
- Ask for security checks when handling user input
- Request responsive design implementation

## Recent Architecture Updates

### Home Page Redesign
The home page has been completely redesigned with a modern aesthetic:
- Removed old components (Header, BrutalTruthSection, etc.)
- Added new glass morphism components
- Implemented gradient backgrounds and floating animations
- Enhanced visual hierarchy with better typography

### Navigation & Layout
- Fixed scroll-to-top behavior with ScrollToTop component
- Removed default padding from Layout to allow full-screen sections
- Enhanced navbar floating behavior

### Footer Enhancement
- Redesigned with 4-column layout
- Added social media links with glass effect buttons
- Included quick links, programs, and contact information
- Responsive design with proper mobile stacking

## Additional Resources

- **Project README**: Comprehensive overview and setup instructions
- **Tailwind CSS v4 Docs**: [tailwindcss.com](https://tailwindcss.com)
- **React Router v7**: [reactrouter.com](https://reactrouter.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **ESLint Flat Config**: [eslint.org/docs/latest/use/configure/configuration-files](https://eslint.org/docs/latest/use/configure/configuration-files)
- **AWS S3 Static Hosting**: [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

---

**Note**: This guide is maintained alongside the codebase. When making significant architectural changes, please update this document accordingly. 