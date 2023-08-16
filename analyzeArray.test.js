import analyzeArray from "./analyzeArray";

test("array average works", () => {
  expect(analyzeArray([0.1, 0.35]).average).toBeCloseTo(0.225);
});

test("array minimum works", () => {
  expect(analyzeArray([2, -1, 3, 4]).min).toBe(-1);
});

test("array maximum works", () => {
  expect(analyzeArray([2, -1, 3, 4]).max).toBe(4);
});

test("array maximum works", () => {
  expect(analyzeArray([-3, -1, -2, -4]).max).toBe(-1);
});

test("array length works", () => {
  expect(analyzeArray([-3, -1, -2, -4]).length).toBe(4);
});
