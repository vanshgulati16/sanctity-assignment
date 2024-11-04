'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Lenis from 'lenis'
import HeroSection from '@/components/HeroSection'
import DifferenceSection from '@/components/DifferenceSection'
import StatsSection from '@/components/StatsSection'
import HorizontalScrollCarousel from '@/components/card'
import Accordion from '@/components/AccordionSection'
import TestimonialSection from '@/components/TestimonialSection'
import Resources from '@/components/Resources'
import ContactUs from '@/components/ContactUs'
import TrustUs from '@/components/TrustUs'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ trialWarn: false })

export default function Home() {
  const targetRef = useRef(null)

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
  
  return (
    <main className="min-h-screen px-4 md:px-20" ref={targetRef}>
      {/* Navigation */}
      <nav className="relative sticky top-0 w-full z-50 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg width="120" height="32" viewBox="0 0 116 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M104.633 4.13428H111.165L115.297 0H108.77L104.633 4.13428ZM98.6719 8.34644H92.1396L96.2764 4.20728H102.804L98.6719 8.34644ZM99.3818 9.15967V15.6946L103.515 11.5554V5.02539L99.3818 9.15967ZM111.866 4.95264V11.4827L115.999 7.34839V0.818359L111.866 4.95264ZM100.28 16.7612H106.812L110.945 12.627H104.418L100.28 16.7612ZM107.518 17.5793V24.1094L111.649 19.9751V13.4451L107.518 17.5793ZM71.6475 18.4016C72.1289 17.9731 72.3721 17.384 72.3721 16.634C72.3721 15.8843 72.1289 15.2949 71.6475 14.8665C71.165 14.438 70.5957 14.2236 69.9385 14.2236C69.2812 14.2236 68.7119 14.438 68.2305 14.8665C67.748 15.2998 67.5049 15.8843 67.5049 16.634C67.5049 17.384 67.748 17.9731 68.2305 18.4016C68.7119 18.8303 69.2812 19.0444 69.9385 19.0444C70.5957 19.0444 71.165 18.8303 71.6475 18.4016Z" fill="#97D28B"></path>
          </svg>
          <Image src="/logo.svg" alt="Addifico" width={120} height={32} />
        </div>
        <div className="flex items-center gap-8">
          <button className="p-3 rounded-full bg-addifico-dark/30 backdrop-blur-sm">
            <span className="w-6 h-6 text-white">☰</span>
          </button>
          <button className="px-6 py-3 rounded-full bg-addifico-green text-addifico-dark font-helvetica">
            Get in touch
          </button>
        </div>
      </nav>
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
        <div className="flex flex-row gap-8 px-24">
          <Accordion />
        </div>  
      </section>
      {/* Trust us section */}
      <TrustUs />

      <section className="h-screen flex flex-col justify-center items-center px-4 md:px-20 py-20">
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