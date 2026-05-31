const chart = LightweightCharts.createChart(
  document.getElementById("chart"),
  {
    width: 800,
    height: 500,
    layout: {
      background: { color: "#111" },
      textColor: "#DDD",
    },
    grid: {
      vertLines: { color: "#222" },
      horzLines: { color: "#222" },
    },
  }
);

const candlestickSeries = chart.addSeries(
  LightweightCharts.CandlestickSeries
);

candlestickSeries.setData([
  {
    time: "2026-05-28",
    open: 100,
    high: 120,
    low: 90,
    close: 110,
  },
  {
    time: "2026-05-29",
    open: 110,
    high: 130,
    low: 100,
    close: 125,
  },
  {
    time: "2026-05-30",
    open: 125,
    high: 140,
    low: 120,
    close: 135,
  },
]);
