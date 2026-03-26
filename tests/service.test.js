const { add, multiply, isEven, toUpper, isEmpty, divide } = require("../src/service");

describe("Unit Tests", () => {

  test("add 1 + 2 = 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("add 5 + 5 = 10", () => {
    expect(add(5, 5)).toBe(10);
  });

  test("multiply 2 * 3 = 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("multiply 4 * 5 = 20", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("isEven 4 = true", () => {
    expect(isEven(4)).toBe(true);
  });

  test("isEven 5 = false", () => {
    expect(isEven(5)).toBe(false);
  });

  test("toUpper hola", () => {
    expect(toUpper("hola")).toBe("HOLA");
  });

  test("toUpper test", () => {
    expect(toUpper("test")).toBe("TEST");
  });

  test("isEmpty [] = true", () => {
    expect(isEmpty([])).toBe(true);
  });

  test("isEmpty [1] = false", () => {
    expect(isEmpty([1])).toBe(false);
  });

  // 🔥 TDD TEST (importante)
  test("divide 6 / 2 = 3", () => {
    expect(divide(6, 2)).toBe(3);
  });

});