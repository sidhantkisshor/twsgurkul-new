import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, AlertTriangle } from 'lucide-react';
import Seo from '../../components/Seo';
import { CDN_BASE, WHATSAPP_URL } from '../../constants';

// External referral / dashboard destinations
const REFERRAL_URL = 'https://tws.bio/cs';
const DASHBOARD_URL = 'https://coinswitch.co/pro/user-dashboard';

// Hitpoint-specific CDN asset prefix
const HITPOINT_IMG = `${CDN_BASE}/assets/images/hitpoint`;

type Step = {
  title: string;
  body: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

const STEPS: Step[] = [
  {
    title: 'Sign up via my CoinSwitch referral',
    body: (
      <>
        Sign up with{' '}
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-burnt-amber underline decoration-burnt-amber/40 underline-offset-4 hover:decoration-burnt-amber"
        >
          tws.bio/cs
        </a>
        . Without it, your account isn&rsquo;t tagged and the invite won&rsquo;t generate.
      </>
    ),
    ctaLabel: 'Open tws.bio/cs',
    ctaHref: REFERRAL_URL,
  },
  {
    title: 'Install the CoinSwitch app and finish KYC',
    body: 'Bank verification included. Takes about 5 to 10 minutes.',
  },
  {
    title: 'Deposit ₹5,000 (one-time minimum)',
    body: 'Anything less won\u2019t trigger the Club tag.',
  },
  {
    title: 'Open your dashboard and tap the Telegram invite',
    body: (
      <>
        Once steps 1 to 3 are done, the invite button appears on{' '}
        <a
          href={DASHBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-burnt-amber underline decoration-burnt-amber/40 underline-offset-4 hover:decoration-burnt-amber break-all"
        >
          coinswitch.co/pro/user-dashboard
        </a>
        . Tap it to join.
      </>
    ),
    ctaLabel: 'Open my dashboard',
    ctaHref: DASHBOARD_URL,
  },
];

const MEMBER_RESULTS = [
  {
    src: `${HITPOINT_IMG}/member-result-btcusdt-182pct.webp`,
    alt: 'Hitpoint Live Club member trade: BTCUSDT Long 35X, +181.76% ROE',
    headline: '+181.76%',
    label: 'BTCUSDT Long 35X',
  },
  {
    src: `${HITPOINT_IMG}/tws-broadcast-recap-50pct.webp`,
    alt: 'Official TWS broadcast recap showing +50.98% trade result',
    headline: '+50.98%',
    label: 'Official recap broadcast',
  },
  {
    src: `${HITPOINT_IMG}/member-result-btcusd-sleeping.webp`,
    alt: 'Member BTCUSD chart screenshot with reaction: "what a trade but was sleeping"',
    headline: 'BTCUSD',
    label: 'Member chart + reaction',
  },
];

export default function HitpointLiveInvitePage() {
  return (
    <div className="bg-deep-slate text-white overflow-x-clip">
      <Seo
        title="Hitpoint Live Club | TWS GurukulX"
        description="A private club for serious Bitcoin futures traders. Free for a year when you sign up with Sidhant's CoinSwitch link."
        canonicalUrl="https://www.twsgurukulx.com/hitpoint-live-invite"
        noIndex
      />

      {/* HEADER — minimal, single action */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-slate/85 backdrop-blur-md border-b border-soft-sand/[0.05]">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group shrink-0" aria-label="TWS GurukulX home">
            <img
              src={`${CDN_BASE}/assets/images/brand/wordmarks/tws-gurukulx-wordmark-dark-transparent.webp`}
              alt="TWS GurukulX"
              height={20}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-5 sm:h-6 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>
          <a
            href="#activate"
            className="group inline-flex items-center gap-2 bg-burnt-amber hover:bg-[#d4843f] text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold font-sans transition-all duration-300"
          >
            Activate
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-24 sm:pt-28 md:pt-36 pb-14 sm:pb-20 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,117,51,0.12),transparent_60%)] pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl grid md:grid-cols-[1.15fr_1fr] gap-8 sm:gap-10 md:gap-14 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="inline-block text-[10px] sm:text-[11px] font-sans tracking-widest uppercase text-burnt-amber/90 border border-burnt-amber/30 rounded-full px-2.5 sm:px-3 py-1 mb-5 sm:mb-6">
              Private · Referral verified
            </span>
            <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6">
              <span className="font-sans font-bold text-white">Hitpoint </span>
              <span className="font-serif italic font-normal text-burnt-amber">Live Club</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-soft-sand/70 font-sans leading-relaxed max-w-xl md:mx-0 mx-auto mb-7 sm:mb-10">
              A private club for serious Bitcoin futures traders. Free for a year when you sign up with my CoinSwitch link.
            </p>
            <a
              href="#activate"
              className="group inline-flex items-center gap-2.5 bg-burnt-amber hover:bg-[#d4843f] text-white rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-base font-semibold font-sans transition-all duration-300 hover:scale-[1.02]"
            >
              See how to activate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="relative order-1 md:order-2 max-w-[220px] sm:max-w-[280px] md:max-w-sm mx-auto md:mx-0 md:justify-self-end">
            <div className="absolute -inset-6 bg-burnt-amber/15 blur-3xl rounded-full pointer-events-none" aria-hidden />
            <img
              src={`${HITPOINT_IMG}/pnl-coinswitch-bitcoin-long-40pct.webp`}
              alt="CoinSwitch Pro P&L: SIDHANT's BTC/USDT Long 10x, +40.01% ROI, referral offer"
              width={720}
              height={1280}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="relative w-full h-auto rounded-3xl border border-soft-sand/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </section>

      {/* SAMPLE: what a Club post looks like */}
      <section className="py-14 sm:py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-[10px] sm:text-[11px] font-sans font-bold tracking-widest uppercase text-burnt-amber mb-3">
              Inside the Club
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-3 sm:mb-4">
              <span className="font-sans font-bold text-white">What a </span>
              <span className="font-serif italic font-normal text-burnt-amber">Hitpoint call </span>
              <span className="font-sans font-bold text-white">looks like</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-soft-sand/70 font-sans leading-relaxed max-w-xl mx-auto">
              Structure, levels, invalidation. Posted as the setup forms.
            </p>
          </div>

          <figure className="relative max-w-[340px] sm:max-w-md mx-auto">
            <div className="absolute -inset-4 bg-burnt-amber/10 blur-3xl rounded-full pointer-events-none" aria-hidden />
            <img
              src={`${HITPOINT_IMG}/hitpoint-live-club-posts.webp`}
              alt="Two Hitpoint Live Club Telegram posts with BTC structure levels marked on chart"
              width={1148}
              height={1562}
              loading="lazy"
              decoding="async"
              className="relative w-full h-auto rounded-2xl sm:rounded-3xl border border-soft-sand/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            />
          </figure>
        </div>
      </section>

      {/* ACTIVATION — the anchor section */}
      <section id="activate" className="relative py-16 sm:py-20 md:py-28 px-4 scroll-mt-24 bg-navy-black/60 border-y border-soft-sand/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,117,51,0.09),transparent_70%)] pointer-events-none" />
        <div className="relative container mx-auto max-w-3xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="inline-block text-[10px] sm:text-[11px] font-sans font-bold tracking-widest uppercase text-burnt-amber mb-3 sm:mb-4">
              4-step activation
            </span>
            <h2 className="text-[28px] sm:text-3xl md:text-5xl leading-[1.1] tracking-tight mb-3 sm:mb-4">
              <span className="font-sans font-bold text-white">How to get </span>
              <span className="font-serif italic font-normal text-burnt-amber">free 1-year access</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-soft-sand/70 font-sans leading-relaxed max-w-xl mx-auto">
              CoinSwitch tracks every step. Your Telegram invite appears once all four clear. I can&rsquo;t override this for anyone.
            </p>
          </div>

          {/* Attention callout */}
          <div className="flex gap-3 items-start bg-burnt-amber/[0.06] border border-burnt-amber/25 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-burnt-amber flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-soft-sand/85 text-[13.5px] sm:text-sm md:text-[15px] font-sans leading-relaxed">
              <span className="font-semibold text-white">Don&rsquo;t skip steps.</span>{' '}
              Each one unlocks the next. Miss one and the Club invite won&rsquo;t appear.
            </p>
          </div>

          <ol className="space-y-2.5 sm:space-y-3">
            {STEPS.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 sm:gap-4 md:gap-5 items-start bg-white/[0.03] border border-white/[0.07] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6"
              >
                <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-burnt-amber/10 border border-burnt-amber/40 text-burnt-amber font-serif italic text-lg sm:text-xl flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="min-w-0 pt-0.5 sm:pt-1 flex-1">
                  <h3 className="font-sans font-semibold text-white text-[15px] sm:text-base md:text-lg leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-soft-sand/65 text-[13.5px] sm:text-sm md:text-[15px] font-sans leading-relaxed mt-1 sm:mt-1.5">
                    {step.body}
                  </p>
                  {step.ctaHref && step.ctaLabel && (
                    <a
                      href={step.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 mt-3 sm:mt-4 bg-burnt-amber hover:bg-[#d4843f] text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] sm:text-sm font-semibold font-sans transition-all duration-300"
                    >
                      {step.ctaLabel}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-14 sm:py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <span className="inline-block text-[10px] sm:text-[11px] font-sans font-bold tracking-widest uppercase text-wealth-teal mb-3">
              Receipts
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white leading-tight tracking-tight">
              Member results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 items-start">
            {MEMBER_RESULTS.map((r, i) => (
              <figure
                key={i}
                className="bg-white/[0.02] border border-white/[0.07] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="bg-navy-black/60 flex items-center justify-center p-3 sm:p-4 min-h-[180px] sm:min-h-[240px] md:min-h-[280px]">
                  <img
                    src={r.src}
                    alt={r.alt}
                    loading="lazy"
                    decoding="async"
                    className="max-h-[260px] sm:max-h-[320px] md:max-h-[360px] w-auto max-w-full object-contain rounded-md sm:rounded-lg"
                  />
                </div>
                <figcaption className="p-4 sm:p-5 border-t border-white/[0.06] flex flex-col gap-1">
                  <span className="font-serif italic text-xl sm:text-2xl md:text-3xl text-wealth-teal leading-none">
                    {r.headline}
                  </span>
                  <span className="text-soft-sand/60 text-[13px] sm:text-sm font-sans mt-1">{r.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-center mt-8 sm:mt-10 text-[11px] sm:text-xs text-soft-sand/40 font-sans italic">
            Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* HELP */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-soft-sand/70 text-sm md:text-base font-sans">
            Stuck on a step?{' '}
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

      {/* FOOTER */}
      <footer className="border-t border-soft-sand/[0.06]">
        <div className="container mx-auto max-w-4xl px-4 py-10">
          <p className="text-xs text-soft-sand/45 font-sans leading-relaxed text-center mb-6">
            Hitpoint Live Club is for educational and informational purposes only. We provide
            Bitcoin futures market structure analysis and education. Not investment advice or
            guaranteed returns. Futures trading involves significant risk of loss. You are
            responsible for your own trading decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-soft-sand/[0.05]">
            <p className="text-xs text-soft-sand/50 font-sans">
              © {new Date().getFullYear()} Trading With Sidhant LLP
            </p>
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-sans">
              <Link to="/privacy" className="text-soft-sand/55 hover:text-soft-sand/90 transition-colors">Privacy</Link>
              <Link to="/terms" className="text-soft-sand/55 hover:text-soft-sand/90 transition-colors">Terms</Link>
              <Link to="/disclaimer" className="text-soft-sand/55 hover:text-soft-sand/90 transition-colors">Disclaimer</Link>
              <Link to="/refunds" className="text-soft-sand/55 hover:text-soft-sand/90 transition-colors">Refunds</Link>
              <Link to="/cookies" className="text-soft-sand/55 hover:text-soft-sand/90 transition-colors">Cookies</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
