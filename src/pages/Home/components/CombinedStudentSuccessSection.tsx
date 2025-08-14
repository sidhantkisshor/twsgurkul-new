import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, MapPin, Play, MessageCircle, Trophy, Star, ChevronLeft, ChevronRight, ArrowRight, PlayCircle, ChevronDown, Eye, CheckCircle, Filter } from 'lucide-react';
import { useIntersectionAnimation, useCounterAnimation } from '../../../utils/animations';

// Types
type StageFilter = 'all' | 'stage1' | 'stage2' | 'stage3';
type ViewType = 'featured' | 'all';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  program: string;
  stage: string;
  before: string;
  after: string;
  profit: string;
  duration: string;
  image: string;
  message: string;
  type?: string;
  hasVideo?: boolean;
  hasScreenshot?: boolean;
  videoThumb?: string;
  isVerified?: boolean;
}

// Style constants
const STYLES = {
  glassCard: 'glass-effect rounded-2xl p-4 border',
  verifiedBadge: 'w-4 h-4 text-blue-400',
  ctaButton: 'inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105',
  stageButton: 'px-3 py-1 rounded-full text-xs font-medium transition-all',
  metricValue: 'text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent',
  sectionHeader: 'text-lg font-semibold text-white mb-4 flex items-center gap-2',
  screenshotCard: 'glass-effect rounded-xl p-3 border border-white/10',
  navButton: 'p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors'
};

// Component for rendering P&L screenshots
const ScreenshotCard = ({ label, profit, percentage }: { label: string; profit: string; percentage: string }) => (
  <div className={STYLES.screenshotCard}>
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <p className="text-lg font-bold text-green-400">{profit}</p>
    <p className="text-sm text-green-300">{percentage}</p>
  </div>
);

// Render star rating component
const StarRating = ({ size = 'w-4 h-4' }: { size?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`${size} fill-yellow-400 text-yellow-400`} />
    ))}
  </div>
);

// Component for testimonial mini card
const TestimonialMiniCard = ({ testimonial }: { testimonial: any }) => (
  <div className="glass-effect rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
        <span className="text-lg">{testimonial.image || '👤'}</span>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-xs text-gray-400">{testimonial.location} • {testimonial.program}</p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-green-400 font-bold">{testimonial.profit || testimonial.after}</p>
      <StarRating size="w-3 h-3" />
    </div>
  </div>
);

// Stage filter configuration
const STAGE_FILTERS = [
  { id: 'all', label: 'All Stages', color: 'bg-green-500 text-black' },
  { id: 'stage1', label: 'Stage 1 (Beginner)', color: 'bg-blue-500 text-white' },
  { id: 'stage2', label: 'Stage 2 (Scale)', color: 'bg-purple-500 text-white' },
  { id: 'stage3', label: 'Stage 3 (Pro)', color: 'bg-orange-500 text-white' }
];

const CombinedStudentSuccessSection = () => {
  const [activeView, setActiveView] = useState<ViewType>('featured');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [activeStageFilter, setActiveStageFilter] = useState<StageFilter>('all');
  const [sectionRef, isVisible] = useIntersectionAnimation();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Use animation hooks for counters
  const profitsCounter = useCounterAnimation(10.2, 2000, isVisible, 1);
  const successRateCounter = useCounterAnimation(89, 2000, isVisible, 0);
  const citiesCounter = useCounterAnimation(37, 2000, isVisible, 0);

  // Auto-scroll WhatsApp chats slowly
  useEffect(() => {
    if (!isVisible) return;
    
    const scrollInterval = setInterval(() => {
      if (chatContainerRef.current) {
        const scrollHeight = chatContainerRef.current.scrollHeight;
        const currentScroll = chatContainerRef.current.scrollTop;
        const clientHeight = chatContainerRef.current.clientHeight;
        
        if (currentScroll + clientHeight >= scrollHeight - 10) {
          chatContainerRef.current.scrollTop = 0;
        } else {
          chatContainerRef.current.scrollTop += 1; // Slower scroll
        }
      }
    }, 50); // More frequent but smaller increments

    return () => clearInterval(scrollInterval);
  }, [isVisible]);

  // Featured testimonials data
  const featuredTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Vikram Singh",
      location: "Bangalore",
      program: "Footprint Master",
      stage: "stage2",
      before: "₹5K/week",
      after: "₹3.5L/month",
      profit: "₹3,42,000",
      duration: "4 months",
      image: "👨‍🎓",
      message: "Left my job after 4 months. The institutional order flow strategy is pure gold.",
      type: "video",
      hasVideo: true,
      videoThumb: "From Job to Full-Time Trading",
      isVerified: true
    },
    {
      id: 2,
      name: "Rahul Mehta",
      location: "Mumbai",
      program: "Elite Mentorship",
      stage: "stage3",
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
      stage: "stage2",
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
      stage: "stage1",
      before: "₹0",
      after: "₹65K/month",
      profit: "₹65,000",
      duration: "2 months",
      image: "👩‍💻",
      message: "Started with just ₹30K capital. CMM taught me crypto patterns that actually work. First month itself profitable!",
      type: "screenshot",
      hasScreenshot: true,
      isVerified: true
    }
  ];

  // Additional testimonials data
  const additionalTestimonials = [
    { name: "Amit Kumar", location: "Pune", profit: "₹95,000/month", program: "Footprint" },
    { name: "Sneha Verma", location: "Chennai", profit: "₹78,000/month", program: "CMM" },
    { name: "Karan Singh", location: "Jaipur", profit: "₹1.5L/month", program: "Elite" },
    { name: "Neha Gupta", location: "Kolkata", profit: "₹62,000/month", program: "CMM" },
    { name: "Rohit Sharma", location: "Hyderabad", profit: "₹2.1L/month", program: "Elite" },
    { name: "Pooja Reddy", location: "Noida", profit: "₹88,000/month", program: "Footprint" }
  ];

  const whatsappChats = [
    { time: "10:23 AM", message: "Today's profit ₹18,750! 🎯", sender: "student", isVerified: true, name: "Amit K." },
    { time: "10:24 AM", message: "Footprint pattern worked perfectly", sender: "student" },
    { time: "10:25 AM", message: "Excellent execution! Keep it up 💪", sender: "sidhant" },
    { time: "2:15 PM", message: "₹32K profit this week already!", sender: "student", isVerified: true, name: "Priya S." },
    { time: "2:16 PM", message: "Following exact CMM strategy", sender: "student" },
    { time: "2:17 PM", message: "This is the way! Consistency is key 🔥", sender: "sidhant" },
    { time: "3:45 PM", message: "Hit ₹1L this month! 🚀", sender: "student", isVerified: true, name: "Raj M." },
    { time: "3:46 PM", message: "Stage 2 Footprint magic", sender: "student" }
  ];

  const screenshots = [
    { profit: "+₹45,230", percentage: "+12.3%", label: "Today's P&L" },
    { profit: "+₹1,24,560", percentage: "+31.2%", label: "Weekly Result" },
    { profit: "+₹3,87,900", percentage: "+87.4%", label: "Monthly Gains" },
    { profit: "+₹89,340", percentage: "+22.1%", label: "Single Trade" }
  ];
  
  // Filter testimonials based on selected stage
  const getFilteredTestimonials = () => {
    return activeStageFilter === 'all' 
      ? featuredTestimonials 
      : featuredTestimonials.filter(t => t.stage === activeStageFilter);
  };

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
              {[
                { value: `₹${profitsCounter}Cr`, label: 'Total Student Profits', gradient: 'from-green-400 to-emerald-400' },
                { value: `${successRateCounter}%`, label: 'Success Rate', gradient: 'from-blue-400 to-cyan-400' },
                { value: citiesCounter, label: 'Cities Represented', gradient: 'from-purple-400 to-pink-400' }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`${STYLES.metricValue} bg-gradient-to-r ${metric.gradient}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 mt-2">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stage Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Stage Filter Buttons */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStageFilter('all')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeStageFilter === 'all'
                      ? 'bg-green-500 text-black'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  All Stages
                </button>
                <button
                  onClick={() => setActiveStageFilter('stage1')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeStageFilter === 'stage1'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Stage 1 (Beginner)
                </button>
                <button
                  onClick={() => setActiveStageFilter('stage2')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeStageFilter === 'stage2'
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Stage 2 (Scale)
                </button>
                <button
                  onClick={() => setActiveStageFilter('stage3')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeStageFilter === 'stage3'
                      ? 'bg-orange-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Stage 3 (Pro)
                </button>
              </div>
            </div>
            
            {/* View Toggle */}
            <div className="inline-flex rounded-full bg-white/10 p-1">
              <button
                onClick={() => setActiveView('featured')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeView === 'featured' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Featured Stories
              </button>
              <button
                onClick={() => setActiveView('all')}
                className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                  activeView === 'all' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4" />
                View All 2,847+
              </button>
            </div>
          </div>

          {/* Featured View */}
          {activeView === 'featured' && (
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              
              {/* Left Column - WhatsApp Chats */}
              <div className="space-y-4">
                <h3 className={STYLES.sectionHeader}>
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  Live Group Updates
                  <span className="ml-2 px-2 py-0.5 bg-green-500/20 rounded-full text-xs text-green-400 animate-pulse">
                    LIVE
                  </span>
                </h3>
                <div className="glass-effect rounded-2xl p-4 border border-green-500/20 bg-gradient-to-br from-green-950/20 to-emerald-950/10 relative overflow-hidden">
                  <div 
                    ref={chatContainerRef}
                    className="space-y-3 max-h-64 overflow-y-auto scroll-smooth scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {whatsappChats.concat(whatsappChats).map((chat, index) => {
                      const isSidhant = chat.sender === 'sidhant';
                      return (
                        <div key={index} className={`flex ${isSidhant ? 'justify-start' : 'justify-end'}`}>
                          <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            isSidhant ? 'bg-gray-800 rounded-tl-none' : 'bg-green-600 rounded-tr-none text-white'
                          }`}>
                            <div className="flex items-start gap-2">
                              <div className="flex-1">
                                {chat.name && <p className="text-xs font-semibold mb-1">{chat.name}</p>}
                                <p className="text-sm">{chat.message}</p>
                                <p className="text-xs opacity-70 mt-1">{chat.time}</p>
                              </div>
                              {chat.isVerified && <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0 mt-1" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* P&L Screenshots */}
                <div className="grid grid-cols-2 gap-3">
                  {screenshots.slice(0, 2).map((shot, index) => (
                    <ScreenshotCard key={index} {...shot} />
                  ))}
                </div>
              </div>

              {/* Center Column - Featured Testimonial */}
              <div className="lg:col-span-1">
                <h3 className={STYLES.sectionHeader}>
                  <Star className="w-5 h-5 text-yellow-400" />
                  Success Stories
                </h3>
                
                <div className="relative">
                  {(() => {
                    const filteredTestimonials = getFilteredTestimonials();
                    const currentTestimonial = filteredTestimonials[activeTestimonial % filteredTestimonials.length] || featuredTestimonials[0];
                    
                    return (
                      <div className="glass-effect rounded-2xl p-6 border border-yellow-500/20 bg-gradient-to-br from-yellow-950/20 to-orange-950/10">
                        <div className="mb-4">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl flex-shrink-0">
                              {currentTestimonial.image}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-white">{currentTestimonial.name}</h4>
                                {currentTestimonial.isVerified && (
                                  <CheckCircle className="w-4 h-4 text-blue-400" />
                                )}
                              </div>
                              <p className="text-sm text-gray-400 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {currentTestimonial.location}
                              </p>
                              <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                                {currentTestimonial.program}
                              </span>
                            </div>
                      </div>
                    </div>
                    
                        {/* Video/Screenshot Indicator */}
                        {currentTestimonial.hasVideo && (
                          <div className="mb-3 p-3 bg-black/30 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="w-5 h-5 text-yellow-400" />
                              <span className="text-sm text-gray-300">{currentTestimonial.videoThumb}</span>
                            </div>
                            <span className="text-xs text-gray-500">Watch Video</span>
                          </div>
                        )}
                    
                        {/* Scannable Message with Expand */}
                        <div className="mb-4">
                          <p className="text-gray-300 italic">
                            "{expandedTestimonial === activeTestimonial 
                              ? currentTestimonial.message 
                              : `${currentTestimonial.message.slice(0, 100)}...`}"
                          </p>
                          {currentTestimonial.message.length > 100 && (
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
                          {[
                            { label: 'BEFORE', color: 'red', text: 'Before TWS', value: currentTestimonial.before },
                            { label: 'AFTER', color: 'green', text: 'After TWS', value: currentTestimonial.after }
                          ].map((item, idx) => (
                            <div key={idx} className="relative">
                              <div className={`absolute -top-2 left-2 px-2 py-0.5 bg-${item.color}-500/20 rounded text-xs font-bold text-${item.color}-400`}>
                                {item.label}
                              </div>
                              <p className="text-xs text-gray-500 mt-2">{item.text}</p>
                              <p className={`text-lg font-bold text-${item.color}-400`}>{item.value}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-400">In just {currentTestimonial.duration}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                  
                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)}
                      className={STYLES.navButton}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex gap-1">
                      {featuredTestimonials.map((_, index) => (
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
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % featuredTestimonials.length)}
                      className={STYLES.navButton}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - More Screenshots & Video Thumbnails */}
              <div className="space-y-4">
                <h3 className={STYLES.sectionHeader}>
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
                    <ScreenshotCard key={index} {...shot} />
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
          )}

          {/* All Results View (Collapsed by default) */}
          {activeView === 'all' && (
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredTestimonials.concat(additionalTestimonials.slice(0, 6)).map((testimonial, index) => (
                  <TestimonialMiniCard key={index} testimonial={testimonial} />
                ))}
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-400">
                  Showing 10 of 2,847+ verified success stories
                </p>
                <a 
                  href="/results" 
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mt-2 transition-colors"
                >
                  View Complete Results Gallery
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-6">
              Join <span className="text-white font-semibold">10,847+ successful traders</span> who transformed their financial future
            </p>
            
            <button
              onClick={() => {
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105"
            >
              Start Your Success Story
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CombinedStudentSuccessSection;