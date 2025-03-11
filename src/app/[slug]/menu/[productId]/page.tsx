import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductDetail from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId, slug } = await params;
  
  const product = await db.product.findUnique({
    where: { id: productId }, include: { restaurant: true }
  });
  if (!product) return notFound();

  return (
    <>
      <ProductHeader product={product} />
      <ProductDetail restaurant={product.restaurant} product={product} />
    </>
  )
}

export default ProductPage;