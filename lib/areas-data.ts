export type Area = {
  slug: string
  name: string
  headline: string
  description: string
  longDescription: string
  postcodes: string[]
  features: string[]
  faqs: { question: string; answer: string }[]
}

export const areas: Area[] = [
  {
    slug: 'glasgow',
    name: 'Glasgow',
    headline: 'Vehicle Recovery in Glasgow',
    description: "Glasgow's fastest 24/7 emergency vehicle recovery and accident assistance service. We cover the entire city and surrounding areas.",
    longDescription: `Glasgow is Scotland's largest city and our primary operating area. With our base in Central Scotland, we maintain some of the fastest response times in the city, typically 30–45 minutes for most Glasgow postcodes.\n\nFrom the city centre to the Southside, East End, West End and beyond, Glasgow Breakdown Recovery knows Glasgow's road network inside out. We handle everything from minor breakdowns on residential streets to serious accidents on the M8 and M74 ring roads.`,
    postcodes: ['G1', 'G2', 'G3', 'G4', 'G5', 'G11', 'G12', 'G13', 'G14', 'G15', 'G20', 'G21', 'G22', 'G23', 'G31', 'G32', 'G33', 'G34', 'G40', 'G41', 'G42', 'G43', 'G44', 'G45', 'G46', 'G51', 'G52', 'G53'],
    features: ['City centre response within 30 min', 'M8 and ring road specialists', 'Covers all Glasgow postcode districts', '24/7 including bank holidays', 'Coordination with Glasgow City Police', 'All vehicle types including prestige'],
    faqs: [
      { question: 'How fast can you reach central Glasgow?', answer: 'For central Glasgow postcodes (G1, G2, G3), we typically arrive within 30–40 minutes. Outer Glasgow postcodes may take up to 60 minutes depending on time of day and traffic.' },
      { question: 'Do you recover vehicles from Glasgow car parks?', answer: 'Yes, we recover vehicles from multi-storey car parks, basement car parks and any other enclosed or restricted access location throughout Glasgow.' },
    ],
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    headline: 'Vehicle Recovery in Edinburgh',
    description: "Edinburgh's trusted emergency recovery service for accidents and breakdowns across the capital. Fast response to all Edinburgh postcodes.",
    longDescription: `Edinburgh's unique geography, cobbled old town streets, busy city bypass and the A720 ring road, presents its own recovery challenges. Glasgow Breakdown Recovery has the experience and equipment to handle them all.\n\nWe cover all Edinburgh postcodes from the city centre to Leith, Morningside, Portobello and the Pentland Hills. Whether you have broken down on the Royal Mile or been involved in an accident on the City Bypass, we will reach you quickly.`,
    postcodes: ['EH1', 'EH2', 'EH3', 'EH4', 'EH5', 'EH6', 'EH7', 'EH8', 'EH9', 'EH10', 'EH11', 'EH12', 'EH13', 'EH14', 'EH15', 'EH16', 'EH17'],
    features: ['A720 bypass specialists', 'Old town and cobbled road recovery', 'Airport vicinity coverage', 'Tram route awareness', 'All Edinburgh postcode districts', 'Leith and port area coverage'],
    faqs: [
      { question: 'Can you reach Edinburgh from Glasgow quickly?', answer: "Yes, we have extended our coverage to Edinburgh and can typically reach the city within 60–75 minutes. For faster response, we have partner operators in Edinburgh's area who can dispatch simultaneously." },
      { question: 'Do you cover the Edinburgh City Bypass (A720)?', answer: 'The A720 Edinburgh City Bypass is one of our key operational roads in Edinburgh. We have dedicated experience with A-road and dual carriageway recovery in the Edinburgh area.' },
    ],
  },
  {
    slug: 'paisley',
    name: 'Paisley',
    headline: 'Vehicle Recovery in Paisley',
    description: 'Fast breakdown and accident recovery across Paisley and Renfrewshire. Located close to Glasgow Airport and the M8 corridor.',
    longDescription: `Paisley's proximity to Glasgow Airport and the busy M8 motorway means our Paisley coverage is among our most active. We regularly assist motorists on the approach roads to the airport and the surrounding industrial areas of Renfrewshire.\n\nWhether you're a local resident or a traveller who has broken down near the airport, Glasgow Breakdown Recovery provides the same fast, professional service throughout the Paisley and Renfrewshire area.`,
    postcodes: ['PA1', 'PA2', 'PA3', 'PA4', 'PA5'],
    features: ['Glasgow Airport approach roads', 'M8 motorway junction coverage', 'Renfrewshire-wide coverage', 'Industrial estate recovery', 'Rental car support near the airport', '24/7 availability'],
    faqs: [
      { question: 'Can you recover hire cars near Glasgow Airport?', answer: 'Yes, we regularly assist hire car customers who have broken down near Glasgow Airport. We can deliver the vehicle to the hire company depot or another location of your choice.' },
      { question: 'How long to reach Paisley from Glasgow?', answer: 'Paisley is typically within 20–30 minutes of our Glasgow base, making it one of our fastest response areas.' },
    ],
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    headline: 'Vehicle Recovery in Hamilton',
    description: 'Emergency vehicle recovery across Hamilton and South Lanarkshire. Quick access from the M74 and M8 motorway network.',
    longDescription: `Hamilton sits at the heart of South Lanarkshire's road network, with easy access to the M74, M8 and A-road connections throughout the region. Glasgow Breakdown Recovery provides comprehensive vehicle recovery across Hamilton and the wider South Lanarkshire area.\n\nWe are familiar with Hamilton's road layout, including the town centre, Burnbank, Blantyre, Quarter and all surrounding communities.`,
    postcodes: ['ML3'],
    features: ['M74 junction proximity', 'South Lanarkshire coverage', 'Hamilton town centre specialists', 'Rural South Lanarkshire recovery', 'All vehicle types', '24/7 rapid response'],
    faqs: [
      { question: 'Do you cover Blantyre and Burnbank as well as Hamilton?', answer: "Yes, our Hamilton coverage extends to all surrounding areas including Blantyre, Burnbank, Ferniegair, Quarter and the wider ML3 postcode district." },
    ],
  },
  {
    slug: 'motherwell',
    name: 'Motherwell',
    headline: 'Vehicle Recovery in Motherwell',
    description: 'Reliable 24/7 vehicle recovery across Motherwell, Wishaw and North Lanarkshire. Fast response to accidents and breakdowns.',
    longDescription: `Motherwell and Wishaw form the core of North Lanarkshire's urban area. With excellent motorway links via the M8 and M74, Glasgow Breakdown Recovery provides fast response times throughout this key industrial and residential region.\n\nWe cover all of North Lanarkshire including Motherwell, Wishaw, Bellshill, Coatbridge, Airdrie and surrounding areas.`,
    postcodes: ['ML1', 'ML2', 'G69', 'G71'],
    features: ['North Lanarkshire coverage', 'Industrial area specialists', 'M8 eastern corridor', 'Ravenscraig and retail park recovery', 'Bellshill and Coatbridge coverage', '24/7 service'],
    faqs: [
      { question: 'Do you cover Wishaw and Bellshill as well as Motherwell?', answer: 'Yes, our Motherwell coverage encompasses the entire ML1 and ML2 postcode areas, including Wishaw, Bellshill, New Stevenston and Carfin.' },
    ],
  },
  {
    slug: 'livingston',
    name: 'Livingston',
    headline: 'Vehicle Recovery in Livingston',
    description: 'Emergency recovery across Livingston and West Lothian. Fast response to the M8, M9 and surrounding areas.',
    longDescription: `Livingston is West Lothian's commercial hub, sitting astride the M8 between Glasgow and Edinburgh. Our Livingston coverage provides rapid response to one of Scotland's busiest motorway corridors, as well as the town's extensive retail parks, industrial estates and residential areas.`,
    postcodes: ['EH54', 'EH53', 'EH55'],
    features: ['M8 west corridor specialists', 'Livingston retail park coverage', 'McArthurGlen and The Centre', 'Industrial estate recovery', 'West Lothian-wide coverage', 'Edinburgh and Glasgow link roads'],
    faqs: [
      { question: 'How quickly can you reach Livingston?', answer: 'Livingston is well-positioned between our Glasgow and Edinburgh operations. We typically achieve a 40–55 minute response time for most Livingston postcodes.' },
    ],
  },
  {
    slug: 'falkirk',
    name: 'Falkirk',
    headline: 'Vehicle Recovery in Falkirk',
    description: 'Professional vehicle recovery across Falkirk and the surrounding area. Covering the M9, M80 and central Scotland motorway links.',
    longDescription: `Falkirk sits at the junction of Scotland's central motorway network, where the M9 and M80 meet. This makes it one of the busiest areas for motorway incidents in Scotland. Glasgow Breakdown Recovery maintains strong coverage across Falkirk and the Forth Valley region.`,
    postcodes: ['FK1', 'FK2', 'FK3', 'FK4', 'FK5'],
    features: ['M9/M80 interchange specialists', 'Grangemouth coverage', 'Forth Valley coverage', 'Industrial heavy recovery', 'Stenhousemuir and Larbert', '24/7 rapid response'],
    faqs: [
      { question: 'Do you cover Grangemouth and Stenhousemuir?', answer: 'Yes, our Falkirk coverage extends across the full FK postcode area, including Grangemouth, Stenhousemuir, Larbert, Bonnybridge and Denny.' },
    ],
  },
  {
    slug: 'stirling',
    name: 'Stirling',
    headline: 'Vehicle Recovery in Stirling',
    description: 'Emergency breakdown and accident recovery across Stirling and Clackmannanshire. Gateway to the Highlands coverage.',
    longDescription: `Stirling is the gateway to the Scottish Highlands, sitting where the Lowlands meet the Highland boundary. Glasgow Breakdown Recovery serves Stirling and its surrounding areas, providing rapid response whether you have broken down in the city centre or on the rural roads leading north.`,
    postcodes: ['FK7', 'FK8', 'FK9', 'FK10'],
    features: ['A9 and A84 coverage', 'Highland gateway routes', 'Stirling city centre coverage', 'Bannockburn and Cambuskenneth', 'Bridge of Allan coverage', 'Rural route specialists'],
    faqs: [
      { question: 'Can you recover vehicles from rural roads near Stirling?', answer: 'Yes, we specialise in rural road recovery, which can present unique challenges like limited access and narrow lanes. Our team has the right vehicles and experience for rural Stirlingshire recovery.' },
    ],
  },
  {
    slug: 'ayr',
    name: 'Ayr',
    headline: 'Vehicle Recovery in Ayr & South Ayrshire',
    description: 'Fast vehicle recovery across Ayr, Prestwick and South Ayrshire. Covering the A77 and Ayrshire road network.',
    longDescription: `Ayr and South Ayrshire present their own recovery challenges, from the busy A77 coastal route to the rural roads of East Ayrshire. Glasgow Breakdown Recovery provides comprehensive coverage across the Ayrshire region, including Ayr, Prestwick, Troon, Kilmarnock and surrounding areas.`,
    postcodes: ['KA6', 'KA7', 'KA8', 'KA9', 'KA10'],
    features: ['A77 coastal route coverage', 'Prestwick Airport vicinity', 'South Ayrshire rural coverage', 'Troon and Prestwick coverage', 'Burns Country routes', '24/7 rapid dispatch'],
    faqs: [
      { question: 'Do you cover the A77 between Glasgow and Ayr?', answer: 'The A77 is one of our key operational routes, and we provide rapid response along the entire length from Glasgow down to Ayr, Girvan and beyond.' },
    ],
  },
  {
    slug: 'kilmarnock',
    name: 'Kilmarnock',
    headline: 'Vehicle Recovery in Kilmarnock',
    description: 'Emergency vehicle recovery across Kilmarnock and East Ayrshire. Covering the A77, A71 and surrounding road network.',
    longDescription: `Kilmarnock is East Ayrshire's largest town and a key hub on the route between Glasgow and the Ayrshire coast. Our Kilmarnock coverage extends throughout the KA1 and KA3 postcode areas, serving both town and rural communities.`,
    postcodes: ['KA1', 'KA2', 'KA3'],
    features: ['A77 and A71 corridor', 'Kilmarnock town centre coverage', 'East Ayrshire rural coverage', 'Galston and Stewarton coverage', 'Crosshouse and Hurlford', '24/7 service'],
    faqs: [
      { question: 'How quickly can you reach Kilmarnock?', answer: 'Kilmarnock is approximately 35–45 minutes from our Central Scotland base. For urgent calls, we dispatch immediately and aim to beat the estimated arrival time.' },
    ],
  },
  {
    slug: 'dumfries',
    name: 'Dumfries',
    headline: 'Vehicle Recovery in Dumfries & Galloway',
    description: 'Coverage across Dumfries and the Galloway region. Recovery on the A75, A76 and M74 as you head to the English border.',
    longDescription: `Dumfries and Galloway is one of Scotland's most scenic but also most remote regions for motorists. Breaking down on the A75 or A76 can leave you far from help. Glasgow Breakdown Recovery extends its coverage throughout Dumfries and Galloway, ensuring even remote motorists can access professional recovery.`,
    postcodes: ['DG1', 'DG2', 'DG3', 'DG11'],
    features: ['A75 route to Northern Ireland ferries', 'A76 Nithsdale coverage', 'M74 southern extension', 'Galloway Forest recovery capability', 'Cross-border recovery available', 'Long-distance capability'],
    faqs: [
      { question: 'Can you reach vehicles on the A75 towards Stranraer?', answer: "Yes, the A75 is a critical route for ferry traffic to Northern Ireland and we provide coverage along its full length. Response times to remote sections may be longer, but we will reach you." },
    ],
  },
  {
    slug: 'perth',
    name: 'Perth',
    headline: 'Vehicle Recovery in Perth & Kinross',
    description: 'Emergency recovery across Perth and Kinross. Covering the A9, M90 and the gateway routes to the Scottish Highlands.',
    longDescription: `Perth is the gateway to the Scottish Highlands and sits on the busy M90 and A9 routes. Glasgow Breakdown Recovery provides specialist coverage across Perth and Kinross, handling breakdowns and accidents on some of Scotland's most important trunk roads.\n\nFrom the M90 Perth junction to the A9 heading north, we know these roads and provide fast, reliable response.`,
    postcodes: ['PH1', 'PH2'],
    features: ['M90 and A9 specialists', 'Highland route coverage', 'Perth city and suburbs', 'Scone and Bridge of Earn', 'Crieff and Auchterarder coverage', 'Tourism season specialists'],
    faqs: [
      { question: 'Do you cover the A9 north of Perth?', answer: "Yes, we cover the A9 from Perth heading north. This is one of Scotland's busiest and most important routes and we maintain priority response capability along it." },
    ],
  },
]

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find(a => a.slug === slug)
}
