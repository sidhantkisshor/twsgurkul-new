import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VerificationModal from './VerificationModal';

const Footer: React.FC = () => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  return (
    <footer className="bg-[#1A2226] py-12 border-t border-[#3A4449]/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img src="/tws-gurukulx-icon.png" alt="TWS GurukulX" className="w-8 h-8 object-contain" />
              <div>
                <span className="text-lg font-bold text-[#EDE6D8]">Footprint</span>
                <span className="text-lg font-bold bg-gradient-to-r from-[#C87533] to-[#B8956A] bg-clip-text text-transparent ml-1">Mastery</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#framework" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors text-sm">
                What You'll Learn
              </a>
              <a href="#testimonials" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors text-sm">
                Student Results
              </a>
              <a href="#pricing" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors text-sm">
                Pricing
              </a>
              <a href="#faq" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>

          <div className="border-t border-[#B8956A]/20 pt-8 text-center">
            <div className="space-y-4">
              {/* ASCI-mandated VDA disclosure */}
              <p className="text-sm text-[#EDE6D8] max-w-3xl mx-auto leading-relaxed font-medium">
                Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.
              </p>

              {/* SEBI non-registration + testimonial disclaimer */}
              <p className="text-xs text-[#B8A99A] max-w-3xl mx-auto leading-relaxed">
                Trading With Sidhant LLP is <strong className="text-[#EDE6D8]">not a SEBI-registered Investment Adviser or Research Analyst</strong>. All content is educational; we do not provide buy/sell signals, recommendations, or personalised investment advice. Past performance is not indicative of future results. Testimonials reflect self-reported outcomes from individual students and are not typical.
              </p>

              <p className="text-xs text-[#B8A99A]">
                © {new Date().getFullYear()} Trading With Sidhant LLP. All rights reserved.
              </p>
              <p className="text-xs text-[#B8A99A]/60">
                GSTIN: 36AAVFT2975Q1ZW · All prices exclusive of 18% GST
              </p>
              <p className="text-xs text-[#B8A99A]">
                <button
                  onClick={() => setShowVerificationModal(true)}
                  className="text-[#2DBDA8] hover:underline"
                >
                  How TWS verifies student feedback →
                </button>
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <Link to="/disclaimer" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors py-2 px-1">Disclaimers</Link>
                <Link to="/privacy" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors py-2 px-1">Privacy Policy</Link>
                <Link to="/terms" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors py-2 px-1">Terms</Link>
                <Link to="/refunds" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors py-2 px-1">Refund Policy</Link>
                <Link to="/cookies" className="text-[#2DBDA8] hover:text-[#C87533] transition-colors py-2 px-1">Cookie Policy</Link>
              </div>
              <p className="text-xs text-[#2DBDA8]">
                Support: <a href="mailto:support@tradingwithsidhant.com" className="hover:underline">support@tradingwithsidhant.com</a>
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
