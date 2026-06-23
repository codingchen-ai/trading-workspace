# Dev Log

# Development Log — 2026-06-23

## Project

Crypto Trading Workspace

---

## Completed Today

### Coin Universe Database Construction

Successfully collected cryptocurrency market data from CoinGecko.

Retrieved core market information for approximately 2,250 cryptocurrencies.

Fields collected:

* Market Cap Rank
* Symbol
* Coin Name
* Current Price
* Market Cap

This dataset serves as the foundation of the project's market universe.

---

### Binance Spot Listing Classification

Collected Binance Spot listing information through CoinGecko exchange endpoints.

Result:

* Approximately 430 Binance Spot assets identified

Implemented Spot classification logic.

Added field:

```text
on_spot
```

Purpose:

* Determine whether an asset is currently tradable on Binance Spot Market.
* Support future scanner and watchlist filtering.

---

### Master Dataset Creation

Constructed the primary research dataset:

```text
master_df
```

Current core fields:

```text
rank
symbol
name
price
market_cap
on_spot
```

This dataset will become the central source of truth for future modules.

---

### Binance Futures Research

Attempted direct access to Binance Futures API.

Result:

```text
HTTP 451
Service unavailable from a restricted location
```

Due to regional access restrictions, Binance Futures API cannot currently be relied upon as a primary data source.

---

### Binance Futures Classification

Switched to CoinGecko Derivatives API.

Successfully retrieved Binance Futures trading pairs.

Implemented Futures classification logic.

Added field:

```text
on_futures
```

Purpose:

* Identify whether a cryptocurrency has an active Binance Futures market.
* Support derivatives-related research modules.

---

### Research Workspace Design

Expanded Google Sheets into a research management workspace.

Added research fields:

```text
priority
sector
watchlist
replay
notes
```

Purpose:

* Manual coin classification
* Research tracking
* Replay candidate management
* Future scanner prioritization

---

## Key Findings

### CoinGecko API Rate Limits

The free API frequently returns:

```text
HTTP 429
Too Many Requests
```

Potential solutions:

* Increase request intervals
* Implement retry mechanisms
* Introduce local caching
* Reduce unnecessary API calls

---

### Binance API Accessibility Limitations

Direct Binance Futures API access is not consistently available within the current environment.

Future data collection should prioritize:

* CoinGecko
* CoinGlass
* Coinalyze

instead of relying solely on Binance APIs.

---

### Spot Market and Futures Market Are Independent

Important discovery:

```text
Binance Spot Listing
≠
Binance Futures Listing
```

Many assets exist on Spot markets without Futures support.

Future modules including:

* Funding Rate Analysis
* Open Interest Analysis
* Liquidation Analysis

must validate Futures availability before processing.

---

## Project Progress

### Completed

* GitHub Repository Setup
* VS Code Development Environment
* Coin Universe Database
* Binance Spot Classification
* Binance Futures Classification
* Research Workspace Design

---

## Next Steps

### Daily Snapshot System

Create automated daily market snapshots.

Snapshot schedule:

```text
UTC+8 00:00
```

Store:

* Rank
* Price
* Market Cap
* Spot Status
* Futures Status

Purpose:

* Build historical market database
* Enable ranking trend analysis

---

### Rank Change Tracker

Develop ranking analytics tools.

Features:

* New Top 100 Entries
* Top 100 Exits
* Largest Rank Improvements
* Largest Rank Declines

Purpose:

* Detect emerging assets
* Identify weakening market leaders

---

### SQLite Integration

Migrate research data into SQLite.

Planned tables:

```text
coins
daily_rank_snapshot
spot_status
futures_status
```

Benefits:

* Historical ranking analysis
* Market cap trend tracking
* Scanner support
* Watchlist management
* Alert engine foundation

---

## Long-Term Vision

Build a personal Crypto Research Platform integrating:

### Market Intelligence

* Coin Universe Database
* Daily Ranking Tracker
* Spot/Futures Monitoring

### Trading Research

* Replay System
* Open Interest Analysis
* Funding Rate Analysis
* Liquidation Mapping

### Decision Support

* Multi-Condition Scanner
* Alert Engine
* Watchlist Management

### Future Expansion

* Strategy Validation Framework
* Historical Backtesting
* AI-Assisted Research Workflows

---

## Personal Notes

Although active feature development slowed during recent days, significant progress was made in data infrastructure and market research.

The project now possesses its first scalable market database layer, which will serve as the foundation for future scanner, replay, alert, and analytics systems.

Today's work represents the transition from manual market observation toward structured research infrastructure.


## 2026-06-15

### Feature

Live Chart Refresh

### Completed

- Added automatic chart refresh mechanism.
- Chart refreshes every second.
- Verified Binance API requests continue successfully.
- Added TC006 test case.
- Expanded timeframe selector:
  - 1m
  - 1w
  - 1M

### Status

Complete

### Next

- Optimize refresh logic using update().
- Reduce full chart redraws.
- Begin Paper Trading architecture planning.

## 2026-06-11
EMA20 Indicator Integration
Features Implemented
Added EMA20 calculation function.
Added EMA20 overlay line to Lightweight Charts.
Fixed Lightweight Charts API compatibility issue.
Successfully rendered EMA20 on candlestick chart.
Debugging Notes

Resolved:

chart.addLineSeries is not a function
calculateEMA is not defined
Testing

Completed:

TC005 - EMA20 Display Verification
Current Status

Working:

Binance API integration
Candlestick chart
Trading pair selector
Timeframe selector
EMA20 indicator
Planned Next Steps
Automatic chart refresh
Additional indicators
Paper Trading system
Replay functionality

## 2026-06-10
Chart Controls Completed
Features Implemented
Added trading pair selector.
BTCUSDT
ETHUSDT
SOLUSDT
Added timeframe selector.
15m
1h
4h
Connected selectors to chart reload functionality.
Verified chart updates correctly when switching symbol or timeframe.
Testing

Completed:

TC004 - Trading Pair & Timeframe Controls
Current Status

Working:

Binance API connection
Candlestick chart rendering
Symbol selector
Timeframe selector

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

