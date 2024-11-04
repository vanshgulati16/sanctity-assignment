'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const makeATextRef = useRef(null)
  const differenceTextRef = useRef(null)

  useEffect(() => {
    gsap.to([makeATextRef.current, differenceTextRef.current], {
      scrollTrigger: {
        trigger: ".difference-section",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onEnter: () => {
          gsap.to([makeATextRef.current, differenceTextRef.current], {
            opacity: 0,
            duration: 0.3
          })
        },
        onLeaveBack: () => {
          gsap.to([makeATextRef.current, differenceTextRef.current], {
            opacity: 1,
            duration: 0.3
          })
        }
      }
    })
  }, [])

  return (
    <motion.section 
      className="h-screen relative overflow-hidden"
    >
      {/* Mobile view container */}
      <div className="block sm:hidden h-full">
        <div className="flex flex-col justify-end h-full px-4 pb-16">
          <div className="text-gray-400 mb-4 font-helvetica text-sm">
            Competitive Edge through<br />Creativity & Technology
          </div>
          <div className="space-y-2">
            <h1 className="text-[#dcefd3] text-[40px] font-helvetica leading-tight">
              Market
            </h1>
            <h1 className="text-[#dcefd3] text-[40px] font-helvetica leading-tight">
              Insights that
            </h1>
            <div className="flex flex-col gap-2">
              <span ref={makeATextRef} className="hero-make-a text-addifico-green text-[40px]">
                Make a
              </span>
              <span ref={differenceTextRef} className="hero-difference text-addifico-green text-[40px]">
                Difference
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view container */}
      <div className="hidden sm:block h-full">
        <div className="flex flex-col justify-center h-full px-[120px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 mb-16 font-helvetica text-base text-center"
          >
            Competitive Edge through Creativity & Technology
          </motion.div>

          <motion.div 
            className="max-w-[1200px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-[#dcefd3] text-[80px] font-helvetica leading-none">
                Market Insights
              </h1>
              {/* Asterisk container */}
              <div className="relative group cursor-pointer">
                <div className="w-36 h-16 bg-[#243434] rounded-full flex items-center justify-center">
                  <span className="text-4xl text-[#dcefd3]">*</span>
                </div>
                
                {/* Full-screen overlay */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 fixed inset-0 z-50 pointer-events-none">
                  <div className="absolute inset-0 bg-addifico-dark/80 backdrop-blur-xl" />
                  <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                    <span className="text-[#a6e3a1] font-helvetica text-xl">Aedifico</span>
                    <span className="text-gray-400 font-helvetica text-xl"> - from Latin, meaning to </span>
                    <span className="text-gray-400 font-helvetica italic text-xl">build, create, establish, </span>
                    <span className="text-gray-400 font-helvetica text-xl">and </span>
                    <span className="text-gray-400 font-helvetica italic text-xl">improve.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <h1 className="text-[#dcefd3] text-[80px] font-helvetica leading-none">
                that
              </h1>
              
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl -z-10" />
                <Image 
                  src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f5c38109cfeef5f12e09ae_Image.jpg"
                  alt="Building" 
                  width={160}
                  height={100}
                  className="w-[160px] h-[100px] rounded-2xl object-cover"
                />
              </div>

              <div>
                <span ref={makeATextRef} className="hero-make-a text-addifico-green text-[80px] font-helvetica leading-none">
                  Make a
                </span>
              </div>
            </div>

            <div className="text-center">
              <span ref={differenceTextRef} className="hero-difference text-addifico-green text-[80px] font-helvetica leading-none">
                Difference
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Common background elements */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl box-border -z-10"/>
      <div className="absolute inset-0 bg-gradient-to-br from-addifico-green/20 to-transparent opacity-30 -z-10" />
    </motion.section>
  )
} 