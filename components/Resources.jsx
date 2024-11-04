'use client'
import Link from 'next/link'
import Image from 'next/image'

const resources = [
  {
    id: 1,
    category: 'Blog',
    date: 'October 23, 2023',
    title: 'Startup Market Sizing: Founder\'s Guide to TAM...',
    tag: 'Market Sizing and Forecasting',
    image: '/path-to-building-image.jpg',
    link: '/blog/startup-market-sizing'
  },
  {
    id: 2,
    category: 'Blog',
    date: 'October 2, 2023',
    title: '7 Simple Steps to Ace Your Startup Market Research',
    tag: 'Business Plan & Pitch Deck',
    image: '/path-to-research-image.jpg',
    link: '/blog/startup-market-research'
  },
  {
    id: 3,
    category: 'Blog',
    date: 'September 27, 2023',
    title: 'Research and Planning for a New Business in 4 Steps',
    tag: 'Business Plan & Pitch Deck',
    image: '/path-to-planning-image.jpg',
    link: '/blog/research-and-planning'
  }
]

export default function Resources() {
  return (
    <div className="px-4 py-8">        
        {/* Main Content with White Background */}
        <div className="relative mx-auto rounded-[2.5rem] bg-white backdrop-blur-sm overflow-hidden">
          <div className="max-w-[1440px] mx-auto py-16 px-4">
            {/* Header with View All */}
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-6xl text-addifico-dark px-8 py-4 rounded-3xl font-helvetica font-bold">
                Our latest resources
              </h2>
              <button className="p-4 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-sm">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-addifico-green-dark"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {resources.map((resource) => (
                <Link 
                  key={resource.id} 
                  href={resource.link}
                  className="group relative block"
                >
                  {/* Card */}
                  <div className="bg-white rounded-3xl overflow-hidden transition-transform duration-300 group-hover:scale-[0.98] shadow-sm">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Read More Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-white text-lg">Read more</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category and Date */}
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <span>{resource.category}</span>
                        <span>{resource.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl text-addifico-dark font-helvetica mb-4">
                        {resource.title}
                      </h3>

                      {/* Tag */}
                      <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-addifico-dark">
                        {resource.tag}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="relative rounded-[2.5rem] bg-[#E5F2E3] overflow-hidden mt-16">
              <div className="py-16 px-8 md:px-16">
                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                  {/* Left Column */}
                  <div>
                    <h2 className="text-4xl md:text-6xl text-[#2D4B4D] font-helvetica">
                      Don't want to miss anything?
                    </h2>
                  </div>

                  {/* Right Column */}
                  <div>
                    <p className="text-xl md:text-2xl text-[#2D4B4D]/60 font-helvetica">
                      Sign up for our newsletter to discover winning trends before your competition!
                    </p>
                  </div>
                </div>

                {/* Subscription Form - Below both columns */}
                <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                  <div className="flex-grow">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-6 py-4 bg-transparent border-b-2 border-[#2D4B4D]/20 
                               text-[#2D4B4D] placeholder-[#2D4B4D]/40 
                               focus:outline-none focus:border-[#2D4B4D]"
                    />
                  </div>
                  <button className="group flex items-center justify-between px-6 py-4 
                                   bg-transparent border-b-2 border-[#2D4B4D]/20 
                                   text-[#2D4B4D] hover:border-[#2D4B4D] transition-colors">
                    Subscribe
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
} 