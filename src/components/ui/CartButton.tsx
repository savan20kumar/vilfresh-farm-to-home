import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Button asChild variant="outline" className="relative">
      <Link to="/cart">
        <ShoppingCart className="h-4 w-4 mr-2" />
        Cart
        {totalItems > 0 && (
          <Badge 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-success text-success-foreground"
          >
            {totalItems}
          </Badge>
        )}
      </Link>
    </Button>
  );
};

export default CartButton;