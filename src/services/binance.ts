// Binance API Configuration
const BINANCE_API = 'https://api.binance.com/api/v3';
const API_KEY = import.meta.env.VITE_BINANCE_API_KEY || '';

// Headers with optional API key for better rate limits
const getHeaders = () => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  // Add API key if available (not required for public endpoints)
  if (API_KEY) {
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
    const data = await response.json();
    
    return {
      btc: parseFloat(data.find((item: any) => item.symbol === 'BTCUSDT')?.price || '0'),
      eth: parseFloat(data.find((item: any) => item.symbol === 'ETHUSDT')?.price || '0')
    };
  } catch (error) {
    console.error('Error fetching Binance prices:', error);
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
    const data = await response.json();
    
    const btcData = data.find((item: any) => item.symbol === 'BTCUSDT');
    const ethData = data.find((item: any) => item.symbol === 'ETHUSDT');
    
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
  } catch (error) {
    console.error('Error fetching Binance 24hr data:', error);
    return null;
  }
};