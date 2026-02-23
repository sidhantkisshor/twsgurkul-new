import { useEffect, useRef, useState, RefObject } from 'react';

/**
 * Custom hook for intersection observer with animation triggers
 */
export const useIntersectionAnimation = (
  threshold = 0.1,
  rootMargin = '0px'
): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, threshold, rootMargin]);

  return [ref, isVisible];
};

/**
 * Animation variants for Framer Motion-like animations with CSS
 */
export const animationVariants = {
  fadeInUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-500 ease-out'
  },
  slideInFromLeft: {
    initial: 'opacity-0 -translate-x-full',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-1000 ease-out'
  },
  slideInFromRight: {
    initial: 'opacity-0 translate-x-full',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-1000 ease-out'
  },
  staggerChildren: (delay: number = 100) => ({
    initial: 'opacity-0 translate-y-4',
    animate: 'opacity-100 translate-y-0',
    transition: `transition-all duration-500 ease-out`,
    style: { transitionDelay: `${delay}ms` }
  })
};

/**
 * Counter animation hook
 */
export const useCounterAnimation = (
  endValue: number,
  duration: number = 2000,
  isVisible: boolean = false,
  decimals: number = 0
) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const interval = duration / steps;
    const increment = endValue / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setValue(parseFloat((endValue * easeOutQuart).toFixed(decimals)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setValue(endValue);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, endValue, duration, decimals]);

  return value;
};

/**
 * Parallax scroll effect hook
 */
export const useParallaxScroll = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

/**
 * Stagger animation helper
 */
export const getStaggerDelay = (index: number, baseDelay: number = 100) => {
  return index * baseDelay;
};

/**
 * CSS classes for common animations
 */
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  scaleIn: 'animate-scale-in',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  wiggle: 'animate-wiggle',
  glow: 'animate-glow'
};