const { greet, add, reverseString, isPrime, fibonacci } = require('../src/index');

describe('greet', () => {
  test('returns a greeting for a valid name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('throws for an empty name', () => {
    expect(() => greet('')).toThrow('Name must be a non-empty string');
  });

  test('throws for a non-string name', () => {
    expect(() => greet(42)).toThrow('Name must be a non-empty string');
  });
});

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test('adds zero', () => {
    expect(add(0, 5)).toBe(5);
  });

  test('throws for non-numeric first argument', () => {
    expect(() => add('1', 2)).toThrow('Both arguments must be numbers');
  });

  test('throws for non-numeric second argument', () => {
    expect(() => add(1, null)).toThrow('Both arguments must be numbers');
  });
});

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('returns empty string for empty input', () => {
    expect(reverseString('')).toBe('');
  });

  test('throws for non-string input', () => {
    expect(() => reverseString(123)).toThrow('Input must be a string');
  });
});

describe('isPrime', () => {
  test('returns true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('returns true for 7', () => {
    expect(isPrime(7)).toBe(true);
  });

  test('returns false for 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  test('returns false for 9', () => {
    expect(isPrime(9)).toBe(false);
  });

  test('returns false for negative numbers', () => {
    expect(isPrime(-5)).toBe(false);
  });
});

describe('fibonacci', () => {
  test('returns 0 for n=0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('returns 1 for n=1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('returns 8 for n=6', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('throws for negative n', () => {
    expect(() => fibonacci(-1)).toThrow('n must be a non-negative integer');
  });
});
