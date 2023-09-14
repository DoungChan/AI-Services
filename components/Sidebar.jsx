import React, { useEffect, useState } from "react";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

import categories from "@/data/category";
import SearchBar from "./Search";
const Sidebar = () => {
  const router = useRouter();

  // active category

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    router.push(`/category/${category.handle}`);
  };
  return (
    <>
      {/* Big screen  */}
      <div className="h-full text-gray-400 pr-2 text-md font-medium max-w-[25rem] hidden sm:flex duration-700 ">
        <div className="h-full w-[21rem] flex flex-col">
          <div className="space-y-4 bg-[#121212] p-4 rounded-lg">
            <button
              className="flex item-center space-x-3 hover:text-white"
              onClick={() => router.push("/")}
            >
              <img
                src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
                className="w-40"
              />
            </button>
            <div className="flex items-center space-x-3 hover:text-white bg-transparent">
              <SearchBar />
            </div>
          </div>
          <div className=" bg-[#121212] rounded-lg mt-2 ">
            <section className="flex flex-col justify-between items-start px-4 py-8 space-y-3         ">
              <div className="px-4">
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
            </section>
            <section className="flex justify-between items-center p-4 max-h-[700px] overflow-y-auto">
              <div className="p-2 w-full">
                {categories.map((category, index) => (
                  <div
                    className={`flex space-x-3 rounded-lg p-2 cursor-pointer ${
                      category === activeCategory
                        ? "bg-gray-900"
                        : "hover:bg-gray-900"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    key={index}
                  >
                    <div>
                      <p className="text-sm">{category.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Small screen */}
      <div className="h-full text-gray-400 pr-2 text-md font-medium max-w-[5rem] sm:hidden flex">
        <div className="h-full w-[4rem] flex flex-col">
          <div className="space-y-4 bg-[#121212] p-4 rounded-lg">
            <button
              className="flex item-center space-x-3 hover:text-white"
              onClick={() => router.push("/")}
            >
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
              <button className="flex justify-between items-center hover:text-white w-full">
                <div className="flex items-center ">
                  <img src="/categories.png" />
                </div>
              </button>
            </div>

            <div>
              {categories.map((category, index) => (
                <div
                  className="flex space-x-3 hover:bg-gray-900 rounded-lg p-2"
                  onClick={() => router.push(`/category/${category.handle}`)}
                  key={index}
                >
                  <div>
                    <p className="cursor-pointer hover:text-white"></p>
                    <p className="hover:text-white text-xs truncate text-ellipsis overflow-hidden w-[4rem]">
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
