"use client";
//images
import Image from "next/image";
import { useState } from "react";
import Dropdown from "./Dropdown";
export default function Navbar() {
  const [dropd, setDropD] = useState(false);
  const handleClick = () => {
    setDropD(!dropd);
  };
  return (
    <>
      <nav className="flex justify-between p-4 items-center w-full gap-2 mt-4 bg-white h-8 border-slate-800 drop-shadow-6xl">
        <h1 className="text-2xl font-bold font-mono text-yellow-500 tracking-wide">
          CHACHI
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>
      {dropd && <Dropdown />}
    </>
  );
}
