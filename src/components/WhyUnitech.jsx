import React, { useEffect, useRef } from 'react'

export default function WhyUnitech() {
  const containerRef = useRef(null)

  const features = [
    { icon: 'fa-shield-alt', title: 'Safety First', desc: 'Safety, health, and environmental responsibility remain central to every operation.' },
    { icon: 'fa-microchip', title: 'Technical Excellence', desc: 'Highly skilled professionals and advanced technical capabilities across all disciplines.' },
    { icon: 'fa-sync-alt', title: 'Reliable Operations', desc: 'Dependable equipment and disciplined operational processes ensure consistent delivery.' },
    { icon: 'fa-chart-pie', title: 'Cost Efficiency', desc: 'Solutions designed to deliver measurable value without compromising quality.' },
    { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Continuous development of tools, systems, and operational approaches.' },
    { icon: 'fa-users', title: 'Experienced People', desc: 'A team committed to delivering dependable results across every project.' }
  ]

  useEffect(() => {
    if (!containerRef.current) return
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

    const elements = containerRef.current.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-[var(--gray-light)]" id="why" ref={containerRef}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="eyebrow">Why Unitech</span>
          <h2 className="heading-md text-[var(--navy)] mt-2">Built Around Performance</h2>
          <p className="text-body mt-3">
            Our commitment to safety, technical excellence, and reliable operations sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div className="feature-card reveal" key={i}>
              <div className="icon-wrap"><i className={`fas ${f.icon}`}></i></div>
              <h4 className="heading-sm text-[var(--navy)]">{f.title}</h4>
              <p className="text-body-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}