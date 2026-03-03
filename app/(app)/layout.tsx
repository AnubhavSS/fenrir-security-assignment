"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#111]">

      <Sidebar/>

      <Topbar onMenuClick={() => setOpen(true)} />

      <main className="flex-1 ">
        {children}
      </main>

    </div>
  );
}