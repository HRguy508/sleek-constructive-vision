
import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "bg-white p-8 rounded-lg border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in 0.6s ease-out ${delay}ms forwards`
      }}
    >
      <div className="mb-6 p-4 rounded-full bg-accent/10 inline-block text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
