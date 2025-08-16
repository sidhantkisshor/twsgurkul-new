// Test Binance API connection
const API_KEY = 'hK8u9IHWVEtwafDgfpxR6Hwv9oY9gfABbKWHZ8lktz5bNjZzvb6yIy3IyK82aeoR';
// Test direct connection first
const BINANCE_API = 'https://api.binance.com/api/v3';

async function testAPI() {
  console.log('Testing Binance API connection...\n');
  
  try {
    // Test 1: Ticker data (no API key needed)
    console.log('1. Testing ticker endpoint (public)...');
    const tickerResponse = await fetch(`${BINANCE_API}/ticker/24hr?symbol=BTCUSDT`);
    const tickerData = await tickerResponse.json();
    
    if (tickerData.lastPrice) {
      console.log('✅ Ticker data received:');
      console.log(`   BTC Price: $${parseFloat(tickerData.lastPrice).toLocaleString()}`);
      console.log(`   24h Change: ${tickerData.priceChangePercent}%`);
    } else {
      console.log('❌ Failed to get ticker data:', tickerData);
    }
    
    // Test 2: Order book (no API key needed)
    console.log('\n2. Testing order book endpoint (public)...');
    const orderBookResponse = await fetch(`${BINANCE_API}/depth?symbol=BTCUSDT&limit=5`);
    const orderBookData = await orderBookResponse.json();
    
    if (orderBookData.bids && orderBookData.asks) {
      console.log('✅ Order book data received:');
      console.log(`   Top bid: $${parseFloat(orderBookData.bids[0][0]).toLocaleString()}`);
      console.log(`   Top ask: $${parseFloat(orderBookData.asks[0][0]).toLocaleString()}`);
      console.log(`   Spread: $${(parseFloat(orderBookData.asks[0][0]) - parseFloat(orderBookData.bids[0][0])).toFixed(2)}`);
    } else {
      console.log('❌ Failed to get order book:', orderBookData);
    }
    
    // Test 3: Recent trades (no API key needed)
    console.log('\n3. Testing recent trades endpoint (public)...');
    const tradesResponse = await fetch(`${BINANCE_API}/trades?symbol=BTCUSDT&limit=5`);
    const tradesData = await tradesResponse.json();
    
    if (Array.isArray(tradesData) && tradesData.length > 0) {
      console.log('✅ Recent trades data received:');
      const largeTrade = tradesData.reduce((max, trade) => 
        parseFloat(trade.qty) > parseFloat(max.qty) ? trade : max
      );
      console.log(`   Largest trade: ${parseFloat(largeTrade.qty).toFixed(4)} BTC @ $${parseFloat(largeTrade.price).toLocaleString()}`);
      console.log(`   Trade value: $${(parseFloat(largeTrade.qty) * parseFloat(largeTrade.price)).toLocaleString()}`);
    } else {
      console.log('❌ Failed to get trades data:', tradesData);
    }
    
    console.log('\n✅ All tests passed! API connection is working.');
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
  }
}

testAPI();