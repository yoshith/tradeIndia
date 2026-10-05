/* Curated research snapshot. No simulated observations or live API calls.
   Keep geography, unit, period and source together when updating this file. */
window.ATLAS_DATA = {
  checked: '2026-10-05',
  sources: {
    housing: {publisher:'Knight Frank India',title:'India Real Estate, H1 2026',url:'https://content.knightfrank.com/research/3116/documents/en/india-real-estate-office-and-residential-market-h1-2026-12927.pdf#page=6',period:'January–June 2026',published:'2026-07',type:'Market research',coverage:'Eight metropolitan housing markets',locator:'PDF p. 6: residential sales and launches',note:'Primary market transactions and new launches. Market boundaries follow the publisher; Mumbai is a metropolitan market and NCR includes areas outside Delhi. This is not an all-India housing census.'},
    logistics: {publisher:'CBRE India',title:'India Logistics Figures, H2 2025',url:'https://mktgdocs.cbre.com/2299/39e0c6e4-0a32-46c2-8e54-30d87056d2d0-288867668/India_Logistics_Figures_H2_202.pdf',period:'July–December 2025',published:'2026-02-13',type:'Market research',coverage:'Eight tracked logistics markets',locator:'PDF pp. 8–15: city supply and absorption',note:'City figures are approximate million square feet. Leasing absorption is a transaction measure; new supply excludes existing available space. Rounded city sums may differ from report totals.'},
    food: {publisher:'Swiggy & Kearney',title:'How India Eats 2025',url:'https://www.swiggy.com/corporate/press-release/a-us-125-bn-food-services-market-by-2030-with-the-organized-segment-growing-at-2x-of-the-unorganized-segment-swiggys-how-india-eats-2025-edition-in-partnership-with-kearney/',period:'2025 report; projections to 2030',published:'2025-11-27',type:'Industry research',coverage:'India; report and platform observations',locator:'Release: market forecast, healthy meals, QSR and cloud kitchens',note:'Platform trends do not represent all informal vendors or every city. Relative growth multiples are not percentage growth. No city-level panipuri, burger or bagel capacity is supplied.'},
    fitness: {publisher:'Deloitte India & HFA',title:'India Fitness Market Report 2025',url:'https://www.deloitte.com/in/en/about/press-room/indias-fitness-market-to-double-by-2030-per-a-deloitte-and-hfa-report.html',period:'2024 baseline; forecast to 2030',published:'2025',type:'Industry research',coverage:'India fitness facilities',locator:'Release: revenue, memberships and boutique forecast',note:'Market estimates and forecasts, not a census of gym capacity. The page has inconsistent release date labels and 2030 membership figures; those conflicting fields are omitted.'},
    sports: {publisher:'Deloitte & Google',title:'Think Sports',url:'https://www.deloitte.com/in/en/about/press-room/indias-sports-market-set-to-soar-to-reach-130-bn-by-2030-deloitte-n-google.html',period:'2024 report; forecast to 2030',published:'2024-11-14',type:'Industry research',coverage:'India sports ecosystem',locator:'Release: ecosystem and sports goods forecasts',note:'The ecosystem includes media, goods and other activity. Sports fans are not equivalent to paying players. This does not measure pickleball or cricket court-hour demand.'},
    ev: {publisher:'Ministry of Heavy Industries / PIB',title:'Electric two- and three-wheeler sales',url:'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2117485',period:'FY 2024–25 versus FY 2023–24',published:'2025-04-01',type:'Government release',coverage:'India; e-2W and e-3W (L5)',locator:'Release: total segment sales, before scheme-only figures',note:'Sales are observed activity, not unmet demand. The L5 three-wheeler category excludes other electric three-wheeler classes. No dealer stock or local production capacity is included.'},
    solar: {publisher:'Ministry of New and Renewable Energy / PIB',title:'Clean energy capacity in 2025',url:'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2213238',period:'Calendar year-end 2024 and 2025',published:'2026-01-10',type:'Government release',coverage:'India installed solar capacity',locator:'Solar and wind capacity section',note:'Installed GW is an electricity supply stock. Its growth is not evidence of unserved solar-installation orders or of available contractor capacity.'},
    telecom: {publisher:'Telecom Regulatory Authority of India',title:'Telecom performance indicators, 2025–26',url:'https://www.trai.gov.in/sites/default/files/2026-10/PR_No127of2026.pdf',period:'31 March 2026 versus 31 March 2025',published:'2026-10-05',type:'Regulator release',coverage:'India telecom and pay DTH',locator:'PDF p. 2 broadband; p. 9 pay DTH',note:'Provider-reported subscriptions are not unique people. Broadband includes wireless services. Pay DTH excludes free Doordarshan DTH. These do not measure an individual installer’s customer demand.'},
    hces: {publisher:'MoSPI / PIB',title:'Household Consumption Expenditure Survey 2023–24',url:'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2097601',period:'August 2023–July 2024',published:'2025-01-30',type:'Government survey',coverage:'India and 18 major states in the cited table',locator:'Tables 1 and 2; current-price MPCE without social-transfer imputation',note:'Monthly per-capita consumption expenditure in rupees, not income or category-specific demand. State urban averages must not be relabelled as city averages. Values are historical and nominal.'},
    health: {publisher:'Ministry of Health and Family Welfare / PIB',title:'Healthcare infrastructure and beds',url:'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2080071',period:'31 March 2023',published:'2024-12-03',type:'Government release',coverage:'Reported PHC, CHC, SDH, DH and medical college beds',locator:'Paragraph on beds and National Health Policy',note:'Reported facility coverage is not a complete count of all private hospital beds. A policy bed norm is not observed commercial demand. No hospital shortage score is calculated.'}
  },
  cities: [
    {id:'hyderabad',name:'Hyderabad',state:'Telangana',sales:19249,launches:20466,growth:1,launchGrowth:-2,warehouseDemand:2.7,warehouseSupply:2.0,warehousePage:12},
    {id:'pune',name:'Pune',state:'Maharashtra',sales:24890,launches:31116,growth:2,launchGrowth:17,warehouseDemand:2.8,warehouseSupply:0.7,warehousePage:13},
    {id:'chennai',name:'Chennai',state:'Tamil Nadu',sales:9198,launches:9588,growth:3,launchGrowth:0,warehouseDemand:4.0,warehouseSupply:4.0,warehousePage:11},
    {id:'delhi',name:'Delhi NCR',state:null,sales:24862,launches:23877,growth:-7,launchGrowth:-5,warehouseDemand:9.3,warehouseSupply:1.6,warehousePage:10},
    {id:'bengaluru',name:'Bengaluru',state:'Karnataka',sales:27968,launches:34749,growth:5,launchGrowth:4,warehouseDemand:3.3,warehouseSupply:4.0,warehousePage:9},
    {id:'mumbai',name:'Mumbai',state:'Maharashtra',sales:47355,launches:49161,growth:1,launchGrowth:8,warehouseDemand:6.4,warehouseSupply:3.0,warehousePage:8},
    {id:'ahmedabad',name:'Ahmedabad',state:'Gujarat',sales:9581,launches:11077,growth:2,launchGrowth:3,warehouseDemand:0.9,warehouseSupply:1.7,warehousePage:15},
    {id:'kolkata',name:'Kolkata',state:'West Bengal',sales:8368,launches:7316,growth:3,launchGrowth:-5,warehouseDemand:1.1,warehouseSupply:0.6,warehousePage:14}
  ],
  states: ['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Ladakh','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'],
  consumption: [
    ['Andhra Pradesh',5327,7182],['Assam',3793,6794],['Bihar',3670,5080],['Chhattisgarh',2739,4927],['Gujarat',4116,7175],['Haryana',5377,8427],['Jharkhand',2946,5393],['Karnataka',4903,8076],['Kerala',6611,7783],['Madhya Pradesh',3441,5538],['Maharashtra',4145,7363],['Odisha',3357,5825],['Punjab',5817,7359],['Rajasthan',4510,6574],['Tamil Nadu',5701,8165],['Telangana',5435,8978],['Uttar Pradesh',3481,5395],['West Bengal',3620,5775]
  ],
  signals: {
    food:{title:'Food services',demand:'Forecast >US$125bn',demandLabel:'Market value by 2030',supply:null,display:'>US$125bn',trend:'forecast',value:null,source:'food',period:'2025 outlook to 2030',date:'2025-11-27',scope:'India',note:'A published revenue forecast for the food-services sector. It cannot establish a local restaurant shortage.'},
    cloud:{title:'QSRs & cloud kitchens',demand:'Forecast 17%+ CAGR',demandLabel:'Segment growth outlook',supply:null,display:'17%+',trend:'forecast',value:17,source:'food',period:'2025 report; forecast',date:'2025-11-27',scope:'India',note:'Combined QSR and cloud-kitchen forecast, not a burger-specific growth rate. Local order volume and kitchen capacity remain unknown.'},
    healthy:{title:'Healthy meal orders',demand:'2.3× overall growth',demandLabel:'Relative order-growth signal',supply:null,display:'2.3×',trend:'proxy',value:null,source:'food',period:'2025 report',date:'2025-11-27',scope:'India / platform research',note:'Healthy and better-for-you meal orders grew at a multiple of overall order growth. This is not 230% growth and does not measure protein-bar sales.'},
    gym:{title:'Fitness facilities',demand:'12.3m members',demandLabel:'Estimated memberships in 2024',supply:null,display:'15%',trend:'forecast',value:15,source:'fitness',period:'2024 baseline; forecast to 2030',date:'2024-12-31',scope:'India',note:'Revenue forecast grows from ₹16,200 crore (2024 estimate) to ₹37,700 crore (2030). Membership is not unserved capacity demand.'},
    boutique:{title:'Boutique fitness',demand:'Forecast 18.8% CAGR',demandLabel:'Segment revenue growth',supply:null,display:'18.8%',trend:'forecast',value:18.8,source:'fitness',period:'2025 report; forecast to 2030',date:'2025-09-09',scope:'India',note:'Combined boutique segment includes formats such as yoga, Pilates, HIIT and MMA. The rate is not a forecast for each individual format or location.'},
    sportgoods:{title:'Sports goods & apparel',demand:'Forecast US$58bn',demandLabel:'Market value by 2030',supply:null,display:'US$58bn',trend:'forecast',value:null,source:'sports',period:'2024 outlook to 2030',date:'2024-11-14',scope:'India',note:'Combined sports goods and apparel forecast. This does not count active players or local shop sales.'},
    ev2:{title:'Electric two-wheelers',demand:'11,49,334 sold',demandLabel:'Sales in FY 2024–25',supply:null,display:'+21.2%',trend:'growing',value:(1149334/948561-1)*100,latest:1149334,prior:948561,source:'ev',period:'FY 2024–25 vs FY 2023–24',date:'2025-03-31',scope:'India',note:'Growth is calculated from reported total e-2W sales. Manufacturer capacity, dealer inventory and unmet orders are not supplied.'},
    ev3:{title:'Electric three-wheelers (L5)',demand:'1,59,235 sold',demandLabel:'Sales in FY 2024–25',supply:null,display:'+56.8%',trend:'growing',value:(159235/101581-1)*100,latest:159235,prior:101581,source:'ev',period:'FY 2024–25 vs FY 2023–24',date:'2025-03-31',scope:'India',note:'L5 vehicle category only. Growth is calculated from reported sales, not from transport trips or unserved passenger demand.'},
    solar:{title:'Solar deployment',demand:null,demandLabel:'Unserved installation demand unknown',supply:'135.81 GW installed',supplyLabel:'Cumulative solar capacity at end-2025',display:'+38.8%',trend:'growing',value:(135.81/97.86-1)*100,latest:135.81,prior:97.86,source:'solar',period:'Year-end 2025 vs 2024',date:'2025-12-31',scope:'India',note:'Growth describes installed electricity supply. It is a sector activity indicator, not a measurement of installer demand or profit.'},
    broadband:{title:'Broadband subscriptions',demand:'1,065.88m subscriptions',demandLabel:'Total at 31 March 2026',supply:null,display:'+12.9%',trend:'growing',value:(1065.88/944.12-1)*100,latest:1065.88,prior:944.12,source:'telecom',period:'March 2026 vs March 2025',date:'2026-03-31',scope:'India',note:'Subscriptions include mobile and fixed broadband. Multiple subscriptions can belong to the same person. Local fixed-network competition is not measured.'},
    dth:{title:'Pay DTH subscriptions',demand:'49.05m subscriptions',demandLabel:'Net pay active base, March 2026',supply:'4 pay DTH operators',supplyLabel:'Operator count; not service capacity',display:'−13.8%',trend:'cooling',value:(49.05/56.92-1)*100,latest:49.05,prior:56.92,source:'telecom',period:'March 2026 vs March 2025',date:'2026-03-31',scope:'India',note:'Subscriber contraction is measured. It does not prove all DTH installation businesses will fail. Operator count cannot be divided into subscriptions to infer a shortage.'},
    hospital:{title:'Reported healthcare beds',demand:null,demandLabel:'Admissions and unmet bed-days unknown',supply:'8,18,661 beds',supplyLabel:'Reported facility beds, 31 March 2023',display:'8.19 lakh',trend:'context',value:null,source:'health',period:'31 March 2023',date:'2023-03-31',scope:'India / specified facilities',note:'Historical supply count from specified facility types. Private coverage and demand are incomplete; no national or city shortage ratio is defensible.'}
  },
  sectors: {
    food:{name:'Food & drink',code:'FD',sources:['food','hces'],unit:'orders',demand:'Paid orders or meals per month in a defined catchment',supply:'Active outlets × sustainable orders per outlet per month',checks:['Count weekday and weekend orders by meal time; include street vendors and delivery-only competitors.','Measure service capacity, queueing, sold-out periods and delivery radius.','Check repeat purchases, selling price, wastage, rent and contribution per order.']},
    nutrition:{name:'Nutrition & packaged food',code:'NP',sources:['hces'],unit:'packs',demand:'Packs actually purchased per month at the intended price',supply:'Sellable packs available per month across the same channels',checks:['Run a paid product trial and measure repeat purchases; search interest alone is insufficient.','Audit retailer stock, competing pack sizes, expiry losses and distribution reach.','Obtain supplier quotes and test margins after returns and channel commissions.']},
    realestate:{name:'Real estate',code:'RE',sources:['housing'],unit:'units',demand:'Completed sales or leases in the same area and reporting period',supply:'Existing available stock plus eligible new supply, without double counting',checks:['Separate primary sales, resale and rental markets and match the geographic boundary.','Include available inventory, prices, project timing and absorption.','Validate micro-market affordability, tenant demand and project-level costs.']},
    health:{name:'Healthcare & care',code:'HC',sources:['health','hces'],unit:'visits',demand:'Paid or funded visits, treatment episodes or occupied bed-days',supply:'Staffed, operational capacity in matching service units',checks:['Match specialities, payer mix, referral catchment and realistic affordability.','Count staffed capacity and waiting times, including private providers.','Check clinical staffing, occupancy and applicable approvals before a business decision.']},
    sports:{name:'Sports & fitness',code:'SF',sources:['sports','fitness'],unit:'booking-hours',demand:'Paid booking-hours or active memberships in the catchment',supply:'Bookable court-hours, class places or membership capacity',checks:['Track paid bookings separately at peak and off-peak times; followers are not customers.','Audit competing facilities, usable playing hours, access and cancellation rates.','Test repeat bookings and contribution after land lease, coaches and maintenance.']},
    mobility:{name:'Mobility & logistics',code:'ML',sources:['ev'],unit:'trips',demand:'Completed paid trips, shipments or contracted capacity',supply:'Operational capacity in the same service area and period',checks:['Measure routes, load factors, repeat contracts and backhaul availability.','Count usable vehicle or storage capacity rather than registered firms alone.','Check maintenance, energy, driver costs and working-capital requirements.']},
    energy:{name:'Energy & environment',code:'EN',sources:['solar'],unit:'jobs',demand:'Confirmed paid installation or service jobs',supply:'Qualified available provider capacity per month',checks:['Validate orders with deposits or signed procurement commitments.','Check operational competitors, grid access or waste collection service boundaries.','Model equipment, labour, maintenance and customer payment timing.']},
    retail:{name:'Retail & local services',code:'RS',sources:['hces'],unit:'orders',demand:'Paid transactions and repeat customers in the catchment',supply:'Usable competing service or product capacity in the same period',checks:['Survey a defined neighbourhood and verify demand with paid trials.','Include online and informal competitors and measure utilisation.','Track repeat rate, basket size, margin, labour and fixed occupancy costs.']},
    digital:{name:'Digital & education',code:'DE',sources:['hces'],unit:'subscriptions',demand:'Paying customers, enrolments or contracted projects',supply:'Available seats, service-hours or equivalent competitor capacity',checks:['Validate conversion from interest to paid subscriptions or enrolments.','Compare churn, competing providers and delivery capacity.','Test acquisition cost, retention and cost to serve before scaling.']},
    manufacturing:{name:'Industry & agriculture',code:'IA',sources:['hces'],unit:'units',demand:'Confirmed orders for a defined product or service',supply:'Saleable output after downtime, defects and seasonality',checks:['Seek buyer commitments and verify seasonal demand.','Measure effective output, inventory, rejects and logistics bottlenecks.','Obtain input, equipment and credit quotes; test cash flow through the full cycle.']}
  },
  businesses: []
};
// id | name | sector | measured signal (if any) | relevant model units
const atlasBusinessRows = [
  ['restaurants','Restaurants & dining','food','food','orders'],
  ['panipuri','Panipuri / golgappa stalls','food',null,'servings'],
  ['burgers','Burger outlets','food',null,'orders'],
  ['bagels','Bagel shops','food',null,'orders'],
  ['pizza','Pizza outlets','food',null,'orders'],
  ['biryani','Biryani kitchens','food',null,'orders'],
  ['dosa','Dosa & South Indian food','food',null,'orders'],
  ['cafes','Coffee shops & cafés','food',null,'orders'],
  ['tea','Tea kiosks','food',null,'cups'],
  ['cloud','Cloud kitchens & QSRs','food','cloud','orders'],
  ['tiffin','Tiffin & office catering','food',null,'meals'],
  ['juice','Juice & beverage shops','food',null,'servings'],
  ['icecream','Ice cream & desserts','food',null,'orders'],
  ['bakery','Bakeries','food',null,'orders'],
  ['proteinbars','Protein bars','nutrition',null,'packs'],
  ['proteinpowder','Protein powders','nutrition',null,'packs'],
  ['proteinmeals','Protein & healthy meals','nutrition','healthy','meals'],
  ['snacks','Packaged snacks','nutrition',null,'packs'],
  ['dairy','Dairy & alternative drinks','nutrition',null,'packs'],
  ['frozen','Frozen & ready-to-cook foods','nutrition',null,'packs'],
  ['housing','Residential property','realestate','housing','homes'],
  ['affordable','Affordable housing','realestate',null,'homes'],
  ['offices','Office property','realestate',null,'sq-ft'],
  ['coworking','Coworking spaces','realestate',null,'desk-months'],
  ['studenthousing','Student housing & PGs','realestate',null,'bed-months'],
  ['propertymanagement','Property management','realestate',null,'contracts'],
  ['hospitals','Hospitals','health','hospital','bed-days'],
  ['clinics','Neighbourhood clinics','health',null,'visits'],
  ['diagnostics','Diagnostic laboratories','health',null,'tests'],
  ['pharmacies','Pharmacies','health',null,'orders'],
  ['physio','Physiotherapy','health',null,'visits'],
  ['homecare','Home healthcare','health',null,'visits'],
  ['eldercare','Elder care','health',null,'care-days'],
  ['mentalhealth','Mental health services','health',null,'visits'],
  ['pickleball','Pickleball courts','sports',null,'court-hours'],
  ['cricket','Cricket turfs & academies','sports',null,'pitch-hours'],
  ['badminton','Badminton courts','sports',null,'court-hours'],
  ['football','Football turfs','sports',null,'pitch-hours'],
  ['gyms','Gyms & fitness facilities','sports','gym','member-months'],
  ['yoga','Yoga & group classes','sports',null,'class-places'],
  ['boutique','Boutique fitness & Pilates','sports','boutique','class-places'],
  ['sportsretail','Sports goods & apparel','sports','sportgoods','items'],
  ['ev2','Electric two-wheeler sales','mobility','ev2','vehicles'],
  ['ev3','Electric three-wheeler sales','mobility','ev3','vehicles'],
  ['charging','EV charging','mobility',null,'kWh'],
  ['lastmile','Last-mile delivery','mobility',null,'shipments'],
  ['trucking','Trucking & freight','mobility',null,'tonne-km'],
  ['warehouses','Warehousing','mobility','warehouses','sq-ft'],
  ['coldchain','Cold-chain logistics','mobility',null,'pallet-days'],
  ['commuter','Commuter transport','mobility',null,'passenger-trips'],
  ['solar','Solar installation','energy','solar','jobs'],
  ['solarcare','Solar maintenance','energy',null,'jobs'],
  ['recycling','Recycling','energy',null,'tonnes'],
  ['water','Water purification','energy',null,'litres'],
  ['waste','Waste collection','energy',null,'tonnes'],
  ['grocery','Grocery & convenience','retail',null,'orders'],
  ['clothing','Clothing & footwear','retail',null,'items'],
  ['ecommerce','E-commerce stores','retail',null,'orders'],
  ['beauty','Salons & beauty services','retail',null,'visits'],
  ['laundry','Laundry & dry cleaning','retail',null,'orders'],
  ['homerepair','Home repair services','retail',null,'jobs'],
  ['petcare','Pet care services','retail',null,'visits'],
  ['broadband','Broadband services','digital','broadband','subscriptions'],
  ['dth','Pay DTH services','digital','dth','subscriptions'],
  ['ai','AI & automation services','digital',null,'contracts'],
  ['bookkeeping','Bookkeeping services','digital',null,'contracts'],
  ['skilling','Job skills & training','digital',null,'enrolments'],
  ['tuition','Tuition & test preparation','digital',null,'enrolments'],
  ['daycare','Daycare centres','digital',null,'child-days'],
  ['agritech','Agriculture technology','digital',null,'subscriptions'],
  ['packaging','Packaging manufacturing','manufacturing',null,'packs'],
  ['processing','Food processing','manufacturing',null,'packs'],
  ['contractmanufacturing','Contract manufacturing','manufacturing',null,'units'],
  ['farmmachinery','Farm machinery rental','manufacturing',null,'machine-hours'],
  ['horticulture','Horticulture & fresh produce','manufacturing',null,'kg'],
  ['agriinputs','Agricultural inputs','manufacturing',null,'packs']
];
window.ATLAS_DATA.businesses = atlasBusinessRows.map(([id,name,sector,signal,unit])=>({id,name,sector,signal,unit}));
window.ATLAS_DATA.sources.trade = {publisher:'Department of Commerce / PIB',title:'India trade, FY 2025–26',url:'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2252272',period:'April 2025–March 2026',published:'2026-04-15',type:'Government release',coverage:'India cross-border merchandise and services',locator:'Table 2 and merchandise / services sections',note:'April 2026 release vintage, subject to revision. March services were estimated; merchandise includes provisional March data. Values are nominal US dollars. City consumption and importer profitability cannot be inferred.'};
window.ATLAS_DATA.sources.tradeTables = {publisher:'Department of Commerce / DGCI&S',title:'Selected commodities and trading partners',url:'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/apr/doc2026415848001.pdf',period:'FY 2025–26 versus FY 2024–25',published:'2026-04-15',type:'Government tables',coverage:'India; selected commodity groups and countries',locator:'PDF pp. 1, 3, 5 and 6; annual USD columns',note:'Quick-estimate vintage; March 2026 provisional. Exports include re-exports and imports include re-imports. These commodity groups are not an exhaustive HS-code list. Country and commodity tables are separate, not a product-by-country matrix.'};
window.ATLAS_DATA.trade = {
  period:'FY 2025–26', priorPeriod:'FY 2024–25', date:'2026-03-31', vintage:'15 April 2026',
  totals:{merchandiseExports:441.78,merchandiseImports:774.98,previousExports:437.70,previousImports:721.20,servicesExports:418.31,servicesImports:204.42},
  // Values are USD millions, annual columns only.
  products:[
    ['export','Engineering goods',116754.17,122431.30],['export','Electronic goods',38556.49,47964.98],['export','Drugs & pharmaceuticals',30468.21,31116.08],['export','Rice',12472.47,11537.36],['export','Spices',4451.97,4261.17],['export','Coffee',1805.57,2082.70],['export','Gems & jewellery',29818.20,28208.32],['export','Readymade garments',15989.34,15772.14],
    ['import','Electronic goods',98650.56,116175.35],['import','Machinery, electrical & non-electrical',53391.29,61734.70],['import','Petroleum, crude & products',185779.29,173945.81],['import','Vegetable oil',17366.26,19488.34],['import','Pulses',5477.28,3572.89],['import','Fertilisers',10225.63,16437.23],['import','Gold',58006.37,71977.48],['import','Medicinal & pharmaceutical products',8916.09,9612.38]
  ],
  partners:[
    ['export','United States',86514.28,87308.87],['export','United Arab Emirates',36638.02,37365.30],['export','China',14252.21,19476.59],['export','Netherlands',22763.41,17504.05],
    ['import','China',113447.34,131633.56],['import','United Arab Emirates',63403.01,63893.14],['import','Russia',63811.44,55368.25],['import','United States',45625.20,52900.51]
  ]
};
window.ATLAS_DATA.sectors.trade = {name:'Import & export businesses',code:'EX',sources:['trade','tradeTables'],unit:'shipments',demand:'Confirmed buyer orders at the proposed landed or export price',supply:'Reliable supplier capacity with deliverable lead times and product specifications',checks:['Match the exact product specification and HS classification; broad trade growth is not proof of customer demand.','Obtain current freight, duty, tax, insurance and certification quotes for the destination and shipment.','Validate buyer payment terms, supplier quality, foreign-exchange exposure and working capital.']};
[['importelectronics','Electronics importing'],['importmachinery','Machinery importing'],['importfood','Food & ingredient importing'],['exportfood','Food & spice exporting'],['exportengineering','Engineering goods exporting'],['exporttextiles','Textile & garment exporting'],['exportpharma','Pharmaceutical exporting'],['tradeagency','Import/export sourcing agency']].forEach(([id,name])=>window.ATLAS_DATA.businesses.push({id,name,sector:'trade',signal:null,unit:'shipments'}));
