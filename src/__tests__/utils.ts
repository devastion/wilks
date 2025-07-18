import type { Input } from "../types.ts";

export function generateTestName(input: Input, expected: number, name: string): string {
  if ("total" in input) {
    return `Calculating ${name} for ${input.gender} with ${input.total} total at ${input.bodyweight} using ${input.unit} (${expected})`;
  }

  return `Calculating ${name} for ${input.gender} with S:${input.squat} B:${input.bench} D:${input.deadlift} at ${input.bodyweight} using ${input.unit} units (${expected})`;
}
