"use client";

type ProgressCircleProps = {
  value: number; // 0 - 100
};

export default function ProgressCircle({ value }: ProgressCircleProps) {
  const size = 110;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
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