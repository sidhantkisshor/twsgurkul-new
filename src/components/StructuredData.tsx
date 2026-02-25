import React from 'react';

/**
 * Renders one or more JSON-LD structured data <script> tags.
 * Pass a single schema object or an array of schema objects.
 *
 * Usage:
 *   <JsonLd data={organizationSchema} />
 *   <JsonLd data={[organizationSchema, webSiteSchema]} />
 */

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

// Serialize JSON-LD safely: prevent </script> from breaking out of the tag.
// JSON.stringify never emits lone '<' so only the slash-bracket sequence matters.
const toSafeJsonLd = (schema: Record<string, unknown>): string =>
  JSON.stringify(schema).replace(/<\/script>/gi, '<\\/script>');

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toSafeJsonLd(schema) }}
        />
      ))}
    </>
  );
};

export default JsonLd;

// ---------------------------------------------------------------------------
// Pre-built schema helpers
// ---------------------------------------------------------------------------

// eslint-disable-next-line react-refresh/only-export-components
export const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.twsgurukul.com/#organization",
  "name": "TWS GurukulX",
  "legalName": "Trading With Sidhant LLP",
  "url": "https://www.twsgurukul.com",
  "logo": "https://www.twsgurukul.com/logo-icon.png",
  "foundingDate": "2023",
  "description":
    "India-based trading education platform offering mentorship programs and courses for forex, crypto, and Indian stock markets. Combines institutional-grade footprint analysis, rule-based systems, and hands-on mentorship for working professionals.",
  "founder": {
    "@type": "Person",
    "@id": "https://www.twsgurukul.com/#founder",
    "name": "Sidhant Kisshor",
    "jobTitle": "Founder & Lead Mentor",
    "description": "TEDx Speaker, professional trader since 2017",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8062963333",
    "contactType": "customer support",
    "availableLanguage": ["English", "Hindi"],
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
  },
  "areaServed": {
    "@type": "Country",
    "name": "India",
  },
  "knowsAbout": [
    "Forex Trading",
    "Cryptocurrency Trading",
    "Indian Stock Market",
    "Footprint Analysis",
    "Order Flow Trading",
    "Trading Psychology",
    "Risk Management",
  ],
  "sameAs": [
    "https://www.youtube.com/@twsgurukul",
  ],
};

// eslint-disable-next-line react-refresh/only-export-components
export const webSiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.twsgurukul.com/#website",
  "name": "TWS GurukulX",
  "url": "https://www.twsgurukul.com",
  "publisher": { "@id": "https://www.twsgurukul.com/#organization" },
  "description": "India-based trading education platform. Live mentorship, rule-based systems, and multi-market mastery for working professionals.",
};

// eslint-disable-next-line react-refresh/only-export-components
export const cryptoCourseSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Crypto Mastery",
  "description":
    "12-week recorded crypto trading program with monthly live Q&A. Build a 2-hour evening system (7-9 PM) with a 5-step execution framework covering technical analysis, confluence stacking, risk management, and trade journaling. 1,263 enrolled, 73% reported win rate.",
  "provider": {
    "@type": "Organization",
    "name": "TWS GurukulX",
    "sameAs": "https://www.twsgurukul.com",
  },
  "offers": {
    "@type": "Offer",
    "price": "19499",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://www.twsgurukul.com/crypto",
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT24H",
    "instructor": {
      "@type": "Person",
      "name": "Sidhant Kisshor",
      "description": "TEDx Speaker, professional trader since 2017",
    },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "reviewCount": "1263",
  },
  "inLanguage": "en",
  "educationalLevel": "Beginner to Advanced",
  "about": ["Cryptocurrency Trading", "Bitcoin", "Altcoins", "Risk Management", "Technical Analysis"],
};

/**
 * Build a BreadcrumbList schema from an array of breadcrumb items.
 * Each item has a name and url. The last item is the current page.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const buildBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": item.url,
  })),
});

/**
 * Build a FAQPage schema from an array of Q&A pairs.
 * Accepts either { q, a } or { question, answer } shapes.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const buildFaqSchema = (
  items: Array<{ q?: string; a?: string; question?: string; answer?: string }>
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map((item) => ({
    "@type": "Question",
    "name": item.q || item.question || "",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a || item.answer || "",
    },
  })),
});

/**
 * Build a VideoObject schema for pages with embedded video.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const buildVideoSchema = (opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
  duration?: string;
}): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": opts.name,
  "description": opts.description,
  "thumbnailUrl": opts.thumbnailUrl,
  "contentUrl": opts.contentUrl,
  "uploadDate": opts.uploadDate,
  ...(opts.duration ? { "duration": opts.duration } : {}),
});

// eslint-disable-next-line react-refresh/only-export-components
export const footprintCourseSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Footprint Mastery",
  "description":
    "Master institutional order flow analysis with footprint charts using the F.A.S.T. framework (Find, Assess, Sync, Trade). Learn to identify absorption, delta divergence, and liquidity zones. Self-paced 10-module course with monthly live Q&A and lifetime access.",
  "provider": {
    "@type": "Organization",
    "name": "TWS GurukulX",
    "sameAs": "https://www.twsgurukul.com",
  },
  "offers": {
    "@type": "Offer",
    "price": "32999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://www.twsgurukul.com/footprint",
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT10H",
    "instructor": {
      "@type": "Person",
      "name": "Sidhant Kisshor",
      "description": "TEDx Speaker, professional trader since 2017",
    },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "reviewCount": "1263",
  },
  "inLanguage": "en",
  "educationalLevel": "Beginner to Advanced",
  "about": ["Footprint Charts", "Order Flow Analysis", "Institutional Trading", "Delta Divergence", "Liquidity Zones"],
};

// eslint-disable-next-line react-refresh/only-export-components
export const mentorshipCourseSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Elite Trading Mentorship",
  "description":
    "Live 1-on-1 trading mentorship with nightly 8 PM IST sessions, 5 nights a week. Includes 40+ strategy videos, weekly performance reviews, whale wallet tracking, and WhatsApp support. Capped at 50 per batch. 2,300+ traders trained, 83% complete the full 90 days.",
  "provider": {
    "@type": "Organization",
    "name": "TWS GurukulX",
    "sameAs": "https://www.twsgurukul.com",
  },
  "offers": {
    "@type": "Offer",
    "price": "19999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://www.twsgurukul.com/mentorship",
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "instructor": {
      "@type": "Person",
      "name": "Sidhant Kisshor",
      "description": "TEDx Speaker, professional trader since 2017, founder of TWS GurukulX",
    },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "2300",
  },
  "inLanguage": ["en", "hi"],
  "educationalLevel": "Beginner to Advanced",
  "about": ["Forex Trading", "Crypto Trading", "Indian Stock Market", "Live Trading Sessions", "Risk Management"],
};
