import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Thermometer, 
  Droplets, 
  TrendingUp, 
  Shield, 
  Calculator,
  Map,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms trained on Jharkhand's agricultural data for precise recommendations.",
    gradient: "gradient-primary"
  },
  {
    icon: Thermometer,
    title: "Weather Intelligence",
    description: "Real-time weather monitoring and seasonal predictions to optimize planting schedules.",
    gradient: "gradient-success"
  },
  {
    icon: Droplets,
    title: "Soil Quality Assessment",
    description: "Comprehensive soil analysis including pH, nutrients, and moisture content evaluation.",
    gradient: "gradient-earth"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Live market prices and demand forecasting to maximize profitability and reduce losses.",
    gradient: "gradient-hero"
  },
  {
    icon: Shield,
    title: "Disease Prevention",
    description: "Early warning systems for pest and disease detection with preventive care recommendations.",
    gradient: "gradient-primary"
  },
  {
    icon: Calculator,
    title: "Yield Prediction",
    description: "Accurate crop yield forecasting and expected profit calculations for better planning.",
    gradient: "gradient-success"
  },
  {
    icon: Map,
    title: "Geographic Optimization",
    description: "Location-specific recommendations tailored to Jharkhand's diverse micro-climates and soil types.",
    gradient: "gradient-earth"
  },
  {
    icon: Smartphone,
    title: "Mobile Accessibility",
    description: "User-friendly mobile interface designed for farmers with multilingual support and offline capabilities.",
    gradient: "gradient-hero"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Intelligent Farming
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-driven tools designed specifically for Jharkhand's farmers to increase productivity, reduce risks, and maximize profits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden shadow-soft hover:shadow-primary transition-smooth group cursor-pointer"
            >
              <CardHeader className="space-y-4">
                <div className={`p-3 rounded-full bg-${feature.gradient} w-fit`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;