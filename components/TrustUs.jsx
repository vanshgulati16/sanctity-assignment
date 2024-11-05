'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const companies = [
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
  { name: 'Indeed', logo: '/logos/indeed.svg' },
  { name: 'Upwork', logo: '/logos/upwork.svg' },
  { name: 'Fiverr', logo: '/logos/fiverr.svg' },
  { name: 'Ansell', logo: '/logos/ansell.svg' },
  { name: 'Tipalti', logo: '/logos/tipalti.svg' },
  { name: 'Estrid', logo: '/logos/estrid.svg' },
  { name: 'Imaginario', logo: '/logos/imaginario.svg' },
  { name: 'Presidio', logo: '/logos/presidio.svg' },
  { name: 'Wedo', logo: '/logos/wedo.svg' },
]

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function TrustUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shuffledCompanies = shuffleArray(companies)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  }

  return (
    <section className="py-20 px-4 md:px-20 bg-[#E8F3E8] rounded-3xl" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16">
          <motion.div 
            className="col-span-2 md:col-span-3 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group bg-white/50 backdrop-blur-sm rounded-2xl p-12 cursor-pointer transition-all duration-300 min-h-[200px] flex items-center">
              <h2 className="text-4xl md:text-6xl font-helvetica text-[#243434] max-w-[400px]">
                Who trusts us?
              </h2>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-2 md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {shuffledCompanies.map((company) => (
              <motion.div
                key={company.name}
                className="relative group bg-white/50 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:bg-white"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={150}
                    height={50}
                    className="object-contain transition-all duration-300 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
                <div className="w-full pt-[75%]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-16">
          <button className="group px-8 py-4 rounded-full border border-[#243434] text-[#243434] hover:bg-[#243434] hover:text-white transition-all duration-300 flex items-center gap-2">
            <span>Load more</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:rotate-90"
            >
              <path 
                d="M12 4V20M12 20L18 14M12 20L6 14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 