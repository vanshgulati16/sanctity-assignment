'use client'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Lenis from 'lenis'
import HeroSection from '@/components/HeroSection'
import DifferenceSection from '@/components/DifferenceSection'
import StatsSection from '@/components/StatsSection'
import HorizontalScrollCarousel from '@/components/Service'
import Accordion from '@/components/AccordionSection'
import TestimonialSection from '@/components/TestimonialSection'
import Resources from '@/components/Resources'
import ContactUs from '@/components/ContactUs'
import TrustUs from '@/components/TrustUs'
import Navbar from '@/components/Navbar'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ trialWarn: false })

export default function Home() {
  const targetRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <main className="relative min-h-screen px-4" ref={targetRef}>
      {/* Navigation */}
      <Navbar />
      {/* Hero section   */}
      <HeroSection />
      {/* Difference section */}
      <DifferenceSection />
      {/* Horizontal scroll carousel */}
      <HorizontalScrollCarousel />
      {/* Stats section */}
      <StatsSection />
      {/* Accordion section */}
      <section className="min-h-screen flex flex-col justify-center md:px-20 py-20">
          <Accordion />
      </section>
      {/* Trust us section */}
      <TrustUs />
      
      <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-20 py-20">
        <TestimonialSection />
      </section>
      {/* Resources section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-20">
        <Resources />
      </section>
      {/* Contact us section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-20">
        <ContactUs />
      </section>
    </main>
  )
}