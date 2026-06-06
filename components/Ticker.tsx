const items = [
  '24/7 Emergency Recovery',
  'Glasgow & Edinburgh Coverage',
  'All Motorways Covered',
  'Flatbed Transport Available',
  'Accident Claims Assistance',
  'Motorcycle Recovery',
  'Commercial Vehicles',
  'Free Claims Consultation',
]

export default function Ticker() {
  const repeated = [...items, ...items]
  return (
    <div className="bg-orange-500 py-3 overflow-hidden border-y border-orange-600">
      <div className="flex whitespace-nowrap animate-ticker">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center mx-8 text-white font-heading font-bold uppercase text-sm tracking-widest">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full mr-8" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
