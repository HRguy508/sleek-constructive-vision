
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`lg:pr-10 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h2 className="section-title">Our Story</h2>
            <p className="mb-6 text-lg">
              Nexus Building is a collaborative venture between German engineering expertise and Ugandan innovation. Founded to address the growing need for sustainable and humanitarian-focused construction projects, our company bridges cultural and technical knowledge to create structures that stand the test of time.
            </p>
            <p className="mb-6">
              We specialize in designing and constructing schools, hospitals, churches, and community centers that meet international standards while addressing local needs and contexts.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </div>
          
          <div className={`relative ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Team working on a construction project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1626885930974-c58da27dc694?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Architectural blueprint review" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
