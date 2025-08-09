import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-br from-cyan-400 to-teal-500 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-slate-900" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Footprint</span>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent ml-1">Chart Mastery</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#mechanism" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                What You'll Learn
              </a>
              <a href="#testimonials" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Student Results
              </a>
              <a href="#pricing" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Pricing
              </a>
              <a href="#faq" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <div className="space-y-2">
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} TWS Gurukul. All rights reserved.
              </p>
              <p className="text-xs text-slate-500">
                Education only. Not investment advice. Results vary.
              </p>
              <p className="text-xs text-slate-500">
                Methodology & verification → <a href="/results-and-claims" className="text-cyan-400 hover:text-cyan-300 underline">/results-and-claims</a>
              </p>
              <p className="text-xs text-slate-500">
                Support: support@twsgurukul.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;