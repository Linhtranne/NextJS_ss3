'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className=" flex justify-evenly w-1/3">
      <Link
        className={`${pathname === "/" ? "acive text-red-700" : ""}`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`${pathname === "/about" ? "acive text-red-700" : ""}`}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={`${pathname === "/contact" ? "acive text-red-700" : ""}`}
        href={"/contact"}
      >
        Contact
      </Link>
      <Link
        className={`${pathname === "/login" ? "acive text-red-700" : ""}`}
        href={"/login"}
      >
        Login
      </Link>
    </div>
  );
}
