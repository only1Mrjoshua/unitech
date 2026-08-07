import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import WhyUnitech from '../components/WhyUnitech'
import Services from '../components/Services'
import Capability from '../components/Capability'
import Presence from '../components/Presence'
import Group from '../components/Group'
import Safety from '../components/Safety'
import Careers from '../components/Careers'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyUnitech />
      <Services />
      <Capability />
      <Presence />
      <Group />
      <Safety />
      <Careers />
      <Contact />
    </>
  )
}