import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import categories from "@/data/category";
const CategoryCard = ({ tittle }) => {
  const bgColors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
    "bg-teal-400",
    "bg-gray-400",
    "bg-orange-400",
  ]; // List of Tailwind CSS background color classes

  const [bgColorClasses, setBgColorClasses] = useState([]);

  useEffect(() => {
    // Generate random background color classes for each category
    const randomClasses = categories.map(() => {
      const randomIndex = Math.floor(Math.random() * bgColors.length);
      return bgColors[randomIndex];
    });
    setBgColorClasses(randomClasses);
  }, [categories]);
  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-[#121212] rounded-lg mx-5">
      <div>
        <div className="grid xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2  grid-flow-row gap-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className={
                `rounded-lg font-black text-2xl flex pl-5 pt-5 items-left ${bgColorClasses[0]}`
                // Apply the generated background color class
              }
            >
              <h1 className="text-2xl md:text-2xl xl:text-xl font-bold">
                {category.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
