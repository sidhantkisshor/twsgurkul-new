import React from 'react';
import { Award, BookOpen, Users, TrendingUp, Shield, Target } from 'lucide-react';

const CredibilitySection = () => {
  const achievements = [
    {
      icon: Award,
      title: '8+ Years Trading Experience',
      description: 'Professional trader turned educator with proven track record'
    },
    {
      icon: Users,
      title: '10,847+ Students Trained',
      description: 'Largest trading community in India with active members'
    },
    {
      icon: TrendingUp,
      title: '₹10 Cr+ Student Profits',
      description: 'Verified results from students across all programs'
    },
    {
      icon: BookOpen,
      title: '3 Specialized Programs',
      description: 'Structured learning paths for every experience level'
    },
    {
      icon: Shield,
      title: '30-Day Money Back',
      description: 'Complete refund if not satisfied with the program'
    },
    {
      icon: Target,
      title: '89% Success Rate',
      description: 'Students achieving consistent profits within 6 months'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">Why TWS Gurukul</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Learn From </span>
              <span className="text-green-400">Sidhant?</span>
            </h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-3 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidhant's Story */}
          <div className="glass-effect rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-green-500/5 to-transparent">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">From Struggling Trader to Mentor</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    "I lost ₹3.2 lakhs in my first year of trading. The pain of those losses drove me to 
                    master the markets. After 8 years of professional trading and training 10,000+ students, 
                    I've created systems that work for Indians."
                  </p>
                  <p>
                    "Every program at TWS Gurukul is designed from real experience - not theory. We teach 
                    what actually works in Indian markets, with Indian capital, for Indian traders."
                  </p>
                  <p className="text-green-400 font-semibold italic">
                    - Sidhant Kisshor, Founder TWS Gurukul
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-effect rounded-xl p-4 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Trading Since</p>
                  <p className="text-2xl font-bold text-white">2016</p>
                </div>
                <div className="glass-effect rounded-xl p-4 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Personal Best Trade</p>
                  <p className="text-2xl font-bold text-green-400">₹8.7 Lakhs</p>
                </div>
                <div className="glass-effect rounded-xl p-4 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Students Mentored</p>
                  <p className="text-2xl font-bold text-blue-400">10,847+</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;