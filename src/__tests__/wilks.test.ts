import { strict as assert } from "node:assert";
import { test } from "node:test";

import { wilks } from "../index.ts";

import type { WilksInput } from "../wilks/index.ts";

const samples: [WilksInput, number][] = [
  [{ bodyweight: 56, total: 612.5, gender: "f", unit: "kg" }, 720.67],
  [{ bodyweight: 123.4, total: 1350.3, gender: "f", unit: "lb" }, 720.67],
  [{ bodyweight: 72.4, squat: 255, bench: 142.5, deadlift: 291.5, gender: "f", unit: "kg" }, 670.03],
  [{ bodyweight: 55.6, total: 530, gender: "f", unit: "kg" }, 627.12],
  [{ bodyweight: 120.4, total: 1200, gender: "m", unit: "kg" }, 689.38],
  [{ bodyweight: 265.5, total: 2645.5, gender: "m", unit: "lb" }, 689.38],
  [{ bodyweight: 100, squat: 416, bench: 235, deadlift: 415, gender: "m", unit: "kg" }, 648.76],
  [{ bodyweight: 121.9, total: 1085, gender: "m", unit: "kg" }, 621.58],
];

const samples2020: [WilksInput, number][] = [
  [{ bodyweight: 56, total: 612.5, gender: "f", unit: "kg" }, 847.27],
  [{ bodyweight: 121.9, total: 1085, gender: "m", unit: "kg" }, 736.18],
];

function generateTestName(input: WilksInput): string {
  if ("total" in input) {
    return `Calculating wilks for ${input.gender} with ${input.total} total at ${input.bodyweight} using ${input.unit} units`;
  }

  return `Calculating wilks for ${input.gender} with S:${input.squat} B:${input.bench} D:${input.deadlift} at ${input.bodyweight} using ${input.unit} units`;
}

test("Wilks functions with male and female samples", () => {
  samples.forEach(([input, expected]) => {
    test(generateTestName(input), () => {
      assert.strictEqual(wilks(input, false), expected);
    });
  });
});

test("Wilks 2020 functions with male and female samples", () => {
  samples2020.forEach(([input, expected]) => {
    test(generateTestName(input), () => {
      assert.strictEqual(wilks(input, true), expected);
    });
  });
});
