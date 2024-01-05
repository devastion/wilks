import { calculateCoefficient } from "../../utils/calculateCoefficients";
import { imperial } from "../../constants/imperial";
export function calculateWilksPoints(
  gender: Gender,
  bodyWeight: number,
  total: number,
  unitType: Unit = "metric",
  isNewVersion = false,
) {
  const bodyWeightToKG =
    unitType === "imperial"
      ? Number((bodyWeight /= imperial).toFixed(1))
      : Number(bodyWeight.toFixed(1));

  const totalToKG =
    unitType === "imperial"
      ? Number((total /= imperial).toFixed(1))
      : Number(total.toFixed(1));

  const result =
    Number(totalToKG) *
    calculateCoefficient(gender, Number(bodyWeightToKG), isNewVersion);

  return Number(result.toFixed(2));
}
