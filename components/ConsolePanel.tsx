"use client";

import { activityLogs } from "@/data";
import { useState } from "react";

/**
 * Component that displays a live console for scan activity and verification logs.
 * Includes tab switching and specialized message formatting for security-related terms.
 */
export default function ConsolePanel() {
  const [tab, setTab] = useState("activity");

  return (
    <div className="flex flex-col h-full">

      {/* Header with status indicator */}
      <div className="flex items-center gap-3 px-4 py-3 border-b dark:border-gray-800 border-gray-300 text-sm">
        <span className="font-medium text-gray-600 dark:text-gray-400">Live Scan Console</span>
        <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
          Running...
        </span>
      </div>

      {/* Navigation tabs for different console views */}
      <div className="flex gap-6 bg-white dark:bg-[#1A1A1A] px-4 border-b dark:border-gray-800 border-gray-300 text-sm">
        <button
          onClick={() => setTab("activity")}
          className={`py-3 border-b-2 cursor-pointer ${
            tab === "activity"
              ? "border-primary text-primary"
              : "border-transparent text-gray-500"
          }`}
        >
          Activity Log
        </button>
        <button
          onClick={() => setTab("verification")}
          className={`py-3 border-b-2 cursor-pointer ${
            tab === "verification"
              ? "border-primary text-primary"
              : "border-transparent text-gray-500"
          }`}
        >
          Verification Loops
        </button>
      </div>

      {/* Main console content area */}
      <ActivityConsole logs={activityLogs} />
    </div>
  );
}

/**
 * Utility function to format console messages with syntax highlighting for specific terms.
 * @param message - The raw log message string.
 * @returns An array of React elements with highlighted parts.
 */
function formatMessage(message: string) {
  const parts = message.split(
    /(helpdesk\.democorp\.com|X-UserId:\s\d+|IDOR vulnerability|TODO:.*?\))/g
  );

  return parts.map((part, index) => {
    if (part.includes("helpdesk.democorp.com")) {
      return (
        <span key={index} className="text-teal-600 font-medium">
          {part}
        </span>
      );
    }

    if (part.includes("X-UserId")) {
      return (
        <span
          key={index}
          className="bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-1 rounded"
        >
          {part}
        </span>
      );
    }

    if (part.includes("IDOR vulnerability")) {
      return (
        <span key={index} className="text-red-500 font-medium">
          {part}
        </span>
      );
    }

    if (part.includes("TODO")) {
      return (
        <span key={index} className="text-teal-600 font-medium">
          {part}
        </span>
      );
    }

    return part;
  });
}

type LogEntry = {
  timestamp: string;
  message: string;
}

function ActivityConsole({ logs }: { logs: LogEntry[] }) {
  return (
    <div
      className="flex-1
        p-5
        bg-[#FAFAFA] dark:bg-[#1A1A1A]
        font-mono text-[12px] leading-relaxed
        text-gray-600 dark:text-gray-400
        overflow-auto
        space-y-4"
    >
      {logs.map((log, index) => (
        <div key={index}>
          <span className="text-gray-400">[{log.timestamp}]</span>{" "}
          {formatMessage(log.message)}
        </div>
      ))}
    </div>
  );
}