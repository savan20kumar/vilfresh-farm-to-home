import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dairyImage from "@/assets/dairy-products.jpg";
import groceryImage from "@/assets/grocery-basket.jpg";

const categories = [
  {
    title: "Fresh Milk & Dairy",
    description: "Pure milk, curd, paneer, and ghee straight from village farms",
    image: dairyImage,
    items: "12+ products",
    fromVillage: "Kanhangad Village"
  },
  {
    title: "Organic Groceries", 
    description: "Chemical-free vegetables, grains, and pulses grown with love",
    image: groceryImage,
    items: "50+ products",
    fromVillage: "Devanahalli Village"
  },
  {
    title: "Homemade Delights",
    description: "Traditional pickles, snacks, and sweets by village homepreneurs",
    image: dairyImage, // Will replace with appropriate image
    items: "25+ products", 
    fromVillage: "Bannerghatta Village"
  },
  {
    title: "Farm Fresh Eggs",
    description: "Free-range eggs from happy chickens in rural backyards", 
    image: groceryImage, // Will replace with appropriate image
    items: "5+ varieties",
    fromVillage: "Mysore Village"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fresh Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of fresh, organic products sourced directly from rural India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-fresh-green text-white px-2 py-1 rounded-full text-xs font-medium">
                    {category.items}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-fresh-green bg-fresh-green/10 px-2 py-1 rounded">
                      From {category.fromVillage}
                    </span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-fresh-green group-hover:text-white group-hover:border-fresh-green transition-colors">
                    View Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="fresh" size="lg">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;