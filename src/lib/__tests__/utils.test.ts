import { formatTime, calculateProgress, cn } from '../utils';

describe('formatTime', () => {
  it('should format seconds correctly', () => {
    expect(formatTime(0)).toBe('00:00');
    expect(formatTime(59)).toBe('00:59');
    expect(formatTime(60)).toBe('01:00');
    expect(formatTime(125)).toBe('02:05');
    expect(formatTime(179)).toBe('02:59');
    expect(formatTime(3600)).toBe('60:00');
  });
});

describe('calculateProgress', () => {
  it('should calculate progress correctly', () => {
    expect(calculateProgress(100, 100)).toBe(0);
    expect(calculateProgress(100, 50)).toBe(50);
    expect(calculateProgress(100, 0)).toBe(100);
    expect(calculateProgress(200, 100)).toBe(50);
  });

  it('should handle edge cases', () => {
    expect(calculateProgress(0, 0)).toBeNaN();
    expect(calculateProgress(100, 150)).toBe(-50);
  });
});

describe('cn', () => {
  it('should combine class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
    expect(cn('class1', false, 'class2')).toBe('class1 class2');
    expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
    expect(cn('class1', true && 'class2')).toBe('class1 class2');
  });

  it('should handle empty inputs', () => {
    expect(cn()).toBe('');
    expect(cn('')).toBe('');
    expect(cn(false, undefined)).toBe('');
  });
});

