'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function DifferenceSection() {
  const titleRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Get the position of both texts from hero section
    const heroMakeAText = document.querySelector('.hero-make-a')
    const heroDifferenceText = document.querySelector('.hero-difference')
    const heroMakeARect = heroMakeAText?.getBoundingClientRect()
    const heroDifferenceRect = heroDifferenceText?.getBoundingClientRect()

    // Initial position setup
    gsap.set(titleRef.current, {
      position: 'fixed',
      top: heroMakeARect?.top || '50vh',
      left: heroMakeARect?.left || '50%',
      xPercent: 0,
      zIndex: 50,
      opacity: 0,
      width: (heroDifferenceRect?.right || 0) - (heroMakeARect?.left || 0)
    })

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      onEnter: () => {
        gsap.to(titleRef.current, {
          opacity: 1,
          duration: 0.1
        })
      },
      onLeave: () => {
        gsap.to(titleRef.current, {
          opacity: 1
        })
      },
      onLeaveBack: () => {
        gsap.to(titleRef.current, {
          opacity: 0,
          duration: 0.1
        })
      }
    })

    // Main animation
    const animation = gsap.timeline({
      scrollTrigger: scrollTrigger
    })

    animation
      .to(titleRef.current, {
        top: '20vh',
        left: '120px',
        width: 'auto',
        duration: 1,
        ease: "power2.inOut"
      })

    // Create a second ScrollTrigger for the final positioning
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 20%",
      onEnter: () => {
        gsap.to(titleRef.current, {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          duration: 0.1,
          ease: "none"
        })
      },
      onLeaveBack: () => {
        gsap.set(titleRef.current, {
          position: 'fixed',
          top: '20vh',
          left: '120px'
        })
      }
    })

    // Split text animation
    const splitTypes = document.querySelectorAll('.reveal-type')
    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: 'chars'})
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
        duration: 0.3
      })
    })

    return () => {
      scrollTrigger.kill()
      animation.kill()
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="difference-section min-h-screen px-4 md:px-[120px] py-20"
    >
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-addifico-green/20 blur-[120px] rounded-full" />
      <div className="md:w-1/2">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-addifico-green whitespace-nowrap"
        >
          Make a Difference
        </h2>
      </div>
      <div className="h-[1px] w-full bg-addifico-green/20 mt-4"></div>
      
      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-20">
        <div className="pb-24">
          <div className="text-gray-400 text-xl font-helvetica">
            Why we exist? 
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-2xl md:text-4xl font-helvetica reveal-type text-[#dcefd3]">
            At Addifico Consulting, we use human creativity and the latest technologies to help business leaders, investors, and entrepreneurs enhance their market positioning, discover the next winning trend, and optimize their chances for success.
          </p>
        </div>
      </div>
    </section>
  )
} 