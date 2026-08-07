import React, { useState, useEffect } from 'react'

const images = ['/hero.jpg', '/dd.jpg', '/we_are_unitech.jpg']

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        setOpacity(1)
      }, 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--navy)' }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2b]/80 via-[#0a1a2b]/60 to-[#0a1a2b]/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${images[current]})`,
            opacity: opacity
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat z-10 opacity-30"></div>
      </div>
      <div className="container-custom relative z-20 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow with explicit colors */}
          <span 
            className="eyebrow text-xs tracking-[0.25em] font-semibold uppercase"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            <span style={{ color: '#3a4eb8' }}>◆</span> Engineering • Energy • Excellence
          </span>

          <h1 className="heading-lg text-white mt-4 leading-[1.05]">
            Engineering Solutions That <br className="hidden sm:block" />
            <span className="text-teal-300">Power the Future</span> of Energy
          </h1>

          {/* Description with explicit color */}
          <p 
            className="mt-6 max-w-xl"
            style={{ 
              fontSize: '1.0625rem', 
              lineHeight: '1.7', 
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            Unitech delivers innovative drilling, engineering, exploration, and energy solutions built around safety,
            technical excellence, and operational performance.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#services" className="btn-primary">
              Explore Our Services <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn-outline">
              Contact Us <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}