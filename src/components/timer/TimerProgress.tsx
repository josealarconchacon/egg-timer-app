import React from "react";

interface TimerProgressProps {
  progress: number;
  isCompleted: boolean;
}

const TimerProgressComponent: React.FC<TimerProgressProps> = ({
  progress,
  isCompleted,
}) => {
  const circumference = 2 * Math.PI * 120;
  const offset = circumference * (1 - progress / 100);

  return (
    <svg
      className="w-full h-full transform -rotate-90"
      viewBox="0 0 256 256"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Timer progress: ${Math.round(progress)}%`}
    >
      <circle
        cx="128"
        cy="128"
        r="120"
        stroke="#f3f4f6"
        strokeWidth="12"
        fill="none"
        className="opacity-30"
      />
      <circle
        cx="128"
        cy="128"
        r="120"
        stroke={isCompleted ? "#10b981" : "#2f4858"}
        strokeWidth="12"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
        style={{
          filter: isCompleted
            ? "drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))"
            : "none",
        }}
      />
    </svg>
  );
};

TimerProgressComponent.displayName = "TimerProgress";

export const TimerProgress = React.memo(TimerProgressComponent);
