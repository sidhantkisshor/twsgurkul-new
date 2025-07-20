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
          <p className="text-xl text-gray-300 mb-6">
            {pricingData.comparison.title}
          </p>
          {/* Feature Comparison Table */}
          {pricingData.comparison.features && (
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gray-900/50 rounded-lg overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-3 sm:p-4 text-gray-400 text-sm sm:text-base">Feature</th>
                      <th className="text-center p-3 sm:p-4 text-blue-400 text-sm sm:text-base">LITE</th>
                      <th className="text-center p-3 sm:p-4 text-orange-400 text-sm sm:text-base">PRO</th>
                      <th className="text-center p-3 sm:p-4 text-green-400 text-sm sm:text-base">MAX</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.comparison.features.map((item, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="p-3 sm:p-4 text-gray-300 font-medium text-sm sm:text-base">{item.feature}</td>
                        <td className="p-3 sm:p-4 text-center text-xs sm:text-sm">{item.lite}</td>
                        <td className="p-3 sm:p-4 text-center text-xs sm:text-sm">{item.pro}</td>
                        <td className="p-3 sm:p-4 text-center text-xs sm:text-sm font-semibold text-green-300">{item.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-yellow-400 font-bold mt-4 text-lg">
                {pricingData.comparison.bottomLine}
              </p>
            </div>
          )}
          {pricingData.comparison.calculation && (
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 max-w-2xl mx-auto border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4">{pricingData.comparison.calculation.title}</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-blue-400 font-semibold mb-2">LITE</p>
                    <p className="text-sm text-gray-300">{pricingData.comparison.calculation.lite}</p>
                  </div>
                  <div>
                    <p className="text-orange-400 font-semibold mb-2">PRO</p>
                    <p className="text-sm text-gray-300">{pricingData.comparison.calculation.pro}</p>
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold mb-2">MAX</p>
                    <p className="text-sm text-green-300 font-semibold">{pricingData.comparison.calculation.max}</p>
                  </div>
                </div>
                {pricingData.comparison.calculation.note && (
                  <p className="text-sm text-gray-400 text-center mt-3 italic">{pricingData.comparison.calculation.note}</p>
                )}
              </div>
            </div>
          )}
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
            {pricingData.lite.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-blue-600 text-white px-4 py-1 rounded-full font-bold text-sm">
                  {pricingData.lite.badge}
                </div>
              </div>
            )}
            
            <div className="glass-effect rounded-2xl p-6 border border-blue-500/30 h-full relative overflow-hidden">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">{pricingData.lite.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">{pricingData.lite.price}</div>
                <p className="text-sm text-gray-400">{pricingData.lite.duration}</p>
                <p className="text-gray-300 mt-2">{pricingData.lite.description}</p>
                <p className="text-sm text-blue-400 mt-2">{pricingData.lite.subtitle}</p>
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
              
              <div className="space-y-2 mb-4">
                <p className="text-red-400 text-sm text-center">
                  ⚠️ {pricingData.lite.limitation}
                </p>
                {pricingData.lite.highlight && (
                  <p className="text-green-400 text-sm font-semibold text-center">
                    📊 {pricingData.lite.highlight}
                  </p>
                )}
              </div>
              
              <button 
                onClick={() => handleEnroll('lite')}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start with Lite
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
            {pricingData.lite.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-blue-600 text-white px-4 py-1 rounded-full font-bold text-sm">
                  {pricingData.lite.badge}
                </div>
              </div>
            )}
            
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-orange-600 text-white px-4 py-1 rounded-full font-bold text-sm">
                {pricingData.pro.badge}
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-orange-600/50 h-full relative overflow-hidden">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">{pricingData.pro.name}</h3>
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
              
              <div className="space-y-2 mb-4">
                <p className="text-orange-400 text-sm text-center">
                  ⚡ {pricingData.pro.limitation}
                </p>
                {pricingData.pro.highlight && (
                  <p className="text-green-400 text-sm font-semibold text-center">
                    📊 {pricingData.pro.highlight}
                  </p>
                )}
                {pricingData.pro.comparison && (
                  <p className="text-green-400 text-sm text-center">
                    💰 {pricingData.pro.comparison}
                  </p>
                )}
              </div>
              
              <button 
                onClick={() => handleEnroll('pro')}
                className="w-full py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
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
                  Save {pricingData.max.savings}
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

              {/* Exclusive Features */}
              {pricingData.max.exclusiveFeatures && (
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 mb-6 border border-green-500/30">
                  <p className="text-center text-green-400 font-bold mb-2">🌟 MAX ONLY BENEFITS:</p>
                  <ul className="space-y-1">
                    {pricingData.max.exclusiveFeatures.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 text-center">• {feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="space-y-2 mb-4">
                <p className="text-center text-green-400 font-bold text-sm">
                  {pricingData.max.stat}
                </p>
                <p className="text-center text-red-400 font-bold text-sm">
                  {pricingData.max.scarcity}
                </p>
                {pricingData.max.highlight && (
                  <p className="text-center text-emerald-400 font-bold text-sm">
                    🏆 {pricingData.max.highlight}
                  </p>
                )}
              </div>
              
              <button 
                onClick={() => handleEnroll('max')}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 animate-pulse"
              >
                SECURE MAX - SAVE ₹28,999
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