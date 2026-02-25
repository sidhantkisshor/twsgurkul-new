import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, MessageCircle, TrendingUp, Award, Users, Youtube, Instagram, Send, Linkedin } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { useWhaleTracker } from '../hooks/useWhaleTracker';
import { formatCurrency } from '../../../services/binanceV2';
import { WHATSAPP_NUMBER } from '../../../constants';

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Footprint%20Mastery`;

const HeroSection: React.FC = () => {
  const whaleData = useWhaleTracker();

  const largestWhaleOrder = whaleData.btc?.largestBuyOrder || null;
  const largestSellOrder = whaleData.btc?.largestSellOrder || null;
  const btcPrice = whaleData.btc?.price || 42000;
  const btcChange = whaleData.btc?.priceChange24h || 0;
  const ethChange = whaleData.eth?.priceChange24h || 0;

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Background — darker base for text contrast */}
      <div className="absolute inset-0 bg-[#1A2226]">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(200,117,51,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Instructor credibility bar */}
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/sidhant-casino-chips.png"
                alt="Sidhant Kisshor"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-top shadow-lg shadow-[#C87533]/30 shrink-0"
              />
              <div>
                <p className="text-sm sm:text-base font-semibold text-white">Sidhant Kisshor</p>
                <p className="text-xs text-[#D0C5B4]">
                  <a href="https://www.youtube.com/watch?v=kUloX27rFvk" target="_blank" rel="noopener noreferrer" className="hover:text-[#C87533] transition-colors underline underline-offset-2">TEDx Speaker</a>
                  {' · '}Trading since 2017 · 1,263+ students
                </p>
                <div className="flex items-center gap-1 mt-1 -ml-2">
                  <a
                    href="https://youtube.com/@tradingwithsidhant"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube channel"
                    className="inline-flex items-center justify-center w-[44px] h-[44px] text-[#D0C5B4] hover:text-[#C87533] transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com/twsgurukul"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile"
                    className="inline-flex items-center justify-center w-[44px] h-[44px] text-[#D0C5B4] hover:text-[#C87533] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sidhant-kisshor"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex items-center justify-center w-[44px] h-[44px] text-[#D0C5B4] hover:text-[#C87533] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://t.me/tradingwsidhant"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram channel"
                    className="inline-flex items-center justify-center w-[44px] h-[44px] text-[#D0C5B4] hover:text-[#C87533] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Headline — simple, benefit-driven */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                <span className="font-sans font-bold text-white">Tired of watching the move happen&nbsp;— </span>
                <span className="font-serif italic font-normal text-[#D4943F]">after you already exited?</span>
              </h1>

              <p className="text-base lg:text-lg text-[#D0C5B4] leading-relaxed">
                In 6 weeks, go from retail guesswork to reading institutional order flow — using the F.A.S.T. framework trusted by 1,263+ traders.
              </p>
              <p className="text-sm text-[#D0C5B4]">
                Recorded course + monthly live Q&A + lifetime access.
                <span className="font-serif italic text-[#D4943F] font-medium ml-1">Starting at just ₹90/day.</span>
              </p>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A8D7A]/15 border border-[#0A8D7A]/30 rounded-full text-xs text-[#3DD9C4] font-medium">
                <TrendingUp className="w-3 h-3" /> 73% win rate (1,847 tracked trades)*
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C87533]/15 border border-[#C87533]/30 rounded-full text-xs text-[#D4943F] font-medium">
                <Award className="w-3 h-3" /> ₹27.2 Cr student-reported profits*
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#B8956A]/15 border border-[#B8956A]/30 rounded-full text-xs text-[#D0C5B4] font-medium">
                <Users className="w-3 h-3" /> 7-day refund policy
              </span>
            </div>
            <p className="text-xs text-[#8A9199]">*Past performance is not indicative of future results. Individual results vary.</p>

            {/* CTA Buttons — Mobile */}
            <div className="flex flex-col gap-3 md:hidden">
              <motion.button
                onClick={handlePaymentPopup}
                className="w-full px-4 py-3.5 font-bold rounded-full text-sm bg-[#C87533] hover:bg-[#A85E28] text-white shadow-lg shadow-[#C87533]/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start reading order flow →
              </motion.button>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-full text-sm bg-wealth-teal/10 border-2 border-wealth-teal/30 text-wealth-teal hover:bg-wealth-teal/20 transition-all text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
                Talk to us on WhatsApp
              </motion.a>
            </div>

            {/* CTA Buttons — Desktop */}
            <div className="hidden md:flex gap-4">
              <motion.button
                onClick={handlePaymentPopup}
                className="px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full text-base sm:text-lg bg-[#C87533] hover:bg-[#A85E28] text-white shadow-lg shadow-[#C87533]/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start reading order flow →
              </motion.button>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full text-base sm:text-lg bg-wealth-teal/10 border-2 border-wealth-teal/30 text-wealth-teal hover:bg-wealth-teal/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Ask on WhatsApp
              </motion.a>
            </div>


          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Ambient glow background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0A8D7A]/10 via-transparent to-[#C87533]/10 rounded-3xl blur-2xl" />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] rounded-2xl pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(200,117,51,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,117,51,0.5) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Main card with glass morphism */}
            <div className="relative backdrop-blur-xl rounded-2xl overflow-hidden border border-[#0A8D7A]/40 shadow-2xl shadow-[#0A8D7A]/20">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0A8D7A]/0 via-[#0A8D7A]/30 to-[#0A8D7A]/0 opacity-50 animate-pulse" />

              {/* Inner content container */}
              <div className="relative bg-[#0B1221]/95 p-5 sm:p-7">
                {/* Header */}
                <motion.div
                  className="mb-6 pb-4 border-b border-[#0A8D7A]/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-base sm:text-lg mb-1">
                    <span className="font-sans font-bold text-white">Live </span>
                    <span className="font-serif italic font-normal text-[#D4943F]">Order Flow</span>
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#8A9199] font-sans tracking-wide uppercase">
                    Footprint · Delta · Absorption
                  </p>
                </motion.div>

                {/* Order book visualization */}
                <div className="space-y-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-sans font-semibold text-[#B8A99A] tracking-wide">BTC/USDT</span>
                      <span className={`text-xs font-bold font-mono ${btcChange > 0 ? 'text-[#0A8D7A]' : 'text-[#E5484D]'}`}>
                        {btcChange > 0 ? '▲' : '▼'} {Math.abs(btcChange).toFixed(2)}%
                      </span>
                    </div>
                    <div className="relative h-12 bg-gradient-to-r from-[#0A8D7A]/5 to-transparent rounded-lg overflow-hidden border border-[#0A8D7A]/20">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0A8D7A] to-[#0A8D7A]/70"
                        initial={{ width: "0%" }}
                        animate={{ width: `${Math.min(75, largestWhaleOrder ? (largestWhaleOrder.total / (largestWhaleOrder.total + (largestSellOrder?.total || 0))) * 100 : 60)}%` }}
                        transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <span className="relative z-10 text-xs sm:text-sm font-mono font-bold text-white drop-shadow-lg">
                          {largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : '—'}
                        </span>
                        <span className="text-[10px] sm:text-xs font-sans text-[#0A8D7A] font-bold tracking-wider">BID</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-sans font-semibold text-[#B8A99A] tracking-wide">ETH/USDT</span>
                      <span className={`text-xs font-bold font-mono ${ethChange > 0 ? 'text-[#0A8D7A]' : 'text-[#E5484D]'}`}>
                        {ethChange > 0 ? '▲' : '▼'} {Math.abs(ethChange).toFixed(2)}%
                      </span>
                    </div>
                    <div className="relative h-12 bg-gradient-to-l from-[#E5484D]/5 to-transparent rounded-lg overflow-hidden border border-[#E5484D]/20">
                      <motion.div
                        className="absolute inset-y-0 right-0 bg-gradient-to-l from-[#E5484D] to-[#E5484D]/70"
                        initial={{ width: "0%" }}
                        animate={{ width: ["0%", "48%"] }}
                        transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <span className="text-[10px] sm:text-xs font-sans text-[#E5484D] font-bold tracking-wider">ASK</span>
                        <span className="relative z-10 text-xs sm:text-sm font-mono font-bold text-white drop-shadow-lg">
                          {whaleData.eth?.largestSellOrder ? formatCurrency(whaleData.eth.largestSellOrder.total) : '—'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Delta metrics */}
                <motion.div
                  className="grid grid-cols-2 gap-4 pt-5 border-t border-[#3A4449]/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0A8D7A]" />
                      <span className="text-[10px] sm:text-xs text-[#8A9199] font-sans font-semibold uppercase tracking-wider">Delta</span>
                    </div>
                    <motion.div
                      className="font-mono text-lg sm:text-xl font-bold text-[#0A8D7A]"
                      animate={{
                        textShadow: ['0 0 0px rgba(10,141,122,0)', '0 0 12px rgba(10,141,122,0.6)', '0 0 0px rgba(10,141,122,0)']
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {whaleData.btc && whaleData.btc.buyPressure ?
                        `${whaleData.btc.buyPressure > whaleData.btc.sellPressure ? '+' : '-'}${Math.abs(whaleData.btc.buyPressure - whaleData.btc.sellPressure).toFixed(1)}%` :
                        '+2.3%'}
                    </motion.div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C87533]" />
                      <span className="text-[10px] sm:text-xs text-[#8A9199] font-sans font-semibold uppercase tracking-wider">Absorption</span>
                    </div>
                    <motion.div
                      className="font-mono text-[10px] sm:text-xs font-bold text-[#D4943F]"
                      animate={{
                        textShadow: ['0 0 0px rgba(212,148,63,0)', '0 0 12px rgba(212,148,63,0.6)', '0 0 0px rgba(212,148,63,0)']
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                    >
                      ${(btcPrice - 500).toLocaleString()}
                      <br />
                      ${(btcPrice + 200).toLocaleString()}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  className="mt-5 pt-4 border-t border-[#3A4449]/50 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <p className="text-[10px] text-[#6B7280] font-sans max-w-[70%]">
                    Live demonstration. Course includes practice on real markets.
                  </p>
                  <div className="flex items-center gap-1.5 text-[#B8956A]">
                    <BarChart3 className="w-4 h-4" strokeWidth={2} />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A8D7A] to-[#0A8D7A]/50 rounded-full blur-lg opacity-60" />
                <div className="relative bg-gradient-to-br from-[#0A8D7A] to-[#077A6A] px-4 py-2 rounded-full border-2 border-[#3DD9C4]/40 shadow-xl">
                  <span className="font-sans text-xs sm:text-sm font-bold text-white tracking-wider drop-shadow-lg">
                    LIVE DATA
                  </span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
