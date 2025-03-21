
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from '../ui/CustomButton';
import { Menu as MenuIcon, X } from 'lucide-react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + sectionId);
    }
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        {
          'bg-transparent': !isScrolled && !isMobileMenuOpen,
          'glassmorphism py-3 shadow-md': isScrolled || isMobileMenuOpen
        }
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b301f1b1-bd0c-4a67-b7b4-0ffcb1c84394.png" 
              alt="Nexus Building Company" 
              className="h-12 md:h-14"
            />
          </Link>
          
          <nav className="hidden md:flex items-center">
            <div className="mr-4">
              <Menu setActive={setActiveItem}>
                <MenuItem setActive={setActiveItem} active={activeItem} item="About">
                  <div className="flex flex-col space-y-4 text-sm w-[200px]">
                    <p className="text-muted-foreground mb-2">Learn more about our company and mission</p>
                    <HoveredLink to="/about/company">Company</HoveredLink>
                    <HoveredLink to="/about/mission">Our Mission</HoveredLink>
                    <HoveredLink to="/about/team">Team</HoveredLink>
                    <button onClick={() => handleNavClick('about')} className="text-accent font-semibold mt-2">
                      View Overview
                    </button>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActiveItem} active={activeItem} item="Services">
                  <div className="flex flex-col space-y-4 text-sm w-[200px]">
                    <p className="text-muted-foreground mb-2">Our comprehensive building solutions</p>
                    <HoveredLink to="/services/construction">Construction</HoveredLink>
                    <HoveredLink to="/services/engineering">Engineering</HoveredLink>
                    <HoveredLink to="/services/design">Design</HoveredLink>
                    <button onClick={() => handleNavClick('services')} className="text-accent font-semibold mt-2">
                      View All Services
                    </button>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActiveItem} active={activeItem} item="Projects">
                  <div className="text-sm grid grid-cols-2 gap-6 p-2 w-[500px]">
                    <ProductItem
                      title="School Construction"
                      href="/projects/schools"
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      description="Building modern educational facilities."
                    />
                    <ProductItem
                      title="Hospital Development"
                      href="/projects/hospitals"
                      src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      description="Healthcare infrastructure for communities."
                    />
                    <button 
                      onClick={() => handleNavClick('projects')} 
                      className="text-accent font-semibold mt-4 col-span-2 text-center"
                    >
                      View All Projects
                    </button>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActiveItem} active={activeItem} item="Team">
                  <div className="flex flex-col space-y-4 text-sm w-[200px]">
                    <p className="text-muted-foreground mb-2">Meet our expert team of professionals</p>
                    <HoveredLink to="/team/leadership">Leadership</HoveredLink>
                    <HoveredLink to="/team/engineers">Engineers</HoveredLink>
                    <HoveredLink to="/team/architects">Architects</HoveredLink>
                    <button onClick={() => handleNavClick('team')} className="text-accent font-semibold mt-2">
                      View Team
                    </button>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActiveItem} active={activeItem} item="Contact">
                  <div className="flex flex-col space-y-4 text-sm w-[200px]">
                    <p className="text-muted-foreground mb-2">Get in touch with our team</p>
                    <HoveredLink to="/contact/quote">Request a Quote</HoveredLink>
                    <HoveredLink to="/contact/office">Visit Our Office</HoveredLink>
                    <button onClick={() => handleContactClick()} className="text-accent font-semibold mt-2">
                      Contact Now
                    </button>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            <Button onClick={handleContactClick} variant="accent" animate>Get in Touch</Button>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism shadow-lg py-4 animate-zoom-in">
          <nav className="flex flex-col space-y-4 px-6">
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-primary hover:text-accent transition-colors py-2 text-left"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="text-primary hover:text-accent transition-colors py-2 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('projects')} 
              className="text-primary hover:text-accent transition-colors py-2 text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('team')} 
              className="text-primary hover:text-accent transition-colors py-2 text-left"
            >
              Team
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-primary hover:text-accent transition-colors py-2 text-left"
            >
              Contact
            </button>
            <Button onClick={handleContactClick} variant="accent" className="w-full">Get in Touch</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
