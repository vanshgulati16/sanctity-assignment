'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        id: 1,
        icon: '📊',
        title: 'Market Trends Analysis',
        description: 'Discover winning trends before everyone else and see how you can take advantage.'
    },
    {
        id: 2,
        icon: '👥',
        title: 'Customer Research',
        description: 'Understand your customers better through deep market research.'
    },
    {
        id: 3,
        icon: '📈',
        title: 'Market Sizing and Forecasting',
        description: 'Get accurate market size estimates and future projections.'
    },
    {
        id: 4,
        icon: '🎯',
        title: 'Competitive Analysis',
        description: 'Stay ahead of competition with detailed market intelligence.'
    }
]

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["100%", "-95%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh] px-4 md:px-20">
        <div className="sticky top-0 flex h-screen items-start overflow-hidden pt-20">
          <div className="flex flex-col w-full">
            <h2 className="text-6xl md:text-8xl text-[#a6e3a1] font-helvetica font-bold px-4 md:px-20 mt-8 mb-4">
              Services
            </h2>
            <div className="flex items-center overflow-hidden pl-10">
              <motion.div style={{ x }} className="flex gap-8">
                {services.map((service) => (
                  <Card card={service} key={service.id} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[300px] w-[300px] overflow-hidden bg-[#1a2b23] rounded-lg transition-transform duration-300"
      >
        <div className="absolute inset-0 z-10 grid place-content-center px-6">
          <div className="text-6xl text-[#a6e3a1] transition-colors duration-300 relative z-20">
            {card.icon}
          </div>
          <p className="mt-4 text-xl font-bold text-[#a6e3a1] transition-colors duration-300 relative z-20">
            {card.title}
          </p>
          <p className="text-gray-300 transition-colors duration-300 relative z-20">
            {card.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#a6e3a1] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-transparent group-hover:bg-[#a6e3a1] transition-colors duration-300 z-0"></div>
        <div className="absolute inset-0 z-10 grid place-content-center px-6 pointer-events-none">
          <div className="text-6xl text-[#243434] opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {card.icon}
          </div>
          <p className="mt-4 text-xl font-bold text-[#243434] opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {card.title}
          </p>
          <p className="text-[#243434] opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {card.description}
          </p>
        </div>
      </div>
    );
  };

export default HorizontalScrollCarousel;