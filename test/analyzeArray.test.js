const analyzeArray = require("../src/analyzeArray");

it("find average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe(4);
  expect(analyzeArray([1, 2, 3, 4, 0])).toBe(5);
});

it("find min", () => {
  expect(analyzeArray([1, 2, 4, 20, -1])).toBe(-1);
});

it("find max", () => {
  expect(analyzeArray([1, 32, 4, 2, 4])).toBe(32);
});

it("find length", () => {
  expect(analyzeArray([1, 2, 4, 2])).toBe(4);
});
