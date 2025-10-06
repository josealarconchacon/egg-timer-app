import { EggType } from "./types";

export const EGG_TYPES: EggType[] = [
  {
    id: "soft",
    name: "Soft Boiled",
    time: 180,
    emoji: "🥚",
    description: "3 min",
  },
  {
    id: "medium",
    name: "Medium Boiled",
    time: 420,
    emoji: "🍳",
    description: "7 min",
  },
  {
    id: "hard",
    name: "Hard Boiled",
    time: 600,
    emoji: "🥚",
    description: "10 min",
  },
  {
    id: "custom",
    name: "Custom",
    time: 300,
    emoji: "⏱️",
    description: "5 min",
  },
];

export const AUDIO_NOTIFICATION_URL =
  "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ0PVqzn7bJiHgU2jdXvz3ctBiZ9zPDhkz0KFmG46+ukWhELTKXh8bllHAU0iM/vz3YqBSOByvDekj8JFV666+ujWRIKSqPi8r5tIAYxhtDyz3gsB";
