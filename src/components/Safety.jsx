import React, { useEffect, useRef } from 'react'

export default function Safety() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)

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

    if (ref1.current) observer.observe(ref1.current)
    if (ref2.current) observer.observe(ref2.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding" id="safety" style={{ background: 'var(--navy)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal order-2 lg:order-1" ref={ref1}>
            <span className="eyebrow" style={{ color: 'var(--teal-light)' }}>
              Safety &amp; HSE
            </span>
            <h2 className="heading-md text-white mt-2">
              Safety Is Part of <br />
              <span className="text-[var(--teal-light)]">Every Operation</span>
            </h2>
            {/* ===== PARAGRAPH WITH EXPLICIT COLOR ===== */}
            <p
              className="text-body mt-4"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              We maintain the highest standards of HSE compliance, environmental responsibility,
              operational safety, quality assurance, and risk management across all activities.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                <i className="fas fa-check-circle text-[var(--teal-light)]"></i> HSE Compliance
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                <i className="fas fa-check-circle text-[var(--teal-light)]"></i> Environmental Responsibility
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                <i className="fas fa-check-circle text-[var(--teal-light)]"></i> Operational Safety
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                <i className="fas fa-check-circle text-[var(--teal-light)]"></i> Quality Assurance
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/80 col-span-2">
                <i className="fas fa-check-circle text-[var(--teal-light)]"></i> Risk Management
              </div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2" ref={ref2}>
            <div className="rounded-[var(--radius)] overflow-hidden shadow-lg relative">
              <div className="aspect-[4/3] bg-gray-700">
                <img
                  src="/safety.webp"
                  alt="Safety and HSE"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1a2b]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}