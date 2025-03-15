
import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/197f9ea1-925d-4cd3-be09-2db65a4c04ec.png" 
          alt="Modern architectural building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-white uppercase bg-accent/80 rounded-full opacity-0 animate-fade-in">
            Excellence in Engineering
          </span>
          <h1 className="text-white font-bold mb-6 opacity-0 animate-fade-in-delay-1">
            Building a Better Future Through Innovative Design
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            We create sustainable, humanitarian-focused structures that blend cutting-edge engineering with thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-delay-3">
            <Button variant="accent" size="xl" animate className="w-full sm:w-auto">
              Explore Our Work
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={scrollToNextSection}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
