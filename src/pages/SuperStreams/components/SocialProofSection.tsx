import React from 'react';
import { motion } from 'framer-motion';

const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      age: 28,
      location: "Mumbai",
      role: "Software Engineer",
      beforeIncome: "₹80K/month",
      afterIncome: "₹2.5L/month",
      quote: "I was losing money daily in trading. Sidhant's strategy completely changed my approach.",
      profit: "₹3.2L",
      timeframe: "6 months",
      verified: true,
      joinDate: "Nov 2024"
    },
    {
      name: "Priya Patel",
      age: 32,
      location: "Bangalore", 
      role: "Marketing Manager",
      beforeIncome: "₹1.2L/month",
      afterIncome: "₹2.8L/month",
      quote: "The psychology training was game-changing. Now I trade with confidence, not fear.",
      profit: "₹4.5L",
      timeframe: "8 months",
      verified: true,
      joinDate: "Sep 2024"
    },
    {
      name: "Amit Kumar",
      age: 25,
      location: "Delhi",
      role: "CA Student",
      beforeIncome: "₹0/month",
      afterIncome: "₹1.8L/month",
      quote: "Started from zero trading knowledge. Now trading is my primary income source.",
      profit: "₹2.8L",
      timeframe: "10 months",
      verified: true,
      joinDate: "Aug 2024"
    }
  ];

  const successMetrics = [
    {
      metric: "90%",
      label: "Success Rate",
      description: "Students achieving profitability"
    },
    {
      metric: "2.5X",
      label: "Average Growth",
      description: "In monthly trading income"
    },
    {
      metric: "247",
      label: "This Week",
      description: "New students enrolled"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Students, Real Results
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what students are achieving with our proven strategies.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-1">
                {metric.metric}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-1">
                {metric.label}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-slate-400 text-sm">
                      {testimonial.role}, {testimonial.age} • {testimonial.location}
                    </p>
                  </div>
                </div>
                
                {/* Verified Badge */}
                {testimonial.verified && (
                  <div className="flex items-center space-x-1 bg-green-500/20 border border-green-500/30 rounded-full px-2 py-1">
                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-400 text-xs">Verified</span>
                  </div>
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Results */}
              <div className="space-y-3">
                {/* Profit Display */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold">Total Profit:</span>
                    <span className="text-green-400 font-bold text-lg">{testimonial.profit}</span>
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    in {testimonial.timeframe}
                  </div>
                </div>

                {/* Income Growth */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center">
                    <div className="text-slate-400">Before</div>
                    <div className="text-white font-semibold">{testimonial.beforeIncome}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-400">After</div>
                    <div className="text-green-400 font-semibold">{testimonial.afterIncome}</div>
                  </div>
                </div>

                {/* Join Date */}
                <div className="text-xs text-slate-400 text-center">
                  Verified Student • Joined {testimonial.joinDate}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-slate-300 mb-6">
              Join hundreds of profitable traders who transformed their lives with proven strategies
            </p>
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg px-8 py-3 shadow-lg shadow-green-500/25 hover:scale-1.02 transition-transform"
            >
              Start Your Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection; 