import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Play, CheckCircle } from 'lucide-react';

const UniqueMechanismSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      time: "7:45 PM",
      title: "Observe",
      description: "Track on-chain wallet activity, order flow, and footprint to locate absorption and trapped liquidity.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 2,
      time: "8:00–10:30 PM",
      title: "Execute",
      description: "Run the 8-pattern playbook with clear if-then rules and hard invalidation. Position size is capped. No hero trades.",
      icon: <Play className="w-6 h-6" />
    },
    {
      id: 3,
      time: "10:45 PM",
      title: "Review",
      description: "Mark the trade, compute R-multiples, fix checklist leaks, and plan tomorrow's first look.",
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              The 8 PM Liquidity Window
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              While others guess, we follow flows that actually move price.
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
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-200/50 z-0" />
              
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
                          ? 'bg-gray-900 text-white shadow-lg' 
                          : 'bg-white text-gray-600 border border-gray-200'
                      }`}>
                        {step.icon}
                      </div>
                      
                      {/* Time */}
                      <p className="text-sm font-medium text-gray-900 mb-2">{step.time} — {step.title}</p>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
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
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
              <h3 className="text-2xl font-light text-gray-900 mb-8">
                Why this works
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    New York opens while India is free from 9 to 6 jobs
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    Wallet flow reveals where size is preparing to act
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    Footprint + order flow show real intent, not stories
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    Same time every night builds skill and discipline
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    Weekly reviews convert knowledge into consistency
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