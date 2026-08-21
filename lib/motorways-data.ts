export type Motorway = {
  slug: string
  name: string
  headline: string
  description: string
  longDescription: string
  junctions: string[]
  areasServed: string[]
  features: string[]
  faqs: { question: string; answer: string }[]
}

export const motorways: Motorway[] = [
  {
    slug: 'm8',
    name: 'M8',
    headline: 'Recovery on the M8 Motorway',
    description: "Scotland's busiest motorway, running through the heart of Glasgow and connecting to Edinburgh. We provide rapid response recovery along its full length.",
    longDescription: `The M8 is Scotland's busiest and most demanding motorway, carrying traffic straight through Glasgow city centre on an elevated viaduct before continuing east to Edinburgh. Its combination of high traffic volume, tight lane changes and limited hard shoulder in places means breakdowns and accidents here need a fast, experienced response.\n\nGlasgow Breakdown Recovery covers the M8 along its entire length, from the Kingston Bridge and city centre section through Baillieston, Easterhouse and Bargeddie, out towards Newhouse, Harthill and on to Edinburgh. We work closely with Traffic Scotland and Police Scotland when recovering vehicles from live lanes or the hard shoulder.`,
    junctions: ['J1 Charing Cross', 'J8 Baillieston Interchange (M73)', 'J14 Newhouse', 'J17 Harthill Services', 'J1 Edinburgh (City Bypass)'],
    areasServed: ['glasgow', 'edinburgh', 'paisley', 'livingston'],
    features: [
      'Full length coverage from Glasgow to Edinburgh',
      'City centre viaduct and Kingston Bridge specialists',
      'Rapid response to vehicles stranded in live lanes',
      'Coordination with Traffic Scotland and Police Scotland',
      'Recovery to nearest safe refuge or hard shoulder',
      '24/7 motorway-trained recovery operators',
    ],
    faqs: [
      { question: 'What should I do if I break down on the M8?', answer: 'If possible, move to the hard shoulder or nearest emergency refuge area, put your hazard lights on, and exit the vehicle from the passenger side away from traffic if it is safe to do so. Call us and we will dispatch immediately.' },
      { question: 'Do you recover vehicles from the M8 city centre viaduct?', answer: 'Yes, the elevated section through Glasgow city centre is one of our most frequent call-out locations. Our operators are experienced with the restricted access and traffic management required there.' },
    ],
  },
  {
    slug: 'm74',
    name: 'M74',
    headline: 'Recovery on the M74 Motorway',
    description: 'The main motorway link between Central Scotland and North West England, passing through South Lanarkshire and Glasgow. Full-length recovery coverage.',
    longDescription: `The M74 is one of Scotland's key freight and travel corridors, linking Glasgow and South Lanarkshire to the M6 and the north of England via Gretna. The M74 extension also carries traffic directly into Glasgow city centre from the south.\n\nGlasgow Breakdown Recovery covers the M74 from its junction with the M8 in Glasgow, past Hamilton, Motherwell and Larkhall, through Lanark and Abington, and on towards the border. Given the volume of HGV traffic on this route, we carry equipment suited to both cars and larger commercial vehicles.`,
    junctions: ['J1 Glasgow (M8 interchange)', 'J5 Raith Interchange (M73/A725)', 'J7 Hamilton', 'J13 Abington Services', 'J22 Gretna'],
    areasServed: ['glasgow', 'hamilton', 'motherwell'],
    features: [
      'Full route coverage from Glasgow to the border',
      'HGV and commercial vehicle recovery equipment',
      'Hamilton and South Lanarkshire junction specialists',
      'Rural and moorland sections south of Abington',
      'Cross-border coordination for long-distance recovery',
      '24/7 rapid response dispatch',
    ],
    faqs: [
      { question: 'Can you recover HGVs and vans from the M74?', answer: 'Yes, we carry equipment suited to commercial vehicles as well as cars. Given the volume of freight traffic on the M74, this is one of our most common commercial recovery routes.' },
      { question: 'How far south do you cover the M74?', answer: 'We cover the full length of the M74 through South Lanarkshire and into the more rural sections towards Abington. For breakdowns closer to the border, response times may be longer, but we will always come to you.' },
    ],
  },
  {
    slug: 'm77',
    name: 'M77',
    headline: 'Recovery on the M77 Motorway',
    description: 'The main motorway route from Glasgow to Ayrshire, including the exposed Fenwick Moor stretch. Fast response to breakdowns and accidents.',
    longDescription: `The M77 links Glasgow to Ayrshire, running south through Newton Mearns before crossing the exposed moorland of Fenwick Moor, a stretch known for sudden weather changes, fog and high winds. It is a key route for anyone travelling towards Kilmarnock, Ayr, Prestwick Airport and the Ayrshire coast.\n\nGlasgow Breakdown Recovery provides coverage along the full M77 corridor, with particular experience on the Fenwick Moor section where conditions can deteriorate quickly and breakdowns can leave motorists exposed to the elements.`,
    junctions: ['J1 Glasgow (M8 interchange)', 'J4 Newton Mearns', 'J6 Malletsheugh', 'J8 Fenwick Moor', 'J9 Fenwick / A77'],
    areasServed: ['glasgow', 'kilmarnock', 'ayr'],
    features: [
      'Full route coverage Glasgow to Ayrshire',
      'Fenwick Moor exposed-weather specialists',
      'Prestwick Airport approach coverage',
      'Newton Mearns and Southside junction access',
      'A77 continuation coverage towards Ayr and Girvan',
      '24/7 dispatch in all weather conditions',
    ],
    faqs: [
      { question: 'Is Fenwick Moor a difficult stretch to break down on?', answer: 'Yes, it is an exposed, higher-altitude section that can see fog, high winds and poor visibility even when conditions are clear elsewhere. We treat call-outs here as a priority and recommend staying in your vehicle with hazards on if it is unsafe to exit.' },
      { question: 'Do you cover the A77 as well as the M77?', answer: 'Yes, our M77 coverage continues seamlessly onto the A77 towards Kilmarnock, Ayr and the Ayrshire coast.' },
    ],
  },
  {
    slug: 'm73',
    name: 'M73',
    headline: 'Recovery on the M73 Motorway',
    description: "One of Scotland's shortest motorways, connecting the M8 and M74 around Glasgow's eastern edge. Quick response to this key interchange route.",
    longDescription: `The M73 is a short but heavily used connector motorway, linking the M8 at Baillieston to the M74 and A80 near Mollinsburn and Robroyston on the eastern edge of Glasgow. Despite its short length, it carries significant traffic volumes as drivers move between the M8, M74 and A80 corridors.\n\nGlasgow Breakdown Recovery covers the M73 in full, including its interchanges, and regularly assists motorists caught out by the merging traffic patterns at its junctions with the M8 and M74.`,
    junctions: ['J1 Maryville (M8)', 'J2 Robroyston (A80)', 'J3 Mollinsburn (M80)'],
    areasServed: ['glasgow', 'motherwell'],
    features: [
      'Full coverage of the M73 corridor',
      'M8, M74 and A80 interchange specialists',
      'Robroyston and Mollinsburn junction access',
      'Fast response given the route’s short length',
      'Experience with merging-traffic breakdown scenarios',
      '24/7 availability',
    ],
    faqs: [
      { question: 'Where does the M73 connect to?', answer: 'The M73 links the M8 near Baillieston to the M74 and the A80 near Mollinsburn and Robroyston on the eastern side of Glasgow, making it a key connector between three major routes.' },
    ],
  },
  {
    slug: 'm80',
    name: 'M80',
    headline: 'Recovery on the M80 Motorway',
    description: 'The motorway link between Glasgow and Stirling via Cumbernauld, forming part of the main route north to Perth and the Highlands.',
    longDescription: `The M80 connects Glasgow to Stirling via Cumbernauld, forming a key section of the main route north towards Perth, Dundee and the Highlands. It carries heavy commuter traffic between Glasgow and the Cumbernauld/Falkirk area, as well as longer-distance travellers heading north.\n\nGlasgow Breakdown Recovery covers the M80 from its junction with the M73 in Glasgow, through Cumbernauld, and on to its connection with the M9 near Stirling.`,
    junctions: ['J1 Glasgow (M73 interchange)', 'J4 Stepps', 'J6 Cumbernauld', 'J9 Dennyloanhead (M876)', 'J9a Stirling (M9)'],
    areasServed: ['glasgow', 'falkirk', 'stirling'],
    features: [
      'Full route coverage Glasgow to Stirling',
      'Cumbernauld commuter corridor specialists',
      'M73, M876 and M9 interchange coverage',
      'Fast response for peak-time congestion breakdowns',
      'Continuation coverage towards Perth and the Highlands',
      '24/7 rapid dispatch',
    ],
    faqs: [
      { question: 'Do you cover the M80 during rush hour?', answer: 'Yes, the M80 sees heavy commuter traffic between Glasgow and Cumbernauld at peak times. We prioritise motorway breakdowns during busy periods given the added risk of being stranded in live traffic.' },
    ],
  },
  {
    slug: 'm9',
    name: 'M9',
    headline: 'Recovery on the M9 Motorway',
    description: 'The main motorway route from Edinburgh to Stirling, continuing north as the A9 towards Perth and the Highlands.',
    longDescription: `The M9 links Edinburgh to Stirling, passing Linlithgow, Falkirk and Bannockburn along the way, before continuing north as the A9 towards Perth and the Scottish Highlands. It is a key commuter and long-distance route across Central Scotland.\n\nGlasgow Breakdown Recovery covers the M9 along its full length, and can also continue recovery onto the A9 for motorists heading further north who run into difficulty near Stirling.`,
    junctions: ['J1 Edinburgh (City Bypass)', 'J3 Newbridge', 'J4 Linlithgow', 'J8 Falkirk', 'J9 Stirling (M80)'],
    areasServed: ['edinburgh', 'livingston', 'falkirk', 'stirling'],
    features: [
      'Full route coverage Edinburgh to Stirling',
      'Linlithgow and Falkirk junction specialists',
      'Bannockburn and Stirling approach coverage',
      'Continuation onto the A9 towards Perth',
      'Commuter corridor rapid response',
      '24/7 availability',
    ],
    faqs: [
      { question: 'Can you recover a vehicle from the M9 near Stirling and continue onto the A9?', answer: 'Yes, our coverage extends to the M9/A9 interchange near Stirling and we regularly assist motorists travelling further north who have broken down at this point.' },
    ],
  },
  {
    slug: 'm876',
    name: 'M876',
    headline: 'Recovery on the M876 Motorway',
    description: 'A short link motorway connecting the M80 to the M9 near Kincardine Bridge, serving the Falkirk and Grangemouth area.',
    longDescription: `The M876 is a short connector motorway linking the M80 near Bonnybridge to the M9 close to the Kincardine Bridge crossing of the River Forth. It is an important route for traffic moving between the M80/M9 corridor and Fife via the Kincardine and Clackmannanshire Bridges.\n\nGlasgow Breakdown Recovery covers the M876 in full, including its approach to the Kincardine Bridge, and regularly assists motorists travelling between the Falkirk area and Fife.`,
    junctions: ['J1 Bonnybridge (M80)', 'J2 Skinflats', 'J3 Kincardine (M9 / A876)'],
    areasServed: ['falkirk', 'stirling'],
    features: [
      'Full coverage of the M876 link road',
      'Kincardine Bridge approach specialists',
      'M80 and M9 interchange access',
      'Grangemouth and Falkirk area coverage',
      'Fife-bound traffic assistance near Kincardine',
      '24/7 dispatch',
    ],
    faqs: [
      { question: 'Do you cover the approach to the Kincardine Bridge?', answer: 'Yes, we cover the M876 in full including the approach roads to the Kincardine Bridge, which is a key crossing point between Falkirk and Fife.' },
    ],
  },
  {
    slug: 'm90',
    name: 'M90',
    headline: 'Recovery on the M90 Motorway',
    description: 'The motorway route from the Forth crossings to Perth, forming the main gateway north towards the Highlands and Dundee.',
    longDescription: `The M90 runs from the Forth road crossings at South and North Queensferry, through Fife and Kinross, up to Perth. It is the principal gateway north for traffic heading towards the Highlands, Dundee and Aberdeen, and sees significant seasonal tourist traffic alongside daily commuter use.\n\nGlasgow Breakdown Recovery extends its coverage to the M90, assisting motorists travelling north from the Edinburgh area as well as those approaching Perth from the south.`,
    junctions: ['J1 North Queensferry', 'J3 Inverkeithing', 'J6 Kelty', 'J8 Kinross', 'J11 Perth'],
    areasServed: ['perth', 'edinburgh'],
    features: [
      'Coverage from the Forth crossings to Perth',
      'Kinross and Loch Leven area specialists',
      'Perth approach and city junction coverage',
      'Seasonal tourist traffic experience',
      'Continuation coverage towards the Highlands and Dundee',
      '24/7 rapid dispatch',
    ],
    faqs: [
      { question: 'How far north do you cover on the M90?', answer: 'We cover the full length of the M90 from the Forth crossings to Perth. For breakdowns further north towards Dundee or the Highlands, get in touch and we will do everything we can to help or point you to the right assistance.' },
    ],
  },
]

export function getMotorwayBySlug(slug: string): Motorway | undefined {
  return motorways.find(m => m.slug === slug)
}
