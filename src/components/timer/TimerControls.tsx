import React from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerControlsComponent: React.FC<TimerControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}) => {
  return (
    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-stretch">
      <Button
        variant={isRunning ? "danger" : "primary"}
        onClick={isRunning ? onPause : onStart}
        aria-label={isRunning ? "Pause timer" : "Start timer"}
        className="w-full xs:flex-1 sm:w-auto px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg font-semibold justify-center shadow-lg sm:shadow-none"
      >
        {isRunning ? (
          <>
            <Pause size={24} className="flex-shrink-0" />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play size={24} className="flex-shrink-0" />
            <span>Launch Timer</span>
          </>
        )}
      </Button>

      <Button
        variant="secondary"
        onClick={onReset}
        aria-label="Reset timer"
        className="w-full xs:w-auto px-6 py-4 justify-center shadow-md sm:shadow-none"
      >
        <RotateCcw size={20} className="flex-shrink-0" />
        <span>Reset</span>
      </Button>
    </div>
  );
};

TimerControlsComponent.displayName = "TimerControls";

export const TimerControls = React.memo(TimerControlsComponent);
