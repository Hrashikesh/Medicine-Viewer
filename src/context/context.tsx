"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from "firebase/auth";
import { auth } from "@firebase/.";
import { LoginForm } from "@components/LoginForm";
import { Loader } from "@components/Loader";
import { Product, Department, Doctor } from '@schema/.'

type InitialValues = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>> | null;
  user: any;
  setUser: Dispatch<SetStateAction<User | null | undefined>> | null;
  login: ((password: string) => Promise<UserCredential>) | null;
  logout: (() => void) | null
  products: Product[] | undefined
  departments: Department[] | undefined
  doctors: Doctor[] | undefined
  setDoctors: Dispatch<SetStateAction<Doctor[] | undefined>> | null
  setDepartments: Dispatch<SetStateAction<Department[] | undefined>> | null
  setProducts: Dispatch<SetStateAction<Product[] | undefined>> | null
};

type User = {
  id?: string;
  email?: string | null;
};

const initialValues: InitialValues = {
  isOpen: false,
  setIsOpen: null,
  user: null,
  setUser: null,
  login: null,
  logout: null,
  products: [],
  departments: [],
  doctors: [],
  setDepartments: null,
  setDoctors: null,
  setProducts: null
};

export const StoreContext = createContext(initialValues);

export const StoreContextProvider = ({ children }: { children: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true)
  const [doctors, setDoctors] = useState<Doctor[]>()
  const [departments, setDepartments] = useState<Department[]>()
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          id: user?.uid,
          email: user?.email,
        });
      } else {
        setUser(null)
      }
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  const login = (password: string) => {
    const email = "cnova@gmail.com";
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <StoreContext.Provider value={{ isOpen, user, products, departments, doctors, setIsOpen, setUser, login, logout, setDepartments, setDoctors, setProducts }}>
      {loading ? <Loader /> : user ? children : <LoginForm />}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
