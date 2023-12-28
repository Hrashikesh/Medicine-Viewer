"use client";

import { useEffect } from "react";
import { firestore } from "@firebase/.";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { Department } from "@schema/.";
import { useStore } from "@context/context";

export type DepartmentInput = {
  name: string;
  type: string;
};

export const useDepartments = () => {
  const { setDepartments } = useStore();

  const fetchDepartments = async () => {
    await getDocs(collection(firestore, "departments")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDepartments?.(newData as Department[]);
      }
    );
  };

  const postDepartment = async (data: DepartmentInput) => {
    const departmentsCollection = collection(firestore, "departments");
    const departmentRef = doc(departmentsCollection);

    try {
      await setDoc(departmentRef, data);
      fetchDepartments();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchDepartments();
    }
  }, []);

  return {
    fetchDepartments,
    postDepartment,
  };
};
