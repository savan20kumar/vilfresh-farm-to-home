import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingCart, MapPin, Clock, Phone, Package, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface CartItem {
  id: string;
  nameEn: string;
  nameTa: string;
  category: string;
  unit: string;
  minPrice: number;
  maxPrice: number;
  quantity: number;
}

const Orders = () => {
  const { toast } = useToast();
  const { items: cartItems, updateQuantity, removeItem, getTotalPrice } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    deliveryNotes: ''
  });

  const handleUpdateQuantity = (id: string, change: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + change);
    }
  };

  const handleRemoveItem = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    removeItem(id);
    if (item) {
      toast({
        title: "Item Removed",
        description: `${item.nameEn} has been removed from your cart`,
      });
    }
  };

  const handlePlaceOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Order Placed Successfully!",
      description: "Your order will be delivered within 24-48 hours",
    });
  };

  const deliveryFee = 30;
  const subtotal = getTotalPrice();
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-success/5">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some fresh organic products to get started</p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-success/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Order</h1>
          <p className="text-muted-foreground">Review your items and complete your order</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Cart Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-lg border">
                       <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg">
                         <Package className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                           <div>
                             <h3 className="font-medium text-foreground">{item.nameEn}</h3>
                             <p className="text-sm text-muted-foreground">{item.nameTa}</p>
                             <div className="flex items-center gap-2 mt-1">
                               <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                               <span className="text-xs text-muted-foreground">{item.unit}</span>
                             </div>
                             <p className="text-sm font-medium text-success mt-1">
                               ₹{item.minPrice}-₹{item.maxPrice}
                             </p>
                           </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                      placeholder="Enter your city"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      placeholder="Enter your complete delivery address"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input
                      id="pincode"
                      value={customerInfo.pincode}
                      onChange={(e) => setCustomerInfo({...customerInfo, pincode: e.target.value})}
                      placeholder="Enter PIN code"
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryNotes">Delivery Notes</Label>
                    <Input
                      id="deliveryNotes"
                      value={customerInfo.deliveryNotes}
                      onChange={(e) => setCustomerInfo({...customerInfo, deliveryNotes: e.target.value})}
                      placeholder="Any special instructions"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <Separator />
                   <div className="flex justify-between font-bold text-lg">
                     <span>Total</span>
                     <span className="text-success">₹{total.toFixed(2)}</span>
                   </div>
                </div>

                 <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                   <div className="flex items-center gap-2 text-sm text-foreground mb-2">
                     <Clock className="h-4 w-4" />
                     <span className="font-medium">Delivery Information</span>
                   </div>
                   <p className="text-sm text-muted-foreground mb-1">
                     Expected delivery: 24-48 hours
                   </p>
                   <p className="text-sm text-muted-foreground">
                     Fresh from farm to your doorstep
                   </p>
                 </div>

                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">Need Help?</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Call us at +91 98765 43210
                  </p>
                </div>

                 <Button 
                   className="w-full mt-6 bg-success hover:bg-success/90"
                   onClick={handlePlaceOrder}
                 >
                   Place Order
                 </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Cash on Delivery available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;