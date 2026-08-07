import React, { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <div
            className="reveal order-2 lg:order-1"
            ref={sectionRef}
          >
            <div className="rounded-[var(--radius)] overflow-hidden shadow-lg relative">
              <img
                src="/we_are_unitech.jpg"
                alt="Unitech drilling operations"
                className="w-full block"
                style={{ height: 'auto', objectFit: 'contain' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1a2b]/20 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">About Unitech</span>
            <h2 className="heading-md text-[var(--navy)] mt-2">
              Engineering Expertise. <br /><span className="text-[var(--teal)]">Operational Excellence.</span>
            </h2>
            <p className="text-body mt-4">
              Unitech Energies is a group of companies providing innovative, quality and cost-effective solutions
              to the oil and gas industry. With a focus on drilling, well engineering, project management,
              reservoir exploration, and energy development, we deliver results that matter.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--navy)]">
                <i className="fas fa-check-circle text-[var(--teal)]"></i> Drilling &amp; Measurements
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--navy)]">
                <i className="fas fa-check-circle text-[var(--teal)]"></i> Well Engineering
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--navy)]">
                <i className="fas fa-check-circle text-[var(--teal)]"></i> Project Management
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--navy)]">
                <i className="fas fa-check-circle text-[var(--teal)]"></i> Reservoir Exploration
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--navy)] col-span-2">
                <i className="fas fa-check-circle text-[var(--teal)]"></i> Energy Development
              </div>
            </div>
            <a href="#services" className="btn-ghost mt-6 inline-flex">
              Discover Unitech <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}