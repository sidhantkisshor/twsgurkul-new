import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-deep-slate">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/tws-gurukulx-icon.png"
              alt="TWS GurukulX"
              className="h-10 w-auto opacity-80"
            />
          </div>

          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-soft-sand/70 max-w-3xl mx-auto">
              Trading virtual digital assets involves risk. Past performance does not indicate future results. Educational purposes only.
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
