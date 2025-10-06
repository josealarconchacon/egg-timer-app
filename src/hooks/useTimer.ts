import { useReducer, useEffect, useCallback } from "react";
import { TimerState, TimerAction } from "@/lib/types";

const timerReducer = (state: TimerState, action: TimerAction): TimerState => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true, isCompleted: false };
    case "PAUSE":
      return { ...state, isRunning: false };
    case "RESET":
      return {
        ...state,
        timeLeft: state.selectedTime,
        isRunning: false,
        isCompleted: false,
      };
    case "TICK":
      return { ...state, timeLeft: Math.max(0, state.timeLeft - 1) };
    case "COMPLETE":
      return { ...state, isRunning: false, isCompleted: true, timeLeft: 0 };
    case "SET_TIME":
      return {
        ...state,
        selectedTime: action.payload,
        timeLeft: action.payload,
        isRunning: false,
        isCompleted: false,
      };
    default:
      return state;
  }
};

export const useTimer = (initialTime: number) => {
  const [state, dispatch] = useReducer(timerReducer, {
    selectedTime: initialTime,
    timeLeft: initialTime,
    isRunning: false,
    isCompleted: false,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (state.isRunning && state.timeLeft > 0) {
      interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    } else if (state.timeLeft === 0 && state.isRunning) {
      dispatch({ type: "COMPLETE" });
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };
  }, [state.isRunning, state.timeLeft]);

  const start = useCallback(() => dispatch({ type: "START" }), []);
  const pause = useCallback(() => dispatch({ type: "PAUSE" }), []);
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);
  const setTime = useCallback((time: number) => {
    dispatch({ type: "SET_TIME", payload: time });
  }, []);

  return {
    ...state,
    start,
    pause,
    reset,
    setTime,
  };
};
