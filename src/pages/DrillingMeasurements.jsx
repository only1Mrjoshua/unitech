import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function DrillingMeasurements() {
  const contentRef = useRef(null)

  // Scroll reveal for content
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="container-custom">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">
              <i className="fas fa-chevron-right" style={{ fontSize: '0.5rem' }}></i>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Drilling &amp; Measurements</span>
          </div>
          <h1 className="mt-4">Drilling &amp; Measurements</h1>
          <p className="text-white/60 text-lg max-w-2xl mt-3">
            Comprehensive directional drilling, measurement while drilling, logging while drilling,
            and allied services delivered with technical excellence.
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* ===== SIDEBAR ===== */}
            <aside className="lg:col-span-1">
              <nav className="sidebar-nav" aria-label="Service navigation">
                {/* Drilling & Measurements */}
                <div className="nav-section">
                  <span className="nav-section-title">Drilling &amp; Measurements</span>
                  <ul>
                    <li>
                      <Link to="/services/drilling-measurements" className="active">
                        <i className="fas fa-chevron-right text-xs"></i> Directional Drilling
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Measurement/Logging While Drilling
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Mud Logging Services
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Gyro Services
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Allied Services */}
                <div className="nav-section">
                  <span className="nav-section-title">Allied Services</span>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Unitech Bundle Services
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Drilling Projects Management
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Well Engineering
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Wellbore Cleanout Services
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other services */}
                <div className="nav-section">
                  <span className="nav-section-title">Other Services</span>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Rig Supply &amp; Hoisting
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-chevron-right text-xs"></i> Tools &amp; Equipment Rental
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </aside>

            {/* ===== MAIN CONTENT BODY ===== */}
            <div className="lg:col-span-3">
              <div className="content-main reveal" ref={contentRef}>
                <h2>Directional Drilling</h2>

                <p>
                  Unitech Drilling offers a full range of directional services which include straight-hole drilling,
                  conventional displacement, horizontal, multilateral, underbalance applications, reentries and
                  open hole side tracks. UDC also has the expertise and tools for use in high temperature/high
                  pressure applications, oil-based fluids and air drilling projects.
                </p>

                <p>
                  UDC stocks tools to work in hole sizes ranging from 6 ¾ inches to 12 ¼ inches and can provide
                  equipment for other hole sizes as required.
                </p>

                <h3>Directional Profile Specialties</h3>

                <div className="specialty-grid">
                  <div className="spec-item"><i className="fas fa-circle"></i> Simple build and hold</div>
                  <div className="spec-item"><i className="fas fa-circle"></i> “S” curves</div>
                  <div className="spec-item"><i className="fas fa-circle"></i> Extended reach laterals</div>
                  <div className="spec-item"><i className="fas fa-circle"></i> Medium radius build sections</div>
                  <div className="spec-item"><i className="fas fa-circle"></i> Short radius build sections</div>
                  <div className="spec-item"><i className="fas fa-circle"></i> Open hole multilaterals</div>
                  <div className="spec-item"><i className="fas fa-circle"></i> Open hole side tracks</div>
                  <div className="spec-item"><i className="fas fa-circle"></i> Reentry side tracks</div>
                </div>

                <p>
                  UDC has an operational team that acts more like a partner than a vendor while making use of
                  high performance tools from the best manufacturers in the industry.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}