import { Tally1 } from "lucide-react";
import React from "react";

function JobPage() {
  return (
    <div className="">
      <div className="flex items-center space-x-8 text-center">
        <h1 className="text-2xl font-bold text-purple-300 text-justify">Job</h1>
        <Tally1 />
        <button className="text-sm text-blue-300 ">Government Job </button>
        <button className="text-xs  ">Private Job </button>
      </div>
    </div>
  );
}

export default JobPage;
