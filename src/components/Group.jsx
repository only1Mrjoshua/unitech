import React, { useEffect, useRef } from 'react'

export default function Group() {
  const headerRef = useRef(null)
  const cardRefs = useRef([])

  const companies = [
    { icon: 'fa-oil-can', name: 'Unitech Drilling Company Limited' },
    { icon: 'fa-globe-africa', name: 'UDC Exploration & Energy Development Limited' },
    { icon: 'fa-gas-pump', name: 'UDC Petroleum Limited' },
    { icon: 'fa-building', name: 'Unitech Energy Development, Inc.' },
    { icon: 'fa-tools', name: 'UDC Tools Limited' },
    { icon: 'fa-leaf', name: 'UDC Environmental Consulting Limited' } // ← this was missing
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    cardRefs.current.forEach(el => { if (el) observer.observe(el) })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding" id="group">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal" ref={headerRef}>
          <span className="eyebrow">The Unitech Group</span>
          <h2 className="heading-md text-[var(--navy)] mt-2">A Family of Companies</h2>
          <p className="text-body mt-3">
            United by a shared commitment to excellence, innovation, and responsible energy development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((c, i) => (
            <div
              key={i}
              className="group-card reveal"
              ref={el => (cardRefs.current[i] = el)}
            >
              <div className="group-icon"><i className={`fas ${c.icon}`}></i></div>
              <h5>{c.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}