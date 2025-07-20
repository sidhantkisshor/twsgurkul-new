import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Users, BookOpen, ArrowRight, AlertCircle, Clock, Activity, Shield } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { urgencyData } from '../data';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section bg-slate-900 relative">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll font-mono">
            ACCESS <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">INSTITUTIONAL GRADE</span> SYSTEM
          </h2>
          
          <motion.div 
            className="bg-slate-900/80 border border-cyan-500/30 rounded-lg p-4 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 font-mono">
              <AlertCircle className="text-cyan-400" size={24} />
              <p className="text-cyan-400 font-semibold">
                [ALERT] Price: {urgencyData.priceIncrease.newPrice} after {urgencyData.priceIncrease.date} | Seats: {urgencyData.seatsLeft}/100
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-900/90 backdrop-blur-xl rounded-xl p-6 md:p-10 border border-cyan-500/20 shadow-xl shadow-cyan-500/10 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <div className="mb-2">
                  <span className="text-lg text-slate-400 line-through mr-3">$2,997</span>
                  <span className="text-2xl md:text-3xl font-bold text-amber-500">$497</span>
                  <span className="text-sm text-green-500 ml-2">Save $2,500 (TODAY ONLY)</span>
                </div>
                <p className="text-lg text-slate-300">Less than what whales steal from you in ONE trade</p>
                <p className="text-sm text-yellow-400 mt-2 flex items-center gap-2">
                  <Clock size={16} />
                  {urgencyData.bonusDeadline}: FREE {urgencyData.bonusDescription} (Worth {urgencyData.bonusValue})
                </p>
              </div>
              
              <div className="mt-6 md:mt-0">
                <button onClick={handlePaymentPopup} className="cta-button-primary text-lg">
                  ACTIVATE WHALE TRACKER NOW
                </button>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mb-6 text-white">What You Get:</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-2 mr-4">
                  <BookOpen className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-white">Lifetime Access</p>
                  <p className="text-slate-300">to all 10 comprehensive modules</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-2 mr-4">
                  <Calendar className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-white">Monthly Live Doubt Clearing</p>
                  <p className="text-slate-300">Complex questions answered in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-2 mr-4">
                  <Users className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-white">Direct Support</p>
                  <p className="text-slate-300">throughout your trading journey</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-2 mr-4">
                  <Check className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-white">Real Market Case Studies</p>
                  <p className="text-slate-300">with actual footprint examples</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-6 mb-6">
              <p className="text-white mb-4">
                <span className="font-bold text-red-400">⚠️ URGENT:</span> Binance & Coinbase are pressuring us to remove this system. We've already been banned from 3 trading forums for exposing whale manipulation tactics.
              </p>
              
              <p className="text-white">
                <span className="font-bold">Reality Check:</span> $497 is less than what you'll lose in your NEXT trade without seeing whale orders. But with this system, you'll be on the WINNING side of every pump & dump.
              </p>
            </div>
            
            <div className="text-center">
              <button onClick={handlePaymentPopup} className="cta-button-primary text-lg inline-block">
                STEAL THE WHALE PLAYBOOK - $497 (ONLY 7 SPOTS LEFT)
              </button>
            </div>
          </motion.div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Ready to Stop Losing and Start Winning Consistently?
            </h3>
            
            <p className="text-lg text-slate-300 mb-8">
              <span className="text-yellow-400 font-bold">FACT:</span> 97% of crypto traders get liquidated because they can't see whale manipulation. The 3% who can see it are banking $10K-50K monthly.
            </p>
            
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
              <h4 className="text-xl font-bold mb-4 text-white">The choice is simple:</h4>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <span className="text-red-500">✕</span>
                  </div>
                  <p className="text-slate-300">Keep donating to whales who laugh at your stop losses</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <span className="text-green-500">✓</span>
                  </div>
                  <p className="text-white font-bold">See their $100K+ orders BEFORE execution & profit WITH them</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 mb-8">
              <span className="font-bold text-amber-500">This is the ONLY system that shows live whale orders. Once banned, it's gone FOREVER.</span>
            </p>
            
            <p className="text-lg text-slate-300 mb-8">
              Your transformation from retail trader to institutional-level consistency is just one decision away.
            </p>
            
            <div className="mb-12">
              <button onClick={handlePaymentPopup} className="cta-button-primary text-lg inline-block group">
                STOP BEING WHALE FOOD - JOIN THE PREDATORS
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-4 text-white">Final Decision Time</h4>
              <p className="text-slate-300 mb-4">
                <span className="font-bold">30 seconds from now, you'll make a choice:</span>
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900 p-4 rounded-lg">
                  <p className="text-slate-300">
                    <span className="font-bold text-white">Choice 1:</span> Close this page, lose another $10K to whale dumps, watch others profit from moves you missed, and hate yourself for not taking action.
                  </p>
                </div>
                
                <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/30">
                  <p className="text-slate-200">
                    <span className="font-bold text-amber-500">Choice 2:</span> Get instant access to whale orders, catch the next 1000+ pip BTC move, and join 873 traders already banking $10K+ monthly.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-white mb-6">
                Which trader do you want to be 6 months from now?
              </p>
              
              <button onClick={handlePaymentPopup} className="cta-button-primary text-lg inline-block">
                YES, GIVE ME WHALE ACCESS NOW (BEFORE IT'S BANNED)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;