import React from 'react';
import { Brain, TrendingUp, Users, BookOpen, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Psychology Mastery",
    description: "Rewire your trading mindset. Eliminate fear, greed, and emotional decisions.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: TrendingUp,
    title: "Live Market Analysis",
    description: "Trade alongside professionals in real-time. Learn by doing, not just watching.",
    color: "text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Users,
    title: "Elite Community",
    description: "Join 5000+ serious traders. Network, share insights, and grow together.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: BookOpen,
    title: "Institutional Strategies",
    description: "Learn the strategies banks and hedge funds use to move markets.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10"
  },
  {
    icon: Target,
    title: "Personalized Roadmap",
    description: "Get a custom trading plan based on your goals, capital, and risk appetite.",
    color: "text-red-400",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Zap,
    title: "Fast-Track Success",
    description: "Compress years of learning into weeks with our proven methodology.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10"
  }
];

const ModernFeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why TWS Gurukul?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just teach trading. We transform mindsets, build discipline, 
            and create consistent profitable traders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-effect rounded-3xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className={`inline-flex p-3 rounded-2xl ${feature.bgColor} mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;