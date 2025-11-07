import { Button } from "@/components/ui/button";
import { Sprout, Menu, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Logout Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged Out",
        description: "You've been successfully logged out.",
      });
    }
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Krishi AI</h1>
                <p className="text-xs text-muted-foreground">Smart Farming Assistant</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#recommendations" className="text-foreground hover:text-primary transition-smooth">
              Recommendations
            </a>
            {user ? (
              <>
                <a href="#recommendations">
                  <Button variant="hero" size="lg">
                    Get Started
                  </Button>
                </a>
                <Button variant="outline" size="lg" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/signup">
                <Button variant="hero" size="lg">
                  Get Started
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-smooth">
                Features
              </a>
              <a href="#recommendations" className="text-foreground hover:text-primary transition-smooth">
                Recommendations
              </a>
              {user ? (
                <>
                  <a href="#recommendations">
                    <Button variant="hero" size="lg" className="mt-2">
                      Get Started
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="mt-2" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/signup">
                  <Button variant="hero" size="lg" className="mt-2">
                    Get Started
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;