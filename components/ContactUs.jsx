'use client'
import { motion } from 'framer-motion'

export default function ContactUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side - Links Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* UpWork Link */}
        <motion.a
          href="https://upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#243434] rounded-[2rem] p-8 overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          {/* Logo with Circle */}
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
              <span className="text-[#dcefd3]/60 group-hover:text-[#243434] group-hover:font-bold transition-all duration-300 text-2xl">up</span>
            </div>
          </div>

          {/* Text and Arrow Container */}
          <div className="absolute bottom-8 left-8">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: 0 }}
              variants={{
                hover: { x: 28 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                variants={{
                  hover: { opacity: 1, x: -28 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3]"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-3xl font-helvetica">UpWork</span>
            </motion.div>
          </div>
        </motion.a>

        {/* Fiverr Link */}
        <motion.a
          href="https://fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#243434] rounded-[2rem] p-8 overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
              <span className="text-[#dcefd3]/60 group-hover:text-[#243434] group-hover:font-bold transition-all duration-300 text-2xl">fi</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: 0 }}
              variants={{
                hover: { x: 28 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                variants={{
                  hover: { opacity: 1, x: -28 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3]"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-3xl font-helvetica">Fiverr</span>
            </motion.div>
          </div>
        </motion.a>

        {/* LinkedIn Link */}
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#243434] rounded-[2rem] p-8 overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
              <span className="text-[#dcefd3]/60 group-hover:text-[#243434] group-hover:font-bold transition-all duration-300 text-2xl">in</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: 0 }}
              variants={{
                hover: { x: 28 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                variants={{
                  hover: { opacity: 1, x: -28 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3]"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-3xl font-helvetica">LinkedIn</span>
            </motion.div>
          </div>
        </motion.a>

        {/* Book a Meeting Link */}
        <motion.a
          href="/book-meeting"
          className="relative bg-[#243434] rounded-[2rem] p-8 overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-[#dcefd3]/60 group-hover:text-[#243434] transition-colors duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: 0 }}
              variants={{
                hover: { x: 28 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                variants={{
                  hover: { opacity: 1, x: -28 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3]"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-3xl font-helvetica">Book a meeting</span>
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-[#243434] rounded-[2rem] p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl text-[#dcefd3] font-helvetica mb-8">
          Interested but don't know where to start?
        </h2>

        <form className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-6 py-4 bg-transparent border-b-2 border-[#dcefd3]/20 
                       text-[#dcefd3] placeholder-[#dcefd3]/40 
                       focus:outline-none focus:border-[#dcefd3]"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-6 py-4 bg-transparent border-b-2 border-[#dcefd3]/20 
                       text-[#dcefd3] placeholder-[#dcefd3]/40 
                       focus:outline-none focus:border-[#dcefd3]"
            />
          </div>

          {/* Phone and Subject Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-6 py-4 bg-transparent border-b-2 border-[#dcefd3]/20 
                       text-[#dcefd3] placeholder-[#dcefd3]/40 
                       focus:outline-none focus:border-[#dcefd3]"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full px-6 py-4 bg-transparent border-b-2 border-[#dcefd3]/20 
                       text-[#dcefd3] placeholder-[#dcefd3]/40 
                       focus:outline-none focus:border-[#dcefd3]"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Your message*"
            rows={4}
            className="w-full px-6 py-4 bg-transparent border-b-2 border-[#dcefd3]/20 
                     text-[#dcefd3] placeholder-[#dcefd3]/40 
                     focus:outline-none focus:border-[#dcefd3] resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#dcefd3] text-[#243434] rounded-full text-xl font-helvetica 
                     hover:bg-[#dcefd3]/90 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Email Contact */}
        <div className="mt-8">
          <p className="text-[#dcefd3]/60 mb-2">Or email us at:</p>
          <div className="flex items-center gap-2 text-[#dcefd3]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-lg">hristo@addifico.com</span>
          </div>
        </div>
      </div>
    </div>
  )
} 