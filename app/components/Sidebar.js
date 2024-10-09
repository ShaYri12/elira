"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Burger Icon for large screens */}
      <div
        className={`lg:hidden fixed top-4 left-4 z-[70] ${
          isSidebarOpen ? "hidden" : ""
        }`}
      >
        <button onClick={toggleSidebar} className="text-white p-2">
          <FiMenu size={24} />
        </button>
      </div>

      <div className="h-full lg:flex hidden sidebar-behind top-0 left-0 xl:w-[272px] lg:w-[240px]"></div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 overflow-y-auto bg-[#040404] py-[8px] h-screen transition-transform duration-300 z-[60] transform lg:px-[10px] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-[240px] w-[220px] flex flex-col items-start`}
      >
        <div className="flex w-full justify-between items-center">
          <Link href="/" className="flex items-center p-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={110}
              height={54}
              className="lg:w-[110px] w-[80px]"
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-white p-2 lg:hidden flex"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <nav className="p-2 py-4 w-full space-y-1">
          <button className="flex items-center justify-between w-full mb-6 bg-[#121212] py-2 ps-3 pe-4 rounded-lg">
            <div className="flex items-center lg:gap-3 gap-2 font-semibold text-[14px]">
              <span>
                <Image
                  src="/icons/spinner.png"
                  alt="spinner"
                  className="rounded-full lg:w-[38px] w-[30px] lg:h-[38px]"
                  width={38}
                  height={38}
                />
              </span>
              spinofdestiny
            </div>
            <span className="border border-[#707070] hover:border-white text-[#707070] hover:text-white rounded-md my-auto w-[20px] h-[18px] flex items-center justify-center">
              <IoIosArrowDown size={14} />
            </span>
          </button>
          <SidebarItem
            link="/"
            icon={
              <Image src="/icons/templates.png" alt="" width={19} height={19} />
            }
            text="Templates"
            active
          />
          <SidebarItem
            link="#"
            icon={
              <Image
                src="/icons/marketplace.png"
                alt=""
                width={19}
                height={19}
              />
            }
            text="Marketplace"
          />
          <SidebarItem
            link="#"
            icon={
              <Image
                src="/icons/my-projects.png"
                alt=""
                width={19}
                height={19}
              />
            }
            text="My Projects"
          />
        </nav>
        <div className="p-2 py-4 mt-2 border-y border-gray-800 w-full space-y-1">
          <SidebarItem
            link="#"
            icon={
              <Image src="/icons/support.png" alt="" width={19} height={19} />
            }
            text="Support"
          />
          <SidebarItem
            link="#"
            icon={
              <Image src="/icons/community.png" alt="" width={19} height={19} />
            }
            text="Community"
          />
          <SidebarItem
            link="#"
            icon={
              <Image src="/icons/upgrade.png" alt="" width={19} height={19} />
            }
            text="Upgrade"
            badge="25% OFF"
          />
          <SidebarItem
            link="#"
            icon={
              <Image src="/icons/affiliate.png" alt="" width={19} height={19} />
            }
            text="Affiliate"
          />
        </div>
        <div className="p-2 pt-4 text-[14px] w-full">
          <Link href="#" className="block text-[#8c8c8c] hover:underline">
            Company <span className="text-[#4a4a4a]">&</span> Careers
          </Link>
          <Link href="#" className="block text-[#8c8c8c] hover:underline">
            Terms <span className="text-[#4a4a4a]">&</span> Policies
          </Link>
          <span className="block text-[#5b5b5b]">© 2024 Elira</span>
        </div>
      </aside>

      {/* Overlay to close the sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-[50]"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

function SidebarItem({ link, icon, text, active = false, badge = null }) {
  return (
    <Link
      href={link}
      className={`flex items-center justify-between px-3 py-2 w-full rounded-lg transition group hover:bg-gradient-custom-bluish ${
        badge
          ? "bg-gradient-custom-yellowish text-white hover:bg-gradient-custom-yellowish"
          : active
          ? "bg-gradient-custom-bluish text-white"
          : "text-[#8c8c8c]"
      } hover:text-white`}
    >
      <span className="flex items-center gap-[10px]">
        <span>{icon}</span>
        {text}
      </span>
      {badge && (
        <span className="uppercase text-[#fada76] text-xs px-2 py-0.5 rounded-full ml-0">
          {badge}
        </span>
      )}
    </Link>
  );
}
