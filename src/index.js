/**
 * MSIG Test - Main implementation
 */

/**
 * Returns a greeting message for the given name.
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  return `Hello, ${name}!`;
}

/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Reverses a string.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Checks whether a number is prime.
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Returns the nth Fibonacci number (0-indexed).
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer');
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

module.exports = { greet, add, reverseString, isPrime, fibonacci };
