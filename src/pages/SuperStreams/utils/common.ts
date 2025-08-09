// Shared utility functions for SuperStreams page

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToPricing = () => {
  scrollToSection('pricing-section');
};

export const scrollToSocialProof = () => {
  const socialProofSection = document.getElementById('social-proof-section');
  if (socialProofSection) {
    socialProofSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Fallback to pricing if social proof section doesn't exist
    scrollToPricing();
  }
};

// Debounce utility for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Format currency for consistent display
export const formatCurrency = (amount: string | number): string => {
  return `₹${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

// Check if user is on mobile device
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};