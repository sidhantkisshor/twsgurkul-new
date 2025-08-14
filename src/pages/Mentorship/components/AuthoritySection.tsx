import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Building2 } from 'lucide-react';

const AuthoritySection: React.FC = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Trained' },
    { icon: TrendingUp, value: '₹10 Cr+', label: 'Student Profits' },
    { icon: Award, value: 'TEDx', label: 'Speaker' },
    { icon: Building2, value: 'IIT/NIT', label: 'Featured At' }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Why Learn From Us?
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            We don't just teach theory - we trade live with you daily
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="text-green-500 mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="max-w-4xl mx-auto glass-effect rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Meet Sidhant Kisshor
              </h3>
              <p className="text-green-400 mb-4">Trader, Mentor, TEDx Speaker</p>
              <p className="text-gray-300 mb-4">
                I'm not a guru. I'm a trader who lost money just like you, found a system that works, 
                and now I'm here to share it. No fluff, no false promises. Just a practical path to profitable trading.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">TEDx Speaker & Featured at IIT - shared my journey with thousands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">₹10 Crore+ in student profits - tracked and verified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">Daily live trading at 8 PM - trade alongside our certified pro coaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">Designed for Indian lifestyle - perfect for 9-5 job holders</span>
                </li>
              </ul>
            </div>
            <div className="relative order-1 md:order-2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <picture>
                  <source srcSet="https://d2j3cl693ttatt.cloudfront.net/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT.webp" type="image/webp" />
                  <img 
                    src="https://d2j3cl693ttatt.cloudfront.net/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT_compressed.jpg"
                    alt="Sidhant Kisshor - TEDx Speaker and IIT/NIT Trainer"
                    className="rounded-xl shadow-2xl shadow-green-500/20"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute bottom-4 left-4 right-4 glass-effect p-4 rounded-lg">
                  <p className="text-lg font-bold text-white">Sidhant Kisshor</p>
                  <p className="text-sm text-green-400">Your Trading Mentor</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;