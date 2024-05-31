/**
 * Calculate coefficient. Bodyweight unit type can be metric or
 * imperial.
 *
 * @export
 * @param {("m" | "f")} gender
 * @param {number} bodyWeight
 * @param {readonly number[]} maleValues
 * @param {readonly number[]} femaleValues
 * @return {number}
 *
 * @example
 *
 *    calculateCoefficient("m", 100, maleValues, femaleValues) // kilograms
 *    calculateCoefficient("f", 123, maleValues, femaleValues) // pounds
 */
export function calculateCoefficient(
  gender: "m" | "f", bodyWeight: number, maleValues: readonly number[], femaleValues: readonly number[],
): number {
  const values = gender === "m"
    ? maleValues
    : femaleValues;

  return values.reduce((
    accumulator, current, index,
  ) => {
    return index === 0
      ? accumulator + current
      : accumulator + (current * Math.pow(bodyWeight, index));
  }, 0);
}

/**
 * Converts imperial to metric unit.
 *
 * @export
 * @param {number} lb
 * @return {number}
 *
 * @example
 *
 *  convertImperialToMetric(220) // 99.7903...
 */
export function convertImperialToMetric(lb: number): number {
  return lb / 2.20462262185;
}
