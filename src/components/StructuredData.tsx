import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'course' | 'webpage' | 'faq';
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "TWS Gurukul",
          "url": "https://www.twsgurukul.com",
          "logo": "https://www.twsgurukul.com/favicon.png",
          "description": "India's premier trading education platform by Sidhant",
          "founder": {
            "@type": "Person",
            "name": "Sidhant",
            "jobTitle": "Founder & Head Trader"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "10847"
          },
          ...data
        };

      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "TWS Gurukul",
            "url": "https://www.twsgurukul.com"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          },
          "courseMode": "Online",
          "duration": data.duration || "P3M",
          ...data
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.title,
          "description": data.description,
          "url": data.url || window.location.href,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": data.breadcrumb || []
          },
          ...data
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (data.questions as Array<{question: string; answer: string}>)?.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || [],
          ...data
        };

      default:
        return data;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
    />
  );
};

export default StructuredData;