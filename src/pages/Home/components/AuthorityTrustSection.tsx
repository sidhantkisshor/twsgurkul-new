import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Star, Mic, Building, Trophy, Globe, ExternalLink, Newspaper, Tv, ArrowRight } from 'lucide-react';

interface MediaLogo {
  name: string;
  type: string;
  displayName: string;
  abbr: string;
}

interface AuthorityTrustSectionProps {
  onQuizOpen?: () => void;
}

const AuthorityTrustSection: React.FC<AuthorityTrustSectionProps> = ({ onQuizOpen }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simulated live trader count
  const [liveTraders, setLiveTraders] = useState(2847);
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTraders(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  // Data arrays
  const achievements = [
    { icon: Trophy, label: "Nationally Recognized Trader", year: "2022" },
    { icon: Award, label: "Best Educator Award", year: "2023" },
    { icon: Users, label: "10,000+ Students Milestone", year: "2023" },
    { icon: Star, label: "Top Trading Mentor", year: "2024" }
  ];

  const credentials = [
    {
      type: "TEDx Speaker",
      event: "TEDx Talk",
      topic: "Decoding Market Psychology",
      icon: Mic,
      color: "from-red-500 to-orange-500",
      link: "https://www.youtube.com/watch?v=kUloX27rFvk&ab_channel=TEDxTalks",
      linkText: "Watch Full Talk"
    },
    {
      type: "IIT Guest Speaker",
      event: "IIT Bombay",
      topic: "Financial Markets Masterclass",
      viewers: "5000+ students",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      link: null,
      linkText: null
    },
    {
      type: "Trading Educator",
      event: "TWS Gurukul Founder",
      topic: "10,000+ Students Trained",
      viewers: "89% Success Rate",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      link: "#success",
      linkText: "View Success Stories"
    }
  ];

  const mediaLogos = [
    { name: "Economic Times", type: "newspaper", displayName: "Economic Times", abbr: "ET" },
    { name: "Business Standard", type: "newspaper", displayName: "Business Standard", abbr: "BS" },
    { name: "CNBC TV18", type: "tv", displayName: "CNBC TV18", abbr: "CNBC" },
    { name: "Moneycontrol", type: "website", displayName: "Moneycontrol", abbr: "MC" },
    { name: "Zee Business", type: "tv", displayName: "Zee Business", abbr: "ZEE" },
    { name: "Bloomberg", type: "tv", displayName: "Bloomberg", abbr: "BBG" }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-linear-to-b from-gray-900 via-black to-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Trusted by Thousands</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Learn from a </span>
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Proven Expert
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join India's most trusted trading education platform led by Sidhant
          </p>

          {/* Live indicator */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-400">
              {liveTraders.toLocaleString()} students learning right now
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Content Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* Left - TEDx/Credentials */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                Credentials & Recognition
              </h3>
              
              <div className="space-y-4">
                {credentials.map((cred, index) => (
                  <div 
                    key={index}
                    className={`glass-effect rounded-2xl p-5 border border-white/10 bg-linear-to-br ${cred.color.replace('from-', 'from-').replace('to-', 'to-')}/10 hover:scale-[1.02] transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <cred.icon className="w-5 h-5 text-white" />
                          <span className="text-sm font-semibold text-gray-400">{cred.type}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{cred.event}</h4>
                        <p className="text-sm text-gray-400 mb-2">{cred.topic}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{cred.viewers}</span>
                          {cred.link && (
                            <a 
                              href={cred.link}
                              target={cred.link.startsWith('http') ? '_blank' : undefined}
                              rel={cred.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              {cred.linkText}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Media & Collaborations */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-400" />
                Media Recognition
              </h3>
              
              {/* Media Logos Grid - Subtle Professional Design */}
              <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 bg-linear-to-br from-blue-950/20 to-cyan-950/10 mb-6">
                <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-medium">As Featured In</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {mediaLogos.map((media: MediaLogo, index) => (
                    <div 
                      key={index}
                      className="group relative rounded-lg p-3 border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center justify-center gap-1">
                        {/* Icon */}
                        <div className="text-gray-500 group-hover:text-gray-400 transition-colors">
                          {media.type === 'tv' && <Tv className="w-4 h-4" />}
                          {media.type === 'newspaper' && <Newspaper className="w-4 h-4" />}
                          {media.type === 'website' && <Globe className="w-4 h-4" />}
                        </div>
                        
                        {/* Logo Text */}
                        <div className="text-center">
                          <div className="text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
                            {media.abbr}
                          </div>
                          <div className="text-[9px] text-gray-600 mt-0.5 group-hover:text-gray-500 transition-colors">
                            {media.displayName}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Additional Achievements */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className="glass-effect rounded-xl p-4 border border-white/10">
                    <achievement.icon className="w-6 h-6 text-yellow-400 mb-2" />
                    <p className="text-sm font-semibold text-white">{achievement.label}</p>
                    <p className="text-xs text-gray-500">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-6">
              Ready to transform your trading journey with proven strategies?
            </p>
            <button
              onClick={() => {
                if (onQuizOpen) {
                  onQuizOpen();
                } else {
                  document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-3 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-8 py-4 font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105"
            >
              Find Your Perfect Program
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>


    </section>
  );
};



export default AuthorityTrustSection;