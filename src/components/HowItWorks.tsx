import { Card } from "@/components/ui/card";
import { MapPin, Car, Package, TrendingDown } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Select Source & Destination",
      description: "Choose your starting city and destination from our comprehensive Indian cities database"
    },
    {
      icon: Car,
      title: "Enter Vehicle Details",
      description: "Input your vehicle's fuel efficiency to get accurate emission calculations"
    },
    {
      icon: Package,
      title: "Specify Cargo Weight",
      description: "Add cargo weight details for precise fuel consumption estimates"
    },
    {
      icon: TrendingDown,
      title: "Get Optimized Routes",
      description: "Receive route options ranked by estimated carbon emissions and environmental impact"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple steps to plan your eco-friendly journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-to-b from-card to-eco-light/10 border-eco-light/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-eco-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="w-16 h-16 bg-eco-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                <step.icon className="w-8 h-8 text-eco-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-eco-primary/30"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-eco-primary/30 rotate-45"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;