"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

/**
 * Main application layout that includes the navigation sidebar and top bar.
 * This layout wraps all protected dashboard and scan pages.
 */
export default function AppLayout({
  children,
}: {
  /** The content of the current page being displayed. */
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#111]">

      {/* Main navigation sidebar */}
      <Sidebar/>

      {/* Header bar with user profile and search */}
      <Topbar onMenuClick={() => setOpen(true)} />

      {/* Main content area for the current route */}
      <main className="flex-1 ">
        {children}
      </main>

    </div>
  );
}