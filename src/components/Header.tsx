import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-fresh-green rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold text-fresh-green">VilFresh</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-fresh-green transition-colors">Home</a>
            <a href="/products" className="text-foreground hover:text-fresh-green transition-colors">Products</a>
            <a href="#impact" className="text-foreground hover:text-fresh-green transition-colors">Impact</a>
            <a href="#about" className="text-foreground hover:text-fresh-green transition-colors">About</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Smartphone className="w-4 h-4 mr-2" />
              Download App
            </Button>
            <Button variant="fresh" size="sm">
              Subscribe Now
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;