import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Item from "@/components/card/Item";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import data from "@/data/data";
import { set, shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { sideBarStatus } from "@/state/atom";
export default function Categorise() {
  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
  ];

  const [color, setColor] = useState("");
  const [action, setAction] = useState(false);
  const [sideBar, setSideBar] = useRecoilState(sideBarStatus);
  const query = useRouter().query.id;
  useEffect(() => {
    setColor(shuffle(colors).pop());
    setTimeout(() => {
      setAction(true);
    }, 1000);
  }, [query]);

  const [filterData, setFilterData] = useState([]);

  // query url

  // Function to filter data by category name

  useEffect(() => {
    const filterDataByCategoryName = () => {
      const filteredData = data.filter((item) => {
        // Assuming item.categories is an array of category objects
        return item.categories.some((category) => category.handle === query);
      });
      setFilterData(JSON.stringify(filteredData));
      return filteredData;
    }; // Convert to JSON-formatted string

    filterDataByCategoryName(query);
  }, [data, query]);

  let parsedData;

  try {
    parsedData = JSON.parse(filterData);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return (
    <>
      <div
        className={` h-full overflow-hidden rounded-lg bg-gradient-to-b to-[#121212] duration-700 ${color}  ${
          sideBar
            ? "md:translate-x-[1] duration-1000"
            : " md:translate-x-[-1] duration-1000"
        }`}
      >
        <section
          className={`flex-1 flex-row  space-x-7  h-[90px] text-white p-8  justify-center items-center rounded-lg`}
        >
          <div className="flex space-x-3">
            {sideBar ? (
              <div className="w-8 h-8 rounded-full bg-[#2A292A] flex justify-center">
                <ChevronLeftIcon
                  className="w-8 h-8 text-white p-1 cursor-pointer"
                  onClick={() => setSideBar(!sideBar)}
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#2A292A] flex justify-center cursor-pointer">
                <ChevronRightIcon
                  className="w-8 h-8 text-white p-1"
                  onClick={() => setSideBar(!sideBar)}
                />
              </div>
            )}

            <h1 className="text-2xl font-bold">{query}</h1>
          </div>
        </section>
        <section className="flex flex-col items-start space-x-7  text-white p-8 h-header-offset overflow-y-auto">
          {" "}
          <div className="flex-1 space-x-3 w-full  justify-center pb-10">
            <Item data={parsedData} />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}
