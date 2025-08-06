import HeroSection from "@/components/HeroSection";
import WhatItDoes from "@/components/WhatItDoes";
import HowItWorks from "@/components/HowItWorks";
import WhyUseApp from "@/components/WhyUseApp";
import RouteOptimizer from "@/components/RouteOptimizer";
import AboutTeam from "@/components/AboutTeam";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatItDoes />
      <HowItWorks />
      <WhyUseApp />
      <RouteOptimizer />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default Index;
