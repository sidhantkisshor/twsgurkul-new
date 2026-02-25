import React from 'react';
import LegalPageLayout, { Section, SubSection, BulletList, ContactCard } from './LegalPageLayout';

const sections = [
  { id: 'overview', label: '1. Overview' },
  { id: 'one-time', label: '2. One-Time Course Purchases' },
  { id: 'subscriptions', label: '3. Subscription Plans' },
  { id: 'how-to', label: '4. How to Request a Refund' },
  { id: 'processing', label: '5. Refund Processing' },
  { id: 'chargebacks', label: '6. Chargebacks' },
  { id: 'exceptions', label: '7. Exceptions & Discretion' },
  { id: 'contact', label: '8. Contact' },
];

const RefundPage: React.FC = () => (
  <LegalPageLayout
    title="Refund Policy"
    effectiveDate="February 24, 2026"
    applies="tradingwithsidhant.com | twsgurukul.com"
    sections={sections}
  >
    <Section id="overview" number="01" title="Overview">
      <p>
        At Trading With Sidhant LLP, we are committed to delivering high-quality financial education. We want
        you to be satisfied with your purchase. This Refund Policy outlines the terms under which refunds or
        credits may be granted for courses and subscriptions purchased on our platforms.
      </p>
    </Section>

    <Section id="one-time" number="02" title="One-Time Course Purchases">
      <SubSection title="2.1 Eligible for Refund">
        <BulletList items={[
          'Refund requests submitted within 7 days of purchase, provided that less than 20% of the course content has been accessed or viewed',
          'Technical issues that prevent course access and cannot be resolved by our support team within 5 business days',
          'Duplicate payment confirmed by our payment team',
        ]} />
      </SubSection>
      <SubSection title="2.2 Not Eligible for Refund">
        <BulletList items={[
          'Requests made after 7 days of the purchase date',
          'Courses where more than 20% of the content has been accessed',
          'Downloadable resources, PDF materials, or bonuses that have already been accessed or downloaded',
          '"Step 2 to 1% Mentorship" and other live or cohort-based programs once the program has commenced',
          'Purchases made under promotional or discounted pricing',
        ]} />
      </SubSection>
    </Section>

    <Section id="subscriptions" number="03" title="Subscription Plans">
      <SubSection title="3.1 Monthly Subscriptions">
        <p>
          Monthly subscriptions are non-refundable once the billing cycle has commenced. You may cancel your
          subscription at any time to prevent future billing; however, you will continue to have access to the
          Platform until the end of the current billing period.
        </p>
      </SubSection>
      <SubSection title="3.2 Annual Subscriptions">
        <p>
          For annual subscriptions, a prorated refund may be considered if a cancellation request is submitted
          within <strong className="text-deep-slate">14 days</strong> of the initial purchase and less than one
          month's worth of content has been accessed. Renewal charges for annual subscriptions are non-refundable.
        </p>
      </SubSection>
    </Section>

    <Section id="how-to" number="04" title="How to Request a Refund">
      <p>To initiate a refund, please follow these steps:</p>
      <BulletList items={[
        <>Email <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">support@tradingwithsidhant.com</a> with the subject line: <em>"Refund Request – [Your Name] – [Course/Plan Name]"</em></>,
        'Include your registered email address, order ID or payment reference number, and reason for the refund request',
        'Our support team will review your request within 5 business days and communicate the outcome via email',
      ]} />
    </Section>

    <Section id="processing" number="05" title="Refund Processing">
      <p>
        Approved refunds will be processed to the original payment method within{' '}
        <strong className="text-deep-slate">7–10 business days</strong> of approval. Processing time may vary
        depending on your bank or payment provider. The Company is not responsible for delays caused by
        financial institutions.
      </p>
    </Section>

    <Section id="chargebacks" number="06" title="Chargebacks">
      <p>
        We strongly discourage initiating chargebacks or payment disputes without first contacting our support
        team. Fraudulent chargebacks will result in immediate account suspension and may be contested with
        evidence of service delivery. We are committed to resolving all genuine disputes amicably.
      </p>
    </Section>

    <Section id="exceptions" number="07" title="Exceptions & Discretion">
      <p>
        The Company reserves the right to make exceptions to this Refund Policy at its sole discretion in
        cases of exceptional circumstances. Any such exceptions do not create an obligation to offer the same
        in future transactions.
      </p>
    </Section>

    <Section id="contact" number="08" title="Contact for Refund Queries">
      <ContactCard>
        <p>Email: <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">support@tradingwithsidhant.com</a></p>
        <p className="text-deep-slate/50">Response time: Within 5 business days</p>
      </ContactCard>
    </Section>
  </LegalPageLayout>
);

export default RefundPage;
