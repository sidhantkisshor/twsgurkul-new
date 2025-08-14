import React, { useMemo } from 'react';
import { getDomainForMediaName, getLogoFallbackUrls } from '../../../utils/mediaLogos';

interface LogoItem {
  name: string;
  src?: string; // Optional for now, can use placeholder
  alt: string;
}

const AuthorityStrip: React.FC = () => {
  // Configurable array of logos - easy to update later
  const logos: LogoItem[] = [
    { name: 'Economic Times', alt: 'Featured in Economic Times' },
    { name: 'CNBC TV18', alt: 'Featured on CNBC TV18' },
    { name: 'Business Standard', alt: 'Featured in Business Standard' },
    { name: 'MoneyControl', alt: 'Featured on MoneyControl' },
    { name: 'Zee Business', alt: 'Featured on Zee Business' },
  ];

  const resolvedLogos = useMemo(() => {
    return logos.map((item) => {
      const domain = getDomainForMediaName(item.name);
      if (!domain) return item;
      const fallbacks = getLogoFallbackUrls(domain, 128);
      return { ...item, src: fallbacks[0], _fallbacks: fallbacks } as LogoItem & { _fallbacks?: string[] };
    });
  }, []);

  return (
    <section className="w-full py-8 sm:py-12 bg-black/50 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <p className="text-center text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
          Featured by India's top finance media
        </p>
        
        {/* Logo Grid */}
        <div className="relative">
          {/* Gradient fade on edges for carousel effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Logo container */}
          <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-12 md:gap-16">
            {resolvedLogos.map((logo: any, index) => (
              <div
                key={index}
                className="group transition-all duration-300 hover:scale-110"
              >
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-8 w-auto object-contain filter grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const list = (logo._fallbacks || []) as string[];
                      const currentIndex = list.indexOf(img.src);
                      const next = list[currentIndex + 1];
                      if (next) {
                        img.src = next;
                      } else {
                        // If all fail, remove image so text placeholder shows
                        img.style.display = 'none';
                        const parent = img.parentElement;
                        if (parent) {
                          const text = document.createElement('div');
                          text.className = 'text-gray-600 font-semibold text-sm sm:text-base';
                          text.textContent = logo.name;
                          parent.appendChild(text);
                        }
                      }
                    }}
                  />
                ) : (
                  // Placeholder text when no logo image
                  <div className="text-gray-600 font-semibold text-sm sm:text-base hover:text-gray-500 transition-colors duration-300">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Optional: Animated ticker for mobile */}
        <div className="sm:hidden mt-6 overflow-hidden">
          <div 
            className="flex gap-8"
            style={{
              animation: 'scroll 20s linear infinite',
            }}
          >
            {/* Duplicate for seamless scroll */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-gray-600 font-medium text-sm"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AuthorityStrip;