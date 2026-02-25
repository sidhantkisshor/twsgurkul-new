// Enhanced Binance API Service with Order Book and Trade Data
import { BINANCE_CACHE_TTL_MS, BINANCE_FETCH_TIMEOUT_MS, WHALE_ORDER_MIN_USD, LARGE_TRADE_MIN_USD } from '../constants';
const API_KEY = import.meta.env.VITE_BINANCE_API_KEY || '';

// Use proxy in development, direct API in production
const isDevelopment = import.meta.env.DEV;
const BINANCE_API = isDevelopment 
  ? '/api/binance'  // Uses Vite proxy in development
  : 'https://api.binance.com/api/v3';

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

// ─── Cache & deduplication ────────────────────────────────────────────────────

const CACHE_TTL = BINANCE_CACHE_TTL_MS; // 30 seconds

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

// Response cache: stores resolved results
const responseCache = new Map<string, CacheEntry<unknown>>();

// In-flight map: stores the pending promise so concurrent callers share it
const inFlight = new Map<string, Promise<unknown>>();

function getCached<T>(key: string): T | null {
  const entry = responseCache.get(key) as CacheEntry<T> | undefined;
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) return entry.data;
  return null;
}

function setCached<T>(key: string, data: T): T {
  responseCache.set(key, { data, timestamp: Date.now() });
  return data;
}

// Wraps an async factory with cache + deduplication.
// Concurrent calls with the same key share the in-flight promise.
// Only non-null resolved results are cached for CACHE_TTL — failures never
// pollute the cache so the next call will retry against the live API.
async function withCache<T>(key: string, factory: () => Promise<T | null>): Promise<T | null> {
  const cached = getCached<T>(key);
  if (cached !== null) return cached;

  const existing = inFlight.get(key) as Promise<T | null> | undefined;
  if (existing) return existing;

  const promise = factory().then(
    (result) => {
      if (result !== null) setCached(key, result);
      inFlight.delete(key);
      return result;
    },
    (err) => { inFlight.delete(key); throw err; }
  );
  inFlight.set(key, promise as Promise<unknown>);
  return promise;
}

// ─── Fetch helper ─────────────────────────────────────────────────────────────

// Helper function for fetch with timeout and API key
const fetchWithTimeout = async (url: string, timeout = BINANCE_FETCH_TIMEOUT_MS) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  const headers: HeadersInit = {};
  // Add API key to headers if available (for authenticated endpoints)
  if (API_KEY) {
    headers['X-MBX-APIKEY'] = API_KEY;
  }
  
  try {
    const response = await fetch(url, { 
      signal: controller.signal,
      headers 
    });
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
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
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
  const WHALE_THRESHOLD = WHALE_ORDER_MIN_USD; // $100k minimum
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
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const trades = await response.json();
    
    // Filter for large trades (> $50k)
    const largeTrades = trades
      .map((trade: { price: string; qty: string; isBuyerMaker: boolean; time: number }) => ({
        price: parseFloat(trade.price),
        qty: parseFloat(trade.qty),
        total: parseFloat(trade.price) * parseFloat(trade.qty),
        isBuyer: trade.isBuyerMaker,
        time: new Date(trade.time)
      }))
      .filter((trade) => trade.total > LARGE_TRADE_MIN_USD)
      .sort((a, b) => b.total - a.total);
    
    return largeTrades;
  } catch (error) {
    console.error('Error fetching trades:', error);
    return [];
  }
};

// Get comprehensive market data with whale detection
export const getEnhancedMarketData = (symbol: string = 'BTCUSDT'): Promise<MarketData | null> =>
  withCache(`market:${symbol}`, async () => {
    try {
      // Get 24hr ticker data
      const tickerResponse = await fetchWithTimeout(`${BINANCE_API}/ticker/24hr?symbol=${symbol}`);
      if (!tickerResponse.ok) throw new Error(`HTTP ${tickerResponse.status}`);
      const ticker = await tickerResponse.json();

      // Get order book with smaller limit for faster response
      const orderBook = await getOrderBook(symbol, 50);
      if (!orderBook) throw new Error('Failed to fetch order book');

      // Detect whale orders (>$100k)
      const buyWhales = detectWhaleOrders(orderBook.bids, 'BUY');
      const sellWhales = detectWhaleOrders(orderBook.asks, 'SELL');
      const allWhales = [...buyWhales, ...sellWhales];

      // Get largest orders regardless of whale threshold for display
      const largestBuyOrder = buyWhales[0] || (orderBook.bids[0] ? {
        side: 'BUY' as const,
        price: orderBook.bids[0].price,
        quantity: orderBook.bids[0].quantity,
        total: orderBook.bids[0].total,
        percentage: 0
      } : null);

      const largestSellOrder = sellWhales[0] || (orderBook.asks[0] ? {
        side: 'SELL' as const,
        price: orderBook.asks[0].price,
        quantity: orderBook.asks[0].quantity,
        total: orderBook.asks[0].total,
        percentage: 0
      } : null);

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
        largestBuyOrder,
        largestSellOrder,
        buyPressure: (totalBuyVolume / totalVolume) * 100,
        sellPressure: (totalSellVolume / totalVolume) * 100
      } satisfies MarketData;
    } catch {
      return null;
    }
  });

// Format currency
export const formatCurrency = (value: number): string => {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(1)}K`;
  return `$${value.toFixed(0)}`;
};

// Get multiple symbols data — independent failures don't block each other.
export const getMultipleSymbolsData = async () => {
  const [btcResult, ethResult] = await Promise.allSettled([
    getEnhancedMarketData('BTCUSDT'),
    getEnhancedMarketData('ETHUSDT'),
  ]);
  return {
    btc: btcResult.status === 'fulfilled' ? btcResult.value : null,
    eth: ethResult.status === 'fulfilled' ? ethResult.value : null,
  };
};