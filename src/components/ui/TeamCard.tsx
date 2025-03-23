
import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  delay?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  bio,
  image,
  socials,
  delay = 0
}) => {
  return (
    <div 
      className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in 0.6s ease-out ${delay}ms forwards`
      }}
    >
      <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-3 left-3 flex space-x-2">
            {socials?.linkedin && (
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </a>
            )}
            {socials?.twitter && (
              <a 
                href={socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <Twitter size={16} className="text-white" />
              </a>
            )}
            {socials?.email && (
              <a 
                href={`mailto:${socials.email}`} 
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <Mail size={16} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-accent font-medium text-sm mb-2">{role}</p>
        <p className="text-muted-foreground text-xs">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
