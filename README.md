# Marketplace Monitor

Static Vercel website for visualising filtered Singapore marketplace observations. It is intentionally separate from the Discord monitor.

## Local preview

Serve this directory with any static server, for example `npx serve .`.

## Data contract

`data/marketplace.json` contains the normalised observations used by the UI. Each item has historical `[timestamp, price]` points, a current value, and a simple short-horizon forecast. Forecasts are indicative trend signals, not guarantees.

The `scripts/update-data.mjs` script validates that the workspace findings source exists. The daily publish workflow runs at 23:30 Asia/Singapore and records one point per item per Singapore calendar day: the arithmetic mean of that day's confirmed prices, or the previous day's value when there is no valid price change. The Discord monitor remains the owner of collection; after a successful website commit and push, the workflow clears `marketplace_findings.txt` so the next day starts with a clean batch. If validation, commit, or push fails, findings are retained for retry.
