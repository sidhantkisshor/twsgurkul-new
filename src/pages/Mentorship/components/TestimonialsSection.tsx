import React from 'react';
import { motion } from 'framer-motion';
import { Star, AlertCircle, CheckCircle, Play, ExternalLink } from 'lucide-react';
import { testimonialData } from '../data';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
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
              Real Students. Real Results. Real Money.
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Every story below is 100% verified with proof
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {testimonialData.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`glass-effect rounded-2xl p-8 ${
                testimonial.warning 
                  ? 'border border-red-500/50' 
                  : 'border border-green-500/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {testimonial.warning && (
                <div className="flex items-center gap-2 mb-4 text-red-500">
                  <AlertCircle size={20} />
                  <span className="font-semibold">Warning Story</span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {testimonial.headline}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{testimonial.name}</span>
                    <span>•</span>
                    <span>{testimonial.location}</span>
                    {testimonial.verified && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-green-500">
                          <CheckCircle size={16} />
                          Verified
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                "{testimonial.story}"
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4">
                {testimonial.videoLink && (
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors">
                    <Play size={16} />
                    Watch Live Trading Session
                  </button>
                )}
                {testimonial.proofLink && (
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-500 rounded-lg hover:bg-blue-500/30 transition-colors">
                    <ExternalLink size={16} />
                    See P&L Proof
                  </button>
                )}
                {testimonial.linkedIn && (
                  <a 
                    href={testimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to be our next success story?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105"
          >
            Start Your Success Story Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;