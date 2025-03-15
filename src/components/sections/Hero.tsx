
import React from 'react';
import { Button } from '../ui/CustomButton';
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
          src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
          alt="Engineering and construction" 
          className="w-full h-full object-cover filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Diagonal accents */}
      <div className="absolute bottom-0 left-0 w-1/3 h-24 bg-accent clip-diagonal z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-24 bg-accent clip-diagonal-reverse z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-start">
        <div className="max-w-xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-black uppercase bg-accent rounded-md opacity-0 animate-fade-in">
            Construction Excellence
          </span>
          <h1 className="text-white font-bold mb-6 text-left opacity-0 animate-fade-in-delay-1">
            We build something<br />new and consistent.
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 text-left max-w-lg opacity-0 animate-fade-in-delay-2">
            No matter where or what you want to build, we mobilize the right experts to drive value and realize your project construction goals.
          </p>
          <div className="flex items-center gap-4 opacity-0 animate-fade-in-delay-3">
            <Button variant="accent" size="lg" animate className="hover:bg-accent/90">
              Discover More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
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
