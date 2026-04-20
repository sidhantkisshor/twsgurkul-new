import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#232b2f] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* ASCI-mandated VDA disclosure */}
          <div className="text-center mb-5">
            <p className="text-sm text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.
            </p>
          </div>

          {/* SEBI non-registration + testimonial disclaimer */}
          <div className="text-center mb-8">
            <p className="text-xs text-white/75 max-w-3xl mx-auto leading-relaxed">
              Trading With Sidhant LLP is <strong className="text-white/90">not a SEBI-registered Investment Adviser or Research Analyst</strong>. All content is educational; we do not provide buy/sell signals, recommendations, or personalised investment advice. Past performance is not indicative of future results. Testimonials reflect self-reported outcomes from individual students and are not typical. Cryptocurrency trading carries substantial risk of loss, including total capital loss.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 text-sm mb-6">
            <Link to="/terms" className="text-white/90 hover:text-[#C87533] transition-colors py-3 px-2">Terms</Link>
            <Link to="/privacy" className="text-white/90 hover:text-[#C87533] transition-colors py-3 px-2">Privacy Policy</Link>
            <Link to="/refunds" className="text-white/90 hover:text-[#C87533] transition-colors py-3 px-2">Refund Policy</Link>
            <Link to="/disclaimer" className="text-white/90 hover:text-[#C87533] transition-colors py-3 px-2">Disclaimers</Link>
            <Link to="/cookies" className="text-white/90 hover:text-[#C87533] transition-colors py-3 px-2">Cookie Policy</Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-white/80">
              &copy; {new Date().getFullYear()} Trading With Sidhant LLP. All rights reserved.
            </p>
            <p className="text-xs text-white/75 mt-1">
              GSTIN: 36AAVFT2975Q1ZW · All prices exclusive of 18% GST
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
