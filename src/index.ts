import { coefficients, oneRepMaxFormulas } from "./constants.ts";
import { calculateCoefficient, convertWeight, roundToDecimal, validateCompetition, validateInput, validateOneRepMaxInput } from "./helpers.ts";

import type { Competition, Input, SBD, Total, OneRepMaxInput } from "./types.ts";

const getTotal = (input: Total | SBD): number => {
  if ("total" in input) return input.total;
  return Object.values(input).reduce((a, b) => a + b, 0);
};

export function wilks(input: Input): number {
  validateInput(input);
  const { gender, bodyweight, unit, ...rest } = input;
  const coefficient = calculateCoefficient({ gender, bodyweight, unit }, "wilks");
  const total = convertWeight(getTotal(rest), unit);
  const score = total * (500 / coefficient);

  return roundToDecimal(score, 2);
}

export function wilks2020(input: Input): number {
  validateInput(input);
  const { gender, bodyweight, unit, ...rest } = input;
  const coefficient = calculateCoefficient({ gender, bodyweight, unit }, "wilks2020");
  const total = convertWeight(getTotal(rest), unit);
  const score = total * (600 / coefficient);

  return roundToDecimal(score, 2);
}

export function dots(input: Input): number {
  validateInput(input);
  const { gender, bodyweight, unit, ...rest } = input;
  const coefficient = calculateCoefficient({ gender, bodyweight, unit }, "dots");
  const total = convertWeight(getTotal(rest), unit);
  const score = total * (500 / coefficient);

  return roundToDecimal(score, 2);
}

export function ipf(input: Input, competition: Competition) {
  validateInput(input);
  validateCompetition(competition);
  const { gender, bodyweight, unit, ...rest } = input;
  const total = convertWeight(getTotal(rest), unit);
  const bw = convertWeight(bodyweight, unit);
  const lgbw = Math.log(bw);
  const coefficient = coefficients.ipf[gender][competition];
  const score = 500 + 100 * ((total - (coefficient[0] * lgbw - coefficient[1]))) / (coefficient[2] * lgbw - coefficient[3]);

  return roundToDecimal(score, 2);
}

export function ipfgl(input: Input, competition: Competition) {
  validateInput(input);
  validateCompetition(competition);
  const { gender, bodyweight, unit, ...rest } = input;
  const total = convertWeight(getTotal(rest), unit);
  const bw = convertWeight(bodyweight, unit);
  const coefficient = coefficients.ipfgl[gender][competition];
  const score = total * (100 / (coefficient[0] - coefficient[1] * Math.pow(Math.E, (-coefficient[2] * bw))));

  return roundToDecimal(score, 2);
}

export function oneRepMax(weight: OneRepMaxInput["weight"], reps: OneRepMaxInput["reps"], formula: OneRepMaxInput["formula"], round: OneRepMaxInput["round"] = 0) {
  validateOneRepMaxInput(weight, reps, formula);

  return roundToDecimal(oneRepMaxFormulas[formula](weight, reps), round);
}
