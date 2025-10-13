import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { X, Clock } from "lucide-react";

interface CustomTimeInputProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (minutes: number) => void;
  currentTime?: number;
}

export const CustomTimeInput: React.FC<CustomTimeInputProps> = ({
  isOpen,
  onClose,
  onConfirm,
  currentTime = 5,
}) => {
  const [minutes, setMinutes] = useState(currentTime);
  const [seconds, setSeconds] = useState(0);

  const handleConfirm = () => {
    const totalSeconds = minutes * 60 + seconds;
    if (totalSeconds >= 60) {
      // Minimum 1 minute
      onConfirm(totalSeconds);
      onClose();
    }
  };

  const handleCancel = () => {
    setMinutes(currentTime);
    setSeconds(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold" style={{ color: "#2f4858" }}>
            Set Custom Time
          </h3>
          <button
            onClick={handleCancel}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <p className="text-sm mb-4" style={{ color: "#516a7b" }}>
              Enter your desired cooking time
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#2f4858" }}
              >
                Minutes
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={minutes}
                onChange={(e) =>
                  setMinutes(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  borderColor: "#748ea0",
                }}
              />
            </div>

            <div className="text-center">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#2f4858" }}
              >
                Seconds
              </label>
              <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) =>
                  setSeconds(
                    Math.max(0, Math.min(59, parseInt(e.target.value) || 0))
                  )
                }
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  borderColor: "#748ea0",
                }}
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm" style={{ color: "#748ea0" }}>
              Total: {minutes}:{seconds.toString().padStart(2, "0")}
            </p>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              variant="secondary"
              onClick={handleCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleConfirm}
              className="flex-1"
              disabled={minutes < 1}
            >
              <Clock size={16} />
              Set Time
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
