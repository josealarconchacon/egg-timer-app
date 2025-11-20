import { render, screen } from "@testing-library/react";
import { TimerProgress } from "../TimerProgress";

describe("TimerProgress - initial tests", () => {
  test("renders SVG with correct role", () => {
    render(<TimerProgress progress={45} isCompleted={false} />);
    const svg = screen.getByRole("progressbar");
    expect(svg).toBeInTheDocument();
  });

  test("displays correct aria-valuenow", () => {
    render(<TimerProgress progress={75} isCompleted={false} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "75"
    );
  });
});
