import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Item from "@/components/card/Item";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import data from "@/data/data";
import { set, shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  const query = useRouter().query.id;
  useEffect(() => {
    setColor(shuffle(colors).pop());
    setTimeout(() => {
      setAction(true);
    }, 1000);
  }, [query]);

  const [filterData, setFilterData] = useState([]);

  // query url

  console.log(query);

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
  console.log(parsedData);
  return (
    <>
      {action ? (
        <div
          className={`flex-grow h-full overflow-hidden rounded-lg bg-gradient-to-b to-[#121212] ${color}`}
        >
          <section
            className={`flex-1 flex-col  space-x-7  h-[90px] text-white p-8  justify-center items-center  rounded-lg`}
          >
            <h1 className="text-2xl font-bold">{query}</h1>
          </section>
          <section className="flex flex-col items-start space-x-7  text-white p-8 h-header-offset overflow-y-auto">
            {" "}
            <div className="flex-1 space-x-3 w-full  justify-center pb-10">
              <Item data={parsedData} />
              <Footer />
            </div>
          </section>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </>
  );
}
