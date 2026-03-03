"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineDashboardCustomize,MdOutlineContactSupport,MdOutlineSettings,MdLibraryBooks,MdOutlineDocumentScanner,MdOutlineCalendarToday,MdNotificationsNone  } from "react-icons/md";
import { useStore } from "../store";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: MdOutlineDashboardCustomize },
  { name: "Projects", href: "#",icon: MdLibraryBooks },
  { name: "Scans", href: "scans",icon: MdOutlineDocumentScanner },
  { name: "Schedule", href: "/",icon: MdOutlineCalendarToday },
  { name: "Notifications", href: "#" ,icon:MdNotificationsNone},
  { name: "Settings", href: "#",icon:MdOutlineSettings },
  { name: "Support", href: "#",icon:MdOutlineContactSupport },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
const pathname = usePathname();
const currentPath = pathname.split("/")[1];
const { darkMode } = useStore((state) => state);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50
                flex items-center justify-between
                px-4 h-[60px]
                bg-white dark:bg-[#111]
                border-b dark:border-gray-800">

  <span className="text-lg font-semibold text-primary">aps</span>

  <button onClick={() => setOpen(!open)} className="pointer">
    <FiMenu size={22} />
  </button>
</div>

{/* Mobile Dropdown Menu */}
<div
  className={`
    md:hidden fixed top-[60px] left-0 w-full z-40
    bg-white dark:bg-[#111]
    border-b dark:border-gray-800
    transform transition-transform duration-300 ease-in-out
    ${open ? "translate-y-0" : "-translate-y-full"}
  `}
>
  <nav className="flex flex-col py-4 px-4 gap-2">
      {navItems.map((item) => {
    const isActive = currentPath === item.href;
  
    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setOpen(false)}
        className={`
          px-13 py-2 rounded-full text-lg font-medium transition flex items-center 
          ${
            isActive
              ? "bg-primary/40 text-primary"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#222]"
          }
        `}
      >
        <item.icon size={22} className="mr-2" />
        {item.name}
      </Link>
    );
  })}
  </nav>
</div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64
          bg-white dark:bg-[#111]
          border-r border-gray-200
          transform transition-transform duration-300
          z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
          hidden
        `}
      >
        <div className="flex items-center justify-between p-6">
         <div className=" flex items-center gap-3">
  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-white" />
  </div>
  <span className="text-primary text-lg font-medium">aps</span>
</div>
          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <FiX size={22} />
          </button>
        </div>

      <nav className="flex flex-col gap-1 px-4">
  {navItems.map((item) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setOpen(false)}
        className={`
          px-13 py-2 rounded-full text-lg font-medium transition flex items-center 
          ${
            isActive
              ? "bg-primary/40 text-primary"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#222]"
          }
        `}
      >
        <item.icon size={22} className="mr-2" />
        {item.name}
      </Link>
    );
  })}
</nav>



       <div className="absolute bottom-6 left-4 right-4">
        <label className="inline-flex items-center cursor-pointer">
  <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />

  <div onClick={()=>useStore.setState({darkMode:!darkMode})}
    className="
      border border-gray-300
      relative w-9 h-5
      bg-neutral-quaternary
      rounded-full
      transition-colors duration-300
      peer-checked:bg-primary
      peer-focus:ring-4 peer-focus:ring-primary/30
      after:content-['']
      after:absolute
      after:top-px
      after:left-[2px]
      after:h-4
      after:w-4
      after:rounded-full
      after:bg-gray-500
      after:transition-transform
      after:duration-300
      peer-checked:after:translate-x-4
    "
  ></div>
</label>
  <span className="select-none ms-3 text-sm font-medium text-gray-600 dark:text-gray-400">Dark/Light Mode</span>
</label>
  <div className="flex items-center gap-3
                  p-3 rounded-xl
                  dark:bg-[#1A1A1A]
                  ">

    {/* Avatar */}
    <div className="w-10 h-10 rounded-full
                    bg-linear-to-br
                    from-primary
                    to-emerald-600
                    flex items-center justify-center
                    text-white font-semibold text-sm">
      AS
    </div>

    {/* Text */}
    <div className="flex flex-col leading-tight  dark:bg-[#1A1A1A]">
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        admin@edu.com
      </span>
      <span className="text-xs text-gray-500">
        Security Lead
      </span>
    </div>

  </div>
</div>
      </aside>
    </>
  );
}