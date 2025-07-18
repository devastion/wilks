import { strict as assert } from "node:assert";
import { test } from "node:test";

import { convertWeight, roundToDecimal } from "../helpers.ts";

const convertWeightSamples: [number, number][] = [
  [163.1, 74],
  [265.5, 120.4],
  [119.9, 54.4],
  [147.6, 67],
] as const;

test("Test lbsToKilos utility function", () => {
  convertWeightSamples.forEach(([input, expected]) => {
    test(`${input} lbs should convert to ${expected}kgs`, () => {
      assert.strictEqual(convertWeight(input, "lb"), expected);
    });
  });
});

const roundToDecimalSamples: [[number, number], number][] = [
  [[123.456, 2], 123.46],
  [[100.456, 2], 100.46],
  [[100.056, 2], 100.06],
  [[-123.000, 2], -123.00],
] as const;

test("Test roundToDecimal utility function", () => {
  roundToDecimalSamples.forEach(([input, expected]) => {
    test(`Round ${input} to ${expected}`, () => {
      const [num, decimal] = input;
      assert.strictEqual(roundToDecimal(num, decimal), expected);
    });
  });
});
