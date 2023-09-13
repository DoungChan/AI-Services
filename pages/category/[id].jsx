import Center from "@/components/Center";
import Item from "@/components/card/Item";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";

export default function Categorise() {
  const colors = [
    "from-indigo-600",
    "from-blue-600",
    "from-green-600",
    "from-red-600",
    "from-yellow-600",
    "from-pink-600",
    "from-purple-600",
  ];

  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="flex-grow h-screen overflow-hidden  bg-[#121212] rounded-lg ">
      <section
        className={`flex flex-col items-start space-x-7  h-fit text-white p-8 `}
      >
        <h1 className="text-2xl font-bold">Category Name</h1>
      </section>
      <section className="flex flex-col items-start space-x-7 bg-[#121212] text-white p-8 h-header-offset overflow-y-auto">
        {" "}
        <div className="flex space-x-3 w-full  justify-center">
          <Item />
        </div>
      </section>
    </div>
  );
}
