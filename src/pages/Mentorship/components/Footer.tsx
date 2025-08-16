import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Trading virtual digital assets involves risk. Past performance does not indicate future results. Educational purposes only.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://tradingwithsidhant.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="https://tradingwithsidhant.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="https://tradingwithsidhant.com/legal/refund-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              Refund Policy
            </a>
            <a href="https://tradingwithsidhant.com/legal/disclaimers" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              Disclaimers
            </a>
            <a href="https://tradingwithsidhant.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;