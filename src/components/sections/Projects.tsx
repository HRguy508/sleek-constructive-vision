
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Sustainable School Campus",
      category: "Education",
      description: "A modern school facility built with sustainable materials and passive cooling systems to serve 500 students.",
      image: "https://images.unsplash.com/photo-1503507420689-7b961cc77da5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Health Center",
      category: "Healthcare",
      description: "A central healthcare facility designed to provide medical services to underserved rural communities.",
      image: "https://images.unsplash.com/photo-1613896640137-bb5b31496315?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Eco-Friendly Church",
      category: "Religious",
      description: "A spiritual gathering space that harmonizes with the natural environment through sustainable design principles.",
      image: "https://images.unsplash.com/photo-1617762601224-85a073450e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Center Renovation",
      category: "Community",
      description: "Revitalization of an existing space to create a multifunctional community hub with modern amenities.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Urban Housing Development",
      category: "Residential",
      description: "Affordable housing solution with energy-efficient features and community-focused shared spaces.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Disaster Relief Structures",
      category: "Humanitarian",
      description: "Rapidly deployable, durable structures designed to provide immediate shelter following natural disasters.",
      image: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`section-title mx-auto after:left-1/2 after:-translate-x-1/2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Our Projects
          </h2>
          <p className={`section-subtitle mx-auto ${inView ? 'animate-fade-in-delay-1' : 'opacity-0'}`}>
            Discover our portfolio of humanitarian and sustainable engineering projects making a positive impact worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              delay={inView ? index * 100 : 0}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" animate>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
