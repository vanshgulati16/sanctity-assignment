'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { 
    value: '10K', 
    label: 'Businesses analyzed',
    bgColor: 'bg-white',
    gridArea: 'md:col-start-1 md:row-start-1',
    className: 'md:-mt-8'
  },
  { 
    value: '$50M+', 
    label: 'Raised',
    bgColor: 'bg-[#243434]',
    gridArea: 'md:col-start-2 md:row-start-1',
  },
  { 
    value: '500+', 
    label: 'Clients',
    bgColor: 'bg-[#a6e3a1]',
    gridArea: 'md:col-start-3 md:row-start-1',
    className: 'md:-mt-8'
  },
  { 
    value: '100+', 
    label: 'Markets studied',
    bgColor: 'bg-[#a6e3a1]',
    gridArea: 'md:col-start-1 md:row-start-2',
    className: 'md:-mt-8'
  },
  { 
    value: '700+', 
    label: 'Completed projects',
    bgColor: 'bg-white',
    gridArea: 'md:col-start-2 md:row-start-2',
  },
  { 
    value: '4.9/5', 
    label: 'Average customer rating',
    bgColor: 'bg-[#243434]',
    gridArea: 'md:col-start-3 md:row-start-2',
    className: 'md:-mt-8'
  }
]

export default function StatsSection() {
  return (
    <section className="stats-section relative py-16 md:py-24 px-4 md:px-20 overflow-hidden">
      {/*  background  */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[#dcefd3]/30 rounded-[3rem] transform -rotate-1" />
      </div>

      <div className="relative mb-12">
        <h2 className="text-4xl md:text-6xl font-helvetica text-[#a6e3a1] font-bold">
          Track Record
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`stat-item ${stat.bgColor} ${stat.gridArea} 
              rounded-[2rem] relative overflow-hidden group
              aspect-square md:aspect-auto md:h-[340px] 
              p-4 md:p-8 ${stat.className || ''}`}
          >
            <div className="h-full flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-2xl sm:text-3xl md:text-5xl font-bold ${
                  stat.bgColor === 'bg-[#243434]' ? 'text-[#a6e3a1]' : 'text-[#243434]'
                }`}
              >
                {stat.value}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                className={`text-xs sm:text-sm md:text-base mt-1 md:mt-2 ${
                  stat.bgColor === 'bg-[#243434]' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {stat.label}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 