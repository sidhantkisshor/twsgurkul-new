import React, { useState, useEffect } from 'react';
import { Home, MessageSquare, Map, Target, Trophy, User, Phone } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon: React.ElementType;
}

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const sections: Section[] = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'problem', label: 'Story', icon: MessageSquare },
    { id: 'journey', label: 'Path', icon: Map },
    { id: 'quiz', label: 'Quiz', icon: Target },
    { id: 'success', label: 'Results', icon: Trophy },
    { id: 'mentor', label: 'Mentor', icon: User },
    { id: 'cta', label: 'Contact', icon: Phone }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show navigation after scrolling 30% of viewport
      setIsVisible(scrollY > windowHeight * 0.3);
      
      // Update active section based on scroll position
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Desktop navigation dots
  return (
    <>
      {/* Desktop Side Navigation */}
      <div className={`
        hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40
        flex-col gap-4 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
      `}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              group relative flex items-center justify-center
              w-12 h-12 rounded-full transition-all duration-300
              ${activeSection === section.id 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 scale-110' 
                : 'bg-white/10 hover:bg-white/20'
              }
            `}
            aria-label={`Navigate to ${section.label}`}
          >
            <section.icon className={`
              w-5 h-5 transition-colors
              ${activeSection === section.id ? 'text-white' : 'text-gray-400'}
            `} />
            
            {/* Tooltip */}
            <span className="
              absolute right-full mr-3 px-2 py-1 rounded bg-black/80 text-white text-xs
              opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity
              whitespace-nowrap
            ">
              {section.label}
            </span>
          </button>
        ))}
        
        {/* Progress Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 -z-10" />
      </div>
      
      {/* Mobile Bottom Navigation */}
      <div className={`
        lg:hidden fixed bottom-0 left-0 right-0 z-40
        transition-all duration-500
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <div className="bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex justify-around items-center py-2">
            {sections.slice(0, 5).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all
                  ${activeSection === section.id 
                    ? 'text-green-400 bg-white/10' 
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                <section.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`
          fixed bottom-6 right-6 lg:bottom-8 lg:right-24 z-30
          w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500
          flex items-center justify-center shadow-lg transition-all duration-500
          hover:scale-110 hover:shadow-green-500/25
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        `}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
};

export default SectionNavigation;