import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, HeartHandshake, AlertTriangle } from 'lucide-react';
import { MARKETING_CONSTANTS } from '../../common/marketing';

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
      title: MARKETING_CONSTANTS.refund.headline,
      description: MARKETING_CONSTANTS.refund.blurb,
      highlight: "",
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
      highlight: "₹19,499 only",
      color: "yellow"
    },
    {
      icon: AlertTriangle,
      title: "Scam Protection Promise",
      description: "We'll expose every pump & dump scheme. Never lose to",
      highlight: "fake gurus again",
      color: "red"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 glass-effect border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-400">Risk-Free Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-yellow-400">Iron-Clad</span> Guarantees
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We're so confident in our system, we're putting OUR money where our mouth is
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              className="glass-effect rounded-xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-${guarantee.color}-500/10 border border-${guarantee.color}-500/20`}>
                  <guarantee.icon className={`w-6 h-6 text-${guarantee.color}-400`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                  <p className="text-slate-300">
                    {guarantee.description} <span className={`text-${guarantee.color}-400 font-bold`}>{guarantee.highlight}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Risk Reversal */}
        <motion.div
          className="glass-effect rounded-2xl p-8 border border-yellow-500/20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center border-2 border-yellow-500/30">
                <Shield className="w-10 h-10 text-yellow-400" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold mb-4">
              The <span className="text-yellow-400">"You Can't Lose"</span> Promise
            </h3>
            
            <div className="max-w-2xl mx-auto space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>Try the full course for 30 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>Follow our exact system (just 2 hours daily)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>If you don't see profits = Full refund</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>No questions asked. No "terms & conditions" tricks.</span>
              </div>
            </div>

            <motion.div
              className="mt-8 inline-flex items-center gap-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm text-slate-400">Protected by</span>
              <img src="https://cdn.razorpay.com/static/assets/logo/payment.svg" alt="Razorpay" className="h-6 opacity-60" />
              <span className="text-sm text-slate-400">Secure Payment</span>
            </motion.div>
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
            <span className="text-green-400 font-semibold"> 90%</span> are profitable. 
            <span className="text-red-400 font-semibold"> 0</span> refund requests.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoGuaranteeSection;