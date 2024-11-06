'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const companies = [
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
  { name: 'Upwork', logo: '/logos/upwork.svg' },
  { name: 'Fiverr', logo: '/logos/fiverr-1.svg' },
  { name: 'Ansell', logo: '/logos/ansell.png' },
  { name: 'Tipalti', logo: '/logos/tripalti.png' },
  { name: 'Estrid', logo: '/logos/estrid.svg' },
  { name: 'Imaginario', logo: '/logos/imaginario.png' },
  { name: 'Presidio', logo: '/logos/presidio.png' },
  { name: 'Wedo', logo: '/logos/wedo.svg' },
]

export default function TrustUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      scale: 0.5
    },
    show: { 
      opacity: 1,
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
            {companies.map((company) => (
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
      </div>
    </section>
  )
} 