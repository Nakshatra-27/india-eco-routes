import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Lightbulb } from "lucide-react";

const AboutTeam = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            About the Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center bg-gradient-to-b from-card to-eco-light/10 border-eco-light/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-eco-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-eco-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Student Team</h3>
              <p className="text-muted-foreground text-sm">
                Led by Tanya and passionate team members
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-b from-card to-eco-light/10 border-eco-light/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-eco-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-eco-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">University Project</h3>
              <p className="text-muted-foreground text-sm">
                Academic research in AI and sustainability
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-b from-card to-eco-light/10 border-eco-light/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Innovation Focus</h3>
              <p className="text-muted-foreground text-sm">
                Green technology and environmental solutions
              </p>
            </Card>
          </div>
          
          <Card className="p-8 bg-gradient-to-r from-eco-primary/5 to-eco-secondary/5 border-eco-primary/20 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Created by <strong>Tanya and team</strong> as part of a university AI project focused on sustainability and green mobility. 
                We believe that technology can play a crucial role in creating a more sustainable future for transportation in India.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-eco-light text-eco-dark">Artificial Intelligence</Badge>
                <Badge variant="secondary" className="bg-eco-light text-eco-dark">Sustainability</Badge>
                <Badge variant="secondary" className="bg-eco-light text-eco-dark">Green Technology</Badge>
                <Badge variant="secondary" className="bg-eco-light text-eco-dark">Data Science</Badge>
                <Badge variant="secondary" className="bg-eco-light text-eco-dark">Environmental Impact</Badge>
              </div>
              
              <p className="text-muted-foreground">
                This project represents our commitment to using AI for positive environmental impact, 
                helping reduce carbon emissions through smarter route planning across India.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;