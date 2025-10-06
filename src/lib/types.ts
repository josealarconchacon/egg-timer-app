export interface EggType {
  id: string;
  name: string;
  time: number;
  emoji: string;
  description: string;
}

export interface TimerState {
  selectedTime: number;
  timeLeft: number;
  isRunning: boolean;
  isCompleted: boolean;
}

export type TimerAction =
  | { type: "START" }
  | { type: "PAUSE" }
  | { type: "RESET" }
  | { type: "TICK" }
  | { type: "COMPLETE" }
  | { type: "SET_TIME"; payload: number };
