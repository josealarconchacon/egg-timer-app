import React from "react";
import { formatTime } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface TimerDisplayProps {
  timeLeft: number;
  isCompleted: boolean;
}

const TimerDisplayComponent: React.FC<TimerDisplayProps> = ({
  timeLeft,
  isCompleted,
}) => {
  return (
    <div className="text-center">
      <div
        className={cn(
          "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-500",
          isCompleted ? "text-green-600 scale-110" : "text-gray-800"
        )}
        role="timer"
        aria-live="polite"
        aria-label={`Time remaining: ${formatTime(timeLeft)}`}
      >
        {formatTime(timeLeft)}
      </div>
      {isCompleted && (
        <div className="text-green-600 font-semibold mt-2 animate-bounce text-base sm:text-lg md:text-xl">
          Done! 🎉
        </div>
      )}
    </div>
  );
};

TimerDisplayComponent.displayName = "TimerDisplay";

export const TimerDisplay = React.memo(TimerDisplayComponent);
