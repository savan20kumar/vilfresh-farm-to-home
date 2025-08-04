import { Button } from "@/components/ui/button";
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fresh-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-fresh-green font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold">VilFresh</span>
            </div>
            
            <p className="text-fresh-green-light max-w-md leading-relaxed">
              Connecting rural farmers with urban families. Fresh, organic, and delivered 
              in 162 minutes while empowering village communities across India.
            </p>

            <div className="flex items-center space-x-2 text-fresh-green-light">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made in Rural India</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-fresh-green-light">
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Farmers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-fresh-green-light">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@vilfresh.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rural Innovation Hub<br />Bangalore, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-fresh-green-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-fresh-green-light text-sm">
              © 2024 VilFresh. All rights reserved. | Empowering Rural India
            </div>
            
            <div className="flex space-x-6 text-sm text-fresh-green-light">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;