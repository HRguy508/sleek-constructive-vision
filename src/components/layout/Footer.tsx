
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold tracking-tight mb-6">
              Nexus<span className="text-accent">Building</span>
            </h3>
            <p className="mb-6 opacity-80">
              Building sustainable futures through innovative engineering and humanitarian design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">Architectural Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Structural Engineering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainable Construction</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Building Renovation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><Link to="/#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/#projects" className="hover:text-accent transition-colors">Our Projects</Link></li>
              <li><Link to="/#team" className="hover:text-accent transition-colors">Meet the Team</Link></li>
              <li><Link to="/#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="mb-4 opacity-80">Subscribe to our newsletter for updates on projects and industry insights.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 text-white border-0 p-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-80 text-sm">
              © {currentYear} NexusBuilding. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
