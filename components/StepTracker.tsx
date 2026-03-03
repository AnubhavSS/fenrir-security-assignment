"use client";

import { FiSearch, FiGrid, FiActivity, FiCheckCircle, FiFileText } from "react-icons/fi";

/**
 * List of steps in the security scanning process.
 */
const steps = [
  { label: "Spidering", icon: <FiSearch /> },
  { label: "Mapping", icon: <FiGrid /> },
  { label: "Testing", icon: <FiActivity /> },
  { label: "Validating", icon: <FiCheckCircle /> },
  { label: "Reporting", icon: <FiFileText /> },
];

/**
 * Component to track and visualize the current step of a security scan.
 * Uses a horizontal progress line with icons for each stage.
 */
export default function StepTracker({ active }: { 
  /** The index of the currently active step (0-based). */
  active: number 
}) {
  return (
    <div className="relative w-full">

      {/* Horizontal progress line in the background */}
      <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200 dark:bg-gray-700" />

      <div className="relative flex justify-between items-start">

        {steps.map((step, index) => {
          const isActive = index === active;
          const isCompleted = index < active;

          return (
            <div key={step.label} className="flex flex-col items-center w-full">

              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                  text-sm
                  transition
                  ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : isCompleted
                      ? "bg-primary/20 text-primary"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-500"}`}
              >
                {step.icon}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-xs text-center
                  ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-gray-500"}`}
              >
                {step.label}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}