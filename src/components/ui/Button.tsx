import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const getButtonStyle = () => {
    if (variant === "primary") {
      return {
        backgroundColor: "#2f4858",
        ":hover": {
          backgroundColor: "#516a7b",
        },
      };
    }
    return {};
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      style={getButtonStyle()}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.backgroundColor = "#516a7b";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.backgroundColor = "#2f4858";
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
