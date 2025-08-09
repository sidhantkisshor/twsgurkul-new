import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialData } from '../data';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialData.length);
    setIsPaused(true);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
    setIsPaused(true);
  };

  const activeTestimonial = testimonialData[activeIndex];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-gray-50">
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
              Transformation stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Real people. Real results. Verified by chartered accountants.
            </p>
          </motion.div>

          {/* Testimonial display */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-12 md:p-16 shadow-sm"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Story */}
                  <div>
                    <Quote className="w-12 h-12 text-gray-200 mb-6" />
                    <h3 className="text-2xl font-light text-gray-900 mb-6">
                      {activeTestimonial.headline}
                    </h3>
                    <div className="space-y-4 text-gray-600 font-light">
                      <p>{activeTestimonial.story.before}</p>
                      <p>{activeTestimonial.story.breakthrough}</p>
                      <p className="font-normal text-gray-900">{activeTestimonial.story.now}</p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <p className="font-normal text-gray-900">{activeTestimonial.name}</p>
                      <p className="text-sm text-gray-500">{activeTestimonial.location}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h4 className="text-sm text-gray-500 mb-6">Verified results</h4>
                      <div className="space-y-6">
                        {Object.entries(activeTestimonial.proof).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-baseline">
                            <span className="text-sm text-gray-600">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="text-lg font-light text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                      {activeTestimonial.currentMonthly && (
                        <div className="mt-8 pt-8 border-t border-gray-200">
                          <p className="text-sm text-gray-500 mb-2">Current monthly income</p>
                          <p className="text-3xl font-light text-gray-900">
                            {activeTestimonial.currentMonthly}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonialData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                    }}
                    className={`transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 h-2 bg-gray-900 rounded-full'
                        : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-light text-gray-900">2,347</p>
                <p className="text-sm text-gray-500 mt-2">Success stories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-light text-gray-900">₹10 Cr</p>
                <p className="text-sm text-gray-500 mt-2">Total earnings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-light text-gray-900">89%</p>
                <p className="text-sm text-gray-500 mt-2">Success rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-light text-gray-900">4.9</p>
                <p className="text-sm text-gray-500 mt-2">Average rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;