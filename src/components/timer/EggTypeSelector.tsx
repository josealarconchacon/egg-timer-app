import React, { useState } from "react";
import { EggType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CustomTimeInput } from "./CustomTimeInput";

interface EggTypeSelectorProps {
  eggTypes: EggType[];
  selectedTime: number;
  onSelect: (time: number) => void;
  disabled: boolean;
}

const EggTypeSelectorComponent: React.FC<EggTypeSelectorProps> = ({
  eggTypes,
  selectedTime,
  onSelect,
  disabled,
}) => {
  const [isCustomTimeOpen, setIsCustomTimeOpen] = useState(false);
  const [customTime, setCustomTime] = useState(300); // Default 5 minutes

  const handleEggSelect = (egg: EggType) => {
    if (egg.id === "custom") {
      setIsCustomTimeOpen(true);
    } else {
      onSelect(egg.time);
    }
  };

  const handleCustomTimeConfirm = (time: number) => {
    setCustomTime(time);
    onSelect(time);
  };

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {eggTypes.map((egg) => (
        <button
          key={egg.id}
          onClick={() => handleEggSelect(egg)}
          disabled={disabled}
          className={cn(
            "p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            (
              egg.id === "custom"
                ? selectedTime === customTime
                : selectedTime === egg.time
            )
              ? "scale-105"
              : "border-gray-200 bg-white",
            disabled && "opacity-50 cursor-not-allowed hover:scale-100"
          )}
          style={{
            borderColor: (
              egg.id === "custom"
                ? selectedTime === customTime
                : selectedTime === egg.time
            )
              ? "#2f4858"
              : undefined,
            backgroundColor: (
              egg.id === "custom"
                ? selectedTime === customTime
                : selectedTime === egg.time
            )
              ? "#748ea0"
              : undefined,
          }}
          aria-label={`Select ${egg.name} - ${egg.description}`}
          aria-pressed={selectedTime === egg.time}
        >
          <div className="text-2xl sm:text-3xl mb-1">{egg.emoji}</div>
          <div
            className="text-xs sm:text-sm font-semibold"
            style={{
              color: (
                egg.id === "custom"
                  ? selectedTime === customTime
                  : selectedTime === egg.time
              )
                ? "#ffffff"
                : "#2f4858",
            }}
          >
            {egg.name}
          </div>
          <div
            className="text-xs"
            style={{
              color: (
                egg.id === "custom"
                  ? selectedTime === customTime
                  : selectedTime === egg.time
              )
                ? "#ffffff"
                : "#748ea0",
            }}
          >
            {egg.id === "custom" && selectedTime === customTime
              ? `${Math.floor(customTime / 60)}:${(customTime % 60)
                  .toString()
                  .padStart(2, "0")}`
              : egg.description}
          </div>
        </button>
      ))}

      <CustomTimeInput
        isOpen={isCustomTimeOpen}
        onClose={() => setIsCustomTimeOpen(false)}
        onConfirm={handleCustomTimeConfirm}
        currentTime={Math.floor(customTime / 60)}
      />
    </div>
  );
};

EggTypeSelectorComponent.displayName = "EggTypeSelector";

export const EggTypeSelector = React.memo(EggTypeSelectorComponent);
