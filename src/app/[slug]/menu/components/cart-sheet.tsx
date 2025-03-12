import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CartContext } from "../context/cart";
import { useContext } from "react";
import CartItem from "./cart-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (<Sheet open={isOpen} onOpenChange={toggleCart}>
    <SheetContent className="w-[80%]">
      <SheetHeader>
        <SheetTitle className="text-left">Sacola</SheetTitle>
        <SheetDescription>
        </SheetDescription>
      </SheetHeader>
      <div className="py-5 gap-2 flex flex-col">
        {products.map((product, i) => <CartItem item={product} key={i} />)}
      </div>
    </SheetContent>
  </Sheet>);
}

export default CartSheet;