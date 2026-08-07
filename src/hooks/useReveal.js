import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible')
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)

    // Immediately check if the element is already visible
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const isVisible = rect.top < windowHeight - 40 && rect.bottom > 0
    if (isVisible) {
      element.classList.add('visible')
    }

    return () => observer.disconnect()
  }, [])

  return ref
}