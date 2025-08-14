import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, IndianRupee, Star, Mic, Building, Play, CheckCircle, TrendingUp, Trophy, Globe, ExternalLink } from 'lucide-react';
import { getDomainForMediaName, getLogoFallbackUrls } from '../../../utils/mediaLogos';

const AuthorityTrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCredential, setActiveCredential] = useState(0);
  
  // Animated counters
  const [counters, setCounters] = useState({
    students: 0,
    profits: 0,
    rating: 0
  });

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counters
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(10847 * progress),
        profits: Math.floor(10.2 * progress * 10) / 10,
        rating: Math.floor(5 * progress * 10) / 10
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({ students: 10847, profits: 10.2, rating: 5.0 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Auto-rotate credentials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCredential((prev) => (prev + 1) % credentials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const credentials = [
    {
      type: "TEDx Speaker",
      event: "TEDx IITR",
      topic: "Decoding Market Psychology",
      viewers: "1.2M+ views",
      icon: Mic,
      color: "from-red-500 to-orange-500",
      link: "https://www.youtube.com/watch?v=tedx-example", // Replace with actual TEDx link
      linkText: "Watch Full Talk"
    },
    {
      type: "IIT Guest Faculty",
      event: "IIT Delhi & Roorkee",
      topic: "Financial Markets Masterclass",
      viewers: "5000+ students",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      link: "https://iit-example.com/sidhant-talk", // Replace with actual IIT link
      linkText: "View Session Details"
    },
    {
      type: "Media Feature",
      event: "Economic Times",
      topic: "India's Rising Trading Mentor",
      viewers: "Featured Article",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      link: "https://economictimes.com/sidhant-feature", // Replace with actual article link
      linkText: "Read Full Article"
    }
  ];

  const mediaLogos = [
    { name: "Economic Times", type: "newspaper" },
    { name: "Business Standard", type: "newspaper" },
    { name: "CNBC TV18", type: "tv" },
    { name: "Moneycontrol", type: "website" },
    { name: "Zee Business", type: "tv" },
    { name: "Bloomberg Quint", type: "tv" }
  ].map((m) => {
    const domain = getDomainForMediaName(m.name);
    const fallbacks = domain ? getLogoFallbackUrls(domain, 128) : [];
    return { ...m, src: fallbacks[0], _fallbacks: fallbacks } as typeof m & { src?: string; _fallbacks?: string[] };
  });

  const achievements = [
    { icon: Trophy, label: "Nationally Recognized Trader", year: "2022" },
    { icon: Award, label: "Best Educator Award", year: "2023" },
    { icon: Star, label: "5-Star Google Rating", year: "Consistent" },
    { icon: Users, label: "Largest Trading Community", year: "North India" }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[150px]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[150px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Trusted by India's Best</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Learn from India's
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Most Trusted Trading Mentor
              </span>
            </h2>
          </div>

          {/* Main Trust Metrics */}
          <div className="mb-16">
            <div className="glass-effect rounded-3xl p-8 border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-blue-950/10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {counters.students.toLocaleString()}+
                  </div>
                  <p className="text-gray-400">Students Trained</p>
                </div>
                <div className="text-center">
                  <IndianRupee className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    ₹{counters.profits}Cr+
                  </div>
                  <p className="text-gray-400">Student Profits Generated</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-4xl sm:text-5xl font-bold text-yellow-400">
                    {counters.rating}
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 mt-2">Student Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Showcase */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* Left - TEDx/IIT Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Mic className="w-6 h-6 text-purple-400" />
                Speaking Engagements
              </h3>
              
              <div className="space-y-4">
                {credentials.map((cred, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveCredential(index);
                      // Open link if already active
                      if (activeCredential === index && cred.link) {
                        window.open(cred.link, '_blank', 'noopener,noreferrer');
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'authority_card_click', {
                            event_category: 'engagement',
                            event_label: cred.type
                          });
                        }
                      }
                    }}
                    className={`
                      glass-effect rounded-2xl p-6 border cursor-pointer transition-all group
                      ${activeCredential === index 
                        ? 'border-white/30 scale-105 bg-gradient-to-br ' + cred.color + ' bg-opacity-10' 
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`
                        w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                        bg-gradient-to-br ${cred.color}
                      `}>
                        <cred.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-white">{cred.type}</h4>
                            <p className="text-sm text-gray-400">{cred.event}</p>
                          </div>
                          {activeCredential === index && (
                            <Play className="w-5 h-5 text-white animate-pulse" />
                          )}
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{cred.topic}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500">{cred.viewers}</p>
                          {activeCredential === index && (
                            <a
                              href={cred.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (typeof window !== 'undefined' && (window as any).gtag) {
                                  (window as any).gtag('event', 'authority_link_click', {
                                    event_category: 'engagement',
                                    event_label: cred.type
                                  });
                                }
                              }}
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
              
              {/* Achievements */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="glass-effect rounded-xl p-4 border border-white/10">
                    <achievement.icon className="w-6 h-6 text-yellow-400 mb-2" />
                    <p className="text-sm font-semibold text-white">{achievement.label}</p>
                    <p className="text-xs text-gray-500">{achievement.year}</p>
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
              
              {/* Media Logos Grid */}
              <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-cyan-950/10 mb-6">
                <p className="text-sm text-gray-400 mb-4">Featured In</p>
                <div className="grid grid-cols-3 gap-4">
                  {mediaLogos.map((media: any, index) => (
                    <div 
                      key={index}
                      className="glass-effect rounded-lg p-3 border border-white/5 hover:border-white/20 transition-all hover:scale-105"
                    >
                      <div className="h-8 flex items-center justify-center">
                        {media.src ? (
                          <img
                            src={media.src}
                            alt={media.name}
                            className="h-6 w-auto object-contain filter grayscale opacity-70"
                            loading="lazy"
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              const list = (media._fallbacks || []) as string[];
                              const currentIndex = list.indexOf(img.src);
                              const next = list[currentIndex + 1];
                              if (next) {
                                img.src = next;
                              } else {
                                img.style.display = 'none';
                                const parent = img.parentElement;
                                if (parent) {
                                  const text = document.createElement('span');
                                  text.className = 'text-xs font-semibold text-gray-300';
                                  text.textContent = media.name;
                                  parent.appendChild(text);
                                }
                              }
                            }}
                          />
                        ) : (
                          <span className="text-xs font-semibold text-gray-300">{media.name}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Additional Achievements */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {achievements.slice(2).map((achievement, index) => (
                  <div key={index} className="glass-effect rounded-xl p-4 border border-white/10">
                    <achievement.icon className="w-6 h-6 text-yellow-400 mb-2" />
                    <p className="text-sm font-semibold text-white">{achievement.label}</p>
                    <p className="text-xs text-gray-500">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Badges Bar */}
          <div className="glass-effect rounded-2xl p-6 border border-white/10 bg-gradient-to-r from-green-950/20 via-blue-950/20 to-purple-950/20">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="w-px h-5 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Award Winning</span>
              </div>
              <div className="w-px h-5 bg-gray-700" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">89% Success Rate</span>
              </div>
              <div className="w-px h-5 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">10,847+ Alumni</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-6">
              Join the community trusted by <span className="text-white font-semibold">India's smartest traders</span>
            </p>
            <button
              onClick={() => {
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Award className="w-5 h-5" />
              Learn from the Best
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthorityTrustSection;