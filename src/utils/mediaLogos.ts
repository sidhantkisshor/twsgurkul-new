// Media logo utilities
export const getDomainForMediaName = (name: string): string | null => {
  const mediaMap: Record<string, string> = {
    "Economic Times": "economictimes.indiatimes.com",
    "Business Standard": "business-standard.com",
    "CNBC TV18": "cnbctv18.com",
    "Moneycontrol": "moneycontrol.com",
    "Zee Business": "zeebiz.com",
    "Bloomberg Quint": "bloombergquint.com",
    "Mint": "livemint.com",
    "Financial Express": "financialexpress.com"
  };
  
  return mediaMap[name] || null;
};

export const getLogoFallbackUrls = (domain: string, size: number = 128): string[] => {
  // Using multiple logo API services as fallbacks
  return [
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`,
    `https://favicons.githubusercontent.com/${domain}`
  ];
};