import { strict as assert } from "node:assert";
import { test } from "node:test";

import { wilks, wilks2020 } from "../index.ts";
import { generateTestName } from "./utils.ts";

import type { Input } from "../types.ts";

const samples: [Input, number][] = [
  [{ bodyweight: 56, total: 612.5, gender: "female", unit: "kg" }, 720.67],
  [{ bodyweight: 123.4, total: 1350.3, gender: "female", unit: "lb" }, 720.67],
  [{ bodyweight: 72.4, squat: 255, bench: 142.5, deadlift: 291.5, gender: "female", unit: "kg" }, 670.03],
  [{ bodyweight: 55.6, total: 530, gender: "female", unit: "kg" }, 627.12],
  [{ bodyweight: 120.4, total: 1200, gender: "male", unit: "kg" }, 689.38],
  [{ bodyweight: 265.5, total: 2645.5, gender: "male", unit: "lb" }, 689.38],
  [{ bodyweight: 100, squat: 416, bench: 235, deadlift: 415, gender: "male", unit: "kg" }, 648.76],
  [{ bodyweight: 121.9, total: 1085, gender: "male", unit: "kg" }, 621.58],
] as const;

test("Wilks functions with male and female samples", () => {
  samples.forEach(([input, expected]) => {
    test(generateTestName(input, expected, "wilks"), () => {
      assert.strictEqual(wilks(input), expected);
    });
  });
});

const samples2020: [Input, number][] = [
  [{ bodyweight: 56, total: 612.5, gender: "female", unit: "kg" }, 847.27],
  [{ bodyweight: 121.9, total: 1085, gender: "male", unit: "kg" }, 736.18],
];

test("Wilks 2020 functions with male and female samples", () => {
  samples2020.forEach(([input, expected]) => {
    test(generateTestName(input, expected, "wilks2020"), () => {
      assert.strictEqual(wilks2020(input), expected);
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

test("Wilks function throws error when invalid input", () => {
  samplesError.forEach(([input, expected]) => {
    test(`Throw error with message ${expected.message}`, () => {
      assert.throws(() => {
        // @ts-expect-error test wrong input validation
        wilks(input, false);
      },
      expected);
    });
  });
});
