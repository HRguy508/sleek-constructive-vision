
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../ui/ServiceCard';
import { Building, PenTool, LucideRuler, ClipboardList, Leaf, HeartHandshake } from 'lucide-react';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      {/* Background image above Services section */}
      <div className="w-full h-[300px] relative mb-12">
        <img 
          src="https://wallpapers.com/images/hd/two-construction-workers-helping-each-other-b79ms9jjv0e60s5h.jpg"
          alt="Two construction workers helping each other" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`section-title mx-auto after:left-1/2 after:-translate-x-1/2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Our Services
          </h2>
          <p className={`section-subtitle mx-auto ${inView ? 'animate-fade-in-delay-1' : 'opacity-0'}`}>
            We offer comprehensive engineering and construction services with a focus on humanitarian and sustainable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Architectural Design"
            description="Creating innovative, functional spaces that balance aesthetics, sustainability, and purpose."
            icon={PenTool}
            delay={inView ? 100 : 0}
          />
          <ServiceCard 
            title="Structural Engineering"
            description="Ensuring buildings are safe, stable, and built to last with precise calculations and quality materials."
            icon={LucideRuler}
            delay={inView ? 200 : 0}
          />
          <ServiceCard 
            title="Project Management"
            description="Coordinating all aspects of construction projects to deliver on time and within budget."
            icon={ClipboardList}
            delay={inView ? 300 : 0}
          />
          <ServiceCard 
            title="Sustainable Construction"
            description="Implementing eco-friendly building practices and materials to minimize environmental impact."
            icon={Leaf}
            delay={inView ? 400 : 0}
          />
          <ServiceCard 
            title="Humanitarian Building"
            description="Specializing in structures that serve communities in need, from schools to healthcare facilities."
            icon={HeartHandshake}
            delay={inView ? 500 : 0}
          />
          <ServiceCard 
            title="Building Renovation"
            description="Modernizing and restoring existing structures while preserving their essential character."
            icon={Building}
            delay={inView ? 600 : 0}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
