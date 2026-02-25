import React from 'react';
import LegalPageLayout, { Section, SubSection, BulletList, ContactCard } from './LegalPageLayout';

const sections = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'eligibility', label: '2. Eligibility' },
  { id: 'platform', label: '3. Platform & Services' },
  { id: 'accounts', label: '4. User Accounts' },
  { id: 'payments', label: '5. Payments & Subscriptions' },
  { id: 'prohibited', label: '6. Prohibited Conduct' },
  { id: 'no-advice', label: '7. No Investment Advice' },
  { id: 'liability', label: '8. Limitation of Liability' },
  { id: 'termination', label: '9. Termination' },
  { id: 'governing', label: '10. Governing Law' },
  { id: 'amendments', label: '11. Amendments' },
  { id: 'contact', label: '12. Contact' },
];

const TermsPage: React.FC = () => (
  <LegalPageLayout
    title="Terms & Conditions"
    effectiveDate="February 24, 2026"
    applies="tradingwithsidhant.com | twsgurukul.com"
    sections={sections}
  >
    <Section id="acceptance" number="01" title="Acceptance of Terms">
      <p>
        By accessing or using tradingwithsidhant.com or twsgurukul.com (collectively, "the Platform"), enrolling
        in any course, or purchasing any subscription, you ("User") agree to be legally bound by these Terms &amp;
        Conditions. If you do not agree, please do not use the Platform.
      </p>
      <p>
        These Terms constitute a binding legal agreement between you and <strong className="text-deep-slate">Trading
        With Sidhant LLP</strong> ("Company," "we," "us," or "our"), a limited liability partnership registered in India.
      </p>
    </Section>

    <Section id="eligibility" number="02" title="Eligibility">
      <p>
        You must be at least <strong className="text-deep-slate">18 years of age</strong> and competent to contract
        under the Indian Contract Act, 1872 to use this Platform. By using the Platform, you represent and warrant
        that you meet these eligibility requirements. Minors are strictly prohibited from enrolling in or purchasing
        any course or subscription on the Platform.
      </p>
    </Section>

    <Section id="platform" number="03" title="Platform & Services">
      <SubSection title="3.1 Educational Services">
        <p>
          The Platform provides online financial and trading education through pre-recorded courses, live sessions,
          mentorship programs, community access, and related digital content ("Services"). Current offerings include:
        </p>
        <BulletList items={[
          'Pre-recorded courses on stock trading, options trading, price action, and cryptocurrency',
          'Live mentorship sessions and webinars',
          'Community access and Q&A support',
          'One-time course purchases and subscription-based access plans',
          'Mobile app access via Android and iOS',
        ]} />
      </SubSection>
      <SubSection title="3.2 Intellectual Property">
        <p>
          All content on the Platform — including videos, course materials, graphics, text, code, logos, and
          trademarks — is the exclusive intellectual property of Trading With Sidhant LLP and is protected under
          the Copyright Act, 1957 and other applicable Indian laws. You are granted a limited, non-exclusive,
          non-transferable, revocable license to access content solely for personal, non-commercial use. Any
          reproduction, redistribution, resale, or public display without prior written consent is strictly
          prohibited and may result in legal action.
        </p>
      </SubSection>
    </Section>

    <Section id="accounts" number="04" title="User Accounts">
      <p>You must create an account to access paid content. You agree to:</p>
      <BulletList items={[
        'Provide accurate and complete registration information',
        'Maintain the confidentiality of your login credentials',
        <>Notify us immediately at <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">support@tradingwithsidhant.com</a> of any unauthorized access</>,
        'Not share, sell, or transfer your account credentials to any third party',
      ]} />
      <p className="mt-3">
        The Company reserves the right to suspend or terminate accounts found to be in violation of these Terms
        without prior notice or refund.
      </p>
    </Section>

    <Section id="payments" number="05" title="Payments & Subscriptions">
      <p>
        All prices are denominated in Indian Rupees (INR) unless otherwise specified. Payments are processed
        through third-party payment gateways. By completing a purchase, you authorize the Company to charge
        the applicable fee.
      </p>
      <BulletList items={[
        'One-time course purchases: Immediate access upon payment confirmation',
        'Subscriptions: Billed on a recurring basis (monthly or annual) until cancelled',
        'Subscription auto-renewal: Subscriptions renew automatically unless cancelled at least 24 hours before the renewal date',
        'The Company reserves the right to modify pricing at any time; changes will be communicated via email or platform notification',
      ]} />
    </Section>

    <Section id="prohibited" number="06" title="Prohibited Conduct">
      <p>You agree not to:</p>
      <BulletList items={[
        'Reproduce, copy, redistribute, or resell any course content',
        'Use the Platform for any unlawful, fraudulent, or harmful purpose',
        'Use automated bots, scrapers, or other tools to extract content from the Platform',
        'Impersonate the Company, its educators, or any other user',
        'Harass, threaten, or abuse other users or staff',
        'Attempt to hack, reverse-engineer, or disrupt the Platform\'s infrastructure',
        'Share login credentials with others or allow concurrent sessions',
      ]} />
    </Section>

    <Section id="no-advice" number="07" title="No Investment or Financial Advice">
      <p>
        All content provided on the Platform is strictly for <strong className="text-deep-slate">EDUCATIONAL
        PURPOSES ONLY</strong>. Nothing on the Platform constitutes financial advice, investment advice, trading
        recommendations, or a solicitation to buy or sell any financial instrument.
      </p>
      <p>
        Trading in financial markets involves substantial risk of loss. Past performance is not indicative of
        future results. The Company is not a SEBI-registered investment advisor. Users should consult a qualified
        financial advisor before making any investment decisions. The Company expressly disclaims any liability
        arising from trading decisions made based on course content.
      </p>
    </Section>

    <Section id="liability" number="08" title="Limitation of Liability">
      <p>
        To the maximum extent permitted by applicable law, Trading With Sidhant LLP shall not be liable for any
        direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or
        inability to use the Platform, including but not limited to financial losses, loss of data, or loss of
        business opportunity.
      </p>
      <p>
        The Company's total liability in any event shall not exceed the amount paid by the User for the specific
        service giving rise to the claim.
      </p>
    </Section>

    <Section id="termination" number="09" title="Termination">
      <p>
        The Company reserves the right to suspend or permanently terminate your access to the Platform at its
        sole discretion, with or without notice, if you violate these Terms, engage in fraudulent activity, or
        for any other reason deemed appropriate. Upon termination, your license to access content is revoked and
        refunds may not be applicable as per the Refund Policy.
      </p>
    </Section>

    <Section id="governing" number="10" title="Governing Law & Dispute Resolution">
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising
        out of or in connection with these Terms shall be first attempted to be resolved through amicable
        negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of
        the courts in <strong className="text-deep-slate">Hyderabad, Telangana, India</strong>.
      </p>
    </Section>

    <Section id="amendments" number="11" title="Amendments">
      <p>
        The Company reserves the right to update or modify these Terms at any time. Material changes will be
        communicated via email or prominent notice on the Platform. Continued use of the Platform after any such
        changes constitutes your acceptance of the updated Terms.
      </p>
    </Section>

    <Section id="contact" number="12" title="Contact">
      <p>For queries related to these Terms, please contact us:</p>
      <ContactCard>
        <p className="font-semibold text-deep-slate">Trading With Sidhant LLP</p>
        <p>Email: <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">support@tradingwithsidhant.com</a></p>
        <p className="text-deep-slate/50">tradingwithsidhant.com | twsgurukul.com</p>
      </ContactCard>
    </Section>
  </LegalPageLayout>
);

export default TermsPage;
