import capitalize from "./capitalize";

test("bank returns Bank", () => {
  expect(capitalize("bank")).toBe("Bank");
});

test("joHn return JoHn", () => {
  expect(capitalize("joHn")).toBe("JoHn");
});

test("bOB return BOB", () => {
  expect(capitalize("bOB")).toBe("BOB");
});
