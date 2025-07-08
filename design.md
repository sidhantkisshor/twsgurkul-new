# TWS Gurukul Crypto Landing Page Design System

## DESIGN PHILOSOPHY
**High-converting, Indian-focused fintech landing page with emphasis on trust, urgency, and social proof**

## COLOR PALETTE

### Primary Colors
- **Background Base**: `bg-slate-900` (#0F172A) - Primary dark background
- **Background Secondary**: `bg-slate-800` (#1E293B) - Secondary sections
- **Background Accent**: `bg-slate-800/30` (#1E293B with 30% opacity) - Subtle sections

### Accent Colors
- **Primary CTA**: `from-green-500 to-green-600` (#10B981 to #059669) - Main action buttons
- **Secondary CTA**: `border-yellow-500/50 text-yellow-400` (#EAB308/50 border, #FACC15 text) - Secondary actions
- **Warning/Urgent**: `from-yellow-500 to-orange-500` (#EAB308 to #F97316) - Announcement bars
- **Success**: `text-green-400` (#4ADE80) - Positive indicators
- **Highlight**: `from-yellow-400 to-orange-400` (#FACC15 to #FB923C) - Text gradients

### Text Colors
- **Primary Text**: `text-white` (#FFFFFF) - Headings and important text
- **Secondary Text**: `text-slate-300` (#CBD5E1) - Body text
- **Muted Text**: `text-slate-400` (#94A3B8) - Supporting text

## TYPOGRAPHY

### Font Stack
```css
font-family: 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'
```

### Type Scale
- **Hero Headlines**: `text-3xl sm:text-3xl lg:text-5xl font-bold` (48px-80px)
- **Section Headlines**: `text-3xl sm:text-4xl lg:text-5xl font-bold` (48px-80px)
- **Sub Headlines**: `text-2xl font-bold` (24px)
- **Body Large**: `text-base sm:text-lg lg:text-xl` (16px-20px)
- **Body Regular**: `text-sm sm:text-base` (14px-16px)
- **Caption**: `text-xs sm:text-sm` (12px-14px)

### Text Effects
- **Gradient Text**: `text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400`
- **Emphasis**: `text-green-400` for positive highlights
- **Secondary Emphasis**: `text-yellow-400` for warnings/attention

## SPACING SYSTEM

### Container Spacing
- **Max Width**: `max-w-7xl mx-auto` (1280px centered)
- **Section Padding**: `py-16 sm:py-20` (64px-80px vertical)
- **Container Padding**: `px-4 sm:px-6 lg:px-8` (16px-32px horizontal)

### Component Spacing
- **Large Gaps**: `space-y-5 sm:space-y-6` (20px-24px)
- **Medium Gaps**: `space-y-4 sm:space-y-4` (16px)
- **Small Gaps**: `space-y-2 sm:space-y-3` (8px-12px)
- **Grid Gaps**: `gap-8 lg:gap-12` (32px-48px)

## COMPONENT PATTERNS

### Card Design
```css
/* Base Card */
bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50

/* Enhanced Card */
bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700

/* Feature Card */
bg-slate-800/50 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-slate-700/50
```

### Button Hierarchy

#### Primary CTA
```css
bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg
px-4 sm:px-6 py-3 shadow-lg shadow-green-500/25
hover:scale-1.02 transition-transform
```

#### Secondary CTA  
```css
bg-slate-800/50 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 
font-semibold rounded-lg hover:bg-slate-800 transition-all
px-4 sm:px-10 py-3
```

#### Announcement/Urgent
```css
bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 
px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold
```

### Motion & Animation

#### Standard Motion Values
```javascript
// Entry animations
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Hover interactions
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}

// Stagger animations
transition={{ delay: index * 0.05 }}
```

#### Continuous Animations
```javascript
// Rotating badges
animate={{ rotate: [0, 5, -5, 0] }}
transition={{ duration: 2, repeat: Infinity }}

// Sliding testimonials
baseVelocity = -50
wrap(-scrollWidth, 0, position)
```

## LAYOUT PATTERNS

### Hero Section Layout
```css
/* Two-column responsive grid */
grid lg:grid-cols-2 gap-8 lg:gap-12 items-center

/* Content hierarchy */
- Headline (3-line with gradient middle)
- Description with highlights
- Social proof (avatars + count)
- Feature grid (2x2)
- CTA buttons (stacked on mobile, side-by-side desktop)
- Stats grid (3 columns)
```

### Section Layout Structure
```css
/* Standard section */
py-16 sm:py-20 px-4 sm:px-6 lg:px-8

/* Alternating backgrounds */
- bg-slate-900 (primary sections)
- bg-slate-800/30 (secondary sections)
- bg-gradient-to-b from-slate-900 to-slate-800 (CTA sections)
```

## CONTENT PATTERNS

### Urgency Indicators
- Countdown timers: `🎉 Special: ₹2,000 bonus on enrollment 22:36:44`
- Scarcity: `Only 23 seats left in current batch`
- Social proof: `247 students enrolled this week`
- Recent activity: `Jaspreet from Delhi just enrolled (3 minutes ago)`

### Trust Signals
- Badges: `Lifetime Access • Money-Back Guarantee • RBI Guidelines Compliant`
- Verification: `✓ Verified Student Verified Nov 2024`
- Authority: `As Seen on TEDx Verified Course`
- Credentials: `TEDx Speaker & Featured at IIT`

### Value Proposition Format
```
Problem Recognition → Solution → Social Proof → Features → Pricing → Urgency → CTA
```

### Testimonial Card Structure
```css
/* Layout */
min-w-[280px] sm:min-w-[320px] bg-slate-800/50 rounded-xl p-6 border border-slate-700

/* Content hierarchy */
1. Profile (image, name, role, location, age)
2. Quote headline (bold, quoted)
3. Quote body (testimonial text)
4. Profit display (animated counter)
5. Verification badge
6. Success highlight
```

## RESPONSIVE BREAKPOINTS

### Mobile First Approach
```css
/* Base (320px+) */
text-3xl px-4 py-16

/* Small (640px+) */
sm:text-3xl sm:px-6 sm:py-20

/* Large (1024px+) */
lg:text-5xl lg:px-8 lg:grid-cols-2
```

## ACCESSIBILITY PATTERNS

### ARIA Labels
- `role="region" aria-label="Customer testimonials"`
- `aria-live="polite"` for dynamic content
- `aria-label="student avatar"` for decorative elements

### Focus States
- Visible focus rings on interactive elements
- Keyboard navigation support
- Screen reader friendly text

## PERFORMANCE OPTIMIZATIONS

### Image Strategy
- Lazy loading: `loading="lazy"`
- Error fallbacks: `onError={() => setFallbackImage()}`
- Optimized formats: WebP with fallbacks
- CDN hosted: `https://d2j3cl693ttatt.cloudfront.net/`

### Animation Performance
- Hardware accelerated transforms
- `will-change` for moving elements
- Reduced motion respect: `@media (prefers-reduced-motion: reduce)`

## CONVERSION OPTIMIZATION PATTERNS

### Progressive Disclosure
1. **Attention**: Announcement bar + countdown
2. **Interest**: Headline + social proof
3. **Desire**: Features + testimonials + instructor credibility
4. **Action**: Clear pricing + multiple CTAs + urgency

### Risk Reversal
- "30-day money back guarantee"
- "No hidden charges • 0% interest"
- "100% Secure Payments"

### Social Proof Hierarchy
1. Numbers: "1,047 working professionals"
2. Recent activity: "247 students enrolled this week"
3. Testimonials: Detailed success stories
4. Authority: TEDx speaker credentials
5. Verification: Verified student badges

## TECHNICAL IMPLEMENTATION

### Required Dependencies
```json
{
  "framer-motion": "^10.x", // For animations
  "lucide-react": "^0.x",   // For icons
  "tailwindcss": "^3.x"     // For styling
}
```

### Key React Patterns
- Intersection Observer for scroll animations
- useMotionValue for complex animations
- Custom hooks for countdown timers
- Error boundaries for robust UX
- Lazy loading for performance

### Data Structure
- Centralized data in `/data.ts`
- TypeScript interfaces in `/types.ts`
- Modular component architecture
- Reusable animation configurations

## BRAND VOICE INTEGRATION

### Language Tone
- **Conversational**: "Bhai, mujhe sab pata hai"
- **Inclusive**: "Indians Like You", "Working professionals"
- **Urgent but trustworthy**: Facts + deadlines + guarantees
- **Results-focused**: Specific numbers and outcomes
- **Hindi-English mix**: "Ghar baithe seekho, lifetime kamao"

This design system ensures consistent, high-converting landing pages that build trust with Indian audiences while maintaining technical excellence and accessibility standards. 