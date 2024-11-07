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
    const heroMakeARect = heroMakeAText?.getBoundingClientRect()

    // Initial position setup
    gsap.set(titleRef.current, {
      position: 'fixed',
      top: heroMakeARect?.top || '50vh',
      left: heroMakeARect?.left || '50%',
      xPercent: 0,
      zIndex: 50,
      opacity: 0,
      flexDirection: 'column',
      alignItems: 'flex-start'
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
        <div 
          ref={titleRef}
          className="flex flex-col gap-2"
        >
          <div className="text-5xl md:text-7xl font-extrabold text-addifico-green whitespace-nowrap">
            Make a
          </div>
          <div className="text-5xl md:text-7xl font-extrabold text-addifico-green whitespace-nowrap">
            Difference
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-addifico-green/20 mt-4"></div>
      
      {/* Content */}
      <div className="relative z-10 mt-20">
        <div className="mb-12">
          <div className="text-gray-400 text-xl font-helvetica font-semibold">
            Why we exist? 
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
          </div>
          <div className="space-y-6">
            <p className="text-2xl md:text-4xl font-helvetica reveal-type text-[#dcefd3] font-medium whitespace-pre-line">
              At Addifico Consulting, we use human creativity and the latest technologies to help business leaders, investors, and entrepreneurs enhance their market positioning, discover the next winning trend, and optimize their chances for success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 