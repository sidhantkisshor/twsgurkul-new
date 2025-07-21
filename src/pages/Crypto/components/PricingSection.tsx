import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown, ArrowRight, Clock } from 'lucide-react';

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
            Choose wisely. Your financial freedom depends on it.
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
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse">
              🔥 ONLY 47 SPOTS LEFT
            </div>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 border-2 border-yellow-500/50 relative overflow-hidden shadow-2xl shadow-yellow-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
            
            {/* Pricing Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Crypto Market Mastery</h3>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-xl text-gray-500 line-through">₹24,999</span>
                <span className="text-5xl font-bold text-yellow-400">₹19,499</span>
              </div>
              <p className="text-sm text-gray-400">One-time payment • Lifetime access</p>
              <div className="mt-2 inline-flex items-center gap-2 text-red-400 text-sm">
                <Clock className="w-4 h-4 animate-pulse" />
                <span>Price increases in 14 hours</span>
              </div>
            </div>
            
            {/* What You Get */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-white text-center">Everything You Need to Succeed:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Complete 12-week crypto mastery program</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Live trading sessions 3x per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Personal WhatsApp support group</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Copy our exact trades in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Risk management & psychology training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
              </ul>
            </div>
            
            {/* Social Proof */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-4 mb-6 border border-green-500/30">
              <p className="text-sm text-center text-gray-300">
                <span className="text-green-400 font-bold">1,263 students</span> enrolled • 
                <span className="text-green-400 font-bold"> ₹2.7Cr</span> profits generated • 
                <span className="text-green-400 font-bold"> 73%</span> win rate
              </p>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={handleEnroll}
              className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-bold text-xl hover:shadow-lg hover:shadow-yellow-500/50 transition-all transform hover:scale-105 group"
            >
              <span className="flex items-center justify-center gap-2">
                Secure Your Spot Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </span>
            </button>
            
            {/* Trust Badges */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-400">
                🔒 Secure payment • 💳 EMI available • ✅ No hidden charges
              </p>
              <p className="text-xs text-green-400 font-semibold">
                If you don't see results in 30 days, get 100% refund
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
                <p className="text-green-400 font-semibold mb-2">✅ Start Winning:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Average profit: ₹75K in 3 months</li>
                  <li>• Time invested: 3 hours/day</li>
                  <li>• Confidence & peace of mind</li>
                  <li>• Provide for your family</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-yellow-400 font-bold">
              ₹19,499 investment → ₹75,000+ returns = 285% ROI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;