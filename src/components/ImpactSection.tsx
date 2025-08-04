import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Heart, Award } from "lucide-react";
import farmerImage from "@/assets/farmer-hands-products.jpg";

const stats = [
  {
    icon: Users,
    number: "1,000+",
    label: "Farmers Empowered",
    description: "Rural families earning sustainable income"
  },
  {
    icon: TrendingUp, 
    number: "₹5,000",
    label: "Avg. Monthly Increase",
    description: "Additional income per farmer family"
  },
  {
    icon: Heart,
    number: "50,000+",
    label: "Families Served",
    description: "Urban households getting fresh food"
  },
  {
    icon: Award,
    number: "100%",
    label: "Chemical Free",
    description: "Certified organic produce"
  }
];

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Dairy Farmer, Kanhangad",
    quote: "VilFresh changed my life. My monthly income increased by ₹8,000, and I can now send my children to better schools.",
    image: farmerImage
  },
  {
    name: "Sunita Devi", 
    role: "Homepreneur, Devanahalli",
    quote: "Making pickles and snacks for VilFresh gives me independence. I earn ₹12,000 monthly from home.",
    image: farmerImage
  }
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Empowering Rural India</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every purchase you make creates a positive impact on rural communities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-0 bg-fresh-green-light/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-fresh-green mb-1">{stat.number}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-fresh-green to-earth-brown rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
          <p className="text-xl mb-8 opacity-90">
            Support rural communities while getting the freshest produce for your family
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-fresh-green hover:bg-cream">
            Start Supporting Farmers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;