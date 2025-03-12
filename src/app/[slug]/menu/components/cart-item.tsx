import Image from "next/image";
import { CartProduct } from "../context/cart";
import { formatCurrency } from "@/helpers/format-currency";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";

interface CartItemProps {
  item: CartProduct
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
          <Image src={item.imageUrl} alt="Foto do produto" fill />
        </div>
        <div className="space-y-1">
          <p className="text-xs max-w-[90%] truncate text-ellipsis">{item.name}</p>
          <p className="text-sm font-semibold">{formatCurrency(item.price)}</p>
          <div className="items-center flex gap-1 text-center">
            <Button className="w-7 h-7 rounded-lg" variant="outline">
              <ChevronLeftIcon />
            </Button>
            <p className="text-xs w-7">{item.quantity}</p>
            <Button className="w-7 h-7 rounded-lg" variant="destructive">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* DIREITA */}
      <Button className="w-7 h-7 rounded-lg" variant="outline">
        <TrashIcon />
      </Button>
    </div>
  );
}

export default CartItem;