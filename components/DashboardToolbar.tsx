"use client";

import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";


export default function DashboardToolbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      {/* LEFT SECTION */}
 <div className="flex flex-col sm:flex-row gap-3 flex-1">

        {/* Search Input */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg 
                       border border-gray-200 dark:border-gray-700
                       bg-white dark:bg-[#1A1A1A]
                       text-sm
                       focus:outline-none focus:ring-2 
                       focus:ring-primary focus:border-transparent
                       transition"
          />
        </div>

        {/* Filter Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-2
                     px-4 py-2.5 rounded-lg
                     border border-gray-200 dark:border-gray-700
                     bg-white dark:bg-[#1A1A1A]
                     text-sm font-medium
                     hover:bg-gray-50 dark:hover:bg-[#222]
                     transition"
        >
          <FiFilter size={16} />
          Filter
        </button>

        {/* Column Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-2
                     px-4 py-2.5 rounded-lg
                     border border-gray-200 dark:border-gray-700
                     bg-white dark:bg-[#1A1A1A]
                     text-sm font-medium
                     hover:bg-gray-50 dark:hover:bg-[#222]
                     transition"
        >
         
          Column
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-auto">
        <button
          type="button"
          className="w-full md:w-auto
                     bg-primary
                     text-white
                     px-6 py-2.5
                     rounded-lg
                     text-sm font-semibold
                     hover:opacity-90
                     transition"
        >
         + New Scan
        </button>
      </div>
    </div>
  );
}