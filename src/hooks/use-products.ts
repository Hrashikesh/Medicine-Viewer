"use client";

import { useEffect } from "react";
import { firestore } from "@firebase/.";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "@schema/.";
import { useStore } from "@context/context";

export const useProducts = () => {
  const { setProducts } = useStore();

  const fetchProducts = async () => {
    await getDocs(collection(firestore, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts?.(newData as Product[]);
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchProducts();
    }
  }, []);

  return {
    fetchProducts,
  };
};
