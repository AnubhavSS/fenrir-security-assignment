"use client";
import DashboardToolbar from '@/components/DashboardToolbar';
import Overview from '@/components/Overview';
// import Sidebar from "@/components/Sidebar";
import ScanTable from '@/components/ScanTable/ScanTable'
import { Scan, generateScans } from "@/data";

export default function Dashboard() {
  const scans = generateScans(10);
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F0F0F]">
      {/* <Sidebar /> */}

      <main className="flex-1 p-6 space-y-6">
        {/* Severity Stats */}
        <Overview />

       <DashboardToolbar />
       
        <ScanTable scans={scans} />
      </main>
    </div>
  );
}