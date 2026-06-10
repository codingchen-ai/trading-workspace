console.log("api.js loaded");

const BINANCE_URL =
  "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=100";

async function fetchCandles(
    symbol,
    timeframe
) {

    const BINANCE_URL =
        `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${timeframe}&limit=100`;

    const response =
        await fetch(BINANCE_URL);

    const data =
        await response.json();

    return data;
}

window.fetchCandles = fetchCandles;

console.log("fetchCandles registered");