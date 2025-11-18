import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimerControls } from '../TimerControls';

describe('TimerControls', () => {
  const mockOnStart = jest.fn();
  const mockOnPause = jest.fn();
  const mockOnReset = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render start button when timer is not running', () => {
    render(
      <TimerControls
        isRunning={false}
        onStart={mockOnStart}
        onPause={mockOnPause}
        onReset={mockOnReset}
      />
    );

    expect(screen.getByLabelText('Start timer')).toBeInTheDocument();
    expect(screen.getByText('Launch Timer')).toBeInTheDocument();
  });

  it('should render pause button when timer is running', () => {
    render(
      <TimerControls
        isRunning={true}
        onStart={mockOnStart}
        onPause={mockOnPause}
        onReset={mockOnReset}
      />
    );

    expect(screen.getByLabelText('Pause timer')).toBeInTheDocument();
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });

  it('should call onStart when start button is clicked', () => {
    render(
      <TimerControls
        isRunning={false}
        onStart={mockOnStart}
        onPause={mockOnPause}
        onReset={mockOnReset}
      />
    );

    const startButton = screen.getByLabelText('Start timer');
    fireEvent.click(startButton);

    expect(mockOnStart).toHaveBeenCalledTimes(1);
    expect(mockOnPause).not.toHaveBeenCalled();
  });

  it('should call onPause when pause button is clicked', () => {
    render(
      <TimerControls
        isRunning={true}
        onStart={mockOnStart}
        onPause={mockOnPause}
        onReset={mockOnReset}
      />
    );

    const pauseButton = screen.getByLabelText('Pause timer');
    fireEvent.click(pauseButton);

    expect(mockOnPause).toHaveBeenCalledTimes(1);
    expect(mockOnStart).not.toHaveBeenCalled();
  });

  it('should call onReset when reset button is clicked', () => {
    render(
      <TimerControls
        isRunning={false}
        onStart={mockOnStart}
        onPause={mockOnPause}
        onReset={mockOnReset}
      />
    );

    const resetButton = screen.getByLabelText('Reset timer');
    fireEvent.click(resetButton);

    expect(mockOnReset).toHaveBeenCalledTimes(1);
  });
});

