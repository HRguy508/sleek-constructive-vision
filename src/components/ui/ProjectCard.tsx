
import React, { useState } from 'react';
import { Button } from './CustomButton';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in 0.6s ease-out ${delay}ms forwards`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] w-full h-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end`}>
        <div className="transform translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase bg-accent/90 rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
          <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
            View Project <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
