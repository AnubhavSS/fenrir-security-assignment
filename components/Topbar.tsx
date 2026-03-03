"use client";

import { FiMenu } from "react-icons/fi";

export default function Topbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <div
      className="
        fixed top-0 right-0
        w-full md:w-auto
        md:left-64
        h-[60px]
        z-40
        flex items-center justify-between
        px-5
        bg-white dark:bg-[#111]
        border-b border-gray-200 dark:border-gray-800
      "
    >
      {/* Left Section (Mobile Only) */}
      <div className="md:hidden flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <span className="text-lg font-semibold">Scan</span>
      </div>

      {/* Menu Button (Mobile Only) */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#222]"
      >
        <FiMenu size={22} />
      </button>

      <p className="text-lg font-bold text-black dark:text-gray-500">
         Scan
      </p>

      {/* Export Report and Stop Scan Buttons */}

  <div className="flex flex-wrap gap-3 ">
       <button
        className="
        hidden
        md:block
        px-5 py-2.5
        rounded-lg
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-[#1A1A1A]
        text-dark dark:text-gray-300
        text-sm font-bold
        hover:bg-gray-50 dark:hover:bg-[#222]
        active:scale-[0.98]
        transition
      "
    >
     Export Report
    </button>

       <button
      className="
        px-5 py-2.5
        rounded-lg
        bg-red-100
        text-red-600
        text-sm font-bold
        hover:bg-red-700
        active:scale-[0.98]
        transition
        hidden
        md:block
      "
    >
      Stop Scan
    </button>
    </div>
    </div>
  );
}