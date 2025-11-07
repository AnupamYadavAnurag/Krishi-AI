// Import necessary dependencies
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, MapPin, CloudRain, DollarSign, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; // <-- Add useState and useEffect for number counting

const Hero = () => {
  // A custom component to handle the counting animation
  const Counter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 1500; // Animation duration in milliseconds
      const increment = target / (duration / 10);
      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        if (start > target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 10);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <p className="text-2xl font-bold text-foreground">
        {count}
        {suffix}
      </p>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/20 to-accent/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with Animations */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-slide-in-left">
                <Sprout className="h-4 w-4" />
                Crop recommendations tailored for Indian farmers
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-slide-in-left">
                AI-Powered Crop
                <span className="bg-gradient-hero bg-clip-text text-transparent"> </span>
                Recommendations
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-in-left">
                Maximize your farm's productivity with AI-driven insights...
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link to="/signup">
                <Button variant="hero" size="xl" className="flex-1 sm:flex-none w-full hover:scale-105 transition-transform duration-300">
                  Start Analysis
                </Button>
              </Link>
              <a href="#features">
                <Button variant="outline" size="xl" className="flex-1 sm:flex-none w-full hover:scale-105 transition-transform duration-300">
                  Learn More
                </Button>
              </a>
            </div>

            {/* Key Stats with Animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up">
              <Card className="p-4 text-center shadow-soft hover:shadow-primary transition-smooth hover:scale-105">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-in" />
                <Counter target={85} suffix="%" /> {/* Use the Counter component */}
                <p className="text-sm text-muted-foreground">Yield Increase</p>
              </Card>
              <Card className="p-4 text-center shadow-soft hover:shadow-primary transition-smooth hover:scale-105">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-in" />
                <Counter target={24} />
                <p className="text-sm text-muted-foreground">Districts Covered</p>
              </Card>
              <Card className="p-4 text-center shadow-soft hover:shadow-primary transition-smooth hover:scale-105">
                <CloudRain className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-in" />
                <Counter target={95} suffix="%" />
                <p className="text-sm text-muted-foreground">Weather Accuracy</p>
              </Card>
              <Card className="p-4 text-center shadow-soft hover:shadow-primary transition-smooth hover:scale-105">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-in" />
                <Counter target={60} suffix="%" />
                <p className="text-sm text-muted-foreground">Profit Boost</p>
              </Card>
            </div>
          </div>

          {/* Right Image with Animations */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-primary">
              <img
                src={heroImage}
                alt="Modern farming in Jharkhand with AI technology integration"
                className="w-full h-[600px] object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Card with Animation */}
            <Card className="absolute -bottom-6 -left-6 p-6 bg-card shadow-primary animate-slide-in-bottom">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-success rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Season</p>
                  <p className="text-lg font-semibold text-foreground">+40% Yield</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;