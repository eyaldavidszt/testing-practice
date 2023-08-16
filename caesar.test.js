import caesar from "./caesar";

test("single char works", () => {
  expect(caesar("a", 2)).toBe("c");
});

test("wrapping works", () => {
  expect(caesar("z", 1)).toBe("a");
});

test("negative wrapping works", () => {
  expect(caesar("a", -1)).toBe("z");
});
test("upper case char works", () => {
  expect(caesar("A", 2)).toBe("C");
});

test("upper case sentence works", () => {
  expect(caesar("ABCD EFG", 2)).toBe("CDEF GHI");
});

test("lower case sentence works", () => {
  expect(caesar("abcd efg", 2)).toBe("cdef ghi");
});

test("mixed case sentence works", () => {
  expect(caesar("ABCD efg", 2)).toBe("CDEF ghi");
});

test("sentence with punctuation works sentence works", () => {
  expect(caesar("ABCD, efg.", 2)).toBe("CDEF, ghi.");
});
