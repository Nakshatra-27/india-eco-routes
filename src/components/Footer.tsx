import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Leaf, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-eco-primary mr-3" />
                <h3 className="text-xl font-bold">EcoRoute AI</h3>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                AI-powered route optimization for sustainable transportation across India.
              </p>
            </div>
            
            {/* Project Info */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4 text-background">Project Details</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-eco-primary" />
                  Coverage: All major Indian cities
                </li>
                <li>• University AI Research Project</li>
                <li>• Real route data from across India</li>
                <li>• Sustainability-focused technology</li>
              </ul>
            </div>
            
            {/* Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4 text-background">Resources</h4>
              <div className="space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-background/80 hover:text-background hover:bg-background/10 p-0 h-auto font-normal"
                  asChild
                >
                  <a href="#" className="flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    Project Repository
                  </a>
                </Button>
                <p className="text-xs text-background/60">
                  View source code and documentation
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-background/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/80 mb-4 md:mb-0">
              <p>
                <strong>Dataset includes intercity routes from across India</strong>
              </p>
              <p className="mt-1">
                Created with ❤️ by Tanya and team for sustainable transportation
              </p>
            </div>
            
            <div className="text-sm text-background/60">
              <p>© 2024 Carbon Footprint Route Optimization</p>
              <p>University AI Project • Sustainability Research</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;