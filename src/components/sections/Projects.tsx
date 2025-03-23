import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/CustomButton';
import ProjectCard from '../ui/ProjectCard';
import { ThreeDPhotoCarousel } from '../ui/3d-carousel';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [displayMode, setDisplayMode] = useState<'grid' | 'carousel'>('carousel');
  
  useEffect(() => {
    if (window.PinUtils && typeof window.PinUtils.build === 'function') {
      window.PinUtils.build();
    } else {
      const script = document.createElement('script');
      script.src = '//assets.pinterest.com/js/pinit.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const projects = [
    {
      title: "Urban Development Complex",
      category: "Construction",
      description: "A multi-building urban development project with modern architecture and sustainable design principles.",
      image: "/lovable-uploads/2555fd9c-36c6-4a95-8f92-35f4f409f155.png"
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

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const pinterestProjects = [
    {
      id: "11047961581432686",
      title: "Contemporary Office Building",
      category: "Commercial"
    },
    {
      id: "570760952795095889",
      title: "Luxury Residential Tower",
      category: "Residential"
    },
    {
      id: "507217976800078855",
      title: "Urban Green Space",
      category: "Urban Planning"
    },
    {
      id: "281543725178757",
      title: "Modern Steel Structure",
      category: "Industrial"
    }
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

        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${displayMode === 'carousel' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setDisplayMode('carousel')}
            >
              3D Carousel
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${displayMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setDisplayMode('grid')}
            >
              Grid View
            </button>
          </div>
        </div>
        
        <div className={`${inView ? 'animate-fade-in-delay-2' : 'opacity-0'} transition-all duration-500`}>
          {displayMode === 'carousel' ? (
            <div className="max-w-6xl mx-auto mb-12">
              <ThreeDPhotoCarousel projects={projects} />
            </div>
          ) : (
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
          )}
        </div>
        
        <div className="text-center mt-12 mb-12">
          <Button variant="accent" size="lg" animate>
            View All Projects
          </Button>
        </div>
        
        <div className="mt-20">
          <h3 className={`text-2xl font-bold text-center mb-8 ${inView ? 'animate-fade-in-delay-2' : 'opacity-0'}`}>
            Featured Projects Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pinterestProjects.map((project, index) => (
              <div key={index} className={`w-full shadow-xl rounded-lg overflow-hidden ${inView ? 'animate-fade-in-delay-3' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative pinterest-embed-container">
                  <a 
                    data-pin-do="embedPin" 
                    data-pin-width="medium" 
                    href={`https://www.pinterest.com/pin/${project.id}/`}
                    data-pin-terse="true"
                  ></a>
                </div>
                <div className="bg-white p-4">
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <span className="text-sm text-gray-500">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className={`text-2xl font-bold text-center mb-8 ${inView ? 'animate-fade-in-delay-2' : 'opacity-0'}`}>
            Featured Construction Project
          </h3>
          <div className={`w-full flex justify-center ${inView ? 'animate-fade-in-delay-3' : 'opacity-0'}`}>
            <div className="relative pinterest-embed-container" style={{ maxWidth: '800px', width: '100%' }}>
              <a 
                data-pin-do="embedPin" 
                data-pin-width="large" 
                href="https://www.pinterest.com/pin/3025924745349513/"
                data-pin-terse="true"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .pinterest-embed-container {
            position: relative;
            overflow: hidden;
            min-height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
