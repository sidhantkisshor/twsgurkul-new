import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, MapPin, Users, IndianRupee, Play, MessageCircle, Trophy, Star, ChevronLeft, ChevronRight, ArrowRight, PlayCircle, ChevronDown } from 'lucide-react';
import { useIntersectionAnimation, useCounterAnimation } from '../../../utils/animations';

const StudentWinsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [sectionRef, isVisible] = useIntersectionAnimation();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  
  // Use animation hooks for counters
  const profitsCounter = useCounterAnimation(10.2, 2000, isVisible, 1);
  const successRateCounter = useCounterAnimation(89, 2000, isVisible, 0);
  const citiesCounter = useCounterAnimation(37, 2000, isVisible, 0);


  // Auto-scroll WhatsApp chats
  useEffect(() => {
    if (!isVisible) return;
    
    const scrollInterval = setInterval(() => {
      if (chatContainerRef.current) {
        const scrollHeight = chatContainerRef.current.scrollHeight;
        const currentScroll = chatContainerRef.current.scrollTop;
        const clientHeight = chatContainerRef.current.clientHeight;
        
        if (currentScroll + clientHeight >= scrollHeight - 10) {
          // Reset to top when reaching bottom
          chatContainerRef.current.scrollTop = 0;
        } else {
          // Smooth scroll down
          chatContainerRef.current.scrollTop += 50;
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [isVisible]);

  // Only show top 4 best transformation stories
  const testimonials = [
    {
      id: 1,
      name: "Vikram Singh",
      location: "Bangalore",
      program: "Footprint Master",
      before: "₹5K/week",
      after: "₹3.5L/month",
      profit: "₹3,42,000",
      duration: "4 months",
      image: "👨‍🎓",
      message: "Left my job after 4 months. The institutional order flow strategy is pure gold.",
      type: "video",
      hasVideo: true,
      videoThumb: "From Job to Full-Time Trading"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      location: "Mumbai",
      program: "Elite Mentorship",
      before: "₹2K/day",
      after: "₹2L/month",
      profit: "₹1,87,000",
      duration: "3 months",
      image: "👨‍💼",
      message: "Sidhant's footprint analysis changed everything. From struggling with random trades to consistent 2L monthly.",
      type: "screenshot",
      hasScreenshot: true
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Ahmedabad",
      program: "CMM + Footprint",
      before: "₹500/day",
      after: "₹1.2L/month",
      profit: "₹1,15,000",
      duration: "5 months",
      image: "👩‍🏫",
      message: "Started with CMM basics, upgraded to Footprint. Now trading full-time from home!",
      type: "video",
      hasVideo: true,
      videoThumb: "Single Mom to Pro Trader"
    },
    {
      id: 4,
      name: "Priya Sharma",
      location: "Delhi",
      program: "CMM Graduate",
      before: "₹0",
      after: "₹65K/month",
      profit: "₹65,000",
      duration: "2 months",
      image: "👩‍💻",
      message: "Started with just ₹30K capital. CMM taught me crypto patterns that actually work. First month itself profitable!",
      type: "screenshot",
      hasScreenshot: true
    }
  ];

  const whatsappChats = [
    { time: "10:23 AM", message: "Today's profit ₹18,750! 🎯", sender: "student" },
    { time: "10:24 AM", message: "Footprint pattern worked perfectly", sender: "student" },
    { time: "10:25 AM", message: "Excellent execution! Keep it up 💪", sender: "sidhant" },
    { time: "2:15 PM", message: "₹32K profit this week already!", sender: "student" },
    { time: "2:16 PM", message: "Following exact CMM strategy", sender: "student" },
    { time: "2:17 PM", message: "This is the way! Consistency is key 🔥", sender: "sidhant" }
  ];

  const screenshots = [
    { profit: "+₹45,230", percentage: "+12.3%", label: "Today's P&L" },
    { profit: "+₹1,24,560", percentage: "+31.2%", label: "Weekly Result" },
    { profit: "+₹3,87,900", percentage: "+87.4%", label: "Monthly Gains" },
    { profit: "+₹89,340", percentage: "+22.1%", label: "Single Trade" }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-green-500/5 rounded-full filter blur-[150px]" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[150px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6">
              <Trophy className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Real Students, Real Profits</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                From ₹2K/day to ₹2L/month
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Real People, Real Results
              </span>
            </h2>
            
            {/* Animated Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  ₹{profitsCounter}Cr
                </div>
                <p className="text-sm sm:text-base text-gray-400 mt-2">Total Student Profits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {successRateCounter}%
                </div>
                <p className="text-sm sm:text-base text-gray-400 mt-2">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {citiesCounter}
                </div>
                <p className="text-sm sm:text-base text-gray-400 mt-2">Cities Represented</p>
              </div>
            </div>
          </div>

          {/* Success Collage */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            
            {/* Left Column - WhatsApp Chats */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                Live Group Updates
                <span className="ml-2 px-2 py-0.5 bg-green-500/20 rounded-full text-xs text-green-400 animate-pulse">
                  LIVE
                </span>
              </h3>
              <div className="glass-effect rounded-2xl p-4 border border-green-500/20 bg-gradient-to-br from-green-950/20 to-emerald-950/10 relative overflow-hidden">
                <div 
                  ref={chatContainerRef}
                  className="space-y-3 max-h-64 overflow-y-auto scroll-smooth"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {/* Duplicate chats for seamless scrolling */}
                  {[...whatsappChats, ...whatsappChats].map((chat, index) => (
                    <div key={index} className={`flex ${chat.sender === 'sidhant' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`
                        max-w-[80%] rounded-2xl px-4 py-2
                        ${chat.sender === 'sidhant' 
                          ? 'bg-gray-800 rounded-tl-none' 
                          : 'bg-green-600 rounded-tr-none text-white'}
                      `}>
                        <p className="text-sm">{chat.message}</p>
                        <p className="text-xs opacity-70 mt-1">{chat.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* P&L Screenshots */}
              <div className="grid grid-cols-2 gap-3">
                {screenshots.slice(0, 2).map((shot, index) => (
                  <div key={index} className="glass-effect rounded-xl p-3 border border-white/10">
                    <p className="text-xs text-gray-500 mb-1">{shot.label}</p>
                    <p className="text-lg font-bold text-green-400">{shot.profit}</p>
                    <p className="text-sm text-green-300">{shot.percentage}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column - Featured Testimonial */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Success Stories
              </h3>
              
              <div className="relative">
                <div className="glass-effect rounded-2xl p-6 border border-yellow-500/20 bg-gradient-to-br from-yellow-950/20 to-orange-950/10">
                  <div className="mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl flex-shrink-0">
                        {testimonials[activeTestimonial].image}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonials[activeTestimonial].location}
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                          {testimonials[activeTestimonial].program}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video/Screenshot Indicator */}
                  {testimonials[activeTestimonial].hasVideo && (
                    <div className="mb-3 p-3 bg-black/30 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm text-gray-300">{testimonials[activeTestimonial].videoThumb}</span>
                      </div>
                      <span className="text-xs text-gray-500">Watch Video</span>
                    </div>
                  )}
                  
                  {testimonials[activeTestimonial].hasScreenshot && (
                    <div className="mb-3 p-3 bg-black/30 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-gray-300">P&L Screenshot Available</span>
                      </div>
                      <span className="text-xs text-gray-500">Verified</span>
                    </div>
                  )}
                  
                  {/* Scannable Message with Expand */}
                  <div className="mb-4">
                    <p className="text-gray-300 italic">
                      "{expandedTestimonial === activeTestimonial 
                        ? testimonials[activeTestimonial].message 
                        : `${testimonials[activeTestimonial].message.slice(0, 100)}...`}"
                    </p>
                    {testimonials[activeTestimonial].message.length > 100 && (
                      <button 
                        onClick={() => setExpandedTestimonial(
                          expandedTestimonial === activeTestimonial ? null : activeTestimonial
                        )}
                        className="text-sm text-green-400 hover:text-green-300 mt-2 flex items-center gap-1 transition-colors"
                      >
                        {expandedTestimonial === activeTestimonial ? 'Show less' : 'Read more'}
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          expandedTestimonial === activeTestimonial ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 p-4 bg-black/30 rounded-xl">
                    <div className="relative">
                      <div className="absolute -top-2 left-2 px-2 py-0.5 bg-red-500/20 rounded text-xs font-bold text-red-400">BEFORE</div>
                      <p className="text-xs text-gray-500 mt-2">Before TWS</p>
                      <p className="text-lg font-bold text-red-400">{testimonials[activeTestimonial].before}</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-2 left-2 px-2 py-0.5 bg-green-500/20 rounded text-xs font-bold text-green-400">AFTER</div>
                      <p className="text-xs text-gray-500 mt-2">After TWS</p>
                      <p className="text-lg font-bold text-green-400">{testimonials[activeTestimonial].after}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-400">In just {testimonials[activeTestimonial].duration}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex gap-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeTestimonial ? 'w-6 bg-yellow-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - More Screenshots & Video Thumbnails */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Trading Results
              </h3>
              
              {/* Video Thumbnail */}
              <div className="relative glass-effect rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-cyan-950/10">
                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 backdrop-blur">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white font-semibold">Watch Success Stories</p>
                    <p className="text-sm text-gray-400">2:34 min compilation</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                  LIVE
                </div>
              </div>
              
              {/* More P&L Screenshots */}
              <div className="grid grid-cols-2 gap-3">
                {screenshots.slice(2).map((shot, index) => (
                  <div key={index} className="glass-effect rounded-xl p-3 border border-white/10">
                    <p className="text-xs text-gray-500 mb-1">{shot.label}</p>
                    <p className="text-lg font-bold text-green-400">{shot.profit}</p>
                    <p className="text-sm text-green-300">{shot.percentage}</p>
                  </div>
                ))}
              </div>
              
              {/* Achievement Badge */}
              <div className="glass-effect rounded-xl p-4 border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-pink-950/10">
                <div className="flex items-center gap-3">
                  <Trophy className="w-10 h-10 text-purple-400" />
                  <div>
                    <p className="text-sm font-bold text-white">Community Achievement</p>
                    <p className="text-xs text-gray-400">₹10 Cr+ Total Profits Unlocked!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-400 mb-6">
              Join <span className="text-white font-semibold">10,847+ successful traders</span> who transformed their financial future
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105"
              >
                Start Your Success Story
                <TrendingUp className="w-5 h-5" />
              </button>
              
              <a
                href="/results"
                className="inline-flex items-center gap-2 glass-effect border border-white/20 hover:border-white/30 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
              >
                See All 2,847+ Results
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <p className="mt-4 text-sm text-gray-500">
              Only showing top 4 transformations • <span className="text-gray-400">100+ video testimonials available</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentWinsSection;