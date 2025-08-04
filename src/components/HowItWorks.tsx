import { Truck, Package, Home } from "lucide-react";

const steps = [
  {
    icon: Home,
    title: "Farm Fresh",
    description: "Our partner farmers collect fresh milk and produce from their farms every morning",
    step: "01"
  },
  {
    icon: Package,
    title: "Packed Clean",
    description: "Products are carefully packaged maintaining hygiene and freshness standards",
    step: "02"
  },
  {
    icon: Truck,
    title: "Delivered Fast",
    description: "Direct delivery to your doorstep within 162 minutes of harvesting",
    step: "03"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From farm to your table in just 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-fresh-green to-border w-1/2"></div>
                  </div>
                )}
                
                <div className="relative z-10 bg-background">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-fresh-green text-white rounded-full text-sm font-bold mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-fresh-green-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-fresh-green" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;