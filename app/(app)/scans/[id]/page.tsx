"use client";

 import ProgressCircle from "@/components/ProgressCircle";
import StepTracker from "@/components/StepTracker";
import ConsolePanel from "@/components/ConsolePanel";
import FindingCard from "@/components/FindingCard";
export default function ScanDetailPage() {
  return (
    <div className="space-y-6 p-6 w-full">

      {/* ===== TOP PROGRESS CARD ===== */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-xl shadow mt-15 space-y-6 pt-">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Progress Circle */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="flex flex-col items-center gap-2">
              <ProgressCircle value={0} />
              
            </div>
          </div>

          {/* Step Tracker + Metadata */}
          <div className="flex-1 space-y-6">

            <StepTracker active={0} />
                <div className="border-t border-0 dark:border-gray-200"/>
            {/* Metadata Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pb-4 text-sm">

              <MetaItem label="Scan Type" value="Grey Box" />
              <MetaItem label="Targets" value="google.com" />
              <MetaItem label="Started At" value="Nov 22, 09:00AM" />
              <MetaItem label="Credentials" value="2 Active" />
              <MetaItem label="Files" value="Control.pdf" />
              <MetaItem label="Checklists" value="40/350" highlight />

            </div>
          </div>
        </div>
      </div>

      {/* ===== CONSOLE + FINDINGS ===== */}
      <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-xl shadow overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* LEFT - Console */}
          <div className="lg:col-span-2 border-r  dark:bg-[#1A1A1A] dark:border-gray-800">
            <ConsolePanel />
          </div>

          {/* RIGHT - Findings */}
          <div className="p-4 border border-gray-400 rounded-md dark:border-gray-800 space-y-4 bg-gray-50 dark:bg-[#111]">

            <h3 className="text-regular font-bold dark:text-gray-300 border-b  border-gray-400 rounded-md dark:border-gray-800 px-2 py-1">
              Finding Log
            </h3>

            <FindingCard
              severity="critical"
              title="SQL Injection in Authentication Endpoint"
              endpoint="/api/users/profile"
              description="Time-based blind SQL injection confirmed on user-controlled input during authentication flow."
              time="10:45:23"
            />

            <FindingCard
              severity="high"
              title="Unauthorized Access to User Metadata"
              endpoint="/api/auth/login"
              description="Low-privilege user accessed metadata of other users. Missing access control."
              time="10:45:23"
            />

            <FindingCard
              severity="medium"
              title="Broken Authentication Rate Limiting"
              endpoint="/api/search"
              description="No effective rate limiting detected on login attempts."
              time="10:45:23"
            />

          </div>
        </div>

       
      </div>
       {/* Bottom Status Strip */}
        <div className=" border-t bg-blue-100 rounded-md border-gray-200 dark:border-gray-800 px-6 py-3
                        flex justify-between items-center text-xs text-gray-500">

<div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <span>Sub-Agents: 0</span>
          <span>Parallel Executions: 2</span>
          <span>Operations: 1</span>
          </div>

<div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <span className="text-red-500">Critical: 0</span>
          <span className="text-orange-500">High: 0</span>
          <span className="text-amber-500">Medium: 0</span>
          <span className="text-green-500">Low: 0</span>
</div>
        </div>
    </div>
  );
}

function MetaItem({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-semibold text-gray-500">
        {label}
      </span>
      <span
        className={`text-regular font-bold ${
          highlight ? "text-primary" : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {value}
      </span>
    </div>
  );
}