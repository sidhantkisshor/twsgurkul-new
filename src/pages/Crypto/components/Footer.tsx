import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#232b2f] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-white/80 max-w-3xl mx-auto leading-relaxed">
              Cryptocurrency trading involves substantial risk. Past performance does not guarantee future results. Educational content only.
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
            <p className="text-xs text-white/55 mt-1">
              GSTIN: 36AAVFT2975Q1ZW · All prices exclusive of 18% GST
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
