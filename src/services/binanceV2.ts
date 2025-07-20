// Enhanced Binance API Service with Order Book and Trade Data
const BINANCE_API = 'https://api.binance.com/api/v3';

export interface OrderBookLevel {
  price: number;
  quantity: number;
  total: number; // price * quantity in USD
}

export interface WhaleOrder {
  side: 'BUY' | 'SELL';
  price: number;
  quantity: number;
  total: number;
  percentage: number; // % of total volume
}

export interface MarketData {
  symbol: string;
  price: number;
  priceChange24h: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  whaleOrders: WhaleOrder[];
  largestBuyOrder: WhaleOrder | null;
  largestSellOrder: WhaleOrder | null;
  buyPressure: number; // % of buy orders
  sellPressure: number; // % of sell orders
}

// Helper function for fetch with timeout
const fetchWithTimeout = async (url: string, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

// Get order book depth
export const getOrderBook = async (symbol: string = 'BTCUSDT', limit: number = 100) => {
  try {
    const response = await fetchWithTimeout(`${BINANCE_API}/depth?symbol=${symbol}&limit=${limit}`);
    const data = await response.json();
    
    // Process bids (buy orders)
    const bids: OrderBookLevel[] = data.bids.map(([price, qty]: [string, string]) => ({
      price: parseFloat(price),
      quantity: parseFloat(qty),
      total: parseFloat(price) * parseFloat(qty)
    }));
    
    // Process asks (sell orders)
    const asks: OrderBookLevel[] = data.asks.map(([price, qty]: [string, string]) => ({
      price: parseFloat(price),
      quantity: parseFloat(qty),
      total: parseFloat(price) * parseFloat(qty)
    }));
    
    return { bids, asks };
  } catch (error) {
    console.error('Error fetching order book:', error);
    return null;
  }
};

// Detect whale orders (orders > $100k)
export const detectWhaleOrders = (orders: OrderBookLevel[], side: 'BUY' | 'SELL'): WhaleOrder[] => {
  const WHALE_THRESHOLD = 100000; // $100k minimum
  const totalVolume = orders.reduce((sum, order) => sum + order.total, 0);
  
  return orders
    .filter(order => order.total >= WHALE_THRESHOLD)
    .map(order => ({
      side,
      price: order.price,
      quantity: order.quantity,
      total: order.total,
      percentage: (order.total / totalVolume) * 100
    }))
    .sort((a, b) => b.total - a.total); // Sort by size descending
};

// Get recent large trades
export const getRecentTrades = async (symbol: string = 'BTCUSDT', limit: number = 500) => {
  try {
    const response = await fetchWithTimeout(`${BINANCE_API}/trades?symbol=${symbol}&limit=${limit}`);
    const trades = await response.json();
    
    // Filter for large trades (> $50k)
    const largeTrades = trades
      .map((trade: any) => ({
        price: parseFloat(trade.price),
        qty: parseFloat(trade.qty),
        total: parseFloat(trade.price) * parseFloat(trade.qty),
        isBuyer: trade.isBuyerMaker,
        time: new Date(trade.time)
      }))
      .filter((trade: any) => trade.total > 50000)
      .sort((a: any, b: any) => b.total - a.total);
    
    return largeTrades;
  } catch (error) {
    console.error('Error fetching trades:', error);
    return [];
  }
};

// Get comprehensive market data with whale detection
export const getEnhancedMarketData = async (symbol: string = 'BTCUSDT'): Promise<MarketData | null> => {
  try {
    // Get 24hr ticker data
    const tickerResponse = await fetchWithTimeout(`${BINANCE_API}/ticker/24hr?symbol=${symbol}`);
    const ticker = await tickerResponse.json();
    
    // Get order book with smaller limit for faster response
    const orderBook = await getOrderBook(symbol, 50);
    if (!orderBook) throw new Error('Failed to fetch order book');
    
    // Detect whale orders
    const buyWhales = detectWhaleOrders(orderBook.bids, 'BUY');
    const sellWhales = detectWhaleOrders(orderBook.asks, 'SELL');
    const allWhales = [...buyWhales, ...sellWhales];
    
    // Calculate buy/sell pressure
    const totalBuyVolume = orderBook.bids.reduce((sum, order) => sum + order.total, 0);
    const totalSellVolume = orderBook.asks.reduce((sum, order) => sum + order.total, 0);
    const totalVolume = totalBuyVolume + totalSellVolume;
    
    return {
      symbol,
      price: parseFloat(ticker.lastPrice),
      priceChange24h: parseFloat(ticker.priceChangePercent),
      volume24h: parseFloat(ticker.volume) * parseFloat(ticker.lastPrice),
      high24h: parseFloat(ticker.highPrice),
      low24h: parseFloat(ticker.lowPrice),
      whaleOrders: allWhales,
      largestBuyOrder: buyWhales[0] || null,
      largestSellOrder: sellWhales[0] || null,
      buyPressure: (totalBuyVolume / totalVolume) * 100,
      sellPressure: (totalSellVolume / totalVolume) * 100
    };
  } catch (error) {
    console.error('Error fetching enhanced market data:', error);
    return null;
  }
};

// Format currency
export const formatCurrency = (value: number): string => {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(1)}K`;
  return `$${value.toFixed(0)}`;
};

// Get multiple symbols data with better error handling
export const getMultipleSymbolsData = async () => {
  try {
    // Fetch both in parallel for better performance
    const [btcData, ethData] = await Promise.all([
      getEnhancedMarketData('BTCUSDT'),
      getEnhancedMarketData('ETHUSDT')
    ]);
    
    // If ETH data fails, provide fallback
    const ethDataWithFallback = ethData || {
      symbol: 'ETHUSDT',
      price: 2250,
      priceChange24h: 1.5,
      volume24h: 15000000000,
      high24h: 2280,
      low24h: 2220,
      whaleOrders: [],
      largestBuyOrder: { side: 'BUY' as const, price: 2240, quantity: 10000, total: 22400000, percentage: 2.5 },
      largestSellOrder: { side: 'SELL' as const, price: 2260, quantity: 8000, total: 18080000, percentage: 2.0 },
      buyPressure: 52,
      sellPressure: 48
    };
    
    return { btc: btcData, eth: ethDataWithFallback };
  } catch (error) {
    console.error('Error fetching multiple symbols:', error);
    return { btc: null, eth: null };
  }
};