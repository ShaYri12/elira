"use client";
import Image from "next/image";
import { useState } from "react";

const FilterHeader = ({ small = false }) => {
  const [activeFilter, setActiveFilter] = useState("best");

  const filters = [
    {
      id: "trending",
      label: "Trending",
      icon: <Image src="/icons/fire.png" width={20} height={20} />,
    },
    {
      id: "best",
      label: "Best",
      icon: <Image src="/icons/trophy.png" width={20} height={20} />,
    },
    {
      id: "new",
      label: "New Release",
      icon: <Image src="/icons/stars.png" width={20} height={20} />,
    },
  ];
  return (
    <div
      className={`w-full items-center ${
        small
          ? "lg:hidden flex flex-col justify-center gap-[20px] pb-[30px]"
          : "lg:flex hidden justify-between"
      }`}
    >
      <h1 className="text-[25px] font-[400]">Choose a Template</h1>
      <div
        className={`flex items-center gap-4 ${
          small && "flex-col justify-center"
        }`}
      >
        <span className="text-[#2d2d2d] text-sm font-medium">SORT BY</span>
        <div
          className={`flex gap-2 ${
            small && "flex-wrap justify-center items-center"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg flex gap-2 text-[16px] font-medium transition-colors duration-200 border-[1.4px] hover:border-white bg-black text-white border-white ${
                activeFilter === filter.id ? "opacity-1" : "opacity-[0.1]"
              }`}
            >
              {filter.label}{" "}
              <span
                className={`
                ${filter.label === "Best" ? "mt-[4px]" : ""}
              `}
              >
                {filter.icon}
              </span>
            </button>
          ))}
        </div>
        <div
          className={`${
            small && "hidden"
          } min-w-[45px] min-h-[45px] rounded-full bg-[#021c6e] flex items-center justify-center`}
        >
          <Image
            src="/profile.png"
            alt="Elira Logo"
            width={45}
            height={45}
            className="rounded-full object-cover w-[45px] h-[45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
