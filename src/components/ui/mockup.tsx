
import React from 'react';
import { cn } from "@/lib/utils";

interface MockupFrameProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}

export const MockupFrame = ({ 
  children, 
  className,
  size = "medium" 
}: MockupFrameProps) => {
  return (
    <div className={cn(
      "relative rounded-lg border bg-background p-1 shadow-md transition-all",
      size === "small" && "max-w-3xl",
      size === "medium" && "max-w-4xl",
      size === "large" && "max-w-5xl",
      className
    )}>
      <div className="flex items-center border-b px-2 py-1">
        <div className="flex space-x-1">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
        <div className="mx-auto flex h-4 flex-1 items-center justify-center rounded-md bg-muted/50 px-2 text-[10px] text-muted-foreground">
          mockup.example.com
        </div>
      </div>
      <div className="p-2">
        {children}
      </div>
    </div>
  );
};

interface MockupProps {
  children: React.ReactNode;
  type?: "browser" | "phone" | "desktop" | "tablet" | "responsive";
  className?: string;
}

export const Mockup = ({ 
  children, 
  type = "browser",
  className
}: MockupProps) => {
  return (
    <div className={cn(
      "overflow-hidden rounded-md border bg-background shadow-sm",
      type === "browser" && "aspect-video w-full",
      type === "desktop" && "aspect-[16/10] w-full",
      type === "tablet" && "aspect-[3/4] max-w-md",
      type === "phone" && "aspect-[9/16] max-w-[240px]",
      type === "responsive" && "w-full",
      className
    )}>
      {children}
    </div>
  );
};
