# Test Plan

## TC001 - Chart Initialization

### Objective

Verify that the Lightweight Charts component initializes successfully and is displayed on the page.

### Preconditions

* Application is opened in a web browser.
* Lightweight Charts library is available.

### Test Steps

1. Open the application.
2. Observe the chart area.

### Expected Result

* The chart container is visible.
* No JavaScript errors appear in the browser console.

### Actual Result

PASS

---

## TC002 - Binance API Data Retrieval

### Objective

Verify that the application can successfully retrieve candlestick data from the Binance API.

### Preconditions

* Internet connection is available.
* Binance API endpoint is accessible.

### Test Steps

1. Open the application.
2. Wait for data loading to complete.
3. Open the browser console.

### Expected Result

* API request completes successfully.
* No API-related errors appear in the console.
* Candlestick data is returned from Binance.

### Actual Result

PASS

---

## TC003 - BTCUSDT Candlestick Chart Rendering

### Objective

Verify that BTCUSDT candlestick data is correctly rendered on the chart.

### Preconditions

* Binance API data retrieval is functioning correctly.
* Chart component has been initialized.

### Test Steps

1. Open the application.
2. Wait for candlestick data to load.
3. Inspect the chart display.

### Expected Result

* BTCUSDT candlesticks are displayed.
* Approximately 100 candles are rendered.
* Price movement is visible on the chart.
* No JavaScript errors appear in the console.

### Actual Result

PASS
