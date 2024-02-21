"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="bg-purple-300 text-black h-[75px] md:h-14 fixed top-0 w-full overflow-hidden ">
      <nav className="pt-2 px-4 md:flex items-center justify-between">
        <div className="">
          <Link href="/">
            <h1 className=" text-2xl font-extrabold">Career</h1>
          </Link>
        </div>
        <div className="flex ">
          <div>
            <ul className="flex  space-x-8 font-medium justify-center   ">
              <Link href="/business" className="hover:text-white">
                <li>Business</li>
              </Link>
              <Link href="/job" className="hover:text-white   rounded-md">
                <li>Job</li>
              </Link>
              <Link href="/career" className="hover:text-white">
                <li>Career</li>
              </Link>
              <Link href="/contact" className="hover:text-white">
                <li>Contact </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
