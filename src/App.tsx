
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a basic page component for route demonstration
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-lg text-muted-foreground mb-8">This page is under construction</p>
    <a href="/" className="text-accent hover:underline">Return to Home</a>
  </div>
);

// Service pages
const WebDev = () => <PlaceholderPage title="Web Development" />;
const InterfaceDesign = () => <PlaceholderPage title="Interface Design" />;
const SEO = () => <PlaceholderPage title="Search Engine Optimization" />;
const Branding = () => <PlaceholderPage title="Branding" />;

// About pages
const Company = () => <PlaceholderPage title="Our Company" />;
const Mission = () => <PlaceholderPage title="Our Mission" />;
const TeamPage = () => <PlaceholderPage title="Our Team" />;

// Project pages
const Schools = () => <PlaceholderPage title="School Construction Projects" />;
const Hospitals = () => <PlaceholderPage title="Hospital Development Projects" />;
const Community = () => <PlaceholderPage title="Community Centers Projects" />;
const Infrastructure = () => <PlaceholderPage title="Infrastructure Projects" />;

// Team pages
const Leadership = () => <PlaceholderPage title="Leadership Team" />;
const Engineers = () => <PlaceholderPage title="Engineering Team" />;
const Architects = () => <PlaceholderPage title="Architecture Team" />;

// Contact pages
const Quote = () => <PlaceholderPage title="Request a Quote" />;
const Office = () => <PlaceholderPage title="Visit Our Office" />;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services Routes */}
          <Route path="/services/web-dev" element={<WebDev />} />
          <Route path="/services/interface-design" element={<InterfaceDesign />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/branding" element={<Branding />} />
          
          {/* About Routes */}
          <Route path="/about/company" element={<Company />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/team" element={<TeamPage />} />
          
          {/* Projects Routes */}
          <Route path="/projects/schools" element={<Schools />} />
          <Route path="/projects/hospitals" element={<Hospitals />} />
          <Route path="/projects/community" element={<Community />} />
          <Route path="/projects/infrastructure" element={<Infrastructure />} />
          
          {/* Team Routes */}
          <Route path="/team/leadership" element={<Leadership />} />
          <Route path="/team/engineers" element={<Engineers />} />
          <Route path="/team/architects" element={<Architects />} />
          
          {/* Contact Routes */}
          <Route path="/contact/quote" element={<Quote />} />
          <Route path="/contact/office" element={<Office />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
