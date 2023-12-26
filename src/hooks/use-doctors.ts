"use client";

import { useEffect, useState } from "react";
import { firestore } from "@components/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Doctor } from "@components/Doctor/Doctor";

export const useDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const fetchDoctors = async () => {
    await getDocs(collection(firestore, "doctors")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDoctors(newData as Doctor[]);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchDoctors();
    }
  }, []);

  return {
    doctors,
    fetchDoctors,
  };
};
