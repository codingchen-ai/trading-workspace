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

// 建立 K線 Series
const candlestickSeries = chart.addSeries(
  LightweightCharts.CandlestickSeries
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

  candlestickSeries.setData(chartData);
}

loadChartData();

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