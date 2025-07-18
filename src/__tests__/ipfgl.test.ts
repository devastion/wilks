import { strict as assert } from "node:assert";
import { test } from "node:test";

import { ipfgl } from "../index.ts";
import { generateTestName } from "./utils.ts";

import type { Competition, Input } from "../types.ts";

const samples: [Input, Competition, number][] = [
  [{ bodyweight: 56, total: 612.5, gender: "female", unit: "kg" }, "clpl", 145.62],
  [{ bodyweight: 56, total: 155, gender: "female", unit: "kg" }, "clbp", 139.64],
  [{ bodyweight: 56, total: 612.5, gender: "female", unit: "kg" }, "eqpl", 118.73],
  [{ bodyweight: 56, total: 155, gender: "female", unit: "kg" }, "eqbp", 101.38],
  [{ bodyweight: 120.4, total: 1200, gender: "male", unit: "kg" }, "clpl", 139.29],
  [{ bodyweight: 120.4, total: 250, gender: "male", unit: "kg" }, "clbp", 105.32],
  [{ bodyweight: 120.4, total: 1200, gender: "male", unit: "kg" }, "eqpl", 115.83],
  [{ bodyweight: 120.4, total: 250, gender: "male", unit: "kg" }, "eqbp", 73.46],
  [{ bodyweight: 123.45, total: 1350.33, gender: "female", unit: "lb" }, "clpl", 145.62],
] as const;

test("Dots function with male and female samples", () => {
  samples.forEach(([input, competition, expected]) => {
    test(generateTestName(input, expected, `ipfgl (${competition})`), () => {
      assert.strictEqual(ipfgl(input, competition), expected);
    });
  });
});

const samplesError = [
  [
    { bodyweight: 56, total: 612.5, gender: "female", unit: "lb" },
    "clpr",
    { name: "TypeError", message: "Please enter valid competition (\"clpl\", \"clbp\", \"eqpl\", \"eqbp\")" },
  ],
  [
    { bodyweight: 56, total: 612.5, gender: "fm", unit: "lb" },
    "clpl",
    { name: "TypeError", message: "Gender must be either 'male' or 'female'." },
  ],
] as const;

test("Dots function throws error when invalid input", () => {
  samplesError.forEach(([input, competition, expected]) => {
    test(`Throw error with message ${expected.message}`, () => {
      assert.throws(() => {
        // @ts-expect-error test wrong input validation
        ipfgl(input, competition);
      },
      expected);
    });
  });
});
