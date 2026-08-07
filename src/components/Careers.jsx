import React from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Careers() {
  const ref = useReveal()
  return (
    <section className="section-padding bg-[var(--gray-light)]" id="careers">
      <div className="container-custom">
        <div className="bg-white rounded-[var(--radius)] shadow-md p-8 md:p-16 text-center max-w-4xl mx-auto border border-[var(--gray-mid)] reveal" ref={ref}>
          <span className="eyebrow">Careers</span>
          <h2 className="heading-md text-[var(--navy)] mt-2">
            Build the Future of <span className="text-[var(--teal)]">Energy With Us</span>
          </h2>
          <p className="text-body max-w-xl mx-auto mt-4">
            Join a team of professionals working across drilling, engineering, exploration, energy, and environmental services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#contact" className="btn-primary">
              Explore Careers <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn-outline-dark">
              Contact Us <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}