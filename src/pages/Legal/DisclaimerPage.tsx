import React from 'react';
import LegalPageLayout, { Section, BulletList, ContactCard, WarningBlock } from './LegalPageLayout';

const sections = [
  { id: 'general', label: '1. General Disclaimer' },
  { id: 'not-sebi', label: '2. Not SEBI Registered' },
  { id: 'risk', label: '3. Risk Warning' },
  { id: 'no-guarantee', label: '4. No Guarantee of Results' },
  { id: 'accuracy', label: '5. Accuracy of Information' },
  { id: 'third-party', label: '6. Third-Party Links' },
  { id: 'scam', label: '7. Scam Warning' },
  { id: 'liability', label: '8. Limitation of Liability' },
  { id: 'governing', label: '9. Governing Law' },
  { id: 'updates', label: '10. Updates' },
  { id: 'contact', label: '11. Contact' },
];

const DisclaimerPage: React.FC = () => (
  <LegalPageLayout
    title="Disclaimer"
    effectiveDate="February 24, 2026"
    applies="tradingwithsidhant.com | twsgurukul.com"
    sections={sections}
  >
    <Section id="general" number="01" title="General Disclaimer">
      <p>
        The information, courses, videos, materials, and all other content available on tradingwithsidhant.com
        and twsgurukul.com ("the Platform"), operated by Trading With Sidhant LLP, are provided{' '}
        <strong className="text-deep-slate">STRICTLY FOR EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY</strong>.
      </p>
      <p>
        Nothing on this Platform should be construed as financial advice, investment advice, trading advice, or
        a recommendation to buy, sell, or hold any financial instrument, security, or cryptocurrency.
      </p>
    </Section>

    <Section id="not-sebi" number="02" title="Not a Financial Advisor or SEBI Registered Entity">
      <p>
        Trading With Sidhant LLP and its founders, instructors, employees, and affiliates are{' '}
        <strong className="text-deep-slate">NOT registered</strong> with the Securities and Exchange Board of
        India (SEBI) as investment advisors, portfolio managers, or research analysts.
      </p>
      <p>
        We do not provide personalized financial advice or manage investments on behalf of users. Our content
        is educational in nature and designed to help users understand financial markets. You should always
        consult a SEBI-registered investment advisor or qualified financial professional before making any
        investment decisions.
      </p>
    </Section>

    <Section id="risk" number="03" title="Risk Warning — Trading in Financial Markets">
      <WarningBlock>
        <p className="font-semibold text-deep-slate mb-2">
          IMPORTANT: Trading and investing involves a SUBSTANTIAL RISK OF LOSS.
        </p>
        <p>
          Financial markets are volatile and unpredictable. You may lose some or all of your invested capital.
        </p>
      </WarningBlock>
      <p className="mt-4">The following risks apply:</p>
      <BulletList items={[
        'Past performance of any trading strategy, course example, or educator portfolio is NOT indicative of future results',
        'Live trading results shown on the Platform may not be representative of typical student outcomes',
        'Leverage and derivatives trading can amplify both gains and losses significantly',
        'Cryptocurrency markets are highly volatile and largely unregulated',
        'You should only trade with capital you can afford to lose entirely',
      ]} />
    </Section>

    <Section id="no-guarantee" number="04" title="No Guarantee of Results">
      <p>
        The Company makes no representations, warranties, or guarantees — express or implied — regarding the
        accuracy, completeness, or reliability of any course content, trading strategy, or educational material.
      </p>
      <p>
        Individual results will vary significantly based on personal effort, market conditions, capital
        available, risk tolerance, and other factors beyond our control. Testimonials and success stories
        featured on the Platform are individual experiences and are <strong className="text-deep-slate">not
        guarantees of similar outcomes</strong>.
      </p>
    </Section>

    <Section id="accuracy" number="05" title="Accuracy of Information">
      <p>
        While we strive to ensure that all content on the Platform is accurate and up to date, financial
        markets and regulations change frequently. The Company does not warrant that any information on the
        Platform is current, accurate, complete, or free of errors. Market data, charts, and examples used
        in courses are for illustrative purposes only and may not reflect real-time market conditions.
      </p>
    </Section>

    <Section id="third-party" number="06" title="Third-Party Links & References">
      <p>
        The Platform may contain links to third-party websites, tools, brokers, or services for educational
        reference only. Trading With Sidhant LLP does not endorse, control, or assume responsibility for the
        content, policies, or practices of any third-party website. Users access third-party resources at
        their own risk. The inclusion of any third-party link does not imply affiliation, partnership, or
        endorsement by the Company.
      </p>
    </Section>

    <Section id="scam" number="07" title="Scam Warning">
      <WarningBlock>
        <p className="font-semibold text-deep-slate mb-1">Protect yourself from impersonation fraud.</p>
        <p>
          Trading With Sidhant LLP does <strong>NOT</strong> offer account management services, guaranteed
          return schemes, signals services, or investment pools of any kind. We do <strong>NOT</strong> conduct
          personal calls promising returns or solicit funds for trading on your behalf.
        </p>
      </WarningBlock>
      <p className="mt-3">
        If you are contacted by any individual or entity claiming to represent Trading With Sidhant and
        offering such services, please treat it as a scam and report it immediately to{' '}
        <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">
          support@tradingwithsidhant.com
        </a>.
        The Company is not liable for any losses incurred through impersonation scams or fraud.
      </p>
    </Section>

    <Section id="liability" number="08" title="Limitation of Liability">
      <p>
        To the fullest extent permitted by applicable Indian law, Trading With Sidhant LLP, its officers,
        directors, employees, and affiliates shall not be liable for any direct, indirect, incidental,
        consequential, or punitive damages arising from your use of the Platform, reliance on any course
        content, or any trading or investment decisions made based on information obtained from the Platform.
      </p>
    </Section>

    <Section id="governing" number="09" title="Governing Law">
      <p>
        This Disclaimer is governed by the laws of India. Any disputes arising in connection with this
        Disclaimer shall be subject to the exclusive jurisdiction of the courts in{' '}
        <strong className="text-deep-slate">Hyderabad, Telangana, India</strong>.
      </p>
    </Section>

    <Section id="updates" number="10" title="Updates to This Disclaimer">
      <p>
        This Disclaimer may be updated periodically to reflect changes in our Services or applicable law.
        Material updates will be communicated via the Platform. Continued use of the Platform constitutes
        acceptance of the updated Disclaimer.
      </p>
    </Section>

    <Section id="contact" number="11" title="Contact">
      <ContactCard>
        <p className="font-semibold text-deep-slate">Trading With Sidhant LLP</p>
        <p>Email: <a href="mailto:support@tradingwithsidhant.com" className="text-burnt-amber hover:underline">support@tradingwithsidhant.com</a></p>
        <p className="text-deep-slate/50">tradingwithsidhant.com | twsgurukul.com</p>
      </ContactCard>
    </Section>
  </LegalPageLayout>
);

export default DisclaimerPage;
