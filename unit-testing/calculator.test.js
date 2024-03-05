

// Tests für Addition (a, b)
describe("Additionstests", () => {
    test("Die Summe von 2 + 5 ist 7", () => {
        const result = calculator.sum(2, 5);
        expect(result).toEqual(7);
    });

    test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
        const result = calculator.sum("Apfel", 5);
        expect(result).toEqual("Apfel5");
    });
});

// Tests für Division (a, b)
describe("Divisionstests", () => {
    test("Der Quotient aus 10 durch 2 ist 5", () => {
        const result = calculator.divide(10, 2);
        expect(result).toEqual(5);
    });

    test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
        const result = calculator.divide(10, 3);
        expect(result).toBeCloseTo(3.33, 2);
    });

    test("Positive durch negative Zahl ist kleiner als 0", () => {
        const result = calculator.divide(10, -2);
        expect(result).toBeLessThan(0);
    });

    test("Negativ durch negative Zahl ist größer als 0", () => {
        const result = calculator.divide(-10, -2);
        expect(result).toBeGreaterThan(0);
    });
});

// Tests für Subtraktion (a, b)
describe("Subtraktionstests", () => {
    test("A und B subtrahieren: 5 - 3 = 2", () => {
        const result = subtract(5, 3);
        expect(result).toEqual(2);
    });

    test("A und B subtrahieren: -5 - 3 = -8", () => {
        const result = subtract(-5, 3);
        expect(result).toEqual(-8);
    });

    test("A und B subtrahieren: 0 - 3 = -3", () => {
        const result = subtract(0, 3);
        expect(result).toEqual(-3);
    });
});

// Tests für Multiplikation (a, b)
describe("Multiplikationstests", () => {
    test("A und B multiplizieren: 2 * 3 = 6", () => {
        const result = multiply(2, 3);
        expect(result).toEqual(6);
    });

    test("A und B multiplizieren: -2 * 3 = -6", () => {
        const result = multiply(-2, 3);
        expect(result).toEqual(-6);
    });

    test("A und B multiplizieren: 0 * 3 = 0", () => {
        const result = multiply(0, 3);
        expect(result).toEqual(0);
    });
});
