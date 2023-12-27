"use client";

import { useEffect, useState } from "react";
import { firestore } from "@firebase/.";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "@components/ProductCard/ProductCard";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    await getDocs(collection(firestore, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(newData as Product[]);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchProducts();
    }
  }, []);

  return {
    products,
    fetchProducts,
  };
};
