import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [topBarHidden, setTopBarHidden] = useState(false)
  const lastScroll = useRef(0)
  const [openSubmenus, setOpenSubmenus] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset
      setScrolled(current > 50)
      setTopBarHidden(current > 100 && current > lastScroll.current)
      lastScroll.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobile = () => setMobileOpen(!mobileOpen)
  const closeMobile = () => setMobileOpen(false)

  const toggleSubmenu = (id) => {
    setOpenSubmenus(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Top bar */}
      <div
        className="navbar-top"
        style={{ transform: topBarHidden ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <div className="navbar-top-inner">
          <a href="mailto:info@unitechdrilling.com"><i className="fas fa-envelope"></i> info@unitechdrilling.com</a>
          <span className="top-divider"></span>
          <a href="tel:+2341234567890"><i className="fas fa-phone"></i> +234 123 456 7890</a>
          <span className="top-divider"></span>
          <a href="/#contact">Contact Us</a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="navbar-main">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo gap-3">
            <img src="/logo.jpg" alt="Unitech" className="h-10 w-auto" />
            <span className="logo-text font-bold text-lg whitespace-nowrap">Unitech Energies</span>
          </Link>

          <ul className="nav-links" role="menubar">
            {/* HOME */}
            <li role="none">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem" end>
                Home
              </NavLink>
            </li>

            {/* ABOUT – plain <a> */}
            <li role="none">
              <a href="/#about" role="menuitem" aria-haspopup="true">
                About Us
                <span className="dropdown-arrow"><i className="fas fa-chevron-down"></i></span>
              </a>
              <div className="dropdown-menu" role="menu">
                <a href="/#about" role="menuitem"><i className="fas fa-info-circle"></i> Overview</a>
                <a href="/#safety" role="menuitem"><i className="fas fa-shield-alt"></i> Safety Policy</a>
                <a href="/#safety" role="menuitem"><i className="fas fa-check-circle"></i> Quality Assurance</a>
                <a href="/#why" role="menuitem"><i className="fas fa-star"></i> Values</a>
              </div>
            </li>

            {/* SERVICES – active on any /services/* */}
            <li role="none">
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
                role="menuitem"
                aria-haspopup="true"
              >
                Services
                <span className="dropdown-arrow"><i className="fas fa-chevron-down"></i></span>
              </NavLink>
              <div className="dropdown-menu" role="menu">
                {/* Drilling & Measurements – active only on exact match */}
                <NavLink
                  to="/services/drilling-measurements"
                  end
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  role="menuitem"
                >
                  <i className="fas fa-tachometer-alt"></i> Drilling &amp; Measurements
                </NavLink>
                {/* Others are hash links – no active state */}
                <a href="/#services" role="menuitem"><i className="fas fa-cogs"></i> Rig Supply &amp; Hoisting</a>
                <a href="/#services" role="menuitem"><i className="fas fa-chart-line"></i> Mud Logging</a>
                <a href="/#services" role="menuitem"><i className="fas fa-project-diagram"></i> Project Management</a>
                <a href="/#services" role="menuitem"><i className="fas fa-water"></i> Wellbore Cleanup</a>
                <a href="/#services" role="menuitem"><i className="fas fa-tools"></i> Tools Rentals</a>
              </div>
            </li>

            {/* Other hash links */}
            <li role="none"><a href="/#exploration" role="menuitem">Exploration &amp; Energy</a></li>
            <li role="none"><a href="/#careers" role="menuitem">Careers</a></li>
            <li role="none"><a href="/#contact" role="menuitem">Contact</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <a href="/#contact" className="nav-cta btn-primary">
              Get In Touch <i className="fas fa-arrow-right"></i>
            </a>
            <button
              className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Unitech" className="h-8 w-auto" />
            <span className="text-[var(--navy)] font-bold text-lg">Unitech Energies</span>
          </div>
          <button className="mobile-drawer-close" onClick={closeMobile}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={closeMobile}>Home</Link></li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('about') }}>
              About Us
              <span className={`mobile-dropdown-toggle ${openSubmenus.about ? 'open' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
            <ul className={`mobile-submenu ${openSubmenus.about ? 'open' : ''}`}>
              <li><a href="/#about" onClick={closeMobile}><i className="fas fa-circle"></i> Overview</a></li>
              <li><a href="/#safety" onClick={closeMobile}><i className="fas fa-circle"></i> Safety Policy</a></li>
              <li><a href="/#safety" onClick={closeMobile}><i className="fas fa-circle"></i> Quality Assurance</a></li>
              <li><a href="/#why" onClick={closeMobile}><i className="fas fa-circle"></i> Values</a></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('services') }}>
              Services
              <span className={`mobile-dropdown-toggle ${openSubmenus.services ? 'open' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
            <ul className={`mobile-submenu ${openSubmenus.services ? 'open' : ''}`}>
              <li>
                <Link to="/services/drilling-measurements" onClick={closeMobile}>
                  <i className="fas fa-circle"></i> Drilling &amp; Measurements
                </Link>
              </li>
              <li><a href="/#services" onClick={closeMobile}><i className="fas fa-circle"></i> Rig Supply &amp; Hoisting</a></li>
              <li><a href="/#services" onClick={closeMobile}><i className="fas fa-circle"></i> Mud Logging</a></li>
              <li><a href="/#services" onClick={closeMobile}><i className="fas fa-circle"></i> Project Management</a></li>
              <li><a href="/#services" onClick={closeMobile}><i className="fas fa-circle"></i> Wellbore Cleanup</a></li>
              <li><a href="/#services" onClick={closeMobile}><i className="fas fa-circle"></i> Tools Rentals</a></li>
            </ul>
          </li>
          <li><a href="/#exploration" onClick={closeMobile}>Exploration &amp; Energy</a></li>
          <li><a href="/#careers" onClick={closeMobile}>Careers</a></li>
          <li><a href="/#contact" onClick={closeMobile}>Contact</a></li>
        </ul>
        <div className="mobile-nav-cta">
          <a href="/#contact" className="btn-primary" onClick={closeMobile}>
            Get In Touch <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="mobile-nav-bottom">
          <a href="mailto:info@unitechdrilling.com"><i className="fas fa-envelope"></i> info@unitechdrilling.com</a>
          <a href="tel:+2341234567890"><i className="fas fa-phone"></i> +234 123 456 7890</a>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/30 z-[1050]" onClick={closeMobile}></div>
      )}
    </header>
  )
}