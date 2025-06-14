# TWS Gurukul - Trading Education Website

This is the official repository for the TWS Gurukul website, a platform dedicated to transforming traders from beginners to market masters. The site is built with React, TypeScript, and Vite, and styled with Tailwind CSS.

## Table of Contents

- [Project Purpose](#project-purpose)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Folder and File Structure](#folder-and-file-structure)
- [Blog System](#blog-system)
  - [Features](#features)
  - [Adding New Blog Posts](#adding-new-blog-posts)
  - [Current Posts](#current-posts)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
- [SEO and Best Practices](#seo-and-best-practices)
- [Analytics](#analytics)
  - [Integrating Google Tag Manager](#integrating-google-tag-manager)
- [Contributing](#contributing)
- [Known Issues & TODOs](#known-issues--todos)

## Project Purpose

The TWS Gurukul website serves as the main information and marketing hub for our trading courses. It aims to attract and convert potential students by showcasing our unique teaching philosophy, course offerings, and success stories. The website features dedicated pages for our main programs: the "Footprint Mastery System", "Crypto Market Mastery", and a comprehensive blog system for sharing trading insights and market wisdom.

## Live Demo

[Link to the deployed website](https://www.twsgurukul.com/) (Replace with your actual URL)

## Technologies Used

- **Framework:** [React](https://reactjs.org/) (v19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) (for modern, consistent icons)
- **Routing:** [React Router](https://reactrouter.com/)

## Folder and File Structure

The codebase is organized with a focus on modularity and separation of concerns.

```
twsgurukul/
├── public/               # Static assets, robots.txt, sitemap.xml
├── src/
│   ├── components/       # Shared, reusable components (Layout, Navbar, Footer, Seo)
│   ├── pages/            # Main application pages
│   │   ├── Blogs/        # Blog system (NEW)
│   │   │   ├── components/ # Blog-specific components (BlogCard, etc.)
│   │   │   ├── hooks/      # Custom hooks for blog functionality
│   │   │   ├── posts/      # Individual blog post components
│   │   │   ├── utils/      # Blog data management and utilities
│   │   │   ├── BlogsPage.tsx      # Main blog listing page
│   │   │   ├── BlogDetailPage.tsx # Individual blog post viewer
│   │   │   └── index.ts           # Module exports
│   │   ├── Crypto/       # Crypto Market Mastery page
│   │   │   ├── components/ # Components specific to the Crypto page
│   │   │   ├── hooks/      # Custom hooks for the Crypto page
│   │   │   ├── CryptoPage.tsx
│   │   │   └── ...
│   │   ├── Footprint/    # Footprint Mastery System page
│   │   │   ├── components/
│   │   │   ├── FootprintPage.tsx
│   │   │   └── ...
│   │   └── Home/         # Home page
│   │       ├── components/
│   │       └── HomePage.tsx
│   ├── utils/            # Utility functions (currently empty)
│   ├── App.tsx           # Root component with routing setup
│   └── main.tsx          # Application entry point
├── index.html            # Main HTML file with SEO tags
├── package.json
└── ...
```

## Blog System

The website includes a comprehensive blog system for sharing trading insights and market analysis. The blog system features:

### Features
- **Dynamic routing** - `/blog` for listing, `/blog/:slug` for individual posts
- **Featured posts** system with prominent display
- **Responsive design** following the site's dark theme
- **Metadata management** - dates, categories, read time, tags
- **Type-safe** implementation with full TypeScript support
- **Modular architecture** for easy content management

### Adding New Blog Posts

1. **Create the blog post component** in `src/pages/Blogs/posts/`
2. **Add metadata** to `src/pages/Blogs/utils/blogData.ts`
3. **Update routing** in `src/pages/Blogs/BlogDetailPage.tsx`

See `src/pages/Blogs/README.md` for detailed instructions and examples.

### Current Posts
- **AI Automation for Zerodha Portfolio** - Complete guide on automating trading with AI tools

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

## Design System & UI Components

The project features a modern design system with premium visual effects:

### Glass Morphism Navigation
- **Floating navbar** with dynamic transparency based on scroll position
- **Liquid glass effects** using `backdrop-blur` and custom CSS filters
- **Responsive design** with cohesive mobile menu experience
- **Smooth transitions** and animations throughout

### Custom CSS Classes (Available Site-wide)
Located in `index.css` for reuse across components:

```css
/* Glass morphism effect */
.glass-effect {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px) saturate(180%) brightness(120%);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Smooth slide-down animation */
.animate-slide-down {
  animation: slideDown 0.4s ease-out forwards;
}

/* Fade-in animation */
.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}
```

### Usage Guidelines
- Use `glass-effect` class for premium glass morphism components
- Apply `animate-slide-down` for smooth entrance animations
- Combine with Tailwind's `backdrop-blur-*` utilities for enhanced effects
- Use `lucide-react` icons for consistent iconography

## SEO and Best Practices

The project has been set up with SEO in mind.

-   **Meta Tags:** The `index.html` file contains general meta tags (description, OG, Twitter). Each page then uses a custom `<Seo>` component to provide its own title and description, leveraging React 19's built-in support for metadata.
-   **`robots.txt`:** A `public/robots.txt` file is included to allow all search engines to crawl the site.
-   **`sitemap.xml`:** A `public/sitemap.xml` file is provided to help search engines discover the site's pages. **Remember to update the URLs and `lastmod` date in this file.**
-   **Image Alt Attributes:** When adding images, make sure to include descriptive `alt` attributes for accessibility and SEO.

## Analytics

### Integrating Google Tag Manager

Google Tag Manager (GTM) is recommended for managing analytics and other tracking scripts.

1.  **Create a GTM account** and a container for your website.
2.  You will be given two code snippets. Paste the first snippet as high in the `<head>` of your `index.html` as possible.
3.  Paste the second snippet immediately after the opening `<body>` tag in `index.html`.

**Note on Privacy:** When using analytics, consider user privacy. You may need to add a cookie consent banner to comply with regulations like GDPR and CCPA.

## Contributing

Contributions are welcome! If you want to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

## Recent Major Updates

### Navigation System Overhaul ✨
- **Replaced traditional navbar** with modern floating glass morphism design
- **Dynamic transparency** - navbar adapts to scroll position for premium feel
- **Mobile-first responsive** design with cohesive glass menu
- **Lucide React icons** integration for consistent iconography
- **Custom animations** with smooth slide-down and fade-in effects

### Design System Establishment 🎨
- **Reusable CSS classes** added to `index.css` for site-wide consistency
- **Glass morphism utilities** available for any component
- **Animation library** with custom keyframes for smooth interactions
- **Brand color updates** - CTA buttons now use `#01d449` gradient

### Technical Improvements 🔧
- **Enhanced backdrop filters** with browser compatibility (`-webkit-backdrop-filter`)
- **Optimized mobile experience** with unified visual language
- **Scroll-based interactions** for dynamic UI state changes
- **Type-safe icon system** with Lucide React integration

## Known Issues & TODOs

-   **Styling on CryptoPage:** The `Seo` component on the `CryptoPage` is not perfectly placed in the component tree due to some issues with the code generation tool. This does not affect functionality but could be cleaned up.
-   **Prop Drilling:** The `handleSmoothScroll` function on the `CryptoPage` is passed down through multiple components. This could be refactored to use React Context for better state management.
-   **Animation on FootprintPage:** The scroll animation on the `FootprintPage` is implemented with a `useEffect` and direct DOM manipulation. This could be improved by using a dedicated animation library like [Framer Motion](https://www.framer.com/motion/) or a custom hook.
-   **Glass Effect Expansion:** Consider applying the new glass morphism design system to other components (cards, modals, etc.)
-   **Animation Performance:** Monitor performance impact of backdrop filters on lower-end devices
-   **Accessibility (A11y) Check:** A full accessibility audit should be performed to ensure the site is usable by everyone. This includes checking color contrast, keyboard navigation, and screen reader compatibility. 