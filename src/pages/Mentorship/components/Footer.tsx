import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-deep-slate">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-soft-sand/70 max-w-3xl mx-auto">
              Trading virtual digital assets involves risk. Past performance does not indicate future results. Educational purposes only.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://tradingwithsidhant.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">
              Terms
            </a>
            <a href="https://tradingwithsidhant.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">
              Privacy Policy
            </a>
            <a href="https://tradingwithsidhant.com/legal/refund-policy" target="_blank" rel="noopener noreferrer" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">
              Refund Policy
            </a>
            <a href="https://tradingwithsidhant.com/legal/disclaimers" target="_blank" rel="noopener noreferrer" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">
              Disclaimers
            </a>
            <a href="https://tradingwithsidhant.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-wealth-teal hover:text-wealth-teal/80 transition-colors">
              Cookie Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-xs text-soft-sand/50">
              &copy; {new Date().getFullYear()} Trading with Sidhant. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
