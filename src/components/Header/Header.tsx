"use client";

import { MouseEvent } from "react";
import Image from "next/image";
import logo from "@public/logo.png";
import { useRouter } from "next/navigation";
import { useStore } from '@context/context'

export const Header = () => {
  const router = useRouter();
  const { setIsOpen } = useStore()

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex bg-white">
      <div className="p-4 cursor-pointer flex items-center w-full justify-between">
        <Image
          onClick={handleClick}
          src={logo}
          alt="Logo"
          width="150"
          height="100"
        />
        <div className="text-black flex gap-4">
          <button id="menu-button" onClick={() => setIsOpen?.(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
