# India Market Atlas

A complete, responsive business-research website for India. It runs without a backend, API key, paid data service or package installation.

## Open it now

Double-click `dist/index.html` in a modern browser. All filters, comparisons, trade tables, source links, exports and scenario calculators work locally. The separate `India-Market-Atlas.html` is the same website bundled into one portable file.

## Put it on Render

1. Create a GitHub repository. Upload this folder's contents, with `render.yaml` and the `dist` folder at the repository root. Upload the extracted files, not the ZIP itself.
2. In Render, choose **New → Static Site** and connect that repository.
3. Use these settings:

| Setting | Value |
|---|---|
| Branch | Your repository's default branch, usually `main` |
| Root directory | Leave blank |
| Build command | `true` |
| Publish directory | `dist` |

4. Choose **Create Static Site**. Render supplies an `onrender.com` address.

Alternatively, create a Render Blueprint from the repository to use the included `render.yaml`. No Web Service, database or start command is required.

Render documents free static-site deployment with usage allowances for bandwidth and build minutes. Check your account's current allowance. Official instructions: https://render.com/docs/static-sites

This package has not been deployed to your Render account.

## What is included

- **Business explorer:** 84 business models in 11 sectors, with search, sector and evidence filters. Includes panipuri, burgers, bagels, protein products, hospitals, pickleball, cricket, property, transport and trading businesses.
- **Geography:** All India, eight major city markets, and a selector covering India's states and union territories. Selecting a place with missing observations displays missing coverage, not a fabricated estimate.
- **City comparison:** Housing sales and launches for H1 2026; warehouse leasing and new additions for H2 2025. Two comparable activity indicators for each of eight metros.
- **State context:** Historical rural and urban consumption spending for 18 states, with the exact source period.
- **Growth & cooling:** Observed sector changes, published projections and indirect signals kept distinct. Includes a TRAI release dated 5 October 2026.
- **Imports & exports:** Official FY 2025–26 totals, 16 selected directional commodity rows and eight directional country rows, with search, growth threshold and sorting. Commodity and country tables are separate datasets.
- **Demand lab:** Interactive assumptions for paying buyers, purchase frequency, competing capacity, demand changes, customer share and unit economics. Inputs are illustrative; they are not local observations.
- **Sources & method:** Twelve original publications, source links, coverage limits and all index formulas.
- **Downloads:** CSV for filtered evidence; JSON for the research dataset and the current scenario.

## What the numbers mean

The website is a curated research snapshot checked on **5 October 2026**. Each figure retains its original reporting period. The site does not update itself when opened. It is not connected to sensors, restaurant order feeds, court bookings, hospital utilisation or private inventory systems.

There is no credible single public dataset covering the exact demand and operational capacity of every Indian business in every city. Unknowns remain unknown. The site gives you real published indicators, and a separate scenario calculator for what still needs local validation.

The activity index compares transactions against **new** additions. Existing available property is not included. A value above 50, or a transaction/addition ratio above one, does not prove a market shortage. The index is an explicitly defined heuristic, not an official score or a predicted investment return.

Trade figures use the **15 April 2026 release vintage** for a consistent full-year comparison and are subject to revision. March merchandise was provisional; March services was estimated. Trade values can change with prices and currency, independently of volumes. National imports do not equal city-level unmet demand.

## Change or extend the data

- Edit `dist/data.js`: publications, exact city values, state context, national signals, trade data and the business taxonomy.
- Edit `dist/app.js`: filters, calculations, view rendering and export behaviour.
- Edit `dist/styles.css`: layout, typography and colours.
- Edit `dist/index.html`: page metadata and navigation.
- `research-snapshot.json` is a portable data copy. The website reads `dist/data.js`; editing only the JSON does not change the website.

When refreshing a number, preserve its geography, units, period, original publisher, source URL and revision status. Do not replace missing category measurements with overall city population, map listing counts or a national growth rate. Verify that demand and supply refer to compatible units before introducing a new ratio.

The built-in CSV/JSON exports are downloads. There is no file-upload/import feature or server storage. “Imports & exports” in the navigation refers to international trade.

## Rebuild the portable single file

Run `python3 bundle.py` from this folder after changing the site. This recreates `India-Market-Atlas.html` from the same four source files. No packages are needed.

## Privacy and operation

All filtering and scenario calculations happen in the browser. The site has no analytics, advertisements, remote fonts, cookies or background data requests. Source links open the original publications. Scenario downloads contain the inputs you entered.

The included QA report records the checks performed on this version. Research-source authors retain rights to their publications; the package links to the originals and contains selected factual indicators, not copies of the reports.
