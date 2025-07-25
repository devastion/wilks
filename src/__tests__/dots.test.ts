import { strict as assert } from "node:assert";
import { test } from "node:test";

import { dots } from "../index.ts";
import { generateTestName } from "./utils.ts";

import type { Input } from "../types.ts";

const samples: [Input, number][] = [
  [{ bodyweight: 56, total: 612.5, gender: "female", unit: "kg" }, 709.96],
  [{ bodyweight: 123.4, total: 1350.3, gender: "female", unit: "lb" }, 709.96],
  [{ bodyweight: 72.4, squat: 255, bench: 142.5, deadlift: 291.5, gender: "female", unit: "kg" }, 683.9],
  [{ bodyweight: 55.6, total: 530, gender: "female", unit: "kg" }, 617.26],
  [{ bodyweight: 120.4, total: 1200, gender: "male", unit: "kg" }, 688.41],
  [{ bodyweight: 265.5, total: 2645.5, gender: "male", unit: "lb" }, 688.41],
  [{ bodyweight: 100, squat: 416, bench: 235, deadlift: 415, gender: "male", unit: "kg" }, 656.14],
  [{ bodyweight: 121.9, total: 1085, gender: "male", unit: "kg" }, 619.91],
  [{ bodyweight: 86.2, total: 860, gender: "male", unit: "kg" }, 568.66],
] as const;

test("Dots function with male and female samples", () => {
  samples.forEach(([input, expected]) => {
    test(generateTestName(input, expected, "dots"), () => {
      assert.strictEqual(dots(input), expected);
    });
  });
});

const samplesError = [
  [
    { bodyweight: 56, total: 612.5, gender: "female", unit: "lbs" },
    { name: "TypeError", message: "Unit must be either 'kg' or 'lb'." },
  ],
  [
    { bodyweight: 56, total: 612.5, gender: "fm", unit: "lb" },
    { name: "TypeError", message: "Gender must be either 'male' or 'female'." },
  ],
  [
    { bodyweight: 56, total: 612.5, gender: "fm", unit: "lb", bench: 123 },
    { name: "TypeError", message: "Gender must be either 'male' or 'female'. Use either total or squat/bench/deadlift, not both." },
  ],
  [
    { bodyweight: -56, total: 612.5, gender: "female", unit: "lb" },
    { name: "TypeError", message: "Bodyweight must be a number greater than 0." },
  ],
] as const;

test("Dots function throws error when invalid input", () => {
  samplesError.forEach(([input, expected]) => {
    test(`Throw error with message ${expected.message}`, () => {
      assert.throws(() => {
        // @ts-expect-error test wrong input validation
        dots(input);
      },
      expected);
    });
  });
});
