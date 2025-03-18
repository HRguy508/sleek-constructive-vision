
import React from 'react';
import { cn } from "@/lib/utils";

interface GlowProps {
  variant?: "default" | "top" | "bottom" | "left" | "right";
  className?: string;
  color?: string;
}

export const Glow = ({ 
  variant = "default", 
  className,
  color = "accent"
}: GlowProps) => {
  return (
    <div 
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-lg",
        variant === "top" && "bottom-auto h-[400px]",
        variant === "bottom" && "top-auto h-[400px]",
        variant === "left" && "right-auto w-[400px]",
        variant === "right" && "left-auto w-[400px]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 animate-pulse blur-[100px]",
          variant === "default" && "h-[100px] w-[100px] translate-x-1/2 rounded-full bg-accent opacity-50",
          variant === "top" && "left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-accent opacity-50",
          variant === "bottom" && "bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-accent opacity-50",
          variant === "left" && "left-0 top-1/2 h-[700px] w-[300px] -translate-y-1/2 rounded-full bg-accent opacity-50",
          variant === "right" && "right-0 top-1/2 h-[700px] w-[300px] -translate-y-1/2 rounded-full bg-accent opacity-50",
          color === "primary" && "bg-primary",
          color === "secondary" && "bg-secondary",
          color === "accent" && "bg-accent"
        )}
      />
    </div>
  );
};
