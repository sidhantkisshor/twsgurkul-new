// Media logo utilities with better logo sources and fallbacks
export const getDomainForMediaName = (name: string): string | null => {
  const mediaMap: Record<string, string> = {
    "Economic Times": "economictimes.indiatimes.com",
    "Business Standard": "business-standard.com",
    "CNBC TV18": "cnbctv18.com",
    "Moneycontrol": "moneycontrol.com",
    "Zee Business": "zeebiz.com",
    "Bloomberg": "bloomberg.com",
    "Mint": "livemint.com",
    "Financial Express": "financialexpress.com"
  };
  
  return mediaMap[name] || null;
};

// Direct logo URLs for better quality - using CDN and publicly accessible URLs
export const getDirectLogoUrl = (name: string): string | null => {
  // Using logo.clearbit.com as primary source with fallbacks
  const domains: Record<string, string> = {
    "Economic Times": "economictimes.indiatimes.com",
    "Business Standard": "business-standard.com",
    "CNBC TV18": "cnbctv18.com",
    "Moneycontrol": "moneycontrol.com",
    "Zee Business": "zeebiz.com",
    "Bloomberg": "bloomberg.com",
    "Mint": "livemint.com",
    "Financial Express": "financialexpress.com"
  };
  
  const domain = domains[name];
  return domain ? `https://logo.clearbit.com/${domain}` : null;
};

export const getLogoFallbackUrls = (domain: string, size: number = 128): string[] => {
  // Using multiple logo API services as fallbacks with better quality options
  return [
    `https://logo.clearbit.com/${domain}?size=${size}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`,
    `https://logo.uplead.com/${domain}`,
    `https://company-logo-api.herokuapp.com/logo?domain=${domain}`,
    `https://icon.horse/icon/${domain}`,
    `https://favicons.githubusercontent.com/${domain}`
  ];
};

// SVG fallback icons for media types
export const getMediaTypeSVG = (type: string): string => {
  if (type === 'newspaper') {
    return `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M20 5H4v14h16V5zm-2 12H6V7h12v10zm-7-8H8v2h3V9zm0 3H8v2h3v-2zm0 3H8v2h3v-2zm7-6h-5v5h5V9z"/>
    </svg>`;
  } else if (type === 'tv') {
    return `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
    </svg>`;
  } else {
    return `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>`;
  }
};