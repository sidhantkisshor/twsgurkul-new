import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyLoadSectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  className?: string;
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  placeholder = <SectionSkeleton />,
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsLoaded(true);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoaded, threshold, rootMargin]);

  return (
    <div ref={sectionRef} className={className}>
      {isLoaded ? children : placeholder}
    </div>
  );
};

// Skeleton loader for sections
const SectionSkeleton = () => (
  <div className="py-20 sm:py-32">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-800 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-12 w-96 bg-gray-800 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-64 bg-gray-800 rounded-lg mx-auto animate-pulse" />
        </div>
        
        {/* Content skeleton */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="h-40 bg-gray-800 rounded-xl animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LazyLoadSection;