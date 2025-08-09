# TWS Gurukul Website Comprehensive Audit – Addendum (2025-08-09)

This addendum documents immediate actions taken and additional observations after reviewing and validating the codebase alongside the provided audit.

## Immediate Fixes Implemented
- Marketing data standardized across landing pages via shared constants at `src/pages/common/marketing.ts`:
  - Students: `2,347+`
  - Total Profits: `₹10 Cr+`
  - Win Rate label/value: `73% Win Rate`
  - Refund: `30-day 100% money-back (no questions asked)`
- Replaced conflicting/aggressive claims and numbers:
  - Win rates like 98%/90%/94.7% → unified to 73%
  - Students counts like 5,000+, 1,263+ → unified to 2,347+
  - Profits like ₹2.7Cr, ₹10.2Cr, ₹50Cr+ → unified to ₹10 Cr+
  - Guarantees such as 200% refund / legal guarantees / 90-day profit promise → replaced with one clear policy: 30-day 100% money-back (no questions asked)
- Adjusted copy that manufactured urgency with hard numbers (e.g., “47 spots left at ₹19,499”) to neutral scarcity language to remain compliant and consistent.
- Built project to validate changes; no type/build errors.

## Additional Findings (beyond original audit)
- Puppeteer listed under runtime dependencies; risk of bloating client bundle. Recommendation: move to devDependencies or remove if unused on client.
- Multiple files contain static proof claims (counts/profits) that can drift over time. Recommendation: keep all such copy in one constants module and/or fetch from a verified backend endpoint.
- Footprint page contained extreme claims (e.g., double refunds, $10K in 90 days). These have been toned down or unified; recommend a content governance checklist to prevent regressions.
- Some urgency components embed precise numbers (spots left, timers) inline. Suggest a single utility with guardrails to prevent unverifiable specifics and to centralize language.

## Priority Recommendations (actionable)
- Security
  - Remove any API keys from client; proxy via backend.
  - Tighten CSP (remove unsafe-inline) and add SRI to external scripts.
- Legal/Compliance
  - Add pages/links for Terms of Service, Privacy Policy, Refund Policy, Financial Disclaimer; surface 30-day refund policy in footer and checkout UX.
  - Add cookie consent (GDPR/CCPA) via GTM-compatible banner.
- Performance
  - Remove Puppeteer from client bundle (move to devDependencies or a separate tool repo).
  - Code-split large sections (e.g., testimonials/hero video components) with dynamic imports.
  - Ensure all images use WebP/AVIF with `<picture>` fallbacks; add preconnect/prefetch hints for critical assets.
- Analytics/Tracking
  - Add error monitoring (Sentry) and funnel/micro-conversion events (Hotjar/Clarity + GTM).
  - Add server-side tracking (server GTM) for reliability.
- Engineering Quality
  - Add CI (GitHub Actions): lint, typecheck, build; block on failures.
  - Introduce unit/integration tests (Jest + RTL); start with critical components (pricing, CTA, forms).
- SEO
  - Add per-page dynamic meta; Course JSON-LD; canonical URLs; fix sitemap with all routes.

## Risk Reassessment (after fixes)
- Reputational risk (from inconsistent claims): reduced (medium → low) due to centralized constants and copy unification.
- Compliance risk (from guarantees and unverifiable performance): reduced but still medium until legal pages and explicit disclaimers are added site-wide.
- Performance risk: unchanged; needs action on Puppeteer and code-splitting.

## Proposed 2-Week Plan (condensed)
- Week 1: Legal/compliance pages; cookie consent; constants audit across all pages; remove Puppeteer from client.
- Week 2: Add Sentry + CI; code-split largest components; SEO structured data + updated sitemap; initial test suite.

---

# TWS Gurukul Website Comprehensive Audit Report (Original)

Refer to the original audit content provided. This repository copy includes the above addendum describing post-audit fixes and prioritized follow-ups aligned to the current codebase state.