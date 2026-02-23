import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

  const problems = [
    {
      kicker: "CONFUSION",
      title: "100 Videos. Zero Clarity.",
      description: "You watched every trading guru on YouTube. Each one said something different. You tried 10 strategies. None worked. Now you don't trust anyone — including yourself.",
      stat: "97%",
      statLabel: "quit within 90 days"
    },
    {
      kicker: "LOST MONEY",
      title: "Tips Se Paisa Gaya",
      description: "You entered trades on tips. No stop loss. No plan. By the time you learned \"risk management,\" you already lost 2-3 lakh of hard-earned money.",
      stat: "₹2.3L",
      statLabel: "Average beginner loss"
    },
    {
      kicker: "UNFAIR GAME",
      title: "You're Fighting Whales with ₹10k",
      description: "Retail traders fight algorithms and whale wallets with small accounts. It's not a fair game. You need to trade WITH the big money, not against it.",
      stat: "89%",
      statLabel: "lose to institutions"
    }
  ];

  return (
    <section id="problem" className="py-32 relative overflow-hidden bg-warm-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-white to-warm-white" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - minimal and centered */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-deep-slate mb-6">
              You Already Know Trading Is Hard. Here's Why.
            </h2>
            <p className="text-lg text-deep-slate/70 max-w-2xl mx-auto font-normal">
              It's not your fault. But it IS your problem to solve.
            </p>
          </motion.div>

          {/* Problem cards - clean and minimal */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`bg-white rounded-2xl p-8 h-full transition-all duration-300 cursor-pointer relative
                    ${activeIndex === index ? 'shadow-xl' : 'shadow-xs hover:shadow-md'}`}
                  >
                    {/* Kicker */}
                    <div className="text-xs font-medium tracking-wider text-burnt-amber mb-4">
                      {problem.kicker}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-medium text-deep-slate mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-deep-slate/70 leading-relaxed mb-6">
                      {problem.description}
                    </p>
                    
                    {/* Stat with info icon */}
                    <div className="pt-6 border-t border-deep-slate/10">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-3xl font-normal text-burnt-amber">{problem.stat}</p>
                          <p className="text-xs text-deep-slate/70 mt-1">{problem.statLabel}</p>
                        </div>
                        <div className="relative">
                          <button
                            className="text-deep-slate/40 hover:text-deep-slate/60 transition-colors p-1"
                            onMouseEnter={() => setShowTooltip(index)}
                            onMouseLeave={() => setShowTooltip(null)}
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowTooltip(showTooltip === index ? null : index);
                            }}
                          >
                            <Info size={14} />
                          </button>
                          {showTooltip === index && (
                            <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-deep-slate text-white text-xs rounded-lg shadow-lg z-10">
                              <div className="relative">
                                Indicative; internal survey of new members, last 12 months
                                <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-deep-slate" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bridge banner */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-deep-slate text-white rounded-3xl p-8 sm:p-12">
                <p className="text-lg sm:text-xl font-normal leading-relaxed">
                  What if you could see exactly where the big money is moving — and trade alongside it? That's what happens every night at 8 PM.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;