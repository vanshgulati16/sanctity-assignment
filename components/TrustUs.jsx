'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

export default function TrustUs() {
  return (
    <section className="py-20 px-4 md:px-20 bg-[#E8F3E8] rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-helvetica text-[#243434] mb-16">
          Who trusts us?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <motion.div
              key={company.name}
              className="relative group bg-white/50 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:bg-white"
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

              {/* This div maintains the aspect ratio of the card */}
              <div className="w-full pt-[75%]" />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 rounded-full border border-[#243434] text-[#243434] hover:bg-[#243434] hover:text-white transition-all duration-300 flex items-center gap-2">
            Load more
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:rotate-90 transition-transform duration-300"
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