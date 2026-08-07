import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useReveal } from '../hooks/useReveal'

export default function Presence() {
  const mapContainerRef = useRef(null)
  const mapInstance = useRef(null)
  const headingRef = useReveal() // now works reliably

  useEffect(() => {
    if (!mapContainerRef.current || mapInstance.current) return

    const map = L.map(mapContainerRef.current, {
      center: [15, -20],
      zoom: 2,
      zoomControl: true,
      fadeAnimation: true,
      attributionControl: true,
    })

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20,
      }
    ).addTo(map)

    const createFlagIcon = (flag) =>
      L.divIcon({
        className: 'custom-flag-marker',
        html: `
          <div class="flag-marker">
            <img src="${flag}" alt="flag" />
          </div>
        `,
        iconSize: [42, 30],
        iconAnchor: [21, 15],
        popupAnchor: [0, -15],
      })

    const locations = [
      { name: 'Nigeria', description: 'Headquarters', coords: [9.082, 8.6753], flag: '/nigeria.png' },
      { name: 'United States', description: 'Operations & Logistics', coords: [37.0902, -95.7129], flag: '/usa.png' },
      { name: 'The Gambia', description: 'Exploration', coords: [13.4432, -15.3101], flag: '/gambia.png' },
      { name: 'Senegal', description: 'Energy Development', coords: [14.4974, -14.4524], flag: '/senegal.png' },
    ]

    locations.forEach((location) => {
      L.marker(location.coords, { icon: createFlagIcon(location.flag) })
        .addTo(map)
        .bindPopup(`
          <div style="text-align:center;min-width:150px;">
            <strong>${location.name}</strong><br/>
            <span>${location.description}</span>
          </div>
        `)
    })

    mapInstance.current = map

    setTimeout(() => map.invalidateSize(), 150)

    const handleResize = () => map.invalidateSize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      map.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <section id="presence" className="section-padding bg-[var(--gray-light)]">
      <div className="container-custom">
        {/* Heading with reveal (now works) */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="eyebrow">Global Reach</span>
          <h2 className="heading-md text-[var(--navy)] mt-2">Our Presence</h2>
          <p className="text-body mt-3">
            Operating across multiple countries with a commitment to local excellence and global standards.
          </p>
        </div>

        {/* Map container (optional – can also add reveal if you want) */}
        <div className="mb-10">
          <div
            ref={mapContainerRef}
            className="w-full rounded-[var(--radius)] overflow-hidden shadow-lg"
            style={{ height: '400px', background: '#e8ecf1' }}
          />
        </div>
      </div>
    </section>
  )
}