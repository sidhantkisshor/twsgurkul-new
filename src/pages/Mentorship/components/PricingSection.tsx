import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, CreditCard } from 'lucide-react';
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Limited Time Offer - Save ₹40,000
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            {pricingData.pro.stat}
          </p>
          <p className="text-yellow-400 font-semibold">
            🔥 {urgencyData.spotsLeft} seats left at this price
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lite Plan */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 border border-gray-700 h-full relative overflow-hidden">
              
              <h3 className="text-2xl font-bold text-white mb-2">{pricingData.lite.name}</h3>
              <div className="text-4xl font-bold text-gray-300 mb-2">{pricingData.lite.price}</div>
              <p className="text-gray-300 mb-4">{pricingData.lite.description}</p>
              <p className="text-sm text-gray-400 mb-6">({pricingData.lite.subtitle})</p>
              
              <ul className="space-y-3 mb-8">
                {pricingData.lite.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <Check className="text-green-500 mt-1" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleEnroll('lite')}
                className="w-full py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <Zap size={16} />
                {pricingData.pro.badge}
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border-2 border-green-500/50 h-full relative overflow-hidden transform hover:scale-105 transition-transform">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-green-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="absolute top-4 right-4">
                <Star className="text-yellow-500 fill-current" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-green-500 mb-2">{pricingData.pro.name}</h3>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-2xl text-gray-500 line-through">{pricingData.pro.originalPrice}</span>
                <span className="text-4xl font-bold text-white">{pricingData.pro.salePrice}</span>
              </div>
              <div className="inline-block bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Save {pricingData.pro.savings}
              </div>
              <p className="text-white font-semibold mb-2">{pricingData.pro.description}</p>
              <p className="text-sm text-green-400 mb-6">({pricingData.pro.subtitle})</p>
              
              <ul className="space-y-3 mb-8">
                {pricingData.pro.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-white">
                    <Check className="text-green-500 mt-1" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleEnroll('pro')}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105"
              >
                Enroll Now - Save ₹40,000
              </button>
              
              <div className="mt-4 space-y-2">
                <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                  <CreditCard size={16} />
                  EMI available: ₹945/month
                </p>
                <p className="text-center text-xs text-gray-500">
                  UPI, Credit/Debit Cards, Net Banking accepted
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;