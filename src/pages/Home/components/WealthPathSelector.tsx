import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Bitcoin, Radio, CheckCircle, Sparkles } from 'lucide-react';

const wealthPaths = [
  {
    id: 'footprint-mastery',
    programName: 'Footprint Mastery',
    identity: 'The Analyst',
    mainBenefit: 'Read Order Flow Like Institutional Traders',
    subhead: 'Master footprint charts to see where big money enters and exits',
    icon: Eye,
    link: '/footprint',
    gradient: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-500/10 to-purple-600/10',
    features: [
      'See exactly where institutions place orders',
      'Identify accumulation zones before breakouts',
      'Personal mentorship on live markets'
    ],
    testimonial: '"Finally, I see WHY price moves, not just that it moved" - Rajesh K.',
    trustElement: '1000+ Active Students',
    cta: 'Start Footprint Mastery',
    colorClasses: {
      text: 'text-blue-400',
      glow: 'shadow-blue-500/25'
    }
  },
  {
    id: 'crypto-mastery',
    programName: 'Crypto Market Mastery',
    mainBenefit: 'Master Crypto with Market Profile Tools',
    subhead: 'Apply TPO, Volume Profile, and Footprint analysis to crypto markets',
    icon: Bitcoin,
    link: '/crypto',
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-500/10 to-red-600/10',
    features: [
      '24/7 crypto market coverage',
      'Institutional-grade volatility tools',
      'TPO and Volume Profile mastery'
    ],
    testimonial: '"From -70% to +280% portfolio in 6 months" - Priya S.',
    trustElement: 'Regulated & Compliant',
    cta: 'Master Crypto Markets',
    colorClasses: {
      text: 'text-orange-400',
      glow: 'shadow-orange-500/25'
    }
  },
  {
    id: 'super-streams',
    programName: 'Super Streams',
    mainBenefit: 'Copy Professional Trades Live',
    subhead: 'Trade alongside experts in real-time streaming sessions',
    icon: Radio,
    link: '/superstreams',
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-500/10 to-emerald-600/10',
    features: [
      'Live morning trading sessions',
      'Real-time trade alerts and execution',
      'Professional risk management included'
    ],
    testimonial: '"₹45K profit last month just copying trades" - Amit P.',
    trustElement: 'Live Daily Sessions',
    cta: 'Join Live Trading',
    colorClasses: {
      text: 'text-green-400',
      glow: 'shadow-green-500/25'
    }
  }
];

const WealthPathSelector = React.memo(() => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Memoize hover handlers to prevent unnecessary re-renders
  const handleMouseEnter = useCallback((pathId: string) => {
    setHoveredPath(pathId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredPath(null);
  }, []);

  // Memoize the trust indicators data to prevent recreation on every render
  const trustIndicators = useMemo(() => [
    { color: 'bg-green-400', text: '5000+ Active Traders' },
    { color: 'bg-blue-400', text: '₹50Cr+ Profits Generated' },
    { color: 'bg-purple-400', text: '98% Success Rate' }
  ], []);

  // Memoize the rendered cards to prevent unnecessary re-renders
  const renderedCards = useMemo(() => 
    wealthPaths.map((path, index) => (
      <Link
        key={path.id}
        to={path.link}
        className="group relative block"
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => handleMouseEnter(path.id)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
        
        <div className="relative glass-effect rounded-2xl p-6 lg:p-7 h-full border border-white/10 group-hover:border-white/20 transition-all duration-300 hover:transform hover:translate-y-[-3px]">
          {/* Background pattern */}
          <div className={`absolute inset-0 bg-gradient-to-br ${path.bgGradient} rounded-2xl opacity-50`} />
          
          <div className="relative z-10">
            {/* Icon and Program Name */}
            <div className="mb-5">
              <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${path.gradient} shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <path.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                {path.programName}
              </h3>
            </div>

            {/* Primary Benefit with gradient text */}
            <h4 className={`text-lg lg:text-xl font-semibold bg-gradient-to-r ${path.gradient} bg-clip-text text-transparent mb-3`}>
              {path.mainBenefit}
            </h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {path.subhead}
            </p>

            {/* Features with glass effect - better spacing */}
            <div className="space-y-2.5 mb-6">
              {path.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 glass-effect rounded-lg p-2.5 border border-white/5">
                  <CheckCircle className={`w-4 h-4 ${path.colorClasses.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Testimonial with subtle background */}
            <div className="mb-6 p-3.5 bg-black/30 rounded-xl border border-white/5">
              <p className="text-sm text-gray-400 italic">
                {path.testimonial}
              </p>
            </div>

            {/* Trust Element with glow */}
            <div className="mb-6 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${path.gradient} animate-pulse`} />
              <p className={`text-sm font-medium ${path.colorClasses.text}`}>
                {path.trustElement}
              </p>
            </div>

            {/* Enhanced CTA Button */}
            <button className={`w-full bg-gradient-to-r ${path.gradient} text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl ${path.colorClasses.glow} group relative overflow-hidden`}>
              <span className="relative z-10 text-base">{path.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Floating accent elements */}
          {hoveredPath === path.id && (
            <>
              <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${path.gradient} rounded-full blur-xl opacity-50 animate-pulse`} />
              <div className={`absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br ${path.gradient} rounded-full blur-xl opacity-50 animate-pulse`} />
            </>
          )}
        </div>
      </Link>
    )), [hoveredPath, handleMouseEnter, handleMouseLeave]);

  return (
    <section id="wealth-paths" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background gradient effects - matching hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
      
      {/* Grid pattern overlay */}
      <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/10 mb-5">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Choose Your Path</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              Master The Markets Your Way
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Three proven methodologies. Pick the one that matches your goals and lifestyle.
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {renderedCards}
        </div>

        {/* Bottom trust indicators with glass effect */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <div className="glass-effect rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm">
              {trustIndicators.map((indicator, index) => (
                <React.Fragment key={indicator.text}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${indicator.color} rounded-full animate-pulse`} />
                    <span className="text-gray-300">{indicator.text}</span>
                  </div>
                  {index < trustIndicators.length - 1 && (
                    <div className="hidden sm:block w-px h-4 bg-gray-700" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WealthPathSelector.displayName = 'WealthPathSelector';

export default WealthPathSelector;