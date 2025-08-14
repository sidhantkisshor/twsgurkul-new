import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, BarChart3, Crown, ArrowRight, Check, Clock, Users, IndianRupee, TrendingUp, Star } from 'lucide-react';

const ProgramsOverviewSection = () => {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const programs = [
    {
      id: 'cmm',
      name: 'Crypto Mastery Method',
      route: '/crypto',
      tagline: 'Start Your Trading Journey',
      level: 'BEGINNER',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      bgGradient: 'from-blue-950/20 to-cyan-950/10',
      duration: '45 Days',
      sessions: '3x per week',
      currentBatch: '4,200+ students',
      price: '₹14,999',
      originalPrice: '₹29,999',
      transformation: {
        from: '₹0/month',
        to: '₹50K/month',
        timeline: '45 days'
      },
      features: [
        'Crypto fundamentals & market basics',
        'Risk management & position sizing',
        'Technical analysis patterns',
        'Live trading sessions',
        'Private Telegram group',
        'Lifetime community access'
      ],
      bestFor: 'Complete beginners with ₹10-50K capital',
      successRate: '87%',
      testimonial: {
        name: 'Priya S.',
        location: 'Delhi',
        text: 'Started with zero knowledge, now making ₹45K monthly!',
        profit: '+₹45,000/month'
      }
    },
    {
      id: 'footprint',
      name: 'Footprint Trading',
      route: '/footprint',
      tagline: 'Scale Your Profits',
      level: 'INTERMEDIATE',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      bgGradient: 'from-purple-950/20 to-pink-950/10',
      duration: '60 Days',
      sessions: '5x per week',
      currentBatch: '3,800+ students',
      price: '₹34,999',
      originalPrice: '₹69,999',
      transformation: {
        from: '₹50K/month',
        to: '₹2L/month',
        timeline: '60 days'
      },
      features: [
        'Institutional order flow analysis',
        'Footprint charts mastery',
        'Volume profile trading',
        'Multi-timeframe analysis',
        'Advanced risk models',
        'Personal trading plan'
      ],
      bestFor: 'Traders making some profit but inconsistent',
      successRate: '91%',
      testimonial: {
        name: 'Vikram R.',
        location: 'Mumbai',
        text: 'Footprint changed everything - ₹2L consistent now',
        profit: '+₹2,00,000/month'
      }
    },
    {
      id: 'elite',
      name: 'Elite Mentorship',
      route: '/mentorship',
      tagline: 'Master The Markets',
      level: 'ADVANCED',
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30',
      bgGradient: 'from-orange-950/20 to-red-950/10',
      duration: '90 Days',
      sessions: 'Daily live',
      currentBatch: '2,847+ students',
      price: '₹89,999',
      originalPrice: '₹1,49,999',
      transformation: {
        from: '₹2L/month',
        to: '₹10L/month',
        timeline: '90 days'
      },
      features: [
        '1-on-1 mentorship with Sidhant',
        'Live trade copying',
        'Proprietary indicators access',
        'Hedge fund strategies',
        'Portfolio management',
        'Business scaling blueprint'
      ],
      bestFor: 'Profitable traders ready to go full-time',
      successRate: '94%',
      testimonial: {
        name: 'Arjun K.',
        location: 'Bangalore',
        text: 'Quit my job, now earning ₹8L monthly!',
        profit: '+₹8,00,000/month'
      }
    }
  ];

  return (
    <section id="programs" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Choose Your </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trading Path
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each program is designed for a specific trading level. Start where you are, 
              reach where you want to be.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProgram(index)}
                onMouseLeave={() => setHoveredProgram(null)}
                className={`relative group transition-all duration-500 ${
                  hoveredProgram === index ? 'scale-105 z-10' : hoveredProgram !== null ? 'scale-95 opacity-70' : ''
                }`}
              >
                <div className={`glass-effect rounded-3xl p-6 border ${program.borderColor} hover:border-white/30 h-full bg-gradient-to-br ${program.bgGradient}`}>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`text-xs font-bold bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                        {program.level}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">{program.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{program.tagline}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Transformation Promise */}
                  <div className="p-4 rounded-xl bg-black/30 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">Current</span>
                      <span className="text-xs text-gray-500">Target</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-red-400">{program.transformation.from}</span>
                      <div className="flex-1 flex items-center">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
                        <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                      </div>
                      <span className="text-lg font-bold text-green-400">{program.transformation.to}</span>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2">in {program.transformation.timeline}</p>
                  </div>

                  {/* Key Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{program.sessions}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {program.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {program.features.length > 4 && (
                      <p className="text-xs text-gray-500 pl-6">+{program.features.length - 4} more features</p>
                    )}
                  </div>

                  {/* Success Rate */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20 mb-4">
                    <span className="text-sm text-gray-300">Success Rate</span>
                    <span className="font-bold text-green-400">{program.successRate}</span>
                  </div>

                  {/* Testimonial */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white">{program.testimonial.name}</p>
                        <p className="text-xs text-gray-500">{program.testimonial.location}</p>
                      </div>
                      <span className="text-xs font-bold text-green-400">{program.testimonial.profit}</span>
                    </div>
                    <p className="text-xs text-gray-400 italic">"{program.testimonial.text}"</p>
                  </div>

                  {/* Price & CTA */}
                  <div className="space-y-3">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-sm text-gray-500 line-through">{program.originalPrice}</span>
                        <p className="text-2xl font-bold text-white">{program.price}</p>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">
                        50% OFF
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => navigate(program.route)}
                      className={`w-full py-3 rounded-full bg-gradient-to-r ${program.color} text-white font-bold hover:shadow-lg transition-all cursor-pointer`}
                    >
                      Learn More →
                    </button>
                  </div>

                  {/* Best For */}
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Best for: {program.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-400 mb-6">
              Not sure which program is right for you?
            </p>
            <button
              onClick={() => {
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 group"
            >
              Take Our 2-Minute Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverviewSection;