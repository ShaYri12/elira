"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
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
    <header className="flex py-[18px] items-center justify-between bg-[#040404]">
      <h1 className="text-[28px]">Choose a Template</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-400 text-sm font-medium">SORT BY</span>
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg flex gap-2 text-[16px] font-medium transition-colors duration-200 border hover:border-white bg-black text-white ${
                activeFilter === filter.id ? "border-white" : "border-[#2d2d2d]"
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
        <div className="min-w-[45px] min-h-[45px] rounded-full bg-[#021c6e] flex items-center justify-center">
          <Image
            src="/profile.png"
            alt="Elira Logo"
            width={45}
            height={45}
            className="rounded-full object-cover w-[45px] h-[45px]"
          />
        </div>
      </div>
    </header>
  );
}
