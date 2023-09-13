import {
  ArrowDownCircleIcon,
  ArrowLeftCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function Center({ tittle }) {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="flex-grow h-full overflow-y-scroll scrollbar-hide bg-[#121212] rounded-lg">
      <header className="hidden lg:inline absolute top-5 right-8 w-full z-10 pl-[25rem]">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#2A292A] flex justify-center">
              <ChevronLeftIcon className="w-8 h-8 text-white p-1" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#2A292A] flex justify-center">
              <ChevronRightIcon className="w-8 h-8 text-white p-1" />
            </div>
          </div>
          <div className="flex space-x-3"></div>
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <div>
          <p>{tittle}</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {tittle}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Center;
