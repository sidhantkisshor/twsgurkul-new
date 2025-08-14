import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { getNextFirstSaturdayWithOrdinal } from '../../Crypto/utils/dateHelpers';

const PricingSection: React.FC = () => {
  const nextSession = getNextFirstSaturdayWithOrdinal();
  
  return (
    <section id="pricing" className="section bg-slate-900 relative">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            Access <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Institutional-Grade</span> System
          </h2>
          
          <motion.div 
            className="bg-slate-900/80 border border-cyan-500/30 rounded-lg p-4 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 font-mono">
              <Calendar className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                Lifetime access • Start instantly
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-900/90 backdrop-blur-xl rounded-xl p-5 sm:p-6 md:p-10 border border-cyan-500/20 shadow-xl shadow-cyan-500/10 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="text-center">
                <div className="mb-3">
                  <span className="text-cyan-400 font-bold text-base sm:text-lg block sm:inline">Live Q&A:</span>
                  <span className="text-white text-sm sm:text-lg sm:ml-2 block sm:inline">Next session {nextSession} (1st Saturday of every month). Recording included.</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Includes:</h4>
            
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-300">10 recorded modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-300">Monthly Q&A</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-300">Community support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-300">Case studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-300">Risk templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-300">1-page Entry Checklist</span>
                </li>
              </ul>
            </div>
            
            <div className="border-t border-slate-700 pt-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-amber-400 font-bold mb-1 text-sm sm:text-base">Seat Policy:</p>
                  <p className="text-slate-300 text-sm sm:text-base">Monthly Q&A capped with limited students so your questions get answered.</p>
                </div>
                
                <div>
                  <p className="text-cyan-400 font-bold mb-1 text-sm sm:text-base">Guarantee:</p>
                  <p className="text-slate-300 text-sm sm:text-base">EMI 3–24 months where supported. 30-day satisfaction guarantee on content quality.</p>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-slate-500 italic">
                    Education using public market data and standard charting. No tips or signals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button onClick={handlePaymentPopup} className="cta-button-primary text-base sm:text-lg inline-block">
                Start Footprint Mastery
                <span className="block text-xs sm:text-sm mt-1 opacity-90">
                  <span className="line-through text-slate-300">₹1,50,000</span> → ₹34,997
                </span>
              </button>
              <p className="text-xs sm:text-sm text-slate-400 mt-3 italic">
                Every chase entry you avoid by reading absorption can pay for this program many times over.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;