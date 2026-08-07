import React, { useState } from 'react'

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true)
      setNewsletterEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    } else {
      e.target.querySelector('input').style.borderColor = '#e53e3e'
      setTimeout(() => {
        e.target.querySelector('input').style.borderColor = ''
      }, 2000)
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="/logo-white.png" alt="Unitech" className="h-10 w-auto opacity-80" />
              <span className="text-white font-bold text-lg whitespace-nowrap">Unitech Energies</span>
            </div>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Delivering innovative drilling, engineering, exploration, and energy solutions with a commitment to safety and excellence.
            </p>
          </div>
          <div>
            <h5>Company</h5>
            <ul className="space-y-2">
              <li><a href="#about">About Unitech</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#why">Values</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul className="space-y-2">
              <li><a href="#services">Drilling &amp; Measurements</a></li>
              <li><a href="#services">Rig Operations</a></li>
              <li><a href="#exploration">Exploration</a></li>
              <li><a href="#services">Petroleum</a></li>
              <li><a href="#services">Environmental Consulting</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@unitechdrilling.com"><i className="fas fa-envelope mr-2"></i> info@unitechdrilling.com</a></li>
              <li><a href="tel:+2341234567890"><i className="fas fa-phone mr-2"></i> +234 123 456 7890</a></li>
              <li><i className="fas fa-map-marker-alt mr-2"></i> Lagos, Nigeria</li>
            </ul>
            <div className="footer-social mt-4 flex gap-3">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-white/50">Subscribe to our newsletter for updates</p>
            <form className="flex w-full sm:w-auto flex-col sm:flex-row gap-3" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-56 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[var(--teal)] text-sm"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary w-full sm:w-auto text-sm px-6 py-2 rounded-full whitespace-nowrap">
                {subscribed ? <><i className="fas fa-check"></i> Subscribed!</> : <>Subscribe <i className="fas fa-arrow-right"></i></>}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2008–2026 Unitech Drilling Company Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}