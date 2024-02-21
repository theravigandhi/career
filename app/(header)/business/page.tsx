import BusinessCard from "@/components/card";
import Link from "next/link";
import React from "react";
import { Tally1 } from "lucide-react";

function BusinessPage() {
  return (
    <>
      <div className="flex items-center space-x-8 text-center">
        <h1 className="text-2xl font-bold text-purple-300 text-justify">
          Business
        </h1>
        <Tally1 />
        <button className="text-sm text-blue-300 ">Online Business</button>
        <button className="text-xs  ">Offline Business</button>
      </div>
      <div className=" flex flex-wrap overflow-hidden space-x-8  mt-8  ">
        <Link href="/business/online-business">
          <BusinessCard />
        </Link>
        <Link href="/business/online-business">
          <BusinessCard />
        </Link>
      </div>
    </>
  );
}

export default BusinessPage;
