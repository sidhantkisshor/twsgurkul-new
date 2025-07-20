// Extended Binance API for multiple cryptocurrencies
const BINANCE_API = 'https://api.binance.com/api/v3';

export interface CryptoTicker {
  symbol: string;
  price: number;
  priceChangePercent: number;
}

// Get multiple crypto prices
export const getMultipleCryptoPrices = async (): Promise<CryptoTicker[]> => {
  try {
    // Fetch prices for multiple pairs
    const symbols = ['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'BNBUSDT', 'ADAUSDT', 'XRPUSDT'];
    const promises = symbols.map(symbol => 
      fetch(`${BINANCE_API}/ticker/24hr?symbol=${symbol}`)
        .then(res => res.json())
    );
    
    const results = await Promise.all(promises);
    
    return results.map((data, index) => ({
      symbol: symbols[index].replace('USDT', ''),
      price: parseFloat(data.lastPrice || '0'),
      priceChangePercent: parseFloat(data.priceChangePercent || '0')
    }));
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    // Return fallback data
    return [
      { symbol: 'BTC', price: 117900, priceChangePercent: 2.3 },
      { symbol: 'ETH', price: 3950, priceChangePercent: 1.8 },
      { symbol: 'SOL', price: 245, priceChangePercent: -2.1 },
      { symbol: 'BNB', price: 725, priceChangePercent: 3.4 },
      { symbol: 'ADA', price: 1.05, priceChangePercent: -0.8 },
      { symbol: 'XRP', price: 2.45, priceChangePercent: 3.4 }
    ];
  }
};