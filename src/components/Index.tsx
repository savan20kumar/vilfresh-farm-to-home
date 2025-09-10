import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import farmHero from "@/assets/farm-hero.jpg";

const Index = () => {
  const teamMembers = [
    {
      name: "Selvakumar Varadharajan",
      title: "Chief Executive Layman",
      education: "Master Of Finance & Control from Bharathiar University & M.Phil in Management from Periyar University",
      experience: "Co-founder BSBS Business Academy, Bangalore. Decade of Experience with ICFAI, Accenture & HDFC. Have transformed the lives of 2000+ graduates and post graduates as a Social Activist.",
      description: "Mothered the idea of Laymenism. Running from the front as a 'Chief Executive Layman'."
    },
    {
      name: "Sharmila Selvakumar",
      title: "Co-Founder",
      education: "Masters in Business Administration from ICFAI, Bangalore",
      experience: "SPOC – Ac Nielson, USA. Business Analyst – TCS, Bangalore. Research Analyst – Empower Research (a Genpact co.)",
      description: "Fathered the idea of Laymenism. An accidental entrepreneur thriving hard to justify the divine opportunity."
    },
    {
      name: "Umabharathy Natesan",
      title: "Technology Head",
      education: "M.S in Computer Science from California State University",
      experience: "Decade of experience with Oracle (USA & India)",
      description: "Tech transformation agent at Laymen. Leading the tech transformation and the team building initiatives."
    },
    {
      name: "Duraiikkannan Govindaraj",
      title: "Operations Head",
      education: "Papers missing as it was in 1970s",
      experience: "Worked with Tajmahal Hotel Mumbai & Taj Coramandal Chennai for a decade and then managed his own properties in Ooty for two decades",
      description: "Heading the operations and team management. Withholding the true sense of laymenism in every step."
    }
  ];

  const advisors = [
    {
      name: "Chinnu Senthilkumar",
      title: "Partner CTO – Exfinity Ventures",
      description: "Founder CEO – Sandisk India. Two decades of experience in the USA"
    },
    {
      name: "Deepak Natraj",
      title: "Ex. MD – Aarin Capital",
      description: "Ex. International M&A Head – Infosys. Two decades of experience in the USA"
    },
    {
      name: "Venkat Rangam",
      title: "Finance & Investment Banking Professional",
      description: "Ex.CFO-TVS Logistics & worked with Aircel, Airtel, Ford, Tech Mahindra & RPG over two decades"
    },
    {
      name: "Jayamani Manickam",
      title: "Technology Advisor",
      description: "Two decades of work exposure in the USA with leading companies like Intel, Siemens & LSI"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${farmHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">From Village to Your Kitchen</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            VilFresh
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Connecting rural farmers directly with urban kitchens, ensuring farmers get better returns while families get genuinely fresh products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg">
                Shop Products
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Get VilFreshed!
            </Button>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <Card className="p-8 md:p-12 bg-card shadow-card">
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                "My little one was 2.5 years old then. My wife was breaking her head to narrow down on the right substitute for mother's feed. She was terribly upset with the kind of agro products that were available in urban India."
              </p>
              
              <p className="text-lg leading-relaxed text-card-foreground">
                This personal challenge led to a mission: bringing village fresh agro products to urban kitchens. With 20 years spent on a farm as a child and 5 years as a rural youth, combined with 10 years of urban exposure, our founder recognized the disconnect between rural producers and urban consumers.
              </p>

              <p className="text-lg leading-relaxed text-card-foreground">
                The solution focuses on channeling the lion's share of consumers' price back to the rural economy. Agriculture had become unviable for many farmers due to lack of market connect and inefficient supply chains - a problem that cost our founder's family their land to fund education.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Business Model</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An alternate distribution channel that delivers better returns to farmers while ensuring quality for consumers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card hover:shadow-hover transition-shadow duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥛</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Fresh Milk Collection</h3>
                <p className="text-muted-foreground">
                  Direct collection from farmers, delivered to cities in less than 162 minutes with foolproof technology ensuring zero water addition
                </p>
                <Badge className="bg-success text-success-foreground">25-35% Better Returns</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-shadow duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥕</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Fresh Produce</h3>
                <p className="text-muted-foreground">
                  Same distribution network for fruits & vegetables, ensuring farmers receive substantially better returns
                </p>
                <Badge className="bg-earth text-earth-foreground">40-60% Better Returns</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-shadow duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Agro Inputs</h3>
                <p className="text-muted-foreground">
                  Supply agricultural inputs at highly competitive prices, significantly reducing farming costs for better sustainability
                </p>
                <Badge className="bg-accent text-accent-foreground">Reduced Costs</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              The passionate team behind VilFresh's mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.title}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Education:</h4>
                      <p className="text-muted-foreground text-sm">{member.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Experience:</h4>
                      <p className="text-muted-foreground text-sm">{member.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Role at VilFresh:</h4>
                      <p className="text-card-foreground text-sm">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Advisory Board</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Experienced professionals guiding our growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={index} className="p-4 shadow-card hover:shadow-hover transition-shadow duration-300">
                <CardContent className="text-center space-y-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto text-accent-foreground font-bold">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-card-foreground">{advisor.name}</h3>
                  <p className="text-primary text-sm font-medium">{advisor.title}</p>
                  <p className="text-muted-foreground text-xs">{advisor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-success">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Get VilFreshed! Install the App
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of families enjoying fresh, authentic products directly from village farmers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-cream px-8 py-4 text-lg">
              Download for iOS
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-cream px-8 py-4 text-lg">
              Download for Android  
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
