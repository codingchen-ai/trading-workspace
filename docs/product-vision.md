# Trading Workspace - Product Vision

## Project Goal

Build a professional cryptocurrency trading research and execution platform combining:

* TradingView-style charting
* Binance Futures-style order entry
* Replay and market simulation
* Quantitative research tools
* Future real-trading API integration

---

# Core Principles

## Research First

The platform is designed to help analyze and understand market behavior before placing real trades.

## Replay Driven

Replay functionality is a first-class feature and not an afterthought.

## Paper Before Live

All new trading functionality should support paper trading before connecting to live exchange APIs.

## Modular Architecture

Trading engine, chart engine, replay engine, and exchange engine should remain independent whenever possible.

---

# Workspace Layout

## Left Panel

### Chart Workspace

Features:

* Candlestick Chart
* EMA
* MA
* RSI
* MACD
* Volume
* Funding Rate
* Open Interest
* Liquidation Heatmap
* Replay Mode

---

## Right Panel

### Trading Console

Features:

* Symbol Selector
* Long / Short
* Market / Limit Order
* Position Size Controls
* Margin Controls
* Leverage Controls
* Cross / Isolated Mode
* Take Profit
* Stop Loss
* Position Card

---

# Order Entry Panel

## Position Size Mode

Selectable:

* Amount
* Margin
* Notional Value

### Quick Percentage Buttons

* 10%
* 25%
* 50%
* 100%

### Slider Support

Position size should support both:

* Slider adjustment
* Manual input

---

## Leverage

Support:

* Slider
* Manual input

Range:

* BTC: 1x–200x
* ETH: 1x–100x
* Configurable per asset

---

## Margin Mode

Support:

* Cross
* Isolated

---

# Open Position Card

Display:

* Symbol
* Side
* Margin Mode
* Leverage
* Entry Price
* Mark Price
* Position Size
* Unrealized PnL
* Liquidation Price
* Take Profit
* Stop Loss

---

# Replay System

## Time Range Selection

Start:

* Year
* Month
* Day
* Hour
* Minute

End:

* Year
* Month
* Day
* Hour
* Minute

---

## Replay Controls

* Play
* Pause
* Next Candle
* Previous Candle

### Playback Speed

* 1 Bar
* 5 Bars
* 10 Bars
* 50 Bars

---

# Simulation Engine

## What-if Analysis

Ability to modify future candles.

Examples:

* Increase next 3 candles by 5%
* Decrease next 10 candles by 8%

Automatically recalculate:

* EMA
* MA
* RSI
* MACD
* Liquidation Levels

---

# Hotkey System

## Trading

A = Long

S = Short

D = Close Position

---

## Settings

W = Position Size Menu

E = Leverage Menu

R = Margin Mode Menu

T = Take Profit

Y = Stop Loss

---

## Replay

Space = Play/Pause

Left Arrow = Previous Candle

Right Arrow = Next Candle

---

# Trading Modes

## Paper Trading

Current development target.

---

## Live Trading

Future integration:

* Binance API
* Additional exchange support

---

# Architecture Roadmap

## Phase 1

Paper Trading Core

* Long
* Short
* PnL
* Close Position

Status: Completed

---

## Phase 2

Order Entry Panel

* Position Size
* Margin
* Leverage
* Notional Value

---

## Phase 3

Cross / Isolated

TP / SL

Position Card

---

## Phase 4

Replay Foundation

Replay Controls

---

## Phase 5

Simulation Engine

What-if Analysis

---

## Phase 6

Exchange Integration

Binance Futures API

Live Trading Mode
