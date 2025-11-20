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

describe("TimerProgress - accessibility", () => {
  test("has correct aria-label", () => {
    render(<TimerProgress progress={33} isCompleted={false} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-label",
      "Timer progress: 33%"
    );
  });

  test("aria min/max are correct", () => {
    render(<TimerProgress progress={10} isCompleted={false} />);
    const svg = screen.getByRole("progressbar");
    expect(svg).toHaveAttribute("aria-valuemin", "0");
    expect(svg).toHaveAttribute("aria-valuemax", "100");
  });
});

describe("TimerProgress - snapshot", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <TimerProgress progress={10} isCompleted={false} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
