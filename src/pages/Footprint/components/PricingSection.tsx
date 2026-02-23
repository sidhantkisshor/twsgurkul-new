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
    <section id="pricing" className="relative py-20 bg-[#2C3539] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-[#C87533]/5 rounded-full blur-3xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#EDE6D8] text-center mb-4">
              Master <span className="text-[#C87533]">Footprint Trading</span>
            </h2>
            <p className="text-lg text-[#B8A99A] max-w-2xl mx-auto">
              Stop guessing. Start reading order flow like institutional traders.
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#3A4449]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#C87533]/30 shadow-xl shadow-[#C87533]/5 relative">
              {/* Price Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#EDE6D8] mb-2">Footprint Mastery Program</h3>
                <p className="text-[#B8A99A] mb-4">Complete order flow education system</p>
                <div className="flex items-baseline gap-3 justify-center">
                  <span className="text-[#B8A99A] line-through text-lg">₹1,50,000</span>
                  <span className="text-5xl font-bold text-[#EDE6D8]">₹34,997</span>
                </div>
                <p className="text-sm text-[#E5484D] font-medium mt-2">Limited time offer</p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#EDE6D8] mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#C87533]" />
                  What's Included
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4 bg-[#2C3539]/60 rounded-lg p-4 border border-[#0A8D7A]/10 hover:border-[#C87533]/30 transition-colors"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-[#0A8D7A]/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-[#0A8D7A]" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#EDE6D8] text-sm mb-1">{feature.title}</h5>
                        <p className="text-xs text-[#B8A99A]">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-[#2C3539]/60 rounded-lg p-6 border border-[#B8956A]/20 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#B8956A]" />
                  <h4 className="font-semibold text-[#EDE6D8]">Your Investment is Protected</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0A8D7A] shrink-0" />
                      <span className="text-sm text-[#EDE6D8]">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee Badges */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center mb-8">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B8956A]/30 text-[#B8956A] text-sm">
                  <Shield className="w-4 h-4" /> 30-Day Guarantee
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B8956A]/30 text-[#B8956A] text-sm">
                  <Clock className="w-4 h-4" /> Lifetime Access
                </span>
              </div>

              {/* Limited Seats Notice */}
              <motion.div
                className="bg-[#E5484D]/10 border border-[#E5484D]/30 rounded-lg p-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E5484D] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#E5484D] text-sm font-medium mb-1">Limited Monthly Seats</p>
                    <p className="text-xs text-[#B8A99A]">
                      Q&A sessions are capped to ensure quality interaction. Secure your spot before the next batch fills.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <div className="text-center">
                <motion.button
                  onClick={handlePaymentPopup}
                  className="w-full bg-[#C87533] hover:bg-[#A85E28] text-white font-bold py-4 rounded-full shadow-lg shadow-[#C87533]/25 transition-all text-lg mb-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Footprint Journey
                  <span className="block text-sm font-normal mt-1 opacity-90">
                    Instant access · Lifetime updates
                  </span>
                </motion.button>

                <p className="text-[#B8A99A] text-xs max-w-md mx-auto">
                  Join 1,263+ traders who stopped guessing and started reading order flow systematically
                </p>
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
            <p className="text-[#B8A99A] text-xs mb-2">
              No recurring fees · No upsells · Complete program
            </p>
            <p className="text-[#B8A99A] text-xs italic">
              Educational content only. Not investment advice. Results vary with practice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
