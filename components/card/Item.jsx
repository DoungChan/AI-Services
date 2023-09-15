import React, { useEffect, useState } from "react";
import categories from "@/data/category";
import { useRouter } from "next/router";
import { shuffle } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Item({ data }) {
  const router = useRouter();

  // color
  const colors = [
    "from-sky-600",
    "from-blue-600",
    "from-cyan-600",
    "from-red-600",
    "from-teal-600",
    "from-pink-600",
    "from-purple-600",
    "from-violet-600",
  ];

  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  return (
    <div>
      <>
        {data === undefined ? (
          <div></div>
        ) : (
          <div className=" flex flex-wrap xl:grid-cols-3 min-[1650px]:grid-cols-4 min-[1000px]:grid-cols-1  lg:grid-cols-2 sm:grid-cols-1 grid-cols-2 grid-flow-row gap-10  justify-center md:justify-start">
            {data.map((data, index) => (
              <div
                key={index}
                className={`rounded-[10px] w-fit font-black text-2xl flex flex-col px-3 py-3 justify-center bg-[#282828] bg-opacity-70 hover:bg-opacity-100 duration-500 ease-in-out cursor-pointer`}
                onClick={() => router.push(`/service-detail/${data.handle}`)}
              >
                <div className="w-72 h-40 bg-black rounded-[10px] overflow-hidden group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <img
                    className="object-cover w-full h-full "
                    src={data.image}
                  ></img>
                </div>
                <div className="py-2">
                  <div className="space-x-2 w-full">
                    {data.categories.slice(0, 2).map((category, index) => (
                      <a
                        className="inline-flex items-center rounded-full bg-[#fce9e8] my-1 px-2.5 py-0.5 text-xs font-medium text-[#121212] md:transition-opacity md:ease-in md:hover:opacity-75"
                        key={index}
                        onClick={(event) => {
                          event.stopPropagation(); // Stop event propagation
                          router.push(`/category/${category.handle}`); // Navigate to category page
                        }}
                      >
                        <p className="max-w-[100px] truncate">
                          {category.name}
                        </p>
                      </a>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <h1
                      className={`text-sm font-bold max-w-[200px] truncate rounded-xl w-fit`}
                    >
                      {data.name}
                    </h1>

                    <div className="justify-center items-center mt-4 flex space-x-2 px-2">
                      <h1 className="text-sm font-bold mb-4  rounded-3xl w-fit">
                        {data.collected_count > 7
                          ? 10
                          : data.collected_count + 3}
                      </h1>
                      <img src="/star.png" className="w-4 h-4 -mt-4" />
                    </div>
                  </div>
                  <div className="">
                    <p className="text-slate-200 text-xs overflow-wrap-break-word text-opacity-60 max-w-[240px] max-h-7 overflow-clip">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
}
