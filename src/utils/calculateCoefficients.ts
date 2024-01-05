import {
  maleValues,
  femaleValues,
  maleValues2020,
  femaleValues2020,
} from "../constants/coefficients";
import type { Gender } from "../types/gender";

export function calculateCoefficient(
  gender: Gender,
  bodyweight: number,
  isNewVersion = false,
) {
  let coefficient = 0;
  let values;

  if (!isNewVersion) values = gender === "m" ? maleValues : femaleValues;
  else values = gender === "m" ? maleValues2020 : femaleValues2020;

  for (const [idx, val] of values.entries()) {
    coefficient += idx === 0 ? val : val * Math.pow(bodyweight, idx);
  }

  const result = !isNewVersion ? 500 / coefficient : 600 / coefficient;

  return result;
}
