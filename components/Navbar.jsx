'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Add these animation variants
  const menuItemVariants = {
    hover: i => ({
      rotateX: [0, -90, 0],
      transition: {
        duration: 0.5,
        delay: i * 0.05, // Creates the wave effect
      },
    }),
  }

  return (
    <nav className="relative sticky top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image 
          src="https://raw.githubusercontent.com/nishkarsh1215/testFrontend/main/public/hd_background_updated.png" 
          alt="Addifico" 
          width={120} 
          height={32} 
          className="w-24 md:w-[120px]"
        />
      </div>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 pointer-events-none ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Background blur */}
        <div 
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          } pointer-events-auto`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div 
          className={`fixed w-[calc(100%-2rem)] md:w-[520px] h-[calc(100%-2rem)] right-4 top-4 bottom-4 transition-all duration-500 ease-in-out rounded-[36px] ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'
          } pointer-events-auto overflow-y-auto bg-gradient-to-b from-[#1E2E2E] to-[#162121]`}
        >
          <div className="min-h-full flex flex-col p-8 md:p-12">
            {/* Close button */}
            <div className="flex justify-start mb-8 md:mb-12">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white flex items-center gap-2 text-lg"
              >
                <span>close</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-4 md:gap-6">
              {[
                'Services↗',
                'Resources↗',
                'Case studies↗',
                'About↗',
                'Contact↗'
              ].map((text, i) => (
                <motion.a
                  key={text}
                  href="#"
                  className="text-white hover:text-addifico-green text-[32px] md:text-[42px] font-light"
                  custom={i}
                  variants={menuItemVariants}
                  whileHover="hover"
                  style={{ transformOrigin: 'left' }}
                >
                  {text.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      custom={charIndex}
                      variants={menuItemVariants}
                      style={{ display: 'inline-block' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 md:gap-4 mt-auto pt-8 md:pt-12">
              <a href="#" className="text-gray-400 hover:text-white text-lg md:text-xl">UpWork</a>
              <a href="#" className="text-gray-400 hover:text-white text-lg md:text-xl">Fiverr</a>
              <a href="#" className="text-gray-400 hover:text-white text-lg md:text-xl">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu Buttons */}
      <div className={`hidden md:flex items-center gap-8 ${isMenuOpen ? 'invisible' : 'visible'}`}>
        <div className="relative w-12 h-12">
          <button 
            className="absolute inset-0 flex items-center justify-center hover:scale-110 transition-transform duration-200 z-10"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="text-addifico-green text-xl">☰</span>
          </button>
          <motion.svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              className="fill-none stroke-[#243434]/10"
              strokeWidth="1.5"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              className="fill-none stroke-addifico-green"
              strokeWidth="1.5"
              style={{
                pathLength: scrollYProgress
              }}
              initial={{ pathLength: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
            />
          </motion.svg>
        </div>
        
        <button className="px-6 py-3 rounded-full bg-addifico-green text-addifico-dark font-helvetica">
          Get in touch
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className={`relative md:hidden w-10 h-10 ${isMenuOpen ? 'invisible' : 'visible'}`}>
        <button 
          className="absolute inset-0 flex items-center justify-center rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-addifico-green text-xl z-10">☰</span>
        </button>
        <motion.svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 40 40"
        >
          <circle
            cx="20"
            cy="20"
            r="19"
            className="fill-none stroke-[#243434]/10"
            strokeWidth="1.5"
          />
          <motion.circle
            cx="20"
            cy="20"
            r="19"
            className="fill-none stroke-addifico-green"
            strokeWidth="1.5"
            style={{
              pathLength: scrollYProgress
            }}
            initial={{ pathLength: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
          />
        </motion.svg>
      </div>
    </nav>
  )
} 