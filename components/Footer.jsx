'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#243434] text-[#dcefd3]/70 py-8 px-4 md:px-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Top section with navigation links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <nav className="flex gap-4 mb-4 md:mb-0">
            <Link 
              href="/services" 
              className="hover:text-[#dcefd3] transition-colors duration-300"
            >
              Services
            </Link>
            <span className="text-[#dcefd3]/30">/</span>
            <Link 
              href="/resources" 
              className="hover:text-[#dcefd3] transition-colors duration-300"
            >
              Resources
            </Link>
            <span className="text-[#dcefd3]/30">/</span>
            <Link 
              href="/about" 
              className="hover:text-[#dcefd3] transition-colors duration-300"
            >
              About
            </Link>
            <span className="text-[#dcefd3]/30">/</span>
            <Link 
              href="/contact" 
              className="hover:text-[#dcefd3] transition-colors duration-300"
            >
              Get in touch
            </Link>
          </nav>

          <nav className="flex gap-4">
            <Link 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dcefd3] transition-colors duration-300"
            >
              Twitter
            </Link>
            <span className="text-[#dcefd3]/30">/</span>
            <Link 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dcefd3] transition-colors duration-300"
            >
              Instagram
            </Link>
            <span className="text-[#dcefd3]/30">/</span>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dcefd3] transition-colors duration-300"
            >
              Facebook
            </Link>
          </nav>
        </div>

        {/* credits and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-[#dcefd3]/10">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-[#dcefd3]/50">Design and development by</span>
            <Link 
              href="https://valerikarageorgiev.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dcefd3] hover:text-white transition-colors duration-300"
            >
              Valeri Karageorgiev
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#dcefd3]/50">©2023 All Rights reserved</span>
            <motion.button 
              whileHover={{ y: -2 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full bg-[#dcefd3]/10 flex items-center justify-center hover:bg-[#dcefd3]/20 transition-colors duration-300"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#dcefd3]"
              >
                <path 
                  d="M12 20V4M12 4L6 10M12 4L18 10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
} 