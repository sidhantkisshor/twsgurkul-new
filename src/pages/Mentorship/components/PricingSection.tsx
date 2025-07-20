import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, CreditCard, Crown, Timer } from 'lucide-react';
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
              Choose Your Path to ₹50K+ Monthly
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            {pricingData.comparison.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {pricingData.comparison.points.map((point, index) => (
              <div key={index} className="text-sm sm:text-base">
                <span className="text-gray-400">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-yellow-400 font-semibold mt-4 flex items-center justify-center gap-2">
            <Timer className="animate-pulse" size={20} />
            {pricingData.max.scarcity}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Lite Plan */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-6 border border-gray-700 h-full relative overflow-hidden opacity-75">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-400 mb-2">{pricingData.lite.name}</h3>
                <div className="text-3xl font-bold text-gray-300 mb-1">{pricingData.lite.price}</div>
                <p className="text-sm text-gray-500">{pricingData.lite.duration}</p>
                <p className="text-gray-400 mt-2">{pricingData.lite.description}</p>
                <p className="text-sm text-orange-400 mt-2">({pricingData.lite.subtitle})</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pricingData.lite.features.map((feature, index) => {
                  const isNegative = feature.startsWith('❌');
                  return (
                    <li key={index} className={`flex items-start gap-2 text-sm ${isNegative ? 'text-gray-500' : 'text-gray-300'}`}>
                      {!isNegative && <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />}
                      <span>{feature.replace('✅ ', '').replace('❌ ', '')}</span>
                    </li>
                  );
                })}
              </ul>
              
              <div className="text-center text-red-400 text-sm mb-4">
                ⚠️ {pricingData.lite.limitation}
              </div>
              
              <button 
                onClick={() => handleEnroll('lite')}
                className="w-full py-3 bg-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Choose Lite
              </button>
            </div>
          </motion.div>

          {/* Pro Plan - Decoy */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-blue-600 text-white px-4 py-1 rounded-full font-bold text-sm">
                {pricingData.pro.badge}
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-blue-600/50 h-full relative overflow-hidden">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">{pricingData.pro.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">{pricingData.pro.price}</div>
                <p className="text-sm text-gray-400">{pricingData.pro.duration}</p>
                <p className="text-white mt-2">{pricingData.pro.description}</p>
                <p className="text-sm text-yellow-400 mt-2">({pricingData.pro.subtitle})</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pricingData.pro.features.map((feature, index) => {
                  const isNegative = feature.startsWith('❌');
                  return (
                    <li key={index} className={`flex items-start gap-2 text-sm ${isNegative ? 'text-gray-500' : 'text-gray-300'}`}>
                      {!isNegative && <Check className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />}
                      <span>{feature.replace('✅ ', '').replace('❌ ', '')}</span>
                    </li>
                  );
                })}
              </ul>
              
              <div className="text-center text-orange-400 text-sm mb-4">
                ⚡ {pricingData.pro.limitation}
              </div>
              
              <button 
                onClick={() => handleEnroll('pro')}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Choose Pro
              </button>
            </div>
          </motion.div>

          {/* Max Plan - Target */}
          <motion.div 
            className="relative transform lg:scale-105"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 animate-pulse">
                <Crown size={16} />
                {pricingData.max.badge}
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border-2 border-green-500 h-full relative overflow-hidden shadow-2xl shadow-green-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="absolute top-4 right-4">
                <Star className="text-yellow-500 fill-current animate-pulse" size={28} />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-500 mb-2">{pricingData.max.name}</h3>
                <div className="flex items-baseline justify-center gap-3 mb-1">
                  <span className="text-xl text-gray-500 line-through">{pricingData.max.originalPrice}</span>
                  <span className="text-4xl font-bold text-white">{pricingData.max.salePrice}</span>
                </div>
                <div className="inline-block bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  Save {pricingData.max.savings} TODAY
                </div>
                <p className="text-sm text-gray-400">{pricingData.max.duration}</p>
                <p className="text-white font-semibold mt-2">{pricingData.max.description}</p>
                <p className="text-sm text-green-400 mt-2">({pricingData.max.subtitle})</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {pricingData.max.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-white">
                    <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="font-medium">{feature.replace('✅ ', '')}</span>
                  </li>
                ))}
              </ul>

              {/* Bonuses */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-lg p-4 mb-6">
                <p className="text-center text-green-400 font-bold mb-2">🎁 LIMITED TIME BONUSES:</p>
                <ul className="space-y-1">
                  {pricingData.max.bonuses.map((bonus, index) => (
                    <li key={index} className="text-xs text-gray-300">{bonus}</li>
                  ))}
                </ul>
                <p className="text-center text-yellow-400 text-sm font-bold mt-2">
                  Total Bonus Value: ₹70,000
                </p>
              </div>
              
              <div className="text-center text-green-400 font-bold text-sm mb-4">
                {pricingData.max.stat}
              </div>
              
              <button 
                onClick={() => handleEnroll('max')}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 animate-pulse"
              >
                SECURE MAX NOW - SAVE ₹28,999
              </button>
              
              <div className="mt-4 space-y-2">
                <p className="text-center text-sm text-green-400 font-semibold">
                  {pricingData.max.guarantee}
                </p>
                <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                  <CreditCard size={16} />
                  EMI: ₹2,333/month (9 months)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom comparison note */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-yellow-400 font-bold">
            💡 {pricingData.comparison.bottomLine}
          </p>
          <p className="text-gray-400 mt-2">
            {urgencyData.spotsLeft} MAX seats remaining • {urgencyData.lastHourJoined} people joined in last hour
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;