'use client'

import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { areas } from '@/lib/areas-data'

// Approximate town centre coordinates for each coverage area
const COORDS: Record<string, { lat: number; lng: number }> = {
  glasgow: { lat: 55.8642, lng: -4.2518 },
  edinburgh: { lat: 55.9533, lng: -3.1883 },
  paisley: { lat: 55.8467, lng: -4.4239 },
  hamilton: { lat: 55.7775, lng: -4.0530 },
  motherwell: { lat: 55.7916, lng: -3.9852 },
  livingston: { lat: 55.8862, lng: -3.5230 },
  falkirk: { lat: 56.0019, lng: -3.7839 },
  stirling: { lat: 56.1165, lng: -3.9369 },
  ayr: { lat: 55.4586, lng: -4.6292 },
  kilmarnock: { lat: 55.6111, lng: -4.4956 },
  dumfries: { lat: 55.0709, lng: -3.6051 },
  perth: { lat: 56.3958, lng: -3.4308 },
  'loch-lomond': { lat: 56.0058, lng: -4.6408 },
  'argyll-and-bute': { lat: 55.9970, lng: -4.7360 },
}

const HQ = { lat: 55.8462, lng: -4.1194, name: 'Central Scotland HQ' } // Bellshill / North Lanarkshire, geographic centre of coverage

export default function CoverageMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!mapRef.current || loaded) return
    let cancelled = false

    ;(async () => {
      const L = (await import('leaflet')).default

      if (cancelled || !mapRef.current) return

      const map = L.map(mapRef.current, {
        center: [HQ.lat, HQ.lng],
        zoom: 8,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      })

      // Dark basemap to match the site's zinc/black theme
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 19,
      }).addTo(map)

      // Outer ring: extended coverage
      L.circle([HQ.lat, HQ.lng], {
        radius: 96560, // 60 miles
        color: '#1172E7',
        fillColor: '#1172E7',
        fillOpacity: 0.03,
        weight: 1.5,
        dashArray: '10 8',
      }).addTo(map)

      // Inner ring: core rapid-response area
      L.circle([HQ.lat, HQ.lng], {
        radius: 48280, // 30 miles
        color: '#1172E7',
        fillColor: '#1172E7',
        fillOpacity: 0.08,
        weight: 2,
        dashArray: '6 6',
      }).addTo(map)

      function markerIcon(isPrimary: boolean) {
        return L.divIcon({
          html: `<div style="
            width:${isPrimary ? 34 : 26}px;height:${isPrimary ? 34 : 26}px;
            background:${isPrimary ? '#1172E7' : '#18181b'};
            border:2px solid ${isPrimary ? '#fff' : '#1172E7'};
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            display:flex;align-items:center;justify-content:center;
            box-shadow:0 2px 6px rgba(0,0,0,0.5);
          "><span style="transform:rotate(45deg);font-size:${isPrimary ? '14px' : '11px'};">📍</span></div>`,
          className: '',
          iconSize: [isPrimary ? 34 : 26, isPrimary ? 34 : 26],
          iconAnchor: [isPrimary ? 17 : 13, isPrimary ? 34 : 26],
          popupAnchor: [0, -28],
        })
      }

      const hqMarker = L.marker([HQ.lat, HQ.lng], { icon: markerIcon(true) }).addTo(map)
      hqMarker.bindPopup(`<strong>${HQ.name}</strong><br/>Primary dispatch base`)

      areas.forEach((a) => {
        const coord = COORDS[a.slug]
        if (!coord) return
        const marker = L.marker([coord.lat, coord.lng], { icon: markerIcon(false) }).addTo(map)
        marker.bindPopup(`<strong>${a.name}</strong><br/><a href="/areas/${a.slug}" style="color:#1172E7;">View area page →</a>`)
      })

      setLoaded(true)
    })()

    return () => {
      cancelled = true
    }
  }, [loaded])

  return (
    <section className="section bg-zinc-950" id="coverage-map">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag justify-center">Live Coverage</div>
          <h2 className="section-title">
            Where We<br />
            <span className="text-blue-500">Operate</span>
          </h2>
          <p className="section-body">
            Based in Central Scotland, our core rapid-response zone covers a 30-mile radius
            around Glasgow, Edinburgh and the surrounding central belt. Extended coverage reaches
            out to 60 miles, including Loch Lomond and Argyll and Bute. Beyond that, we cover
            anywhere, just call for a quote.
          </p>
        </div>

        <div className="relative border border-zinc-800 overflow-hidden">
          <div ref={mapRef} className="w-full h-[420px] sm:h-[480px]" aria-label="Coverage map" />
          <div className="absolute bottom-4 left-4 z-[1100] bg-zinc-950/90 border border-zinc-800 backdrop-blur-sm p-4 space-y-2 text-xs text-zinc-400 hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" /> Dispatch base
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 border border-blue-500 flex-shrink-0" /> Area we cover
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-dashed border-blue-500 flex-shrink-0" /> 30-mile core area
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-dashed border-blue-500/50 flex-shrink-0" /> 60-mile extended area
            </div>
            <div className="text-zinc-500 pt-1 border-t border-zinc-800">Beyond 60 miles: call for a quote</div>
          </div>
        </div>
      </div>
    </section>
  )
}
