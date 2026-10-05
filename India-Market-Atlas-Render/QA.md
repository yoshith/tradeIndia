# Verification record

Snapshot checked: 5 October 2026.

## Completed checks

- JavaScript syntax validation for the application and research data.
- 53 passing assertions in a Node VM interaction harness: source references, unique business IDs, geographic coverage, local-versus-national evidence, search and evidence filters, brief opening/closing, navigation, score sliders, trade filtering, empty results, scenario arithmetic, zero denominators, nonpositive margins, invalid costs, data downloads and optional agent-tool state changes.
- Housing totals independently reconciled to the source table: 171,471 sales and 187,350 new launches across the eight tracked markets.
- Warehouse city observations retain approximate precision; city sums are labelled as aggregates of the tracked markets rather than a national census.
- Commodity comparisons use annual FY 2024–25 and FY 2025–26 columns, not monthly March columns. Calculated growth was checked against the source values.
- National and city-level observations are not silently copied into state or local demand estimates.
- Source links, original periods, units, forecast labels and trade revision status are included with the data.
- The portable HTML is generated from the same HTML, CSS and JavaScript as the Render version.

## Testing limits

The interaction harness is not a browser. Browser visual and accessibility QA could not be completed in this environment because no browser binary was available and its download failed. Desktop/mobile layouts include responsive breakpoints, scrollable wide tables, labelled form controls and focus styles, but actual browser rendering remains to be checked.

Optional WebMCP tools were exercised in a registration/state harness, not in a browser implementing WebMCP. Unsupported browsers simply skip registration; normal website operation does not depend on it.

No deployment was made to Render. Hosting is ready for the repository setup described in START-HERE.md.

## Data limits

This is a curated selection of verified publications, not an exhaustive census or a live feed. The research-check date is not the observation date. Exact demand and supply remain missing for many business/location combinations. Forecasts and indirect context are kept separate from measurements; missing values are not scored as zero.
