"use client";

import { ProductCard } from "@components/ProductCard";
import { useStore } from "@context/context";
import { useProducts } from "@hooks/use-products";

const Product = () => {
  useProducts();
  const { products } = useStore();

  return (
    <div className="p-4 flex flex-wrap gap-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
