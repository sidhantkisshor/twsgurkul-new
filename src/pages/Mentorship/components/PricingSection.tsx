import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'lite' | 'pro' | 'max'>('max');

  const handleEnroll = (plan: string) => {
    console.log(`Enrolling in ${plan} plan`);
  };

  const plans = [
    {
      id: 'lite' as const,
      name: 'ETM LITE',
      price: '₹6,999',
      duration: '3 months',
      monthlyEquivalent: '₹2,333/month',
      description: 'Essential trading signals',
      features: [
        { included: true, text: 'Daily trading signals' },
        { included: true, text: 'Basic market analysis' },
        { included: false, text: 'Live trading sessions' },
        { included: false, text: 'WhatsApp support' },
        { included: false, text: 'Portfolio reviews' }
      ]
    },
    {
      id: 'pro' as const,
      name: 'ETM PRO',
      price: '₹16,999',
      duration: '3 months',
      monthlyEquivalent: '₹5,666/month',
      description: 'Comprehensive learning',
      features: [
        { included: true, text: 'Everything in LITE' },
        { included: true, text: '40+ strategy videos' },
        { included: true, text: 'Community access' },
        { included: false, text: 'Live trading sessions' },
        { included: false, text: '1-on-1 mentorship' }
      ]
    },
    {
      id: 'max' as const,
      name: 'ETM MAX',
      price: '₹19,999',
      originalPrice: '₹49,999',
      duration: '3 months',
      monthlyEquivalent: '₹6,666/month',
      description: 'Complete transformation',
      features: [
        { included: true, text: 'Everything in PRO' },
        { included: true, text: 'Live 8PM sessions' },
        { included: true, text: 'Whale wallet tracking' },
        { included: true, text: 'Personal WhatsApp group' },
        { included: true, text: '90-day profit guarantee' }
      ],
      recommended: true
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6">
              Choose your path
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
              Three months to transform your trading. One decision to change your life.
            </p>
          </motion.div>

          {/* Pricing cards - stack on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  selectedPlan === plan.id ? 'ring-2 ring-gray-900' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute -top-3 sm:top-4 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4">
                    <div className="bg-gray-900 text-white text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      Recommended
                    </div>
                  </div>
                )}

                {/* Plan details */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div>
                    {plan.originalPrice && (
                      <div className="text-xs sm:text-sm text-gray-400 line-through mb-1">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="text-2xl sm:text-3xl font-light text-gray-900">
                      {plan.price}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      {plan.duration}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      ({plan.monthlyEquivalent})
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-xs sm:text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      } font-light`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => handleEnroll(plan.id)}
                  className={`w-full py-3 sm:py-4 rounded-full transition-all duration-300 group font-light text-sm sm:text-base ${
                    plan.recommended
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Select {plan.name}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Value proposition */}
          <motion.div
            className="mt-12 sm:mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xs sm:text-sm text-gray-500 px-4">
              All plans are for 3-month access • 30-day money-back guarantee • Renew at same price
            </p>
          </motion.div>

          {/* ROI visualization */}
          <motion.div
            className="mt-16 sm:mt-32 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-light text-center text-gray-900 mb-8 sm:mb-12">
              Expected returns in 3 months
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">ETM LITE</p>
                <p className="text-2xl sm:text-3xl font-light text-gray-900">₹30-45K</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Total returns</p>
                <p className="text-xs text-gray-400 mt-2">4-6x ROI</p>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">ETM PRO</p>
                <p className="text-2xl sm:text-3xl font-light text-gray-900">₹75-105K</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Total returns</p>
                <p className="text-xs text-gray-400 mt-2">4-6x ROI</p>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">ETM MAX</p>
                <p className="text-2xl sm:text-3xl font-light text-gray-900">₹150K+</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Total returns</p>
                <p className="text-xs text-gray-400 mt-2">7.5x+ ROI</p>
              </div>
            </div>
            
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8 px-4">
              Based on average student performance over 3-month period
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;