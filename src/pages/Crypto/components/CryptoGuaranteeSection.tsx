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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900/50 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 glass-effect border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-400">Your Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-yellow-400">30-Day</span> Satisfaction Guarantee
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We're confident in our system. Try it risk-free.
          </p>
        </motion.div>

        {/* Single merged guarantee card */}
        <motion.div
          className="glass-effect rounded-2xl p-8 border border-green-500/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-400">Your Guarantee</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-slate-300">Go through first 4 modules</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-slate-300">If not satisfied, email within 30 days</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-slate-300">Full refund, no questions asked</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-blue-400 mt-1" />
                  <span className="text-slate-300">Lifetime updates - strategies evolve with market</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-yellow-400 mt-1" />
                  <span className="text-slate-300">No hidden upsells - everything included</span>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-1" />
                  <span className="text-slate-300">Learn to identify & avoid pump-dump scams</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-slate-400">
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
          <p className="text-sm text-slate-400">
            <span className="text-yellow-400 font-semibold">1,263 students</span> trusted us. 
            <span className="text-green-400 font-semibold">High satisfaction rate</span> based on student feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoGuaranteeSection;