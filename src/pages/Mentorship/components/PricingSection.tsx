import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown, ArrowRight, Users, TrendingUp } from 'lucide-react';
import { pricingData, urgencyData } from '../data';

const PricingSection: React.FC = () => {
  const handleEnroll = (plan: string) => {
    // Add payment integration here
    console.log(`Enrolling in ${plan} plan`);
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Choose Your Profit Path
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            {pricingData.comparison.title}
          </p>
          <p className="text-yellow-400 font-semibold">
            {pricingData.comparison.bottomLine}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main ETM MAX Focus */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 border-2 border-green-500 relative overflow-hidden shadow-2xl shadow-green-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-green-500 mb-2">{pricingData.max.name}</h3>
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-lg text-gray-500 line-through">{pricingData.max.originalPrice}</span>
                  <span className="text-5xl font-bold text-white">{pricingData.max.salePrice}</span>
                </div>
                <p className="text-sm text-gray-400">{pricingData.max.duration}</p>
                <p className="text-yellow-400 font-semibold mt-2">{pricingData.max.urgency}</p>
              </div>
              
              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-4 mb-6 border border-red-500/50">
                <p className="text-white font-bold text-center mb-2">
                  ⚠️ {pricingData.max.requirement}
                </p>
                <p className="text-gray-300 text-center text-sm">
                  Total Investment: ₹42K (Mastery + ETM MAX) = ₹5L+ yearly profits
                </p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {pricingData.max.features.slice(1).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-white">
                    <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleEnroll('max')}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-xl hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 group"
              >
                <span className="flex items-center justify-center gap-2">
                  SECURE ETM MAX ACCESS NOW
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </span>
              </button>
              
              <div className="mt-4 text-center">
                <p className="text-green-400 font-semibold">✓ 30-Day Refund • ✓ 90-Day Profit Guarantee</p>
              </div>
            </div>
          </motion.div>

          {/* Other Options Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* ETM LITE */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-xl p-4 border border-gray-600 h-full opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-400">{pricingData.lite.name}</h3>
                  <div className="text-2xl font-bold text-white">{pricingData.lite.price}<span className="text-sm">{pricingData.lite.duration}</span></div>
                </div>
                
                <p className="text-xs text-gray-400 text-center mb-4">{pricingData.lite.best_for}</p>
                <p className="text-xs text-red-400 text-center italic mb-4">{pricingData.lite.limitation}</p>
                
                <button 
                  onClick={() => handleEnroll('lite')}
                  className="w-full py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors"
                >
                  Get Signals Only
                </button>
              </div>
            </motion.div>

            {/* ETM PROFESSIONAL - Decoy */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-4 border border-orange-600/50 h-full">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-orange-400">{pricingData.pro.name}</h3>
                  <div className="text-2xl font-bold text-white">{pricingData.pro.price}</div>
                </div>
                
                <p className="text-xs text-yellow-400 text-center mb-2">⚠️ {pricingData.pro.limitation}</p>
                <p className="text-xs text-red-400 text-center font-semibold mb-4">{pricingData.pro.comparison}</p>
                
                <button 
                  onClick={() => handleEnroll('pro')}
                  className="w-full py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition-colors"
                >
                  Choose Professional
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Visual Comparison */}
        <motion.div 
          className="text-center mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">{pricingData.comparison.title}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
              <div className="text-left">
                <p className="text-gray-400">{pricingData.comparison.visual.basic}</p>
              </div>
              <div className="text-left">
                <p className="text-gray-400">{pricingData.comparison.visual.standard}</p>
              </div>
              <div className="text-left">
                <p className="text-green-400 font-bold">{pricingData.comparison.visual.elite}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-yellow-400 font-bold">
                {pricingData.comparison.mathCheck.question}
              </p>
              <p className="text-gray-300">
                {pricingData.comparison.mathCheck.answer}
              </p>
            </div>
          </div>

          {/* Prerequisite Box */}
          {pricingData.comparison.prerequisite && (
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-6 border border-red-500/50 mb-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">
                {pricingData.comparison.prerequisite.title}
              </h3>
              <p className="text-white font-semibold mb-2">
                {pricingData.comparison.prerequisite.requirement}
              </p>
              <p className="text-gray-300 text-sm mb-2">
                {pricingData.comparison.prerequisite.why}
              </p>
              <p className="text-green-400 font-bold">
                {pricingData.comparison.prerequisite.total}
              </p>
            </div>
          )}
          
          <p className="text-gray-400">
            <span className="text-green-400 font-semibold">{urgencyData.enrollmentsToday} people</span> chose Elite today • 
            Only <span className="text-red-400 font-semibold">{urgencyData.spotsLeft} seats</span> remaining
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;