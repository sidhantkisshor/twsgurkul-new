import React from 'react';
import LegalPageLayout, { Section, BulletList, ContactCard } from './LegalPageLayout';

const sections = [
  { id: 'what', label: '1. What Are Cookies' },
  { id: 'how', label: '2. How We Use Cookies' },
  { id: 'types', label: '3. Types of Cookies' },
  { id: 'managing', label: '4. Managing Cookies' },
  { id: 'third-party', label: '5. Third-Party Cookies' },
  { id: 'contact', label: '6. Contact' },
];

const CookiePage: React.FC = () => (
  <LegalPageLayout
    title="Cookie Policy"
    effectiveDate="February 24, 2026"
    applies="tradingwithsidhant.com | twsgurukul.com"
    sections={sections}
  >
    <Section id="what" number="01" title="What Are Cookies">
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the website
        remember your preferences, keep you logged in across sessions, and improve your overall browsing
        experience. Cookies are widely used by websites to make them work more efficiently and to provide
        information to site owners.
      </p>
    </Section>

    <Section id="how" number="02" title="How We Use Cookies">
      <p>
        We use cookies for several purposes, including essential site functionality (quiz progress, session
        management), analytics (understanding how visitors interact with our content), and marketing
        (measuring the effectiveness of our campaigns and retargeting).
      </p>
    </Section>

    <Section id="types" number="03" title="Types of Cookies We Use">
      <BulletList items={[
        <><strong className="text-deep-slate">Essential cookies:</strong> Required for the website to function properly, such as quiz progress, session authentication, and security tokens.</>,
        <><strong className="text-deep-slate">Analytics cookies:</strong> Help us understand how visitors interact with our website — e.g., which pages are most visited, how long users stay. We use Google Analytics for this purpose.</>,
        <><strong className="text-deep-slate">Marketing cookies:</strong> Used to track the effectiveness of our advertising campaigns, deliver relevant ads, and measure conversions from platforms such as Meta (Facebook/Instagram) and Google Ads.</>,
        <><strong className="text-deep-slate">Preference cookies:</strong> Remember settings you have previously chosen (e.g., language preferences, dismissed banners).</>,
      ]} />
    </Section>

    <Section id="managing" number="04" title="Managing Cookies">
      <p>
        You can control and manage cookies through your browser settings. Most browsers allow you to:
      </p>
      <BulletList items={[
        'View the cookies stored on your device',
        'Delete individual cookies or clear all cookies',
        'Block cookies from specific websites',
        'Block all third-party cookies',
        'Set your browser to notify you when a cookie is placed',
      ]} />
      <p className="mt-3">
        Please note that disabling certain cookies — particularly essential ones — may affect the functionality
        of our website, including the ability to access paid course content or complete the quiz.
      </p>
    </Section>

    <Section id="third-party" number="05" title="Third-Party Cookies">
      <p>
        Some cookies on our Platform are set by third-party services, including:
      </p>
      <BulletList items={[
        'Google Analytics — for site usage analysis',
        'Google Tag Manager — for managing tracking scripts',
        'Meta Pixel — for ad conversion tracking',
        'Payment processors (e.g., Razorpay) — for secure transaction processing',
      ]} />
      <p className="mt-3">
        We do not control these third-party cookies. Please review the privacy policies of these service
        providers for more information on how they use data collected through cookies.
      </p>
    </Section>

    <Section id="contact" number="06" title="Contact">
      <p>For questions about our cookie practices, please contact us:</p>
      <ContactCard>
        <p className="font-semibold text-deep-slate">Trading With Sidhant LLP</p>
        <p>Email: <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">support@tradingwithsidhant.com</a></p>
        <p className="text-deep-slate/50">tradingwithsidhant.com | twsgurukul.com</p>
      </ContactCard>
    </Section>
  </LegalPageLayout>
);

export default CookiePage;
