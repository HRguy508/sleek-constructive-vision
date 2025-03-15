
import React from 'react';
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary' | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xl';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  animate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', animate = false, children, ...props }, ref) => {
    return (
      <ShadcnButton
        className={cn(
          {
            'transition-all duration-300 hover:scale-105': animate,
            'bg-accent text-accent-foreground hover:bg-accent/90': variant === 'accent',
            'text-lg py-6 px-8': size === 'xl',
          },
          className
        )}
        variant={variant === 'accent' ? 'default' : variant}
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
