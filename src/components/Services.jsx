import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export default function Services() {
  const headingRef = useReveal()

  const services = [
    {
      id: '01',
      title: 'Drilling & Measurements',
      img: '/Directional-Drilling.jpg',
      link: '/services/drilling-measurements', // React Router link
      links: [
        { href: 'directional-drilling.html', label: 'Directional Drilling' },
        { href: 'measurement-logging-while-drilling.html', label: 'Measurement/Logging While Drilling' },
        { href: 'drilling-projects-management.html', label: 'Drilling Projects Management' },
        { href: 'completions-wellbore-cleanout.html', label: 'Completions and Wellbore Cleanout Services' },
        { href: 'other-dm-bundled-services.html', label: 'Other D & M Bundled Services' }
      ]
    },
    {
      id: '02',
      title: 'Tools & Equipment',
      img: '/tools.jpg',
      links: [
        { href: 'research-development.html', label: 'Research & Development' },
        { href: 'tool-conceptualization-design.html', label: 'Tool Conceptualization, Design, Modification, Fabrication, Test and Commissioning' },
        { href: 'machine-shop-services.html', label: 'Machine Shop Services' },
        { href: 'oil-gas-pipeline-pigs.html', label: 'Oil and Gas Pipeline Pigs and Materials' },
        { href: 'inspection-certification.html', label: 'Inspection, Certification QA/QC Services' }
      ]
    },
    {
      id: '03',
      title: 'Rig Operations',
      img: '/rig.jpg',
      desc: 'Unitech Drilling has a formidable capacity in managing drilling rigs. We provide a fleet of high performing, technically dependable drilling rigs and a team of knowledgeable and dependable people to provide customers with solutions to their contract drilling needs.'
    },
    {
      id: '04',
      title: 'Exploration & Energy Development',
      img: '/energy.jpg',
      desc: 'UDC Exploration & Energy Development Company Limited is Operator of the Banga–Kayo Field in Congo, responsible for drilling, production operations, facilities management, and HSE compliance.'
    },
    {
      id: '05',
      title: 'Petroleum',
      img: '/Petroleum.jpg',
      links: [
        { href: 'petroleum-products-trade-logistics.html', label: 'Petroleum Products Trade & Logistics' },
        { href: 'lube-blending-plants.html', label: 'Lube Blending Plants' },
        { href: 'petroleum-downstream-consulting.html', label: 'Petroleum Downstream Consulting Services' }
      ]
    },
    {
      id: '06',
      title: 'Environmental Consulting',
      img: '/environment.jpg',
      links: [
        { href: 'drilling-solids-waste-management.html', label: 'Drilling Solids Control and Waste Management' },
        { href: 'reservoir-storage-cleaning.html', label: 'Reservoir/Storage Cleaning Services' },
        { href: 'waste-treatment-plants.html', label: 'Waste Treatment Plants' },
        { href: 'oil-spill-cleanup.html', label: 'Oil Spill Clean-up' },
        { href: 'bio-remediation-environmental-restoration.html', label: 'Bio-Remediation and Environmental Restoration' }
      ]
    }
  ]

  return (
    <section className="section-padding" id="services">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal" ref={headingRef}>
          <span className="eyebrow">Our Expertise</span>
          <h2 className="heading-md text-[var(--navy)] mt-2">Integrated Energy &amp; Industrial Solutions</h2>
          <p className="text-body mt-3">
            Comprehensive services spanning drilling, equipment, rig operations, exploration, petroleum, and environmental consulting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-image" style={{ minHeight: '140px', background: '#e8ecf1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="service-number">{svc.id}</span>
              </div>
              <div className="service-body">
                <h4>{svc.title}</h4>
                {svc.desc ? (
                  <p>{svc.desc}</p>
                ) : (
                  <ul className="service-list">
                    {svc.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
                {/* "Learn More" button – uses Link for Drilling & Measurements, otherwise anchor to home contact */}
                {svc.link ? (
                  <Link to={svc.link} className="btn-ghost text-sm mt-3">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                ) : (
                  <a href="/#contact" className="btn-ghost text-sm mt-3">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}