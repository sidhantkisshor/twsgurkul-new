import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, ExternalLink, X } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showProofModal, setShowProofModal] = useState(false);
  const [selectedProof, setSelectedProof] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Divya",
      location: "Delhi",
      quote: "Week 3 I finally stopped revenge trading. By Month 3 I was consistent enough to cover school fees from trading profits. The 8 PM routine saved my sanity.",
      facts: [
        "From kitchen table to dedicated trading desk",
        "From indicators to order flow and footprint",
        "Featured in 'Trading Queens of India'"
      ],
      proofImage: "/proof-divya-blurred.jpg" // Placeholder path
    },
    {
      name: "Vikram",
      location: "Pune",
      quote: "I used to binge strategies. The live room forced one playbook. After 8 weeks of reviews my red days are small. Green days now pay for the month.",
      facts: [
        "Quit job after building six green weeks in a row",
        "Consistency score improved 52 → 83",
        "Wife manages his trade journaling now"
      ],
      proofImage: "/proof-vikram-blurred.jpg" // Placeholder path
    },
    {
      name: "Mohammed",
      location: "Mumbai",
      quote: "Uber driver shifts wrecked my focus. The 8 PM window fit my life. First month I learned to cut losses. Third month I stopped overtrading.",
      facts: [
        "From ₹10k starting capital",
        "Now runs a small family account",
        "Mentors two new students on journaling"
      ],
      proofImage: "/proof-mohammed-blurred.jpg" // Placeholder path
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-warm-white">
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
              Transformation stories
            </h2>
            <p className="text-lg text-deep-slate/70 max-w-3xl mx-auto font-normal mb-4">
              Real people. Real progress. Many verified by independent accountants.
            </p>
            <p className="text-base text-deep-slate/60 max-w-4xl mx-auto font-normal">
              Coached daily by our team of professional mentors.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Quote Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xs border border-deep-slate/10">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-deep-slate">
                      {testimonials[activeIndex].name}, {testimonials[activeIndex].location}
                    </h3>
                  </div>
                </div>
                
                <blockquote className="text-lg text-deep-slate font-normal leading-relaxed mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                {/* View proof link */}
                <button
                  onClick={() => {
                    setSelectedProof(testimonials[activeIndex].proofImage);
                    setShowProofModal(true);
                  }}
                  className="text-sm text-deep-slate/60 hover:text-deep-slate underline inline-flex items-center gap-1 mb-8 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  View proof
                </button>

                {/* Navigation dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all duration-300 ${
                        index === activeIndex
                          ? 'w-8 h-2 bg-deep-slate rounded-full'
                          : 'w-2 h-2 bg-deep-slate/20 rounded-full hover:bg-deep-slate/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-deep-slate text-white rounded-3xl p-8 sm:p-12">
                <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400">
                  Quick facts
                </h4>
                <div className="space-y-4">
                  {testimonials[activeIndex].facts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-wealth-teal mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base font-normal">
                        {fact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-deep-slate" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12">
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-deep-slate" />
              </button>
            </div>
          </div>

          {/* Case Study Stripe */}
          <motion.div
            className="mt-16 bg-deep-slate text-white rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-center font-normal">
              Case studies show ₹50k to ₹2L months once the routine sticks. Individual results vary.
            </p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-deep-slate/60 max-w-2xl mx-auto">
              Individual experiences. No assured returns. Skill and discipline decide outcomes.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Proof Modal */}
      <AnimatePresence>
        {showProofModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setShowProofModal(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowProofModal(false)}
                className="absolute top-4 right-4 p-2 text-deep-slate/40 hover:text-deep-slate/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Modal Header */}
              <h3 className="text-2xl font-semibold text-deep-slate mb-6">
                Performance Verification
              </h3>
              
              {/* Placeholder for proof image */}
              <div className="bg-soft-sand/30 rounded-2xl p-12 mb-6">
                <div className="text-center space-y-4">
                  <div className="w-full h-64 bg-soft-sand/50 rounded-lg flex items-center justify-center">
                    <p className="text-deep-slate/60 text-sm">
                      P&L Statement<br/>
                      (Numbers blurred for privacy)
                    </p>
                  </div>
                  <p className="text-xs text-deep-slate/60">
                    Verified by independent CA firm<br/>
                    Letter available upon enrollment
                  </p>
                </div>
              </div>
              
              {/* Disclaimer */}
              <p className="text-xs text-deep-slate/60 text-center">
                Past performance does not guarantee future results. Results vary based on individual skill, capital, and market conditions.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;