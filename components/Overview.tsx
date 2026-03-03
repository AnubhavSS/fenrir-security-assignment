"use client";

import { IoWarningOutline } from "react-icons/io5";


export default function Overview() {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] 
                    rounded-xl p-4 md:p-6 shadow
                    flex flex-col gap-6">

      {/* TOP ROW: ORG INFO */}
  <div className="flex flex-col md:flex-row md:items-center justify-center gap-4">

        {/* Left Info */}
   <div className="flex-1 grid grid-cols-2 md:flex md:flex-wrap gap-4">

    <InfoItem label="Org" value="Project X" />
    <InfoItem label="Owner" value="Nammagiri" />
    <InfoItem label="Total Scans" value="100" />
    <InfoItem label="Scheduled" value="1000" />
    <InfoItem label="Rescans" value="100" />
    <InfoItem label="Failed" value="100" />

  </div>

        {/* Time indicator */}
        <div className="text-xs text-gray-500 dark:text-gray-500 flex">
          10 mins ago
        </div>
      </div>

      {/* SEVERITY SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">

        <SeverityStat
          label="Critical"
          value={86}
          change="+2% increase than yesterday"
          color="critical"
          respective={"increase"}
        />

        <SeverityStat
          label="High"
          value={16}
          change="+0.9% increase than yesterday"
          color="high"
          respective={"increase"}
        />

        <SeverityStat
          label="Medium"
          value={26}
          change="-0.9% decrease than yesterday"
          color="medium"
          respective={"decrease"}       
        />

        <SeverityStat
          label="Low"
          value={16}
          change="+0.9% increase than yesterday"
          color="low"
          respective={"increase"}
        />
      </div>
    </div>
  );
}

function SeverityStat({
  label,
  value,
  change,
  color,
  respective,
}: {
  label: string;
  value: number;
  change: string;
  color: "critical" | "high" | "medium" | "low";
  respective: "increase" | "decrease";
}) {
  const colorMap = {
    critical: {
      text: "text-dark dark:text-red-400",
      icon: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/40",
    },
    high: {
      text: "text-orange-600 dark:text-orange-400",
      icon: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-900/40",
    },
    medium: {
      text: "text-amber-600 dark:text-amber-400",
      icon: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/40",
    },
    low: {
      text: "text-blue-600 dark:text-blue-400",
      icon: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/40",
    },
  };

  return (
    <div className="dark:bg-[#111] rounded-lg p-4 flex flex-col gap-3">
      
      {/* Row 1 */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {label} Severity
        </p>

        <div
          className={`w-9 h-9 rounded-md flex items-center justify-center ${colorMap[color].bg}`}
        >
          <IoWarningOutline
            className={`text-lg ${colorMap[color].icon}`}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-center justify-between  gap-2">
       <p className={`text-xl md:text-2xl font-semibold text-dark dark:text-light`}>
          {value}
        </p>

        <p className={`text-xs ${respective === "increase" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
          {change}
        </p>
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex-1 items-center gap-2 justify-between border-r border-gray-200 dark:border-gray-700
                    rounded-lg px-4 py-2
                    ">
      <span className="text-sm text-gray-500 font-medium">
        {label}:
      </span>
      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
         {"   "}{value}
      </span>
    </div>
  );
}