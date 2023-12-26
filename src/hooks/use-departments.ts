"use client";

import { useEffect, useState } from "react";
import { firestore } from "@components/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Department } from "@components/Department/Department";

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  const fetchDepartments = async () => {
    await getDocs(collection(firestore, "departments")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDepartments(newData as Department[]);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchDepartments();
    }
  }, []);

  return {
    departments,
    fetchDepartments,
  };
};
