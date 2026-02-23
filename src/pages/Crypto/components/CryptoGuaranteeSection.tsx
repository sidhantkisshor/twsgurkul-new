import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, HeartHandshake, AlertTriangle } from 'lucide-react';

interface Guarantee {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
  color: string;
}

const CryptoGuaranteeSection: React.FC = () => {
  const guarantees: Guarantee[] = [
    {
      icon: Shield,
      title: "30-Day Satisfaction Guarantee",
      description: "Go through the first 4 modules and exercises. If it's not worth it, email support within 30 days for",
      highlight: "full refund. No hidden conditions.",
      color: "green"
    },
    {
      icon: RefreshCw,
      title: "Lifetime Updates",
      description: "Crypto changes fast. Get all strategy updates & new features",
      highlight: "forever FREE",
      color: "blue"
    },
    {
      icon: HeartHandshake,
      title: "No Hidden Upsells",
      description: "One price. Everything included. No 'advanced' course tricks.",
      highlight: "complete access",
      color: "yellow"
    },
    {
      icon: AlertTriangle,
      title: "Education on Common Scams",
      description: "Learn to identify pump & dump schemes and protect yourself from",
      highlight: "common trading scams",
      color: "red"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF1E0]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#0A8D7A]/10 border border-[#0A8D7A]/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-[#0A8D7A]" />
            <span className="text-sm font-medium text-[#0A8D7A]">Your Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C3539]">
            <span className="text-[#2C3539]">30-Day</span> Satisfaction Guarantee
          </h2>
          <p className="text-lg text-[#111111]/60 max-w-2xl mx-auto">
            We're confident in our system. Try it risk-free.
          </p>
        </motion.div>

        {/* Single merged guarantee card */}
        <motion.div
          className="bg-[#FAF8F5] rounded-2xl p-8 border border-[rgba(44,53,57,0.08)] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0A8D7A]">Your Guarantee</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#0A8D7A] mt-1">✓</span>
                  <span className="text-[#111111]/60">Go through first 4 modules</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0A8D7A] mt-1">✓</span>
                  <span className="text-[#111111]/60">If not satisfied, email within 30 days</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0A8D7A] mt-1">✓</span>
                  <span className="text-[#111111]/60">Full refund, no questions asked</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2C3539]">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-[#0A8D7A] mt-1" />
                  <span className="text-[#111111]/60">Lifetime updates - strategies evolve with market</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-[#0A8D7A] mt-1" />
                  <span className="text-[#111111]/60">No hidden upsells - everything included</span>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-[#0A8D7A] mt-1" />
                  <span className="text-[#111111]/60">Learn to identify & avoid pump-dump scams</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-[rgba(44,53,57,0.08)] text-center">
            <p className="text-sm text-[#111111]/60">
              Protected by secure payment gateway • Your data is safe
            </p>
          </div>
        </motion.div>

        {/* Bottom Trust Signal */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-[#111111]/60">
            <span className="text-[#B8956A] font-semibold">1,263 students</span> trusted us.
            <span className="text-[#0A8D7A] font-semibold">High satisfaction rate</span> based on student feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoGuaranteeSection;