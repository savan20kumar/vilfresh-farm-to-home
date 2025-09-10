import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ShoppingCart, Package } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import CartButton from "@/components/CartButton";

interface Product {
  id: string;
  name: string;
  tamilName: string;
  category: string;
  unit: string;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  weight?: string;
  special?: string;
}

const Products = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addToCart } = useCart();
  const { toast } = useToast();

  const updateQuantity = (productId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity === 0) {
      toast({
        title: "Select Quantity",
        description: "Please select a quantity before adding to cart",
        variant: "destructive"
      });
      return;
    }

    addToCart({
      id: product.id,
      nameEn: product.name,
      nameTa: product.tamilName,
      category: product.category,
      unit: product.unit,
      minPrice: product.minPrice,
      maxPrice: product.maxPrice
    }, quantity);

    // Reset quantity after adding to cart
    setQuantities(prev => ({
      ...prev,
      [product.id]: 0
    }));

    toast({
      title: "Added to Cart! 🛒",
      description: `${quantity}x ${product.name} added to your cart`,
    });
  };

  const products: Product[] = [
    {
      id: "horse-gram",
      name: "Organic Horse Gram",
      tamilName: "கொள்ளு",
      category: "Pulses",
      unit: "0.5kg",
      priceRange: "₹68-₹70",
      minPrice: 68,
      maxPrice: 70
    },
    {
      id: "papaya",
      name: "Organic Papaya",
      tamilName: "பப்பாளி",
      category: "Fruits",
      unit: "1.4-1.8kg",
      priceRange: "₹103-₹105",
      minPrice: 103,
      maxPrice: 105
    },
    {
      id: "coconut-sprouts",
      name: "Organic Coconut Sprouts",
      tamilName: "தேங்காய்பூ",
      category: "Vegetables",
      unit: "300-450g",
      priceRange: "₹63-₹65",
      minPrice: 63,
      maxPrice: 65
    },
    {
      id: "jaggery-balls",
      name: "Organic Jaggery Balls",
      tamilName: "மண்டை வெல்லம்",
      category: "Sweeteners",
      unit: "400-500g",
      priceRange: "₹47-₹49",
      minPrice: 47,
      maxPrice: 49,
      special: "Homemade"
    },
    {
      id: "elephant-yam",
      name: "Organic Elephant Yam",
      tamilName: "சேனைக்கிழங்கு",
      category: "Vegetables",
      unit: "300-400g",
      priceRange: "₹38-₹40",
      minPrice: 38,
      maxPrice: 40
    },
    {
      id: "ginger",
      name: "Organic Ginger",
      tamilName: "இஞ்சி",
      category: "Spices",
      unit: "250g",
      priceRange: "₹30-₹32",
      minPrice: 30,
      maxPrice: 32
    },
    {
      id: "sathukudi",
      name: "Organic Sathukudi",
      tamilName: "சாத்துக்குடி",
      category: "Fruits",
      unit: "0.5kg",
      priceRange: "₹63-₹65",
      minPrice: 63,
      maxPrice: 65
    },
    {
      id: "guava",
      name: "Organic Guava",
      tamilName: "கொய்யா",
      category: "Fruits",
      unit: "0.5kg",
      priceRange: "₹58-₹60",
      minPrice: 58,
      maxPrice: 60
    },
    {
      id: "capsicum",
      name: "Organic Capsicum",
      tamilName: "குடைமிளகாய்",
      category: "Vegetables",
      unit: "200-250g",
      priceRange: "₹18-₹20",
      minPrice: 18,
      maxPrice: 20
    },
    {
      id: "cassava",
      name: "Cassava Tuber",
      tamilName: "மரவள்ளி கிழங்கு",
      category: "Vegetables",
      unit: "0.5kg",
      priceRange: "₹33-₹35",
      minPrice: 33,
      maxPrice: 35
    },
    {
      id: "coconut",
      name: "Organic Coconut",
      tamilName: "தேங்காய்",
      category: "Fruits",
      unit: "1 piece (300-450g)",
      priceRange: "₹38-₹40",
      minPrice: 38,
      maxPrice: 40
    },
    {
      id: "banana-rastali",
      name: "Organic Banana Rastali",
      tamilName: "ரஸ்தாளி",
      category: "Fruits",
      unit: "500g",
      priceRange: "₹45-₹47",
      minPrice: 45,
      maxPrice: 47
    },
    {
      id: "ash-gourd",
      name: "Organic Ash Gourd",
      tamilName: "வெள்ளை பூசணி",
      category: "Vegetables",
      unit: "0.5kg",
      priceRange: "₹18-₹20",
      minPrice: 18,
      maxPrice: 20
    },
    {
      id: "snake-gourd",
      name: "Organic Snake Gourd",
      tamilName: "புடலங்காய்",
      category: "Vegetables",
      unit: "250-350g",
      priceRange: "₹29-₹31",
      minPrice: 29,
      maxPrice: 31
    },
    {
      id: "big-onion",
      name: "Organic Big Onion",
      tamilName: "பெரிய வெங்காயம்",
      category: "Vegetables",
      unit: "0.5kg",
      priceRange: "₹35-₹37",
      minPrice: 35,
      maxPrice: 37
    },
    {
      id: "small-onion",
      name: "Organic Small Onion",
      tamilName: "சின்ன வெங்காயம்",
      category: "Vegetables",
      unit: "0.5kg",
      priceRange: "₹46-₹48",
      minPrice: 46,
      maxPrice: 48
    },
    {
      id: "banana-stem",
      name: "Organic Banana Stem",
      tamilName: "வாழைத்தண்டு",
      category: "Vegetables",
      unit: "1 unit",
      priceRange: "₹23-₹25",
      minPrice: 23,
      maxPrice: 25
    },
    {
      id: "cabbage",
      name: "Organic Green Cabbage",
      tamilName: "பச்சை முட்டைக்கோஸ்",
      category: "Vegetables",
      unit: "300-400g",
      priceRange: "₹30-₹32",
      minPrice: 30,
      maxPrice: 32
    },
    {
      id: "sweet-potato",
      name: "Organic Sweet Potato",
      tamilName: "சர்க்கரை வள்ளிக்கிழங்கு",
      category: "Vegetables",
      unit: "0.5kg",
      priceRange: "₹52-₹54",
      minPrice: 52,
      maxPrice: 54
    },
    {
      id: "banana-flower",
      name: "Organic Banana Flower",
      tamilName: "வாழைப்பூ",
      category: "Vegetables",
      unit: "1 unit",
      priceRange: "₹23-₹25",
      minPrice: 23,
      maxPrice: 25
    },
    {
      id: "agathi-poo",
      name: "Organic Agathi Poo",
      tamilName: "அகத்தி பூ",
      category: "Vegetables",
      unit: "200g",
      priceRange: "₹45-₹47",
      minPrice: 45,
      maxPrice: 47
    },
    {
      id: "murungai-poo",
      name: "Organic Murungai Poo",
      tamilName: "முருங்கைப் பூ",
      category: "Vegetables",
      unit: "100g",
      priceRange: "₹47-₹49",
      minPrice: 47,
      maxPrice: 49
    },
    {
      id: "perandai",
      name: "Organic Perandai",
      tamilName: "பிரண்டை",
      category: "Vegetables",
      unit: "200g",
      priceRange: "₹36-₹38",
      minPrice: 36,
      maxPrice: 38
    },
    {
      id: "paneer",
      name: "Home Made Fresh Paneer",
      tamilName: "பன்னீர்",
      category: "Dairy",
      unit: "200g",
      priceRange: "₹123-₹125",
      minPrice: 123,
      maxPrice: 125,
      special: "Homemade"
    },
    {
      id: "lemon",
      name: "Organic Lemon",
      tamilName: "எலுமிச்சை",
      category: "Fruits",
      unit: "5 pieces",
      priceRange: "₹28-₹30",
      minPrice: 28,
      maxPrice: 30
    },
    {
      id: "carrot",
      name: "Organic Carrot",
      tamilName: "கேரட்",
      category: "Vegetables",
      unit: "250g",
      priceRange: "₹32-₹34",
      minPrice: 32,
      maxPrice: 34
    },
    {
      id: "tomato",
      name: "Organic Tomato",
      tamilName: "தக்காளி",
      category: "Vegetables",
      unit: "0.5kg",
      priceRange: "₹30-₹32",
      minPrice: 30,
      maxPrice: 32
    },
    {
      id: "gooseberry",
      name: "Organic Country Gooseberry",
      tamilName: "நெல்லிக்காய்",
      category: "Fruits",
      unit: "5 pieces",
      priceRange: "₹23-₹25",
      minPrice: 23,
      maxPrice: 25
    },
    {
      id: "potato",
      name: "Organic Potato (Big)",
      tamilName: "உருளைக்கிழங்கு",
      category: "Vegetables",
      unit: "500g",
      priceRange: "₹43-₹45",
      minPrice: 43,
      maxPrice: 45
    },
    {
      id: "country-eggs",
      name: "Free Range Country Eggs",
      tamilName: "நாட்டு கோழி முட்டை",
      category: "Eggs",
      unit: "6 per box",
      priceRange: "₹114-₹116",
      minPrice: 114,
      maxPrice: 116,
      special: "Free Range"
    },
    {
      id: "country-eggs-dozen",
      name: "Free Range Country Eggs (Dozen)",
      tamilName: "நாட்டு கோழி முட்டை",
      category: "Eggs",
      unit: "12 pieces",
      priceRange: "₹228-₹230",
      minPrice: 228,
      maxPrice: 230,
      special: "Free Range"
    },
    {
      id: "palak-keerai",
      name: "Organic Palak Keerai",
      tamilName: "பாலக் கீரை",
      category: "Greens",
      unit: "1 bunch",
      priceRange: "₹26-₹28",
      minPrice: 26,
      maxPrice: 28
    },
    {
      id: "vendaya-keerai",
      name: "Organic Vendaya Keerai",
      tamilName: "வெந்தய கீரை",
      category: "Greens",
      unit: "1 bunch",
      priceRange: "₹27-₹29",
      minPrice: 27,
      maxPrice: 29
    },
    {
      id: "agathi-keerai",
      name: "Organic Agathi Keerai",
      tamilName: "அகத்தி கீரை",
      category: "Greens",
      unit: "1 bunch",
      priceRange: "₹24-₹26",
      minPrice: 24,
      maxPrice: 26
    },
    {
      id: "mushroom",
      name: "Farm Fresh Ooty Button Mushroom",
      tamilName: "காளான்",
      category: "Vegetables",
      unit: "200g",
      priceRange: "₹53-₹55",
      minPrice: 53,
      maxPrice: 55,
      special: "Farm Fresh"
    }
  ];

  const categories = ["All", "Vegetables", "Fruits", "Greens", "Eggs", "Dairy", "Spices", "Pulses", "Sweeteners"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Vegetables": "bg-success text-success-foreground",
      "Fruits": "bg-warning text-warning-foreground", 
      "Greens": "bg-earth text-earth-foreground",
      "Eggs": "bg-accent text-accent-foreground",
      "Dairy": "bg-primary text-primary-foreground",
      "Spices": "bg-destructive text-destructive-foreground",
      "Pulses": "bg-secondary text-secondary-foreground",
      "Sweeteners": "bg-muted text-muted-foreground"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-6 bg-gradient-to-r from-success to-earth">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                <a href="/">← Home</a>
              </Button>
            </div>
            <CartButton />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Fresh Organic Products
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Farm-fresh organic produce delivered directly from our partnered farmers to your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="h-10"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Package className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                    {product.special && (
                      <Badge className="bg-accent text-accent-foreground">
                        {product.special}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-card-foreground line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tamilName}</p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{product.unit}</span>
                    <span className="font-medium text-success">{product.priceRange}</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center bg-muted rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => updateQuantity(product.id, -1)}
                        disabled={!quantities[product.id]}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                        {quantities[product.id] || 0}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleAddToCart(product)}
                      disabled={!quantities[product.id]}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    📦 Ships within 2-3 days
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Get VilFreshed! Download Our App
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Order fresh organic products with ease using our mobile app
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Download for iOS
            </Button>
            <Button size="lg" variant="secondary">
              Download for Android
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;