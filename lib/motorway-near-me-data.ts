import type { Motorway } from './motorways-data'
import { getAreaBySlug } from './areas-data'

export type MotorwayNearMeContent = {
  title: string
  metaDescription: string
  h1: string
  subheading: string
  intro: string
  paragraphs: string[]
  features: string[]
  faqs: { question: string; answer: string }[]
  relatedServiceSlug: string
  relatedServiceLabel: string
}

export type MotorwayNearMeAngle = {
  slug: string
  navLabel: string
  build: (motorway: Motorway) => MotorwayNearMeContent
}

// Deterministic per-motorway variant picker, same reasoning as near-me-data.ts.
function variant(slug: string, mod: number): number {
  let sum = 0
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i)
  return sum % mod
}

function areaNames(motorway: Motorway, n = 3): string[] {
  return motorway.areasServed
    .map((slug) => getAreaBySlug(slug)?.name)
    .filter((n): n is string => Boolean(n))
    .slice(0, n)
}

const quickRecoveryNearMotorway: MotorwayNearMeAngle = {
  slug: 'quick-recovery',
  navLabel: 'Quick Recovery',
  build: (motorway) => {
    const areas = areaNames(motorway)
    const v = variant(motorway.slug, 3)
    const intros = [
      `Being stuck on the hard shoulder of the ${motorway.name} is not somewhere you want to linger. Glasgow Breakdown Recovery dispatches the moment you call, with drivers who work this motorway regularly and know exactly how to reach a live lane or refuge area safely.`,
      `Speed matters more on a motorway than almost anywhere else. When you call us about a breakdown on the ${motorway.name}, we arrange the nearest available truck straight away: no call-centre delay, no hand-off between dispatchers.`,
      `Quick recovery on the ${motorway.name} means getting a vehicle-trained driver to you and off the carriageway as fast as it can safely be done. We cover the ${motorway.name} along its full length, so a truck is often already close by.`,
    ]
    return {
      title: `Quick Recovery Near the ${motorway.name}`,
      metaDescription: `Broken down on the ${motorway.name}? Glasgow Breakdown Recovery dispatches fast, motorway-trained recovery along its full length. Call +44 7564 016582.`,
      h1: `Quick Recovery Near the ${motorway.name}`,
      subheading: `Fast dispatch to breakdowns and accidents on the ${motorway.name}`,
      intro: intros[v],
      paragraphs: [
        `The ${motorway.name} carries heavy traffic, so a stranded vehicle is a genuine hazard, not just an inconvenience. Our drivers are experienced with motorway recovery, working from the hard shoulder or nearest refuge area and coordinating with Traffic Scotland where needed.`,
        areas.length
          ? `We regularly cover the stretch of the ${motorway.name} serving ${areas.join(', ')}, so wherever you've broken down along the route, help isn't far away.`
          : `We cover the ${motorway.name} along its full length, so wherever you've broken down along the route, help isn't far away.`,
      ],
      features: [
        `Fast dispatch to the ${motorway.name}`,
        'Motorway-trained recovery operators',
        'Coordination with Traffic Scotland where needed',
        'No call-centre delay, direct dispatch',
        '24/7 availability, including rush hour',
      ],
      faqs: [
        {
          question: `How quickly can you reach a breakdown on the ${motorway.name}?`,
          answer: `We dispatch the nearest available truck as soon as you call. Exact arrival time depends on traffic and your location on the motorway, but we'll give you an honest estimate on the phone.`,
        },
        {
          question: `What should I do while I wait on the ${motorway.name}?`,
          answer: 'If possible, move to the hard shoulder or nearest emergency refuge area, switch on your hazard lights, and exit the vehicle from the passenger side away from traffic if it is safe to do so.',
        },
        {
          question: `Do you cover the whole length of the ${motorway.name}?`,
          answer: `Yes, we provide recovery along the full length of the ${motorway.name}, including its junctions and interchanges.`,
        },
      ],
      relatedServiceSlug: 'motorway-recovery',
      relatedServiceLabel: 'Motorway Recovery',
    }
  },
}

const breakdownRecoveryNearMotorway: MotorwayNearMeAngle = {
  slug: 'breakdown-recovery',
  navLabel: 'Breakdown Recovery',
  build: (motorway) => {
    const areas = areaNames(motorway)
    const v = variant(motorway.slug, 3)
    const intros = [
      `A breakdown on the ${motorway.name} needs a different response to one on a quiet side street: live traffic, limited hard shoulder in places, and no safe spot to simply wait it out. Glasgow Breakdown Recovery handles motorway breakdowns on the ${motorway.name} as routine work.`,
      `Whatever's gone wrong with your vehicle on the ${motorway.name}, whether it's a flat tyre, an engine fault, or a warning light that's brought you to a stop, we recover cars, vans and commercial vehicles from this motorway every week.`,
      `The ${motorway.name} is one of the routes we cover most closely. If you've broken down there, Glasgow Breakdown Recovery will get a truck to you and your vehicle off the carriageway safely.`,
    ]
    return {
      title: `Breakdown Recovery Near the ${motorway.name}`,
      metaDescription: `Breakdown recovery on the ${motorway.name}: cars, vans and commercial vehicles. 24/7 dispatch. Call Glasgow Breakdown Recovery on +44 7564 016582.`,
      h1: `Breakdown Recovery Near the ${motorway.name}`,
      subheading: `Vehicle breakdowns on the ${motorway.name}, recovered safely, day or night`,
      intro: intros[v],
      paragraphs: [
        `We handle everything from a simple flat battery to a vehicle that needs winching clear of a live lane. Our trucks carry the equipment needed for cars, vans and light commercials on the ${motorway.name}.`,
        areas.length
          ? `The ${motorway.name} passes ${areas.join(', ')}, and we cover breakdowns at any point along that route, not just near the main towns.`
          : `We cover breakdowns along the full length of the ${motorway.name}, not just near the main junctions.`,
      ],
      features: [
        `Cars, vans and commercial recovery on the ${motorway.name}`,
        'Safe recovery from live lanes and hard shoulder',
        'Coordination with Police Scotland where needed',
        '24/7 dispatch, including overnight',
        'Clear pricing agreed before we set off',
      ],
      faqs: [
        {
          question: `What counts as a breakdown on the ${motorway.name}?`,
          answer: 'Anything that leaves you unable to safely continue driving: a mechanical fault, a flat tyre, a dashboard warning, or simply running out of fuel. We recover all of these.',
        },
        {
          question: `Can you recover vans and small commercials from the ${motorway.name}?`,
          answer: 'Yes, our trucks are equipped for cars, vans and light commercial vehicles, not just standard cars.',
        },
        {
          question: `Is it safe to stay in my vehicle if I break down on the ${motorway.name}?`,
          answer: 'If you can reach the hard shoulder or a refuge area, exit from the passenger side away from traffic and wait behind the barrier if there is one. Call us straight away and we will dispatch immediately.',
        },
      ],
      relatedServiceSlug: 'breakdown-recovery',
      relatedServiceLabel: 'Breakdown Recovery',
    }
  },
}

const hour24RecoveryNearMotorway: MotorwayNearMeAngle = {
  slug: '24-hour-recovery',
  navLabel: '24 Hour Recovery',
  build: (motorway) => {
    const areas = areaNames(motorway)
    const v = variant(motorway.slug, 3)
    const intros = [
      `Motorway breakdowns don't stick to daylight hours, and the ${motorway.name} is no exception. Glasgow Breakdown Recovery covers this motorway around the clock: a 3am call-out gets the same response as one at midday.`,
      `Overnight breakdowns on the ${motorway.name} carry extra risk simply because visibility is lower and traffic doesn't slow down. We're available 24/7 to get you off the carriageway whatever the hour.`,
      `Whether it's rush hour or the middle of the night, a breakdown on the ${motorway.name} gets the same priority from us. There's no "night rate" and no delay waiting for a day-shift dispatcher.`,
    ]
    return {
      title: `24 Hour Recovery Near the ${motorway.name}`,
      metaDescription: `24/7 recovery on the ${motorway.name}: nights, weekends and holidays covered. Call Glasgow Breakdown Recovery on +44 7564 016582 any time.`,
      h1: `24 Hour Recovery Near the ${motorway.name}`,
      subheading: `Round-the-clock cover on the ${motorway.name}, nights, weekends, holidays`,
      intro: intros[v],
      paragraphs: [
        `There's no out-of-hours surcharge for a night-time call-out on the ${motorway.name}: pricing and response speed stay the same whatever time you call.`,
        areas.length
          ? `We work the ${motorway.name} through the night as well as through the day, covering the route past ${areas.join(', ')}.`
          : `We work the ${motorway.name} through the night as well as through the day, along its full length.`,
      ],
      features: [
        'Genuinely 24/7 motorway cover',
        'No out-of-hours or holiday surcharge',
        'Same dispatch speed, day or night',
        'Motorway-trained operators on every shift',
        `Full-length coverage of the ${motorway.name}`,
      ],
      faqs: [
        {
          question: `Are you available on the ${motorway.name} overnight?`,
          answer: `Yes, we're genuinely 24/7: overnight breakdowns on the ${motorway.name} are handled with the same priority as daytime ones.`,
        },
        {
          question: 'Is there an extra charge for a night-time or holiday call-out?',
          answer: 'No, our pricing is the same regardless of the time or day you call.',
        },
        {
          question: `What if I break down on the ${motorway.name} during rush hour?`,
          answer: 'We prioritise motorway breakdowns during busy periods given the added risk of being stranded in live traffic, and will keep you updated on arrival time.',
        },
      ],
      relatedServiceSlug: 'motorway-recovery',
      relatedServiceLabel: 'Motorway Recovery',
    }
  },
}

const accidentRecoveryNearMotorway: MotorwayNearMeAngle = {
  slug: 'accident-recovery',
  navLabel: 'Accident Recovery',
  build: (motorway) => {
    const areas = areaNames(motorway)
    const v = variant(motorway.slug, 3)
    const intros = [
      `Being involved in an accident on the ${motorway.name} is stressful enough without worrying about how the vehicle gets moved. Glasgow Breakdown Recovery provides accident recovery on this motorway, working alongside Police Scotland when they're in attendance.`,
      `Accidents on the ${motorway.name} need recovery that understands live-lane risk and can move quickly once the scene is safe. We provide that coverage along the full length of the motorway.`,
      `If you've been in a collision on the ${motorway.name}, we can recover the vehicle and, where needed, help coordinate with your insurer. It's some of the most demanding work we do, and one of the routes we're most experienced on.`,
    ]
    return {
      title: `Accident Recovery Near the ${motorway.name}`,
      metaDescription: `Accident recovery on the ${motorway.name}: coordinated with Police Scotland when needed. 24/7 dispatch. Call Glasgow Breakdown Recovery on +44 7564 016582.`,
      h1: `Accident Recovery Near the ${motorway.name}`,
      subheading: `Collision recovery on the ${motorway.name}, coordinated and 24/7`,
      intro: intros[v],
      paragraphs: [
        `Once a collision scene on the ${motorway.name} is safe, we recover the vehicle to a garage, storage facility, or another location of your choice, and can liaise with your insurer on the paperwork if needed.`,
        areas.length
          ? `We handle accident recovery along the section of the ${motorway.name} serving ${areas.join(', ')}, as well as the rest of its route.`
          : `We handle accident recovery along the full route of the ${motorway.name}.`,
      ],
      features: [
        `Accident recovery along the ${motorway.name}`,
        'Coordination with Police Scotland at the scene',
        'Recovery to a garage, storage or your chosen address',
        'Insurance liaison available if required',
        '24/7 dispatch for collisions of any severity',
      ],
      faqs: [
        {
          question: `What happens if I'm in an accident on the ${motorway.name}?`,
          answer: 'If it is safe to do so, move to the hard shoulder or a refuge area, call 999 if there are injuries, then call us. We can attend once Police Scotland confirms the scene is safe to work.',
        },
        {
          question: 'Can you deal with my insurance company directly?',
          answer: "Yes, we can liaise with your insurer on the recovery and storage side of a claim if you'd like us to.",
        },
        {
          question: `Do you recover write-off or non-drivable vehicles from the ${motorway.name}?`,
          answer: 'Yes, our trucks are equipped to recover vehicles that cannot be driven, including those with significant collision damage.',
        },
      ],
      relatedServiceSlug: 'accident-recovery',
      relatedServiceLabel: 'Accident Recovery',
    }
  },
}

export const motorwayNearMeAngles: MotorwayNearMeAngle[] = [
  quickRecoveryNearMotorway,
  breakdownRecoveryNearMotorway,
  hour24RecoveryNearMotorway,
  accidentRecoveryNearMotorway,
]

export function getMotorwayAngleBySlug(slug: string): MotorwayNearMeAngle | undefined {
  return motorwayNearMeAngles.find((a) => a.slug === slug)
}
