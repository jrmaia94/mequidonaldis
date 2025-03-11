import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CartContext } from "../context/cart";
import { useContext } from "react";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (<Sheet open={isOpen} onOpenChange={toggleCart}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action can not be undone. This will permanently delete your
          account and remove your data from our servers..
        </SheetDescription>
      </SheetHeader>
      {products.map((product, i) => <h1 key={i}>{product.name}</h1>)}
    </SheetContent>
  </Sheet>);
}

export default CartSheet;