# Marketplace Monitor

Static Vercel website for visualising filtered Singapore marketplace observations. It is intentionally separate from the Discord monitor.

## Local preview

Serve this directory with any static server, for example `npx serve .`.

## Data contract

`data/marketplace.json` contains the normalised observations used by the UI. Each item has historical `[timestamp, price]` points, a current value, and a simple short-horizon forecast. Forecasts are indicative trend signals, not guarantees.

The `scripts/update-data.mjs` script validates that the workspace findings source exists. The Discord monitor should remain the owner of collection and source-file rotation. A scheduler may run the normalisation/publish workflow at 23:59 Asia/Singapore (15:59 UTC), and should clear `marketplace_findings.txt` only after a successful commit and push.
