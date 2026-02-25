import React from 'react';
import LegalPageLayout, { Section, SubSection, BulletList, ContactCard } from './LegalPageLayout';

const sections = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'collection', label: '2. Information We Collect' },
  { id: 'usage', label: '3. How We Use Your Data' },
  { id: 'cookies', label: '4. Cookies & Tracking' },
  { id: 'sharing', label: '5. Sharing & Disclosure' },
  { id: 'retention', label: '6. Data Retention' },
  { id: 'rights', label: '7. Your Rights' },
  { id: 'security', label: '8. Data Security' },
  { id: 'children', label: '9. Children\'s Privacy' },
  { id: 'changes', label: '10. Changes to This Policy' },
  { id: 'contact', label: '11. Contact & Grievance' },
];

const PrivacyPage: React.FC = () => (
  <LegalPageLayout
    title="Privacy Policy"
    effectiveDate="February 24, 2026"
    applies="tradingwithsidhant.com | twsgurukul.com"
    sections={sections}
  >
    <Section id="introduction" number="01" title="Introduction">
      <p>
        Trading With Sidhant LLP ("we", "us", "our") is committed to protecting your personal data. This Privacy
        Policy explains how we collect, use, store, and protect your personal information when you use
        tradingwithsidhant.com, twsgurukul.com, and our mobile applications (collectively, "the Platform").
      </p>
      <p>
        This Policy is compliant with the <strong className="text-deep-slate">Information Technology Act, 2000</strong>,
        the IT (Reasonable Security Practices) Rules, 2011, and is aligned with best practices under the
        Digital Personal Data Protection Act, 2023.
      </p>
    </Section>

    <Section id="collection" number="02" title="Information We Collect">
      <SubSection title="2.1 Information You Provide">
        <BulletList items={[
          'Full name, email address, phone number during registration',
          'Billing and payment information (processed securely by payment gateways; we do not store card details)',
          'Profile information and course preferences',
          'Communications, feedback, and support requests submitted to us',
        ]} />
      </SubSection>
      <SubSection title="2.2 Automatically Collected Information">
        <BulletList items={[
          'IP address, browser type, operating system, and device information',
          'Pages visited, time spent, and clickstream data',
          'Course progress, video watch history, and assessment results',
          'Cookies and similar tracking technologies',
        ]} />
      </SubSection>
      <SubSection title="2.3 Third-Party Sources">
        <p>
          We may receive information about you from third-party social media platforms (e.g., if you log in via
          Google or Facebook) or analytics providers, subject to their respective privacy policies.
        </p>
      </SubSection>
    </Section>

    <Section id="usage" number="03" title="How We Use Your Information">
      <BulletList items={[
        'To create and manage your user account',
        'To process payments and issue receipts',
        'To deliver course content and track your learning progress',
        'To send transactional emails, course updates, and platform notifications',
        'To send marketing communications (you may opt out at any time)',
        'To improve our platform, courses, and user experience',
        'To detect, prevent, and respond to fraud, abuse, or security incidents',
        'To comply with applicable legal obligations',
      ]} />
    </Section>

    <Section id="cookies" number="04" title="Cookies & Tracking Technologies">
      <p>
        We use cookies and similar technologies to enhance your experience on the Platform. Cookies help us
        remember your preferences, keep you logged in, and analyze how our Platform is used.
      </p>
      <p>
        You may disable cookies through your browser settings; however, some features of the Platform may not
        function correctly without them. We use analytics tools such as Google Analytics to understand
        Platform usage patterns.
      </p>
    </Section>

    <Section id="sharing" number="05" title="Sharing & Disclosure of Information">
      <p>We do not sell your personal data. We may share your information with:</p>
      <BulletList items={[
        'Service providers (payment processors, cloud hosting, email platforms, analytics tools) who process data on our behalf under confidentiality obligations',
        'Legal authorities if required by law, court order, or government directive',
        'Successor entities in the event of a merger, acquisition, or sale of business assets (users will be notified)',
      ]} />
      <p className="mt-3">We do not share your personal data with third-party advertisers.</p>
    </Section>

    <Section id="retention" number="06" title="Data Retention">
      <p>
        We retain your personal data for as long as your account is active, or as necessary to provide our
        Services, comply with legal obligations, resolve disputes, and enforce our agreements.
      </p>
      <p>
        Upon account deletion, we will delete or anonymize your data within <strong className="text-deep-slate">30
        days</strong>, except where retention is required by law.
      </p>
    </Section>

    <Section id="rights" number="07" title="Your Rights">
      <p>You have the right to:</p>
      <BulletList items={[
        'Access the personal data we hold about you',
        'Request correction of inaccurate or incomplete data',
        'Request deletion of your personal data (subject to legal retention requirements)',
        'Withdraw consent for marketing communications at any time',
        'Raise a grievance regarding data processing',
      ]} />
      <p className="mt-3">
        To exercise your rights, please contact our Grievance Officer at{' '}
        <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">
          support@tradingwithsidhant.com
        </a>.
      </p>
    </Section>

    <Section id="security" number="08" title="Data Security">
      <p>
        We implement industry-standard technical and organisational security measures to protect your personal
        data from unauthorized access, disclosure, alteration, or destruction. These include SSL/TLS encryption,
        access controls, and regular security audits.
      </p>
      <p>
        However, no transmission over the internet is entirely secure, and we cannot guarantee absolute security.
      </p>
    </Section>

    <Section id="children" number="09" title="Children's Privacy">
      <p>
        The Platform is not directed at individuals under the age of 18. We do not knowingly collect personal
        data from minors. If we become aware that a minor has provided personal data, we will promptly delete it.
        Parents or guardians who become aware of such data collection should contact us immediately.
      </p>
    </Section>

    <Section id="changes" number="10" title="Changes to This Policy">
      <p>
        We may update this Privacy Policy from time to time. Material changes will be notified via email or
        prominent notice on the Platform. Your continued use of the Platform after such notification constitutes
        acceptance of the updated Policy.
      </p>
    </Section>

    <Section id="contact" number="11" title="Contact & Grievance Officer">
      <p>For any privacy-related queries or concerns:</p>
      <ContactCard>
        <p className="font-semibold text-deep-slate">Grievance Officer: Trading With Sidhant LLP</p>
        <p>Email: <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">support@tradingwithsidhant.com</a></p>
        <p className="text-deep-slate/50">Response time: Within 30 days of receipt of complaint</p>
      </ContactCard>
    </Section>
  </LegalPageLayout>
);

export default PrivacyPage;
