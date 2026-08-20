export type Service = {
  slug: string
  title: string
  headline: string
  description: string
  longDescription: string
  features: string[]
  faqs: { question: string; answer: string }[]
  category: string
  icon: string
}

export const services: Service[] = [
  {
    slug: 'accident-recovery',
    title: 'Accident Recovery',
    headline: '24/7 Professional Accident Recovery',
    description: 'Fast, safe vehicle recovery from road traffic accidents across Scotland. We manage the scene, protect your vehicle and coordinate with all parties.',
    longDescription: `When you're involved in a road traffic accident, the last thing you need is to worry about your vehicle. Crash Assist Recovery provides rapid, professional accident recovery services across Scotland 24 hours a day, 7 days a week, 365 days a year.\n\nOur experienced team arrives quickly, assesses the scene for safety, and uses specialist equipment to carefully recover your vehicle, whether it's a minor bump or a serious collision. We work closely with the police, insurance companies and repair garages to make the entire process as stress-free as possible.\n\nFrom Glasgow city centre to remote motorway stretches, we've seen and handled it all. No job is too complex.`,
    features: [
      'Scene safety assessment on arrival',
      'Specialist loading equipment for all vehicle types',
      'Coordination with police and emergency services',
      'Direct liaison with your insurance provider',
      'Delivery to your chosen garage or storage',
      'Evidence photography for insurance claims',
      'Nationwide recovery available',
      'Fully insured and certified operators',
    ],
    faqs: [
      {
        question: 'How quickly can you reach an accident scene in Scotland?',
        answer: 'We aim to reach most locations across Central Scotland within 45–60 minutes of your call. Response times may vary depending on location and traffic conditions, but we dispatch immediately around the clock.',
      },
      {
        question: 'Do you work with all insurance companies?',
        answer: 'Yes, Crash Assist Recovery works with all major UK insurance providers. We can handle the communication directly if you prefer, reducing the stress on you after an accident.',
      },
      {
        question: 'What happens to my car after recovery?',
        answer: 'Your vehicle will be delivered to your chosen garage, or we can recommend a trusted local repair centre. We also offer secure storage if your garage cannot accept the vehicle immediately.',
      },
      {
        question: 'Can you recover vehicles from motorways?',
        answer: 'Absolutely. We are fully trained and equipped for motorway recovery operations. We follow all statutory motorway safety protocols to ensure you and our team stay safe during the recovery.',
      },
    ],
    category: 'Emergency Services',
    icon: '🚨',
  },
  {
    slug: 'breakdown-recovery',
    title: 'Breakdown Recovery',
    headline: 'Roadside Breakdown Assistance',
    description: 'Broken down on the side of the road? We will reach you fast and get your vehicle recovered or repaired on the spot.',
    longDescription: `Vehicle breakdowns never happen at a convenient time. Whether your engine has given up on a quiet backstreet or you have run out of fuel on the motorway, Crash Assist Recovery is ready to help immediately.\n\nOur recovery vehicles are fully equipped to handle a wide range of breakdown scenarios. In many cases, our technicians can carry out roadside repairs to get you moving again without the need for a tow. When that is not possible, we will safely transport your vehicle to your preferred garage.`,
    features: [
      'Rapid roadside response',
      'On-the-spot minor repairs where possible',
      'Battery jump-starts and tyre changes',
      'Fuel delivery for run-out situations',
      'Flatbed and wheel-lift towing',
      'Coverage across all of Scotland',
      'Secure vehicle transportation',
      'Friendly, knowledgeable technicians',
    ],
    faqs: [
      {
        question: 'Can you repair my car at the roadside?',
        answer: 'In many cases yes, we can handle battery issues, flat tyres, minor mechanical problems and fuel emergencies at the roadside. If the vehicle cannot be repaired on the spot, we will tow it to a garage.',
      },
      {
        question: 'Is breakdown recovery covered by my insurance?',
        answer: "It depends on your policy. Some comprehensive insurance policies include breakdown cover as standard. Check your documents or call your insurer. If you don't have cover, we offer competitive pay-per-use pricing.",
      },
      {
        question: 'What should I do while I wait for recovery?',
        answer: 'Stay in your vehicle with your seatbelt on if it is safe to do so. Turn on your hazard lights. If you must exit the vehicle, move well away from traffic. Never stand on the carriageway.',
      },
    ],
    category: 'Breakdown',
    icon: '🔧',
  },
  {
    slug: 'motorway-recovery',
    title: 'Motorway Recovery',
    headline: 'Fast Motorway Emergency Recovery',
    description: 'Specialist motorway recovery for the M8, M74, M77, M73, M80 and all Scottish motorway network. Rapid response, full compliance.',
    longDescription: `Motorway breakdowns and accidents present unique challenges that require specialist training and equipment. Crash Assist Recovery holds all necessary certifications for motorway recovery operations across Scotland's busy motorway network.\n\nWe operate on all of Scotland's major motorways including the M8, M74, M77, M73, M80, M876 and the A-roads leading to them. Our team is trained in live-lane working protocols and uses the highest-specification vehicles to safely recover cars, vans, motorcycles and light commercial vehicles.`,
    features: [
      'Certified motorway recovery operators',
      'Full compliance with Highways England protocols',
      'Emergency attendance on all Scottish motorways',
      'Traffic management and scene safety',
      'Long reach equipment for difficult recoveries',
      'Out-of-hours and bank holiday availability',
      'Works alongside Police Scotland motorway units',
      'Competitive fixed pricing, no motorway surcharge',
    ],
    faqs: [
      {
        question: 'Is there an extra charge for motorway recovery?',
        answer: 'No. Unlike some providers, Crash Assist Recovery does not apply a motorway surcharge. You receive the same transparent pricing regardless of where you have broken down.',
      },
      {
        question: 'How do I safely call for help on a motorway?',
        answer: "If possible, reach an emergency refuge area (ERA) or a hard shoulder. Use a motorway SOS phone or call us on your mobile. Stay behind the barrier and away from the live carriageway while you wait.",
      },
      {
        question: 'Which motorways do you cover?',
        answer: 'We cover the entire Scottish motorway network including M8, M74, M77, M73, M80, M9, M876, and all connecting A-roads. We also extend to cross-border motorways when required.',
      },
    ],
    category: 'Motorway',
    icon: '🛣️',
  },
  {
    slug: 'flatbed-towing',
    title: 'Flatbed Towing',
    headline: 'Safe Flatbed Vehicle Transportation',
    description: 'Full flatbed transport for cars, vans, prestige vehicles and modified cars that cannot be conventional towed.',
    longDescription: `Not every vehicle can be towed using a traditional A-frame or wheel-lift. Low-profile sports cars, all-wheel-drive vehicles, prestige cars and severely damaged vehicles all require flatbed transportation to avoid further damage.\n\nCrash Assist Recovery's modern flatbed fleet ensures your vehicle is loaded using a hydraulic tilt-bed system and secured with professional strapping throughout the journey. Your vehicle arrives at its destination in exactly the same condition it left.`,
    features: [
      'Modern hydraulic tilt-bed flatbeds',
      'Safe for all-wheel-drive and 4x4 vehicles',
      'Ideal for prestige and sports cars',
      'Severely damaged vehicle specialists',
      'Fully strapped and secured loads',
      'Short and long distance transportation',
      'Collection from any location',
      'Available 24/7',
    ],
    faqs: [
      {
        question: 'Does flatbed towing cost more than regular towing?',
        answer: 'Flatbed transportation is priced competitively with our standard recovery. The extra care taken with your vehicle is included in our standard rate. Contact us for a quote.',
      },
      {
        question: 'Can you flatbed my prestige or sports car?',
        answer: 'Absolutely. We regularly transport prestige vehicles including BMW, Mercedes, Audi, Porsche and others on our flatbeds. We understand how valuable your vehicle is and treat it accordingly.',
      },
    ],
    category: 'Towing',
    icon: '🚛',
  },
  {
    slug: 'accident-claims',
    title: 'Accident Claims Assistance',
    headline: 'Expert Accident Claims Support',
    description: 'We make it easy to navigate insurance claims after an accident. Our team guides you through every step from documentation to settlement.',
    longDescription: `Filing an insurance claim after a road traffic accident can feel overwhelming, especially when you are already dealing with the stress of the accident itself. Crash Assist Recovery provides expert accident claims assistance to help you get the compensation and repairs you deserve.\n\nFrom gathering photographic evidence at the scene to liaising with insurers and solicitors, our team handles the paperwork so you can focus on recovering.`,
    features: [
      'Scene documentation and photography',
      'Insurance liaison on your behalf',
      'No-fault accident support',
      'Claim form assistance',
      'Uninsured driver claims guidance',
      'Whiplash and injury claim referrals',
      'Vehicle damage assessment',
      'Courtesy car arrangement support',
    ],
    faqs: [
      {
        question: 'What is a non-fault accident claim?',
        answer: "If you are involved in an accident that was not your fault, you may be entitled to have your vehicle repaired or replaced at no cost to you, and your no-claims bonus protected. Our team can help you understand your rights.",
      },
      {
        question: 'How long do I have to make an accident claim in Scotland?',
        answer: 'For personal injury claims in Scotland, you generally have 3 years from the date of the accident. For vehicle damage claims, it is important to notify your insurer promptly, ideally within 24 hours.',
      },
    ],
    category: 'Claims',
    icon: '📋',
  },
  {
    slug: 'long-distance-recovery',
    title: 'Long Distance Recovery',
    headline: 'UK-Wide Long Distance Recovery',
    description: 'Need your vehicle recovered from anywhere in the UK? We offer long-distance recovery to get your vehicle home, wherever you break down.',
    longDescription: `Breaking down far from home is stressful enough without having to worry about finding a reliable local recovery service you have never heard of. Crash Assist Recovery offers long-distance recovery across the entire UK, so you can trust a team you know even when you are miles from Scotland.\n\nWhether you have broken down in England, Wales or anywhere else in the UK, we will come to you or arrange trusted partner recovery, then transport your vehicle back to Scotland or your chosen destination.`,
    features: [
      'UK-wide recovery capability',
      'Partner network for remote locations',
      'Overnight stay arrangements if required',
      'Direct driver communication throughout',
      'Transparent long-distance pricing',
      'Vehicle tracking during transport',
      'Secure overnight storage available',
      'Passenger transport options',
    ],
    faqs: [
      {
        question: 'How do you price long-distance recovery?',
        answer: 'Long-distance recovery is priced per mile on a transparent scale. Call us for a quote, we will provide a fixed price before we begin so there are no surprises.',
      },
      {
        question: 'Can you recover my vehicle from England to Scotland?',
        answer: 'Yes, this is one of our most common long-distance requests. We regularly recover vehicles from across England and Wales back to Scotland for our customers.',
      },
    ],
    category: 'Long Distance',
    icon: '📍',
  },
  {
    slug: 'motorcycle-recovery',
    title: 'Motorcycle Recovery',
    headline: 'Specialist Motorcycle Recovery',
    description: 'Dedicated motorcycle recovery with specialist equipment to safely transport your bike without damage.',
    longDescription: `Motorcycles require specialist recovery equipment and handling techniques to avoid damage during loading and transportation. Crash Assist Recovery operates dedicated motorcycle recovery vehicles with purpose-built loading ramps, wheel chocks and securing straps designed specifically for motorcycles.\n\nWhether you have had an accident or suffered a mechanical failure, we treat your motorcycle with the same care you do.`,
    features: [
      'Purpose-built motorcycle transport vehicles',
      'Specialist wheel chock securing systems',
      'Accident recovery for all bike types',
      'Sports bike specialists',
      'Scooter and moped recovery',
      'Off-road and adventure bike capability',
      'Secure loading and unloading',
      '24/7 availability',
    ],
    faqs: [
      {
        question: 'Can you recover a motorcycle that has been in an accident?',
        answer: 'Yes. We have specialist equipment for loading damaged motorcycles without causing further damage. Our team handles bikes with care from scene collection to garage delivery.',
      },
      {
        question: 'Do you carry spare parts for motorcycles?',
        answer: 'Our primary service is recovery and transportation. For minor issues such as flat tyres, we may be able to assist at the roadside. For mechanical repairs, we will transport you to a specialist motorcycle garage.',
      },
    ],
    category: 'Specialist',
    icon: '🏍️',
  },
  {
    slug: 'commercial-vehicle-recovery',
    title: 'Commercial Vehicle Recovery',
    headline: 'Van & Light Commercial Recovery',
    description: 'Fast recovery for vans, light trucks, minibuses and commercial vehicles. We understand the cost of downtime and move fast.',
    longDescription: `When a commercial vehicle breaks down, every minute of downtime costs money. Crash Assist Recovery understands the urgency of commercial breakdowns and prioritises fast dispatch for all commercial vehicle recovery calls.\n\nWe recover and transport all types of light commercial vehicles up to 7.5 tonnes, including transit vans, Sprinters, Transporters, flatbed trucks and minibuses. Our heavy-duty recovery fleet handles anything up to the legal limit for our licences.`,
    features: [
      'Light commercial vehicles up to 7.5t',
      'Transit vans, Sprinters and Transporters',
      'Flatbed trucks and tippers',
      'Minibus recovery',
      'Priority dispatch for commercial calls',
      'Account services available for fleets',
      'Invoice billing for business customers',
      'Throughout Scotland and beyond',
    ],
    faqs: [
      {
        question: 'Do you offer fleet recovery accounts?',
        answer: 'Yes, we offer fleet accounts for businesses with multiple vehicles. Account customers receive priority dispatch, monthly invoicing and dedicated account management. Contact us to set up an account.',
      },
      {
        question: 'What is the maximum vehicle weight you recover?',
        answer: 'Our primary fleet handles vehicles up to 7.5 tonnes. For heavier vehicles, we have partner operators with heavy recovery capability. Contact us and we will arrange the right recovery solution.',
      },
    ],
    category: 'Commercial',
    icon: '🚚',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
