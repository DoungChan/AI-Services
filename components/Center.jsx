import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@/state/atom";
import data from "@/data/data";
import Item from "./card/Item";
import Footer from "./Footer";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function Center() {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  const searchQuery = useRecoilValue(searchQueryState);
  const [sortedData, setSortedData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      // Sort the data in descending order based on month_visited_count
      const sorted = [...data].sort(
        (a, b) => b.month_visited_count - a.month_visited_count
      );
      return setSortedData(data);
    }

    if (searchQuery !== "") {
      const searchFilter = sortedData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return setSearchFilter(searchFilter);
    }
  }, [data, searchQuery]);

  console.log(searchQuery, " dd");
  return (
    <div
      className={`flex-grow h-full overflow-hidden rounded-lg bg-gradient-to-b to-[#121212] ${color}`}
    >
      <section
        className={`flex-1 flex-col  space-x-7  h-[90px] text-white p-8  justify-center items-center  rounded-lg`}
      >
        <h1 className="text-2xl font-bold">Recommentdation</h1>
      </section>
      <section className="flex flex-col items-start space-x-7  text-white p-8 h-header-offset overflow-y-auto">
        {" "}
        <div className="flex-1 space-x-3 w-full  justify-center pb-10">
          <Item data={sortedData} />
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Center;
