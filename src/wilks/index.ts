import { calculateWilksCoefficient, validateWilksInput } from "./helpers.ts";
import { lbsToKilos, roundToDecimal } from "../utils.ts";

import type { Total, WilksInput, SBD } from "./types.ts";

export function wilks(input: WilksInput, use2020Formula = false): number {
  validateWilksInput(input);
  const { gender, bodyweight, unit, ...rest } = input;
  const getTotal = (rest: Total | SBD): number => {
    if ("total" in rest) return rest.total;
    return Object.values(rest).reduce((a, b) => a + b, 0);
  };
  const coefficient = calculateWilksCoefficient({ gender, bodyweight, unit }, use2020Formula);
  const total = getTotal(rest);
  const totalInKgs = unit === "lb" ? lbsToKilos(total) : total;

  const wilksScore = totalInKgs * ((use2020Formula ? 600 : 500) / coefficient);

  return roundToDecimal(wilksScore, 2);
}

export * from "./constants.ts";
export * from "./helpers.ts";
export * from "./types.ts";
