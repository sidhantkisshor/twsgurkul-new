import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#2C3539] border-t border-[#EDE6D8]/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-[#EDE6D8] max-w-3xl mx-auto">
              Cryptocurrency trading involves substantial risk. Past performance does not guarantee future results. Educational content only.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
            <a 
              href="https://tradingwithsidhant.com/legal/terms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDE6D8]/60 hover:text-[#0A8D7A] transition-colors"
            >
              Terms
            </a>
            <a 
              href="https://tradingwithsidhant.com/legal/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDE6D8]/60 hover:text-[#0A8D7A] transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://tradingwithsidhant.com/legal/refund-policy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDE6D8]/60 hover:text-[#0A8D7A] transition-colors"
            >
              Refund Policy
            </a>
            <a 
              href="https://tradingwithsidhant.com/legal/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDE6D8]/60 hover:text-[#0A8D7A] transition-colors"
            >
              Disclaimers
            </a>
            <a 
              href="https://tradingwithsidhant.com/legal/cookie-policy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDE6D8]/60 hover:text-[#0A8D7A] transition-colors"
            >
              Cookie Policy
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-[#EDE6D8]/60">
              © {new Date().getFullYear()} TWS Gurukul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;