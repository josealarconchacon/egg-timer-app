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

describe("TimerDisplay - accessibility", () => {
  test("provides correct aria-label", () => {
    render(<TimerDisplay timeLeft={95} isCompleted={false} />);
    expect(screen.getByRole("timer")).toHaveAttribute(
      "aria-label",
      "Time remaining: formatted-95"
    );
  });

  test("aria-live is polite", () => {
    render(<TimerDisplay timeLeft={50} isCompleted={false} />);
    expect(screen.getByRole("timer")).toHaveAttribute("aria-live", "polite");
  });
});

describe("TimerDisplay - completed state", () => {
  test("shows 'Done! 🎉' message when completed", () => {
    render(<TimerDisplay timeLeft={0} isCompleted={true} />);
    expect(screen.getByText("Done! 🎉")).toBeInTheDocument();
  });

  test("applies green styling on completion", () => {
    render(<TimerDisplay timeLeft={0} isCompleted={true} />);
    const timer = screen.getByRole("timer");
    expect(timer.className).toContain("text-green-600");
  });
});
