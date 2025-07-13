import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Full-time Trader",
    content: "From losing 2 lakhs to making consistent profits. TWS Gurukul changed my life.",
    rating: 5,
    verified: true
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer turned Trader",
    content: "The psychology module alone is worth the entire course. Now I trade with confidence.",
    rating: 5,
    verified: true
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    content: "Finally found a mentor who teaches real strategies, not YouTube gimmicks.",
    rating: 5,
    verified: true
  }
];

const stats = [
  { label: "Students Transformed", value: "5,000+" },
  { label: "Combined Profits", value: "₹50 Cr+" },
  { label: "Success Stories", value: "500+" },
  { label: "Years of Excellence", value: "3+" }
];

const SocialProofSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Student Success in Trading & Crypto
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Don't just take our word for it. Hear from traders who transformed 
            their careers with TWS Gurukul.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-green-400/20 mb-4" />
                
                {/* Content */}
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{testimonial.name}</span>
                      {testimonial.verified && (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Verified Student Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;