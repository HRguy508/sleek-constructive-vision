import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/CustomButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`section-title mx-auto after:left-1/2 after:-translate-x-1/2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Get In Touch
          </h2>
          <p className={`section-subtitle mx-auto ${inView ? 'animate-fade-in-delay-1' : 'opacity-0'}`}>
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                  <p className="text-muted-foreground">
                    1234 Building Street<br />
                    Kampala, Uganda
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    +256 123 456 789<br />
                    +49 987 654 321
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    info@nexusbuilding.com<br />
                    projects@nexusbuilding.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-3 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  placeholder="+1 234 567 890" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </div>
              <Button 
                type="submit" 
                variant="accent" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
