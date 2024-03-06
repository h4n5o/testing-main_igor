const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });

  test("Test for age being 17", () => {
    expect(isAdult(17)).toBe(false);
  });

  
});