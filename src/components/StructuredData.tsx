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
  "name": "TWS GurukulX",
  "url": "https://www.twsgurukul.com",
  "logo": "https://www.twsgurukul.com/logo.png",
  "foundingDate": "2023",
  "description":
    "India-first trading education platform focusing on order flow analysis and systematic trading.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
  },
  "sameAs": [
    "https://www.youtube.com/@twsgurukul",
  ],
};

// eslint-disable-next-line react-refresh/only-export-components
export const webSiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TWS GurukulX",
  "url": "https://www.twsgurukul.com",
};

// eslint-disable-next-line react-refresh/only-export-components
export const cryptoCourseSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Crypto Mastery",
  "description":
    "A recorded program with monthly live Q&A to learn systematic crypto trading with risk management at the core.",
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
    "instructor": {
      "@type": "Organization",
      "name": "TWS GurukulX",
    },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "reviewCount": "1263",
  },
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
    "Master order flow analysis with footprint charts. Learn to identify absorption, delta divergence, and liquidity zones for systematic trading.",
  "provider": {
    "@type": "Organization",
    "name": "TWS GurukulX",
    "sameAs": "https://www.twsgurukul.com",
  },
  "offers": {
    "@type": "Offer",
    "price": "29999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://www.twsgurukul.com/footprint",
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT10H",
    "instructor": {
      "@type": "Organization",
      "name": "TWS GurukulX Pro Coaches",
      "description":
        "Expert team of order flow and footprint analysis specialists",
    },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "reviewCount": "412",
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const mentorshipCourseSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Elite Trading Mentorship",
  "description":
    "Live 8 PM trading sessions with pro coaches, accountability pods, and weekly performance reviews. Capped cohorts for personalised attention.",
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
      "@type": "Organization",
      "name": "TWS GurukulX Pro Coaches",
      "description":
        "Certified pro coaches trained in Sidhant's system",
    },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "847",
  },
};
