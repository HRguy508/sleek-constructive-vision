
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from '../ui/CustomButton';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <span className="text-2xl font-heading font-bold tracking-tight text-primary">
              Nexus<span className="text-accent">Building</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('about')} className="text-primary hover:text-accent transition-colors">About</button>
            <button onClick={() => handleNavClick('services')} className="text-primary hover:text-accent transition-colors">Services</button>
            <button onClick={() => handleNavClick('projects')} className="text-primary hover:text-accent transition-colors">Projects</button>
            <button onClick={() => handleNavClick('team')} className="text-primary hover:text-accent transition-colors">Team</button>
            <button onClick={() => handleNavClick('contact')} className="text-primary hover:text-accent transition-colors">Contact</button>
            <Button onClick={handleContactClick} variant="accent" animate>Get in Touch</Button>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
