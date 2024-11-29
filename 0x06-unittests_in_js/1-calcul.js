#!/usr/bin/env node

/**
 * Calculates the result of an operation on two numbers after rounding them.
 * @param {string} type - The type of operation ('SUM', 'SUBTRACT', or 'DIVIDE').
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number | string} The result of the operation, or 'Error' for division by zero.
 */
const calculateNumber = (type, a, b) => {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
  
    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        return 'Error'; // Handle invalid operation types
    }
  };
  
  module.exports = calculateNumber;