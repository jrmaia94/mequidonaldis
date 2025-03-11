import { Product, Restaurant } from "@prisma/client";
import Image from "next/image";

interface ProductDetailProps {
  restaurant: Pick<Restaurant, "name" | "avatarImageUrl">,
  product: Product
}

const ProductDetail = ({restaurant, product }: ProductDetailProps) => {
  return (
    <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem]">
      <div>
        {/* RESTAURANTE */}
        <div className="flex items-center gap-1 px-5">
          <Image src={restaurant.avatarImageUrl} alt="logo restaurante" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;