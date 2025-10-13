import React from "react";
import { EggSize } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EggSizeSelectorProps {
  eggSizes: EggSize[];
  selectedSizeId: string;
  onSelect: (sizeId: string) => void;
  disabled: boolean;
}

const EggSizeSelectorComponent: React.FC<EggSizeSelectorProps> = ({
  eggSizes,
  selectedSizeId,
  onSelect,
  disabled,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {eggSizes.map((size) => (
        <button
          key={size.id}
          onClick={() => onSelect(size.id)}
          disabled={disabled}
          className={cn(
            "p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            selectedSizeId === size.id
              ? "scale-105"
              : "border-gray-200 bg-white",
            disabled && "opacity-50 cursor-not-allowed hover:scale-100"
          )}
          style={{
            borderColor: selectedSizeId === size.id ? "#2f4858" : undefined,
            backgroundColor: selectedSizeId === size.id ? "#748ea0" : undefined,
          }}
          aria-label={`Select ${size.name} egg - ${size.diameter}, ${size.weight}`}
          aria-pressed={selectedSizeId === size.id}
        >
          <div
            className="text-xs sm:text-sm font-semibold mb-1"
            style={{
              color: selectedSizeId === size.id ? "#ffffff" : "#2f4858",
            }}
          >
            {size.name}
          </div>
          <div
            className="text-xs"
            style={{
              color: selectedSizeId === size.id ? "#ffffff" : "#748ea0",
            }}
          >
            {size.diameter}
          </div>
          <div
            className="text-xs"
            style={{
              color: selectedSizeId === size.id ? "#ffffff" : "#748ea0",
            }}
          >
            {size.weight}
          </div>
        </button>
      ))}
    </div>
  );
};

EggSizeSelectorComponent.displayName = "EggSizeSelector";

export const EggSizeSelector = React.memo(EggSizeSelectorComponent);
