import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, HeartHandshake, AlertTriangle } from 'lucide-react';

const CryptoGuaranteeSection: React.FC = () => {
  return (
    <section className="crypto-section bg-[#2C3539] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#0A8D7A]/[0.10] border border-[#0A8D7A]/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-[#0A8D7A]" />
            <span className="text-sm font-medium text-[#0A8D7A]">Your Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">
            <span className="font-sans font-bold text-white">We Stand Behind Our</span>{' '}
            <span className="font-serif italic font-normal text-[#C87533]">Program</span>
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Your investment is protected. See our{' '}
            <a href="/refunds" className="text-[#0A8D7A] underline hover:text-[#0A8D7A]/80 transition-colors inline-flex items-center min-h-[44px]">
              refund policy
            </a>{' '}
            for full details.
          </p>
        </motion.div>

        {/* What's included card */}
        <motion.div
          className="bg-[#232b2f] border border-white/10 rounded-2xl p-5 sm:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">What's Included</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-[#0A8D7A] mt-1 shrink-0" />
                  <span className="text-white/60 text-sm">3 monthly live sessions included — ask questions, review trades, stay sharp</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-[#0A8D7A] mt-1 shrink-0" />
                  <span className="text-white/60 text-sm">No hidden upsells. Everything included in one price.</span>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-[#0A8D7A] mt-1 shrink-0" />
                  <span className="text-white/60 text-sm">Learn to identify and avoid pump-dump scams</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Refund Protection</h3>
              <p className="text-white/60 text-sm">
                We offer refunds as per our published refund policy. Please review the{' '}
                <a href="/refunds" className="text-[#0A8D7A] underline hover:text-[#0A8D7A]/80 transition-colors inline-flex items-center min-h-[44px]">
                  full refund policy
                </a>{' '}
                before enrolling for complete terms and conditions.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/40">
              Protected by secure payment gateway. Your data is safe.
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
          <p className="text-sm text-white/40">
            <span className="text-[#C87533] font-semibold">1,263 students</span> enrolled.{' '}
            <span className="text-[#0A8D7A] font-semibold">High satisfaction rate</span> based on student feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoGuaranteeSection;
