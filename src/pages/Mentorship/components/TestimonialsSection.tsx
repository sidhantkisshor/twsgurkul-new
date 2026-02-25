import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import InlineCTA from './InlineCTA';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "Divya",
      location: "Delhi",
      tag: "Homemaker · Started with ₹15k",
      quote: "Pehle mujhe lagta tha trading sirf boys ka kaam hai. 3 weeks mein I stopped revenge trading. Month 3, my profits paid school fees. The 8 PM routine saved my sanity.",
      facts: [
        "Kitchen table to dedicated trading desk",
        "Indicators to order flow and footprint",
        "Featured in 'Trading Queens of India'"
      ],
    },
    {
      name: "Vikram",
      location: "Pune",
      tag: "Ex-IT employee · Started with ₹50k",
      quote: "I wasted 2 years and ₹3 lakh on YouTube strategies. The live room forced me to follow ONE playbook. After 8 weeks of reviews, my red days became small. Green days now pay for the month.",
      facts: [
        "Quit IT job after 6 green weeks in a row",
        "Consistency score: 52 → 83",
        "Wife manages his trade journal now"
      ],
    },
    {
      name: "Mohammed",
      location: "Mumbai",
      tag: "Uber driver · Started with ₹10k",
      quote: "Driving shifts wrecked my focus. But 8 PM fit my life. First month I learned to cut losses. Third month I stopped overtrading. Ab mera apna family account hai.",
      facts: [
        "From ₹10k starting capital",
        "Now runs a small family account",
        "Mentors 2 new students on journaling"
      ],
    },
    {
      name: "Priya",
      location: "Chennai",
      tag: "CA student · Started with ₹25k",
      quote: "I was studying for CA and trading on the side with zero discipline. Random entries, no journal, no stop loss. The 8 PM routine gave me structure. Now I journal every trade and my win rate went from 30% to 65%.",
      facts: [
        "Win rate improved from 30% to 65%",
        "Trades only during the 8 PM window",
        "First green month within 6 weeks"
      ],
    },
    {
      name: "Amit",
      location: "Nagpur",
      tag: "Pharma sales rep · Started with ₹30k",
      quote: "Telegram groups took ₹1.5 lakh from me in 4 months. I was done with trading. My friend dragged me to the live room. Seeing the coach take a loss and explain why was the moment everything changed for me.",
      facts: [
        "Recovered losses within 4 months",
        "Stopped following Telegram tips completely",
        "Now trades independently using the system"
      ],
    },
    {
      name: "Sneha",
      location: "Lucknow",
      tag: "School teacher · Started with ₹15k",
      quote: "Mujhe lagta tha trading sirf rich logo ke liye hai. ₹15k se shuru kiya. Coach ne position sizing sikhayi. 3 months mein school salary se zyada profit hua. Ab husband bhi join kar rahe hain.",
      facts: [
        "Started with just ₹15k capital",
        "Exceeded monthly salary from trading profits",
        "Husband enrolling for next cohort"
      ],
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden bg-deep-slate">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-10 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white mb-6">
              They Were Where <span className="font-serif italic font-normal text-burnt-amber">You</span> Are
            </h2>
            <p className="text-lg text-soft-sand/70 max-w-3xl mx-auto font-normal">
              Some started with ₹10k. Some had zero experience. All of them stuck to the 8 PM routine.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div
            className="max-w-5xl mx-auto relative"
            role="group"
            aria-roledescription="carousel"
            aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length} — use arrow keys to navigate`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6 md:gap-8 items-start"
            >
              {/* Quote Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {testimonials[activeIndex].name}, {testimonials[activeIndex].location}
                    </h3>
                    <p className="text-sm text-soft-sand/60">
                      {testimonials[activeIndex].tag}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-soft-sand font-normal leading-relaxed mb-8">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Navigation dots */}
                <div className="flex items-center gap-0">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className="flex items-center justify-center w-11 h-11 -mx-1"
                      aria-label={`Go to testimonial ${index + 1}`}
                    >
                      <span className={`transition-all duration-300 rounded-full inline-block ${
                        index === activeIndex
                          ? 'w-8 h-2 bg-white'
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-white/8 border border-white/10 text-white rounded-3xl p-8 sm:p-12">
                <h4 className="text-sm uppercase tracking-wider mb-6 text-soft-sand/60">
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

            {/* Navigation Arrows - mobile: below cards, desktop: absolute sides */}
            <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-12">
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Case Study Stripe */}
          <motion.div
            className="mt-16 bg-burnt-amber/20 border border-burnt-amber/30 text-white rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-center font-normal">
              Students report ₹50k–₹2L monthly once the routine sticks. Individual results vary by skill and capital.
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
            <p className="text-sm text-soft-sand/70 max-w-2xl mx-auto">
              Individual experiences. No assured returns. Skill and discipline decide outcomes.
            </p>
          </motion.div>

          <InlineCTA text="Join them at 8 PM tonight" variant="dark" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;