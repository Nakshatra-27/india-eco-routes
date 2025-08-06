import { Button } from "@/components/ui/button";
import { ArrowDown, Navigation } from "lucide-react";

const HeroSection = () => {
  const scrollToApp = () => {
    const appSection = document.getElementById('app-section');
    appSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-eco-light to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container px-4 py-16 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-eco-light rounded-full text-eco-dark font-medium">
            <Navigation className="w-4 h-4" />
            AI-Powered Sustainability
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-eco-primary to-eco-secondary bg-clip-text text-transparent leading-tight">
            Carbon Footprint Based Route Optimization
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Plan smarter, greener routes across India using the power of AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToApp}
              size="lg" 
              className="bg-gradient-to-r from-eco-primary to-eco-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 px-8 py-6 text-lg"
            >
              Use the Tool
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white transition-all duration-300 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-eco-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-eco-secondary/10 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 bg-eco-primary/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;