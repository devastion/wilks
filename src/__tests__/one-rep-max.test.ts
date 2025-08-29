import { strict as assert } from "node:assert";
import { test } from "node:test";

import { oneRepMax } from "../index.ts";

import type { OneRepMaxInput } from "../types.ts";

const samples: [OneRepMaxInput, number][] = [
  [{ weight: 100, reps: 10, formula: "brzycki", round: 0 }, 133],
  [{ weight: 100, reps: 10, formula: "brzycki", round: 2 }, 133.33],
  [{ weight: 100, reps: 10, formula: "epley", round: 0 }, 133],
  [{ weight: 100, reps: 10, formula: "lander", round: 0 }, 134],
  [{ weight: 100, reps: 10, formula: "lombardi", round: 0 }, 126],
  [{ weight: 100, reps: 10, formula: "oconner", round: 0 }, 125],
] as const;

test("1RM tests", () => {
  samples.forEach(([input, expected]) => {
    const { weight, reps, formula, round } = input;
    test(`Weight: ${weight}, Reps: ${reps}, Formula: ${formula}, Round: ${round}`, () => {
      assert.strictEqual(oneRepMax(weight, reps, formula, round), expected);
    });
  });
});

const samplesError: [OneRepMaxInput, TypeError][] = [
  [
    { weight: -100, reps: 10, formula: "brzycki", round: 0 },
    { name: "TypeError", message: "Weight is invalid. Please use positive numbers." },
  ],
  [
    { weight: 100, reps: 0, formula: "brzycki", round: 0 },
    { name: "TypeError", message: "Reps is invalid. Please use positive numbers." },
  ],
] as const;

test("OneRepMax function validation input test", () => {
  samplesError.forEach(([input, expected]) => {
    const { weight, reps, formula, round } = input;
    test(`Throw error with message ${expected.message}`, () => {
      assert.throws(() => {
        oneRepMax(weight, reps, formula, round);
      },
      {
        name: expected.name,
        message: expected.message,
      });
    });
  });
});
