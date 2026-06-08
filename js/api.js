console.log("api.js loaded");

const BINANCE_URL =
  "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=100";

async function fetchCandles() {
  try {
    const response = await fetch(BINANCE_URL);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

window.fetchCandles = fetchCandles;

console.log("fetchCandles registered");