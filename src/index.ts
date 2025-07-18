import { calculateCoefficient, convertWeight, roundToDecimal, validateInput } from "./helpers.ts";

import type { Input, SBD, Total } from "./types.ts";

const getTotal = (input: Total | SBD): number => {
  if ("total" in input) return input.total;
  return Object.values(input).reduce((a, b) => a + b, 0);
};

export function wilks(input: Input): number {
  validateInput(input);
  const { gender, bodyweight, unit, ...rest } = input;
  const coefficient = calculateCoefficient({ gender, bodyweight, unit }, "wilks");
  const total = convertWeight(getTotal(rest), unit);
  const score = total * (500 / coefficient);

  return roundToDecimal(score, 2);
}

export function wilks2020(input: Input): number {
  validateInput(input);
  const { gender, bodyweight, unit, ...rest } = input;
  const coefficient = calculateCoefficient({ gender, bodyweight, unit }, "wilks2020");
  const total = convertWeight(getTotal(rest), unit);
  const score = total * (600 / coefficient);

  return roundToDecimal(score, 2);
}

export function dots(input: Input): number {
  validateInput(input);
  const { gender, bodyweight, unit, ...rest } = input;
  const coefficient = calculateCoefficient({ gender, bodyweight, unit }, "dots");
  const total = convertWeight(getTotal(rest), unit);
  const score = total * (500 / coefficient);

  return roundToDecimal(score, 2);
}
