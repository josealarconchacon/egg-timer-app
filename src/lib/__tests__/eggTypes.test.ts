import type { EggType, EggSize, TimerState, TimerAction } from "../types";

describe("Type structure tests", () => {
  test("EggType has required fields", () => {
    expect(validEgg.id).toBe("large");
    expect(validEgg.name).toBe("Large Egg");
    expect(validEgg.time).toBe(7);
    expect(validEgg.emoji).toBe("🥚");
    expect(validEgg.description).toBe("A standard large egg");
  });

  test("EggSize has required fields", () => {
    expect(size.timeMultiplier).toBeGreaterThan(0);
    expect(typeof size.diameter).toBe("string");
  });

  test("TimerState has correct shape", () => {
    expect(state.timeLeft).toBe(300);
    expect(state.isRunning).toBe(false);
  });
});

describe("TimerAction type tests", () => {
  test("valid TimerAction types compile", () => {
    const a: TimerAction = { type: "START" };
    const b: TimerAction = { type: "PAUSE" };
    const c: TimerAction = { type: "RESET" };
    const d: TimerAction = { type: "TICK" };
    const e: TimerAction = { type: "COMPLETE" };
    const f: TimerAction = { type: "SET_TIME", payload: 120 };

    expect(a.type).toBe("START");
    expect(f.payload).toBe(120);
    expect(a.type).toBe("START");
    expect(b.type).toBe("PAUSE");
    expect(c.type).toBe("RESET");
    expect(d.type).toBe("TICK");
    expect(e.type).toBe("COMPLETE");
    expect(f.payload).toBe(120);
  });
});

// Mock EggType
const validEgg: EggType = {
  id: "large",
  name: "Large Egg",
  time: 7,
  emoji: "🥚",
  description: "A standard large egg",
};

// Mock EggSize
const size: EggSize = {
  id: "xl",
  name: "Extra Large",
  diameter: "45mm",
  weight: "63g",
  timeMultiplier: 1.2,
  emoji: "🍳",
};

// Mock TimerState
const state: TimerState = {
  selectedTime: 300,
  timeLeft: 300,
  isRunning: false,
  isCompleted: false,
};
