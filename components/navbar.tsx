"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="bg-purple-300 text-black h-[75px] md:h-14 fixed top-0 w-full overflow-hidden ">
      <nav className="md:pt-2 px-4 md:flex items-center justify-between">
        <div className="">
          <Link href="/">
            <h1 className=" text-xl md:text-2xl md:font-extrabold  text-center ">
              www.career.com
            </h1>
          </Link>
        </div>
        <div className="flex mt-4 md:mt-0  ">
          <ul className="flex space-x-8 font-extrabold">
            <Link href="/business" className="hover:text-white">
              <li>Business</li>
            </Link>
            <Link href="/job" className="hover:text-white">
              <li>Job</li>
            </Link>{" "}
            <Link href="/career" className="hover:text-white">
              <li>Career</li>
            </Link>{" "}
            <Link href="/contact" className="hover:text-white">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
