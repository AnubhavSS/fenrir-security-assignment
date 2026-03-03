"use client";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { useStore } from "@/store";



export default function DashboardToolbar() {
  const [search, setSearch] = useState<string>("");
  const setSearchText = useStore((state) => state.setSearchText);

  const handleClick=(text:string)=>{
   toast(`${text} clicked!`, {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

      {/* LEFT SECTION */}
 <div className="flex flex-col sm:flex-row gap-3 flex-1">

        {/* Search Input */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchText(e.target.value);
            }}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg 
                       border border-gray-200 dark:border-gray-700
                       bg-white dark:bg-[#1A1A1A]
                       text-sm
                        text-gray-600
                         dark:text-gray-400
                       focus:outline-none focus:ring-2 
                       focus:ring-primary focus:border-transparent
                       transition"
          />
        </div>

        {/* Filter Button */}
        <button
        onClick={()=>handleClick("Filter")}
          type="button"
          className="flex items-center justify-center gap-2
                     px-4 py-2.5 rounded-lg
                     border border-gray-200 dark:border-gray-700
                     bg-white dark:bg-[#1A1A1A]
                     text-sm font-medium
                     text-gray-600
                     dark:text-gray-400
                     hover:bg-gray-50 dark:hover:bg-[#222]
                      cursor-pointer
                     transition"
                    
        >
          <FiFilter size={16} />
          Filter
        </button>

        {/* Column Button */}
        <button
        onClick={()=>handleClick("Column")}
          type="button"
          className="flex items-center justify-center gap-2
                     px-4 py-2.5 rounded-lg
                     border border-gray-200 dark:border-gray-700
                     bg-white dark:bg-[#1A1A1A]
                     text-sm font-medium
                     hover:bg-gray-50 dark:hover:bg-[#222]
                      cursor-pointer
                       text-gray-600
                        dark:text-gray-400
                     transition"
        >
         
          Column
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-auto">
        <button
        onClick={()=>handleClick("New Scan")}
          type="button"
          className="w-full md:w-auto
                     bg-primary
                     text-white
                     px-6 py-2.5
                     rounded-lg
                     text-sm font-semibold
                     hover:opacity-90
                      cursor-pointer
                     transition"
        >
         + New Scan
        </button>
      </div>
    </div>
  );
}