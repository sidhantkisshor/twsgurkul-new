import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const CredibilitySection: React.FC = () => {
  const credibilityItems = [
    {
      icon: Shield,
      title: "SEBI-Compliant Trading",
      description: "All strategies follow legal Indian trading guidelines",
      color: "blue"
    },
    {
      icon: Award,
      title: "TEDx & IIT Featured",
      description: "Recognized by India's top institutions",
      color: "yellow"
    },
    {
      icon: Users,
      title: "1,263+ Active Students",
      description: "Growing crypto trading community",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "₹2.7 Cr+ Reported",
      description: "Self-reported student results",
      color: "purple"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-gradient">Indians Trust</span> TWS Gurukul
          </h2>
          <p className="text-lg text-slate-300">
            The only crypto education platform with verifiable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credibilityItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-${item.color}-500/20 hover:border-${item.color}-500/40 transition-all text-center`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-16 h-16 bg-${item.color}-500/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`w-8 h-8 text-${item.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-slate-800/40 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-300 mb-4">
            <strong className="text-white">Fun Fact:</strong> Our students have made more profits than most mutual funds deliver in 5 years
          </p>
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
            <p className="text-green-400 font-semibold">
              Student-reported outcomes vary • <a href="/results-and-claims#summary" className="underline">See our policy</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;