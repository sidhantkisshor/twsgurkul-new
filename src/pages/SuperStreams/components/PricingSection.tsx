import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const plans = [
    {
      id: 'first-profit',
      name: 'First Profit',
      subtitle: 'Foundation Journey',
      duration: '1 Month',
      price: '2,499',
      originalPrice: '4,999',
      savings: '50% OFF',
      popular: false,
      features: [
        'Daily live market streams',
        'Basic community access',
        'Morning market briefings',
        'Weekly Q&A sessions',
        'Mobile app access'
      ],
      bonus: '₹500 bonus course included',
      cta: 'Start My First Profit Journey',
      checkoutUrl: 'https://learn.tradingwithsidhant.com/web/checkout/67c148c52dc619259f041721?purchaseNow=true',
      psychology: 'Safe first step, ownership language',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'consistent-earner',
      name: 'Consistent Earner',
      subtitle: 'Growth Program',
      duration: '3 Months',
      price: '6,999',
      originalPrice: '14,999',
      savings: '53% OFF',
      popular: true,
      features: [
        'Everything in First Profit',
        'Premium live streams',
        'Real-time trade alerts',
        'Advanced market analysis',
        'Priority community access',
        'Expert mentor guidance'
      ],
      bonus: '₹2,000 bonus courses + Live Q&A',
      cta: 'Become a Consistent Earner Today',
      checkoutUrl: 'https://learn.tradingwithsidhant.com/web/checkout/67c150877d6c64e363fcc523?purchaseNow=true',
      psychology: 'Social proof + results-focused',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'job-replacement',
      name: 'Job Replacement',
      subtitle: 'Transformation Plan',
      duration: '6 Months',
      price: '11,999',
      originalPrice: '29,999',
      savings: '60% OFF',
      popular: false,
      features: [
        'Everything in Consistent Earner',
        'VIP live stream access',
        'Personal trading reviews',
        'Advanced market signals',
        'Direct expert chat access',
        'Custom watchlist alerts'
      ],
      bonus: '₹5,000 bonus + Premium indicators',
      cta: 'Begin My Job Replacement Plan',
      checkoutUrl: 'https://learn.tradingwithsidhant.com/web/checkout/67c1532bed36f445ab4c2dd1?purchaseNow=true',
      psychology: 'Professional advancement focus',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'financial-freedom',
      name: 'Financial Freedom Elite',
      subtitle: 'Mastery Program',
      duration: '12 Months',
      price: '21,999',
      originalPrice: '59,999',
      savings: '63% OFF',
      popular: false,
      features: [
        'Everything in Job Replacement',
        'Exclusive master streams',
        'Live trading with experts',
        'Market maker insights',
        'Lifetime access guarantee',
        'Personal portfolio management'
      ],
      bonus: '₹10,000 bonus + All future courses FREE',
      cta: 'Join the Financial Freedom Elite',
      checkoutUrl: 'https://learn.tradingwithsidhant.com/web/checkout/67c1581b2b702df0195be657?purchaseNow=true',
      psychology: 'Exclusivity + premium positioning',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handlePlanSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan.id);
    setCheckoutUrl(plan.checkoutUrl);
    setShowCheckoutPopup(true);
  };

  const closePopup = () => {
    setShowCheckoutPopup(false);
    setSelectedPlan(null);
    setCheckoutUrl('');
  };

  const openCheckoutInNewTab = () => {
    window.open(checkoutUrl, '_blank');
    closePopup();
  };

  return (
    <>
      <section id="pricing-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Choose Your Trading Journey
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-4">
              From first profit to financial freedom - pick the path that matches your goals
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-4 py-2 rounded-full font-bold">
              <span>🔥</span>
              <span>Limited Time - Prices Increase Soon</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border p-6 ${
                  plan.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/50 transform scale-105' 
                    : 'border-slate-700/50'
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
                    <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                      MOST CHOSEN PLAN
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{plan.subtitle} • {plan.duration}</p>
                  
                  {/* Pricing with Anchoring */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-white">₹{plan.price}</span>
                      <span className="text-lg text-slate-400 line-through">₹{plan.originalPrice}</span>
                    </div>
                    <div className="text-green-400 font-semibold">{plan.savings}</div>
                  </div>

                  {/* Behavioral Bonus */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                    <p className="text-green-400 text-sm font-semibold">
                      🎁 {plan.bonus}
                    </p>
                  </div>
                </div>

                {/* Features with Psychology */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Behavioral CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full font-semibold rounded-lg py-3 transition-all ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-lg shadow-orange-500/25 hover:scale-1.02 animate-pulse`
                      : `bg-gradient-to-r ${plan.color} text-white hover:scale-1.02 shadow-lg`
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Risk Reversal */}
                <p className="text-center text-xs text-slate-400 mt-3">
                  30-day money back guarantee
                </p>

                {/* Social Proof Nudge */}
                <div className="text-center mt-2">
                  <span className="text-xs text-slate-500">
                    {plan.id === 'first-profit' && 'Join 500+ First Profit graduates'}
                    {plan.id === 'consistent-earner' && 'Join 200+ Consistent Earners'}
                    {plan.id === 'job-replacement' && '50+ successful Job Replacers'}
                    {plan.id === 'financial-freedom' && 'Exclusive Elite community'}
                  </span>
                </div>
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
            <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Still deciding? Consider this...
              </h3>
              <p className="text-slate-300 mb-4">
                Join 500+ active traders who get real-time market insights daily. 
                Your membership pays for itself with just one winning trade.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300">100% Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300">No Hidden Charges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300">Instant Access</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comparison Nudge */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="text-yellow-400 hover:text-yellow-300 underline text-sm">
              Not sure? Compare all benefits side-by-side
            </button>
          </motion.div>
        </div>
      </section>

      {/* Checkout Popup */}
      {showCheckoutPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 max-w-md w-full relative"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-slate-300 mb-6">
                You're about to join hundreds of successful traders. Click below to complete your enrollment.
              </p>

              <div className="space-y-3">
                <button
                  onClick={openCheckoutInNewTab}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg py-3 shadow-lg shadow-green-500/25 hover:scale-1.02 transition-transform"
                >
                  Complete My Enrollment
                </button>
                
                <button
                  onClick={closePopup}
                  className="w-full bg-slate-700/50 text-slate-300 font-semibold rounded-lg py-3 hover:bg-slate-700 transition-colors"
                >
                  Let me think about it
                </button>
              </div>

              <p className="text-xs text-slate-400 mt-4">
                🔒 Secure checkout • 30-day guarantee • Instant access
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PricingSection; 