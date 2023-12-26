"use client";

import { useState } from "react";
import { StoreContext } from "./context";

export const StoreProvider = ({ children }: { children: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <StoreContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </StoreContext.Provider>
  );
};
