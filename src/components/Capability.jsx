import React from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Capability() {
  const ref = useReveal()
  const items = [
    { num: '01', title: 'Exploration', desc: 'Reservoir evaluation, seismic interpretation, and exploration drilling.' },
    { num: '02', title: 'Engineering', desc: 'Well design, project planning, and technical assurance.' },
    { num: '03', title: 'Drilling', desc: 'Directional drilling, MWD, LWD, and rig operations.' },
    { num: '04', title: 'Production', desc: 'Facilities management, production operations, and HSE compliance.' },
    { num: '05', title: 'Environmental Management', desc: 'Waste treatment, bio-remediation, and environmental restoration.' }
  ]

  return (
    <section className="section-padding" style={{ background: 'var(--navy)' }} id="exploration">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal" ref={ref}>
            <span className="eyebrow" style={{ color: 'var(--teal-light)' }}>Our Capability</span>
            <h2 className="heading-md text-white mt-2">
              From Exploration <br /><span className="text-[var(--teal-light)]">to Execution</span>
            </h2>
            <p className="text-white/60 text-body mt-4">
              We manage the full lifecycle of energy projects, from initial exploration and engineering
              through drilling, production, and environmental management.
            </p>
          </div>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div className="timeline-item visible" key={i}>
                <div className="timeline-number">{item.num}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}