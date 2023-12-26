"use client";

import { useProducts } from "@hooks/use-products";
import { ProductCard } from "@components/ProductCard";

const Product = () => {
  const { products } = useProducts();

  return (
    <div className="p-4 flex flex-wrap gap-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
