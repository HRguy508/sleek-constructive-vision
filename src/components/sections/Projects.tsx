
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/CustomButton';
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
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Health Center",
      category: "Healthcare",
      description: "A central healthcare facility designed to provide medical services to underserved rural communities.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Eco-Friendly Church",
      category: "Religious",
      description: "A spiritual gathering space that harmonizes with the natural environment through sustainable design principles.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Center Renovation",
      category: "Community",
      description: "Revitalization of an existing space to create a multifunctional community hub with modern amenities.",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Urban Housing Development",
      category: "Residential",
      description: "Affordable housing solution with energy-efficient features and community-focused shared spaces.",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Disaster Relief Structures",
      category: "Humanitarian",
      description: "Rapidly deployable, durable structures designed to provide immediate shelter following natural disasters.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
