"use client";
import { useState } from "react";
import DashboardToolbar from '@/components/DashboardToolbar';
import Overview from '@/components/Overview';
import Topbar from '@/components/Topbar';
import ScanTable from '@/components/ScanTable/ScanTable'
import Sidebar from '@/components/Sidebar';
import { Scan, generateScans } from "@/data";

export default function Dashboard() {
  const scans = generateScans(10);
    const [open, setOpen] = useState(false);

  return (
   <div className="flex min-h-screen bg-white dark:bg-[#111]">
    
      <main className="flex-1 p-6 pt-[80px] space-y-6">
        {/* Severity Stats */}
        <Overview />

       <DashboardToolbar />

        <ScanTable scans={scans} />
      </main>
    </div>
  );
}