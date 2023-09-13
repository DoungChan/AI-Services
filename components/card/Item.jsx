import React from "react";
import categories from "@/data/category";
import { useRouter } from "next/router";
import itemData from "@/data/itme";
export default function Item({ backgroundColor }) {
  const router = useRouter();
  return (
    <div>
      <div className=" flex flex-wrap xl:grid-cols-3 min-[1650px]:grid-cols-4 min-[1000px]:grid-cols-1  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-2 grid-flow-row gap-10 justify-center">
        {itemData.map((category) => (
          <div
            key={category.id}
            className={`rounded-[10px] w-fit font-black text-2xl flex flex-col px-5 py-5 justify-center bg-[#252525] bg-opacity-70 hover:bg-opacity-100 transition-opacity duration-1000 ease-in-out cursor-pointer`}
            onClick={() => router.push(`/service-detail/${category.id}`)}
          >
            <div className="sm:w-40 sm:h-40 w-28 h-28 bg-black rounded-[10px] overflow-hidden group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
              <img
                className="object-cover w-full h-full "
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&w=1000&q=80"
              ></img>
            </div>
            <div className="mt-5">
              <h1 className="text-sm font-bold mb-4"> {category.name}</h1>
              <p className="text-slate-200 text-xs overflow-wrap-break-word text-opacity-60">
                sort descriptiondfsfsdf
                {category.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
