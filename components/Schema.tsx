export default function Schema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://crashassistrecovery.co.uk/#business',
        name: 'Crash Assist Recovery',
        legalName: 'Crash Assist Limited',
        identifier: 'SC870113',
        description:
          "Scotland's trusted 24/7 emergency vehicle recovery and accident assistance specialists. Fast response across Glasgow, Edinburgh and Central Scotland.",
        url: 'https://crashassistrecovery.co.uk',
        telephone: '+447564016582',
        email: 'info@crashassistrecovery.co.uk',
        image: 'https://crashassistrecovery.co.uk/og-image.jpg',
        priceRange: '££',
        areaServed: [
          { '@type': 'City', name: 'Glasgow' },
          { '@type': 'City', name: 'Edinburgh' },
          { '@type': 'State', name: 'Scotland' },
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        hasMap: 'https://www.google.com/maps/search/Crash+Assist+Recovery+Scotland',
        knowsAbout: [
          'Vehicle Recovery',
          'Accident Recovery',
          'Breakdown Recovery',
          'Motorway Recovery',
          'Flatbed Towing',
          'Insurance Claims',
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
