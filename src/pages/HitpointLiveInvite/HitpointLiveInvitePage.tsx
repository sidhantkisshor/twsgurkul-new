import React from 'react';
import { ArrowRight, Check, X, MessageCircle } from 'lucide-react';
import Seo from '../../components/Seo';
import { WHATSAPP_URL } from '../../constants';

// External referral / checkout destinations
const REFERRAL_URL = 'https://tws.bio/cs';
const DASHBOARD_URL = 'https://coinswitch.co/pro/user-dashboard';
const MONTHLY_CHECKOUT_URL = '#';

const BENEFITS = [
  'Market structure analysis',
  'Clear setup scenarios with invalidation',
  'Risk framing & scenario planning',
  'Leverage & liquidation mapping',
  'Real-time discussion with traders who size',
  'Low-frequency updates. Only what matters.',
];

const FOR_LIST = [
  'Bitcoin futures traders who value structure over hype',
  'Traders who care about risk before reward',
  'Active perpetuals traders',
];

const NOT_FOR_LIST = [
  'Get-rich-quick chasers',
  'Over-leveraged gamblers',
  'Spot HODLers chasing narratives',
];

const STEPS: { title: string; body?: React.ReactNode }[] = [
  {
    title: 'Click my CoinSwitch referral link',
    body: (
      <>
        Sign up through{' '}
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-burnt-amber underline decoration-burnt-amber/40 underline-offset-4 hover:decoration-burnt-amber"
        >
          tws.bio/cs
        </a>{' '}
        so your account gets tagged to the Club.
      </>
    ),
  },
  { title: 'Install the CoinSwitch app' },
  { title: 'Complete KYC & bank verification' },
  { title: 'Deposit a minimum of ₹5,000' },
  {
    title: 'Open your CoinSwitch dashboard',
    body: (
      <>
        Head to{' '}
        <a
          href={DASHBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-burnt-amber underline decoration-burnt-amber/40 underline-offset-4 hover:decoration-burnt-amber break-all"
        >
          coinswitch.co/pro/user-dashboard
        </a>
        .
      </>
    ),
  },
  {
    title: 'Join the Club via Telegram',
    body: 'Once the previous steps are done, the Telegram invite appears on your dashboard. Tap to join.',
  },
];

const RESULTS = [
  { roe: '+2,645%', label: 'ETH PUT · Crypto futures' },
  { roe: '+3,122%', label: 'Gold Long · 200X' },
  { roe: '+2,010%', label: 'Gold Long · 200X' },
];

export default function HitpointLiveInvitePage() {
  return (
    <div className="bg-deep-slate text-white overflow-x-clip">
      <Seo
        title="Hitpoint Live Club | TWS GurukulX"
        description="A private, referral-verified intelligence community for serious Bitcoin futures traders. Free 1-year access via CoinSwitch."
        canonicalUrl="https://www.twsgurukulx.com/hitpoint-live-invite"
        noIndex
      />

      {/* HERO */}
      <section className="relative pt-28 md:pt-40 pb-20 md:pb-28 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,117,51,0.12),transparent_60%)] pointer-events-none" />
        <div className="relative container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            <span className="font-sans font-bold text-white">Hitpoint </span>
            <span className="font-serif italic font-normal text-burnt-amber">Live Club</span>
          </h1>

          <p className="text-lg md:text-xl text-soft-sand/70 font-sans leading-relaxed max-w-2xl mx-auto mb-10">
            A private community for serious Bitcoin futures traders. Not a signal dump.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#access"
              className="group inline-flex items-center gap-2.5 bg-burnt-amber hover:bg-[#d4843f] text-white rounded-full px-8 py-4 text-base font-semibold font-sans transition-all duration-300 hover:scale-[1.02]"
            >
              Get free 1-year access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#access"
              className="text-sm text-soft-sand/60 hover:text-white font-sans transition-colors"
            >
              or ₹1,999/month direct →
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 px-4 bg-navy-black/60 border-y border-soft-sand/[0.06]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight tracking-tight text-center mb-14 md:mb-16">
            What you get inside
          </h2>

          <ul className="max-w-2xl mx-auto space-y-3">
            {BENEFITS.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-start text-soft-sand/80 text-base md:text-lg font-sans leading-relaxed"
              >
                <Check className="w-5 h-5 text-burnt-amber flex-shrink-0 mt-1" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight tracking-tight text-center mb-12 md:mb-14">
            Who this is for
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* FOR */}
            <div className="bg-wealth-teal/[0.05] border border-wealth-teal/20 rounded-2xl p-7">
              <h3 className="font-sans font-semibold text-wealth-teal text-sm tracking-widest uppercase mb-5">
                The Club is for
              </h3>
              <ul className="space-y-3.5">
                {FOR_LIST.map((item, i) => (
                  <li key={i} className="flex gap-3 text-soft-sand/80 text-[15px] font-sans leading-relaxed">
                    <Check className="w-4 h-4 text-wealth-teal flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT FOR */}
            <div className="bg-red-500/[0.04] border border-red-500/15 rounded-2xl p-7">
              <h3 className="font-sans font-semibold text-red-400 text-sm tracking-widest uppercase mb-5">
                This is not for
              </h3>
              <ul className="space-y-3.5">
                {NOT_FOR_LIST.map((item, i) => (
                  <li key={i} className="flex gap-3 text-soft-sand/70 text-[15px] font-sans leading-relaxed">
                    <X className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ACCESS & PRICING */}
      <section id="access" className="py-20 md:py-28 px-4 bg-navy-black/60 border-y border-soft-sand/[0.06] scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight tracking-tight text-center mb-12 md:mb-14">
            Two ways in
          </h2>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* FREE 1-YEAR */}
            <div className="relative bg-gradient-to-br from-burnt-amber/10 to-burnt-amber/[0.02] border border-burnt-amber/30 rounded-3xl p-8 md:p-10">
              <span className="absolute -top-3 left-8 bg-burnt-amber text-white text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                Recommended
              </span>
              <h3 className="font-sans font-semibold text-white text-xl mb-1">Free for 1 year</h3>
              <p className="text-soft-sand/60 text-sm font-sans mb-7 leading-relaxed">
                Sign up via my CoinSwitch referral link and deposit ₹5,000.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif italic text-5xl text-burnt-amber">₹0</span>
                <span className="text-soft-sand/50 text-sm font-sans">/ 12 months</span>
              </div>

              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-burnt-amber hover:bg-[#d4843f] text-white rounded-full px-6 py-3.5 text-sm font-semibold font-sans transition-all duration-300"
              >
                Start with CoinSwitch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* DIRECT */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 md:p-10">
              <h3 className="font-sans font-semibold text-white text-xl mb-1">Direct access</h3>
              <p className="text-soft-sand/60 text-sm font-sans mb-7 leading-relaxed">
                Immediate access. Cancel any time.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif italic text-5xl text-white">₹1,999</span>
                <span className="text-soft-sand/50 text-sm font-sans">/ month</span>
              </div>

              <a
                href={MONTHLY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white rounded-full px-6 py-3.5 text-sm font-semibold font-sans transition-colors"
              >
                Subscribe monthly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO GET FREE ACCESS */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight tracking-tight text-center mb-12 md:mb-14">
            How free access works
          </h2>

          <ol className="space-y-3">
            {STEPS.map((step, i) => (
              <li key={i} className="flex gap-5 items-start bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <span className="flex-shrink-0 w-9 h-9 rounded-full border border-burnt-amber/40 text-burnt-amber font-serif italic text-lg flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="font-sans font-semibold text-white text-base md:text-lg leading-snug">
                    {step.title}
                  </h3>
                  {step.body && (
                    <p className="text-soft-sand/60 text-sm md:text-[15px] font-sans leading-relaxed mt-1">
                      {step.body}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight tracking-tight text-center mb-12 md:mb-14">
            Member results
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {RESULTS.map((r, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-wealth-teal/[0.08] to-wealth-teal/[0.02] border border-wealth-teal/20 rounded-2xl p-7 flex flex-col"
              >
                <span className="text-[11px] font-sans tracking-widest uppercase text-wealth-teal mb-3">
                  ROE
                </span>
                <span className="font-serif italic text-5xl md:text-6xl text-wealth-teal leading-none mb-auto">
                  {r.roe}
                </span>
                <p className="mt-6 text-soft-sand/65 text-sm font-sans">{r.label}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-xs text-soft-sand/40 font-sans italic">
            Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* HELP */}
      <section className="py-12 px-4 bg-navy-black/60 border-t border-soft-sand/[0.06]">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-soft-sand/70 text-sm md:text-base font-sans">
            Need help?{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-burnt-amber hover:text-[#d4843f] font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
          </p>
        </div>
      </section>

      {/* PAGE DISCLAIMER */}
      <section className="py-10 px-4 border-t border-soft-sand/[0.06]">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs text-soft-sand/40 font-sans leading-relaxed text-center">
            Hitpoint Live Club is for educational and informational purposes only. We provide
            Bitcoin futures market structure analysis and education. Not investment advice or
            guaranteed returns. Futures trading involves significant risk of loss. You are
            responsible for your own trading decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
