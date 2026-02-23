import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Play, CheckCircle } from 'lucide-react';

const UniqueMechanismSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      time: "7:45 PM",
      title: "Watch",
      description: "New York market opens. Big players start moving money. We show you exactly where — on your screen, live.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 2,
      time: "8:00–10:30 PM",
      title: "Trade",
      description: "Coach calls the setup. You see the entry, the stop loss, the target. Simple rules. No guessing. No hero trades.",
      icon: <Play className="w-6 h-6" />
    },
    {
      id: 3,
      time: "10:45 PM",
      title: "Review",
      description: "Did you follow the rules? What went right? What broke? Weekly review fixes your mistakes before they become bad habits.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section id="unique-mechanism" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-deep-slate mb-6">
              The <span className="text-burnt-amber font-semibold">8 PM</span> Window — Why This Time, Why This Works
            </h2>
            <p className="text-lg text-deep-slate/70 max-w-2xl mx-auto font-normal">
              New York opens at 8 PM India time. That's when the real money moves. We show you exactly where.
            </p>
          </motion.div>

          {/* 3-step timeline */}
          <div className="max-w-5xl mx-auto mb-32">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Timeline divider line - positioned behind icons */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-wealth-teal/30 z-0" />
              
              {/* Steps */}
              <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setActiveStep(step.id)}
                  >
                    <div className="md:text-center relative">
                      {/* Circle - 48px (12 tailwind units) */}
                      <div className={`w-12 h-12 md:mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
                        activeStep === step.id
                          ? 'bg-burnt-amber text-white shadow-lg'
                          : 'bg-white text-deep-slate/60 border border-deep-slate/10'
                      }`}>
                        {step.icon}
                      </div>
                      
                      {/* Time */}
                      <p className="text-sm font-medium text-deep-slate mb-2">{step.time} — {step.title}</p>
                      
                      {/* Description */}
                      <p className="text-sm text-deep-slate/70 font-normal leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Why this works */}
          <motion.div
            className="max-w-3xl mx-auto mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-warm-white rounded-3xl p-8 sm:p-12">
              <h3 className="text-2xl font-semibold text-deep-slate mb-8">
                Why this works
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-burnt-amber">•</span>
                  <p className="text-sm sm:text-base text-deep-slate/70 font-normal">
                    8 PM IST = New York open = maximum market movement
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-burnt-amber">•</span>
                  <p className="text-sm sm:text-base text-deep-slate/70 font-normal">
                    You're free from office by then — no conflict with your 9-6
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-burnt-amber">•</span>
                  <p className="text-sm sm:text-base text-deep-slate/70 font-normal">
                    Same time, same rules, every night = muscle memory (like gym)
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-burnt-amber">•</span>
                  <p className="text-sm sm:text-base text-deep-slate/70 font-normal">
                    Coach trades the same screen you see — no fake screenshots
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-burnt-amber">•</span>
                  <p className="text-sm sm:text-base text-deep-slate/70 font-normal">
                    Small group (12 max) — coach knows your name
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UniqueMechanismSection;