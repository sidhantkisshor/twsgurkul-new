import React from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Clock } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { useWhaleTracker } from '../hooks/useWhaleTracker';

const Footer: React.FC = () => {
  const whaleData = useWhaleTracker();
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-br from-cyan-400 to-teal-500 p-2 rounded-lg">
                  <Activity className="w-5 h-5 text-slate-900" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold font-mono bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">WHALE</span>
                <span className="text-lg font-bold text-white ml-1 font-mono">TRACKER</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#mechanism" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                W.H.A.L.E System
              </a>
              <a href="#testimonials" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                Success Stories
              </a>
              <a href="#pricing" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                Get Access
              </a>
              <a href="mailto:support@whaletracker.io" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                Support
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <p className="text-lg font-bold text-red-400">FINAL WARNING</p>
              </div>
              <p className="text-slate-300 mb-3">
                <span className="font-bold text-yellow-400">Right now:</span> {whaleData.btc?.whaleOrders.length || 0} whale orders worth {whaleData.btc?.largestBuyOrder ? `${(whaleData.btc.largestBuyOrder.total / 1000000).toFixed(0)}M+` : '$100M+'} are building on Binance.
              </p>
              <p className="text-slate-300 mb-4">
                <span className="font-bold text-cyan-400">In {whaleData.countdown}:</span> These orders execute. My 873 students profit. You? You'll watch from the sidelines... again.
              </p>
              <p className="text-sm text-slate-400 italic">
                This page self-destructs when Binance forces shutdown. <span className="text-red-400 font-bold">Only {7} spots remain.</span>
              </p>
            </div>
            
            <div className="mb-8">
              <button onClick={handlePaymentPopup} className="group relative px-8 py-4 font-semibold rounded-lg overflow-hidden text-lg bg-transparent border-2 border-cyan-500">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-mono">
                  <Clock className="w-5 h-5" />
                  ACTIVATE WHALE TRACKER NOW - $497
                </span>
              </button>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Whale Tracker System | NOT affiliated with Binance
              </p>
              <p className="text-xs text-slate-600">
                Risk Disclosure: Trading involves substantial risk. Past performance doesn't guarantee future results.
              </p>
              <p className="text-xs text-slate-600">
                We use Binance public API for real-time data. Whale detection algorithm is proprietary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;