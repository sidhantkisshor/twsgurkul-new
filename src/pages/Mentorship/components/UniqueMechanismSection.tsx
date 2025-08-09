import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Eye, TrendingUp } from 'lucide-react';

const UniqueMechanismSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      time: "7:45 PM",
      title: "Observe",
      description: "Track institutional wallet movements",
      icon: <Eye className="w-5 h-5" />
    },
    {
      id: 2,
      time: "8:00 PM",
      title: "Follow",
      description: "Mirror professional positions",
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 3,
      time: "11:00 PM",
      title: "Profit",
      description: "Exit with consistent gains",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white">
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
              The whale advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              While others guess, we follow those who know.
            </p>
          </motion.div>

          {/* Visual representation */}
          <div className="max-w-4xl mx-auto mb-32">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" />
              
              {/* Steps */}
              <div className="relative grid grid-cols-3 gap-8">
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
                    <div className="text-center">
                      {/* Circle */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeStep === step.id 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {step.icon}
                      </div>
                      
                      {/* Time */}
                      <p className="text-sm text-gray-500 mb-2">{step.time}</p>
                      
                      {/* Title */}
                      <h3 className={`text-xl font-normal mb-2 transition-colors duration-300 ${
                        activeStep === step.id ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-500 font-light">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key insight */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-3xl p-12">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Why this works
              </h3>
              <div className="space-y-6 text-left">
                <div className="flex gap-4">
                  <div className="w-px bg-gray-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-gray-900 mb-2">Information asymmetry</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Institutional traders have access to data, analysis, and capital 
                      that retail traders don't. Following their moves levels the playing field.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-px bg-gray-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-gray-900 mb-2">Market impact</h4>
                    <p className="text-sm text-gray-600 font-light">
                      When whales move, markets follow. By identifying their positions early, 
                      we position ourselves before the inevitable price movement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-px bg-gray-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-gray-900 mb-2">Risk management</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Professionals don't gamble. Their calculated positions, backed by 
                      thorough analysis, offer a safer path to consistent profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live proof */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-400 text-center mb-8">Last 24 hours</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-sm text-gray-500 mb-2">Whale positions tracked</p>
                <p className="text-3xl font-light text-gray-900">47</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-sm text-gray-500 mb-2">Successful trades</p>
                <p className="text-3xl font-light text-gray-900">42</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-sm text-gray-500 mb-2">Average return</p>
                <p className="text-3xl font-light text-gray-900">+8.7%</p>
              </div>
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="group inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all duration-300">
                <span className="text-sm font-light">Join tonight's session</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniqueMechanismSection;