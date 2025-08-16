// Mock market data service for demo purposes
// Simulates real-time market data with realistic values

export interface MarketData {
  symbol: string;
  price: number;
  priceChange24h: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  whaleOrders: any[];
  largestBuyOrder: any;
  largestSellOrder: any;
  buyPressure: number;
  sellPressure: number;
}

// Base prices
let btcPrice = 117332.58;
let ethPrice = 3842.25;

// Generate realistic price movements
const generatePriceMovement = (basePrice: number, volatility: number = 0.002) => {
  const change = (Math.random() - 0.5) * 2 * volatility;
  return basePrice * (1 + change);
};

// Generate realistic whale order
const generateWhaleOrder = (price: number, side: 'BUY' | 'SELL') => {
  const quantity = Math.random() * 5 + 0.5; // 0.5 to 5.5 BTC
  const adjustedPrice = side === 'BUY' 
    ? price * (0.999 - Math.random() * 0.001) // Slightly below market
    : price * (1.001 + Math.random() * 0.001); // Slightly above market
  
  return {
    side,
    price: adjustedPrice,
    quantity,
    total: adjustedPrice * quantity,
    percentage: Math.random() * 5 + 1 // 1-6% of volume
  };
};

// Get mock BTC data
export const getMockBTCData = (): MarketData => {
  // Update price with small movements
  btcPrice = generatePriceMovement(btcPrice, 0.001);
  
  const priceChange = (Math.random() - 0.5) * 4; // -2% to +2%
  const buyPressure = 45 + Math.random() * 10; // 45-55%
  
  return {
    symbol: 'BTCUSDT',
    price: btcPrice,
    priceChange24h: priceChange,
    volume24h: 28500000000 + Math.random() * 5000000000,
    high24h: btcPrice * 1.02,
    low24h: btcPrice * 0.98,
    whaleOrders: [],
    largestBuyOrder: generateWhaleOrder(btcPrice, 'BUY'),
    largestSellOrder: generateWhaleOrder(btcPrice, 'SELL'),
    buyPressure,
    sellPressure: 100 - buyPressure
  };
};

// Get mock ETH data
export const getMockETHData = (): MarketData => {
  // Update price with small movements
  ethPrice = generatePriceMovement(ethPrice, 0.0015);
  
  const priceChange = (Math.random() - 0.5) * 5; // -2.5% to +2.5%
  const buyPressure = 48 + Math.random() * 8; // 48-56%
  
  return {
    symbol: 'ETHUSDT',
    price: ethPrice,
    priceChange24h: priceChange,
    volume24h: 15000000000 + Math.random() * 3000000000,
    high24h: ethPrice * 1.025,
    low24h: ethPrice * 0.975,
    whaleOrders: [],
    largestBuyOrder: generateWhaleOrder(ethPrice * 30, 'BUY'), // ETH whale orders are bigger
    largestSellOrder: generateWhaleOrder(ethPrice * 25, 'SELL'),
    buyPressure,
    sellPressure: 100 - buyPressure
  };
};

// Get both with simulated real-time updates
export const getMockMarketData = () => {
  return {
    btc: getMockBTCData(),
    eth: getMockETHData()
  };
};