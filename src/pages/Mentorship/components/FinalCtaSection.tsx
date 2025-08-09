import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { urgencyData } from '../data';

const FinalCtaSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              The choice is yours.
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
              Continue struggling alone, or join 2,347 traders 
              who chose a different path.
            </p>
          </motion.div>

          {/* Subtle urgency */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 text-gray-600">
              <Clock size={20} />
              <span className="font-light">
                {urgencyData.spotsLeft} seats remaining • 
                Price increases in {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToPricing}
              className="group px-16 py-6 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-4 text-base font-light tracking-wide">
                Make your decision
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Personal note */}
          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-sm max-w-3xl mx-auto">
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                "I spent years losing money before discovering what actually works. 
                You don't have to repeat my mistakes. Everything I learned through 
                pain and loss, I've distilled into a simple system you can follow.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                This isn't about me. It's about your transformation. 
                Your financial freedom. Your future."
              </p>
              <p className="text-gray-900 font-normal">
                — Sidhant Kishor
              </p>
              <p className="text-sm text-gray-500">
                Founder, ETM
              </p>
            </div>
          </motion.div>

          {/* Final reminder */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 font-light">
              Next live session starts tonight at 8 PM. 
              Will you be there?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;