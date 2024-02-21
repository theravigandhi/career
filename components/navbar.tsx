"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-purple-300 text-black h-14 fixed top-0 w-full">
      <nav className="flex pt-2 px-4 items-center justify-between">
        <div className="">
          <Link href="/">
            {/* <span className="sr-only text-2xl font-extrabold">Career</span> */}
            <h1 className=" text-2xl font-extrabold">Career</h1>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(true)} type="button" className=" ">
            <Menu />
          </button>
        </div>
        <div className={`flex-1 hidden md:block `}>
          <ul className="flex  space-x-8 font-medium justify-center  ">
            <Link href="/business" className="hover:text-white">
              <li>Business</li>
            </Link>
            <Link href="/job" className="hover:text-white">
              <li>Job</li>
            </Link>
            <Link href="/career" className="hover:text-white">
              <li>Career</li>
            </Link>
          </ul>
        </div>
        <Button className="hidden md:block rounded-sm shadow-md px-4 py-2">
          Contact Us{" "}
        </Button>
      </nav>
      <Dialog as="div" className="md:hidden" open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-purple-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Career</span>
              <h1 className=" text-2xl font-extrabold">Career</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only"> Close Menu</span>
              <X className="h-6 w-6 text-black " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <ul className="space-x-8 font-medium justify-center mt-14  ">
                  <a href="/business" className="hover:text-white">
                    <li>Business</li>
                  </a>
                  <a href="/job" className="hover:text-white">
                    <li>Job</li>
                  </a>
                  <a href="/career" className="hover:text-white">
                    <li>Career</li>
                  </a>
                </ul>
              </div>
              <Link href="/contact">
                <button className="bg-black text-white rounded-sm shadow-md px-4 py-2">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
