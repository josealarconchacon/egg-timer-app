import { render, screen } from "@testing-library/react";
import { TimerDisplay } from "../TimerDisplay";

jest.mock("@/lib/utils", () => ({
  formatTime: jest.fn((t: number) => `formatted-${t}`),
  cn: (...classes: string[]) => classes.join(" "),
}));

describe("TimerDisplay - basic render", () => {
  test("renders formatted time", () => {
    render(<TimerDisplay timeLeft={120} isCompleted={false} />);
    expect(screen.getByRole("timer")).toHaveTextContent("formatted-120");
  });
});
