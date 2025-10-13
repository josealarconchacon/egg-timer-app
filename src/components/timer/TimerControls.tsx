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
    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
      <Button
        variant={isRunning ? "danger" : "primary"}
        onClick={isRunning ? onPause : onStart}
        aria-label={isRunning ? "Pause timer" : "Start timer"}
        className="w-full xs:w-auto px-8 py-4 text-lg font-semibold"
      >
        {isRunning ? (
          <>
            <Pause size={24} />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play size={24} />
            <span>Launch Timer</span>
          </>
        )}
      </Button>

      <Button
        variant="secondary"
        onClick={onReset}
        aria-label="Reset timer"
        className="w-full xs:w-auto px-6 py-4"
      >
        <RotateCcw size={20} />
        <span className="hidden xs:inline">Reset</span>
      </Button>
    </div>
  );
};

TimerControlsComponent.displayName = "TimerControls";

export const TimerControls = React.memo(TimerControlsComponent);
