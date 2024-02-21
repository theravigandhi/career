import { Tally1 } from "lucide-react";
import React from "react";

function CareerPage() {
  return (
    <div className="">
      <div className="flex items-center space-x-8 text-center">
        <h1 className="text-2xl font-bold text-purple-300 text-justify">
          Career
        </h1>
        <Tally1 />
        <button className="text-sm text-blue-300 ">Designation </button>
      </div>
    </div>
  );
}

export default CareerPage;
