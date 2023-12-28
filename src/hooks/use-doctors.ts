"use client";

import { useEffect } from "react";
import { firestore } from "@firebase/.";
import { collection, getDocs } from "firebase/firestore";
import { Doctor } from "@schema/.";
import { useStore } from "@context/context";

export const useDoctors = () => {
  const { setDoctors } = useStore();

  const fetchDoctors = async () => {
    await getDocs(collection(firestore, "doctors")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDoctors?.(newData as Doctor[]);
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchDoctors();
    }
  }, []);

  return {
    fetchDoctors,
  };
};
