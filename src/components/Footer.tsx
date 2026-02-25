import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Send, ArrowRight, MessageCircle } from 'lucide-react';
import { sanitizeInput } from '../utils/security';
import { sendAiSensyCampaign } from '../utils/aisensy';
import { AISENSY_CAMPAIGNS } from '../constants';

// Retry a fetch up to `retries` times with exponential backoff.
// Returns true on success, false after all retries exhausted.
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 2,
  baseDelayMs = 500
): Promise<boolean> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return true;
    } catch {
      // network error, retry
    }
    if (attempt < retries) {
      await new Promise(r => setTimeout(r, baseDelayMs * Math.pow(2, attempt)));
    }
  }
  return false;
}

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  const programs = [
    { name: 'Crypto Mastery', href: '/crypto' },
    { name: 'Footprint Trading', href: '/footprint' },
    { name: 'Elite Mentorship', href: '/mentorship' },
  ];

  const resources = [
    { name: 'Blog & Resources', href: '/blog', internal: true },
    { name: 'YouTube Channel', href: 'https://youtube.com/@tradingwithsidhant' },
    { name: 'Telegram Community', href: 'https://t.me/tradingwsidhant' },
    { name: 'Trading With Sidhant', href: 'https://tradingwithsidhant.com' },
  ];

  const socials = [
    { icon: Instagram, href: 'https://instagram.com/twsgurukul', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@tradingwithsidhant', label: 'YouTube' },
    { icon: Send, href: 'https://t.me/tradingwsidhant', label: 'Telegram' },
  ];

  const legal = [
    { name: 'Disclaimers', href: '/disclaimer' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Refunds', href: '/refunds' },
    { name: 'Cookies', href: '/cookies' },
  ];

  return (
    <footer className="relative bg-deep-slate overflow-hidden">
      {/* Subtle gradient atmosphere */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1e2a2f] via-deep-slate to-[#1a1f22] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-burnt-amber/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* ─── Band 1: CTA Band ─── */}
        <div className="border-b border-soft-sand/[0.06]">
          <div className="max-w-6xl mx-auto px-6 py-14 sm:py-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-burnt-amber/50 mb-4 font-sans font-medium">
              Start your journey
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3">
              <span className="font-sans font-bold">Still </span>
              <span className="font-serif italic font-normal text-brushed-gold">thinking?</span>
            </h3>
            <p className="text-soft-sand/60 text-sm sm:text-base font-sans max-w-md mx-auto mb-8 leading-relaxed">
              10,847+ traders took the quiz and found their path. Takes 2 minutes. No email needed.
            </p>
            <button
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#quiz';
                }
              }}
              className="group inline-flex items-center gap-2.5 bg-burnt-amber text-white rounded-full px-8 py-3.5 text-sm font-bold font-sans transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,117,51,0.25)] hover:scale-[1.02]"
            >
              Find Your Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* ─── Band 1.5: WhatsApp Capture ─── */}
        <div className="border-b border-soft-sand/[0.06]">
          <div className="max-w-6xl mx-auto px-6 py-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-burnt-amber/50" />
              <p className="text-xs tracking-[0.2em] uppercase text-burnt-amber/50 font-sans font-medium">
                Free weekly insights
              </p>
            </div>
            <p className="text-sm text-soft-sand/70 font-sans mb-4 max-w-md mx-auto">
              Get Sidhant&apos;s top trade setups + market analysis every Monday on WhatsApp. No spam.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const trimmedName = sanitizeInput(firstName);
                const trimmedPhone = whatsapp.trim().replace(/\s/g, '');
                if (!trimmedName || !/^\d{10}$/.test(trimmedPhone)) return;
                // Fire analytics event
                if (window.dataLayer) {
                  window.dataLayer.push({ event: 'newsletter_signup', method: 'whatsapp' } as Record<string, unknown>);
                }
                const NEWSLETTER_WEBHOOK = import.meta.env.VITE_NEWSLETTER_WEBHOOK_URL || '';
                if (NEWSLETTER_WEBHOOK) {
                  fetchWithRetry(NEWSLETTER_WEBHOOK, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName: trimmedName, whatsapp: trimmedPhone, source: 'footer', timestamp: new Date().toISOString() }),
                  }).then(ok => {
                    setSubscribeStatus(ok ? 'success' : 'error');
                  });
                } else {
                  setSubscribeStatus('success');
                }
                // Trigger AiSensy welcome message (fire-and-forget)
                sendAiSensyCampaign({
                  campaignName: AISENSY_CAMPAIGNS.newsletter,
                  destination: `+91${trimmedPhone}`,
                  userName: trimmedName,
                  source: 'footer',
                  templateParams: [trimmedName],
                  tags: ['newsletter'],
                });
                setFirstName('');
                setWhatsapp('');
              }}
              className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto"
            >
              <label htmlFor="footer-name" className="sr-only">First name</label>
              <input
                id="footer-name"
                type="text"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value); setSubscribeStatus('idle'); }}
                placeholder="First name"
                aria-required="true"
                className="w-full sm:w-auto sm:flex-1 bg-white/[0.05] border border-soft-sand/[0.1] rounded-full px-5 py-3 text-sm text-white font-sans placeholder:text-soft-sand/50 focus:outline-none focus:border-burnt-amber/50 focus:ring-2 focus:ring-burnt-amber/60 focus:ring-offset-1 focus:ring-offset-deep-slate transition-all"
              />
              <label htmlFor="footer-whatsapp" className="sr-only">WhatsApp number</label>
              <input
                id="footer-whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => { setWhatsapp(e.target.value); setSubscribeStatus('idle'); }}
                placeholder="WhatsApp number"
                aria-required="true"
                className="w-full sm:w-auto sm:flex-1 bg-white/[0.05] border border-soft-sand/[0.1] rounded-full px-5 py-3 text-sm text-white font-sans placeholder:text-soft-sand/50 focus:outline-none focus:border-burnt-amber/50 focus:ring-2 focus:ring-burnt-amber/60 focus:ring-offset-1 focus:ring-offset-deep-slate transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-burnt-amber text-white rounded-full px-5 py-3 text-sm font-bold font-sans hover:bg-[#d4843f] transition-colors shrink-0"
              >
                {subscribeStatus === 'success' ? 'Joined!' : 'Join'}
              </button>
            </form>
            <div role="status" aria-live="polite">
              {subscribeStatus === 'success' && (
                <p className="text-xs text-wealth-teal font-sans mt-2">Thanks! We&apos;ll message you on WhatsApp.</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-xs text-red-400 font-sans mt-2">Something went wrong. Try again later.</p>
              )}
            </div>
          </div>
        </div>

        {/* ─── Band 2: Info Grid ─── */}
        <div className="border-b border-soft-sand/[0.06]">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <img
                      src="/logo-icon.png"
                      alt=""
                      className="h-7 w-7 object-contain"
                    />
                    <img
                      src="/logo-wordmark-dark.png"
                      alt="TWS GurukulX"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[10px] text-soft-sand/50 font-sans">by Sidhant</span>
                </div>
                <p className="text-xs text-soft-sand/55 leading-relaxed font-sans mb-5 max-w-[200px]">
                  India&apos;s most trusted trading education. 89% student success rate.
                </p>
                {/* Social */}
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 flex items-center justify-center rounded-full border border-soft-sand/[0.08] text-soft-sand/50 hover:text-burnt-amber hover:border-burnt-amber/20 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-soft-sand/60 font-sans font-semibold mb-4">
                  Programs
                </h4>
                <ul className="space-y-1">
                  {programs.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        to={href}
                        className="text-sm text-soft-sand/60 hover:text-burnt-amber font-sans transition-colors duration-200 inline-block py-1.5"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-soft-sand/60 font-sans font-semibold mb-4">
                  Resources
                </h4>
                <ul className="space-y-1">
                  {resources.map(({ name, href, internal }) => (
                    <li key={name}>
                      {internal ? (
                        <Link
                          to={href}
                          className="text-sm text-soft-sand/60 hover:text-burnt-amber font-sans transition-colors duration-200 inline-block py-1.5"
                        >
                          {name}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-soft-sand/60 hover:text-burnt-amber font-sans transition-colors duration-200 inline-block py-1.5"
                        >
                          {name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact / Trust */}
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-soft-sand/60 font-sans font-semibold mb-4">
                  Trust
                </h4>
                <ul className="space-y-2.5">
                  <li className="text-sm text-soft-sand/60 font-sans">
                    <span className="text-wealth-teal font-semibold">SEBI</span> guidelines followed
                  </li>
                  <li className="text-sm text-soft-sand/60 font-sans">
                    7-day refund policy (see <a href="/refunds" className="underline hover:text-burnt-amber transition-colors">refund policy</a>)
                  </li>
                  <li className="text-sm text-soft-sand/60 font-sans">
                    Students from <span className="text-soft-sand/60">Google</span>, <span className="text-soft-sand/60">TCS</span>, <span className="text-soft-sand/60">Amazon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Band 3: Legal Strip ─── */}
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs text-soft-sand/60 font-sans">
                &copy; {currentYear} Trading With Sidhant LLP. All rights reserved.
              </p>
              <p className="text-xs text-soft-sand/50 font-sans mt-0.5">
                GSTIN: 36AAVFT2975Q1ZW · All prices exclusive of 18% GST
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0">
              {legal.map(({ name, href }) => (
                <Link
                  key={name}
                  to={href}
                  className="text-xs text-soft-sand/60 hover:text-burnt-amber font-sans transition-colors duration-200 py-2 px-1"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
