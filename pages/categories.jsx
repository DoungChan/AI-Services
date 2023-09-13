import React from "react";
import CategoryCard from "@/components/card/Category";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function categories() {
  return (
    <div>
      <header className="hidden lg:inline absolute top-5 right-8 w-full z-10 pl-[25rem]">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#2A292A] flex justify-center">
              <ChevronLeftIcon className="w-8 h-8 text-white p-1" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#2A292A] flex justify-center">
              <ChevronRightIcon className="w-8 h-8 text-white p-1" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#2A292A] flex justify-center ">
              <input></input>
            </div>
          </div>
          <div className="flex space-x-3"></div>
        </div>
      </header>
      <CategoryCard />
    </div>
  );
}
