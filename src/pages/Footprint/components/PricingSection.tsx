import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, BookOpen, Shield, Award, Zap, ChartBar } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { getNextFirstSaturdayWithOrdinal } from '../../Crypto/utils/dateHelpers';

const PricingSection: React.FC = () => {
  const nextSession = getNextFirstSaturdayWithOrdinal();
  
  const features = [
    {
      icon: BookOpen,
      title: "10 Comprehensive Modules",
      description: "F.A.S.T. framework systematically taught"
    },
    {
      icon: Users,
      title: "Monthly Live Q&A Sessions",
      description: `Next: ${nextSession} (recordings provided)`
    },
    {
      icon: ChartBar,
      title: "Real Footprint Analysis",
      description: "Live market examples and case studies"
    },
    {
      icon: Shield,
      title: "Risk Management Tools",
      description: "Position sizing calculator & templates"
    },
    {
      icon: Award,
      title: "Entry Checklist System",
      description: "1-page systematic entry framework"
    },
    {
      icon: Zap,
      title: "Community Access",
      description: "Connect with serious footprint traders"
    }
  ];

  const guarantees = [
    "30-day satisfaction guarantee",
    "Lifetime access to all content",
    "Future updates included free",
    "EMI options 3-24 months"
  ];

  return (
    <section id="pricing" className="section bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center mb-4">
              Master <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Footprint Trading</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Stop guessing. Start reading order flow like institutional traders.
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-linear-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20 overflow-hidden">
              {/* Price Header */}
              <div className="bg-linear-to-r from-cyan-900/20 to-teal-900/20 p-8 border-b border-cyan-500/20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Footprint Mastery Program</h3>
                    <p className="text-slate-300">Complete order flow education system</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="flex items-baseline gap-2 justify-center md:justify-end">
                      <span className="text-slate-400 line-through text-lg">₹1,50,000</span>
                      <span className="text-3xl font-bold text-cyan-400">₹34,997</span>
                    </div>
                    <p className="text-sm text-amber-400 mt-1">Limited time offer</p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  What's Included
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white text-sm mb-1">{feature.title}</h5>
                        <p className="text-xs text-slate-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Guarantees */}
                <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <h4 className="font-semibold text-white">Your Investment is Protected</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {guarantees.map((guarantee, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-sm text-slate-300">{guarantee}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Limited Seats Notice */}
                <motion.div 
                  className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-400 mb-1">Limited Monthly Seats</p>
                      <p className="text-xs text-slate-300">
                        Q&A sessions are capped to ensure quality interaction. Secure your spot before the next batch fills.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <div className="text-center">
                  <motion.button 
                    onClick={handlePaymentPopup}
                    className="px-8 py-4 bg-linear-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-lg text-lg hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg shadow-cyan-500/25 mb-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Footprint Journey
                    <span className="block text-sm font-normal mt-1 opacity-90">
                      Instant access • Lifetime updates
                    </span>
                  </motion.button>
                  
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Join 1,263+ traders who stopped guessing and started reading order flow systematically
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Trust Elements */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-slate-400 mb-2">
              ✓ No recurring fees • ✓ No upsells • ✓ Complete program
            </p>
            <p className="text-xs text-slate-500 italic">
              Educational content only. Not investment advice. Results vary with practice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;