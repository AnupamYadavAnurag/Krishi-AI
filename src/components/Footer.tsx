import { Sprout, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-earth text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/20 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Krishi AI</h3>
                <p className="text-sm text-white/80">Smart Farming Assistant</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering Jharkhand farmers with AI-driven crop recommendations and intelligent agricultural insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-white transition-smooth">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-smooth">Features</a></li>
              <li><a href="#recommendations" className="hover:text-white transition-smooth">Get Recommendations</a></li>
              <li><a href="#about" className="hover:text-white transition-smooth">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Crop Recommendations</li>
              <li>Soil Analysis</li>
              <li>Weather Forecasting</li>
              <li>Market Price Tracking</li>
              <li>Yield Prediction</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@krishiai.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Government of India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
          <p>&copy; 2025 Krishi AI - Government of India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;