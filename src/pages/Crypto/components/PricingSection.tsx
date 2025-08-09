import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Clock } from 'lucide-react';

const PricingSection: React.FC = () => {
  const handleEnroll = () => {
    // Scroll to final CTA or handle payment
    const element = document.getElementById('final-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
              One Decision. Two Futures.
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Learn systematically. Your confidence grows with practice.
          </p>
        </motion.div>

        {/* Single Focused Pricing Card */}
        <motion.div 
          className="relative max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Best Value Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse whitespace-nowrap">
              🎯 INSTANT ACCESS TODAY
            </div>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 border-2 border-yellow-500/50 relative overflow-hidden shadow-2xl shadow-yellow-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
            
            {/* Pricing Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Crypto Market Mastery — ₹19,499</h3>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-xl text-gray-500">(Recorded + Monthly Live Q&A)</span>
              </div>
              <p className="text-sm text-gray-400">One-time payment • Lifetime access</p>
              <p className="text-sm text-yellow-400 mt-2">
                Enroll before 18th AUG to join the next Live Q&A • Price increases on 19th AUG
              </p>
            </div>
            
            {/* What You Get */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-white text-center">You'll get:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Full 12‑week curriculum (foundations → strategy → execution)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Monthly live Q&A + trade reviews (recordings provided)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Support group for doubt clearing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Risk management + psychology modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Tools, templates, and checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Regular updates without additional pay</span>
                </li>
              </ul>
            </div>
            
            {/* Social Proof */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-4 mb-6 border border-green-500/30">
              <p className="text-sm text-center text-gray-300">
                <span className="text-green-400 font-bold">1,263 students</span> enrolled • 
                <span className="text-green-400 font-bold"> ₹2.7Cr</span> reported profits • 
                <span className="text-green-400 font-bold"> 73%</span> reported win rate
              </p>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={handleEnroll}
              className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-bold text-xl hover:shadow-lg hover:shadow-yellow-500/50 transition-all transform hover:scale-105 group"
            >
              <span className="flex items-center justify-center gap-2">
                Start Learning — ₹19,499
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </span>
            </button>
            
            {/* Trust Badges */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-400">
                🔒 Secure payment • 💳 EMI available • ✅ No hidden charges
              </p>
              <p className="text-xs text-green-400 font-semibold">
                30-day satisfaction guarantee
              </p>
              <p className="text-xs text-gray-500 mt-2">
                ⚠️ Education only, not investment advice
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparison with DIY */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="font-bold text-white mb-4">The Real Cost of NOT Joining:</h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <p className="text-red-400 font-semibold mb-2">❌ Continue Losing:</p>
                <ul className="space-y-1 text-gray-400">
                  <li>• Average loss: ₹50K in 3 months</li>
                  <li>• Time wasted: 200+ hours</li>
                  <li>• Stress & sleepless nights</li>
                  <li>• Family relationships suffer</li>
                </ul>
              </div>
              <div className="text-left">
                <p className="text-green-400 font-semibold mb-2">✅ Start Learning:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Reported average: ₹75K in 3 months*</li>
                  <li>• Time invested: 3 hours/day</li>
                  <li>• Confidence & peace of mind</li>
                  <li>• Provide for your family</li>
                </ul>
              </div>
            </div>
            {/* ROI statement removed to maintain compliance and avoid promissory language */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;