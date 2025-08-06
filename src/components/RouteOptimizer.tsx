import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Car, Package, Leaf, Route, TrendingDown, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RouteResult {
  id: number;
  name: string;
  distance: number;
  estimatedTime: string;
  co2Emissions: number;
  fuelCost: number;
  description: string;
}

const RouteOptimizer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    fuelEfficiency: "",
    cargoWeight: "",
    vehicleType: ""
  });
  const [results, setResults] = useState<RouteResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad",
    "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Visakhapatnam",
    "Prayagraj", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
    "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad"
  ];

  const calculateRoutes = () => {
    if (!formData.source || !formData.destination || !formData.fuelEfficiency || !formData.vehicleType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to calculate routes.",
        variant: "destructive"
      });
      return;
    }

    if (formData.source === formData.destination) {
      toast({
        title: "Invalid Route",
        description: "Source and destination cannot be the same.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call with realistic route calculations
    setTimeout(() => {
      const baseDistance = Math.random() * 800 + 200; // 200-1000 km
      const fuelEff = parseFloat(formData.fuelEfficiency);
      const cargoWeight = parseFloat(formData.cargoWeight) || 0;
      
      const mockResults: RouteResult[] = [
        {
          id: 1,
          name: "Eco Route (Recommended)",
          distance: Math.round(baseDistance * 1.1),
          estimatedTime: `${Math.round(baseDistance / 60 + 2)}h ${Math.round((baseDistance % 60) + 30)}m`,
          co2Emissions: Math.round((baseDistance * 1.1 * 2.3) / fuelEff + (cargoWeight * 0.01)),
          fuelCost: Math.round((baseDistance * 1.1 * 100) / fuelEff),
          description: "Optimized for lowest emissions with moderate travel time"
        },
        {
          id: 2,
          name: "Fastest Route",
          distance: Math.round(baseDistance),
          estimatedTime: `${Math.round(baseDistance / 70)}h ${Math.round((baseDistance % 70) + 15)}m`,
          co2Emissions: Math.round((baseDistance * 2.5) / fuelEff + (cargoWeight * 0.012)),
          fuelCost: Math.round((baseDistance * 100) / fuelEff),
          description: "Shortest time with highways and expressways"
        },
        {
          id: 3,
          name: "Balanced Route",
          distance: Math.round(baseDistance * 1.05),
          estimatedTime: `${Math.round(baseDistance / 65 + 1)}h ${Math.round((baseDistance % 65) + 20)}m`,
          co2Emissions: Math.round((baseDistance * 1.05 * 2.4) / fuelEff + (cargoWeight * 0.011)),
          fuelCost: Math.round((baseDistance * 1.05 * 100) / fuelEff),
          description: "Good balance between time and environmental impact"
        }
      ];

      setResults(mockResults.sort((a, b) => a.co2Emissions - b.co2Emissions));
      setIsLoading(false);
      
      toast({
        title: "Routes Calculated!",
        description: `Found ${mockResults.length} optimized routes from ${formData.source} to ${formData.destination}.`
      });
    }, 2000);
  };

  const getEmissionBadge = (emissions: number) => {
    if (emissions < results[0]?.co2Emissions * 1.1) return { variant: "default" as const, label: "Low CO₂", className: "bg-eco-primary text-white" };
    if (emissions < results[0]?.co2Emissions * 1.3) return { variant: "secondary" as const, label: "Medium CO₂", className: "" };
    return { variant: "destructive" as const, label: "High CO₂", className: "" };
  };

  return (
    <section id="app-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Route Optimization Tool
            </h2>
            <p className="text-lg text-muted-foreground">
              Calculate and compare CO₂ emissions for different routes across India
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8 bg-gradient-to-b from-card to-eco-light/5 border-eco-light/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-foreground">
                <Car className="w-6 h-6 mr-3 text-eco-primary" />
                Trip Details
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="source" className="flex items-center text-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-eco-primary" />
                      Source City
                    </Label>
                    <Select value={formData.source} onValueChange={(value) => setFormData({...formData, source: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianCities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="flex items-center text-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-eco-secondary" />
                      Destination
                    </Label>
                    <Select value={formData.destination} onValueChange={(value) => setFormData({...formData, destination: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianCities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicleType" className="flex items-center text-foreground">
                    <Car className="w-4 h-4 mr-2 text-eco-primary" />
                    Vehicle Type
                  </Label>
                  <Select value={formData.vehicleType} onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car-petrol">Car (Petrol)</SelectItem>
                      <SelectItem value="car-diesel">Car (Diesel)</SelectItem>
                      <SelectItem value="truck-small">Small Truck</SelectItem>
                      <SelectItem value="truck-large">Large Truck</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fuelEfficiency" className="flex items-center text-foreground">
                      <Leaf className="w-4 h-4 mr-2 text-eco-primary" />
                      Fuel Efficiency (km/l)
                    </Label>
                    <Input
                      id="fuelEfficiency"
                      type="number"
                      placeholder="e.g., 15"
                      value={formData.fuelEfficiency}
                      onChange={(e) => setFormData({...formData, fuelEfficiency: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cargoWeight" className="flex items-center text-foreground">
                      <Package className="w-4 h-4 mr-2 text-eco-secondary" />
                      Cargo Weight (kg)
                    </Label>
                    <Input
                      id="cargoWeight"
                      type="number"
                      placeholder="Optional"
                      value={formData.cargoWeight}
                      onChange={(e) => setFormData({...formData, cargoWeight: e.target.value})}
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateRoutes}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-eco-primary to-eco-secondary hover:opacity-90 transition-all duration-300"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Calculating Routes...
                    </>
                  ) : (
                    <>
                      <Route className="w-5 h-5 mr-2" />
                      Calculate Optimal Routes
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-4">
              {results.length > 0 && (
                <h3 className="text-2xl font-semibold text-foreground flex items-center">
                  <TrendingDown className="w-6 h-6 mr-3 text-eco-primary" />
                  Route Options (Ranked by CO₂ Emissions)
                </h3>
              )}
              
              {results.map((route, index) => {
                const emissionBadge = getEmissionBadge(route.co2Emissions);
                return (
                  <Card key={route.id} className={`p-6 transition-all duration-300 hover:shadow-lg ${index === 0 ? 'ring-2 ring-eco-primary/50 bg-gradient-to-r from-eco-primary/5 to-eco-secondary/5' : 'bg-card'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground flex items-center">
                          {route.name}
                          {index === 0 && (
                            <Badge variant="default" className="ml-2 bg-eco-primary">
                              Recommended
                            </Badge>
                          )}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">{route.description}</p>
                      </div>
                      <Badge variant={emissionBadge.variant} className={emissionBadge.className}>
                        {emissionBadge.label}
                      </Badge>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">Distance:</span>
                          <span className="ml-auto font-medium text-foreground">{route.distance} km</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">Time:</span>
                          <span className="ml-auto font-medium text-foreground">{route.estimatedTime}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Leaf className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">CO₂:</span>
                          <span className="ml-auto font-medium text-foreground">{route.co2Emissions} kg</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Car className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">Fuel Cost:</span>
                          <span className="ml-auto font-medium text-foreground">₹{route.fuelCost}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
              
              {results.length === 0 && (
                <Card className="p-12 text-center bg-muted/30">
                  <Route className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium text-muted-foreground mb-2">No routes calculated yet</h3>
                  <p className="text-muted-foreground">
                    Fill in the trip details and click "Calculate Optimal Routes" to see your options
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteOptimizer;