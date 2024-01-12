import {
  femaleValues,
  femaleValuesUpdated,
  maleValues,
  maleValuesUpdated,
} from "../constants";

export function calculateCoefficient(
  gender: "m" | "f",
  bodyWeight: number,
  updatedVersion = false,
) {
  let coefficient = 0;
  let values;

  if (updatedVersion)
    values = gender === "m" ? maleValuesUpdated : femaleValuesUpdated;
  else values = gender === "m" ? maleValues : femaleValues;

  for (const [idx, val] of values.entries()) {
    coefficient += idx === 0 ? val : val * Math.pow(bodyWeight, idx);
  }

  const result = updatedVersion ? 600 / coefficient : 500 / coefficient;

  return result;
}
