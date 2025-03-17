
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-primary dark:text-white pt-40">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/services/web-dev">Web Development</HoveredLink>
            <HoveredLink to="/services/interface-design">Interface Design</HoveredLink>
            <HoveredLink to="/services/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink to="/services/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="School Construction"
              to="/projects/schools"
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              description="Building modern educational facilities in Uganda."
            />
            <ProductItem
              title="Hospital Development"
              to="/projects/hospitals"
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              description="Creating healthcare infrastructure for local communities."
            />
            <ProductItem
              title="Community Centers"
              to="/projects/community"
              src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              description="Developing spaces for community engagement and activities."
            />
            <ProductItem
              title="Infrastructure"
              to="/projects/infrastructure"
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              description="Building critical infrastructure for growing communities."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Careers">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/careers/civil">Civil Engineering</HoveredLink>
            <HoveredLink to="/careers/structural">Structural Engineering</HoveredLink>
            <HoveredLink to="/careers/electrical">Electrical Engineering</HoveredLink>
            <HoveredLink to="/careers/project-management">Project Management</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
