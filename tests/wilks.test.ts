import { calculateWilksPoints } from "wilks";

describe("Testing original version", () => {
  test("male and metric unit", () => {
    const result = calculateWilksPoints("m", 89.9, 1022.5, "metric", false);
    expect(result).toBe(653.13);
  });

  test("male and imperial unit", () => {
    const result = calculateWilksPoints("m", 198.2, 2254.2, "imperial", false);
    expect(result).toBe(653.13);
  });

  test("female and metric unit", () => {
    const result = calculateWilksPoints("f", 84.4, 702.5, "metric", false);
    expect(result).toBe(624.97);
  });

  test("female and imperial unit", () => {
    const result = calculateWilksPoints("f", 186.1, 1548.7, "imperial", false);
    expect(result).toBe(624.97);
  });
});

describe("Testing 2020 version", () => {
  test("male and metric unit", () => {
    const result = calculateWilksPoints("m", 89.9, 1022.5, "metric", true);
    expect(result).toBe(784.7);
  });

  test("male and imperial unit", () => {
    const result = calculateWilksPoints("m", 198.2, 2254.2, "imperial", true);
    expect(result).toBe(784.7);
  });

  test("female and metric unit", () => {
    const result = calculateWilksPoints("f", 84.4, 702.5, "metric", true);
    expect(result).toBe(778.82);
  });

  test("female and imperial unit", () => {
    const result = calculateWilksPoints("f", 186.1, 1548.7, "imperial", true);
    expect(result).toBe(778.82);
  });
});
