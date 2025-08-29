export type SBD = { squat: number; bench: number; deadlift: number };
export type Total = { total: number };
export type Unit = "kg" | "lb";
export type Gender = "male" | "female";
export type Lifter = { bodyweight: number; gender: Gender; unit: Unit };
export type Formulas = "wilks" | "wilks2020" | "dots" | "ipf" | "ipfgl";
export type Competition = "clpl" | "clbp" | "eqpl" | "eqbp";

export type Input = (Lifter & Total) | (Lifter & SBD);

export type OneRepMaxFormula = "brzycki" | "epley" | "lander" | "lombardi" | "oconner";
export type OneRepMaxInput = {
  weight: number;
  reps: number;
  formula: OneRepMaxFormula;
  round: number;
};
