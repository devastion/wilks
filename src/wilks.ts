import { femaleValues, maleValues } from "./constants.js";
import { calculateCoefficient, convertImperialToMetric } from "./helpers.js";

/**
 * Calculate wilks score.
 *
 * @export
 * @param {("m" | "f")} gender
 * @param {number} bodyWeight
 * @param {number} total
 * @param {("metric" | "imperial")} [unit="metric"]
 * @return {number}
 *
 * @example
 *
 *  calculateWilks("f", 53.2, 352.5) // 431.73 metric units by default
 *  calculateWilks("m", 204.6, 2226.6, "imperial") // 635.09
 */
export function calculateWilks(
  gender: "m" | "f", bodyWeight: number, total: number, unit: "metric" | "imperial" = "metric",
): number {
  const metricTotal = unit === "metric"
    ? total
    : convertImperialToMetric(total);
  const metricBodyWeight = unit === "metric"
    ? bodyWeight
    : convertImperialToMetric(bodyWeight);
  const coefficient = calculateCoefficient(
    gender, metricBodyWeight, maleValues, femaleValues,
  );
  const wilks = metricTotal * (500 / coefficient);

  return parseFloat(wilks.toFixed(2));
}
