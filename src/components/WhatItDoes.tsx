import { Card } from "@/components/ui/card";
import { Leaf, MapPin, BarChart3 } from "lucide-react";

const WhatItDoes = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What It Does
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            This tool helps you choose travel routes that produce the least CO₂ emissions — saving fuel and helping the planet. 
            Dataset includes routes from cities and states across India.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-gradient-to-b from-card to-eco-light/20 border-eco-light hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-eco-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-eco-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Reduce Emissions</h3>
              <p className="text-muted-foreground">
                Calculate and minimize CO₂ footprint for your journeys across India
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-b from-card to-eco-light/20 border-eco-light hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-eco-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-eco-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Routes</h3>
              <p className="text-muted-foreground">
                Get optimized route suggestions based on real Indian transportation data
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-b from-card to-eco-light/20 border-eco-light hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Data-Driven</h3>
              <p className="text-muted-foreground">
                AI-powered analysis of fuel efficiency, distance, and environmental impact
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItDoes;