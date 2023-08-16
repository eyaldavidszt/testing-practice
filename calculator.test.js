import Calculator from "./calculator";

test("adding works", () => {
  expect(Calculator().add(3, 7)).toBe(10);
});

test("subtracting works", () => {
  expect(Calculator().subtract(3, 7)).toBe(-4);
});

test("subtracting works", () => {
  expect(Calculator().subtract(7, 3)).toBe(4);
});

test("multiplying normal numbers works", () => {
  expect(Calculator().multiply(3, 7)).toBe(21);
});

test("dividing normal numbers works", () => {
  expect(Calculator().divide(8, 2)).toBe(4);
});

test("dividing normal numbers works", () => {
  expect(Calculator().divide(2, 8)).toBe(0.25);
});

test("dividing normal numbers works", () => {
  expect(Calculator().divide(3, 8)).toBe(0.375);
});
