import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingSection: React.FC = () => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  const [showMissingFeatures, setShowMissingFeatures] = useState<{ [key: string]: boolean }>({});

  const plans = [
    {
      id: 'first-profit',
      name: 'First Profit',
      subtitle: 'Start Your Journey',
      duration: '1 Month',
      price: '2,499',
      originalPrice: '4,999',
      savings: '50% OFF',
      popular: false,
      features: [
        'Daily live crypto trading streams',
        'Basic crypto community access',
        'Morning crypto market briefings',
        'Weekly crypto Q&A sessions',
        'Mobile app access'
      ],
      missingFeatures: [
        'Real-time crypto trade alerts',
        'Expert crypto mentor guidance',
        'VIP crypto trading streams',
        'Personal crypto portfolio management'
      ],
      bonus: '₹500 bonus course included',
      cta: 'Start Now',
      checkoutUrl: 'https://learn.tradingwithsidhant.com/web/checkout/67c148c52dc619259f041721?purchaseNow=true',
      psychology: 'Safe first step, ownership language',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'consistent-earner',
      name: 'Consistent Earner',
      subtitle: 'Most Popular',
      duration: '3 Months',
      price: '6,999',
      originalPrice: '14,999',
      savings: '53% OFF',
      popular: true,
      features: [
        'Everything in First Profit',
        'Premium crypto live streams',
        'Real-time crypto trade alerts',
        'Advanced crypto market analysis',
        'Priority crypto community access',
        'Expert crypto mentor guidance'
      ],
      missingFeatures: [
        'VIP crypto trading streams',
        'Live crypto trading with experts',
        'Personal crypto portfolio management',
        'Lifetime access to all crypto courses'
      ],
      bonus: '₹2,000 bonus courses + Live Q&A',
      cta: 'Get Started',
      checkoutUrl: 'https://learn.tradingwithsidhant.com/web/checkout/67c150877d6c64e363fcc523?purchaseNow=true',
      psychology: 'Social proof + results-focused',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'financial-freedom',
      name: 'Financial Freedom Elite',
      subtitle: 'Complete Mastery',
      duration: '12 Months',
      price: '21,999',
      originalPrice: '59,999',
      savings: '63% OFF',
      popular: false,
      features: [
        'Everything in Consistent Earner',
        'Exclusive crypto master streams',
        'VIP crypto trading streams 24/7',
        'Live crypto trading with experts',
        'Personal crypto portfolio management',
        'Lifetime access + All future crypto courses FREE'
      ],
      missingFeatures: [],
      bonus: '₹10,000 bonus + Premium indicators',
      cta: 'Join Elite',
      checkoutUrl: 'https://learn.tradingwithsidhant.com/web/checkout/67c1581b2b702df0195be657?purchaseNow=true',
      psychology: 'Exclusivity + premium positioning',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handlePlanSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setShowPaymentPopup(true);
  };

  const closePaymentPopup = () => {
    setShowPaymentPopup(false);
    setSelectedPlan(null);
  };

  return (
    <>
    <section id="pricing-section" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Choose Your Trading Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 px-2">
              From first profit to financial freedom - pick the path that matches your goals
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect border border-white/10">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-300">Limited Time - Prices Increase Soon</span>
            </div>
          </motion.div>

          {/* Social Proof Counter */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">
                23 people viewing this page • 7 joined in last hour
              </span>
            </div>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border transition-all ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-2xl shadow-green-500/20 lg:scale-105' 
                    : 'border-white/10 hover:border-white/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4">{plan.subtitle} • {plan.duration}</p>
                  
                  {/* Pricing with Anchoring */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl font-bold text-white">₹{plan.price}</span>
                      <span className="text-sm sm:text-base text-gray-500 line-through">₹{plan.originalPrice}</span>
                    </div>
                    <div className="text-green-400 text-sm font-semibold">{plan.savings}</div>
                  </div>

                  {/* Behavioral Bonus */}
                  <div className="glass-effect border border-green-500/30 rounded-lg p-2.5 sm:p-3 mb-4">
                    <p className="text-green-400 text-xs sm:text-sm font-medium">
                      🎁 {plan.bonus}
                    </p>
                  </div>
                </div>

                {/* Features with Psychology */}
                <ul className="space-y-2.5 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Missing Features with Mobile Toggle */}
                {plan.missingFeatures && plan.missingFeatures.length > 0 && (
                  <div className="mb-6">
                    {/* Mobile Toggle Button */}
                    <button
                      onClick={() => setShowMissingFeatures(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                      className="sm:hidden w-full text-left text-xs text-gray-500 mb-2 font-medium flex items-center justify-between py-2"
                    >
                      <span>What's not included</span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${showMissingFeatures[plan.id] ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Features List */}
                    <div className={`${showMissingFeatures[plan.id] ? 'block' : 'hidden'} sm:block`}>
                      <p className="hidden sm:block text-xs sm:text-sm text-gray-500 mb-2 font-medium">Not included:</p>
                      <ul className="space-y-1.5">
                        {plan.missingFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 opacity-50">
                            <svg className="w-3 h-3 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-gray-500 text-xs sm:text-sm line-through">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* Elite Plan Special Badge */}
                {plan.id === 'financial-freedom' && (
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-purple-400 text-xs sm:text-sm font-medium">Everything Included!</span>
                    </div>
                  </div>
                )}

                {/* Behavioral CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full font-semibold rounded-full py-3 sm:py-3.5 text-sm sm:text-base transition-all transform hover:scale-105 ${
                    plan.popular
                      ? `bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25`
                      : `glass-effect border border-white/20 text-white hover:border-white/30`
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Risk Reversal */}
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
                  7-day money back guarantee
                </p>

                {/* Social Proof Nudge */}
              </motion.div>
            ))}
          </div>

          {/* Value Proposition with Behavioral Anchoring */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 max-w-3xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Still deciding? Consider this...
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6">
                Join 500+ active traders who get real-time market insights daily. 
                Your membership pays for itself with just one winning trade.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">100% Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Instant Access</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Payment Popup */}
      <AnimatePresence>
        {showPaymentPopup && selectedPlan && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closePaymentPopup}
          >
            <motion.div
              className="bg-black rounded-2xl sm:rounded-3xl border border-white/20 w-full max-w-6xl h-[85vh] sm:h-[90vh] relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="glass-effect border-b border-white/10 p-3 sm:p-4 md:p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Complete Your Enrollment
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {selectedPlan.name} - {selectedPlan.duration}
                  </p>
                </div>
                <button
                  onClick={closePaymentPopup}
                  className="text-gray-400 hover:text-white transition-colors p-2.5 sm:p-2 hover:bg-white/10 rounded-full"
                  aria-label="Close payment popup"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Iframe */}
              <div className="relative h-[calc(100%-60px)] sm:h-[calc(100%-80px)]">
                <iframe
                  src={selectedPlan.checkoutUrl}
                  className="w-full h-full"
                  title="Payment Checkout"
                  onLoad={() => {
                    // Hide loading overlay when iframe loads
                    const loadingOverlay = document.getElementById('payment-loading');
                    if (loadingOverlay) {
                      loadingOverlay.style.display = 'none';
                    }
                  }}
                />
                
                {/* Loading Overlay */}
                <div 
                  id="payment-loading"
                  className="absolute inset-0 flex items-center justify-center bg-black/50"
                >
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                    <p className="text-white text-sm">Loading secure checkout...</p>
                  </div>
                </div>
              </div>

              {/* Security Badge - Mobile friendly */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure SSL</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PricingSection; 