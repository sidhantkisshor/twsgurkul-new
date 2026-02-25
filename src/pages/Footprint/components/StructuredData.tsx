import React from 'react';
import JsonLd, {
  footprintCourseSchema,
  organizationSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '../../../components/StructuredData';

const footprintFaqs = [
  { q: 'Is this legal?', a: 'Yes. We use public market data and standard charting tools. Education only, no tips or signals.' },
  { q: 'How fast will I see results?', a: 'You can apply the checklist from day 1. Consistency depends on practice, risk rules, and market conditions.' },
  { q: 'Does it work beyond crypto?', a: 'The concepts generalize to indices and FX. Examples use BTC/ETH footprints.' },
  { q: 'Will I get trade calls?', a: 'No. We teach the process: planned entries with clear invalidation levels.' },
  { q: 'EMI and refund options?', a: 'EMI 3–24 months where supported. Refunds available within 7 days of purchase if less than 20% of content has been accessed.' },
];

const StructuredData: React.FC = () => (
  <JsonLd
    data={[
      footprintCourseSchema,
      organizationSchema,
      buildBreadcrumbSchema([
        { name: 'Home', url: 'https://www.twsgurukul.com/' },
        { name: 'Footprint Mastery', url: 'https://www.twsgurukul.com/footprint' },
      ]),
      buildFaqSchema(footprintFaqs),
    ]}
  />
);

export default StructuredData;
