export type SBD = { squat: number; bench: number; deadlift: number };
export type Total = { total: number };
export type Unit = "kg" | "lb";
export type Gender = "male" | "female";
export type Lifter = { bodyweight: number; gender: Gender; unit: Unit };

export type Input = (Lifter & Total) | (Lifter & SBD);
