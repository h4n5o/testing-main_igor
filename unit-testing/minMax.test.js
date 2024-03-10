
const { min, max } = require('./minMax');

// Test cases for min function
console.log(min(5, 10) === 5); // Expected output: true
console.log(min(-3, 2) === -3); // Expected output: true
console.log(min(0, 0) === 0); // Expected output: true

// Test cases for max function
console.log(max(5, 10) === 10); // Expected output: true
console.log(max(-3, 2) === 2); // Expected output: true
console.log(max(0, 0) === 0); // Expected output: true
