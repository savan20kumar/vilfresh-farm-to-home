import { Button } from "@/components/ui/button";
import { Play, Smartphone, Clock, Leaf, Heart } from "lucide-react";
import heroImage from "@/assets/hero-milk-village.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-fresh-green-light to-cream">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-fresh-green/10 px-4 py-2 rounded-full">
                <Leaf className="w-4 h-4 text-fresh-green" />
                <span className="text-sm font-medium text-fresh-green">Farm Fresh • Chemical Free</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Fresh from 
                <span className="text-fresh-green block">Villages</span>
                to Your Home
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get pure, organic milk, dairy, and groceries delivered in just 162 minutes 
                from rural Indian farms to your doorstep. Supporting farmers, empowering villages.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-fresh-green" />
                <span className="font-semibold">162 min delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-fresh-green" />
                <span className="font-semibold">1000+ farmers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-fresh-green" />
                <span className="font-semibold">100% organic</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="fresh" size="lg" className="text-lg px-8 py-6">
                <Smartphone className="w-5 h-5 mr-3" />
                Download App
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-3" />
                Watch Story
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-fresh-green">50,000+</span> urban families
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Fresh milk from village farm" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-fresh-green rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Next Delivery</h3>
                  <p className="text-sm text-muted-foreground">Fresh milk in 2 hours 42 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;