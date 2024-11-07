'use client';
import { useState } from 'react';

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-700">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full py-4 text-left text-[#a6e3a1] font-bold text-xl"
        >
          {title}
          <span className={`text-[#a6e3a1] transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <div className="relative w-6 h-6">
              <div className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <PlusIcon />
              </div>
              <div className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <MinusIcon />
              </div>
            </div>
          </span>
        </button>
        <div 
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="py-2 text-gray-300">
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Accordion = () => {
    const items = [
      {
        title: 'Results Driven',
        content: 'Delivering actionable insights with measurable ROI.',
      },
      {
        title: 'Cost Effective Value-Add',
        content: 'Get 80% of the value of traditional research and analysis for 20% of the cost.',
      },
      {
        title: 'Tech-Driven Creativity',
        content: 'Methodologies inspired by human creativity and empowered by technology.',
      },
      {
        title: 'Industry Agnostic Expertise',
        content: 'Hundreds of completed projects across all sectors and verticals.',
      },
    ];
  
    return (
      <section className="min-h-screen flex flex-col justify-center md:px-20 py-20">
        <div className="w-full flex flex-col md:flex-row justify-around py-20">
          <h2 className="text-4xl md:text-2xl text-[#dcefd3] mb-8 md:mb-0 font-helvetica font-light md:pr-24">
          Why us?
        </h2>
        <div className="space-y-4 w-full md:w-1/2">
          {items.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
          </div>
        </div>
      </section>
    );
  };

  export default Accordion;