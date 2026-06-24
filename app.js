let balance = 1000;
let position = 0;
let entryPrice = 0;
let currentPrice = 0;
let pnl = 0;

let trades = [];

// 建立圖表
const chart = LightweightCharts.createChart(
  document.getElementById("chart"),
  {
    width: 800,
    height: 500,
    layout: {
      background: { color: "#111" },
      textColor: "#DDD",
    },
  }
);

function updateTradingPanel() {

  document.getElementById("balance").textContent =
    balance.toFixed(2);

  document.getElementById("position").textContent =
    position.toFixed(6);

  document.getElementById("entry-price").textContent =
    entryPrice.toFixed(2);

  document.getElementById("pnl").textContent =
    pnl.toFixed(2);

}

function buyPosition() {

  if (position > 0) {

    alert("Already holding position");

    return;

  }

  position =
    balance / currentPrice;

  entryPrice =
    currentPrice;

  balance = 0;

  updateTradingPanel();

}

function sellPosition() {

  if (position === 0) {

    alert("No position");

    return;

  }

  balance =
    position * currentPrice;

  position = 0;

  entryPrice = 0;

  pnl = 0;
  console.log("SELL CLICKED");
  updateTradingPanel();

}

document
  .getElementById("buy-btn")
  .addEventListener("click", buyPosition);

document
  .getElementById("sell-btn")
  .addEventListener("click", sellPosition);


// 建立 K線 Series
const candlestickSeries = chart.addSeries(
  LightweightCharts.CandlestickSeries
);

const emaSeries = chart.addSeries(
LightweightCharts.LineSeries,
{
    color: "#4da6ff",
    lineWidth: 2,
    title: "EMA20"
}
);


// 載入 Binance 資料
async function loadChartData() {
    const symbol =
        document
        .getElementById("symbol-select")
        .value;

    const timeframe =
        document
        .getElementById("timeframe-select")
        .value;

    const rawData =
        await fetchCandles(
            symbol,
            timeframe
        );

  const chartData = rawData.map(candle => ({
    time: Math.floor(candle[0] / 1000),
    open: Number(candle[1]),
    high: Number(candle[2]),
    low: Number(candle[3]),
    close: Number(candle[4]),
  }));


  currentPrice =
    chartData[chartData.length - 1].close;

  candlestickSeries.setData(chartData);

  const ema20 =
    calculateEMA(
        chartData,
        20
    );

  const ema50 =
    calculateEMA(
        chartData,
        20
    );

  const ema100 =
    calculateEMA(
        chartData,
        20
    );    
       
  emaSeries.setData(
  ema20
  );

  console.log(
      "EMA20",
      ema20
  );
}

loadChartData();

updateTradingPanel();


setInterval(() => {
  console.log("refresh...");
  loadChartData();
}, 1000);

document
.getElementById("symbol-select")
.addEventListener(
    "change",
    loadChartData
);

document
.getElementById("timeframe-select")
.addEventListener(
    "change",
    loadChartData
);

function calculateEMA(data, period) {

    const multiplier =
        2 / (period + 1);

    const ema = [];

    let previousEMA =
        data[0].close;

    ema.push({
        time: data[0].time,
        value: previousEMA
    });

    for (let i = 1; i < data.length; i++) {

        const currentEMA =
            (data[i].close - previousEMA)
            * multiplier
            + previousEMA;

        ema.push({
            time: data[i].time,
            value: currentEMA
        });

        previousEMA =
            currentEMA;
    }

    return ema;
}