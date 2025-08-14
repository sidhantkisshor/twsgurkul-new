import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [showInterceptModal, setShowInterceptModal] = useState(false);
  
  const handleEnroll = (plan: string) => {
    if (plan === 'lite') {
      window.open('https://learn.tradingwithsidhant.com/web/checkout/689e1446ec5d77ab522a50f7?purchaseNow=true', '_blank');
    } else if (plan === 'pro') {
      setShowInterceptModal(true);
    } else if (plan === 'max') {
      window.open('https://learn.tradingwithsidhant.com/web/checkout/689e14304cdc28f73d92a88c?purchaseNow=true', '_blank');
    } else {
      console.log(`Enrolling in ${plan} plan`);
      // Add enrollment logic here
    }
  };
  
  const handleProContinue = () => {
    setShowInterceptModal(false);
    window.open('https://learn.tradingwithsidhant.com/web/checkout/689e14be3143df7292e76c34?purchaseNow=true', '_blank');
  };
  
  const handleUpgradeToMax = () => {
    setShowInterceptModal(false);
    window.open('https://learn.tradingwithsidhant.com/web/checkout/689e14304cdc28f73d92a88c?purchaseNow=true', '_blank');
  };

  // Desktop order: Lite, Pro, Max
  const desktopPlans = [
    {
      id: 'lite',
      name: 'ETM Lite',
      price: '₹6,999',
      duration: '/ month',
      description: 'For beginners who want to get a feel for our system through daily trade ideas and analysis.',
      features: [
        { included: true, text: 'Daily trade ideas' },
        { included: true, text: 'Basic market analysis' },
        { included: true, text: 'Community access' },
        { included: false, text: 'Live trading sessions' },
        { included: false, text: 'Performance reviews' },
        { included: false, text: 'Accountability pods' },
      ],
      ctaText: 'Start Small',
      microcopy: null,
      style: 'standard'
    },
    {
      id: 'pro',
      name: 'ETM Pro',
      price: '₹18,999',
      duration: '/ 3 months',
      description: 'For self-directed learners who want the full curriculum and community but no live room or reviews.',
      features: [
        { included: true, text: 'Everything in Lite' },
        { included: true, text: '40+ strategy videos' },
        { included: true, text: 'Priority email support' },
        { included: true, text: 'Comprehensive course materials' },
        { included: false, text: 'Live trading sessions' },
        { included: false, text: 'Accountability pods' },
        { included: false, text: 'Weekly performance reviews' },
      ],
      ctaText: 'Self-Study Only',
      microcopy: 'Most traders upgrade to Max for just ₹1,000 more.',
      style: 'muted'
    },
    {
      id: 'max',
      name: 'ETM Max',
      price: '₹19,999',
      duration: '/ 3 months',
      description: 'For serious traders ready for live coaching, accountability, and reviews.',
      features: [
        { included: true, text: 'Everything in Pro' },
        { included: true, text: 'Nightly 8 PM live trading sessions with pro coaches' },
        { included: true, text: 'Accountability pods' },
        { included: true, text: 'Weekly performance reviews' },
        { included: true, text: 'Whale wallet tracking' },
        { included: true, text: 'Priority WhatsApp group' },
        { included: true, text: '30-day satisfaction refund' }
      ],
      ctaText: 'Get Coached Nightly',
      microcopy: 'Only 50 seats per cohort to protect mentor ratio.',
      recommended: true,
      style: 'featured'
    }
  ];
  
  // Mobile order: Max, Pro, Lite (most important first)
  const mobilePlans = [
    desktopPlans[2], // Max
    desktopPlans[1], // Pro
    desktopPlans[0]  // Lite
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Choose your learning path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Three months to transform your trading. One decision to change your life.
            </p>
          </motion.div>

          {/* Pricing cards - Desktop */}
          <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {desktopPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 ${
                  plan.style === 'featured' 
                    ? 'bg-gray-900 text-white shadow-2xl transform scale-105 lg:scale-110' 
                    : plan.style === 'muted'
                    ? 'bg-gray-50 shadow-none'
                    : 'bg-white shadow-sm'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 right-6">
                    <div className="bg-green-500 text-white text-xs px-4 py-2 rounded-full font-medium">
                      Recommended
                    </div>
                  </div>
                )}

                {/* Card content */}
                <div className={`p-8 ${plan.style === 'muted' ? 'opacity-90' : ''}`}>
                  {/* Plan header */}
                  <div className={`text-center mb-8 pb-8 border-b ${
                    plan.style === 'featured' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <h3 className={`text-2xl font-normal mb-2 ${
                      plan.style === 'featured' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="mt-4">
                      <span className={`text-3xl font-light ${
                        plan.style === 'featured' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${
                        plan.style === 'featured' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {plan.duration}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className={`text-sm mt-4 ${
                      plan.style === 'featured' ? 'text-gray-300' : 'text-gray-600'
                    } font-light`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.style === 'featured' ? 'text-green-400' : 'text-green-600'
                          }`} />
                        ) : (
                          <X className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.style === 'featured' ? 'text-gray-600' : 'text-gray-300'
                          }`} />
                        )}
                        <span className={`text-sm font-light ${
                          feature.included 
                            ? plan.style === 'featured' ? 'text-gray-200' : 'text-gray-700'
                            : plan.style === 'featured' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div>
                    <motion.button
                      onClick={() => handleEnroll(plan.id)}
                      className={`w-full py-4 rounded-full transition-all duration-300 group font-light flex items-center justify-center gap-2 ${
                        plan.style === 'featured'
                          ? 'bg-white text-gray-900 hover:bg-gray-100 text-base'
                          : 'bg-gray-900 text-white hover:bg-gray-800 text-sm'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.ctaText}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    
                    {/* Microcopy */}
                    {plan.microcopy && (
                      <p className={`text-xs text-center mt-3 ${
                        plan.style === 'featured' 
                          ? 'text-gray-400' 
                          : plan.style === 'muted'
                          ? 'text-red-600 font-medium'
                          : 'text-gray-500'
                      }`}>
                        {plan.microcopy}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pricing cards - Mobile (carousel style, Max first) */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-6 max-w-md mx-auto">
              {mobilePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 ${
                  plan.style === 'featured' 
                    ? 'bg-gray-900 text-white shadow-2xl transform scale-105 lg:scale-110' 
                    : plan.style === 'muted'
                    ? 'bg-gray-50 shadow-none'
                    : 'bg-white shadow-sm'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 right-6">
                    <div className="bg-green-500 text-white text-xs px-4 py-2 rounded-full font-medium">
                      Recommended
                    </div>
                  </div>
                )}

                {/* Card content */}
                <div className={`p-8 ${plan.style === 'muted' ? 'opacity-90' : ''}`}>
                  {/* Plan header */}
                  <div className={`text-center mb-8 pb-8 border-b ${
                    plan.style === 'featured' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <h3 className={`text-2xl font-normal mb-2 ${
                      plan.style === 'featured' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="mt-4">
                      <span className={`text-3xl font-light ${
                        plan.style === 'featured' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${
                        plan.style === 'featured' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {plan.duration}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className={`text-sm mt-4 ${
                      plan.style === 'featured' ? 'text-gray-300' : 'text-gray-600'
                    } font-light`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.style === 'featured' ? 'text-green-400' : 'text-green-600'
                          }`} />
                        ) : (
                          <X className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.style === 'featured' ? 'text-gray-600' : 'text-gray-300'
                          }`} />
                        )}
                        <span className={`text-sm font-light ${
                          feature.included 
                            ? plan.style === 'featured' ? 'text-gray-200' : 'text-gray-700'
                            : plan.style === 'featured' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div>
                    <motion.button
                      onClick={() => handleEnroll(plan.id)}
                      className={`w-full py-4 rounded-full transition-all duration-300 group font-light flex items-center justify-center gap-2 ${
                        plan.style === 'featured'
                          ? 'bg-white text-gray-900 hover:bg-gray-100 text-base'
                          : 'bg-gray-900 text-white hover:bg-gray-800 text-sm'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.ctaText}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    
                    {/* Microcopy */}
                    {plan.microcopy && (
                      <p className={`text-xs text-center mt-3 ${
                        plan.style === 'featured' 
                          ? 'text-gray-400' 
                          : plan.style === 'muted'
                          ? 'text-red-600 font-medium'
                          : 'text-gray-500'
                      }`}>
                        {plan.microcopy}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>

          {/* Bottom notes */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 mb-4">
              All plans include lifetime access to updates • 30-day money-back guarantee on ETM Max
            </p>
            <p className="text-xs text-gray-400">
              Lite & Pro buyers can upgrade anytime for the difference in price
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Intercept Modal for Pro Plan */}
      <AnimatePresence>
        {showInterceptModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={() => setShowInterceptModal(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Modal Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💭</span>
                </div>
                
                {/* Message */}
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Add nightly live coaching for ₹1,000 more?
                </h3>
                
                <p className="text-base text-gray-600 mb-8 font-light">
                  9 out of 10 traders choose Max.
                </p>
                
                {/* Visual comparison */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Nightly 8 PM live sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Weekly performance reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Accountability pod (12 max)</span>
                    </div>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="space-y-3">
                  <motion.button
                    onClick={handleUpgradeToMax}
                    className="w-full py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-light"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Upgrade to Max
                  </motion.button>
                  
                  <button
                    onClick={handleProContinue}
                    className="w-full py-4 text-gray-500 hover:text-gray-700 transition-colors font-light text-sm"
                  >
                    Continue to Pro
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PricingSection;