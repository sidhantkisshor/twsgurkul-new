# TWS Gurukul - Trading Education Website

This is the official repository for the TWS Gurukul website, a platform dedicated to transforming traders from beginners to market masters. The site is built with React, TypeScript, and Vite, and styled with Tailwind CSS.

## Table of Contents

- [Project Purpose](#project-purpose)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Folder and File Structure](#folder-and-file-structure)
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

The TWS Gurukul website serves as the main information and marketing hub for our trading courses. It aims to attract and convert potential students by showcasing our unique teaching philosophy, course offerings, and success stories. The website features dedicated pages for our main programs: the "Footprint Mastery System" and "Crypto Market Mastery".

## Live Demo

[Link to the deployed website](https://www.twsgurukul.com/) (Replace with your actual URL)

## Technologies Used

- **Framework:** [React](https://reactjs.org/) (v19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)

## Folder and File Structure

The codebase is organized with a focus on modularity and separation of concerns.

```
twsgurukul/
├── public/               # Static assets, robots.txt, sitemap.xml
├── src/
│   ├── components/       # Shared, reusable components (Layout, Navbar, Footer, Seo)
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

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

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

## Known Issues & TODOs

-   **Styling on CryptoPage:** The `Seo` component on the `CryptoPage` is not perfectly placed in the component tree due to some issues with the code generation tool. This does not affect functionality but could be cleaned up.
-   **Prop Drilling:** The `handleSmoothScroll` function on the `CryptoPage` is passed down through multiple components. This could be refactored to use React Context for better state management.
-   **Animation on FootprintPage:** The scroll animation on the `FootprintPage` is implemented with a `useEffect` and direct DOM manipulation. This could be improved by using a dedicated animation library like [Framer Motion](https://www.framer.com/motion/) or a custom hook.
-   **Add Image Alt Attributes:** The current site uses emojis as icons. If you replace them with `<img>` or SVG files, ensure they have proper `alt` attributes or ARIA labels.
-   **Accessibility (A11y) Check:** A full accessibility audit should be performed to ensure the site is usable by everyone. This includes checking color contrast, keyboard navigation, and screen reader compatibility. 