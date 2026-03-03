"use client";

/**
 * Props for the ProgressCircle component.
 */
type ProgressCircleProps = {
  /** The percentage value to display (0 to 100). */
  value: number;
};

/**
 * Component to display a circular progress indicator.
 * Currently uses an SVG to render the circle and displays the percentage in the center.
 */
export default function ProgressCircle({ value }: ProgressCircleProps) {
  /** The diameter of the circle in pixels. */
  const size = 110;
  /** The width of the circle's stroke. */
  const strokeWidth = 8;
  /** The radius of the circle, accounting for stroke width. */
  const radius = (size - strokeWidth) / 2;
  /** The total circumference of the circle for stroke-dasharray calculation. */
  const circumference = 2 * Math.PI * radius;
  

  return (
    <div className="flex flex-col items-center pr-5 gap-2 md:border-r md:border-gray-200">

      <div className="relative">

        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="bg-dark"
            fill="fill"
          />

          {/* Progress Circle */}
          {/* <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="#0CC8A8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          /> */}
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl font-semibold text-primary ">
              {value}%
            </span>
            <span className="text-xs text-primary ">
        In Progress
      </span>
          </div>

        </div>
      </div>

      

    </div>
  );
}