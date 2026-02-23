import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import VerificationModal from './VerificationModal';

const Footer: React.FC = () => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  return (
    <footer className="bg-[#232B2F] py-12 border-t border-[#B8956A]/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C87533] blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-br from-[#C87533] to-[#B8956A] p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-[#232B2F]" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-[#EDE6D8]">Footprint</span>
                <span className="text-lg font-bold bg-gradient-to-r from-[#C87533] to-[#B8956A] bg-clip-text text-transparent ml-1">Mastery</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#mechanism" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors text-sm">
                What You'll Learn
              </a>
              <a href="#testimonials" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors text-sm">
                Student Results
              </a>
              <a href="#pricing" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors text-sm">
                Pricing
              </a>
              <a href="#faq" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>

          <div className="border-t border-[#B8956A]/20 pt-8 text-center">
            <div className="space-y-4">
              <p className="text-xs text-[#B8A99A]">
                © {new Date().getFullYear()} TWS Gurukul. All rights reserved.
              </p>
              <p className="text-xs text-[#B8A99A]">
                Education only. Not investment advice. Results vary.
              </p>
              <p className="text-xs text-[#B8A99A]">
                <button
                  onClick={() => setShowVerificationModal(true)}
                  className="text-[#0A8D7A] hover:underline"
                >
                  How TWS verifies student feedback →
                </button>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <a href="https://tradingwithsidhant.com/legal/disclaimers" target="_blank" rel="noopener noreferrer" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors">
                  Disclaimers
                </a>
                <a href="https://tradingwithsidhant.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors">
                  Privacy Policy
                </a>
                <a href="https://tradingwithsidhant.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors">
                  Terms
                </a>
                <a href="https://tradingwithsidhant.com/legal/refund-policy" target="_blank" rel="noopener noreferrer" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors">
                  Refund Policy
                </a>
                <a href="https://tradingwithsidhant.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-[#0A8D7A] hover:text-[#C87533] transition-colors">
                  Cookie Policy
                </a>
              </div>
              <p className="text-xs text-[#0A8D7A]">
                Support: support@twsgurukul.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
    </footer>
  );
};

export default Footer;
