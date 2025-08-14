import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Info } from 'lucide-react';

const FinalCtaSection: React.FC = () => {
  const [seatsRemaining, setSeatsRemaining] = useState(27);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [showTooltip, setShowTooltip] = useState(false);

  // Simulate dynamic seat updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsRemaining(prev => Math.max(prev - Math.floor(Math.random() * 2), 5));
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checklistItems = [
    "Same time nightly",
    "One playbook",
    "Reviews that fix leaks"
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0D1321' }}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6" style={{ color: '#F7F9FB' }}>
              Two futures. One decision.
            </h2>
            <p className="text-xl font-light mb-12 max-w-2xl mx-auto" style={{ color: '#E9EDF1' }}>
              In 30 days you either have an 8 PM habit or another month of "someday".
            </p>
          </motion.div>

          {/* Checklist */}
          <motion.div
            className="mb-12 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-lg font-light" style={{ color: '#E9EDF1' }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToPricing}
              className="group px-12 sm:px-16 py-5 sm:py-6 bg-white rounded-full hover:bg-gray-100 transition-all duration-300"
              style={{ color: '#0D1321' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-light tracking-wide">
                Secure my seat
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Microtext */}
            <motion.div
              className="mt-4 text-sm flex items-center justify-center gap-2"
              style={{ color: '#9CA3AF' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span>Seats remaining: {seatsRemaining}</span>
              <div className="relative inline-block">
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Info className="w-3 h-3" />
                </button>
                {showTooltip && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-40 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg z-10">
                    Updated {formatTime(lastUpdated)}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </div>
                )}
              </div>
              <span>• Price updates at midnight</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;