import React, { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const [counters, setCounters] = useState([0, 0, 0])
  const targets = [15, 4, 24]
  const animated = useRef(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1800
          const startTime = performance.now()
          const update = (time) => {
            const elapsed = time - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCounters(targets.map(t => Math.round(eased * t)))
            if (progress < 1) requestAnimationFrame(update)
            else setCounters(targets)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hero-stats" ref={ref}>
      <div className="hero-stats-inner">
        <div className="stat-item">
          <div className="stat-number">{counters[0]}<span className="suffix">+</span></div>
          <div className="stat-label">Years of Industry Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counters[1]}<span className="suffix">+</span></div>
          <div className="stat-label">Countries</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counters[2]}<span className="suffix">/7</span></div>
          <div className="stat-label">Operational Support</div>
        </div>
      </div>
    </div>
  )
}