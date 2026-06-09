# Dev Log

## 2026-05-30
- Created GitHub repository
- Added README
- Created roadmap document

Problems:
- Still learning GitHub workflow
- Learning how folders and markdown work

Next:
- Create first project structure
- Learn branch workflow

# Dev Log

## 2026-05-31
- Learned GitHub branch workflow
- Created first feature branch
- Learned pull request and merge workflow
- Built first HTML/CSS/JavaScript structure
- Connected TradingView Lightweight Charts
- Fixed chart API version issues
- Successfully rendered first candlestick chart
- Deployed website with GitHub Pages

Problems:
- GitHub Pages path issues
- Lightweight Charts API breaking changes
- Browser cache causing old JavaScript to load

Next:
- Connect real Binance API data
- Add responsive chart resizing
- Build multi-chart layout

# Dev Log

## 2026-06-03

Completed:

* Installed Git locally
* Connected VS Code to GitHub
* Configured Git user.name and user.email
* Learned Git vs GitHub concepts
* Created QA documentation structure
* Added bug-report.md
* Added test-plan.md
* Completed first local commit
* Completed first push from VS Code

Problems:

* Git command not recognized
* Git identity not configured
* Repository workflow understanding gap

Resolution:

* Installed Git
* Configured Git global identity
* Verified Git integration inside VS Code

Next:

* Verify local repository workflow
* Create feature/binance-api branch
* Begin Binance API integration

 ## 2026-06-04

### Completed

* Created src/js/api.js
* Connected Binance REST API
* Successfully fetched BTCUSDT candle data
* Converted Binance kline format to Lightweight Charts format
* Rendered real BTCUSDT candlestick data on chart
* Learned async/await data flow between modules
* Practiced browser console debugging

### Issues Encountered

1. fetchCandles is not defined

   * Cause: function scope / loading order issue
   * Fix: expose function and verify script loading

2. rawData was undefined

   * Cause: debugging data flow between api.js and app.js
   * Fix: verify function return value

3. candlestickSeries is not defined

   * Cause: chart series initialization missing
   * Fix: create chart and series before loading data

### Lessons Learned

* Verify one error at a time
* Use console.log to trace data flow
* API success does not guarantee chart rendering success
* Separate testing into:

  * TC001 Module Loading
  * TC002 API Fetch
  * TC003 Data Transform
  * TC004 Chart Rendering

### Next

* Responsive chart resize
* Symbol switching
* Multi-chart layout


 ## 2026-06-08

### Objective

Restore Binance API integration after moving development to a new computer and verify chart functionality.

### Completed Tasks

* Switched back to the `feature-binance-api` branch.
* Reviewed repository structure and verified project files.
* Confirmed that `index.html` and `src/index.html` contained identical content.
* Recreated the `js/api.js` file.
* Reimplemented Binance Kline API integration.
* Restored the `fetchCandles()` function.
* Linked Binance API data to Lightweight Charts.
* Fixed script loading issues in `index.html`.
* Verified successful loading of `api.js`.
* Verified successful retrieval of BTCUSDT 1-hour candlestick data.
* Confirmed candlestick chart rendering with live Binance market data.
* Configured Git identity on the new development machine.
* Committed and pushed updates to the remote repository.
* Added QA test cases TC001–TC003.

### Issues Encountered

* `fetchCandles is not defined`
* Missing `api.js` script loading
* Local environment was migrated to a new computer
* Binance API integration changes had not previously been pushed to GitHub

### Resolution

* Verified script loading order.
* Restored missing API integration files.
* Confirmed successful communication with Binance API.
* Successfully pushed the latest implementation to GitHub.

### Current Status

Milestone 2 Complete:

* Lightweight Charts Integration: COMPLETE
* Binance API Integration: COMPLETE
* BTCUSDT Live Candlestick Data: COMPLETE
* QA Documentation: UPDATED

### Next Steps

* Add trading pair selector (BTCUSDT / ETHUSDT / SOLUSDT)
* Add timeframe selector (15m / 1h / 4h / 1d)
* Expand QA test coverage
* Prepare for technical indicator implementation

### Feature

Trading Pair Selector

### Completed

* Added symbol selection dropdown.
* Added support for BTCUSDT.
* Added support for ETHUSDT.
* Added support for SOLUSDT.
* Connected dropdown selection to Binance API requests.
* Verified chart updates when switching symbols.

### Status

Complete

## 2026-06-09

### Feature

Timeframe Selector

### Completed

* Added interval selector component.
* Added support for 15m timeframe.
* Added support for 1h timeframe.
* Added support for 4h timeframe.
* Added support for 1d timeframe.
* Connected interval selection to Binance API requests.
* Verified chart updates when changing interval.

### Status

Complete

