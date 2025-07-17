import * as constants from "./constants.ts";
import { lbsToKilos } from "../utils.ts";

import type { Lifter } from "./types.ts";

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
