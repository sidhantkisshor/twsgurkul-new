// Binance API Configuration
const BINANCE_API = 'https://api.binance.com/api/v3';

// IMPORTANT: API keys are OPTIONAL for public market data endpoints
// Only required for authenticated endpoints (trading, account info, etc.)
// Never expose API keys in frontend code for production
const API_KEY = import.meta.env.VITE_BINANCE_API_KEY || '';

// Headers with optional API key for better rate limits
const getHeaders = () => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  // Add API key if available (not required for public endpoints)
  // WARNING: In production, use a backend proxy to hide API keys
  if (API_KEY && import.meta.env.DEV) {
    headers['X-MBX-APIKEY'] = API_KEY;
  }
  
  return headers;
};

export interface PriceData {
  symbol: string;
  price: number;
}

export interface TickerData {
  symbol: string;
  price: number;
  priceChangePercent: number;
  volume: number;
}

// Get current price for BTC and ETH
export const getBinancePrices = async (): Promise<{ btc: number; eth: number } | null> => {
  try {
    const response = await fetch(`${BINANCE_API}/ticker/price?symbols=["BTCUSDT","ETHUSDT"]`, {
      headers: getHeaders()
    });
    const data: { symbol: string; price: string }[] = await response.json();
    
    return {
      btc: parseFloat(data.find((item) => item.symbol === 'BTCUSDT')?.price || '0'),
      eth: parseFloat(data.find((item) => item.symbol === 'ETHUSDT')?.price || '0')
    };
  } catch {
    // Error handled silently, returning fallback values
    // Fallback prices
    return {
      btc: 42850,
      eth: 2250
    };
  }
};

// Get 24hr ticker data
export const getBinance24hrTicker = async (): Promise<{ btc: TickerData; eth: TickerData } | null> => {
  try {
    const response = await fetch(`${BINANCE_API}/ticker/24hr?symbols=["BTCUSDT","ETHUSDT"]`, {
      headers: getHeaders()
    });
    const data: { symbol: string; lastPrice: string; priceChangePercent: string; volume: string }[] = await response.json();
    
    const btcData = data.find((item) => item.symbol === 'BTCUSDT');
    const ethData = data.find((item) => item.symbol === 'ETHUSDT');
    
    return {
      btc: {
        symbol: 'BTCUSDT',
        price: parseFloat(btcData?.lastPrice || '0'),
        priceChangePercent: parseFloat(btcData?.priceChangePercent || '0'),
        volume: parseFloat(btcData?.volume || '0')
      },
      eth: {
        symbol: 'ETHUSDT',
        price: parseFloat(ethData?.lastPrice || '0'),
        priceChangePercent: parseFloat(ethData?.priceChangePercent || '0'),
        volume: parseFloat(ethData?.volume || '0')
      }
    };
  } catch {
    // Error handled silently, returning null
    return null;
  }
};