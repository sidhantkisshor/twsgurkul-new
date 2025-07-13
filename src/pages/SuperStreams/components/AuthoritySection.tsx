import React from 'react';
import { motion } from 'framer-motion';

const AuthoritySection: React.FC = () => {
  const credentials = [
    {
      title: "TedX Speaker",
      description: "Featured speaker on Trading Psychology",
      icon: "🎤",
      verified: true
    },
    {
      title: "IIT Mumbai & IIT Bombay",
      description: "Workshop facilitator for premium institutes",
      icon: "🎓",
      verified: true
    },
    {
      title: "NIT Workshops",
      description: "Conducted trading workshops across NITs",
      icon: "🏛️",
      verified: true
    },
    {
      title: "Media Recognition",
      description: "Featured in leading financial publications",
      icon: "📺",
      verified: true
    }
  ];

  const keyStats = [
    {
      number: "10mn+",
      label: "Student Profits Generated",
      description: "Verified student earnings"
    },
    {
      number: "90%",
      label: "Trading Consistency",
      description: "Proven track record"
    },
    {
      number: "1000+",
      label: "Successful Students",
      description: "Active profitable traders"
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "In systematic trading"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Trust Me?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Your trading mentor with proven credibility and real results
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Verified Badge */}
              {credential.verified && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-green-500 text-white rounded-full p-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-label="Verified">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="text-4xl mb-4">{credential.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {credential.title}
              </h3>
              <p className="text-sm text-slate-400">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Stats */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Numbers Don't Lie
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-8">
            <blockquote className="text-lg text-slate-300 italic mb-4">
              "When I started, I was exactly where you are now. The difference? 
              I had mentors who showed me the way. Now, I'm here to be that mentor for you."
            </blockquote>
            <div className="text-yellow-400 font-semibold">
              - Sidhant, Trading Mentor & TedX Speaker
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection; 