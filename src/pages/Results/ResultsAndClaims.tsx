import React from 'react';
import Seo from '../../components/Seo';

export default function ResultsAndClaims() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Seo
        title="Results & Claims | Student Success Stories | TWS GurukulX"
        description="View verified student results, trading statistics, and success claims. Transparent methodology and verification samples included."
        canonicalUrl="https://www.twsgurukul.com/results-and-claims"
      />
      <h1 className="text-3xl font-semibold mb-6">Results & Claims Policy</h1>

      <section id="summary" className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Summary (as of Aug 2025)</h2>
        <p>We update this page monthly. Metrics below reflect the latest compiled period.</p>
      </section>

      <section id="definitions" className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Definitions</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Win rate: profitable trades / total closed trades in the reporting window.</li>
          <li>Active student: submitted logs in the past 30 days.</li>
          <li>Withdrawals: fiat-equivalent realized amounts to bank/UPI, not unrealized PnL.</li>
        </ul>
      </section>

      <section id="methodology" className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Methodology</h2>
        <p>Sources: student trade logs, exchange exports, anonymized statements. Time window: Jan–Dec, 2024. Sample size: n=1,247. Exclusions: incomplete logs, non-verifiable claims.</p>
      </section>

      <section id="verification-samples" className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Verification Samples</h2>
        <p>We provide redacted screenshots and exports to demonstrate typical verification. Personal data is masked.</p>
      </section>

      <section id="limitations" className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Limitations</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Self-reporting may contain inaccuracies; we sample-verify but cannot audit all entries.</li>
          <li>Results vary with market conditions, risk management, and consistency.</li>
          <li>This is education, not investment advice.</li>
        </ul>
      </section>

      <section id="contact" className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>For verification requests or to submit results, email <a href="mailto:support@tradingwithsidhant.com">support@tradingwithsidhant.com</a>.</p>
      </section>
    </main>
  );
}


