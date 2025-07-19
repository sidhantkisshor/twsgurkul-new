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
                  <span className="text-lg text-slate-400 line-through mr-3">₹59,999</span>
                  <span className="text-2xl md:text-3xl font-bold text-amber-500">₹34,997</span>
                  <span className="text-sm text-green-500 ml-2">Save ₹25,002</span>
                </div>
                <p className="text-lg text-slate-300">Less than your average monthly trading loss</p>
                <p className="text-sm text-yellow-400 mt-2 flex items-center gap-2">
                  <Clock size={16} />
                  {urgencyData.bonusDeadline}: FREE {urgencyData.bonusDescription} (Worth {urgencyData.bonusValue})
                </p>
              </div>
              
              <div className="mt-6 md:mt-0">
                <button onClick={handlePaymentPopup} className="cta-button-primary text-lg">
                  ENROLL IN FOOTPRINT MASTERY
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
                <span className="font-bold">Most importantly:</span> You're not alone. Har month live session mein main personally tumhare complex doubts clear karta hun. Real market scenarios, tricky situations, advanced concepts - everything gets discussed.
              </p>
              
              <p className="text-white">
                <span className="font-bold">Think about it:</span> ₹34,997 is probably less than what you've lost in your last few trades. But this investment could end those losses forever.
              </p>
            </div>
            
            <div className="text-center">
              <button onClick={handlePaymentPopup} className="cta-button-primary text-lg inline-block">
                ENROLL IN FOOTPRINT MASTERY - ₹34,997
              </button>
            </div>
          </motion.div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Ready to Stop Losing and Start Winning Consistently?
            </h3>
            
            <p className="text-lg text-slate-300 mb-8">
              Six years ago, main 2 AM ko ro raha tha with blown accounts. Today, hundreds of students have achieved financial freedom using this exact system.
            </p>
            
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
              <h4 className="text-xl font-bold mb-4 text-white">The choice is simple:</h4>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <span className="text-red-500">✕</span>
                  </div>
                  <p className="text-slate-300">Keep getting trapped by smart money manipulation</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <span className="text-green-500">✓</span>
                  </div>
                  <p className="text-white font-bold">Learn to read their footprints and trade alongside them</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 mb-8">
              <span className="font-bold text-amber-500">World mein aur koi complete footprint system nahi milega. Main guarantee deta hun.</span>
            </p>
            
            <p className="text-lg text-slate-300 mb-8">
              Your transformation from retail trader to institutional-level consistency is just one decision away.
            </p>
            
            <div className="mb-12">
              <button onClick={handlePaymentPopup} className="cta-button-primary text-lg inline-block group">
                STOP BEING SMART MONEY'S TARGET - START NOW
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
                    <span className="font-bold text-white">Choice 1:</span> Close this page, continue with the same strategies, keep getting trapped by manipulation, and wonder "what if" for the next 6 months.
                  </p>
                </div>
                
                <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/30">
                  <p className="text-slate-200">
                    <span className="font-bold text-amber-500">Choice 2:</span> Invest in your transformation, master institutional footprints, and join the 90% who achieve consistency.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-white mb-6">
                Which trader do you want to be 6 months from now?
              </p>
              
              <button onClick={handlePaymentPopup} className="cta-button-primary text-lg inline-block">
                YES, I CHOOSE FINANCIAL FREEDOM - ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;