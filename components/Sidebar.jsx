import React, { useEffect, useState } from "react";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

import categories from "../data/category";

const Sidebar = () => {
  const router = useRouter();

  return (
    <>
      {/* Big screen  */}
      <div className="h-full text-gray-400 pr-2 text-md font-medium max-w-[25rem] hidden sm:flex">
        <div className="h-full w-[21rem] flex flex-col">
          <div className="space-y-4 bg-[#121212] p-4 rounded-lg">
            <button className="flex item-center space-x-3 hover:text-white">
              <img
                src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
                className="w-40"
              />
            </button>
            <button
              className="flex item-center space-x-3 hover:text-white"
              onClick={() => {
                router.push(" /categories");
              }}
            >
              <MagnifyingGlassIcon className="w-7 h-7" />
              <p>Search</p>
            </button>
          </div>
          <div className=" bg-[#121212] rounded-lg mt-2 flex-1">
            <div className="p-4">
              <button className="flex justify-between items-center  hover:text-white w-full">
                <div className="flex items-center space-x-3">
                  {/* <BuildingLibraryIcon className="w-7 h-7" /> */}
                  <p>Categorise</p>
                </div>
              </button>
            </div>
            <div className="flex space-x-2 px-4">
              <div className="bg-[#2A292A] text-white items-center justify-center rounded-3xl text-center flex px-2 py-1 text-sm">
                <p className="">Popularity order</p>
              </div>
              <div className="bg-[#2A292A] text-white items-center justify-center rounded-3xl text-center flex px-2 py-1 text-sm">
                <p className="">New arrival order</p>
              </div>
            </div>

            <div className="p-2 overflow-y-auto">
              {categories.map((category) => (
                <div
                  className="flex space-x-3 hover:bg-gray-900 rounded-lg p-2"
                  onClick={() => router.push(`/category/${category.id}`)}
                  key={category.id}
                >
                  <div className="">
                    <p className="cursor-pointer hover:text-white">
                      {category.icon}
                    </p>
                    <p className="cursor-pointer hover:text-white text-sm">
                      {category.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Small screen */}
      <div className="h-full text-gray-400 pr-2 text-md font-medium max-w-[5rem] sm:hidden flex">
        <div className="h-full w-[4rem] flex flex-col">
          <div className="space-y-4 bg-[#121212] p-4 rounded-lg">
            <button className="flex item-center space-x-3 hover:text-white">
              <img
                src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
                className="w-fit"
              />
            </button>
            <button
              className="flex item-center space-x-3 hover:text-white"
              onClick={() => {
                router.push(" /categories");
              }}
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
          <div className=" bg-[#121212] rounded-lg mt-2 flex-1">
            <div className="p-4">
              <button className="flex justify-between items-center  hover:text-white w-full">
                <div className="flex items-center ">
                  <img src="/categories.png" />
                </div>
              </button>
            </div>

            <div className="p-2 overflow-y-auto">
              {categories.map((category) => (
                <div
                  className="flex space-x-3 hover:bg-gray-900 rounded-lg p-2"
                  onClick={() => router.push(`/category/${category.id}`)}
                  key={category.id}
                >
                  <div className="">
                    <p className="cursor-pointer hover:text-white">
                      {category.icon}
                    </p>
                    <p className="cursor-pointer hover:text-white text-sm">
                      {category.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
