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

type InitialValues = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>> | null;
  user: any;
  setUser: Dispatch<SetStateAction<User | null | undefined>> | null;
  login: ((password: string) => Promise<UserCredential>) | null;
  logout: (() => void) | null
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
  logout: null
};

export const StoreContext = createContext(initialValues);

export const StoreContextProvider = ({ children }: { children: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true)

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
    const email = "crinova@gmail.com";
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <StoreContext.Provider value={{ isOpen, setIsOpen, user, setUser, login, logout }}>
      {loading ? <Loader /> : user ? children : <LoginForm />}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
