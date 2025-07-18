import * as constants from "./constants.ts";
import { lbsToKilos } from "../utils.ts";

import type { Lifter, Total, SBD } from "./types.ts";

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

export function validateWilksInput(input: Lifter & Partial<Total & SBD>) {
  const { bodyweight, gender, unit, total, squat, bench, deadlift } = input;
  const errors: string[] = [];

  const isValidNumber = (value: unknown) => typeof value === "number" && value > 0;
  const isValidGender = (g: unknown) => g === "m" || g === "f";
  const isValidUnit = (u: unknown) => u === "kg" || u === "lb";

  if (!isValidNumber(bodyweight)) {
    errors.push("Bodyweight must be a number greater than 0.");
  }

  if (!isValidGender(gender)) {
    errors.push("Gender must be either 'm' or 'f'.");
  }

  if (!isValidUnit(unit)) {
    errors.push("Unit must be either 'kg' or 'lb'.");
  }

  const hasTotal = typeof total === "number";
  const hasLifts = squat !== undefined || bench !== undefined || deadlift !== undefined;

  if (hasTotal && hasLifts) {
    errors.push("Use either total or squat/bench/deadlift, not both.");
  }

  if (hasTotal && !isValidNumber(total)) {
    errors.push("Invalid total. Use a number greater than 0.");
  }

  if (!hasTotal) {
    if (!isValidNumber(squat)) errors.push("Invalid squat. Use a number greater than 0.");
    if (!isValidNumber(bench)) errors.push("Invalid bench. Use a number greater than 0.");
    if (!isValidNumber(deadlift)) errors.push("Invalid deadlift. Use a number greater than 0.");
  }

  if (errors.length) {
    throw new Error(errors.join(" "));
  }
}
