# Mobile UX Guidelines - Footprint Page

## Content Guidelines

### Paragraph Length
- Keep paragraphs to 2-3 lines maximum on mobile
- Break longer content into bullet points
- Use concise, scannable text

### Emoji Usage
- Maximum 1 emoji per section (or none)
- Remove decorative emojis
- Only use when it adds clarity

### Benefits Display
- Use bullet points for all benefits
- Keep each bullet to 1 line where possible
- Use icons instead of emojis for visual hierarchy

## CTA Strategy

### Single CTA Per Viewport
- Only one CTA button visible per mobile fold
- Avoid CTA clutter and decision fatigue

### Sticky Mobile CTA
- Implement sticky mobile CTA that:
  - Hides when pricing section CTA is in viewport
  - Reappears when user scrolls away from pricing
  - Uses intersection observer for smooth transitions

### Implementation Example
```javascript
// Sticky CTA visibility logic
const pricingSection = document.querySelector('#pricing');
const stickyCTA = document.querySelector('.sticky-mobile-cta');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stickyCTA.classList.add('hidden');
    } else {
      stickyCTA.classList.remove('hidden');
    }
  });
});

observer.observe(pricingSection);
```

## Typography Hierarchy

### Mobile Font Sizes
- H1: 24-28px
- H2: 20-22px
- Body: 14-16px
- Small text: 12px

### Line Height
- Headlines: 1.2-1.3
- Body text: 1.5-1.6
- Ensure adequate tap targets (min 44px)

## Spacing Guidelines

### Section Padding
- Top/Bottom: 48-64px on mobile
- Left/Right: 16-20px

### Element Spacing
- Between sections: 32-40px
- Between paragraphs: 16px
- Between list items: 12px

## Performance Considerations

### Image Optimization
- Use responsive images with srcset
- Lazy load below-the-fold content
- Compress all images under 100KB for mobile

### Animation Reduction
- Reduce or disable animations on mobile
- Use CSS transforms over JavaScript animations
- Respect prefers-reduced-motion

## Testing Checklist

- [ ] Test on iPhone SE (smallest common viewport)
- [ ] Test on Android mid-range devices
- [ ] Verify single CTA visibility per fold
- [ ] Check sticky CTA hide/show behavior
- [ ] Ensure all text is readable without zooming
- [ ] Verify tap targets are at least 44x44px
- [ ] Test landscape orientation
- [ ] Check loading performance on 3G connection