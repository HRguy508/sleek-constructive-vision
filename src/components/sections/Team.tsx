
import React from 'react';
import { useInView } from 'react-intersection-observer';
import TeamCard from '../ui/TeamCard';

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Architect",
      bio: "Sarah brings 15 years of experience in sustainable architectural design, specializing in humanitarian projects across Africa and Asia.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "David Okonkwo",
      role: "Construction Manager",
      bio: "With over a decade in managing large-scale construction projects, David ensures timely delivery while maintaining the highest quality standards.",
      image: "https://images.unsplash.com/photo-1578496781379-7dcfb995253a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        email: "david@example.com"
      }
    },
    {
      name: "Esther Namugwanya",
      role: "Project Director",
      bio: "Coordinating teams across continents, Esther ensures projects meet both international standards and local community needs.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "esther@example.com"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Environmental Consultant",
      bio: "Specialized in sustainable building practices, Marcus helps our projects minimize environmental impact while maximizing community benefits.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@example.com"
      }
    },
    {
      name: "Aisha Kimani",
      role: "Community Liaison",
      bio: "As our bridge to local communities, Aisha ensures our projects respect cultural contexts and provide meaningful employment opportunities.",
      image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        email: "aisha@example.com"
      }
    },
    {
      name: "Michael Müller",
      role: "Structural Engineer",
      bio: "A German-trained engineer with expertise in earthquake-resistant construction and innovative building materials.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        email: "michael@example.com"
      }
    },
    {
      name: "Olivia Chen",
      role: "Finance Director",
      bio: "Olivia's expertise in international finance helps us manage complex budgets across multiple currencies and regulatory environments.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        email: "olivia@example.com"
      }
    },
    {
      name: "Thomas Weber",
      role: "Sustainability Consultant",
      bio: "Specialized in green building certifications and implementing renewable energy solutions in challenging environments.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      socials: {
        linkedin: "#",
        email: "thomas@example.com"
      }
    },
  ];

  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`section-title mx-auto after:left-1/2 after:-translate-x-1/2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Our Team
          </h2>
          <p className={`section-subtitle mx-auto ${inView ? 'animate-fade-in-delay-1' : 'opacity-0'}`}>
            Meet our diverse team of experts bringing together German engineering precision and Ugandan innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              socials={member.socials}
              delay={inView ? index * 100 : 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
