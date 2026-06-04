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

* ## 2026-06-04

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

