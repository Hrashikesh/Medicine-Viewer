"use client";

import { useContext, useEffect, useRef } from "react";
import { StoreContext } from "@context/context";
import Link from "next/link";

import cn from "classnames";

export const Sidebar = () => {
  const menu = useRef(null);

  const { isOpen, setIsOpen } = useContext(StoreContext);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const button = document.getElementById("menu-button");

      const handleClickOutside = (event: MouseEvent) => {
        if (
          menu.current &&
          !(menu.current as Element).contains(event.target as Element) &&
          !button?.contains(event.target as Element)
        ) {
          setIsOpen?.(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
    }
  }, []);

  const renderHeading = () => {
    return (
      <div className="flex items-center justify-between">
        <h4 className="p-2 pl-4 font-bold">MENU</h4>
        <button
          className="block w-6 h-6 mr-2"
          onClick={() => setIsOpen?.(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </div>
    );
  };

  const renderLinks = () => {
    return (
      <>
        <Link href="/products">Products</Link>
        <Link href="/list">List</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/doctors">Doctors</Link>
        <Link href="/departments">Departments</Link>
      </>
    );
  };

  return (
    <div
      ref={menu}
      id="sidebar"
      className={cn(
        "w-[200px] block h-screen fixed bg-white top-0 right-0 text-black z-10",
        {
          open: isOpen,
          close: !isOpen,
        }
      )}
    >
      {renderHeading()}
      {renderLinks()}
    </div>
  );
};
