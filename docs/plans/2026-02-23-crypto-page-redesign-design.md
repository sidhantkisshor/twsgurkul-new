# Crypto Page Redesign — Sophisticated Warmth Brand System

**Date:** 2026-02-23
**Approach:** Approach B — Design Tokens + Component Rebuild
**Palette:** Sophisticated Warmth (primary), Wealth Teal bridge
**Typography:** Inter (Bold / SemiBold / Regular)
**Animation level:** Subtle & refined (fade-in-up, smooth hover transitions)
**Funnel:** Keep all 17 existing components, restyle completely

---

## 1. Design Token System

Create `src/pages/Crypto/styles/crypto-brand-tokens.css` with all brand variables.

### Core Colors

| Token | Value | Role |
|-------|-------|------|
| `--brand-deep-slate` | `#2C3539` | Foundation neutral, dark backgrounds |
| `--brand-burnt-amber` | `#C87533` | Primary accent, CTAs, highlights |
| `--brand-brushed-gold` | `#B8956A` | Premium signals (<10% usage) |
| `--brand-warm-white` | `#FAF8F5` | Page background |
| `--brand-wealth-teal` | `#0A8D7A` | Bridge tone, links, secondary CTAs |
| `--brand-soft-sand` | `#EDE6D8` | Secondary text on dark |
| `--brand-paper-cream` | `#FFF1E0` | Alt light background |
| `--brand-navy-black` | `#0B1221` | Dark surfaces (modals, overlays) |
| `--brand-crimson` | `#E5484D` | Danger, negative, losses |
| `--brand-graphite` | `#111111` | Body text |

### Gradient Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--gradient-hero` | `linear-gradient(180deg, #2C3539 0%, #3a4549 100%)` | Hero section |
| `--gradient-hero-warm` | `linear-gradient(135deg, #2C3539 0%, #3d4a4f 50%, #2C3539 100%)` | Hero alt |
| `--gradient-cta-hover` | `linear-gradient(135deg, #C87533 0%, #B8956A 100%)` | CTA hover state |
| `--gradient-section-transition` | `linear-gradient(180deg, #FAF8F5 0%, #FFF1E0 100%)` | Section transitions |
| `--gradient-amber-glow` | `radial-gradient(circle at 50% 0%, rgba(200,117,51,0.15) 0%, transparent 60%)` | Subtle hero glow |
| `--gradient-teal-subtle` | `linear-gradient(135deg, rgba(10,141,122,0.05) 0%, transparent 100%)` | Teal accent areas |

### Component State Tokens

**Buttons:**

| Token | Value |
|-------|-------|
| `--btn-primary-bg` | `#C87533` |
| `--btn-primary-hover` | `#b5682d` |
| `--btn-primary-active` | `#a35e28` |
| `--btn-primary-text` | `#ffffff` |
| `--btn-secondary-bg` | `transparent` |
| `--btn-secondary-border` | `#0A8D7A` |
| `--btn-secondary-hover` | `rgba(10,141,122,0.1)` |
| `--btn-secondary-text` | `#0A8D7A` |
| `--btn-disabled-bg` | `#d4cfc9` |
| `--btn-disabled-text` | `#8a8580` |

**Cards:**

| Token | Value |
|-------|-------|
| `--card-bg` | `#FAF8F5` |
| `--card-border` | `rgba(44,53,57,0.08)` |
| `--card-hover-border` | `rgba(200,117,51,0.3)` |
| `--card-hover-shadow` | `0 8px 24px rgba(44,53,57,0.12)` |

**Inputs:**

| Token | Value |
|-------|-------|
| `--input-border` | `rgba(44,53,57,0.2)` |
| `--input-focus-border` | `#0A8D7A` |
| `--input-focus-ring` | `rgba(10,141,122,0.2)` |
| `--input-error-border` | `#E5484D` |

**Semantic Colors:**

| Token | Value |
|-------|-------|
| `--color-success` | `#0A8D7A` |
| `--color-warning` | `#C87533` |
| `--color-error` | `#E5484D` |
| `--color-info` | `#0A8D7A` |

### Typography Tokens

| Token | Value |
|-------|-------|
| `--font-primary` | `'Inter', system-ui, sans-serif` |
| `--font-size-h1` | `56px` (mobile: `40px`) |
| `--font-size-h2` | `36px` (mobile: `28px`) |
| `--font-size-h3` | `24px` (mobile: `20px`) |
| `--font-size-body` | `17px` |
| `--font-size-small` | `14px` |
| `--font-size-micro` | `12px` |
| `--line-height-heading` | `1.15` |
| `--line-height-body` | `1.6` |
| `--letter-spacing-heading` | `-0.02em` |

### Spacing & Layout Tokens

| Token | Value |
|-------|-------|
| `--section-pad-desktop` | `96px` |
| `--section-pad-tablet` | `80px` |
| `--section-pad-mobile` | `64px` |
| `--container-pad-desktop` | `32px` |
| `--container-pad-mobile` | `20px` |
| `--card-radius` | `12px` |
| `--btn-radius` | `8px` |
| `--shadow-card` | `0 2px 12px rgba(44,53,57,0.08)` |
| `--shadow-hover` | `0 8px 24px rgba(44,53,57,0.12)` |
| `--shadow-modal` | `0 20px 60px rgba(11,18,33,0.3)` |
| `--transition-base` | `200ms ease` |
| `--transition-slow` | `400ms ease` |

---

## 2. Component Designs

### 2.1 HeaderMinimal

| Property | Value |
|----------|-------|
| Background | Warm White (#FAF8F5), bottom shadow on scroll |
| Logo | Deep Slate |
| Nav text | Deep Slate, hover → Wealth Teal underline |
| CTA button | Burnt Amber bg, white text, 8px radius |
| Rotating stats | Deep Slate text, Burnt Amber numbers |
| Mobile | Same, stats bar horizontally scrollable |
| Sticky behavior | Fixed top, z-50 |

### 2.2 HeroSectionReimagined

| Property | Value |
|----------|-------|
| Background | Deep Slate (#2C3539) full-width |
| Ambient effect | Subtle radial amber glow top-center |
| H1 | White, Inter Bold, 56px desktop / 40px mobile |
| Subheadline | Soft Sand (#EDE6D8), Inter Regular, 20px |
| Primary CTA | Burnt Amber, large (py-4 px-8, 16px text) |
| Stats row | 3 Warm White pill badges on dark, Burnt Amber numbers |
| Problem/Solution toggle | Wealth Teal active tab, Deep Slate inactive |
| Trust badges | Inter Medium, 14px, Soft Sand |
| Countdown timer | Burnt Amber numbers, Soft Sand labels |
| Ticker | Rotating student wins, Warm White text on Deep Slate |
| Removed | Floating orbs, glassmorphism, parallax effects |

### 2.3 TrustBadgesBar

| Property | Value |
|----------|-------|
| Background | Warm White |
| Layout | 3 badges in row, centered |
| Icons | Wealth Teal |
| Stat numbers | Deep Slate, Inter Bold |
| Labels | Muted gray |
| "Self-reported" badge | Brushed Gold accent |
| Mobile | 3-column grid or horizontal scroll |

### 2.4 ProblemSection

| Property | Value |
|----------|-------|
| Background | Warm White |
| Section header | Inter SemiBold, 36px, Deep Slate |
| Cards | Warm White bg, subtle border (#2C3539/8%) |
| Card hover | Burnt Amber left border, lift with shadow |
| Problem emoji | Kept |
| Text | Deep Slate |
| Impact text | Crimson for emphasis |

### 2.5 UniqueMechanismSection

| Property | Value |
|----------|-------|
| Background | Paper Cream (#FFF1E0) |
| Section header | Inter Bold, Deep Slate |
| "2-Hour Skillstack" | Burnt Amber accent color |
| Step numbers | Burnt Amber circles (1-5) |
| Step cards | Warm White bg, subtle border |
| Active step | Burnt Amber left border |
| Icons | Wealth Teal |
| Connecting line | Wealth Teal dashed line between steps |

### 2.6 InstructorSectionSimplified

| Property | Value |
|----------|-------|
| Background | Warm White |
| Image | rounded-lg, Brushed Gold subtle border |
| Name | Inter Bold, 24px, Deep Slate |
| Credentials | Burnt Amber pill badges |
| Feature boxes | Warm White card, Wealth Teal icon |
| Stats | Burnt Amber numbers, Deep Slate labels |
| CTA | Wealth Teal text link with arrow |

### 2.7 TestimonialsSection

| Property | Value |
|----------|-------|
| Background | Deep Slate (contrast section) |
| Cards | Warm White bg, card-radius, subtle shadow |
| Name | Deep Slate, Inter SemiBold |
| Role/Location | Muted gray |
| Profit amount | Wealth Teal, Inter Bold |
| Stars | Burnt Amber filled |
| Verified badge | Wealth Teal |
| Auto-scroll | Kept (Framer Motion) |
| Drag-to-scroll | Kept |

### 2.8 VideoSection

| Property | Value |
|----------|-------|
| Background | Warm White |
| Thumbnail | rounded-lg |
| Play button | Burnt Amber circle overlay |
| Lightbox backdrop | Navy-Black/80% |
| Controls | Warm White |
| Hover | Play button scales, subtle shadow |

### 2.9 JournalPreview

| Property | Value |
|----------|-------|
| Background | Paper Cream |
| Card | Warm White bg, Deep Slate border |
| Win badges | Wealth Teal |
| Loss badges | Crimson |
| Table rows | Alternating Paper Cream shading |
| Stats numbers | Burnt Amber |

### 2.10 PricingSection

| Property | Value |
|----------|-------|
| Background | Warm White |
| Card | Warm White elevated, prominent shadow |
| Top border | Burnt Amber (featured indicator) |
| Price text | Inter Bold, 48px, Deep Slate |
| Strike-through | Muted gray |
| EMI option | Wealth Teal text |
| Bullet checkmarks | Wealth Teal |
| CTA | Large Burnt Amber button, full width |
| Trust icons | Inter Regular, 13px, muted |
| "Instant Access" badge | Brushed Gold (premium signal) |

### 2.11 CryptoGuaranteeSection

| Property | Value |
|----------|-------|
| Background | Paper Cream |
| Shield icon | Wealth Teal |
| Heading | Inter Bold, Deep Slate |
| Grid | Two Warm White cards |
| Checkmarks | Wealth Teal |
| Trust number | Brushed Gold accent |

### 2.12 FAQ

| Property | Value |
|----------|-------|
| Background | Warm White |
| Borders | Clean, no glassmorphism |
| Question text | Inter SemiBold, Deep Slate |
| Expand icon | Wealth Teal |
| Answer text | Inter Regular, Deep Slate, 16px |
| Q/A divider | Burnt Amber thin line |
| Hover | Wealth Teal left border accent |

### 2.13 FinalCtaSection

| Property | Value |
|----------|-------|
| Background | Deep Slate, full width |
| Headline | White, Inter Bold, 40px |
| Subheadline | Soft Sand |
| "Without" column | Crimson accents |
| "With" column | Wealth Teal accents |
| CTA | Large Burnt Amber button |
| Trust line | Soft Sand, 13px |

### 2.14 ExitIntentPopup

| Property | Value |
|----------|-------|
| Backdrop | Navy-Black/80% |
| Modal | Warm White, card-radius |
| Headline | Deep Slate, Inter Bold |
| Offer badge | Wealth Teal |
| Value tag | Brushed Gold |
| Primary CTA | Burnt Amber |
| Secondary | Wealth Teal text link |

### 2.15 ReturningUserCheckout

| Property | Value |
|----------|-------|
| Background | Warm White elevated card |
| CTA | Burnt Amber |
| Text | Deep Slate |
| Close button | muted gray |

### 2.16 MethodologyModal

| Property | Value |
|----------|-------|
| Backdrop | Navy-Black/80% |
| Modal | Warm White |
| Header icon | Wealth Teal |
| Text | Deep Slate body |
| Disclaimer | Muted gray, 14px |

### 2.17 Footer

| Property | Value |
|----------|-------|
| Background | Deep Slate |
| Text | Soft Sand |
| Links | Wealth Teal on hover |
| Copyright | Muted Soft Sand/60% |

---

## 3. Animation System

### Kept Animations
- Testimonial carousel auto-scroll (Framer Motion)
- Drag-to-scroll on testimonials
- Countdown timer tick
- Accordion expand/collapse (300ms)

### New Animations
- `fadeInUp`: 400ms ease-out, translateY(16px) → 0, opacity 0 → 1
- Card hover: translateY(-2px) + shadow transition (200ms)
- Button hover: background-color transition (200ms)
- Section headers: fade-in on scroll intersection

### Removed Animations
- Floating orbs / parallax effects
- Glassmorphism blur effects
- Shimmer effects on buttons
- Gradient shift animations
- Bitcoin spin animation
- Float / float-delayed keyframes
- Ticker pulse effects

---

## 4. Responsive Strategy

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full 2-column layouts, max-w-6xl container |
| Tablet (768-1024px) | Grid adjusts, section padding reduces |
| Mobile (<768px) | Single column, H1 40px, section padding 64px |

### Mobile-Specific
- Stats grid: 2x2
- Testimonial cards: 85vw width
- Trust badges: horizontal scroll
- Pricing card: full width
- CTA buttons: full width
- Sticky header: compact

---

## 5. Font Loading

Add Inter from Google Fonts to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 6. Files to Create/Modify

### New Files
- `src/pages/Crypto/styles/crypto-brand-tokens.css` — All design tokens

### Modified Files (restyle)
- `src/pages/Crypto/styles/design-system.css` — Replace with token-based system
- `src/pages/Crypto/styles/crypto.css` — Simplified, token-based overrides
- `src/pages/Crypto/styles/hero-reimagined.css` — Restyle hero
- `src/pages/Crypto/CryptoPage.tsx` — Update imports, remove glassmorphism classes
- `src/pages/Crypto/components/HeaderMinimal.tsx` — Brand restyle
- `src/pages/Crypto/components/HeroSectionReimagined.tsx` — Brand restyle
- `src/pages/Crypto/components/ProblemSection.tsx` — Brand restyle
- `src/pages/Crypto/components/UniqueMechanismSection.tsx` — Brand restyle
- `src/pages/Crypto/components/InstructorSectionSimplified.tsx` — Brand restyle
- `src/pages/Crypto/components/TestimonialsSection.tsx` — Brand restyle
- `src/pages/Crypto/components/VideoSection.tsx` — Brand restyle
- `src/pages/Crypto/components/JournalPreview.tsx` — Brand restyle
- `src/pages/Crypto/components/PricingSection.tsx` — Brand restyle
- `src/pages/Crypto/components/CryptoGuaranteeSection.tsx` — Brand restyle
- `src/pages/Crypto/components/FAQ.tsx` — Brand restyle
- `src/pages/Crypto/components/FinalCtaSection.tsx` — Brand restyle
- `src/pages/Crypto/components/ExitIntentPopup.tsx` — Brand restyle
- `src/pages/Crypto/components/ReturningUserCheckout.tsx` — Brand restyle
- `src/pages/Crypto/components/MethodologyModal.tsx` — Brand restyle
- `src/pages/Crypto/components/TrustBadgesBar.tsx` — Brand restyle
- `src/pages/Crypto/components/Footer.tsx` — Brand restyle

### Unchanged
- `src/pages/Crypto/data.ts` — Content stays the same
- `src/pages/Crypto/types.ts` — Types stay the same
- `src/pages/Crypto/hooks/useCountdown.ts` — Logic stays the same
- `src/pages/Crypto/hooks/useExitIntent.ts` — Logic stays the same
- `src/pages/Crypto/utils/tracking.ts` — Logic stays the same
- `src/pages/Crypto/utils/dateHelpers.ts` — Logic stays the same

---

## 7. 70-20-10 Color Distribution

Per the brand guide's application framework:

| Percentage | Colors | Where |
|------------|--------|-------|
| **70%** | Deep Slate + Warm White | Page backgrounds, text, cards, headers |
| **20%** | White space | Breathing room between sections, padding |
| **10%** | Burnt Amber + Brushed Gold | CTAs, highlights, premium signals, accents |
| **Bridge** | Wealth Teal | Links, secondary CTAs, success states, checkmarks |

---

## 8. Success Criteria

1. `npm run build` completes without errors
2. All existing conversion funnel logic works (checkout links, tracking, exit intent, countdown)
3. Visual inspection matches Sophisticated Warmth brand guide
4. Wealth Teal appears as bridge element throughout
5. Brushed Gold usage under 10%
6. WCAG AA contrast ratios met for all text
7. No glassmorphism, floating orbs, or shimmer effects
8. Inter font loads and displays correctly
9. Mobile responsive at all breakpoints
10. Testimonial carousel and FAQ accordion function correctly
