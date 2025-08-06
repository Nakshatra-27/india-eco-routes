import { Card } from "@/components/ui/card";
import { Leaf, Brain, MapPin, CheckCircle } from "lucide-react";

const WhyUseApp = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Reduce Environmental Impact",
      description: "Make a positive difference by choosing routes that minimize CO₂ emissions and environmental footprint"
    },
    {
      icon: Brain,
      title: "Make Smarter Decisions",
      description: "Get data-driven insights for better travel and shipping decisions based on scientific calculations"
    },
    {
      icon: MapPin,
      title: "Real Indian Route Data",
      description: "Built using authentic route data from cities and states across India for accurate results"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Why Use This App?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the movement towards sustainable transportation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center bg-gradient-to-b from-card to-background border-eco-light/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-eco-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Additional Benefits List */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-eco-primary/5 to-eco-secondary/5 border-eco-primary/20">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-eco-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Key Benefits</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-eco-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">Reduce fuel costs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-eco-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">Lower carbon emissions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-eco-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">AI-powered optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-eco-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">Real-time calculations</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUseApp;