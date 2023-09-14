import React, { useEffect, useState } from "react";
import categories from "@/data/category";
import { useRouter } from "next/router";
import { shuffle } from "lodash";
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
          <div> kk</div>
        ) : (
          <div className=" flex flex-wrap xl:grid-cols-3 min-[1650px]:grid-cols-4 min-[1000px]:grid-cols-1  lg:grid-cols-2 sm:grid-cols-1 grid-cols-2 grid-flow-row gap-10 justify-start">
            {data.map((data, index) => (
              <div
                key={index}
                className={`rounded-[10px] w-fit font-black text-2xl flex flex-col px-5 py-5 justify-center bg-[#282828] bg-opacity-70 hover:bg-opacity-100 transition-opacity duration-1000 ease-in-out cursor-pointer`}
                onClick={() => router.push(`/service-detail/${data.handle}`)}
              >
                <div className="w-60 h-48  bg-black rounded-[10px] overflow-hidden group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                  <img
                    className="object-cover w-full h-full "
                    src={data.image}
                  ></img>
                </div>
                <div className="mt-5">
                  <h1 className={`text-sm font-bold  rounded-xl p-2 w-fit`}>
                    {data.name}
                  </h1>
                  <div className="justify-between w-full"></div>
                  <div>
                    <img src="/star.png" className="w-4 h-4" />
                    <h1 className="text-sm font-bold mb-4  rounded-3xl w-fit">
                      {data.review}
                    </h1>
                  </div>

                  <p className="text-slate-200 text-xs overflow-wrap-break-word text-opacity-60 max-w-[240px] max-h-7 overflow-clip">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
}
