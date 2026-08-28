import type { Area } from './areas-data'
import { getNearbyAreas } from './areas-data'

export type NearMeContent = {
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

export type NearMeAngle = {
  slug: string
  navLabel: string
  build: (area: Area) => NearMeContent
}

// Deterministic per-area variant picker so the same phrasings don't march
// through all 14 areas in lockstep — avoids a fully mail-merged feel.
function variant(slug: string, mod: number): number {
  let sum = 0
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i)
  return sum % mod
}

function pc(area: Area): string {
  return area.postcodes.join('/')
}

function nearNames(area: Area, n = 3): string[] {
  const linked = getNearbyAreas(area, n)
  return linked.length ? linked.map((a) => a.name) : []
}

const carRecoveryNearMe: NearMeAngle = {
  slug: 'car-recovery-near-me',
  navLabel: 'Car Recovery Near Me',
  build: (area) => {
    const near = nearNames(area)
    const v = variant(area.slug, 3)
    const intros = [
      `If you've broken down in ${area.name} and searched for recovery near you, Glasgow Breakdown Recovery is who picks up. We dispatch directly to ${pc(area)} postcodes, with drivers who know ${near[0] ?? area.name} and the surrounding roads well. No call centre, no sub-contracting — just a truck heading your way.`,
      `"Near me" only means something if the company answering the phone is actually close. Glasgow Breakdown Recovery covers ${area.name} and the ${pc(area)} postcodes directly — the same team that answers your call arranges the driver, with no handoff to a regional call centre.`,
      `Stuck in ${area.name}? Glasgow Breakdown Recovery is a genuinely local recovery service covering ${pc(area)} day and night. When you call, you're talking to the team sending the truck — not a national booking line reading your postcode off a screen.`,
    ]
    return {
      title: `Car Recovery Near Me in ${area.name}`,
      metaDescription: `Searching for car recovery near you in ${area.name}? Glasgow Breakdown Recovery dispatches locally to ${pc(area)} — average arrival ${area.responseTime}. Call +44 7564 016582.`,
      h1: `Car Recovery Near Me — ${area.name}`,
      subheading: `Local dispatch to ${area.name} and ${pc(area)} — typically ${area.responseTime}`,
      intro: intros[v],
      paragraphs: [
        `Average arrival in ${area.name} currently runs at ${area.responseTime}. We also cover the surrounding area${near.length ? ` — including ${near.slice(0, 3).join(', ')}` : ''} — so if you've broken down travelling through rather than living locally, that's no problem either.`,
        `Cars, vans and light commercials are all routine work for us in ${area.name}. Tell us what you're driving and roughly where you are when you call, and we'll give you a clear price and a realistic ETA before anyone sets off.`,
      ],
      features: [
        `Local dispatch to ${pc(area)}`,
        `Average arrival ${area.responseTime}`,
        'No call centre — direct to the team',
        near[0] ? `Also covers ${near[0]}${near[1] ? ` and ${near[1]}` : ''}` : '24/7 availability',
        'Clear price quoted before we set off',
      ],
      faqs: [
        {
          question: `How do I get car recovery near me in ${area.name} right now?`,
          answer: `Call +44 7564 016582 — we dispatch directly to ${area.name} and the ${pc(area)} postcodes, 24 hours a day. Average arrival is ${area.responseTime}.`,
        },
        {
          question: `Do you cover the areas around ${area.name} too?`,
          answer: near.length
            ? `Yes — alongside ${area.name} itself we regularly cover ${near.slice(0, 3).join(', ')} and the wider area. Tell us your postcode on the call and we'll confirm.`
            : `Yes — we cover the wider area around ${area.name}. Tell us your postcode on the call and we'll confirm coverage and price.`,
        },
        {
          question: 'Is there a call centre, or do I speak to the recovery team directly?',
          answer: 'Direct to the team — no call centre. Whoever answers the phone is arranging your driver.',
        },
      ],
      relatedServiceSlug: 'breakdown-recovery',
      relatedServiceLabel: 'Breakdown Recovery',
    }
  },
}

const fastRecoveryNearMe: NearMeAngle = {
  slug: 'fast-recovery-near-me',
  navLabel: 'Fast Recovery Near Me',
  build: (area) => {
    const near = nearNames(area)
    const v = variant(area.slug, 3)
    const intros = [
      `Speed is the thing people mention most in our reviews, and ${area.name} is no exception. Glasgow Breakdown Recovery dispatches the moment you call — currently averaging ${area.responseTime} to reach you in ${area.name}, with no call-centre delay slowing things down.`,
      `Waiting around is the worst part of breaking down. In ${area.name} we keep that wait as short as it can honestly be — current average arrival is ${area.responseTime}, and we'd rather under-promise on the phone than leave you watching the clock.`,
      `Fast recovery in ${area.name} means one thing to us: the person who answers your call arranges the truck immediately, with no dispatcher-to-dispatcher handoff in between. Average arrival currently sits at ${area.responseTime}.`,
    ]
    return {
      title: `Fast Recovery Near Me in ${area.name}`,
      metaDescription: `Need fast recovery in ${area.name}? Glasgow Breakdown Recovery dispatches immediately — average arrival ${area.responseTime}. 24/7 cover. Call +44 7564 016582.`,
      h1: `Fast Recovery Near Me — ${area.name}`,
      subheading: `Rapid dispatch to ${area.name} — currently averaging ${area.responseTime}`,
      intro: intros[v],
      paragraphs: [
        `There's no dispatcher chain to slow things down — when you call, the person on the phone is the one arranging the driver. That's the main reason ${area.name} jobs move as fast as they do.`,
        near[0]
          ? `We also work ${near[0]}${near[1] ? ` and ${near[1]}` : ''} regularly, so a truck is often already close by. We'll give you an honest ETA on the call, not an optimistic one designed to get you off the phone.`
          : `We give you an honest ETA on the call, not an optimistic one designed to get you off the phone.`,
      ],
      features: [
        `Average arrival ${area.responseTime} in ${area.name}`,
        'No call-centre delay — direct dispatch',
        'Honest ETA given on the call',
        near[0] ? `Trucks regularly working ${near[0]}` : 'Trucks regularly working the local area',
        '24/7 — speed doesn’t drop overnight',
      ],
      faqs: [
        {
          question: `How fast can you get to me in ${area.name}?`,
          answer: `Current average is ${area.responseTime}, though it depends on traffic and which truck is nearest. We'll give you a realistic estimate the moment you call.`,
        },
        {
          question: 'Why are you faster than the national breakdown brands?',
          answer: "No call centre and no sub-contracting — when you ring us, the call doesn't get bounced to a regional dispatcher who then bounces it again. We arrange the truck directly.",
        },
        {
          question: 'Can you guarantee an exact arrival time?',
          answer: "We can't promise the exact minute — traffic and current jobs both factor in — but we give you an honest ETA on the call and update you if anything changes.",
        },
      ],
      relatedServiceSlug: 'breakdown-recovery',
      relatedServiceLabel: 'Breakdown Recovery',
    }
  },
}

const hour24RecoveryNearMe: NearMeAngle = {
  slug: '24-hour-recovery-near-me',
  navLabel: '24 Hour Recovery Near Me',
  build: (area) => {
    const near = nearNames(area)
    const v = variant(area.slug, 3)
    const intros = [
      `Breakdowns in ${area.name} don't wait for office hours, and neither do we. Glasgow Breakdown Recovery answers around the clock — 3am is handled exactly the same way as 3pm, with no voicemail and no "emergency-only" markup.`,
      `A lot of recovery firms claim 24-hour cover and then quietly stop answering after 9pm. We don't. Calls from ${area.name} get the same response whatever the hour — same team, same pricing, same dispatch speed.`,
      `Whatever time you've broken down in ${area.name} — the middle of the night, a bank holiday, Christmas Day — the phone is answered and a truck is arranged. That's what "24 hour" is supposed to mean.`,
    ]
    return {
      title: `24 Hour Recovery Near Me in ${area.name}`,
      metaDescription: `24/7 recovery in ${area.name} — nights, weekends and holidays covered with no out-of-hours surcharge. Call +44 7564 016582 any time.`,
      h1: `24 Hour Recovery Near Me — ${area.name}`,
      subheading: `Genuinely round-the-clock cover in ${area.name} — nights, weekends, holidays`,
      intro: intros[v],
      paragraphs: [
        `There's no out-of-hours surcharge — a call-out from ${area.name} at 4am costs the same as one at 4pm. Average arrival stays at ${area.responseTime} regardless of the time on the clock.`,
        near.length
          ? `We also cover ${near.slice(0, 2).join(' and ')} through the night, so if you're travelling between ${area.name} and either late in the evening, we're already in the area.`
          : `We cover ${area.name} and the surrounding area through the night just as we do during the day.`,
      ],
      features: [
        'Genuinely 24/7 — no voicemail, no cut-off time',
        'No out-of-hours or holiday surcharge',
        `Average arrival ${area.responseTime}, day or night`,
        'Same team, same pricing, any hour',
        near[0] ? `Also covers ${near[0]} overnight` : 'Wide overnight coverage',
      ],
      faqs: [
        {
          question: `Are you actually open 24 hours in ${area.name}, or just during the day?`,
          answer: `Genuinely 24/7 — we're answered around the clock, every day of the year, including Christmas Day.`,
        },
        {
          question: 'Do you charge more for a night-time call-out?',
          answer: 'No — pricing is identical regardless of the time you call. No out-of-hours or holiday surcharges.',
        },
        {
          question: `What if I break down in ${area.name} in the middle of the night?`,
          answer: 'Call us — we dispatch immediately. Late-night call-outs are routine, not an exception.',
        },
      ],
      relatedServiceSlug: 'breakdown-recovery',
      relatedServiceLabel: 'Breakdown Recovery',
    }
  },
}

const cheapRecoveryNearMe: NearMeAngle = {
  slug: 'cheap-recovery-near-me',
  navLabel: 'Cheap Recovery Near Me',
  build: (area) => {
    const near = nearNames(area)
    const v = variant(area.slug, 3)
    const intros = [
      `"Cheap" usually means hidden fees waiting on arrival. Ours doesn't. Recovery in ${area.name} is quoted clearly on the phone before we dispatch — no surprises when the truck turns up.`,
      `Local recovery in ${area.name} is priced the same as anywhere else in our coverage area, with the exact total confirmed on the phone before we set off. No out-of-hours markup, no last-minute add-ons.`,
      `Affordable doesn't have to mean unreliable. In ${area.name} you get clear, upfront pricing from a locally-focused team, not a national brand's overhead passed on to you.`,
    ]
    return {
      title: `Cheap Recovery Near Me in ${area.name}`,
      metaDescription: `Affordable recovery in ${area.name} with clear pricing and no hidden fees. Call Glasgow Breakdown Recovery on +44 7564 016582 for a quote.`,
      h1: `Cheap Recovery Near Me — ${area.name}`,
      subheading: `Clear, upfront pricing in ${area.name} — no hidden fees`,
      intro: intros[v],
      paragraphs: [
        `There's no out-of-hours surcharge and no holiday surcharge — the price we quote on the phone for your ${area.name} job is the price you pay.`,
        near[0]
          ? `We're consistently competitive against the national brands for non-members, largely because we don't carry call-centre or sub-contractor overhead. Jobs around ${near[0]} and ${area.name} are quoted individually, but the approach is the same across our whole coverage area.`
          : `We're consistently competitive against the national brands for non-members, largely because we don't carry call-centre or sub-contractor overhead.`,
      ],
      features: [
        'Clear price quoted before dispatch',
        'No out-of-hours or holiday surcharge',
        'No hidden fees or mileage rounding',
        'Cash, card or bank transfer accepted',
        `Serving ${area.name} and ${pc(area)}`,
      ],
      faqs: [
        {
          question: `What does recovery cost in ${area.name}?`,
          answer: `We confirm the exact total on the phone before dispatching — call +44 7564 016582 for a quote tailored to ${area.name}.`,
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No — no out-of-hours surcharge, no holiday surcharge, no mileage rounding. We agree the price with you before we set off.',
        },
        {
          question: `Are you cheaper than the AA or RAC in ${area.name}?`,
          answer: "For non-members, usually yes — national brands typically charge more for a non-member call-out. We're a smaller, locally-focused operation, so we can charge less for the same job.",
        },
      ],
      relatedServiceSlug: 'breakdown-recovery',
      relatedServiceLabel: 'Breakdown Recovery',
    }
  },
}

export const nearMeAngles: NearMeAngle[] = [
  carRecoveryNearMe,
  fastRecoveryNearMe,
  hour24RecoveryNearMe,
  cheapRecoveryNearMe,
]

export function getAngleBySlug(slug: string): NearMeAngle | undefined {
  return nearMeAngles.find((a) => a.slug === slug)
}
