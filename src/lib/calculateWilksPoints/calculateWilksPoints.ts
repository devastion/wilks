import { calculateCoefficient, convertPresicion } from "../../utils";

import type { Gender, Unit } from "../../types";

export function calculateWilksPoints(
  gender: Gender,
  bodyWeight: number,
  total: number,
  unit: Unit,
  updatedVersion = false,
) {
  const bodyWeightParsed = convertPresicion(bodyWeight, 1, unit === "imperial");
  const totalParsed = convertPresicion(total, 1, unit === "imperial");

  const wilksPoints =
    totalParsed *
    calculateCoefficient(gender, bodyWeightParsed, updatedVersion);

  return convertPresicion(wilksPoints, 2);
}
