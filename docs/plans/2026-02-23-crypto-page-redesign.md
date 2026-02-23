# Crypto Page Redesign — Sophisticated Warmth Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restyle the entire crypto landing page (~5,040 lines across 29 files) from cold dark theme to the TWS Wealth OS "Sophisticated Warmth" brand system.

**Architecture:** Create a centralized design token CSS file, then rebuild each of the 19 components + 3 CSS files to use the token system. All logic, data, types, hooks, and utils remain unchanged. Font changes from Plus Jakarta Sans to Inter.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Framer Motion, CSS custom properties for design tokens

**Design doc:** `docs/plans/2026-02-23-crypto-page-redesign-design.md`

---

## Task 1: Create Design Tokens CSS File

**Files:**
- Create: `src/pages/Crypto/styles/crypto-brand-tokens.css`

**Step 1: Create the token file**

```css
/* crypto-brand-tokens.css — TWS Wealth OS Sophisticated Warmth Design Tokens */

:root {
  /* === Core Brand Colors === */
  --brand-deep-slate: #2C3539;
  --brand-burnt-amber: #C87533;
  --brand-brushed-gold: #B8956A;
  --brand-warm-white: #FAF8F5;
  --brand-wealth-teal: #0A8D7A;
  --brand-soft-sand: #EDE6D8;
  --brand-paper-cream: #FFF1E0;
  --brand-navy-black: #0B1221;
  --brand-crimson: #E5484D;
  --brand-graphite: #111111;

  /* === Gradient Tokens === */
  --gradient-hero: linear-gradient(180deg, #2C3539 0%, #3a4549 100%);
  --gradient-hero-warm: linear-gradient(135deg, #2C3539 0%, #3d4a4f 50%, #2C3539 100%);
  --gradient-cta-hover: linear-gradient(135deg, #C87533 0%, #B8956A 100%);
  --gradient-section-transition: linear-gradient(180deg, #FAF8F5 0%, #FFF1E0 100%);
  --gradient-amber-glow: radial-gradient(circle at 50% 0%, rgba(200,117,51,0.15) 0%, transparent 60%);
  --gradient-teal-subtle: linear-gradient(135deg, rgba(10,141,122,0.05) 0%, transparent 100%);

  /* === Button State Tokens === */
  --btn-primary-bg: #C87533;
  --btn-primary-hover: #b5682d;
  --btn-primary-active: #a35e28;
  --btn-primary-text: #ffffff;
  --btn-secondary-bg: transparent;
  --btn-secondary-border: #0A8D7A;
  --btn-secondary-hover: rgba(10,141,122,0.1);
  --btn-secondary-text: #0A8D7A;
  --btn-disabled-bg: #d4cfc9;
  --btn-disabled-text: #8a8580;

  /* === Card State Tokens === */
  --card-bg: #FAF8F5;
  --card-border: rgba(44,53,57,0.08);
  --card-hover-border: rgba(200,117,51,0.3);
  --card-hover-shadow: 0 8px 24px rgba(44,53,57,0.12);

  /* === Input State Tokens === */
  --input-border: rgba(44,53,57,0.2);
  --input-focus-border: #0A8D7A;
  --input-focus-ring: rgba(10,141,122,0.2);
  --input-error-border: #E5484D;

  /* === Semantic Colors === */
  --color-success: #0A8D7A;
  --color-warning: #C87533;
  --color-error: #E5484D;
  --color-info: #0A8D7A;

  /* === Typography === */
  --font-primary: 'Inter', system-ui, -apple-system, sans-serif;
  --text-h1: 56px;
  --text-h2: 36px;
  --text-h3: 24px;
  --text-body: 17px;
  --text-small: 14px;
  --text-micro: 12px;
  --lh-heading: 1.15;
  --lh-body: 1.6;
  --ls-heading: -0.02em;

  /* === Spacing === */
  --space-section-desktop: 96px;
  --space-section-tablet: 80px;
  --space-section-mobile: 64px;
  --space-container-desktop: 32px;
  --space-container-mobile: 20px;

  /* === Shape === */
  --radius-card: 12px;
  --radius-btn: 8px;
  --radius-pill: 9999px;

  /* === Shadows === */
  --shadow-card: 0 2px 12px rgba(44,53,57,0.08);
  --shadow-hover: 0 8px 24px rgba(44,53,57,0.12);
  --shadow-modal: 0 20px 60px rgba(11,18,33,0.3);

  /* === Transitions === */
  --transition-base: 200ms ease;
  --transition-slow: 400ms ease;
}

/* Mobile overrides */
@media (max-width: 767px) {
  :root {
    --text-h1: 40px;
    --text-h2: 28px;
    --text-h3: 20px;
  }
}

/* Tablet overrides */
@media (min-width: 768px) and (max-width: 1023px) {
  :root {
    --text-h1: 48px;
    --text-h2: 32px;
  }
}
```

**Step 2: Verify file created**

Run: `ls -la src/pages/Crypto/styles/crypto-brand-tokens.css`
Expected: File exists

**Step 3: Commit**

```bash
git add src/pages/Crypto/styles/crypto-brand-tokens.css
git commit -m "feat(crypto): add brand design tokens CSS file"
```

---

## Task 2: Rewrite design-system.css with Brand Tokens

**Files:**
- Modify: `src/pages/Crypto/styles/design-system.css` (277 lines)

**Step 1: Replace the entire file**

Replace ALL CSS variable definitions and utility classes to reference the new token system. Key changes:
- `--font-primary` → `var(--font-primary)` from tokens (Inter, not Plus Jakarta Sans)
- All color utilities → brand palette colors
- `.glass-effect` → clean card style (no backdrop-blur)
- `.crypto-card` → Warm White bg, subtle border, no glassmorphism
- `.crypto-button` → Burnt Amber bg, white text, 8px radius
- `.crypto-section` → proper spacing with token references
- Remove all `backdrop-blur`, `saturate()`, glassmorphism rules

Key class rewrites:
- `.crypto-page` → `background: var(--brand-warm-white); color: var(--brand-graphite); font-family: var(--font-primary);`
- `.crypto-h1` → `font-size: var(--text-h1); font-weight: 700; line-height: var(--lh-heading); color: var(--brand-deep-slate);`
- `.crypto-h2` → `font-size: var(--text-h2); font-weight: 600; color: var(--brand-deep-slate);`
- `.crypto-body` → `font-size: var(--text-body); line-height: var(--lh-body); color: var(--brand-graphite);`
- `.crypto-card` → `background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-card); box-shadow: var(--shadow-card); transition: var(--transition-base);`
- `.crypto-card:hover` → `border-color: var(--card-hover-border); box-shadow: var(--card-hover-shadow); transform: translateY(-2px);`
- `.crypto-button` → `background: var(--btn-primary-bg); color: var(--btn-primary-text); border-radius: var(--radius-btn); font-weight: 600; transition: var(--transition-base);`
- `.crypto-button:hover` → `background: var(--btn-primary-hover);`
- `.crypto-chip` → `background: rgba(44,53,57,0.06); color: var(--brand-deep-slate); border-radius: var(--radius-pill);`

**Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds (styles may look wrong visually until components are updated)

**Step 3: Commit**

```bash
git add src/pages/Crypto/styles/design-system.css
git commit -m "feat(crypto): rewrite design-system.css with brand tokens"
```

---

## Task 3: Rewrite crypto.css and hero-reimagined.css

**Files:**
- Modify: `src/pages/Crypto/styles/crypto.css` (129 lines)
- Modify: `src/pages/Crypto/styles/hero-reimagined.css` (223 lines)

**Step 1: Rewrite crypto.css**

Key changes:
- `.hero-cta` → Burnt Amber bg, white text, no shimmer, clean hover (darken)
- `.glass-effect` → Clean card: `background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-card);`
- Remove: `shimmer`, `spin-slow`, `countUp` keyframes (keep `slideInUp` for sticky bar)
- `.text-contrast-high` → `color: var(--brand-graphite);`
- Focus states → `outline-color: var(--brand-wealth-teal);`

**Step 2: Rewrite hero-reimagined.css**

Key changes:
- Remove: `@keyframes gradientShift`, `@keyframes float`, `@keyframes shimmer`, `@keyframes dash`, `@keyframes scrollIndicator`
- Keep: `@keyframes fadeInUp` (rewrite to 400ms, translateY(16px))
- Remove: `.animated-gradient`, `.float-animation*`, `.glow-yellow`, `.glow-green`, `.parallax-*`, `.glass-enhanced`, `.neon-text`
- Keep: `.hover-lift` → `transform: translateY(-2px); transition: var(--transition-base);`
- Add: `@keyframes fadeIn` → `opacity: 0 to 1, 400ms`
- Remove all `@media (prefers-reduced-motion)` blocks that reference deleted animations

**Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add src/pages/Crypto/styles/crypto.css src/pages/Crypto/styles/hero-reimagined.css
git commit -m "feat(crypto): simplify CSS animations, remove glassmorphism"
```

---

## Task 4: Add Inter Font and Update CryptoPage.tsx

**Files:**
- Modify: `index.html` — add Inter font link
- Modify: `src/pages/Crypto/CryptoPage.tsx` (136 lines)

**Step 1: Add Inter font to index.html**

Add before closing `</head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Step 2: Update CryptoPage.tsx**

- Add import: `import './styles/crypto-brand-tokens.css'` (FIRST import, before other CSS)
- Change `bg-slate-900` → `bg-[var(--brand-warm-white)]` on the main wrapper div
- Change `text-white` → remove (body text is now dark by default from design-system.css)
- Ensure crypto-brand-tokens.css is imported before design-system.css

**Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add index.html src/pages/Crypto/CryptoPage.tsx
git commit -m "feat(crypto): add Inter font, import brand tokens, switch to warm white bg"
```

---

## Task 5: Restyle HeaderMinimal

**Files:**
- Modify: `src/pages/Crypto/components/HeaderMinimal.tsx` (160 lines)

**Step 1: Replace color classes**

| Old Class | New Class |
|-----------|-----------|
| `bg-slate-950/95` | `bg-[var(--brand-warm-white)]` |
| `backdrop-blur-xl` | remove |
| `shadow-[0_8px_32px_rgba(250,204,21,0.1)]` | `shadow-[0_2px_12px_rgba(44,53,57,0.08)]` |
| `text-yellow-400` | `text-[var(--brand-burnt-amber)]` |
| `text-white` (logo/nav) | `text-[var(--brand-deep-slate)]` |
| `text-green-400` | `text-[var(--brand-wealth-teal)]` |
| `text-blue-400` | `text-[var(--brand-wealth-teal)]` |
| `border-yellow-400/40` (CTA) | `border-transparent` |
| CTA button bg | `bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--btn-primary-hover)]` |
| Shimmer bottom border | Remove entirely |

- Remove the animated shimmer border at the bottom of the header
- Stats rotating numbers: use `text-[var(--brand-burnt-amber)]` for numbers, `text-[var(--brand-deep-slate)]` for labels

**Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 3: Commit**

```bash
git add src/pages/Crypto/components/HeaderMinimal.tsx
git commit -m "feat(crypto): restyle HeaderMinimal to Sophisticated Warmth"
```

---

## Task 6: Restyle HeroSectionReimagined

**Files:**
- Modify: `src/pages/Crypto/components/HeroSectionReimagined.tsx` (476 lines — largest component)

**Step 1: Replace background and structural classes**

| Old | New |
|-----|-----|
| `bg-linear-to-br from-slate-950 via-slate-900 to-slate-950` | `bg-[var(--brand-deep-slate)]` |
| `from-yellow-500/10 to-orange-500/10` (gradient overlays) | `bg-[var(--gradient-amber-glow)]` or remove |
| `text-yellow-400` | `text-[var(--brand-burnt-amber)]` |
| `from-yellow-400 to-orange-500` (gradient text) | `text-[var(--brand-burnt-amber)]` (solid color) |
| `text-slate-300` | `text-[var(--brand-soft-sand)]` |
| `bg-red-500/20 text-red-400 border-red-500/30` (problem cards) | `bg-[#E5484D]/10 text-[var(--brand-crimson)] border-[var(--brand-crimson)]/20` |
| `bg-green-500/20 text-green-400 border-green-500/30` (solution cards) | `bg-[var(--brand-wealth-teal)]/10 text-[var(--brand-wealth-teal)] border-[var(--brand-wealth-teal)]/20` |
| `from-green-400 to-yellow-400` (CTA gradient) | `bg-[var(--btn-primary-bg)] text-white` (solid Burnt Amber) |

**Step 2: Simplify animations**

- Remove floating stat card animations (the `float-animation`, `float-animation-delayed` classes)
- Stats cards: use static positioning with `bg-[var(--brand-warm-white)] text-[var(--brand-deep-slate)]` pill badges
- Keep countdown timer logic, restyle: numbers in Burnt Amber, labels in Soft Sand
- Live ticker: `text-[var(--brand-warm-white)]` on Deep Slate background
- Problem/Solution toggle tabs: active = `bg-[var(--brand-wealth-teal)] text-white`, inactive = `text-[var(--brand-soft-sand)]`
- Trust badges: `text-[var(--brand-soft-sand)]` Inter Medium 14px

**Step 3: Remove parallax and scroll effects**

- Remove `useScroll` and `useTransform` parallax logic
- Remove any `parallax-slow/medium/fast` class references
- Keep basic `whileInView` fade-in animations but simplify (opacity + translateY only)

**Step 4: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 5: Commit**

```bash
git add src/pages/Crypto/components/HeroSectionReimagined.tsx
git commit -m "feat(crypto): restyle hero to Deep Slate with Burnt Amber accents"
```

---

## Task 7: Restyle TrustBadgesBar and ProblemSection

**Files:**
- Modify: `src/pages/Crypto/components/TrustBadgesBar.tsx` (96 lines)
- Modify: `src/pages/Crypto/components/ProblemSection.tsx` (52 lines)

**Step 1: TrustBadgesBar**

| Old | New |
|-----|-----|
| `bg-slate-900/50` | `bg-[var(--brand-warm-white)]` |
| `glass-effect border-white/10` (badges) | `bg-white border border-[var(--card-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)]` |
| `text-yellow-400` | `text-[var(--brand-burnt-amber)]` |
| `text-green-400` | `text-[var(--brand-wealth-teal)]` |
| `text-blue-400` | `text-[var(--brand-wealth-teal)]` |
| `text-slate-200` (stat numbers) | `text-[var(--brand-deep-slate)] font-bold` |
| `text-slate-600` | `text-[var(--brand-deep-slate)]/60` |
| Self-reported badge | Add `border-[var(--brand-brushed-gold)]/30` for premium signal |

**Step 2: ProblemSection**

| Old | New |
|-----|-----|
| `bg-yellow-500/10 border-yellow-500/20 text-yellow-400` (section badge) | `bg-[var(--brand-burnt-amber)]/10 border-[var(--brand-burnt-amber)]/20 text-[var(--brand-burnt-amber)]` |
| `text-slate-300` (subtitle) | `text-[var(--brand-graphite)]/70` |
| `glass-effect border-red-500/20 hover-border-red-500/30` (cards) | `bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-l-4 hover:border-l-[var(--brand-burnt-amber)]` |
| `text-red-400` (impact) | `text-[var(--brand-crimson)]` |
| `text-slate-400` (description) | `text-[var(--brand-graphite)]/60` |
| Section heading gradient | `text-[var(--brand-deep-slate)]` solid |

**Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add src/pages/Crypto/components/TrustBadgesBar.tsx src/pages/Crypto/components/ProblemSection.tsx
git commit -m "feat(crypto): restyle TrustBadgesBar and ProblemSection"
```

---

## Task 8: Restyle UniqueMechanismSection and InstructorSection

**Files:**
- Modify: `src/pages/Crypto/components/UniqueMechanismSection.tsx` (49 lines)
- Modify: `src/pages/Crypto/components/InstructorSectionSimplified.tsx` (92 lines)

**Step 1: UniqueMechanismSection**

| Old | New |
|-----|-----|
| `bg-slate-900` (section) | `bg-[var(--brand-paper-cream)]` |
| `text-gradient` (heading) | `text-[var(--brand-deep-slate)]` |
| `bg-slate-800/60 backdrop-blur-xs border-yellow-500/20 hover-border-yellow-500/40` (cards) | `bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] shadow-[var(--shadow-card)] hover:shadow-[var(--card-hover-shadow)]` |
| `text-yellow-500` (step numbers) | `text-[var(--brand-burnt-amber)]` in a circle: `w-10 h-10 rounded-full bg-[var(--brand-burnt-amber)]/10 flex items-center justify-center font-bold` |
| `text-white` (titles) | `text-[var(--brand-deep-slate)]` |
| `text-slate-300` (descriptions) | `text-[var(--brand-graphite)]/70` |
| Add: connecting Wealth Teal dashed line between step cards on desktop |

**Step 2: InstructorSectionSimplified**

| Old | New |
|-----|-----|
| `bg-slate-800/30` (section) | `bg-[var(--brand-warm-white)]` |
| `text-white` (name) | `text-[var(--brand-deep-slate)]` |
| `from-yellow-400 to-orange-600 bg-clip-text text-transparent` (gradient text) | `text-[var(--brand-burnt-amber)]` |
| `text-slate-300` (body) | `text-[var(--brand-graphite)]/70` |
| Image border: `border-2 border-slate-400` | `border-2 border-[var(--brand-brushed-gold)]/40 rounded-lg` |
| Feature icons | `text-[var(--brand-wealth-teal)]` |
| Feature boxes | `bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--radius-card)]` |
| CTA: `hover-border-slate-300` | `text-[var(--brand-wealth-teal)] hover:underline` text link |

**Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add src/pages/Crypto/components/UniqueMechanismSection.tsx src/pages/Crypto/components/InstructorSectionSimplified.tsx
git commit -m "feat(crypto): restyle mechanism and instructor sections"
```

---

## Task 9: Restyle TestimonialsSection

**Files:**
- Modify: `src/pages/Crypto/components/TestimonialsSection.tsx` (366 lines — second largest)

**Step 1: Section background**

| Old | New |
|-----|-----|
| `bg-slate-900/50` | `bg-[var(--brand-deep-slate)]` (contrast section) |
| `via-yellow-500/5` | remove subtle gradient |
| Heading gradient `from-yellow-400 to-orange-300` | `text-white` (on dark bg) |
| `text-slate-200` (subtitle) | `text-[var(--brand-soft-sand)]` |

**Step 2: Testimonial cards**

| Old | New |
|-----|-----|
| `from-slate-800 to-slate-850 border-slate-700` | `bg-[var(--brand-warm-white)] border border-[var(--card-border)]` |
| `text-white` (name) | `text-[var(--brand-deep-slate)]` |
| `text-slate-400` (role/location) | `text-[var(--brand-graphite)]/50` |
| `from-green-900/40 to-green-800/40 border-green-500/30` (profit box) | `bg-[var(--brand-wealth-teal)]/10 border border-[var(--brand-wealth-teal)]/20` |
| `from-green-400 to-green-300` (profit text) | `text-[var(--brand-wealth-teal)] font-bold` |
| `text-yellow-400 bg-yellow-400/10 border-yellow-400/20` (gift badge) | `text-[var(--brand-burnt-amber)] bg-[var(--brand-burnt-amber)]/10 border-[var(--brand-burnt-amber)]/20` |
| `text-blue-400 bg-blue-400/10 border-blue-400/20` (verified badge) | `text-[var(--brand-wealth-teal)] bg-[var(--brand-wealth-teal)]/10 border-[var(--brand-wealth-teal)]/20` |
| Star color | `text-[var(--brand-burnt-amber)]` |

**Step 3: Keep carousel logic**

- Framer Motion auto-scroll, drag-to-scroll, infinite loop — all stays
- Just restyle the visual appearance of cards

**Step 4: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 5: Commit**

```bash
git add src/pages/Crypto/components/TestimonialsSection.tsx
git commit -m "feat(crypto): restyle testimonials with warm white cards on deep slate"
```

---

## Task 10: Restyle VideoSection and JournalPreview

**Files:**
- Modify: `src/pages/Crypto/components/VideoSection.tsx` (159 lines)
- Modify: `src/pages/Crypto/components/JournalPreview.tsx` (167 lines)

**Step 1: VideoSection**

| Old | New |
|-----|-----|
| `bg-slate-900` (section) | `bg-[var(--brand-warm-white)]` |
| `text-white` (heading) | `text-[var(--brand-deep-slate)]` |
| `text-slate-300` (body) | `text-[var(--brand-graphite)]/70` |
| `glass-effect border-white/10 hover-border-yellow-400/50` (thumbnail) | `border border-[var(--card-border)] rounded-lg hover:border-[var(--brand-burnt-amber)]/50 shadow-[var(--shadow-card)]` |
| `bg-black/50` (play overlay) | `bg-[var(--brand-deep-slate)]/60` |
| Play button color `text-yellow-400` | `text-[var(--brand-burnt-amber)]` with circle bg |
| Lightbox `bg-black/90` | `bg-[var(--brand-navy-black)]/90 backdrop-blur-sm` |
| Close button `text-white/70` | `text-[var(--brand-soft-sand)]` |

**Step 2: JournalPreview**

| Old | New |
|-----|-----|
| `bg-slate-900` (section) | `bg-[var(--brand-paper-cream)]` |
| `glass-effect border-yellow-500/20` (card) | `bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)]` |
| `text-yellow-400` (icon/heading) | `text-[var(--brand-burnt-amber)]` |
| `text-white` | `text-[var(--brand-deep-slate)]` |
| `bg-slate-800/50` (table header) | `bg-[var(--brand-deep-slate)]/5` |
| `border-green-500/20 text-green-400` (WIN) | `bg-[var(--brand-wealth-teal)]/10 text-[var(--brand-wealth-teal)]` |
| `border-red-500/20 text-red-400` (LOSS) | `bg-[var(--brand-crimson)]/10 text-[var(--brand-crimson)]` |
| `text-slate-300/400` | `text-[var(--brand-graphite)]/60` |
| Stats box `bg-yellow-500/10 border-yellow-500/30` | `bg-[var(--brand-burnt-amber)]/5 border-[var(--brand-burnt-amber)]/20` |
| `from-green-400 to-green-300` (CTA) | `text-[var(--brand-wealth-teal)]` |

**Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add src/pages/Crypto/components/VideoSection.tsx src/pages/Crypto/components/JournalPreview.tsx
git commit -m "feat(crypto): restyle video and journal preview sections"
```

---

## Task 11: Restyle PricingSection

**Files:**
- Modify: `src/pages/Crypto/components/PricingSection.tsx` (153 lines)

**Step 1: Replace color classes**

| Old | New |
|-----|-----|
| `bg-linear-to-b from-slate-900 to-slate-800` (section) | `bg-[var(--brand-warm-white)]` |
| `from-yellow-400 to-orange-600 bg-clip-text text-transparent` (heading gradient) | `text-[var(--brand-deep-slate)]` |
| `text-slate-200` (subtitle) | `text-[var(--brand-graphite)]/70` |
| `crypto-card glass-effect border-2 border-yellow-500/50` | `bg-white border-t-4 border-t-[var(--brand-burnt-amber)] rounded-[var(--radius-card)] shadow-lg` |
| `from-yellow-500 to-orange-600` (badge gradient) | `bg-[var(--brand-brushed-gold)] text-white` (premium badge) |
| `text-white` (price) | `text-[var(--brand-deep-slate)]` Inter Bold 48px |
| `text-yellow-400` (features) | `text-[var(--brand-wealth-teal)]` (checkmarks) |
| `text-green-400` (EMI) | `text-[var(--brand-wealth-teal)]` |
| `text-gray-400/300` | `text-[var(--brand-graphite)]/50` |
| CTA button `from-yellow-500 to-orange-600` | `bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--btn-primary-hover)]` full width |
| Trust icons below | `text-[var(--brand-graphite)]/40` 13px |

**Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 3: Commit**

```bash
git add src/pages/Crypto/components/PricingSection.tsx
git commit -m "feat(crypto): restyle pricing with Burnt Amber accents and Brushed Gold badge"
```

---

## Task 12: Restyle CryptoGuaranteeSection and FAQ

**Files:**
- Modify: `src/pages/Crypto/components/CryptoGuaranteeSection.tsx` (136 lines)
- Modify: `src/pages/Crypto/components/FAQ.tsx` (70 lines)

**Step 1: CryptoGuaranteeSection**

| Old | New |
|-----|-----|
| `bg-linear-to-b from-slate-900/50 to-slate-900` | `bg-[var(--brand-paper-cream)]` |
| `glass-effect border-green-500/20` (badge) | `bg-[var(--brand-wealth-teal)]/10 border-[var(--brand-wealth-teal)]/20` |
| `text-yellow-400` (heading) | `text-[var(--brand-deep-slate)]` |
| `text-green-400` (shield icon) | `text-[var(--brand-wealth-teal)]` |
| `border-green-500/30` (grid cards) | `bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--radius-card)]` |
| `border-white/10` | `border-[var(--card-border)]` |
| Checkmarks | `text-[var(--brand-wealth-teal)]` |
| Trust number (1,263) | `text-[var(--brand-brushed-gold)]` |

**Step 2: FAQ**

| Old | New |
|-----|-----|
| `bg-linear-to-t from-slate-900 to-slate-800` | `bg-[var(--brand-warm-white)]` |
| `bg-slate-800/70 backdrop-blur-xs border-slate-700/50 hover-border-yellow-400/30` | `bg-white border border-[var(--card-border)] hover:border-l-4 hover:border-l-[var(--brand-wealth-teal)]` |
| `text-yellow-400` (Eye icon, expand) | `text-[var(--brand-wealth-teal)]` |
| `text-white` (question) | `text-[var(--brand-deep-slate)]` Inter SemiBold |
| `text-slate-300` (answer) | `text-[var(--brand-graphite)]/70` Inter Regular |
| `bg-linear-to-r from-yellow-400/20 to-transparent` (divider) | `border-t border-[var(--brand-burnt-amber)]/20` (thin Amber line) |

**Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add src/pages/Crypto/components/CryptoGuaranteeSection.tsx src/pages/Crypto/components/FAQ.tsx
git commit -m "feat(crypto): restyle guarantee and FAQ sections"
```

---

## Task 13: Restyle FinalCtaSection and Footer

**Files:**
- Modify: `src/pages/Crypto/components/FinalCtaSection.tsx` (203 lines)
- Modify: `src/pages/Crypto/components/Footer.tsx` (71 lines)

**Step 1: FinalCtaSection**

| Old | New |
|-----|-----|
| `bg-linear-to-b from-slate-800 via-slate-900 to-black` | `bg-[var(--brand-deep-slate)]` |
| `from-yellow-500/5 to-orange-500/5` | remove |
| `text-white` (heading) | keep — white on dark |
| `from-green-500 to-yellow-400 bg-clip-text text-transparent` | `text-white` |
| Comparison "Without" items | `text-[var(--brand-crimson)]` accent |
| Comparison "With" items | `text-[var(--brand-wealth-teal)]` accent |
| `from-green-500 via-green-600 to-green-500 shadow-green-500/25` (CTA) | `bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--btn-primary-hover)]` large button |
| `from-green-500/10 to-yellow-500/10 border-green-500/20` (program box) | `bg-[var(--brand-warm-white)]/10 border-[var(--brand-soft-sand)]/20` |
| Trust line text | `text-[var(--brand-soft-sand)]` 13px |

**Step 2: Footer**

| Old | New |
|-----|-----|
| `bg-slate-950` | `bg-[var(--brand-deep-slate)]` |
| `border-slate-800` (top border) | `border-[var(--brand-soft-sand)]/10` |
| `text-slate-400` | `text-[var(--brand-soft-sand)]` |
| `hover-text-cyan-400` | `hover:text-[var(--brand-wealth-teal)]` |
| `text-slate-500` (copyright) | `text-[var(--brand-soft-sand)]/60` |

**Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add src/pages/Crypto/components/FinalCtaSection.tsx src/pages/Crypto/components/Footer.tsx
git commit -m "feat(crypto): restyle final CTA and footer"
```

---

## Task 14: Restyle Modal Components (ExitIntent, Methodology, ReturningUser)

**Files:**
- Modify: `src/pages/Crypto/components/ExitIntentPopup.tsx` (101 lines)
- Modify: `src/pages/Crypto/components/MethodologyModal.tsx` (112 lines)
- Modify: `src/pages/Crypto/components/ReturningUserCheckout.tsx` (83 lines)

**Step 1: ExitIntentPopup**

| Old | New |
|-----|-----|
| `bg-black/80 backdrop-blur-xs` (backdrop) | `bg-[var(--brand-navy-black)]/80` |
| `bg-linear-to-br from-slate-900 to-slate-800 border-yellow-500/30` | `bg-[var(--brand-warm-white)] rounded-[var(--radius-card)] shadow-[var(--shadow-modal)]` |
| `text-yellow-400` (clock icon/heading) | `text-[var(--brand-deep-slate)]` heading, `text-[var(--brand-burnt-amber)]` icon |
| `bg-green-500/10 border-green-500/30 text-green-400` (value badge) | `bg-[var(--brand-brushed-gold)]/10 border-[var(--brand-brushed-gold)]/30 text-[var(--brand-brushed-gold)]` |
| `from-yellow-500 to-orange-600` (CTA) | `bg-[var(--btn-primary-bg)] text-white` |
| Secondary link | `text-[var(--brand-wealth-teal)]` |

**Step 2: MethodologyModal**

| Old | New |
|-----|-----|
| `bg-black/80 backdrop-blur-xs` | `bg-[var(--brand-navy-black)]/80` |
| `glass-effect bg-slate-900/95 border-white/20` | `bg-[var(--brand-warm-white)] rounded-[var(--radius-card)] shadow-[var(--shadow-modal)]` |
| `text-yellow-400` (icon/heading) | `text-[var(--brand-wealth-teal)]` icon, `text-[var(--brand-deep-slate)]` heading |
| `text-white` (body) | `text-[var(--brand-graphite)]` |
| `text-slate-300/500` | `text-[var(--brand-graphite)]/60` |

**Step 3: ReturningUserCheckout**

| Old | New |
|-----|-----|
| `glass-effect bg-slate-900/95 backdrop-blur-lg border-yellow-500/30` | `bg-[var(--brand-warm-white)] border border-[var(--card-border)] rounded-[var(--radius-card)] shadow-lg` |
| `text-slate-400 hover-text-white` (close) | `text-[var(--brand-graphite)]/40 hover:text-[var(--brand-deep-slate)]` |
| `text-white` (heading) | `text-[var(--brand-deep-slate)]` |
| `from-yellow-500 to-orange-600` (CTA) | `bg-[var(--btn-primary-bg)] text-white` |
| `text-slate-300` (body) | `text-[var(--brand-graphite)]/70` |
| `text-green-400` (trust) | `text-[var(--brand-wealth-teal)]` |

**Step 4: Verify build**

Run: `npm run build 2>&1 | tail -5`

**Step 5: Commit**

```bash
git add src/pages/Crypto/components/ExitIntentPopup.tsx src/pages/Crypto/components/MethodologyModal.tsx src/pages/Crypto/components/ReturningUserCheckout.tsx
git commit -m "feat(crypto): restyle modal components to warm white"
```

---

## Task 15: Restyle ErrorBoundary and Final Cleanup

**Files:**
- Modify: `src/pages/Crypto/components/ErrorBoundary.tsx` (41 lines)

**Step 1: ErrorBoundary**

| Old | New |
|-----|-----|
| `bg-slate-900` | `bg-[var(--brand-warm-white)]` |
| `text-white` | `text-[var(--brand-deep-slate)]` |
| `text-red-500` | `text-[var(--brand-crimson)]` |
| `text-slate-400` | `text-[var(--brand-graphite)]/60` |

**Step 2: Verify full build**

Run: `npm run build 2>&1 | tail -10`
Expected: Clean build with 0 errors

**Step 3: Verify lint**

Run: `npm run lint 2>&1 | tail -10`
Expected: 0 errors (warnings acceptable)

**Step 4: Commit**

```bash
git add src/pages/Crypto/components/ErrorBoundary.tsx
git commit -m "feat(crypto): restyle error boundary, complete Sophisticated Warmth migration"
```

---

## Task 16: Visual QA and Final Verification

**Step 1: Start dev server**

Run: `npm run dev`

**Step 2: Visual checklist**

Open `http://localhost:5173/crypto` and verify:

- [ ] Page background is Warm White (#FAF8F5), not dark
- [ ] Hero section is Deep Slate (#2C3539) with white text
- [ ] All CTA buttons are Burnt Amber (#C87533)
- [ ] Links and secondary accents use Wealth Teal (#0A8D7A)
- [ ] Font is Inter throughout (check DevTools)
- [ ] No glassmorphism or backdrop-blur visible
- [ ] No floating animations or shimmer effects
- [ ] Testimonial carousel auto-scrolls and drags
- [ ] FAQ accordion expands/collapses
- [ ] Exit intent popup triggers (move mouse to top on desktop)
- [ ] Countdown timer works
- [ ] Checkout link opens correctly
- [ ] Mobile responsive (test at 375px width)
- [ ] Pricing section shows correctly
- [ ] Brushed Gold appears sparingly (badges only)
- [ ] Wealth Teal appears as bridge element throughout

**Step 3: Fix any visual issues found**

**Step 4: Final commit if fixes were made**

```bash
git add -A
git commit -m "fix(crypto): visual QA fixes for brand alignment"
```

---

## Summary

| Task | Components | Estimated Effort |
|------|-----------|-----------------|
| 1 | Design tokens file | Small |
| 2 | design-system.css rewrite | Medium |
| 3 | crypto.css + hero-reimagined.css | Medium |
| 4 | Inter font + CryptoPage.tsx | Small |
| 5 | HeaderMinimal | Small |
| 6 | HeroSectionReimagined | Large (476 lines) |
| 7 | TrustBadgesBar + ProblemSection | Small |
| 8 | UniqueMechanism + Instructor | Small |
| 9 | TestimonialsSection | Medium (366 lines) |
| 10 | VideoSection + JournalPreview | Medium |
| 11 | PricingSection | Small |
| 12 | GuaranteeSection + FAQ | Small |
| 13 | FinalCTA + Footer | Small |
| 14 | 3 Modal components | Small |
| 15 | ErrorBoundary + cleanup | Small |
| 16 | Visual QA | Medium |

**Files unchanged:** data.ts, types.ts, useCountdown.ts, useExitIntent.ts, tracking.ts, dateHelpers.ts
