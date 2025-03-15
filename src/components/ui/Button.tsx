
import React from 'react';
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive' | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  animate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', animate = false, children, ...props }, ref) => {
    const isAccentVariant = variant === 'accent';
    
    return (
      <ShadcnButton
        className={cn(
          {
            'transition-all duration-300 hover:scale-105': animate,
            'bg-accent text-accent-foreground hover:bg-accent/90': isAccentVariant,
          },
          className
        )}
        variant={isAccentVariant ? 'default' : variant as ShadcnButtonProps["variant"]}
        size={size}
        ref={ref}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };
