import { calculateCoefficient, convertPresicion } from "../../utils";

export function calculateWilksPoints(
  gender: "m" | "f",
  bodyWeight: number,
  total: number,
  unit: "metric" | "imperial",
  updatedVersion = false,
) {
  const bodyWeightParsed = convertPresicion(bodyWeight, 1, unit === "imperial");
  const totalParsed = convertPresicion(total, 1, unit === "imperial");

  const wilksPoints =
    totalParsed *
    calculateCoefficient(gender, bodyWeightParsed, updatedVersion);

  const result = convertPresicion(wilksPoints, 2);

  return result;
}
