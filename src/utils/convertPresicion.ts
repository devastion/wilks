import { imperialConvertion } from "../constants";

export function convertPresicion(
  num: number,
  precision: number,
  isImperial = false,
) {
  const result = isImperial
    ? parseFloat(num.toFixed(precision)) / imperialConvertion
    : num;
  return parseFloat(result.toFixed(precision));
}
