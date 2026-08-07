import React, { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const headingRef = useRef(null)
  const infoRef = useRef(null)
  const formRef = useRef(null)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Observer for reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = [headingRef, infoRef, formRef]
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
        // Immediate check if already visible
        const rect = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight - 40 && rect.bottom > 0) {
          ref.current.classList.add('visible')
        }
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Please enter your full name.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Please enter a valid email address.'
    if (!form.message.trim()) newErrors.message = 'Please enter your message.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSuccess(true)
      setSubmitting(false)
      setForm({ fullName: '', email: '', phone: '', company: '', service: '', message: '' })
      setTimeout(() => setSuccess(false), 6000)
    }, 1800)
  }

  return (
    <section className="section-padding" id="contact">
      <div className="container-custom">
        {/* ===== HEADER – now visible ===== */}
        <div
          ref={headingRef}
          className="text-center max-w-2xl mx-auto mb-12 reveal"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="heading-md text-[var(--navy)] mt-2">Get in Touch</h2>
          <p className="text-body mt-3">
            Have a question or want to discuss a project? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="reveal" ref={infoRef}>
            <h3 className="text-xl font-bold text-[var(--navy)] mb-6">
              Contact Information
            </h3>
            <div className="contact-info-item">
              <div className="ci-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="ci-text">
                <h5>Office</h5>
                <p>Unitech Drilling Company Limited<br />Lagos, Nigeria</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="ci-text">
                <h5>Phone</h5>
                <p>
                  <a
                    href="tel:+2341234567890"
                    className="text-[var(--navy)] hover:text-[var(--teal)]"
                  >
                    +234 123 456 7890
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="ci-text">
                <h5>Email</h5>
                <p>
                  <a
                    href="mailto:info@unitechdrilling.com"
                    className="text-[var(--navy)] hover:text-[var(--teal)]"
                  >
                    info@unitechdrilling.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="ci-text">
                <h5>Working Hours</h5>
                <p>Monday – Friday: 8:00 AM – 6:00 PM (WAT)</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-medium text-[var(--navy)] mb-3">
                Connect with us
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-[var(--navy)] hover:bg-[var(--teal)] hover:text-white transition-all"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-[var(--navy)] hover:bg-[var(--teal)] hover:text-white transition-all"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-[var(--navy)] hover:bg-[var(--teal)] hover:text-white transition-all"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" ref={formRef}>
            <h3 className="text-xl font-bold text-[var(--navy)] mb-6">
              Send an Enquiry
            </h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.fullName ? 'error' : ''}
                />
                <div className={`error-msg ${errors.fullName ? 'show' : ''}`}>
                  {errors.fullName}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'error' : ''}
                />
                <div className={`error-msg ${errors.email ? 'show' : ''}`}>
                  {errors.email}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 123 456 7890"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <option value="drilling">Drilling &amp; Measurements</option>
                  <option value="tools">Tools &amp; Equipment</option>
                  <option value="rig">Rig Operations</option>
                  <option value="exploration">Exploration &amp; Energy</option>
                  <option value="petroleum">Petroleum</option>
                  <option value="environmental">Environmental Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or enquiry..."
                  className={errors.message ? 'error' : ''}
                ></textarea>
                <div className={`error-msg ${errors.message ? 'show' : ''}`}>
                  {errors.message}
                </div>
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry <i className="fas fa-arrow-right"></i>
                  </>
                )}
              </button>
              <div className={`form-success ${success ? 'show' : ''}`}>
                <i className="fas fa-check-circle"></i> Thank you! Your enquiry
                has been sent. We'll get back to you shortly.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}