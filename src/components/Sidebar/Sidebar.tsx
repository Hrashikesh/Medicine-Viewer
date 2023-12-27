"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@context/context";
import Link from "next/link";
import cn from "classnames";

export const Sidebar = () => {
  const menu = useRef(null);
  const { isOpen, user, setIsOpen, logout } = useStore();

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
      <div className="flex mb-2 items-start justify-between">
        <div className="pl-4">
          <h4 className=" block p-2 pl-0 pb-0 font-bold">WELCOME</h4>
          <span className="block text-xs w-full text-green-600 capitalize">
            {user.email.split("@")[0]}
          </span>
        </div>
        <button
          className="block w-6 h-6 mr-2 pt-2"
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
        <Link href="/doctors">Doctors</Link>
        <Link href="/departments">Departments</Link>
        <Link className="text-purple-800" href="/upload">Upload</Link>
      </>
    );
  };

  const renderLogout = () => {
    return (
      <button
        className="logout text-red-600 text-xs"
        onClick={() => logout?.()}
      >
        Logout
      </button>
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
      {renderLogout()}
    </div>
  );
};
