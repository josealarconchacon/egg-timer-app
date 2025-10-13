import { EggType, EggSize } from "./types";

export const EGG_TYPES: EggType[] = [
  {
    id: "soft",
    name: "Liquid",
    time: 179,
    emoji: "🥚",
    description: "2:59",
  },
  {
    id: "medium",
    name: "Soft",
    time: 218,
    emoji: "🍳",
    description: "3:38",
  },
  {
    id: "hard",
    name: "Hard",
    time: 304,
    emoji: "🥚",
    description: "5:04",
  },
  {
    id: "custom",
    name: "Custom",
    time: 0, // Will be set dynamically
    emoji: "⏱️",
    description: "Set time",
  },
];

// Egg sizes based on standard classifications
// Time multipliers are based on the physics of heat transfer (proportional to diameter²)
export const EGG_SIZES: EggSize[] = [
  {
    id: "small",
    name: "Small",
    diameter: '1.75"',
    weight: "1.5-1.9oz",
    timeMultiplier: 0.85, // -15% cooking time
    emoji: "🥚",
  },
  {
    id: "medium",
    name: "Medium",
    diameter: '2"',
    weight: "1.9-2.2oz",
    timeMultiplier: 1.0, // Standard/base time
    emoji: "🥚",
  },
  {
    id: "large",
    name: "Large",
    diameter: '2.25"',
    weight: "2.2-2.6oz",
    timeMultiplier: 1.15, // +15% cooking time
    emoji: "🥚",
  },
  {
    id: "xlarge",
    name: "X-Large",
    diameter: '2.4"',
    weight: "2.6oz+",
    timeMultiplier: 1.3, // +30% cooking time
    emoji: "🥚",
  },
];

export const AUDIO_NOTIFICATION_URL =
  "/sounds/mixkit-vintage-telephone-ringtone-1356.wav";
