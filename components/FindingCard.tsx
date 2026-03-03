// import SeverityBadge from "./SeverityBadge";

type FindingCardProps = {
  severity: "critical" | "high" | "medium" | "low";
  title: string;
  endpoint: string;
  description: string;
  time: string;
};

export default function FindingCard({
  severity,
  title,
  endpoint,
  description,
  time,
}: FindingCardProps) {
  const severityStyles = {
    critical: {
      badge: "bg-red-600 text-white dark:bg-red-900/40 dark:text-red-400",
    },
    high: {
      badge:
        "bg-orange-600 text-white dark:bg-orange-900/40 dark:text-orange-400",
    },
    medium: {
      badge:
        "bg-amber-600 text-white dark:bg-amber-900/40 dark:text-amber-400",
    },
    low: {
      badge:
        "bg-green-600 text-white dark:bg-green-900/40 dark:text-green-400",
    },
  };

  return (
    <div
      className="
        bg-white dark:bg-[#1A1A1A]
        border border-gray-200 dark:border-gray-800
        rounded-xl
        p-4
        space-y-3
        hover:shadow-sm
        transition
      "
    >
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${severityStyles[severity].badge}`}
        >
          {severity.charAt(0).toUpperCase() + severity.slice(1)}
        </span>

        <span className="text-xs text-gray-400">{time}</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-1">
        {title}
      </h3>

      {/* Endpoint */}
      <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
        {endpoint}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}