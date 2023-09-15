import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import categories from "@/data/category";
import SearchBar from "./Search";
import { useRecoilState, useRecoilValue } from "recoil";
import { sideBarStatus } from "@/state/atom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useWindowSize } from "@/util/hook";
const Sidebar = () => {
  const router = useRouter();

  const windowSize = useWindowSize();

  // active category

  const [activeCategory, setActiveCategory] = useState(null);
  // display side bar
  const [sideBar, setSideBar] = useRecoilState(sideBarStatus);

  const handleCategoryClick = (category) => {
    // tailwind md breakpoint is 768px

    setActiveCategory(category);
    if (windowSize.width < 768) setSideBar(!sideBar);
    router.push(`/category/${category.handle}`);
  };

  return (
    <>
      {/* Big screen  */}
      <div
        className={`absolute md:static flex h-full ease-in-out text-gray-400 pr-2 text-md font-medium max-w-[25rem] `}
      >
        <div className="h-full w-[25rem] flex flex-col">
          <div className="space-y-4 bg-[#121212] p-4 rounded-lg">
            <button
              className="flex item-center space-x-3 hover:text-white "
              onClick={() => router.push("/")}
            >
              <img
                src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
                className="w-40"
              />
            </button>
          </div>
          <div className=" bg-[#121212] rounded-lg mt-2 h-screen md:bg-opacity-100 bg-opacity-80">
            <section className="flex flex-col justify-between items-start px-4 py-8 space-y-3">
              <div className="px-4 flex w-full justify-between">
                <button className="flex  items-center  hover:text-white w-full space-x-2">
                  <img src="/categories.png" className="w-5 h-5" />
                  <div className="flex items-center space-x-3">
                    <p>Categorize</p>
                  </div>
                </button>
                <button className=" flex md:hidden hover:text-white">
                  <ChevronLeftIcon
                    className="w-8 h-8 text-white p-1 cursor-pointer"
                    onClick={() => setSideBar(!sideBar)}
                  />
                </button>
              </div>
            </section>
            <section className="flex justify-between items-center p-4 max-h-[700px] overflow-y-auto">
              <div className="p-2 w-full mt-[2700px]">
                {categories.map((category, index) => (
                  <div
                    className={`flex space-x-3 space-y-3 py-5 rounded-lg p-2 cursor-pointer ${
                      category === activeCategory
                        ? "bg-gray-900"
                        : "hover:bg-gray-900"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    key={index}
                  >
                    <div className="flex flex-row  w-full justify-between">
                      <p className="text-sm">{category.name}</p>
                      <p className="text-sm text-gray-400 ml-2">
                        {category.tool_count}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* small screen */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
