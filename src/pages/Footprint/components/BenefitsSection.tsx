import React from 'react';
import { TrendingUp, Eye, Shield, BarChart4 } from 'lucide-react';
import { motion } from 'framer-motion';

const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="section bg-slate-950 relative">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
          >
            The Smart Money Secret <span className="text-gradient">They Don't Want You to Know</span>
          </motion.h2>
          
          <motion.div 
            className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12 border border-slate-700 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animationVariants}
          >
            <p className="text-lg font-medium mb-4 text-white">
              Tumhe lagta hai tu market ko samjh gaya hai, lekin phir se trapped ho jaata hai?
            </p>
            
            <p className="text-white mb-6">
              Here's the brutal truth: <span className="font-bold">Jab tu support/resistance dekh raha hai, smart money already 3 steps ahead hai.</span>
            </p>
            
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>While you're trading breakouts, they're creating false breakouts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>While you're following indicators, they're manipulating those indicators.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>While you think support/resistance, they think absorption zones.</span>
              </li>
            </ul>
            
            <p className="text-lg font-bold mt-6 text-white">
              The game changer? <span className="text-gradient">Institutional Footprint Reading.</span>
            </p>
            
            <p className="text-white mt-4">
              Not basic volume analysis. Not simple chart patterns. <span className="font-bold">Complete smart money footprint mapping</span> - wo exact spots identify karna jahan institutions accumulate kar rahi hain, aur jahan wo retail traders ko systematically trap kar rahi hain.
            </p>
            
            <p className="text-lg italic mt-6 text-white">
              Imagine knowing exactly where smart money will strike next...
            </p>
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
          >
            Why <span className="text-gradient">90% Success Rate</span>? The Footprint Advantage
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-slate-900/70 rounded-xl p-6 border border-slate-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={animationVariants}
            >
              <h4 className="text-xl font-bold mb-4 text-slate-300">Regular traders see:</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Price action</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Support/resistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Basic indicators</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-slate-900/70 rounded-xl p-6 border border-slate-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={animationVariants}
            >
              <h4 className="text-xl font-bold mb-4 text-amber-500">Footprint Masters see:</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Where smart money is actually accumulating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Exact manipulation zones before they trigger</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Institutional absorption patterns in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>True supply/demand at the deepest level</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
          >
            <p className="text-xl font-bold mb-6">
              <span className="text-gradient">Result:</span> You stop being smart money's target and start trading alongside institutions.
            </p>
            
            <p className="text-lg text-slate-300 mb-8">
              The difference between consistent profits and blown accounts? Knowing what smart money knows.
            </p>
            
            <a href="#course" className="cta-button-primary inline-block">
              Don't let another opportunity slip away →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;