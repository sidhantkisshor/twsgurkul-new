import React from 'react';
import { CDN_BASE } from '../../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-deep-slate">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={`${CDN_BASE}/assets/images/brand/icons/tws-gurukulx-icon-512.webp`}
              alt="TWS GurukulX"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto opacity-80"
            />
          </div>

          {/* ASCI-mandated VDA disclosure */}
          <div className="text-center mb-5">
            <p className="text-sm text-soft-sand max-w-3xl mx-auto leading-relaxed font-medium">
              Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.
            </p>
          </div>

          {/* SEBI non-registration + testimonial disclaimer */}
          <div className="text-center mb-8">
            <p className="text-xs text-soft-sand/75 max-w-3xl mx-auto leading-relaxed">
              Trading With Sidhant LLP is <strong className="text-soft-sand/90">not a SEBI-registered Investment Adviser or Research Analyst</strong>. All content is educational; we do not provide buy/sell signals, recommendations, or personalised investment advice. Past performance is not indicative of future results. Testimonials reflect self-reported outcomes from individual students and are not typical.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/terms" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">Terms</a>
            <a href="/privacy" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">Privacy Policy</a>
            <a href="/refunds" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">Refund Policy</a>
            <a href="/disclaimer" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">Disclaimers</a>
            <a href="/cookies" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">Cookie Policy</a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-xs text-soft-sand/70">
              &copy; {new Date().getFullYear()} Trading With Sidhant LLP. All rights reserved.
            </p>
            <p className="text-xs text-soft-sand/50 mt-1">
              GSTIN: 36AAVFT2975Q1ZW · All prices exclusive of 18% GST
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
