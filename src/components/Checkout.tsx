import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, CreditCard, Smartphone, Banknote, Package, ArrowLeft, Lock } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    deliveryNotes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [savedAddress, setSavedAddress] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const deliveryFee = 30;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address || !customerInfo.city || !customerInfo.pincode) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!termsAccepted) {
      toast({
        title: "Terms & Conditions",
        description: "Please accept the terms and conditions to proceed",
        variant: "destructive"
      });
      return;
    }

    // Simulate order placement
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order Placed Successfully! 🎉",
        description: `Order will be delivered within 24-48 hours. Payment method: ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}`,
      });
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-success/5">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <Package className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">No items to checkout</h2>
            <p className="text-muted-foreground mb-6">Add some products to your cart first</p>
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
            <Link to="/cart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">Secure Checkout</h1>
          <p className="text-muted-foreground">Complete your order with secure payment options</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Delivery Information */}
            <Card>
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
                      className="mt-1"
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
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="Enter your email (optional)"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                      placeholder="Enter your city"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      placeholder="House No., Street, Area, Landmark"
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={customerInfo.state}
                      onChange={(e) => setCustomerInfo({...customerInfo, state: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code *</Label>
                    <Input
                      id="pincode"
                      value={customerInfo.pincode}
                      onChange={(e) => setCustomerInfo({...customerInfo, pincode: e.target.value})}
                      placeholder="Enter PIN code"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="deliveryNotes">Delivery Instructions</Label>
                    <Input
                      id="deliveryNotes"
                      value={customerInfo.deliveryNotes}
                      onChange={(e) => setCustomerInfo({...customerInfo, deliveryNotes: e.target.value})}
                      placeholder="Any special delivery instructions (optional)"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="mt-4 flex items-center space-x-2">
                  <Checkbox 
                    id="saveAddress" 
                    checked={savedAddress}
                    onCheckedChange={(checked) => setSavedAddress(checked === true)}
                  />
                  <Label htmlFor="saveAddress" className="text-sm text-muted-foreground">
                    Save this address for future orders
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 rounded-lg border bg-card">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center gap-3 cursor-pointer flex-1">
                      <Banknote className="h-5 w-5 text-success" />
                      <div>
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-muted-foreground">Pay when you receive your order</div>
                      </div>
                      <Badge className="bg-success/10 text-success border-success">Recommended</Badge>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-lg border bg-card opacity-50">
                    <RadioGroupItem value="online" id="online" disabled />
                    <Label htmlFor="online" className="flex items-center gap-3 cursor-pointer flex-1">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Online Payment</div>
                        <div className="text-sm text-muted-foreground">UPI, Cards, Net Banking (Coming Soon)</div>
                      </div>
                      <Badge variant="secondary">Coming Soon</Badge>
                    </Label>
                  </div>
                </RadioGroup>

                <div className="mt-4 flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I accept the <span className="text-primary cursor-pointer hover:underline">Terms & Conditions</span> and 
                    <span className="text-primary cursor-pointer hover:underline"> Privacy Policy</span>
                  </Label>
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
                {/* Items */}
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <div className="font-medium">{item.nameEn}</div>
                        <div className="text-muted-foreground">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right">
                        ₹{((item.minPrice + item.maxPrice) / 2 * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Pricing */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({items.length} items)</span>
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

                <div className="mt-6 p-4 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-success mb-2">
                    <Lock className="h-4 w-4" />
                    <span className="font-medium">Secure Checkout</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your information is protected with end-to-end encryption
                  </p>
                </div>

                <Button 
                  className="w-full mt-6 bg-success hover:bg-success/90"
                  onClick={handlePlaceOrder}
                  disabled={!termsAccepted}
                >
                  Place Order - ₹{total.toFixed(2)}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Expected delivery: 24-48 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;