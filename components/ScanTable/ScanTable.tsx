"use client";
import { useRouter } from "next/navigation";


type Scan = {
  id: string;
  name: string;
  type: string;
  status: "Completed" | "Scheduled" | "Failed";
  progress: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  lastScan: string;
};

export default function ScanTable({ scans }: { scans: Scan[] }) {
  const router = useRouter();

  return (
    <>
      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white dark:bg-[#1A1A1A] rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-left border-b dark:border-gray-700 text-gray-500">
            <tr>
              <th className="p-4 font-medium">Scan Name</th>
              <th className="font-medium">Type</th>
              <th className="font-medium">Status</th>
              <th className="font-medium">Progress</th>
              <th className="font-medium">Vulnerabilities</th>
              <th className="font-medium">Last Scan</th>
            </tr>
          </thead>
          <tbody>
            {scans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => router.push(`/scans/${scan.id}`)}
                className="cursor-pointer border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#222] transition"
              >
                <td className="p-4 font-medium">{scan.name}</td>
                <td>{scan.type}</td>
                <td>
                  <StatusChip status={scan.status} />
                </td>
                <td><ProgressBar progress={scan.progress}/></td>
                <td>
                  <div className="flex gap-2">
                    <SeverityBadge level="critical" count={scan.critical} />
                    <SeverityBadge level="high" count={scan.high} />
                    <SeverityBadge level="medium" count={scan.medium} />
                    <SeverityBadge level="low" count={scan.low} />
                  </div>
                </td>
                <td>{scan.lastScan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {scans.map((scan) => (
          <div
            key={scan.id}
            onClick={() => router.push(`/scans/${scan.id}`)}
            className="bg-white dark:bg-[#1A1A1A] rounded-xl p-4 shadow cursor-pointer hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{scan.name}</p>
                <p className="text-xs text-gray-500">{scan.type}</p>
              </div>
              <StatusChip status={scan.status} />
            </div>

            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Progress: <ProgressBar progress={scan.progress} />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <SeverityBadge level="critical" count={scan.critical} />
              <SeverityBadge level="high" count={scan.high} />
              <SeverityBadge level="medium" count={scan.medium} />
              <SeverityBadge level="low" count={scan.low} />
            </div>

            <div className="mt-3 text-xs text-gray-500">
              Last Scan: {scan.lastScan}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

type Status = "Completed" | "Scheduled" | "Failed";

const STATUS_STYLES: Record<Status, string> = {
  Completed:
    "bg-emerald-100 border border-emerald-500 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Scheduled:
    "bg-gray-100 border border-gray-500 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  Failed:
    "bg-red-100 border border-red-500 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

function StatusChip({ status }: { status: Status }) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1
        text-xs md:text-sm
        font-medium
        rounded-md
        whitespace-nowrap
        ${STATUS_STYLES[status]}
      `}
    >
      {status}
    </span>
  );
}


type Severity = "critical" | "high" | "medium" | "low";

const SEVERITY_STYLES: Record<Severity, string> = {
  critical:
    "bg-red-500 text-white dark:bg-red-900/40 dark:text-red-400",
  high:
    "bg-orange-500 text-white dark:bg-orange-900/40 dark:text-orange-400",
  medium:
    "bg-amber-500 text-white dark:bg-amber-900/40 dark:text-amber-400",
  low:
    "bg-green-500 text-white dark:bg-green-900/40 dark:text-green-400",
};

function SeverityBadge({
  level,
  count,
}: {
  level: Severity;
  count?: number;
}) {
  return (
    <span
      className={`
         flex items-center justify-center gap-1.5
        w-7 h-7
        text-xs md:text-sm
        font-medium
        rounded-md
        whitespace-nowrap
        ${SEVERITY_STYLES[level]}
      `}
    >
    
      {count !== undefined && (
        <span className="font-semibold ">
          {count}
        </span>
      )}
    </span>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  // Clamp progress between 0–100 so chaos doesn't break layout
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="flex items-center gap-3 w-[200px]">
      <div className="w-full bg-neutral-quaternary rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${safeProgress}%` }}
        />
      </div>

      <span className="text-sm font-medium text-gray-600 min-w-[40px] text-right">
        {safeProgress}%
      </span>
    </div>
  );
}