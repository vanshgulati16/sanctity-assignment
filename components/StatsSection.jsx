'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '10K', label: 'Businesses analyzed' },
  { value: '100+', label: 'Markets studied' },
  { value: '$50M+', label: 'Raised' },
  { value: '700+', label: 'Completed projects' },
  { value: '500+', label: 'Clients' },
  { value: '4.9/5', label: 'Average customer rating' }
]

export default function StatsSection() {
  useEffect(() => {
    const stats = gsap.utils.toArray('.stat-item')
    gsap.from(stats, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top bottom',
        end: 'center center',
        scrub: 1
      }
    })
  }, [])

  return (
    <section className="py-16 md:min-h-screen flex flex-col justify-center px-4 md:px-20 bg-[#dcefd3] rounded-3xl">
      <motion.h2 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-6xl text-[#243434] mb-8 md:mb-16 font-helvetica font-bold"
      >
        Track Record
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`stat-item text-center p-4 md:p-8 rounded-lg shadow-lg ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#243434]'
            }`}
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className={`text-2xl md:text-6xl font-bold ${
                index % 2 === 0 ? 'text-[#243434]' : 'text-white'
              }`}
            >
              {stat.value}
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              className={`text-sm md:text-base mt-2 ${
                index % 2 === 0 ? 'text-gray-500' : 'text-gray-300'
              }`}
            >
              {stat.label}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
} 