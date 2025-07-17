export function roundToDecimal(input: number, decimal: number): number {
  const factor = Math.pow(10, decimal);
  return Math.round(input * factor) / factor;
}

export function lbsToKilos(lbs: number, roundDecimal = 1): number {
  return roundToDecimal((lbs * 0.45359237), roundDecimal);
}
