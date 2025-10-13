import { EggType } from "./types";

export const EGG_TYPES: EggType[] = [
  {
    id: "soft",
    name: "Soft",
    time: 180,
    emoji: "🥚",
    description: "3 min",
  },
  {
    id: "medium",
    name: "Medium",
    time: 360,
    emoji: "🍳",
    description: "6 min",
  },
  {
    id: "hard",
    name: "Hard",
    time: 540,
    emoji: "🥚",
    description: "9 min",
  },
  {
    id: "custom",
    name: "Custom",
    time: 0, // Will be set dynamically
    emoji: "⏱️",
    description: "Set time",
  },
];

export const AUDIO_NOTIFICATION_URL =
  "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ0PVqzn7bJiHgU2jdXvz3ctBiZ9zPDhkz0KFmG46+ukWhELTKXh8bllHAU0iM/vz3YqBSOByvDekj8JFV666+ujWRIKSqPi8r5tIAYxhtDyz3gsB";
