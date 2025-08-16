import React from 'react';
import { getNextFirstSaturdayWithOrdinal } from '../../Crypto/utils/dateHelpers';

const StructuredData: React.FC = () => {
  const nextSession = getNextFirstSaturdayWithOrdinal();
  const currentYear = new Date().getFullYear();
  const nextMonth = new Date().getMonth() + 1;
  
  // Calculate next first Saturday date for validFrom
  const getNextFirstSaturdayDate = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    
    let targetMonth = currentMonth;
    let targetYear = currentYear;
    
    const firstOfMonth = new Date(targetYear, targetMonth, 1);
    const dayOfWeek = firstOfMonth.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7;
    const firstSaturday = new Date(targetYear, targetMonth, daysUntilSaturday);
    
    if (currentDate > firstSaturday.getDate()) {
      targetMonth = (currentMonth + 1) % 12;
      if (targetMonth === 0) {
        targetYear = currentYear + 1;
      }
      
      const nextFirstOfMonth = new Date(targetYear, targetMonth, 1);
      const nextDayOfWeek = nextFirstOfMonth.getDay();
      const nextDaysUntilSaturday = (6 - nextDayOfWeek + 7) % 7 || 7;
      return new Date(targetYear, targetMonth, nextDaysUntilSaturday).toISOString();
    }
    
    return firstSaturday.toISOString();
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Footprint Mastery",
    "description": "Master order flow analysis with footprint charts. Learn to identify absorption, delta divergence, and liquidity zones for systematic trading.",
    "provider": {
      "@type": "Organization",
      "name": "TWS Gurukul",
      "sameAs": "https://www.twsgurukul.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "34997",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": getNextFirstSaturdayDate(),
      "url": "https://www.twsgurukul.com/footprint"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT10H",
      "instructor": {
        "@type": "Organization",
        "name": "TWS Gurukul Pro Coaches",
        "description": "Expert team of order flow and footprint analysis specialists"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1263"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kya yeh legal hai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Haan. Public market data aur standard charting tools. Education only—no tips or signals."
        }
      },
      {
        "@type": "Question",
        "name": "Kitni jaldi results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Checklist day-1 se apply hota hai. Consistency practice, risk rules aur market pe depend karti hai."
        }
      },
      {
        "@type": "Question",
        "name": "Crypto ke alawa kaam karega?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Concepts indices/FX par generalize hote hain; examples BTC/ETH footprints se."
        }
      },
      {
        "@type": "Question",
        "name": "Calls milenge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nahi. Process sikhate hain—planned entries with clear invalidation."
        }
      },
      {
        "@type": "Question",
        "name": "EMI/refund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EMI 3–24 months where supported. 30-day satisfaction guarantee on content quality."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TWS Gurukul",
    "url": "https://www.twsgurukul.com",
    "logo": "https://www.twsgurukul.com/logo.png",
    "foundingDate": "2023",
    "description": "India-first trading education platform focusing on order flow analysis and systematic trading.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/twsgurukul",
      "https://www.youtube.com/@twsgurukul"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default StructuredData;