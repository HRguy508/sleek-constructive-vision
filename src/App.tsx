import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AuroraBackgroundDemo } from "./components/ui/aurora-background-demo";
import { HeroSectionDemo } from "./components/blocks/hero-section-demo";

const ThreeDPhotoCarouselDemo = () => {
  const demoProjects = [
    {
      title: "Urban Development Complex",
      category: "Construction",
      description: "A multi-building urban development project with modern architecture and sustainable design principles.",
      image: "/lovable-uploads/2555fd9c-36c6-4a95-8f92-35f4f409f155.png"
    },
    {
      title: "Community Health Center",
      category: "Healthcare",
      description: "A central healthcare facility designed to provide medical services to underserved rural communities.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Eco-Friendly Church",
      category: "Religious",
      description: "A spiritual gathering space that harmonizes with the natural environment through sustainable design principles.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">3D Project Carousel Demo</h1>
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg">
        <div className="import { ThreeDPhotoCarousel } from '../ui/3d-carousel';min-h-[500px] flex flex-col justify-center space-y-4">
          <div className="p-2">
            <ThreeDPhotoCarousel projects={demoProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-lg text-muted-foreground mb-8">This page is under construction</p>
    <a href="/" className="text-accent hover:underline">Return to Home</a>
  </div>
);

const WebDev = () => <PlaceholderPage title="Web Development" />;
const InterfaceDesign = () => <PlaceholderPage title="Interface Design" />;
const SEO = () => <PlaceholderPage title="Search Engine Optimization" />;
const Branding = () => <PlaceholderPage title="Branding" />;

const Company = () => <PlaceholderPage title="Our Company" />;
const Mission = () => <PlaceholderPage title="Our Mission" />;
const TeamPage = () => <PlaceholderPage title="Our Team" />;

const Schools = () => <PlaceholderPage title="School Construction Projects" />;
const Hospitals = () => <PlaceholderPage title="Hospital Development Projects" />;
const Community = () => <PlaceholderPage title="Community Centers Projects" />;
const Infrastructure = () => <PlaceholderPage title="Infrastructure Projects" />;

const Leadership = () => <PlaceholderPage title="Leadership Team" />;
const Engineers = () => <PlaceholderPage title="Engineering Team" />;
const Architects = () => <PlaceholderPage title="Architecture Team" />;

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
          
          <Route path="/services/web-dev" element={<WebDev />} />
          <Route path="/services/interface-design" element={<InterfaceDesign />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/branding" element={<Branding />} />
          
          <Route path="/about/company" element={<Company />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/team" element={<TeamPage />} />
          
          <Route path="/projects/schools" element={<Schools />} />
          <Route path="/projects/hospitals" element={<Hospitals />} />
          <Route path="/projects/community" element={<Community />} />
          <Route path="/projects/infrastructure" element={<Infrastructure />} />
          
          <Route path="/team/leadership" element={<Leadership />} />
          <Route path="/team/engineers" element={<Engineers />} />
          <Route path="/team/architects" element={<Architects />} />
          
          <Route path="/contact/quote" element={<Quote />} />
          <Route path="/contact/office" element={<Office />} />
          
          <Route path="/aurora-demo" element={<AuroraBackgroundDemo />} />
          <Route path="/hero-demo" element={<HeroSectionDemo />} />
          <Route path="/carousel-demo" element={<ThreeDPhotoCarouselDemo />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
