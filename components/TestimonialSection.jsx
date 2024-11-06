'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: "Addifico's market insights transformed our business strategy. Their analysis was spot-on and helped us identify crucial opportunities we had overlooked.",
    author: "Sarah Chen",
    position: "CEO, TechVision Inc.",
    company: "TechVision Inc.",
    platform: "fiverr",
    image: "/path-to-image.jpg"
  },
  {
    id: 2,
    text: "Working with Addifico was a game-changer. Their deep understanding of market dynamics and innovative approach delivered exceptional results.",
    author: "Michael Rodriguez",
    position: "Director of Strategy",
    company: "Global Innovations",
    platform: "upwork",
    image: "/path-to-image.jpg"
  },
  {
    id: 3,
    text: "The depth of research and attention to detail in Addifico's analysis impressed us immensely. They didn't just provide data; they provided actionable insights.",
    author: "Emma Thompson",
    position: "Founder",
    company: "Future Ventures",
    platform: "fiverr",
    image: "/path-to-image.jpg"
  },
  {
    id: 4,
    text: "The strategic recommendations provided by Addifico helped us achieve a 40% growth in market share within six months.",
    author: "David Park",
    position: "Marketing Director",
    company: "InnovateTech",
    platform: "upwork",
    image: "/path-to-image.jpg"
  },
  {
    id: 5,
    text: "Exceptional service! Their market analysis was comprehensive and the actionable insights were invaluable to our expansion strategy.",
    author: "Lisa Wong",
    position: "Operations Manager",
    company: "Global Solutions Ltd",
    platform: "fiverr",
    image: "/path-to-image.jpg"
  },
  {
    id: 6,
    text: "Working with Addifico has been transformative for our business. Their insights helped us pivot successfully in a challenging market.",
    author: "James Miller",
    position: "Product Lead",
    company: "TechStart Solutions",
    platform: "upwork",
    image: "/path-to-image.jpg"
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState('fiverr')

  const handleNext = () => {
    const filteredTestimonials = testimonials.filter(t => t.platform === activeFilter)
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const handlePrev = () => {
    const filteredTestimonials = testimonials.filter(t => t.platform === activeFilter)
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const filteredTestimonials = testimonials.filter(t => t.platform === activeFilter)

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  return (
    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-4 py-8 overflow-x-hidden">
      {/* Title and Platform Toggle Section */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
        <h2 className="text-3xl lg:text-6xl text-addifico-green font-helvetica font-bold lg:pr-24">
          Hear it from our clients
        </h2>
        
        {/* Platform Toggle */}
        <div className="mt-8 inline-flex p-1 bg-addifico-green/10 rounded-full">
          <button
            onClick={() => setActiveFilter('fiverr')}
            className={`px-3 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
              activeFilter === 'fiverr'
                ? 'bg-addifico-green text-white'
                : 'text-addifico-green hover:bg-addifico-green/10'
            }`}
          >
            Fiverr
          </button>
          <button
            onClick={() => setActiveFilter('upwork')}
            className={`px-3 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
              activeFilter === 'upwork'
                ? 'bg-addifico-green text-white'
                : 'text-addifico-green hover:bg-addifico-green/10'
            }`}
          >
            Upwork
          </button>
        </div>
      </div>

      {/* Testimonials Container */}
      <div className="w-full lg:w-2/3">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Navigation and Cards Container */}
          <div className="flex items-center justify-center gap-4 w-full">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrev}
              className={`flex-shrink-0 p-2 lg:p-4 rounded-full transition-colors z-10
                ${currentIndex === 0 
                  ? 'bg-addifico-green/5 text-addifico-green/30 cursor-not-allowed' 
                  : 'bg-addifico-green/10 hover:bg-addifico-green/20 text-addifico-green'
                }`}
              disabled={currentIndex === 0}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   className="text-inherit lg:w-6 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Stacked Cards Container - Updated width classes */}
            <div className="relative h-[450px] w-full max-w-[350px] md:max-w-[600px] lg:max-w-[400px]">
              {filteredTestimonials.map((testimonial, index) => {
                const isActive = index === currentIndex
                const offset = (index - currentIndex)
                const isNext = offset > 0
                const isPrev = offset < 0
                
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.98,
                      opacity: isActive ? 1 : 0.7,
                      zIndex: filteredTestimonials.length - Math.abs(offset),
                      y: isNext ? offset * -8 : isPrev ? offset * -8 : 0,
                      x: isNext ? offset * -8 : isPrev ? offset * -8 : 0,
                      rotateZ: isNext ? offset * 1 : isPrev ? offset * -1 : 0,
                      rotateX: isNext ? -1 : isPrev ? -1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="absolute inset-0 bg-white rounded-3xl p-6 md:p-8 lg:p-10"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'bottom center',
                    }}
                  >
                    <div className="h-full flex flex-col justify-between">
                      {/* Quote Icon */}
                      <div className="mb-6 flex-shrink-0">
                        <svg 
                          className="w-10 h-10 text-addifico-green/20"
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg lg:text-2xl text-addifico-dark font-helvetica leading-relaxed line-clamp-5">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="border-t border-gray-200 pt-6 mt-6 flex-shrink-0">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-addifico-green/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl text-addifico-green">
                              {testimonial.author[0]}
                            </span>
                          </div>
                          <div>
                            <div className="text-addifico-green font-bold text-xl">
                              {testimonial.author}
                            </div>
                            <div className="text-base text-gray-600">
                              {testimonial.position}
                            </div>
                            <div className="text-base text-gray-600">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={handleNext}
              className={`flex-shrink-0 p-2 lg:p-4 rounded-full transition-colors z-10
                ${currentIndex === filteredTestimonials.length - 1
                  ? 'bg-addifico-green/5 text-addifico-green/30 cursor-not-allowed'
                  : 'bg-addifico-green/10 hover:bg-addifico-green/20 text-addifico-green'
                }`}
              disabled={currentIndex === filteredTestimonials.length - 1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   className="text-inherit lg:w-6 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 