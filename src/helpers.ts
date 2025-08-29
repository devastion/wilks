import { coefficients } from "./constants.ts";

import type { Lifter, Total, SBD, Unit, Formulas, Competition, OneRepMaxFormula } from "./types.ts";

export function roundToDecimal(input: number, decimal: number): number {
  const factor = Math.pow(10, decimal);
  return Math.round(input * factor) / factor;
}

export function convertWeight(weight: number, unit: Unit, decimal = 1): number {
  return roundToDecimal(unit === "lb" ? weight * 0.45359237 : weight, decimal);
}

export function getTotal(input: Total | SBD): number {
  if ("total" in input) return input.total;
  return Object.values(input).reduce((a, b) => a + b, 0);
};

export function calculateCoefficient(input: Lifter, formula: Exclude<Formulas, "ipf" | "ipfgl">) {
  const { gender, bodyweight, unit } = input;
  const coefficient = coefficients[formula][gender];
  const bw = convertWeight(bodyweight, unit);

  return coefficient.reduce((acc, curr, idx) => {
    return idx === 0
      ? acc + curr
      : acc + (curr * Math.pow(bw, idx));
  }, 0);
}

export function validateInput(input: Lifter & Partial<Total & SBD>) {
  const { bodyweight, gender, unit, total, squat, bench, deadlift } = input;
  const errors: string[] = [];

  const isValidNumber = (value: unknown) => typeof value === "number" && value > 0;
  const isValidGender = (g: unknown) => g === "male" || g === "female";
  const isValidUnit = (u: unknown) => u === "kg" || u === "lb";

  if (!isValidNumber(bodyweight)) {
    errors.push("Bodyweight must be a number greater than 0.");
  }

  if (!isValidGender(gender)) {
    errors.push("Gender must be either 'male' or 'female'.");
  }

  if (!isValidUnit(unit)) {
    errors.push("Unit must be either 'kg' or 'lb'.");
  }

  const hasTotal = typeof total === "number";
  const hasLifts = squat !== undefined || bench !== undefined || deadlift !== undefined;

  if (hasTotal && hasLifts) {
    errors.push("Use either total or squat/bench/deadlift, not both.");
  }

  if (hasTotal && !isValidNumber(total)) {
    errors.push("Invalid total. Use a number greater than 0.");
  }

  if (!hasTotal) {
    if (!isValidNumber(squat)) errors.push("Invalid squat. Use a number greater than 0.");
    if (!isValidNumber(bench)) errors.push("Invalid bench. Use a number greater than 0.");
    if (!isValidNumber(deadlift)) errors.push("Invalid deadlift. Use a number greater than 0.");
  }

  if (errors.length) {
    throw new TypeError(errors.join(" "));
  }
}

export function validateCompetition(competition: Competition) {
  const validCompetitions = ["clpl", "clbp", "eqpl", "eqbp"];

  if (typeof competition !== "string" || !validCompetitions.includes(competition)) {
    throw new TypeError("Please enter valid competition (\"clpl\", \"clbp\", \"eqpl\", \"eqbp\")");
  }
}

export function validateOneRepMaxInput(weight: number, reps: number, formula: OneRepMaxFormula) {
  const errors: string[] = [];

  const isValidNumber = (value: unknown) => typeof value === "number" && value > 0;
  const validFormulas = ["brzycki", "epley", "lander", "lombardi", "oconner"];

  if (!isValidNumber(weight)) {
    errors.push("Weight is invalid. Please use positive numbers.");
  }

  if (!isValidNumber(reps)) {
    errors.push("Reps is invalid. Please use positive numbers.");
  }

  if (typeof formula !== "string" || !validFormulas.includes(formula)) {
    errors.push("Invalid formula. Please enter valid formula (\"brzycki\", \"epley\", \"lander\", \"lombardi\", \"oconner\").");
  }

  if (errors.length) {
    throw new TypeError(errors.join(" "));
  }
}
