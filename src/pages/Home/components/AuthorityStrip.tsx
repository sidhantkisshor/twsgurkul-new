import React from 'react';

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
    { name: 'Mint', alt: 'Featured in Mint' },
    { name: 'Business Standard', alt: 'Featured in Business Standard' },
    { name: 'MoneyControl', alt: 'Featured on MoneyControl' },
    { name: 'Finance With Sharan', alt: 'Featured on Finance With Sharan' },
    { name: 'Ankur Warikoo', alt: 'Featured by Ankur Warikoo' },
    { name: 'Zee Business', alt: 'Featured on Zee Business' },
  ];

  return (
    <section className="w-full py-8 sm:py-12 bg-black/50 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <p className="text-center text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
          Featured by India's top finance media and creator channels
        </p>
        
        {/* Logo Grid */}
        <div className="relative">
          {/* Gradient fade on edges for carousel effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Logo container */}
          <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group transition-all duration-300 hover:scale-110"
              >
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-8 w-auto object-contain filter grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
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