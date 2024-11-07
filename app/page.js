import HeroSection from '@/components/HeroSection'
import DifferenceSection from '@/components/DifferenceSection'
import StatsSection from '@/components/StatsSection'
import HorizontalScrollCarousel from '@/components/Service'
import Accordion from '@/components/AccordionSection'
import TestimonialSection from '@/components/TestimonialSection'
import Resources from '@/components/Resources'
import ContactUs from '@/components/ContactUs'
import TrustUs from '@/components/TrustUs'


export default function Home() {
  return (
    <main className="relative min-h-screen px-4" >
      {/* Hero section   */}
      <HeroSection />
      {/* Difference section */}
      <DifferenceSection />
      {/* Services section */}
      <HorizontalScrollCarousel />
      {/* Stats section */}
      <StatsSection />
      {/* Why us section */}
      <Accordion />
      {/* Trust us section */}
      <TrustUs />
      {/* Testimonial section */}
      <TestimonialSection />
      {/* Resources section */}
      <Resources />
      {/* Contact us section */}
      <ContactUs />
    </main>
  )
}