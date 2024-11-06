'use client'
import { motion } from 'framer-motion'

export default function ContactUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* Contact Form */}
      <div className="bg-[#243434] rounded-[2rem] p-8 order-1 md:order-2 h-full">
        <h2 className="text-4xl md:text-4xl text-[#dcefd3] font-helvetica mb-6">
          Interested but don't know where to start?
        </h2>

        <form className="space-y-5">
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
        <div className="mt-6">
          <p className="text-[#dcefd3]/60 mb-2">Or email us at:</p>
          <div className="flex items-center gap-2 text-[#dcefd3]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-lg">hristo@addifico.com</span>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 order-2 md:order-1 h-full">
        {/* UpWork Link */}
        <motion.a
          href="https://upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#243434] rounded-[2rem] aspect-square overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          {/* Logo with Circle */}
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
              <span className="text-[#dcefd3]/60 group-hover:text-[#243434] group-hover:font-bold transition-all duration-300 text-lg">up</span>
            </div>
          </div>

          {/* Text and Arrow Container */}
          <div className="absolute bottom-4 left-4">
            <motion.div
              className="flex items-center gap-2"
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
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3] md:w-6 md:h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-xl font-helvetica">UpWork</span>
            </motion.div>
          </div>
        </motion.a>

        {/* Fiverr Link */}
        <motion.a
          href="https://fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#243434] rounded-[2rem] aspect-square overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
              <span className="text-[#dcefd3]/60 group-hover:text-[#243434] group-hover:font-bold transition-all duration-300 text-lg">fi</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <motion.div
              className="flex items-center gap-2"
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
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3] md:w-6 md:h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-xl font-helvetica">Fiverr</span>
            </motion.div>
          </div>
        </motion.a>

        {/* LinkedIn Link */}
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#243434] rounded-[2rem] aspect-square overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
              <span className="text-[#dcefd3]/60 group-hover:text-[#243434] group-hover:font-bold transition-all duration-300 text-lg">in</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <motion.div
              className="flex items-center gap-2"
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
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3] md:w-6 md:h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-xl font-helvetica">LinkedIn</span>
            </motion.div>
          </div>
        </motion.a>

        {/* Book a Meeting Link */}
        <motion.a
          href="/book-meeting"
          className="relative bg-[#243434] rounded-[2rem] aspect-square overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 rounded-full bg-[#dcefd3]/10 group-hover:bg-[#97D28B] transition-colors duration-300 flex items-center justify-center">
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
          <div className="absolute bottom-4 left-4">
            <motion.div
              className="flex items-center gap-2"
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
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#dcefd3] md:w-6 md:h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <span className="text-[#dcefd3] text-xl font-helvetica">Book a meeting</span>
            </motion.div>
          </div>
        </motion.a>
      </div>
    </div>
  )
} 