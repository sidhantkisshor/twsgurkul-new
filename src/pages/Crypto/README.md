# Crypto Landing Page (`/crypto3`)

This directory contains the refactored version of the Crypto Market Mastery landing page. The primary goal of the refactor was to improve maintainability, readability, and scalability by breaking down the original monolithic `App` component into smaller, focused components and centralizing state and data logic.

## File Structure

The page is organized into the following structure:

```
src/pages/crypto3/
├── app.tsx                 # The main entry component, now clean and organized.
├── components/             # Reusable UI components for each section of the page.
│   ├── AnnouncementBar.tsx
│   ├── ConsultationFormModal.tsx
│   ├── CtaSection.tsx
│   ├── CurriculumSection.tsx
│   ├── ErrorBoundary.tsx       # New: Catches runtime errors to prevent crashes.
│   ├── FAQ.tsx
│   ├── FinalCtaSection.tsx
│   ├── FloatingTrustIndicators.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── InstructorSection.tsx
│   ├── ProblemSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── TrustBadgesBar.tsx
│   └── WhyCryptoSection.tsx
├── data.ts                 # Centralized static data (students, testimonials, features, FAQs, etc.).
├── hooks/                  # Custom React hooks.
│   ├── useConvertKit.ts    # New: Hook for handling ConvertKit form submissions.
│   └── useCountdown.ts     # Hook for the persistent countdown timer.
└── types.ts                # TypeScript type and interface definitions.
```

## Key Improvements

*   **Component-Based Architecture**: The original `app.tsx` file (over 1100 lines) has been broken down into smaller, self-contained components, following React best practices for separation of concerns.
*   **Centralized Data**: All static data, including text for the Hero section and FAQ, is now stored in `data.ts`, decoupling the data from the presentation logic and making content updates easier.
*   **Custom Hooks**: Business logic is encapsulated in custom hooks. `useCountdown.ts` manages the timer, and a new `useConvertKit.ts` hook handles all logic for submitting the consultation form.
*   **Type Safety**: `types.ts` provides TypeScript interfaces for all major data structures, improving code quality and developer experience.
*   **Security & Privacy**:
    *   **Removed Data Logging**: The critical security issue of logging sensitive user data (`name`, `phone`) from the consultation form to the console has been resolved.
    *   **ConvertKit Integration**: The consultation form now securely submits data to a ConvertKit form instead of logging it. This is handled via the `useConvertKit` hook.
*   **Bug Fixes & Best Practices**:
    *   **Mobile Menu UI**: The mobile menu no longer has a transparent background, providing a better user experience.
    *   **Error Handling**: A global `ErrorBoundary` component has been implemented to catch runtime errors, preventing the entire application from crashing and showing a user-friendly message instead.
    *   **Tailwind CSS Purge Safety**: Dynamic CSS classes used in components like `CurriculumSection` are explicitly included in the `safelist` within `tailwind.config.js` to ensure they are not removed during the production build process.
    *   **WebP Image Optimization**: `TestimonialsSection` now uses `<picture>` elements with WebP sources and JPEG fallbacks for better performance (25-35% smaller file sizes). The logic automatically converts `.jpg` paths to `.webp` for supported browsers.
    *   **Linter Error Fixes**: Resolved all ESLint warnings in `TestimonialsSection` including unused imports (`ArrowRight`), unused parameters (`handleSmoothScroll`), and variable declaration improvements (`const` vs `let`).
    *   The `FloatingTrustIndicators` component now handles empty states correctly.
    *   The consultation form is now interactive and can be closed with the `Escape` key.
    *   All external links include `rel="noopener noreferrer"` for improved security.

## Making Changes

To modify a specific part of the page, locate the corresponding file in the `components/` directory.
*   To change text, prices, or lists of features, see `data.ts`.
*   To adjust hook behaviors (countdown, ConvertKit), see the `hooks/` directory.
*   To modify the overall layout and composition of components, see `app.tsx`. 