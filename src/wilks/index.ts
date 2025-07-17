import { calculateWilksCoefficient, validateWilksInput } from "./helpers.ts";
import { lbsToKilos, roundToDecimal } from "../utils.ts";

import type { WilksInput } from "./types.ts";

export function wilks(input: WilksInput, use2020Formula = false): number {
  validateWilksInput(input);

  const { gender, bodyweight, unit, total, ...rest } = input;
  const coefficient = calculateWilksCoefficient({ gender, bodyweight, unit }, use2020Formula);
  const totalSum = total ?? Object.values(rest).reduce((a, b) => a + b, 0);
  const totalInKgs = unit === "lb" ? lbsToKilos(totalSum) : totalSum;

  const wilksScore = totalInKgs * ((use2020Formula ? 600 : 500) / coefficient);

  return roundToDecimal(wilksScore, 2);
}

export * from "./constants.ts";
export * from "./helpers.ts";
export * from "./types.ts";
