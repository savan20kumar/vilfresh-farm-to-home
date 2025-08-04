import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Bell, MapPin, Clock, Star, Download } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Freshness Alerts",
    description: "Get notified when your milk is collected from the farm"
  },
  {
    icon: MapPin,
    title: "Track Your Farmer",
    description: "Know exactly which village your food comes from"
  },
  {
    icon: Clock,
    title: "Schedule Deliveries",
    description: "Set your preferred delivery times and frequency"
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Help us maintain quality and support farmers"
  }
];

const AppSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-fresh-green-light to-earth-brown-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get the VilFresh App</h2>
              <p className="text-xl text-muted-foreground">
                Experience the easiest way to get fresh, organic food delivered to your door. 
                Track your orders, connect with farmers, and support rural communities.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-fresh-green rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="fresh" size="lg" className="text-base px-8">
                <Download className="w-5 h-5 mr-3" />
                Download for Android
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                <Download className="w-5 h-5 mr-3" />
                Download for iOS
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-fresh-green">4.8★</div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fresh-green">10K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                {/* App Screenshot Mockup */}
                <div className="bg-fresh-green h-20 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-fresh-green font-bold">V</span>
                    </div>
                    <span className="text-white text-lg font-bold">VilFresh</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <Card className="border-0 bg-fresh-green-light/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-fresh-green rounded-full flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Fresh Milk Ready!</div>
                          <div className="text-sm text-muted-foreground">From Kanhangad Village</div>
                        </div>
                        <div className="text-fresh-green font-bold">₹45</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-earth-brown-light/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Delivery in 2h 42m</div>
                          <div className="text-sm text-muted-foreground">Track your order</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;