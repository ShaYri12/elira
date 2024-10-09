"use client";
import Image from "next/image";
import Link from "next/link";
import FilterHeader from "./FilterHeader";

export default function Header() {
  return (
    <header className="flex py-[18px] items-center justify-between bg-[#040404]">
      <FilterHeader small={false} />

      <div className="block h-[40px] bg-[#040404]"></div>
      <div className="lg:hidden fixed top-0 left-0 flex items-center justify-between w-full bg-[#040404] px-[20px] z-[50] py-[7px]">
        <div></div>
        <Link href="/" className="flex items-center p-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={54}
            className="w-[90px]"
          />
        </Link>
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
