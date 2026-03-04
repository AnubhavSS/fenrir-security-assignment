"use client";
import DashboardToolbar from '@/components/DashboardToolbar';
import Overview from '@/components/Overview';

import ScanTable from '@/components/ScanTable/ScanTable'

import {  generateScans } from "@/data";

/**
 * Dashboard page component that displays high-level security metrics and recent scans.
 * It fetches mock data for scans and renders the main dashboard view.
 */
export default function Dashboard() {
  /** Mock data generated for the scan table. */
  const scans = generateScans(10);


  return (
   <div className="flex min-h-screen bg-white dark:bg-[#111]">
    
      <main className="flex-1 p-6 pt-[80px] space-y-6">
        {/* Severity Stats and high-level overview metrics */}
        <Overview />

       {/* Toolbar for filtering and managing dashboard views */}
       <DashboardToolbar />

        {/* List of recent security scans and their details */}
        <ScanTable scans={scans} />
      </main>
    </div>
  );
}