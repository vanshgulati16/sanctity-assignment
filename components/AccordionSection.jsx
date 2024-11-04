'use client';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-700">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full py-4 text-left text-[#a6e3a1] font-bold text-xl"
        >
          {title}
          <ChevronDownIcon
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="py-2 text-gray-300">
            {content}
          </div>
        )}
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
      <section className="w-screen flex flex-row justify-around py-20">
        <h2 className="text-xl md:text-6xl text-[#dcefd3] mb-8 font-helvetica font-light pr-24">
          Why us?
        </h2>
        <div className="space-y-4 w-1/2">
          {items.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
    );
  };

  export default Accordion;