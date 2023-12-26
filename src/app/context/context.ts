'use client'

import { Dispatch, SetStateAction, createContext } from "react";

type InitialValues = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>> | null
}

const initialValues: InitialValues = {
    isOpen: false,
    setIsOpen: null
}

export const StoreContext = createContext(initialValues);
