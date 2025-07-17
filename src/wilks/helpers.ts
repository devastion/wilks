import * as constants from "./constants.ts";
import { lbsToKilos } from "../utils.ts";

import type { Lifter, WilksInput } from "./types.ts";

export function calculateWilksCoefficient(input: Lifter, use2020Formula = false): number {
  const { gender, bodyweight, unit } = input;
  const coefficient = {
    m: use2020Formula ? constants.maleCoefficient2020 : constants.maleCoefficient,
    f: use2020Formula ? constants.femaleCoefficient2020 : constants.femaleCoefficient,
  };

  const bw = unit === "lb" ? lbsToKilos(bodyweight) : bodyweight;

  return coefficient[gender].reduce((acc, curr, idx) => {
    return idx === 0
      ? acc + curr
      : acc + (curr * Math.pow(bw, idx));
  }, 0);
}

export function validateWilksInput({ bodyweight, gender, unit, total, squat, bench, deadlift }: WilksInput) {
  if (typeof bodyweight !== "number" || bodyweight <= 0) {
    throw new Error("Bodyweight must be number greater than 0");
  }

  if (!["m", "f"].includes(gender)) {
    throw new Error("Gender must be either 'm' or 'f'");
  }

  if (!["kg", "lb"].includes(unit)) {
    throw new Error("Unit must be either 'kg' or 'lb'");
  }

  if (total && (squat || bench || deadlift)) {
    throw new Error("Use total or squat/bench/deadlift (not both)");
  }

  if (total && (typeof total !== "number" || total < 0)) {
    throw new Error("Invalid total. Use number greater than 0");
  }

  if (!total) {
    if (typeof squat !== "number" || squat < 0) {
      throw new Error("Invalid squat. Use number greater than 0");
    }

    if (typeof bench !== "number" || bench < 0) {
      throw new Error("Invalid bench. Use number greater than 0");
    }

    if (typeof deadlift !== "number" || deadlift < 0) {
      throw new Error("Invalid deadlift. Use number greater than 0");
    }
  }
}
