const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});



// Tests für Subtraktion (a, b)
function test_subtract() {
    assert(subtract(5, 3) === 2);
    assert(subtract(-5, 3) === -8);
    assert(subtract(0, 3) === -3);
}
// Tests für Multiplikation(a, b)
function test_multiply() {
    assert(multiply(2, 3) === 6);
    assert(multiply(-2, 3) === -6);
    assert(multiply(0, 3) === 0);
}

// Call the test functions
test_subtract("A und B subtrahieren");
test_multiply("A und B multiplizieren");

