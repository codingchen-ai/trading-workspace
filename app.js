
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

function buyPosition() {
  console.log("BUY CLICKED");
}

function sellPosition() {
  console.log("SELL CLICKED");
}

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